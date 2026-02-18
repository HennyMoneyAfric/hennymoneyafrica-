// Music Data
const music = [
  {
    title: "Africa Unite",
    platform: [
      { name: "Spotify", link: "https://open.spotify.com/" },
      { name: "Apple Music", link: "https://music.apple.com/" },
      { name: "YouTube", link: "https://www.youtube.com/" }
    ]
  }
  // Add more music objects here as needed
];

const musicContainer = document.getElementById("music-cards");

music.forEach(track => {
  const card = document.createElement("div");
  card.className = "music-card";
  let platforms = track.platform.map(p => `<a href="${p.link}" target="_blank" class="btn">${p.name}</a>`).join(' ');
  card.innerHTML = `
    <h3>${track.title}</h3>
    ${platforms}
  `;
  musicContainer.appendChild(card);
});

// Tour Data
const tours = [
  {
    name: "West Africa Adventure Tour",
    description: "Explore hidden gems, music, and culture across West Africa.",
    link: "https://calendly.com/hennymoneyafric/west-africa-tour"
  },
  {
    name: "30-Min Consultation",
    description: "Quick consultation for music & travel planning.",
    link: "https://calendly.com/hennymoneyafric/30min"
  },
  {
    name: "Multi-Day Africa Cultural Tour",
    description: "Experience multiple countries, music festivals, and cultural events.",
    link: "https://calendly.com/hennymoneyafric/multi-day-africa-cultural-tour"
  },
  {
    name: "Burkina Faso Heritage Tour",
    description: "Discover Burkina Faso’s culture, music, and hidden destinations.",
    link: "https://calendly.com/hennymoneyafric/burkina-faso-tour"
  },
  {
    name: "Music & Travel Consultation",
    description: "Personalized advice for music releases and travel plans.",
    link: "https://calendly.com/hennymoneyafric/music-travel-consultation"
  }
];

const tourContainer = document.getElementById("tour-cards");

tours.forEach(tour => {
  const card = document.createElement("div");
  card.className = "tour-card";
  card.innerHTML = `
    <h3>${tour.name}</h3>
    <p>${tour.description}</p>
    <a href="${tour.link}" target="_blank" class="btn">Book Now</a>
  `;
  tourContainer.appendChild(card);
});
