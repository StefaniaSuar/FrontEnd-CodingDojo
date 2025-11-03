
//Ejemplo 1:

const variableEjemplo = "ejemplo";
const arregloEjemplo = ["eje", "mp", "lo"];
console.log(arregloEjemplo);

/*
// 1. Predice la salida del código. ["eje", "mp", "lo"]
// 2. Registra la salida obtenida. ["eje", "mp", "lo"]
// 3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript: */

// 1- Desestructuración en objetos anidados
const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad); 
console.log(salario); 

/*
1. Predice la salida del código. Salida del codigo: 30, undefined.
2. Registra la salida obtenida. Salida obtenida: 30, undefined.
3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript. -> Basicamente se utiliza la destructuracion para extraer valores de 
objetos anidados y asignarlos a variables locales.
*/


// 2- Uso del operador spread en la fusión de objetos 
const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);

/*
1. Predice la salida del código. Salida del codigo: { a: 1, b: 4, c: 5,d: 6}
2. Registra la salida obtenida. Salida obtenida:{ a: 1, b: 4, c: 5, d: 6 }
3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript. -> Utiliza  el operador spread donde realiza 
la fusion de ambos objetos , donde las propiedas se sobrescriben porque se repiten, e imprime el resultado en consola.
*/

//3- Ámbito de variables en funciones y bloques
const verificar = () => {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
}
verificar();

/*
1. Predice la salida del código. Salida del codigo: 4 y eror
2. Registra la salida obtenida. Salida obtenida: 4 y error
3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript. -> Muestra el valor de 4 porque es una variable declarada con var, es decir esta declarada dentro
y fuera del bloque if. En cambio las variables a y b fueron declaradas con const y let respectivamente, por lo tanto solo existen dentro del bloque if.
*/

// 4- Propiedades de objetos inmutables
const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);

/*
1. Predice la salida del código. Salida del codigo:  29
2. Registra la salida obtenida. Salida obtenida: 29
3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript. -> El objeto no se puede modificar porque fue declarado con Object.freeze, por lo tanto
toma el valor de 29, que es el que tenia antes de intentar modificarlo.
*/

// 5 - Manipulación de arreglos sin modificar el original
const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);

/*
1. Predice la salida del código. Salida del codigo:  [1, 2, 3]  [1, 2, 3, 4]
2. Registra la salida obtenida. Salida obtenida: [1, 2, 3]  [1, 2, 3, 4]
3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript. -> Hace una copia del arreglo original y le agrega un nuevo elemento, 
sin modificar el arreglo original.
*/

// 6 - Acceso a elementos de un arreglo con destructuración
const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);

/*
1. Predice la salida del código. Salida del codigo:  manzana naranja
2. Registra la salida obtenida. Salida obtenida: manzana naranja
3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript. ->  Llama a los elementos del arreglo frutas y los asigna a las variables
primera y segunda respectivamente.
*/

// 7 - Comportamiento del ámbito de let en bucles anidados 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(j);
    }
}

/*
1. Predice la salida del código. Salida del codigo:  0 1 0 1 0 1
2. Registra la salida obtenida. Salida obtenida: 0 1 0 1 0 1
3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript. ->  Cada vez que se ejecuta el primer for, se hace un recorrido del segundo for, hasta que no 
    se cumple la condicion. Por eso se ejecuta 3 veces.

*/

// 8- Uso del operador spread para combinar arreglos
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);

/*
1. Predice la salida del código. Salida del codigo:  [1, 2, 3, 3, 4, 5]
2. Registra la salida obtenida. Salida obtenida: [1, 2, 3, 3, 4, 5]
3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript. -> Utiliza el operador spread para combinar los dos arreglos en uno solo.

*/

// 9- Alcance y captura de variables dentro de una función
const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();

/*
1. Predice la salida del código. Salida del codigo:  Luis 25
2. Registra la salida obtenida. Salida obtenida: Luis 25
3. Explica el resultado en base a la sintaxis y comportamiento de JavaScript. -> Muestra el nombre luis porque fue declarado en el if con var, por lo tanto sobreescribe
    el valor anterior y edad toma el primer valor ya que fue declarada con let dentro del if, por lo tanto solo existe dentro de ese bloque.

*/ 