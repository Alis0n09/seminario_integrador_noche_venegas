// Concepto puro

// El rest parameter SIEMPRE es el último
function sumarSueldos(...sueldos: number[]): number {
  return sueldos.reduce((acc, s) => acc + s, 0);
}

console.log(sumarSueldos(450, 520));          // 970
console.log(sumarSueldos(450, 680, 520, 390));   // 2040
console.log(sumarSueldos());                 // 0

// Combinado con parámetros normales
function construirRolPago(empleado: string, ...conceptos: string[]): string {
  return `${empleado}: ${conceptos.join(" + ")}`;
}

console.log(construirRolPago("María López", "Sueldo base", "Horas extras", "Bonificación"));
// María López: Sueldo base + Horas extras + Bonificación


function registrarEventoNomina(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? ` | ${detalles.join(" · ")}` : "";
  console.log(`[${timestamp}] ${tipo.toUpperCase()}${cuerpo}`);
}

registrarEventoNomina("inicio");
// [10:05:01] INICIO

registrarEventoNomina("calculo", "empleados: 45", "periodo: 2026-07");
// [10:05:02] CALCULO | empleados: 45 · periodo: 2026-07

registrarEventoNomina("error", "módulo: aportes IESS", "código: 503", "reintento: sí");
// [10:05:03] ERROR | módulo: aportes IESS · código: 503 · reintento: sí
