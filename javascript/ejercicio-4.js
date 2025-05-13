// Ejercicio 4 - Determinar el número mayor

function mayorNumero(num1, num2) {
    let mayor = (num1 > num2) ? num1 : (num2 > num1) ? num2 : "Ambos números son iguales"; // Operador ternario
    console.log(`El número mayor es: ${mayor}`);
}

// Entrada de datos
let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

// Llamar a la función
mayorNumero(numero1, numero2);