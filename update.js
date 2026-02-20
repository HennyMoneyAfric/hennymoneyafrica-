// update.js - dynamically load music and tours
document.addEventListener("DOMContentLoaded", function() {
  // Load Music
  fetch('music.json')
    .then(response => response.json())
    .then(data => {
      const musicContainer = document.getElementById('music-container');
      data.songs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
          <h3>${song.title}</h3>
          <p>${song.artist}</p>
          <a href="${song.link}" target="_blank" class="btn">Listen Now</a>
        `;
        musicContainer.appendChild(card);
      });
    })
    .catch(err => console.error('Error loading music:', err));

  // Load Tours
  fetch('tours.json')
    .then(response => response.json())
    .then(data => {
      const tourContainer = document.getElementById('tour-container');
      data.tours.forEach(tour => {
        const card = document.createElement('div');
        card.className = 'tour-card';
        card.innerHTML = `
          <h3>${tour.name}</h3>
          <p>${tour.description}</p>
          <a href="${tour.link}" target="_blank" class="btn">Book Now</a>
        `;
        tourContainer.appendChild(card);
      });
    })
    .catch(err => console.error('Error loading tours:', err));
});
