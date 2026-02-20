import fs from 'fs';
import OpenAI from 'openai';

// Initialize OpenAI with API key from GitHub secrets
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// JSON files
const MUSIC_FILE = './music.json';
const TOURS_FILE = './tours.json';

// Helper: read JSON file safely
function readJSON(filePath) {
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  return [];
}

// Helper: write JSON file
function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Generate new music entries
async function generateMusic() {
  const existingMusic = readJSON(MUSIC_FILE);

  const prompt = `
Generate 2 new African music releases for HennyMoney Afric.
Each entry should include: title, artist, description, and streaming links (YouTube/Facebook).
Return output as valid JSON array.
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.8
  });

  let newMusic = [];
  try {
    newMusic = JSON.parse(response.choices[0].message.content);
  } catch (err) {
    console.error('❌ Error parsing music JSON:', err);
  }

  const updatedMusic = [...newMusic, ...existingMusic].slice(0, 10);
  writeJSON(MUSIC_FILE, updatedMusic);
  console.log('✅ Music updated!');
}

// Generate new tour entries
async function generateTours() {
  const existingTours = readJSON(TOURS_FILE);

  const prompt = `
Generate 2 new African tour experiences for HennyMoney Afric.
Include: title, country, short description, booking link (Calendly or WhatsApp).
Return output as valid JSON array.
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.8
  });

  let newTours = [];
  try {
    newTours = JSON.parse(response.choices[0].message.content);
  } catch (err) {
    console.error('❌ Error parsing tours JSON:', err);
  }

  const updatedTours = [...newTours, ...existingTours].slice(0, 10);
  writeJSON(TOURS_FILE, updatedTours);
  console.log('✅ Tours updated!');
}

// Run updates
(async function runUpdates() {
  try {
    await generateMusic();
    await generateTours();
    console.log('🎉 Weekly AI update completed successfully!');
  } catch (err) {
    console.error('❌ Error during AI update:', err);
  }
})();
