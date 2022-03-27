/**
 * Ejercicios Ciclos
 * 1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
 * Pista: anidamiento.
 * 2.Realice el equivalente con la declaración while y do-while
 */

// 1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
// FOR
for (let tabla = 2;tabla <= 12; tabla++){
    console.log(`Tabla del ${tabla}`);
    for (let mult = 1; mult <= 10; mult++){
        var res = tabla*mult;
        console.log(tabla+'*'+mult+'='+res);
    }
}

// WHILE
tabla = 2;
while (tabla <= 12) {
    mult = 1;
    while (mult <= 10){
        var res = tabla*mult;
        console.log(tabla+'*'+mult+'='+res);
        mult++;
    }
    tabla++;
}

//DO WHILE
tabla = 2;
do {
    console.log(`Tabla del ${tabla}`);
    mult = 1;
    while (mult <= 10){
        var res = tabla*mult;
        console.log(tabla+'*'+mult+'='+res);
        mult++;
    }
    tabla++;
} while (tabla <= 12)