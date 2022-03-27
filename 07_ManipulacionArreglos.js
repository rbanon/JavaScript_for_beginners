/**
 * Manipulación de arreglos
 */

// FOREACH
var letras = ['a','b','c','d','e'];
console.log(letras.length); // Cantidad de elementos del arreglo

// For clásico
for (let i= 0; i < letras.length; i++) {
    const element = letras[i];
    console.log(element);
}

// Con ForEach
var letras = ['a','b','c','d','e'];
// Se puede hacer con laves
letras.forEach((elemento) => {
    console.log(elemento);
})
// O sin llaves
letras.forEach((elemento) =>  console.log(elemento))

// PUSH - SHIFT - POP -> Mutables: Modifican el elemento
// Push: Modifica el array original
var letras = ['a','b','c','d','e'];
letras.push('f');
console.log(letras);

// Shift: Obtener el primer elemento y lo abstrae del array
var letras = ['a','b','c','d','e'];
var primeraLetra = letras.shift();
console.log(primeraLetra);
console.log(letras);

// Pop: Obetener el último elemento y lo abstrae del array
var letras = ['a','b','c','d','e'];
var  ultimaLetra = letras.pop();
console.log(ultimaLetra);
console.log(letras);

// MAP -> Inmutable. No modifica el array original
var estudiantes = ['Rafa', 'Pedro', 'Marina', 'Juan'];
var asistencia = estudiantes.map( (nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
})
console.log(estudiantes);
console.log(asistencia);

var estudiantes = ['Rafa', 'Pedro', 'Marina', 'Juan'];
var asistencia = estudiantes.map( (nombre) => `${nombre}.` )
console.log(estudiantes);
console.log(asistencia);

// Modifica el espacio en memoria de cada producto y, por tanto,
// aun siendo inmutable el arreglo, modifica los elementos internos
var productos = [
    {nombre: 'camisetas', precio: 15},
    {nombre: 'zapatillas', precio: 20},
    {nombre: 'pantalon', precio: 25}
]
var productosImpuesto = productos.map((producto) => {
    producto.impuesto = .12;
    return producto;
})
console.log(productos);
console.log(productosImpuesto);

// Para no modificar el arreglo original
// Los tres puntos de la nueva variable expanden el nuevo producto. No modifica el original, lo agrega a uno nuevo
var productos = [
    {nombre: 'camisetas', precio: 15},
    {nombre: 'zapatillas', precio: 20},
    {nombre: 'pantalon', precio: 25}
]
var productosImpuesto = productos.map((producto) => {
    return {
        ...producto, 
        impuesto: .12
    }
})
console.log(productos);
console.log(productosImpuesto);

// Para ver unicamente los precios de los productos
var productos = [
    {nombre: 'camisetas', precio: 15},
    {nombre: 'zapatillas', precio: 20},
    {nombre: 'pantalon', precio: 25}
]
var precios = productos.map((producto) => producto.precio)
console.log(productos);
console.log(precios);

// FILTER. Inmutable. Filtra en base a una condición
var estudiantes = [
{nombre: 'Rafa', edad: 28, matriculuado: true},
{nombre: 'Ana', edad: 24, matriculuado: true},
{nombre: 'Jose', edad: 21, matriculuado: false},
{nombre: 'Eva', edad: 30, matriculuado: true},
{nombre: 'Daniel', edad: 25, matriculuado: false}
]
var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 25);
console.log(estudiantes);
console.log('Mayores de 25');
console.log(filtrado);

// Se puede poner más de un filtro
var estudiantes = [
    {nombre: 'Rafa', edad: 28, matriculuado: true},
    {nombre: 'Ana', edad: 24, matriculuado: true},
    {nombre: 'Jose', edad: 21, matriculuado: false},
    {nombre: 'Eva', edad: 30, matriculuado: true},
    {nombre: 'Daniel', edad: 25, matriculuado: false}
    ]
    var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 25 && estudiante.matriculuado);
    console.log(estudiantes);
    console.log('Mayores de 25 y matriculados');
    console.log(filtrado);


// REDUCE. Inmutable
// Ejemplo 1: Media calificaciones
var calificaciones = [3,5,9,10,10];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion , 0 );
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

// Ejemplo 2: Cantidad de veces que se repite cada edad
var edades = [21,21,23,43,21,43,18,18,23,23];
// Salida
// {
//     21: 3,
//     43: 2,
//     ...
// }
var resultado = edades.reduce((acumulador,edad) => {
    if (!acumulador[edad]) {
        acumulador[edad] = 1;
    } else {
        acumulador[edad] += 1;
    }
    return acumulador;
    },{})
console.log(edades);
console.log(resultado);


// Ejemplo 3: Precio total de cada producto (precio x totalVendido)
var ventas = [
    {nombre: 'camiseta', precio: 15, totalVendido: 10},
    {nombre: 'zapatillas', precio: 150, totalVendido: 8},
    {nombre: 'pantalon', precio: 20, totalVendido: 30}
]

var resultado = ventas.reduce((acumulador,producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = `$${totalVentas}`;
    return acumulador;
},{})

console.log(ventas);
console.log(resultado);

// Ejemplo 4: Cantidad de estudiantes matriculados y cantidad no matriculados
var estudiantes = [
    {nombre: 'Rafa', edad: 28, matriculado: true},
    {nombre: 'Ana', edad: 24, matriculado: true},
    {nombre: 'Jose', edad: 21, matriculado: false},
    {nombre: 'Eva', edad: 30, matriculado: true},
    {nombre: 'Daniel', edad: 25, matriculado: false}
    ]

