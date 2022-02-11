console.log("Welcome");

let songIndex = 0;
let audioElement =  new Audio('Maryan/0.mp3');
let masterPlay = document.getElementById('iconplay');
let myProgressbar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "I Love My Africa", filepath:"Maryan/0.mp3"},
    {songName: "Innum Konjam Neram", filepath:"Maryan/1.mp3"},
    {songName: "Kadal Raasa Naan", filepath:"Maryan/2.mp3"},
    {songName: "Nenje Yezhu", filepath:"Maryan/3.mp3"},
    {songName: "Netru Aval Irundhal", filepath:"Maryan/4.mp3"},
    {songName: "Sonapareeya", filepath:"Maryan/5.mp3"},
    {songName: "Yenga Pona Raasa", filepath:"Maryan/6.mp3"}
]

let singer = [
    {Song: "I Love My Africa - A.R.Rahman,Blaaze,Madras Youth Choir"},
    {Song: "Innum Konjam Neram - Vijay Prakash,Swetha Mohan"},
    {Song: "Kadal Raasa Naan - Yuvan Shankar Raja"},
    {Song: "Nenje Yezhu - A.R.Rahman"},
    {Song: "Netru Aval Irundhal - Vijay Prakash,Chinmayee"},
    {Song: "Sonapareeya - Javed Ali,Haricharan,Nakash Aziz, Sofia Ashraf"},
    {Song: "Yenga Pona Raasa - Shakthisree Gopalan"}
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
                audioElement.src=`Maryan/${songIndex}.mp3`;
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
    audioElement.src=`Maryan/${songIndex}.mp3`;
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
    audioElement.src=`Maryan/${songIndex}.mp3`;
    masterSongName.innerText = singer[songIndex].Song;
    audioElement.currentTime = 0;
    audioElement.play();
    var image = document.getElementById('iconplay');
    image.src = "pause.PNG";
    Val = 'P';
    makeAllPlays();
})







/*document.addEventListener('time');*/