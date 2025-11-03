// Destructuracion simple

const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Springfield',
        numero: 123,
    },
    hobbies: ['leer', 'correr', 'programar'],
};

console.log(persona.nombre); // Juan


// Destructuracion simple
const {nombre,edad} = persona;
console.log (nombre,edad); // Juan 30

// Destructuracion anidada
const {direccion: {ciudad, pais = "Desconocido"}} = persona;
console.log (ciudad,pais); // Springfield

// Destructuracion de arreglos
const [hobby1, hobby2] = persona.hobbies;
console.log (hobby1, hobby2); // leer

 