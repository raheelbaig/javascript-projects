const musicContainer = document.getElementById('music-container');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = document.getElementById('progress-container');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// list of songs
const songlist = [  'alan walker - faded', 
                    'alan walker & ava max-alone'
                ];

// Track which song is currently playing
let currentSong = 0;

// update the song to the DOM
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

//function to play the song
function playSong() {
    musicContainer.classList.add('play');
    playButton.querySelector('i.fas').classList.remove('fa-play');
    playButton.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

//function to play the song
function pauseSong() {
    musicContainer.classList.add('play');
    playButton.querySelector('i.fas').classList.remove('fa-pause');
    playButton.querySelector('i.fas').classList.add('fa-play');

    audio.pause();
}

// function to switch to previous song
function prevSong() {
    currentSong--;

    if ( currentSong < 0 ) {
        currentSong = songlist.length - 1;
    }

    loadSong(songlist[currentSong]);

    playSong();
}

function prevSong() {
    currentSong++;

    if ( currentSong > songlist.length - 1 ) {
        currentSong = 0;
    }

    loadSong(songlist[currentSong]);

    playSong();
}

// update the progress bar
function updateProgress(e) {
    const { currentTime, duration } = e.srcElement;
    const progressPercentage = ( currentTime / duration ) * 100;
    progressBar.style.width = '${progressPercentage}%';
}

// Set the progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const offsetX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = ( offsetX / width ) * duration;
}

//initial song load
loadSong(songlist[currentSong]);

//Event Listners
// 1.Play button Event Listener
playButton.addEventListener('click', () => {
    const isplaying = musicContainer.classList.contains('play');

    if (isplaying) {
        pauseSong();
    }else {
        playSong();
    }
})

// 2. previous button Event Listener
prevButton.addEventListener('click', prevSong);

// 3. Next button Event Listener
nextButton.addEventListener('click', nextSong);

// 4. Update the time for song play
audio.addEventListener('timeupdate', updateProgress);

// 5. Update the Time for Song play based on click on progress Container
progressContainer.addEventListener('click', setProgress);

// 6. Automatically Play next Song
audio.addEventListener('ended', nextSong);