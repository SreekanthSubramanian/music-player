console.log("Welcome");

let songIndex = 0;
let audioElement =  new Audio('Mankantha/0.mp3');
let masterPlay = document.getElementById('iconplay');
let myProgressbar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Balle Lakka", filepath:"Mankantha/0.mp3"},
    {songName: "Machi Open The Bottle", filepath:"Mankantha/1.mp3"},
    {songName: "Mankatha Theme Music", filepath:"Mankantha/2.mp3"},
    {songName: "Nanbane", filepath:"Mankantha/3.mp3"},
    {songName: "Nee Naan", filepath:"Mankantha/4.mp3"},
    {songName: "Vaada Bin Laada", filepath:"Mankantha/5.mp3"},
    {songName: "Vilayadu Mangatha (Extended Dance Mix)", filepath:"Mankantha/6.mp3"},
    {songName: "Vilayadu Mangatha", filepath:"Mankantha/7.mp3"}
]

let singer = [
    {Song: "Balle Lakka - Karthick,Vijay Yesudas,Anusha Durai Dhayanidhi"},
    {Song: "Machi Open The Bottle - Mano,Premji Amaran,Haricharan,Tippu,Naveen Madhav,Suchith Suresan,D. Sathyaprakash,Rahul Nambiar, MK Balaji"},
    {Song: "Mankatha Theme Music"},
    {Song: "Nanbane - Madhushree,Yuvan Shankar Raja"},
    {Song: "Nee Naan - S.P.B.Charan , Bhavatharini"},
    {Song: "Vaada Bin Laada - Krish, Suchitra"},
    {Song: "Vilayadu Mangatha (Extended Dance Mix) - Yuvan Shankar Raja, Ranjith, Rita, Anitha Karthikeyan, Premgi Amaren"},
    {Song: "Vilayadu Mangatha - Yuvan Shankar Raja, Ranjith,Rita, Anitha Karthikeyan, Premgi Amaren"}
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
                audioElement.src=`Mankantha/${songIndex}.mp3`;
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
    audioElement.src=`Mankantha/${songIndex}.mp3`;
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
    audioElement.src=`Mankantha/${songIndex}.mp3`;
    masterSongName.innerText = singer[songIndex].Song;
    audioElement.currentTime = 0;
    audioElement.play();
    var image = document.getElementById('iconplay');
    image.src = "pause.PNG";
    Val = 'P';
    makeAllPlays();
})







/*document.addEventListener('time');*/