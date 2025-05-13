// Ejercicio 5 - Calcular descuento según coche y precio

function calcularDescuento(carros, precio) {
    let descuento = 0;

    if (carros === "FORD FIESTA") {
        descuento = precio * 0.05;
        console.log("Descuento del 5%");
    } else if (carros === "FORD FOCUS") {
        descuento = precio * 0.10;
        console.log("Descuento del 10%");
    } else if (carros === "FORD ESCAPE") {
        descuento = precio * 0.20;
        console.log("Descuento del 20%");
    } else {
        console.log("Modelo no válido. No se aplica descuento.");
        return;
    }

    let precioFinal = precio - descuento;

    // Mostrar resultados en consola
    console.log(`Coche seleccionado: ${carros}`);
    console.log(`Precio original: $${precio.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Precio final con descuento: $${precioFinal.toFixed(2)}`);
}

// Entradas del usuario
let carro = prompt("Ingresa el modelo del coche (FORD FIESTA, FORD FOCUS, FORD ESCAPE):").toUpperCase();
let precio = parseFloat(prompt("Ingresa el precio del coche:"));

// Llamada a la función
calcularDescuento(carro, precio);

