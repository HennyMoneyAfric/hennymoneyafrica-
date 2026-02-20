// update.js

// Load Music dynamically
async function loadMusic() {
  try {
    const res = await fetch('music.json');
    const musicData = await res.json();
    const musicContainer = document.getElementById('music-container');
    musicContainer.innerHTML = '';

    musicData.forEach(song => {
      const card = document.createElement('div');
      card.className = 'music-card';
      card.innerHTML = `
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
        <a class="btn" href="${song.link}" target="_blank">Listen</a>
      `;
      musicContainer.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading music:', err);
  }
}

// Load Tours dynamically
async function loadTours() {
  try {
    const res = await fetch('tours.json');
    const toursData = await res.json();
    const tourContainer = document.getElementById('tour-container');
    tourContainer.innerHTML = '';

    toursData.forEach(tour => {
      const card = document.createElement('div');
      card.className = 'tour-card';
      card.innerHTML = `
        <h3>${tour.title}</h3>
        <p>Location: ${tour.location}</p>
        <p>Dates: ${tour.dates}</p>
        <a class="btn" href="${tour.booking}" target="_blank">Book Now</a>
      `;
      tourContainer.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading tours:', err);
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  loadMusic();
  loadTours();
});
