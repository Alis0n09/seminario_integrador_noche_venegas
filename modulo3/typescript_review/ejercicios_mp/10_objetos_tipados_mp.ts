// objetos.ts

// Declarar el tipo del objeto
const empleado: { nombre: string; sueldo: number; activo: boolean } = {
  nombre: "Carlos Mendoza",
  sueldo:   850.00,
  activo: true
};

console.log(empleado.nombre);
console.log(empleado.sueldo);

// TypeScript avisa si falta una propiedad o tiene el tipo incorrecto
// const empleado2: { nombre: string; sueldo: number } = {
//   nombre: "Luis"
//   // ❌ Error: falta 'sueldo'
// };

// Propiedad opcional — se añade ? después del nombre
const descuento: { concepto: string; monto: number; autorizado?: boolean } = {
  concepto:  "Préstamo quirografario",
  monto:  120.00
  // autorizado es opcional, no hace falta incluirlo
};

console.log(descuento.autorizado); // undefined — no se lanza error
