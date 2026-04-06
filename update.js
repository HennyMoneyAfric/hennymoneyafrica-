// Load music data
async function loadMusic() {
  try {
    const response = await fetch('music.json');
    const musicData = await response.json();
    const container = document.getElementById('music-container');
    
    musicData.forEach(song => {
      const card = document.createElement('div');
      card.className = 'music-card';
      card.innerHTML = `
        <h3>${song.title}</h3>
        <p><strong>${song.artist}</strong></p>
        <a href="${song.link}" class="btn" target="_blank">Listen Now</a>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading music:', error);
  }
}

// Load tour data
async function loadTours() {
  try {
    const response = await fetch('tours.json');
    const toursData = await response.json();
    const container = document.getElementById('tour-container');
    
    toursData.forEach(tour => {
      const card = document.createElement('div');
      card.className = 'tour-card';
      card.innerHTML = `
        <h3>${tour.title}</h3>
        <p><strong>${tour.location}</strong></p>
        <p>📅 ${tour.dates}</p>
        <a href="${tour.booking}" class="btn" target="_blank">Book Now</a>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading tours:', error);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadMusic();
  loadTours();
  
  // Show body after content loads
  document.body.classList.add('loaded');
});