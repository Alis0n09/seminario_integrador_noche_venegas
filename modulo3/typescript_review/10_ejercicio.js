"use strict";
// objetos.ts
// Declarar el tipo del objeto
const profesor = {
    nombre: "Ana García",
    catedra: "Programacion",
    activo: true,
    horario: "8:00 - 13:00"
};
console.log(profesor.nombre);
console.log(profesor.catedra);
console.log(`El profesor es: ${profesor.nombre}, la materia es: ${profesor.catedra}, ${profesor.activo}. Su horario es ${profesor.horario}`);
