import fs from 'fs';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Load existing JSON files
const musicData = JSON.parse(fs.readFileSync('music.json'));
const toursData = JSON.parse(fs.readFileSync('tours.json'));

async function updateMusic() {
  const prompt = `Generate 3 new African music releases including title, artist, and Spotify, Audiomax Music, YouTube links in JSON array format.`;
  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }]
  });
  const newSongs = JSON.parse(response.choices[0].message.content);
  const combined = [...musicData, ...newSongs];
  fs.writeFileSync('music.json', JSON.stringify(combined, null, 2));
}

async function updateTours() {
  const prompt = `Generate 2 new upcoming African tours with name, duration, and Calendly booking link in JSON array format.`;
  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }]
  });
  const newTours = JSON.parse(response.choices[0].message.content);
  const combined = [...toursData, ...newTours];
  fs.writeFileSync('tours.json', JSON.stringify(combined, null, 2));
}

(async () => {
  await updateMusic();
  await updateTours();
  console.log("Meta AI content update completed!");
})();
