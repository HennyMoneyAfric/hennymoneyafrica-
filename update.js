// ✅ Music Data
const musicData = [
  { title: "Africa Unite", platform: ["Spotify","Apple Music","YouTube"], link: ["https://open.spotify.com/","https://music.apple.com/","https://www.youtube.com/"] },
  // Add more music projects here
];

// Render Music Cards
const musicContainer = document.getElementById("music-container");
musicData.forEach(track => {
  const card = document.createElement("div");
  card.className = "music-card";
  card.innerHTML = `<h3>${track.title}</h3>
    ${track.platform.map((p,i)=>`<a href="${track.link[i]}" target="_blank">${p}</a>`).join(" | ")}`;
  musicContainer.appendChild(card);
});

// ✅ Tour Data
const tourData = [
  { country: "Burkina Faso", description: "Explore Ouagadougou & surrounding cultural hubs" },
  { country: "Nigeria", description: "Discover Lagos, Abuja & vibrant music festivals" },
  { country: "Ghana", description: "Experience Accra, Kumasi & coastal heritage" },
  // Add more tours here
];

// Render Tour Cards
const tourContainer = document.getElementById("tour-container");
tourData.forEach(tour => {
  const card = document.createElement("div");
  card.className = "tour-card";
  card.innerHTML = `<h3>${tour.country}</h3><p>${tour.description}</p>`;
  tourContainer.appendChild(card);
});
