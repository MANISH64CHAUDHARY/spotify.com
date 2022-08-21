console.log("Welcome to Spotify");

//  Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Junction Lo Remix (Tapori Hot Mix) DJ Manik ft. DJ RS_320(DjManik.in).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Junction Lo Remix (Tapori Hot Mix) DJ Manik ft. DJ RS", filepath: "songs/Kanu Haramzada (Bengali Hot Dance Mix) DJ Manik_320(DjManik.in).mp3", coverpath: "covers/80_3.jpg" }
    { songName: "Junction Lo Remix (Tapori Hot Mix) DJ Manik ft.DJ RS", filepath: "songs/1.mp3" coverpath:"covers/80_3.jpg" }
    { songName: "Junction Lo Remix (TaporiHot Mix) DJ Manik ft. DJ RS",  filepath: "songs/1.mp3", coverpath:"covers/80_3.jpg" }
    { songName: "Junction Lo Remix (Tapori Hot Mix) DJ Manik ft. DJ RS", filepath: "songs/1.mp3", coverpath:"covers/80_3.jpg" }
    { songName: "Junction Lo Remix (Tapori Hot Mix) DJ Manik ft. DJ RS", filepath: "songs/1.mp3", coverpath:"covers/80_3.jpg" }
    { songName: "Junction Lo Remix (Tapori Hot Mix) DJ Manik ft. DJ RS", filepath: "songs/1.mp3", coverpath:"covers/80_3.jpg" }
    { songName: "Junction Lo Remix (Tapori Hot Mix) DJ Manik ft. DJ RS", filepath: "songs/1.mp3", coverpath:"covers/80_3.jpg" }
    { songName: "Junction Lo Remix (Tapori Hot Mix) DJ Manik ft. DJ RS", filepath: "songs/1.mp3", coverpath:"covers/80_3.jpg" }
    { songName: "Junction Lo Remix (Tapori Hot Mix) DJ Manik ft. DJ RS", filepath: "songs/1.mp3", coverpath:"covers/80_3.jpg" }
    { songName: "Junction Lo Remix (Tapori Hot Mix) DJ Manik ft. DJ RS", filepath: "songs/1.mp3", coverpath:"covers/80_3.jpg" }
]

songItems.forEach((element, i) => {

    element.getElementByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//  audioElement.play();

//  Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }


})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {

    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{

    Array.from(document.getElementByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementByClassName('songItemPlay')).forEach(() => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');





    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else{
    songIndex += 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    }
})
