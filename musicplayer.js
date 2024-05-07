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
    name:"Rather Be",
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
   // basic songs list updated....
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
function random_bg_color()
{
  let hex=
[
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
];
let a;
function populate(a)
  {
    for(let i= 0; i < 6; i++)
      {
        let x = Math.round(Math.random() * 14);
        let y = hx[x];
        a +=y;
      }
    return a;
  }
  let Color1 = populate("#");
  let Color2 = populate("#");
  var angle = "to bottom right";

  let gradient = "linear-gradient(" + angle + "," +Color1 + "," + Color2 +")";
  document.body.style.background = gradient;
  volumeSlider.style.setProperty("--background", Color2)
  timelineContainer.style.setProperty("--background", Color2)
  musicInfo.style.setProperty("--background", gradient)
}
function reset()
{
  currentTime.textContent = "00.00";
  totalTime.textContent = "00.00";
}
//Timeline;

//If mouse is moving starts handleTimelineUpdate
timelineContainer.addEventListner("mousemove", handleTimelineUpdate)

//If mouse is pressed down ,toggle scrubbing
timelineContainer.addEventlistner("mousedown",toggleScrubbing)

//only enter scrubbing when in timeline and cicking down
document.addEventListner("mouseup", e->{ if(isScrubbing) toggleScrubbing(e)
                         {)
//if scrubbing starts handleTimelineUpdate
  document.addEventListner("mouseup",e->{
    if(isScrubbing) handelTimelineUpdate(e)
                           })

let isScrubbing = false
let wasPaused
function toggleScrubbing(e)
{
  const rect = timelineContainer.getBoundingClinetRect()
   //e.x gives position of X of mouse cursor, relative to timeline.
  //0 is so cursor doesn't go past limit. 
  //Rect.width is furthest right position
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width)/rect.width
  //Determines if left button is beingh clicked, if yes, enables scrubbing 
  isScrubbing = (e.buttons & 1) === 1
  musicContainer.classList.toggle("scrubbing", isScrubbing)
  // if scrubbing pause audio
  if(isScrubbing)
  {
    wasPaused =  audio.paused
    audio.pause()
  }
  else
  {
    //move audio where scrubbing was stopped and then play
    audio.currentTime = percent * audio.duration
    if(!wasPaused) audio.play()
  }
  //if scrubbing starts , pulls code from handleTimelineUpdate
  handleTimelineUpdate(e)
}

function handleTimelineUpdate(e)
{
  const rect = timelineContainer.getBoundingClientRect()
   //e.x gives position of X of mouse cursor, relative to timeline.
  //0 is so cursor doesn't go past limit. 
  //Rect.width is furthest right position
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  //Math.floor((percent * audio.duration)) gives value for how far into audio
  //Determines image according to how they were set up, 10 seconds
  timelineContainer.style.setProperty("--preview-position", percent)
  //Scrubbing Settings
  if (isScrubbing) {
  //Prevents highlighting page while scrubbing
  e.preventDefault()
  timelineContainer.style.setProperty("--progress-position", percent)
  }
}
//Current Time
audio.addEventListener("timeupdate", () => {
  currentTime.textContent = formatDuration(audio.currentTime)
  //Bar will move with audio progress
  const percent = audio.currentTime / audio.duration
  timelineContainer.style.setProperty("--progress-position", percent)
})
  
 
  
