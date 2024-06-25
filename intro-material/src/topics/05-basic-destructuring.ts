//Desestructuración de objetos
interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer = {
    audioVolume:90,
    songDuration:36,
    song:"Mess",
    details:{
        author:'Ed Sheran',
        year: 2015
    }
}

const {song:anotherSong, songDuration:duration,details} = audioPlayer; //se renombran song 
const {year} = details;
console.log(year);


//Desestructuración de arreglos 

   
const [, , turnks ='not found']: string[]=['Goku','Vegeta','Trunk'];
console.error('personaje 3:',turnks)