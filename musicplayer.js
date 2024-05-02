//started with music player javascript
let musicContainer = document.querySelector(".music-container");
let audio = document.querySelector("audio");
let trackArt = document.querySelector(".track-art");
let musicInfo = document.querySelector(".music-info");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");
let timelineContainer = document.querySelector(".timeline-container");
let btnContainer = document.querySelector(".button-container");
let shuffleBtn = document.querySelector(".shuffle-btn");
let prevBtn = document.querySelector(".prev-btn");
let playPauseBtn = document.querySelector(".play-pause-btn");
let nextBtn = document.querySelector(".next-btn");
let muteBtn = document.querySelector(".mute-btn");
let volumeSlider = document.querySelector(".volume-slider");
let currentTime = document.querySelector(".current-time");
let totalTime = document.querySelector(".total-time");
// let wave = document.getElementById("wave");
let trackIndex = 0;
let isPlaying = false;
let isRandom = false;
const music_list=[
  {
    img:"download-1.jpg",
    name:"the last ride",
    artist: "sidhu moosewala",
    music: "The Last Ride - DjPunjab.Com.se.mp3", 
  },
  {
    img:"donwload.jpg",
    name:"jatt da muqabala",
    artist:"sidhu moosewala",
    music:"Jatt_Da_Muqabla_1.mp3"
  },
  {
    img:"https://images.unsplash.com/photo-1659542891330-b2969fb0741e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80",
    name: "Faded",
    artist: "Alan walker",
    music:"Faded(PaglaSongs).mp3",
  },
  {
    img:"https://images.unsplash.com/photo-1659425757127-ccbf96c59163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1386&q=80",
    name:"Rather Be"
    artist:"Clean bandit",
    music:"Clean-Bandit-Rather-Be-feat.-Jess-Glynee.mp3",
  },
  {
    img:"travis.jpg",
    name:"butterfuly effect",
    artist:"travis scott",
    music:"Butterfly-Effect(PaglaWorld.Social).mp3",
  },
  {
    img:"chitta.jpg",
    name:"chitta kurta",
    artist:"karan aujla",
    music:"Chitta Kurta - Karan Ajula 128 Kbps.mp3",
  },
  {
    img:"wasted.jpg",
    name:"wasted",
    artist:"don toLiver",
    music:"Don_Toliver_wasted_(thinknews.com.ng).mp3",
  },
  {
    img:"cheqies.jpg",
    name:"cheques",
    artist:"shubh",
    music:"Cheues_64(PagalaWorld.com.se).mp3",
  },
  {
    img:"malang.jpg",
    name:"malang sajna",
    artist:"sachit tandon",
    music:"Malang Sajna_64(PagalWorld.com.se).mp3",
  },
  {
    img: "rattan.jpg",
    name:"rattan lambiyan",
    artist:"jubin nautiyal",
    music:"Rattan Lambiyan_64(PagalWorld.com.se).mp3",
  },
  {
    img:"maan.jpg",
    name:"maan meri jaan",
    artist:"king",
    music:"Maan Meri Jaan_64(pagalworld.com.se).mp3",
  },
  
  };
loadTrack(trackIndex)
{
  reset();
  audio.src=muzic_list(trackIndex).music;
  audio.load();
  trackArt.style.backgroundImage ="url("+ music_list[trackIndex].imh+")";
  trackName.textContent = music_list[trackIndex].name;
  trackArtist.textContent= music_list[trackIndex].artist;
  audio.addEventListner("ended", nextTrck);
  rangdom_bg_color();
}
  
  // basic songs list updated....
  
