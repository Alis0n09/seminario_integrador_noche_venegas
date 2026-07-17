// tipos-boolean.ts
const contratoIndefinido:  boolean = true;
const nominaAprobada:  boolean = false;

console.log(contratoIndefinido);
console.log(!contratoIndefinido);              // false  (negación)
console.log(contratoIndefinido && nominaAprobada); // false  (ambos deben ser true)
console.log(contratoIndefinido || nominaAprobada); // true   (al menos uno es true)

// Los booleanos suelen venir de comparaciones
const sueldo1 = 520;
const superaSBU: boolean = sueldo1 >= 460;
console.log(`¿Supera el SBU? ${superaSBU}`); // ¿Supera el SBU? true
