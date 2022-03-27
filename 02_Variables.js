/**
 * Variables
 *
 * 3 forma de definir variables
 *
 * var
 * let
 * const
 *
 */

// Variables con VAR
var nombre = "Rafa";
console.log(nombre);

var edad = 29;
console.log(edad);

var persona = {
    nombre: 'Rafa',
    apellido: 'Banon',
    edad: 29,
    direccion: {
        calle: 'Avda. Principal',
        portal: 2
    },
    ciudadesVisitadas: [
        'Madrid',
        'Sevilla',
        'Barcelona'        
    ]
}

var ciudad; // Se define la variable pero no tiene nada. 
console.log(ciudad); // undefined
ciudad = 'Valencia';
console.log(ciudad); // Valencia
ciudad = 'Barcelona'; // Se redefine
console.log(ciudad);
ciudad = 4; // Puede cambiar el tipo de dato, ¡¡ CUIDADO !!
console.log(ciudad);

// Variables con LET
let nombre = 'Rafa';
console.log(nombre);

/**
 * Diferencia entre VAR y LET:
 * Var es una variables GLOBAL.
 * Let solo funciona dentro de un bloque de código
 */
{
    let saludo = 'Hola, buenos días.';
    console.log(saludo);
}
console.log(saludo); // Error porque LET no está definido fuera del bloque

{
    var saludo = 'Hola, buenos días.';
    console.log(saludo);
}
console.log(saludo); // No hay errror porque VAR se guarda a nivel global

// Variabless con CONST
const NUMERO_PI = 3.14; // Buena práctica escribir las constantes en mayúsculas
// NUMERO_PI = 3.1415; // Si intentamos redefinir da error
console.log(NUMERO_PI);

var nombre = 'Rafa';
var  saludo = `Hola, soy ${nombre}
Cómo estás? 
`; // Template string permite utilizar variables dentro y saltos de línea
console.log(saludo);