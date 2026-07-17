// null-undefined.ts

// En JS esto no da error, en TS sí (modo estricto)
// let empleado: string = null;    // ❌ Error

// Para permitir null hay que declararlo explícitamente
let empleado: string | null = null;   // ✅ puede ser string o null

empleado = "Pedro Salazar";
console.log(empleado);  // "Pedro Salazar"
empleado = null;
console.log(empleado);  // null

// undefined — variable declarada pero sin valor
let banco: string | undefined;
console.log(banco);  // undefined

banco = "Banco Pichincha";
console.log(banco);  // "Banco Pichincha"
