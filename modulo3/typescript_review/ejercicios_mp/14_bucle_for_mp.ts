// bucle-for.ts

// For clásico
for (let i = 1; i <= 5; i++) {
  console.log(`Empleado #${i} procesado`);
}

// Recorrer un array por índice
const departamentos: string[] = ["Contabilidad", "Ventas", "Producción", "Talento Humano"];

for (let i = 0; i < departamentos.length; i++) {
  console.log(`${i + 1}. ${departamentos[i]}`);
}

// For hacia atrás
for (let i = departamentos.length - 1; i >= 0; i--) {
  console.log(departamentos[i]);
}

// Tabla de aportes IESS tipada
function tablaAporteIESS(sueldoBase: number): void {
  console.log(`\n--- Aporte IESS sobre $${sueldoBase} ---`);
  for (let i = 1; i <= 10; i++) {
    const aporte: number = sueldoBase * (9.45 / 100) * i / 10;
    console.log(`  Mes ${i.toString().padStart(2)} = $${aporte.toFixed(2).padStart(7)}`);
  }
}

tablaAporteIESS(450);
