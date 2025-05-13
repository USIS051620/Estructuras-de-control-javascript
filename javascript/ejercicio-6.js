// Ejercicio 6 - Descuento en viajes turísticos con validación

function calcularDescuentoViaje(origen, destino, precio) {
    let descuento = 0;

    if (origen !== "PALMA") {
        console.log("Origen inválido. Solo se permiten viajes desde Palma.");
        return;
    }

    if (destino === "LA COSTA DEL SOL") {
        descuento = precio * 0.05;
        console.log("Destino válido. Descuento del 5%");
    } else if (destino === "PANCHIMALCO") {
        descuento = precio * 0.10;
        console.log("Destino válido. Descuento del 10%");
    } else if (destino === "PUERTO EL TRIUNFO") {
        descuento = precio * 0.15;
        console.log("Destino válido. Descuento del 15%");
    } else {
        console.log("Destino inválido. Las opciones válidas son: La Costa del Sol, Panchimalco, Puerto el Triunfo.");
        return;
    }

    let total = precio - descuento;

    // Mostrar resumen
    console.log(`Origen: ${origen}`);
    console.log(`Destino: ${destino}`);
    console.log(`Precio original: $${precio.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);
}

// Entradas con validación y ayuda para el usuario
let origen = prompt("Ingresa la ciudad de origen (debe ser 'Palma'):").toUpperCase();

if (origen === "PALMA") {
    let destino = prompt("Ingresa el destino (La Costa del Sol, Panchimalco, Puerto el Triunfo):").toUpperCase();
    let precio = parseFloat(prompt("Ingresa el precio del viaje:"));

    calcularDescuentoViaje(origen, destino, precio);
} else {
    console.log("Solo se permiten viajes desde la ciudad de Palma.");
}
