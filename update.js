// update.js
async function loadData() {
  // Fetch music
  const musicResponse = await fetch('music.json');
  const musicData = await musicResponse.json();

  // Fetch tours
  const toursResponse = await fetch('tours.json');
  const toursData = await toursResponse.json();

  // Music section
  const musicContainer = document.getElementById('music-section');
  musicData.music.forEach(song => {
    const div = document.createElement('div');
    div.className = "music-item";
    div.innerHTML = `
      <h3>${song.title}</h3>
      <ul>
        <li><a href="${song.platforms.spotify}" target="_blank">Spotify</a></li>
        <li><a href="${song.platforms.apple}" target="_blank">Apple Music</a></li>
        <li><a href="${song.platforms.youtube}" target="_blank">YouTube</a></li>
      </ul>
    `;
    musicContainer.appendChild(div);
  });

  // Tours section
  const toursContainer = document.getElementById('tour-section');
  toursData.tours.forEach(tour => {
    const div = document.createElement('div');
    div.className = "tour-item";
    div.innerHTML = `
      <h3>${tour.city}, ${tour.country}</h3>
      <ul>
        ${tour.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <a href="${tour.booking_url}" target="_blank" class="booking-btn">Book Now</a>
    `;
    toursContainer.appendChild(div);
  });
}

// Wait for page to load
document.addEventListener('DOMContentLoaded', loadData);
