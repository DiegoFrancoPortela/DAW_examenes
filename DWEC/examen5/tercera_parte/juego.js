// Tengo un juego con varios personajes que se pueden atacar con diferentes armas
// Atacar es la función principal (o método de un objeto personaje) y usan diferentes armas (que en realidad son funciones)
// Y podrías añadir diferentes armas (y formas de atacar) sin modificar (mucho) la estructura principal

// Personajes del Juego
const personajes = {
    personaje1: {
        nombre: "Personaje1",
        ataque: arma => console.log("Personaje1 usa "+arma.tipo)
    },

    personaje2: {
        nombre: "Personaje2",
        ataque: arma => console.log("Personaje2 usa "+arma.tipo)
    }
}

// Armas del Juego
const armas = {
    lanza: {
        tipo: "Lanza",
    },

    katana: {
        tipo: "Katana",
    }
}

// Función para atacar
const ataque = (personaje, arma) => personaje.ataque(arma);

// Generar ataque
ataque(personajes.personaje1, armas.lanza);