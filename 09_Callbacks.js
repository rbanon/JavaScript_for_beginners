/**
 * Callbacks
 * Permite llamar a una función dentro de otra una vez la primera termine
 */

// Función sin callback
const suma1 = (a,b) => {
    return a + b
}
var resultado = suma(1,2)
console.log(resultado);

// Función con callback
const suma = (a,b, cb) => {
    cb(a+b)
}

const imprimir = (data) => console.log(data); 
suma(1,2,imprimir)

// Ejemplo
const getData1 = (cb) => {
    setTimeout(()=>{
        cb({
            nombre: 'Rafa',
            apellido: 'Banon'
        })
    },3000);
}

const imprimirData1 = (data) => console.log(data);

getData(imprimirData1)


// ¿Qué pasa si detectamos un error en el código?
const getData = (cb, cbError) => {
    if(false) { // Forzamos que de error
    setTimeout(()=>{
        cb({
            nombre: 'Rafa',
            apellido: 'Banon'
            })
        },3000);
    } else {
    cbError(new Error('No se pudo obtener los datos'))
    }
}

const imprimirData = (data) => console.log(data);
const errorHandler = (error)=> console.log(error);

getData(imprimirData,errorHandler)