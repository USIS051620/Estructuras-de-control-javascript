// Función que evalúa si es mayor o menor de edad usando operador ternario
function verificarEdad(edad) {
    let mensaje = (edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad."; // Operador ternario
    console.log(mensaje);
}

// Solicita la edad al usuario
let edadUsuario = prompt("Por favor, ingresa tu edad:");

// Convierte a número y llama la función
verificarEdad(Number(edadUsuario));