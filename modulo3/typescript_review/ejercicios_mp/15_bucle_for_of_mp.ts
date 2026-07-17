// for-of.ts

const empleados: string[] = ["Maria Lopez", "Carlos Ruiz", "Ana Vega", "Pedro Salazar"];
const sueldos: number[] = [450, 680, 520, 390];

// TypeScript sabe que 'empleado' es string
for (const empleado of empleados) {
  console.log(`Procesando rol de pago: ${empleado}`);
  // empleado.toUpperCase() ✅ — TypeScript sabe que es string
}

// TypeScript sabe que 'sueldo' es number
let totalNomina: number = 0;
for (const sueldo of sueldos) {
  totalNomina += sueldo;
  // sueldo.toFixed(2) ✅ — TypeScript sabe que es number
}
console.log(`Total nómina: $${totalNomina}`);

// Con índice usando entries()
for (const [indice, empleado] of empleados.entries()) {
  console.log(`${indice + 1}. ${empleado}`);
}

interface ConceptoNomina {
  concepto: string;
  monto: number;
  tipo: string;
}

const rolPago: ConceptoNomina[] = [
  { concepto: "Sueldo base",    monto: 450,   tipo: "ingreso" },
  { concepto: "Horas extras",   monto: 85,    tipo: "ingreso" },
  { concepto: "IESS personal",  monto: 42.53, tipo: "descuento" },
];

let netoPagar = 0;
for (const item of rolPago) {
  const valor = item.tipo === "ingreso" ? item.monto : -item.monto;
  console.log(`${item.concepto}: $${item.monto} (${item.tipo})`);
  netoPagar += valor;
}
console.log(`NETO A PAGAR: $${netoPagar.toFixed(2)}`);
