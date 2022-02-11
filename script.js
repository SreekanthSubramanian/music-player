console.log("Welcome");

let songIndex = 0;
let audioElement =  new Audio('maanaadu/0.mp3');
let masterPlay = document.getElementById('iconplay');
let myProgressbar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Voice of Unity", filepath:"maanaadu/0.mp3"},
    {songName: "Meherezylaa", filepath:"maanaadu/1.mp3"},
    {songName: "A-walk-in-the-fire", filepath:"maanaadu/2.mp3"},
    {songName: "Dead End", filepath:"maanaadu/3.mp3"},
    {songName: "Maanaadu Theme", filepath:"maanaadu/4.mp3"},
    {songName: "Dhanush Kodi's Theme", filepath:"maanaadu/5.mp3"},
    {songName: "Follow my lead", filepath:"maanaadu/6.mp3"}
]

let singer = [
    {Song: "Voice of Unity - Silambarasan TR, Yuvan Shankar Raja, Arivu"},
    {Song: "Meherezylaa - Yuvan Shankar Raja, Bhavatharini, Rizwan"},
    {Song: "A-walk-in-the-fire - Yuvan Shankar Raja"},
    {Song: "Dead End - Yuvan Shankar Raja"},
    {Song: "Maanaadu Theme - Yuvan Shankar Raja"},
    {Song: "Dhanush Kodi's Theme - Yuvan Shankar Raja"},
    {Song: "Follow my lead - Yuvan Shankar Raja"}
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
                audioElement.src=`maanaadu/${songIndex}.mp3`;
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
    if(songIndex>=6)
    {
        songIndex = 0
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src=`maanaadu/${songIndex}.mp3`;
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
        songIndex = 6
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src=`maanaadu/${songIndex}.mp3`;
    masterSongName.innerText = singer[songIndex].Song;
    audioElement.currentTime = 0;
    audioElement.play();
    var image = document.getElementById('iconplay');
    image.src = "pause.PNG";
    Val = 'P';
    makeAllPlays();
})







/*document.addEventListener('time');*/