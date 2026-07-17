// ternario.ts

const diasTrabajados: number = 28;

// Forma larga
let estadoPago: string;
if (diasTrabajados >= 30) {
  estadoPago = "Pago completo";
} else {
  estadoPago = "Pago proporcional";
}

// Forma corta con ternario
const estadoPago2: string = diasTrabajados >= 30 ? "Pago completo" : "Pago proporcional";

console.log(estadoPago);   // Pago proporcional
console.log(estadoPago2);  // Pago proporcional

// Muy útil dentro de template literals
const asistencia: number = 95;
const bonificacion = asistencia >= 90 ? "Bonificación aplicada" : "Sin bonificación";
console.log(`Asistencia: ${asistencia}% — ${bonificacion}`);

// No anidar ternarios — difícil de leer
// ✅ Mejor usar if/else para tres o más casos
const resultado =
  asistencia >= 98 ? "Excelente" :
  asistencia >= 90 ? "Buena"       :
  asistencia >= 75 ? "Regular"      : "Deficiente";

console.log(resultado);  // Buena
