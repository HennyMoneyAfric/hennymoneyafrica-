document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  // Load Music
  fetch('music.json')
    .then(res => res.json())
    .then(data => {
      const musicContainer = document.getElementById('music-container');
      musicContainer.innerHTML = '';
      data.forEach(song => {
        const card = document.createElement('div');
        card.classList.add('music-card');
        card.innerHTML = `
          <h3>${song.title}</h3>
          <p>${song.artist}</p>
          <a href="${song.platforms.spotify}" target="_blank" class="btn">Spotify</a>
          <a href="${song.platforms.audiomax}" target="_blank" class="btn">Audiomax</a>
          <a href="${song.platforms.youtube}" target="_blank" class="btn">YouTube</a>
        `;
        musicContainer.appendChild(card);
      });
    });

  // Load Tours
  fetch('tours.json')
    .then(res => res.json())
    .then(data => {
      const tourContainer = document.getElementById('tour-container');
      tourContainer.innerHTML = '';
      data.forEach(tour => {
        const card = document.createElement('div');
        card.classList.add('tour-card');
        card.innerHTML = `
          <h3>${tour.name}</h3>
          <p>Duration: ${tour.duration}</p>
          <a href="${tour.link}" target="_blank" class="btn">Book Now</a>
        `;
        tourContainer.appendChild(card);
      });
    });
});
