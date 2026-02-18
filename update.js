// Load music.json and tours.json dynamically
async function loadJSON(file) {
  const response = await fetch(file);
  return await response.json();
}

function createMusicCard(track) {
  return `
    <div class="music-card">
      <h3>${track.title}</h3>
      <p>Artist: ${track.artist}</p>
      <p>Release: ${track.releaseDate}</p>
      <a href="${track.spotify}" target="_blank">Spotify</a> |
      <a href="${track.apple}" target="_blank">Apple Music</a> |
      <a href="${track.youtube}" target="_blank">YouTube</a>
    </div>
  `;
}

function createTourCard(tour) {
  return `
    <div class="tour-card">
      <h3>${tour.name}</h3>
      <p>Location: ${tour.location}</p>
      <p>Dates: ${tour.dates}</p>
      <p>${tour.description}</p>
      <a href="${tour.booking}" target="_blank" class="btn">Book Now</a>
    </div>
  `;
}

// Populate sections
async function updateSections() {
  const musicData = await loadJSON('music.json');
  const toursData = await loadJSON('tours.json');

  const musicContainer = document.getElementById('music-container');
  const tourContainer = document.getElementById('tour-container');

  musicContainer.innerHTML = musicData.map(createMusicCard).join('');
  tourContainer.innerHTML = toursData.map(createTourCard).join('');
}

document.addEventListener('DOMContentLoaded', updateSections);
