function init() {
  document.getElementById("restartMusicButton").focus();
}




let counter;

function handleClick() {
  counter++;
  document.getElementById("count").innerHTML = counter;
  localStorage.setItem("score", counter);
}

function handleRestartClick() {
  counter = 0;
  document.getElementById("count").innerHTML = counter;
  localStorage.setItem("score", counter);
}

function init() {
  counter = parseInt(localStorage.getItem("score")) || 0;
  document.getElementById("count").innerHTML = counter;
}

function autosave() {
  localStorage.setItem("score", counter);
}





setInterval(autosave, 1000);



const cookieMonsterImg = document.getElementById('cookie');
  
  cookieMonsterImg.addEventListener('click', function() {
    // create an audio element and set its source to the sound file
    const audio = new Audio('Bite.mp3');
    
    // play the sound
    audio.play();
  });



  const musicToggle = document.querySelector('.switch input[type="checkbox"]');

musicToggle.addEventListener('change', function() {
  const music = document.getElementById('music');
  if(this.checked) {
    music.play();
  } else {
    music.pause();
  }
});


function handleRestartMusicClick() {
    const music = document.getElementById('music');
    music.currentTime = 0;
    music.play();
  }