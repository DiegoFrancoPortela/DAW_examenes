// Tengo un juego con varios personajes que se pueden atacar con diferentes armas
// Atacar es la función principal (o método de un objeto personaje) y usan diferentes armas (que en realidad son funciones)
// Y podrías añadir diferentes armas (y formas de atacar) sin modificar (mucho) la estructura principal

// Personajes del Juego
const personajes = [
    {nombre: "Personaje1"},
    {nombre: "Personaje2"},
    {nombre: "Personaje3"}
];

// Armas del Juego
const armas = [
    {tipo: "Lanza"},
    {tipo: "Katana"}
];

// Función para atacar
const atacar = (personajeAtacante, personajeAtacado, seleccionArma) => {
    const atacante = personajes[personajeAtacante];
    const atacado = personajes[personajeAtacado];
    const arma = armas[seleccionArma];
    console.log(atacado.nombre + " ha sido atacado por "+ atacante.nombre + " usando " + arma.tipo);
};

// Función para añadir armas
const agregarArma = (tipo) => {
    armas.push({tipo: tipo});
};

// Añadimos un arma
agregarArma("Espada");

// Generamos un ataque con la nueva arma
atacar(0, 1, 2);

