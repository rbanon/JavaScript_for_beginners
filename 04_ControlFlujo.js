/**
 * Control de flujo
 */

// Estructura IF
// if(condición){código}
var llueve = false; 
if (llueve){ // No entra al if
    console.log('Está lloviendo');
}

var administrador = true;
if (administrador){
    console.log('Bienvenido al sistema.');
}

var administrador = 'administrador';
if (administrador === 'administrador'){
    console.log('Bienvenido al sistema.');
}

const MAYORIA_DE_EDAD = 18;
var edad = 14;
if (edad >= MAYORIA_DE_EDAD){
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

var semaforo = 'rojo';
if(semaforo === 'verde') {
    console.log('Arranca');
} else if (semaforo === 'amarillo') {
    console.log('Prepárate');
} else if ( semaforo === 'rojo') {
    console.log('Motor apagado');
} else {
    console.log('Error');
}

// Switch

var producto = 'papaya';
switch(producto) {
    case 'papaya':
    case 'banana':
        console.log('Cuestan 2€');
         break;
    case 'mango':
        console.log('Los mangos cuestan 2€');
        break;
    default:
        console.log('No disponemos de ese producto');
}
