const a = [9, 17, 29, 13, 25, 52];

// 1. Devuelve un array con los mismos elementos de a pero multiplicados por 2.
console.log("Ejercicio 1")

const ej1Array = a.map(numero => numero * 2);

console.log(ej1Array);
console.log(" ");

// 2. Devuelve un array con los mismos elementos de a pero aplicandole la función f1. La función f1 le suma 4 al argumento de entrada.
console.log("Ejercicio 2")

const f1 = (numero) => numero + 4;

const b = a.map(f1);

console.log(b);
console.log(" ");

// 3. Devuelve un array con los valores menores de 20. 
console.log("Ejercicio 3")

const filtro = a.filter(numero => numero < 20);

console.log(filtro);
console.log(" ");

// 4. Devuelve la suma de todos los números del array pero añadiendole 100. Es decir, no empieza en cero. 
console.log("Ejercicio 4")

const reduceF = a.reduce((i, e) => i + e, 100);

console.log(reduceF);
console.log(" ")
