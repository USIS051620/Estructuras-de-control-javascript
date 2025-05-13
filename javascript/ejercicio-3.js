// Ejercicio 3 - Cálculo de aumento salarial

function calcularAumento(nombre, salario, categoria) {
    let porcentaje;

    // Asignar porcentaje según categoría
    if (categoria === 'A') {
        porcentaje = 0.15;
    } else if (categoria === 'B') {
        porcentaje = 0.30;
    } else if (categoria === 'C') {
        porcentaje = 0.10;
    } else if (categoria === 'D') {
        porcentaje = 0.20;
    } else {
        console.log("Categoría inválida.");
        return;
    }

    let aumento = salario * porcentaje;
    let nuevoSalario = salario + aumento;

    // Mostrar los datos del empleado
    console.log(`Empleado: ${nombre}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Salario actual: $${salario.toFixed(2)}`);
    console.log(`Aumento: $${aumento.toFixed(2)} (${porcentaje * 100}%)`);
    console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);
}

// Entrada de datos
let nombre = prompt("Ingresa el nombre del empleado:");
let salario = parseFloat(prompt("Ingresa el salario actual:"));
let categoria = prompt("Ingresa la categoría (A, B, C o D):").toUpperCase();

// Llamar a la función
calcularAumento(nombre, salario, categoria);
