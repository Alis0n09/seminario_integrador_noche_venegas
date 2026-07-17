// objetos.ts

// Declarar el tipo del objeto
const analistaNomina: { nombre: string; cedula: string; activo: boolean; horario: string } = {
  nombre: "Ana Garcia",
  cedula:   "1712345678",
  activo: true,
  horario: "8:00 - 17:00"
};

console.log(analistaNomina.nombre);
console.log(analistaNomina.cedula);
console.log(`El analista es: ${analistaNomina.nombre}, cédula: ${analistaNomina.cedula}, activo: ${analistaNomina.activo}. Su horario es ${analistaNomina.horario}`);

