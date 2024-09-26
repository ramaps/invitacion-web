const tituloCancion = document.querySelector('.reproductor-musica h2');
const nombreArtista = document.querySelector('.reproductor-musica p');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const iconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

const botonAtras = document.querySelector('.controles button.atras');
const botonSiguiente = document.querySelector('.controles button.siguiente');

const canciones = [
    {
    titulo:'Flo Rida',
    nombre:'Rigth Round',
    fuente:'music/Rigth Round - Flo Rida.mp3'
    },
    {
        titulo:'Angels',
        nombre:'Robbie Williams',
        fuente:'music/Angels - Robbie Williams.mp3'
    }
];

let indiceCancionActual = 0;

function actualizarInfoCancion(){
    console.log('ejecucion')
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata',function(){});
};
botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar(){
    if(cancion.paused){
        reproducirCancion();
        iconoControl.classList.add('bi bi-pause-fill')
        iconoControl.classList.remuve('bi bi-play-fill')
    }
    else{
        pausarCancion();
        iconoControl.classList.remove('bi bi-pause-fill')
        iconoControl.classList.add('bi bi-play-fill')
    }
};

function reproducirCancion(){
    cancion.play();

}

function pausarCancion(){
    cancion.pause();
}

actualizarInfoCancion();




console.log(tituloCancion)
console.log(nombreArtista)
console.log(progreso)
console.log(cancion)
console.log(botonAtras)
console.log(botonSiguiente)
console.log(botonReproducirPausar)