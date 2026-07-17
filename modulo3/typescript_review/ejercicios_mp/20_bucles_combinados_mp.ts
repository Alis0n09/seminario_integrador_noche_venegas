type Estado = "al_dia" | "pendiente" | "atrasado";

interface EmpleadoNomina {
  nombre: string;
  estado: Estado;
  diasRetraso: number;
}

const empleados: EmpleadoNomina[] = [
  { nombre: "María López",   estado: "al_dia",    diasRetraso: 0 },
  { nombre: "Carlos Ruiz",   estado: "pendiente", diasRetraso: 2 },
  { nombre: "Ana Vega",      estado: "atrasado",  diasRetraso: 5 },
  { nombre: "Pedro Salazar", estado: "al_dia",    diasRetraso: 0 },
];

console.log("=== Control de pagos ===");
let atrasados = 0;

for (const e of empleados) {
  if (e.estado === "atrasado") atrasados++;

  // switch para traducir el estado a un ícono
  let icono: string;
  switch (e.estado) {
    case "al_dia":    icono = "🟢"; break;
    case "pendiente": icono = "🟡"; break;
    case "atrasado":  icono = "🔴"; break;
    default:          icono = "⚪";
  }

  // if anidado para matizar el diagnóstico
  let diagnostico: string;
  if (e.estado === "al_dia") {
    if (e.diasRetraso === 0) {
      diagnostico = `${icono} ${e.nombre}: pago al día`;
    } else {
      diagnostico = `${icono} ${e.nombre}: pago reciente (${e.diasRetraso} días)`;
    }
  } else {
    diagnostico = `${icono} ${e.nombre}: requiere atención (${e.estado}, ${e.diasRetraso} días)`;
  }

  console.log(diagnostico);
}

// while para alertar mientras haya atrasados (simulado)
let alerta = atrasados;
while (alerta > 0) {
  console.log(`🚨 Quedan ${alerta} empleado(s) con pago atrasado — notificando...`);
  alerta--;
}
console.log(`Resumen: ${atrasados}/${empleados.length} atrasados`);
