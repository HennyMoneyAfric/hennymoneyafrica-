// Sample data arrays
const musicData = [
  { title: "Africa Unite", platform: "Spotify", link: "https://open.spotify.com/" },
  { title: "Africa Unite", platform: "Apple Music", link: "https://music.apple.com/" },
  { title: "Africa Unite", platform: "YouTube", link: "https://www.youtube.com/" }
];

const tourData = [
  { location: "Burkina Faso", highlight: "Cultural Festivals & Hidden Gems" },
  { location: "Nigeria", highlight: "Music & City Tours" },
  { location: "Ghana", highlight: "Beach & Cultural Experiences" },
  { location: "South Africa", highlight: "Safari & City Tours" }
];

// Load music dynamically
const musicList = document.getElementById("music-list");
musicData.forEach(m => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${m.title}</strong> - <a href="${m.link}" target="_blank">${m.platform}</a>`;
  musicList.appendChild(div);
});

// Load tours dynamically
const tourList = document.getElementById("tour-list");
tourData.forEach(t => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${t.location}</strong>: ${t.highlight}`;
  tourList.appendChild(div);
});
