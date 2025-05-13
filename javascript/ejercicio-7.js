// Ejercicio 7 - Análisis de 10 valores enteros ingresados

// Variables de conteo y acumulación
let negativos = 0;
let positivos = 0;
let multiplos15 = 0;
let sumaPares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Ingresa el valor ${i} (entero):`));

    if (numero < 0) {
        negativos++;
    } else if (numero > 0) {
        positivos++;
    }

    if (numero % 15 === 0) {
        multiplos15++;
    }

    if (numero % 2 === 0) {
        sumaPares += numero;
    }
}

// Mostrar resultados en consola
console.log(`Cantidad de valores negativos: ${negativos}`);
console.log(`Cantidad de valores positivos: ${positivos}`);
console.log(`Cantidad de múltiplos de 15: ${multiplos15}`);
console.log(`Suma de números pares: ${sumaPares}`);
