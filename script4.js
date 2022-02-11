console.log("Welcome");

let songIndex = 0;
let audioElement =  new Audio('Master/0.mp3');
let masterPlay = document.getElementById('iconplay');
let myProgressbar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Andha Kanna Paathaakaa", filepath:"Master/0.mp3"},
    {songName: "Beat of Master (Instrumental)", filepath:"Master/1.mp3"},
    {songName: "Kutti Story", filepath:"Master/2.mp3"},
    {songName: "Polakatum Para Para", filepath:"Master/3.mp3"},
    {songName: "Pona Pogattum", filepath:"Master/4.mp3"},
    {songName: "Quit Pannuda", filepath:"Master/5.mp3"},
    {songName: "Vaathi Coming", filepath:"Master/6.mp3"},
    {songName: "Vaathi Kabaddi", filepath:"Master/7.mp3"},
    {songName: "Vaathi Raid", filepath:"Master/8.mp3"}
]

let singer = [
    {Song: "Andha Kanna Paathaakaa - Yuvan Shankar Raja"},
    {Song: "Beat of Master (Instrumental)"},
    {Song: "Kutti Story - Vijay"},
    {Song: "Polakatum Para Para - Santhosh Narayanan"},
    {Song: "Pona Pogattum - C.B.Vinith"},
    {Song: "Quit Pannuda - Aniruth Ravichander"},
    {Song: "Vaathi Coming - Gana Balachandar, Aniruth Ravichander"},
    {Song: "Vaathi Kabaddi - Maran,Jaymoorthy"},
    {Song: "Vaathi Raid - Arivu,Aniruth Ravichander"}
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
                audioElement.src=`Master/${songIndex}.mp3`;
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
    if(songIndex>=8)
    {
        songIndex = 0
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src=`Master/${songIndex}.mp3`;
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
        songIndex = 8
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src=`Master/${songIndex}.mp3`;
    masterSongName.innerText = singer[songIndex].Song;
    audioElement.currentTime = 0;
    audioElement.play();
    var image = document.getElementById('iconplay');
    image.src = "pause.PNG";
    Val = 'P';
    makeAllPlays();
})







/*document.addEventListener('time');*/