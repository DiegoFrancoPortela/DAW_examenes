// Crear un programa que simule un juego en el que se lanzan dos dados.
// Ganará el número más pequeño.

// Lanzamiento del dado
const obtenerValorDado = () => Math.floor(Math.random() * 6) + 1;

// Función de Juego
const jugar = () => {
    const dado1 = obtenerValorDado();
    const dado2 = obtenerValorDado();

    console.log("Dado 1: " + dado1);
    console.log("Dado 2: " + dado2);

    if (dado1 < dado2) {
        console.log("Ganador: Dado 1");
    } else if (dado2 < dado1) {
        console.log("Ganador: Dado 2");
    } else {
        console.log("Empate");
    }
}

jugar()