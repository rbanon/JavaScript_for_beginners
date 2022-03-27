/**
 * Operadores
 */

/**
 * Operadores de asignación
 */

// Operador de asignación ( = )
var x = 2; 
var y = true;

// Operador de asignación de adición ( += )
var x = 2;
var y = 1;

x += y; // x = x+y
console.log(x);

// Operador de asignación de resta ( -= )
var x = 1;
var y = 2;

x -= y; // x = x-y
console.log(x);

// Operador de asignación de multiplicación ( *= )
var x = 3;
var y = 2;

x *= y; // x = x*y
console.log(x);

// Operador de asignación de división ( /= )
var x = 3;
var y = 2;

x /= y; // x = x/y
console.log(x);

// Operador de asignación de residuo ( %= )
var x = 3;
var y = 2;

x %= y; // x = x%y
console.log(x);

// Operador de asignación de exponenciación ( **= )
var x = 3;
var y = 2;

x **= y; // x = x**y
console.log(x);


/**
 * Operadores de comparación
 */

// Operador igual ( == )
console.log(3 == 3); // true
console.log(3 == '3'); // true
console.log(3 == 4); // false

// Operador no es igual ( != )
console.log(3 != 3); // false

// Operador estríctamente igual ( === )
console.log(3 === 3); // true
console.log(3 === '3'); // false

// Operador desigualdad estricta ( !== )
console.log(3 !== '3'); // true

// Operadores >, >=, <, <=
console.log(3 > 3); // false
console.log(3 >= 3); // true
console.log(3 < 3); // false
console.log(3 >= 3); //true


/**
 * Operadores aritméticos
 *  suma, resta, multiplicación, división, módulo, exponenciación
 */
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 % 3);
console.log(2 ** 3);

// Operadores de incremento ( ++ )
var numero = 0;
// Símbolo antes. Primero incrementa el valor y luego lo retorna.
console.log(++numero); // 1
console.log(++numero); // 2
console.log(++numero); // 3

var numero = 0;
// Símbolo después. Retorna valor actual y después incrementa.
console.log(numero++); // 0
console.log(numero++); // 1
console.log(numero++); // 2

// Operador de decremento ( -- )
var numero = 3;
// Símbolo antes. Primero decrementa el valor y luego lo retorna.
console.log(--numero); // 2
console.log(--numero); // 1
console.log(--numero); // 0

var numero = 0;
// Símbolo después. Retorna valor actual y después decrementa.
console.log(numero--) // 3
console.log(numero--); // 2
console.log(numero--); // 1

/**
 * Operadores lógicos
 */

// AND
console.log(true && true); // true
console.log(true && false); // false
console.log(2 > 3 && 1 < 2); // false && true => false

// OR
console.log(true || true); // true
console.log(true || false); // true
console.log(2 > 3 || 1 < 2); // false || true => true

// NOT
console.log(!true); // false
console.log(!false); // true

/**
 * Otros operadores
 */

// Operador de cadena o concatnación ( + )
var nombre = 'Rafa';
var apellido = 'Banon';
var nombreCompleto = nombre+' '+apellido;
console.log(nombreCompleto);

// Operador condicional ( condición ? valorVerdadero : valorFalso )
console.log(2 > 3 ? 'Es mayor': 'Es menor');

// Operador de desestructuración
var persona = {
    nombre: 'Rafa',
    apellido: 'Banon'
}

var {nombre: nom,apellido} = persona;
console.log(nom);
console.log(apellido);
console.log(persona);

// Operador de desestructuración de arreglos
var arreglo = [1,2,3,4]
var [primeraPosicion] = arreglo;
console.log(primeraPosicion);

var[,segundaPosicion] = arreglo;
console.log(segundaPosicion);

/**
 * Operador de miembro o acceso de propiedad
 */

// Notación punto
var persona = {
    nombre: 'Rafa',
    apellido: 'Banon'
}

console.log(persona.nombre);
console.log(persona.apellido);

// Notación por corchetes
var persona = {
    nombre: 'Rafa',
    apellido: 'Banon'
};
console.log(persona['nombre']);
console.log(persona['apellido']);

// Notación por corchetes en arreglos
var arreglo = [21,22,23,24,25,26];
console.log(arreglo[1]); // 22 (cuenta desde 0 => 0,1,2,3,4)

// Operador de determinación de tipo ( typeof )
console.log(typeof 'Rafa'); // string
console.log(typeof 11); // number
console.log(typeof true); // boolean