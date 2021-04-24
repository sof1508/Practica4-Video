// Creación de variables con elementos del HTML
const fileSelector = document.getElementById("file");
const video = document.getElementById("video");
const volumen = document.getElementById("volumen");
const cargando = document.getElementById("cargando");
const contenedor = document.getElementById("contenedor");

// Comprobación del soporte de APIs File del navegador
if (window.File && window.FileReader && window.FileList) {
    console.log("Todas las APIs soportadas");
} else {
    alert("La API de FILE no es soportada en este navegador");
}

//Cambio en el selector de archivos
fileSelector.addEventListener('change', event => {
    contenedor.classList.add("ocultar");
    cargarFile(event);
});

// Video cargado
video.addEventListener('loadeddata', () => {
    cargando.classList.add("ocultar");
    contenedor.classList.remove("ocultar");
});

// Carga del fichero solo si es un video
function cargarFile(event) {
    var file = event.target.files[0];

    if (file.type.match('video.*')) {
        var fileURL = URL.createObjectURL(file);
        video.src = fileURL;
        cargando.classList.remove("ocultar");
    } else {
        fileSelector.value = "";
        alert("Error: Tipo de fichero incorrecto");
    }

}

// Reproducir
function play() {
    video.play();
}

// Pausar
function pause() {
    video.pause();
}

// Selección de volumen con el range
volumen.addEventListener("input", event => {
    video.volume = event.target.value;
})