import fs from 'fs';
import OpenAI from 'openai';

// ✅ Initialize OpenAI using GitHub secret
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Files
const MUSIC_FILE = './music.json';
const TOURS_FILE = './tours.json';

// Helper: read JSON file safely
function readJSON(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch (err) {
      console.error(`❌ Failed to parse ${filePath}:`, err);
      return [];
    }
  }
  return [];
}

// Helper: write JSON file safely
function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ Updated ${filePath}`);
  } catch (err) {
    console.error(`❌ Failed to write ${filePath}:`, err);
  }
}

// Generate new music entries
async function generateMusic() {
  console.log('🎵 Generating new music entries...');
  const existingMusic = readJSON(MUSIC_FILE);

  const prompt = `
Generate 2 new African music releases for HennyMoney Afric.
Each entry should include: title, artist, description, and streaming links (YouTube/Facebook).
Return output as valid JSON array.
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8
    });

    const newMusic = JSON.parse(response.choices[0].message.content);
    const updatedMusic = [...newMusic, ...existingMusic].slice(0, 10);
    writeJSON(MUSIC_FILE, updatedMusic);

  } catch (err) {
    console.error('❌ Error generating music:', err);
  }
}

// Generate new tour entries
async function generateTours() {
  console.log('✈️ Generating new tour entries...');
  const existingTours = readJSON(TOURS_FILE);

  const prompt = `
Generate 2 new African tour experiences for HennyMoney Afric.
Include: title, country, short description, booking link (Calendly or WhatsApp).
Return output as valid JSON array.
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8
    });

    const newTours = JSON.parse(response.choices[0].message.content);
    const updatedTours = [...newTours, ...existingTours].slice(0, 10);
    writeJSON(TOURS_FILE, updatedTours);

  } catch (err) {
    console.error('❌ Error generating tours:', err);
  }
}

// Run updates
(async function runUpdates() {
  console.log('🚀 Starting Weekly AI Update...');
  try {
    await generateMusic();
    await generateTours();
    console.log('🎉 Weekly AI update completed successfully!');
  } catch (err) {
    console.error('❌ Error during AI update:', err);
  }
})();
