console.log("Welcome");

let songIndex = 0;
let audioElement =  new Audio('Petta/0.mp3');
let masterPlay = document.getElementById('iconplay');
let myProgressbar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Aaha Kalyanam", filepath:"Petta/0.mp3"},
    {songName: "Ilamai Thirumbudhe", filepath:"Petta/1.mp3"},
    {songName: "Jithu Theme", filepath:"Petta/2.mp3"},
    {songName: "Kaali Theme", filepath:"Petta/3.mp3"},
    {songName: "Madura Petta", filepath:"Petta/4.mp3"},
    {songName: "Marana Mass", filepath:"Petta/5.mp3"},
    {songName: "Petta Paraak", filepath:"Petta/6.mp3"},
    {songName: "Petta Theme", filepath:"Petta/7.mp3"},
    {songName: "Singaar Singh", filepath:"Petta/8.mp3"},
    {songName: "Thappad Maara", filepath:"Petta/9.mp3"},
    {songName: "Ullaallaa", filepath:"Petta/10.mp3"}
]

let singer = [
    {Song: "Aaha Kalyanam - Antony Daasan"},
    {Song: "Ilamai Thirumbudhe - Aniruth Ravichander"},
    {Song: "Jithu Theme"},
    {Song: "Kaali Theme"},
    {Song: "Madura Petta"},
    {Song: "Marana Mass - Aniruth Ravichander,S.P.Balasubrahmaniyan"},
    {Song: "Petta Paraak - Aniruth Ravichander & Chorus"},
    {Song: "Petta Theme"},
    {Song: "Singaar Singh"},
    {Song: "Thappad Maara - Sarwar Khan, Sartaz Khan Barna"},
    {Song: "Ullaallaa - Nakash Aziz,Inno Genga"}
]

songItems.forEach((element, i)=>{
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        var image = document.getElementById('iconplay');
        image.src = "pause.PNG";
        
    }
    else{
        audioElement.pause();
        var image = document.getElementById('iconplay');
        image.src = "play.PNG";
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);    
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        var image1 = document.getElementById(element.id);
        image1.src = 'play1.PNG';
        
    })
}

var track = -1;
var Val = 'P'
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        if(Val == 'F' && track == songIndex)
         {
            audioElement.play();
            var image1 = document.getElementById(songIndex);
            image1.src = 'pause1.PNG';
            var image = document.getElementById('iconplay');
            image.src = "pause.PNG"; 
            Val = 'P';
         }
         else
         {
            if(track != songIndex || audioElement.paused || audioElement.currentTime<=0)
            {
                track = songIndex;
                audioElement.src=`Petta/${songIndex}.mp3`;
                masterSongName.innerText = singer[songIndex].Song;
                audioElement.play();
                var image1 = document.getElementById(songIndex);
                image1.src = 'pause1.PNG';
                var image = document.getElementById('iconplay');
                image.src = "pause.PNG";
                Val = 'P';    
            } 
            else
            {
                track = songIndex;
                audioElement.pause();
                var image1 = document.getElementById(songIndex);
                image1.src = 'play1.PNG';
                var image = document.getElementById('iconplay');
                image.src = "play.PNG";
                Val = 'F';
            }
                 
         }
                  
     })
})

document.getElementById('iconnext').addEventListener('click', ()=>{
    if(songIndex>=10)
    {
        songIndex = 0
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src=`Petta/${songIndex}.mp3`;
    masterSongName.innerText = singer[songIndex].Song;
    audioElement.currentTime = 0;
    audioElement.play();
    var image = document.getElementById('iconplay');
    image.src = "pause.PNG";
    Val = 'P';
    makeAllPlays();
})

document.getElementById('iconback').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex = 10
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src=`Petta/${songIndex}.mp3`;
    masterSongName.innerText = singer[songIndex].Song;
    audioElement.currentTime = 0;
    audioElement.play();
    var image = document.getElementById('iconplay');
    image.src = "pause.PNG";
    Val = 'P';
    makeAllPlays();
})







/*document.addEventListener('time');*/