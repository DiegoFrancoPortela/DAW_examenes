
// 1. Define la función suma(n,m), que me devuelva la suma de esos dos números.
console.log("Ejercicio 1")

function suma(n, m) {
    return n + m;
}
  
console.log(suma(1,1));
console.log(" ")

// 2. Defínela como función anónima y la asignas a la variable f1 y a la variable f2. ¿Qué valor da f1(3,4)? ¿Y f2(8,7)?
console.log("Ejercicio 2")

const f1 = function(n, m) {
    return n + m;
}

const f2 = function(n, m) {
    return n + m;
}

console.log(suma(3,4));
console.log(suma(8,7));
console.log(" ")

// 3. Crea una función calculadora(param1, param2, operación) donde operación será la función para operar los dos parámetros. Podrá ser una de estas tres funciones: suma, resta, multi (sobre dos parámetros). 
console.log("Ejercicio 3")

function suma(n, m) {
    return n + m;
}

function resta(n, m) {
    return n - m;
}

function multi(n, m) {
    return n * m;
}

function calculadora(param1, param2, operacion) {
    return operacion(param1,param2);
}

console.log(calculadora(2,2, suma))
console.log(calculadora(2,2, resta))
console.log(calculadora(2,2, multi))

console.log(" ")

// 4. Usa funciones flecha en el ejemplo de la calculadora de la sesión anterior.
console.log("Ejercicio 4")

const sumaEj4 = (n, m) => n + m;
const restaEj4 = (n, m) => n - m;
const multiEj4 = (n, m) => n * m;

const calculadoraEj4 = (param1, param2, operacion) => operacion(param1, param2);

console.log(calculadoraEj4(2,2, suma));
console.log(calculadoraEj4(2,2, resta));
console.log(calculadoraEj4(2,2, multi));

console.log(" ")