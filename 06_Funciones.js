/**
 * Funciones
 */

// DECLARATIVA-> function nombreDeLaFuncion() { cuerpo }
// Sin parámetros
function saludar(){
    console.log("Hola");
}
saludar();

// Con parámetros
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
saludar("Rafa");

// Que devuelva un valor
function saludar(nombre){
    return `Hola ${nombre}`;
}
var saludo = saludar("Rafa");
console.log(saludo);


// EXPRESIÓN --> Utilizar función como un valor
// También se les llama funciones anónimas
var suma = function(a,b) {
    return a+b;
}
console.log(suma (2,3));

// Función flecha o arrow function
var resta = (a,b) => {
    return a - b;
}
console.log(resta(4,3));

var multiplicar = (a, b) => a*b // Return implícito
console.log(multiplicar(3,2));
