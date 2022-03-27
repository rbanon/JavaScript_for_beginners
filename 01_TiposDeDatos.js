/**
 * Tipos de datos
 */

// Número - number
console.log(42);
console.log(24.5);

// Texto - string
console.log("Texto con comillas dobles");
console.log("Texto con comillas simples");
console.log(`Texto con comillas invertidas`); // Template strings

// Valores lógicos - booleans
console.log(true);
console.log(false);

// Indefinido - undefined
console.log(undefined);

// Null
console.log(null);

/**
 * Tipos de datos estructurales
 */

// Objeto clave-valor - object
console.log({
  nombre: "Rafa",
  edad: 29,
  fechaDeNacimiento: null,
  esAlto: false,
  ciudades: ["Valencia", "Madrid", "Barcelona"],
  direccion: { calle: "Avda. Principal", número: 42, piso: 7 }
});

// Tipos de dato de tipo lista - array
console.log(["México", "España", "Guatemala", "Argentina"]); // Un solo tipo de dato

console.log([21, true, { nombre: "Rafa" }, [1, 2, 3, 4]]); // Varios tipos de datos
