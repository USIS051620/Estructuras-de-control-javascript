// Función que calcula la nota final del alumno
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
  let notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
    console.log("Nombre: " + nombre);
    console.log("Carnet: " + carnet);
    console.log("Nota final del estudiante: " + notaFinal.toFixed(2));
}

// Pedir datos al usuario
let nombre = prompt("Ingresa tu nombre:");
let carnet = prompt("Ingresa tu número de carnet:");
let examen = Number(prompt("Ingresa tu nota de examen (0-10) (20%):"));
let tareas = Number(prompt("Ingresa tu nota de tareas (0-10) (40%):"));
let asistencia = Number(prompt("Ingresa tu nota de asistencia (0-10) (10%):"));
let investigacion = Number(prompt("Ingresa tu nota de investigación (0-10) (30%):"));

// Llamar a la función
calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion);
