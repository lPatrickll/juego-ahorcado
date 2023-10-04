import Ahorcado from './ahorcado.js';
import Juego from './juegoEdit.js';

const btn = document.getElementById('jugar');
btn.addEventListener('click', iniciar);
const resultadoPalabra = document.getElementById("resultado-palabra");

var juegoInstance;
var palabra_Adivinar;
function iniciar() {
    juegoInstance = new Juego(); // Cambia el nombre de la instancia a juegoInstance
    btn.disabled = true;
    palabra_Adivinar = juegoInstance._palabra;
    console.log(palabra_Adivinar);
}
function seleccionarLetra(caracter){
    juegoInstance.Jugar(caracter);
}

const letrasBotones = document.querySelectorAll('.letra[data-caracter]');
letrasBotones.forEach(button => {
    button.addEventListener('click', function () {
        const caracter = this.getAttribute('data-caracter');
        seleccionarLetra(caracter);
        this.disabled = true;
    });
});

document.getElementById("ir-index").addEventListener("click", function () {
    irAPagina('index');
});

function irAPagina(page) {
    window.location.href = page + '.html';
}   

function seleccionarCategoria(categoria) {
    localStorage.setItem('categoriaSeleccionada', categoria);
    console.log('Categoría seleccionada:', categoria);
}

// Adivinar por palabra
document.getElementById("verificar-palabra").addEventListener("click", function () {
    verificarPalabra();
});

function verificarPalabra() {
    const palabraIngresada = document.getElementById("palabra-ingresada").value.toLowerCase();

    if (palabraIngresada === palabra_Adivinar) {
        resultadoPalabra.textContent = "¡Correcto! Has adivinado la palabra.";
        // alert('¡Correcto! Has adivinado la palabra.');
        // window.location.href = '../HTML/index.html';
    } else {
        resultadoPalabra.textContent = "Incorrecto. Sigue intentando.";
    }
}