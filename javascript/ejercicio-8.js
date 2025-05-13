// Ejercicio 8 - Tabla de multiplicar del número ingresado

let numero = parseInt(prompt("Ingresa un número para mostrar su tabla de multiplicar:"));

console.log(`Tabla de multiplicar del ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
