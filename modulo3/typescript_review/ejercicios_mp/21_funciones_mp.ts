// Concepto puro
function suma(a: number, b: number): number {
  return a + b;
}

function saludarEmpleado(nombre: string): string {
  return `Rol de pago generado para: ${nombre}`;
}

// TypeScript verifica el argumento Y el retorno
console.log(suma(450, 85));              // 535
console.log(saludarEmpleado("María López")); // Rol de pago generado para: María López

// Error de compilación — a propósito (descoméntalo para verlo):
// suma("450", 85);  // Argument of type 'string' is not assignable to 'number'

function calcularDescuentoIESS(sueldo: number, porcentaje: number): number {
  const descuento = sueldo * (porcentaje / 100);
  return Number((sueldo - descuento).toFixed(2));
}

function resumenRolPago(empleado: string, sueldo: number, aporteIESS: number): string {
  const neto = calcularDescuentoIESS(sueldo, aporteIESS);
  return `${empleado}: $${sueldo} → $${neto} (IESS ${aporteIESS}%)`;
}

console.log(resumenRolPago("Carlos Ruiz", 680, 9.45));   // Carlos Ruiz: $680 → $615.74 (IESS 9.45%)
console.log(resumenRolPago("Ana Vega", 520, 9.45));      // Ana Vega: $520 → $470.86 (IESS 9.45%)
console.log(resumenRolPago("Pedro Salazar", 450, 0));    // Pedro Salazar: $450 → $450 (IESS 0%)
