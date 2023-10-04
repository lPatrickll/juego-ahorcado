// Importa la clase Ahorcado desde el archivo ahorcado.js
import Ahorcado from './ahorcado.js';

// Obtiene la categoría seleccionada desde localStorage
var categoriaSeleccionada = localStorage.getItem('categoriaSeleccionada');

// Crea una instancia de Ahorcado
const ahorcadoJuego = new Ahorcado(categoriaSeleccionada);

class Juego {
    constructor() { // Recibe ahorcado como argumento en el constructor
        this._ahorcado = ahorcadoJuego; // Asigna la instancia de Ahorcado recibida como argumento
        this._palabra = this._ahorcado.palabraElegida;;
        this._cant_errores = 0;
        this._letrasInsertadas = [];
    }

    Jugar(caracter) {
        if (!this._ahorcado.intentarLetra(caracter)) {
            this._ahorcado.actualizarImagen();
            
            const letraIncorrecta = caracter;
            const incorrectasSpan = document.getElementById("incorrectas-span");
            
            // Agrega la letra incorrecta al contenido del span
            incorrectasSpan.textContent += letraIncorrecta + " ";
        }
    
        const palabraElegida = this._ahorcado.palabraElegida;
        const adivinarSpan = document.getElementById("adivinar-span");
    
        // Crear una cadena con guiones bajos que tenga la misma longitud que la palabra elegida
        let guionesBajos = "_ ".repeat(palabraElegida.length).trim();
    
        // Reemplazar los guiones bajos con letras adivinadas
        for (let i = 0; i < palabraElegida.length; i++) {
            if (this._ahorcado.letrasIntentadas.includes(palabraElegida[i])) {
                // Si la letra actual está en letrasIntentadas, muestra la letra
                guionesBajos = guionesBajos.substr(0, i * 2) + palabraElegida[i] + guionesBajos.substr(i * 2 + 1);
            }
        }
    
        // Usar innerHTML para insertar la cadena actualizada en el elemento "adivinar-span"
        adivinarSpan.innerHTML = guionesBajos;
    
        console.log(this._ahorcado.intentosRestantes);
        console.log(palabraElegida);
    }
    
    
    get getAhorcado() {
        return this._ahorcado;
    }

    get getIMG() {
        return this._img;
    }
}

export default Juego;
