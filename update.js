// update.js
// Auto-generates Music & Tour sections dynamically

const fs = require('fs');
const path = require('path');

// ====== Music Data ======
const musicData = [
  {
    title: "Africa Unite",
    links: {
      spotify: "https://open.spotify.com/",
      apple: "https://music.apple.com/",
      youtube: "https://www.youtube.com/"
    }
  },
  // Add more music releases here as needed
];

// ====== Tour Data ======
const tourData = [
  {
    title: "West Africa Tour",
    description: "Explore West Africa's top destinations",
    link: "https://calendly.com/hennymoneyafric/west-africa-tour"
  },
  {
    title: "30-Min Consultation",
    description: "Quick music & travel session",
    link: "https://calendly.com/hennymoneyafric/30min"
  },
  {
    title: "Multi-Day Africa Cultural Tour",
    description: "Deep dive into Africa's culture",
    link: "https://calendly.com/hennymoneyafric/multi-day-africa-cultural-tour"
  },
  {
    title: "Burkina Faso Tour",
    description: "Discover the beauty of Burkina Faso",
    link: "https://calendly.com/hennymoneyafric/burkina-faso-tour"
  },
  {
    title: "Music & Travel Consultation",
    description: "Plan your next adventure & release",
    link: "https://calendly.com/hennymoneyafric/music-travel-consultation"
  }
];

// ====== File Paths ======
const indexPath = path.join(__dirname, 'index.html');

// ====== Generate HTML Sections ======
function generateMusicHTML() {
  return musicData.map(m => {
    return `
      <div class="music-card">
        <h3>${m.title}</h3>
        <p>
          <a href="${m.links.spotify}" target="_blank">Spotify</a> |
          <a href="${m.links.apple}" target="_blank">Apple Music</a> |
          <a href="${m.links.youtube}" target="_blank">YouTube</a>
        </p>
      </div>
    `;
  }).join("\n");
}

function generateTourHTML() {
  return tourData.map(t => {
    return `
      <div class="tour-card">
        <h3>${t.title}</h3>
        <p>${t.description}</p>
        <a href="${t.link}" target="_blank" class="btn">Book Now</a>
      </div>
    `;
  }).join("\n");
}

// ====== Update index.html ======
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error("Failed to read index.html:", err);
    return;
  }

  let updated = data;

  // Replace Music Section
  updated = updated.replace(
    /<section id="music-section">[\s\S]*?<\/section>/,
    `<section id="music-section">
      <h2>Music Releases</h2>
      ${generateMusicHTML()}
    </section>`
  );

  // Replace Tour Section
  updated = updated.replace(
    /<section id="tour-section">[\s\S]*?<\/section>/,
    `<section id="tour-section">
      <h2>Tours & Experiences</h2>
      ${generateTourHTML()}
    </section>`
  );

  fs.writeFile(indexPath, updated, 'utf8', (err) => {
    if (err) {
      console.error("Failed to write index.html:", err);
    } else {
      console.log("index.html updated successfully!");
    }
  });
});
