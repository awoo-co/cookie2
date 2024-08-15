function init() {
  const music = document.getElementById('music');
  const musicToggle = document.getElementById('musicToggle');
  const volumeSlider = document.getElementById('volumeSlider');

  // Initialize the music based on the toggle status
  if (musicToggle.checked) {
    music.play();
  } else {
    music.pause();
  }

  // Set initial volume
  music.volume = volumeSlider.value;

  // Event listeners for toggle and volume
  musicToggle.addEventListener('click', toggleMusic);
  volumeSlider.addEventListener('input', function() {
    adjustVolume(this.value);
  });
}

function toggleMusic() {
  const music = document.getElementById('music');
  const musicToggle = document.getElementById('musicToggle');
  if (musicToggle.checked) {
    music.play();
  } else {
    music.pause();
  }
}

function adjustVolume(volume) {
  const music = document.getElementById('music');
  music.volume = volume;
}

function handleRestartMusicClick() {
  const music = document.getElementById('music');
  music.currentTime = 0;
  music.play();
}
