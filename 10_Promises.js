/**
 * Promises
 */

// Retornar un error con funcions
function getData(){
    return new Promise((resolve,reject) => {})
}

// Retornar error con funciones expresivas
// getData es una promesa -> No se le pueden pasar parámetros
const getData1 = new Promise((resolve,reject)=> {})


// getData es una función que retorna una nueva promesa -> Se le pueden pasar parámetros
const getData = (error) => new Promise((resolve,reject) => {
    if (!error){
        setTimeout(() => {
            resolve({
                nombre: 'Rafa',
                apellido: 'Banon'  
        });
        }, 3000)
    } else {
        reject('No pudimos obtener los datos')
    }
});

console.log('Inicio');
getData(false)
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
    
console.log('Fin');


const getData3 = (error) => new Promise((resolve,reject) => {
    if (!error){
        setTimeout(() => {
            resolve({
                nombre: 'Juan',
                apellido: 'Banon'  
        });
        }, 3000)
    } else {
        reject('No pudimos obtener los datos de data 2')
    }
});

console.log('Inicio');
getData(false)
    .then((data)=> {
        console.log(data)
        return getData2(true)
    })
    .then(()=>{
        console.log(data);
    })
    .catch((error)=>console.log(error))
    
console.log('Fin');

// ASYNC - AWAIT
const getData = (error) => new Promise((resolve,reject) => {
    if (!error){
        setTimeout(() => {
            resolve({
                nombre: 'Rafa',
                apellido: 'Banon'  
        });
        }, 3000)
    } else {
        reject('No pudimos obtener los datos')
    }
});

const getData2 = (error) => new Promise((resolve,reject) => {
    if (!error){
        setTimeout(() => {
            resolve({
                nombre: 'Juan',
                apellido: 'Banon'  
        });
        }, 3000)
    } else {
        reject('No pudimos obtener los datos de data 2')
    }
});

const main = async () => {
    try{
        let resultado = await getData(false);
        let resultado2 = await getData2(true);
        console.log(resultado);
        console.log(resultado2);
    } catch(error) {
        console.log(error);
    }
}

main()