var resultado = estudiantes
    .map((estudiante) => estudiante.matriculado) // [ true, true, false, true, false ]
    .reduce((acumulador,item) => {
    if (item){
        acumulador.matriculado += 1;
    } else {
        acumulador.noMatriculado += 1;
    }
    return acumulador;
},{matriculado: 0, noMatriculado: 0})

console.log(estudiantes);
console.log(resultado);


// SOME - EVERY
// Some: Al menos uno de los elementos cumple una condición
// Every: Todos los elementos cumplen una condición

// Saber si es al menos uno es par
// SOME
var numeros = [1,2,3,4,5,6,7,8,9,10]
var resultado = numeros.some( (numero) => numero % 2 === 0);
console.log(resultado); // True

var numeros = [1,3,5,7,10]
var resultado = numeros.some( (numero) => numero % 2 === 0);
console.log(resultado); // True

var numeros = [1,3,5,7]
var resultado = numeros.some( (numero) => numero % 2 === 0);
console.log(resultado); // False


// EVERY
var numeros = [1,2,3,4,5,6,7,8,9,10]
var resultado = numeros.every( (numero) => numero % 2 === 0);
console.log(resultado); // False

var numeros = [2,4,6,7,10]
var resultado = numeros.every( (numero) => numero % 2 === 0);
console.log(resultado); // False

var numeros = [2,4,6]
var resultado = numeros.every( (numero) => numero % 2 === 0);
console.log(resultado); // True


// FIND - FINDINDEX
// Find: Buscar un elemento que cumpla una condición y retornar
// FinIndex: Buscar un elemento y retornar posición

// FIND
var clientes = [
    {id: 1, nombre: 'Rafa'},
    {id: 2, nombre: 'Juan'},
    {id: 3, nombre: 'Ana'},
    {id: 4, nombre: 'María'},
    {id: 5, nombre: 'Pedro'},
    {id: 6, nombre: 'Ana'},
]

var cliente = clientes.find((cliente)=> cliente.nombre === 'Ana');
console.log(clientes);
console.log(cliente);
// Diferencia entre Find y Filter: Find devuelve solo 1 elemento. Filter hace el filtrado de toda la lista
var filtro = clientes.filter((cliente)=> cliente.nombre === 'Ana');
console.log(filtro);

// FINDINDEX
var clientes = [
    {id: 1, nombre: 'Rafa'},
    {id: 2, nombre: 'Juan'},
    {id: 3, nombre: 'Ana'},
    {id: 4, nombre: 'María'},
    {id: 5, nombre: 'Pedro'},
    {id: 6, nombre: 'Ana'}
]
var posicion = clientes.findIndex((cliente)=>cliente.nombre === 'Ana'); // Devuelve el primer valor que encuentre
console.log(posicion);
console.log(clientes[posicion]);


// INCLUDES
// Ayuda a determinar si en un array existe un elemento
var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('perro');
console.log(resultado);
console.log('Rafa'.includes('R')); // Se puede utilizar con strings también

// Ejemplo buscador con filter e 
var clientes = [
    {id: 1, nombre: 'Rafa'},
    {id: 2, nombre: 'Juan'},
    {id: 3, nombre: 'Ana'},
    {id: 4, nombre: 'María'},
    {id: 5, nombre: 'Pedro'},
    {id: 6, nombre: 'Ana'}
]
var buscador = (parametro) => {
    return clientes.filter ((cliente) => cliente.nombre.includes(parametro))}

console.log(buscador('na'));

// JOIN
// Unir todos los elementos de un array y crear un string a partir de él
var elementos = ['aire', 'fuego', 'agua', 'tierra'];
var resultado = elementos.join(' - '); // sin parámetro utiliza el espacio para concatenar
console.log(resultado);

// Join de arreglo de objetos no se puede sin map
var clientes = [
    {id: 1, nombre: 'Rafa'},
    {id: 2, nombre: 'Juan'},
    {id: 3, nombre: 'Ana'},
    {id: 4, nombre: 'María'},
    {id: 5, nombre: 'Pedro'},
    {id: 6, nombre: 'Ana'}
]
console.log(clientes.join());

// Utilidad: Generar archivos .csv
var csvGenerator = (array,separador=',') => {
    let headers = Object.keys(array[0]).join(separador)
    let data = array.map((element) => Object.values(element).join(separador))
    console.log(headers);
    data.forEach(element  => console.log(element))
}

csvGenerator(clientes);

// CONCAT - SORT - SPLICE - SLICE
// Concat: Concatenar 2 arrays
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,0];
var array3 = array1.concat(array2);
var array4 = [...array1,...array2] // Si utilizamos solo la ',' se genera un array de 2 arrays
console.log(array3);
console.log(array4);

// Sort: Ordena
var array1 = [3,1,2,5,7,4,8,6,9,0];
console.log(array1.sort());

var meses = ['Dic', 'Feb', 'Ene', 'Abr', 'Mar'];
console.log(meses.sort()); // Ordena por orden alfabético (código ASCII)

var array = [1, 10000, 21, 30, 4];
console.log(array.sort()); // Ordena en base al código ASCII

var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a,b) => a-b )
console.log(ordenado);


// SPLICE . Mutable
var nombres = ['Rafa', 'Ana', 'Maria', 'Pedro'];
nombres.splice(1,1, 'Javier') // Hasta 3 parámetros: Pos. inicial, elementos a eliminar, elemento a sustituir
console.log(nombres);

// SLICE. Inmutable
var nombres = ['Rafa', 'Ana', 'Maria', 'Pedro'];
var resultado = nombres.slice(1,3) // 2 parámetros. Pos. inicial, pos. final(no incluyente)
console.log(resultado);
console.log(nombres);