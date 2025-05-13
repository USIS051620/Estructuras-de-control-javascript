// Función para ingresar edades y calcular el promedio
function obtenerPromedio(cantidad, nombreTurno) {
    let suma = 0;
    for (let i = 1; i <= cantidad; i++) {
        let edad = parseInt(prompt(`Ingresa la edad del estudiante ${i} del turno ${nombreTurno}:`));
        suma += edad;
    }
    return suma / cantidad;
}

// Calcular promedios de cada turno
let promedioManana = obtenerPromedio(5, "mañana");
let promedioTarde = obtenerPromedio(6, "tarde");
let promedioNoche = obtenerPromedio(11, "noche");

// Mostrar promedios
console.log(`Promedio de edades del turno mañana: ${promedioManana.toFixed(2)}`);
console.log(`Promedio de edades del turno tarde: ${promedioTarde.toFixed(2)}`);
console.log(`Promedio de edades del turno noche: ${promedioNoche.toFixed(2)}`);

// Determinar cuál tiene el mayor promedio
if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
    console.log("El turno mañana tiene el promedio de edad más alto.");
} else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
    console.log("El turno tarde tiene el promedio de edad más alto.");
} else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
    console.log("El turno noche tiene el promedio de edad más alto.");
} else {
    console.log("Hay un empate entre dos o más turnos en el promedio de edades.");
}
