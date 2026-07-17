// tipos-number.ts
const sueldoBase:     number = 450;
const aporteIESS:    number = 9.45;
const horasExtras:   number = 12;
const decimoTercero:     number = 450.00;  // el _ es solo visual, no cambia el valor
const resultado:  number = 450 / 30;

console.log(sueldoBase);
console.log(aporteIESS);
console.log(decimoTercero);
console.log(resultado);                   // 15
console.log(resultado.toFixed(2));        // "15.00"

// Operaciones
console.log(450 + 85);   // 535  (sueldo + bonificación)
console.log(450 - 42.53);   // 407.47  (descuento IESS personal)
console.log(450 * 1.5);   // 675  (hora extra al 50%)
console.log(450 / 30);   // 15  (sueldo diario)
console.log(450 % 30);   // 0  (resto de la división)
console.log(2 ** 10);  // 1024  (potencia)
