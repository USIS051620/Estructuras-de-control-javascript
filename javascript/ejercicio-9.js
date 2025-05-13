// Ejercicio 9 - Conversión de Celsius a Fahrenheit y clasificación

function clasificarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit <= 32) {
        return "Temperatura baja";
    } else if (fahrenheit > 32 && fahrenheit <= 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit > 68 && fahrenheit <= 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

// Pedir la temperatura en Celsius
let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

// Convertir a Fahrenheit
let fahrenheit = (celsius * 9 / 5) + 32;

// Mostrar resultados en consola
console.log(`Temperatura ingresada: ${celsius}°C`);
console.log(`Convertida a Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
console.log(`Clasificación: ${clasificarTemperatura(fahrenheit)}`);
