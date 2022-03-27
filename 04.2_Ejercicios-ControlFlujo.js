/**
 * Ejercicios Control de Flujos
 * 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
 * El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 * 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
 * Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
 * Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
 * Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
 * Si la compra supera los $50 el gasto de envío será gratuito
 * El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

// 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
const DIA_ES = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
const DIA_EN = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

dia = 'sabado';

switch(dia){
    case DIA_ES[0]:
        console.log(DIA_EN[0]);
        break;
    case DIA_ES[1]:
        console.log(DIA_EN[1]);
        break;
    case DIA_ES[2]:
        console.log(DIA_EN[2]);
        break;
    case DIA_ES[3]:
        console.log(DIA_EN[3]);
        break;
    case DIA_ES[4]:
        console.log(DIA_EN[4]);
        break;
    case DIA_ES[5]:
        console.log(DIA_EN[5]);
        break;
    case DIA_ES[6]:
        console.log(DIA_EN[6]);
        break;
    default:
        console.log('Día incorrecto');
}

// 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
// IF
precio = 32;
if (precio <= 10){
    precio += 3;
    console.log(`Precio total: ${precio}`);
} else if(precio <= 20){
    precio += 5;
    console.log(`Precio total: ${precio}`);
} else if (precio <= 50){
    precio += 7;
    console.log(`Precio total: ${precio}`);
} else {
    console.log('Sin gastos de envío');
}

//SWITCH
precio = 30;
switch (true) {
    case (precio<=10):
        precio += 3;
        console.log(`Precio total: ${precio}`);  
        break;
    case (precio<=20):
        precio += 5;
    console.log(`Precio total: ${precio}`);
        break;
    case (precio<=50):
        precio += 7;
        console.log(`Precio total: ${precio}`);
        break;
    default:
        console.log('Sin gastos de envío');
}
