console.log("Welcome to spotify");
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let previous=document.getElementById('previous');
let next=document.getElementById('next');
let myprogressbar=document.getElementById('myprogressbar');
let gif1=document.getElementById('gif1');
let gif2=document.getElementById('gif2');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
     { songName:"Gam Ganapathaye",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
     { songName:"Deva Devam",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
     { songName:"Alipiri",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
     { songName:"Hukum",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
     { songName:"Dheevara",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
     { songName:"Beast",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
     { songName:"Ettara jenda",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
]
songitems.forEach((element,i)=>{
    
   element.getElementsByTagName("img")[0].src=songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//handle play/paue click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif1.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif1.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeallplays= ()=>{
   Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
   })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif1.style.opacity=1;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=6)
    songindex=0;
    else
    songindex+=1;
    audioElement.src=`songs/${songindex+1}.mp3`;
            audioElement.currentTime=0;

        audioElement.play();
        gif1.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    songindex=0;
    else
    songindex-=1;
    audioElement.src=`songs/${songindex+1}.mp3`;
            audioElement.currentTime=0;

        audioElement.play();
        gif1.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})