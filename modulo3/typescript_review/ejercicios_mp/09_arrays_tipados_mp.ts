// arrays.ts

const empleados:   string[]  = ["Maria Lopez", "Carlos Ruiz", "Ana Vega"];
const sueldos:    number[]  = [450, 680, 520];
const activos:   boolean[] = [true, true, false];

console.log(empleados);
console.log(empleados[0]);        // "Maria Lopez"
console.log(empleados.length);    // 3

// Los métodos de array funcionan igual que en JS
empleados.push("Pedro Salazar");
console.log(empleados);

const nombresMayus = empleados.map(n => n.toUpperCase());
console.log(nombresMayus);

const sueldosAltos = sueldos.filter(s => s >= 500);
console.log(sueldosAltos);

// TypeScript avisa si añades el tipo incorrecto
// empleados.push(850);  // ❌ Error: 'number' no es 'string'
