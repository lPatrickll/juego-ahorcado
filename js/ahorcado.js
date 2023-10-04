const resultadoPalabra = document.getElementById("resultado-palabra");
class Ahorcado {
    constructor(categoria) {
        this.categoria = categoria;
        this.palabras = {
            color: ['rojo', 'azul', 'verde', 'amarillo'],
            cocina: ['cuchillo', 'sarten', 'nevera', 'tenedor'],
            internet: ['navegador', 'correo', 'pagina', 'enlace'],
            frutas: ['manzana', 'platano', 'uva', 'pera']
        };
        this.palabra = this.obtenerPalabraAleatoria();
        this.imagenElement = document.getElementById('imagen');
        this.intentosMaximos = 8;
        this.intentosRestantes = this.intentosMaximos;
        this.letrasIntentadas = [];
        this.erroresCometidos = 0;
        this.palabraAdivinada = false;
    }

    get palabraElegida() {
        return this.palabra;
    }

    obtenerPalabraAleatoria() {
        const palabrasCategoria = this.palabras[this.categoria];
        const indiceAleatorio = Math.floor(Math.random() * palabrasCategoria.length);
        return palabrasCategoria[indiceAleatorio];
    }

    intentarLetra(letra) {
        if (!this.palabraAdivinada && this.intentosRestantes > 1) {
            letra = letra.toLowerCase();
    
            if (!this.letrasIntentadas.includes(letra)) {
                this.letrasIntentadas.push(letra);
    
                if (this.palabra.includes(letra)) {
                    this.verificarVictoria();
                    return true; // La letra es correcta
                } else {
                    this.intentosRestantes--;
                    this.verificarDerrota();
                    // this.erroresCometidos++;
                    return false; // La letra es incorrecta
                }
            }
        }
        return false; // La letra ya fue intentada previamente
    }

    verificarVictoria() {
        const palabraAdivinada = this.palabra.split('').every(letra => this.letrasIntentadas.includes(letra));
        console.log(this.categoria);
        if (palabraAdivinada) {
            this.palabraAdivinada = true;
            resultadoPalabra.textContent = "¡Correcto! Has adivinado la palabra.";
            // alert('Has ganado, Felicidades!!!!');
            // console.log('¡Has adivinado la palabra! La palabra era: ' + this.palabra);
            // window.location.href = '../HTML/index.html';
        }
    }

    verificarDerrota() {
        if (this.intentosRestantes === 1) {
            console.log('¡Perdiste! La palabra era: ' + this.palabra);
            resultadoPalabra.textContent = "Incorrecto. Sigue intentando.";
            // alert('Perdiste :c');
            // console.log('¡Has perdido, la palabra era: ' + this.palabra);
            // window.location.href = '../HTML/index.html';
        }
    }

    actualizarImagen() {
        const source = `../img/img${this.intentosRestantes}.png`;
        this.imagenElement.src = source;
    }
}  

export default Ahorcado;