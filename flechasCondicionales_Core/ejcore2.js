//Ejercicio 1: Conversor de temperatura
/*Crea una función flecha que convierta temperaturas de grados Celsius a Fahrenheit. La fórmula para convertir Celsius a Fahrenheit es:
Fahreneit = (Celsius * 9 / 5) + 32
*/

const conversorTemperatura = (celsius) => (celsius * 9 / 5) + 32;
console.log(conversorTemperatura(40)); // 104

//Ejercicio 2: Generador de mensajes personalizados

/*Implementa una función flecha que tome un nombre y una edad como argumentos y devuelva un mensaje en 
formato de cadena, por ejemplo: "Hola Juan, tienes 30 años de edad." */

const mensajeGenerado = (nombre, edad ) => `Hola ${nombre}, tienes ${edad} años de edad.`;
console.log(mensajeGenerado("Juan", 30)); // "Hola Juan, tienes 30 años de edad."

//Ejercicio 3: Convertir de millas a kilómetros
//Crea una función flecha que convierta millas a kilómetros. Considera que: 1 milla = 1.60934 km

const millasAKm = (millas) => millas * 1.60934;
console.log(millasAKm(20)); // 32.1869

//Ejercicio 4: Consejos según el clima

/*Crea una función flecha que, según el clima ingresado como argumento, retorne un consejo adecuado. Por ejemplo:

Si el clima es “lluvioso”, debe sugerir llevar un paraguas.
Si el clima es “soleado”, debe sugerir llevar un sombrero.
Utiliza el operador ternario para simplificar la evaluación condicional en este ejercicio.*/

const clima = (estadoClima) =>
    estadoClima === "lluvioso" ? "Lleva un paraguas." :
    estadoClima === "soleado" ? "Lleva un sombrero." :
    "disfruta tu dia";
console.log(clima("lluvioso")); // "Lleva un paraguas."
console.log(clima("soleado")); // "Lleva un sombrero."
console.log(clima("nublado")); // "disfruta tu dia"