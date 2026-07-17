// switch.ts

const quincena: number = 2;

switch (quincena) {
  case 1:
    console.log("Primera quincena — pago del 15");
    break;
  case 2:
    console.log("Segunda quincena — pago fin de mes");  // ← este se ejecuta
    break;
  default:
    console.log("Quincena no valida");
}

// Switch con string
type EstadoNomina = "borrador" | "calculada" | "aprobada" | "pagada";

function mensajeNomina(estado: EstadoNomina): string {
  switch (estado) {
    case "borrador":
      return "La nomina esta en elaboracion";
    case "calculada":
      return "Roles de pago listos para revision";
    case "aprobada":
      return "Nomina aprobada — pendiente de transferencia";
    case "pagada":
      return "Nomina pagada a los empleados";
  }
}

// TypeScript sabe que los 4 casos son todos los posibles
// No necesita default — si añades un estado nuevo, exige manejarlo

console.log(mensajeNomina("calculada"));    // Roles de pago listos para revision
console.log(mensajeNomina("pagada"));       // Nomina pagada a los empleados
