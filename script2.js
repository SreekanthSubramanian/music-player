console.log("Welcome");

let songIndex = 0;
let audioElement =  new Audio('Sorarai Pottru/0.mp3');
let masterPlay = document.getElementById('iconplay');
let myProgressbar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Aagasam", filepath:"Sorarai Pottru/0.mp3"},
    {songName: "Kaattu Payale", filepath:"Sorarai Pottru/1.mp3"},
    {songName: "Kayilae Aagasam", filepath:"Sorarai Pottru/2.mp3"},
    {songName: "Maara Theme", filepath:"Sorarai Pottru/3.mp3"},
    {songName: "Mannurunda", filepath:"Sorarai Pottru/4.mp3"},
    {songName: "Naalu Nimisham", filepath:"Sorarai Pottru/5.mp3"},
    {songName: "Sooravali", filepath:"Sorarai Pottru/6.mp3"},
    {songName: "Usurey", filepath:"Sorarai Pottru/7.mp3"},
    {songName: "Veyyon Silli", filepath:"Sorarai Pottru/8.mp3"}
]

let singer = [
    {Song: "Aagasam - Christin Jos,Govind Vasantha"},
    {Song: "Kaattu Payale - Dhee"},
    {Song: "Kayilae Aagasam - Saindhavi"},
    {Song: "Maara Theme - Suriya,G.V. Prakash"},
    {Song: "Mannurunda - Senthil Ganesh"},
    {Song: "Naalu Nimisham - Krishnaraj"},
    {Song: "Sooravali - Senthil Ganesh"},
    {Song: "Usurey - G.V.Prakash"},
    {Song: "Veyyon Silli - Harish Sivaramakrishnan"}
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
                audioElement.src=`Sorarai Pottru/${songIndex}.mp3`;
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
    audioElement.src=`Sorarai Pottru/${songIndex}.mp3`;
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
    audioElement.src=`Sorarai Pottru/${songIndex}.mp3`;
    masterSongName.innerText = singer[songIndex].Song;
    audioElement.currentTime = 0;
    audioElement.play();
    var image = document.getElementById('iconplay');
    image.src = "pause.PNG";
    Val = 'P';
    makeAllPlays();
})







/*document.addEventListener('time');*/