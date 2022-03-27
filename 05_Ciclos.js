/**
 *  Ciclos
 */

// WHILE
var contador = 1;

while (contador <= 20){
    console.log(contador+' Hola mundo');
    contador++;
}

// DO WHILE
var contador = 50;
do {
    console.log(contador+' Hola mundo');
} while (contador <= 20);

// FOR
// for(expresionInicial;expresionCondicional;expresionDeActualizacion) {instrucciones}
for (let i = 1; i <= 10; i++) {
    console.log(contador+' Hola mundo');
}

// FOR - IN --> Para objetos
// Solo sirve para iterar dentro de objetos JS
var persona = {
    nombre: 'Rafa',
    apellido: 'Banon',
    edad: 29
}

for (let clave in persona) {
    console.log(clave,':',persona[clave]);
}

var persona = {
    nombre: 'Rafa',
    apellido: 'Banon',
    edad: 29
}

for (let clave in persona) {
    if (clave === 'apellido'){
        switch (persona[clave]) {
            case 'Banon':
                console.log('Hola Banon!');
                break;
            default:
                console.log('No eres de la familia Banon');
        }
    }
}

// FOR - OF --> Para objetos iterables (arrays, strings...)
var arreglo = [1,2,3,4,5]
for (let valor of arreglo) {
    console.log(valor);
}

var nombre = 'Rafa'
for (let valor of nombre){
    console.log(valor);
}
