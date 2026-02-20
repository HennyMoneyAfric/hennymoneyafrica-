import fs from 'fs';
import OpenAI from 'openai';
import axios from 'axios';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const platforms = [
  { name: 'Facebook', url: 'https://www.facebook.com/hennymoneyafrica' },
  { name: 'Instagram', url: 'https://www.instagram.com/hennymoneyafricempire' },
  { name: 'YouTube', url: 'https://youtube.com/@hennymoneyafric?si=CkSzSt9fnxB-d075' },
  { name: 'WhatsApp', url: 'https://wa.me/+22654852525' }
];

async function generatePost() {
  const prompt = `
Create a short, engaging, weekly social media post for HennyMoney Afric.
Include African music, culture, travel, and connect with users to check our music & tours.
Format output as JSON: { "platform": "text" } for each platform.
Friendly, inspiring, concise.
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.8
  });

  let posts = {};
  try {
    posts = JSON.parse(response.choices[0].message.content);
  } catch (err) {
    console.error('Error parsing JSON:', err);
    return;
  }

  fs.writeFileSync('social-post.json', JSON.stringify(posts, null, 2));
  console.log('✅ Weekly social media post generated!');
}

generatePost();
