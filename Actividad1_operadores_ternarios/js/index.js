// Valor a modificar
let nota=10;

/*
A mostrar en el <div class="resultado">
Si es de 5 a 10: "¡¡Has APROBADO!!"(color "green")
o sinó: "Has suspendido" (color "red")

A mostrar en el <div class="nota">*/

document.querySelector()
/*

De 9 en adelante:       "Excelente"
De 7 a menos de 9:      "Notable"
De 5 hasta menos de 7:  "Aprobado"
Menos de 5:             "Suspendido"
Menos de 0 o más de 10: "No te flipes"
*/

/* Usar sólo TERNARIOS
(...) ? :
*/

// Sin operador ternario
const obtenerNivelAcceso = (edad) => {
    if (edad < 18) {
        return 'Acceso restringido';
    } else if (edad <= 65) {
        return 'Acceso completo';
    } else {
        return 'Acceso senior';
    }
};

console.log(obtenerNivelAcceso(30)); // "Acceso completo"
console.log(obtenerNivelAcceso(70)); // "Acceso senior"

// con operador ternario
const obtenerNivelAcceso = (edad) =>
    edad < 18 ? 'Acceso restringido' :
    edad <= 65 ? 'Acceso completo' :
    'Acceso senior';

console.log(obtenerNivelAcceso(30)); // "Acceso completo"
console.log(obtenerNivelAcceso(70)); // "Acceso senior"
console.log(obtenerNivelAcceso(10));

// Cuando hay multiples condiciones
const edad = 70;
const nivelAcceso = edad < 18 
    ? 'Acceso restringido' 
    : edad <= 65 
        ? 'Acceso completo' 
        : 'Acceso sénior';

console.log(nivelAcceso); // "Acceso sénior"