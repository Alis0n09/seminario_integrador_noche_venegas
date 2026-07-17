// Concepto puro

// Opcional: el parámetro puede no llegarse a pasar
function crearEtiquetaNomina(texto: string, mayusculas?: boolean): string {
  // Dentro, mayusculas es boolean | undefined
  if (mayusculas) {
    return `[${texto.toUpperCase()}]`;
  }
  return `[${texto}]`;
}

console.log(crearEtiquetaNomina("sueldo base"));          // [sueldo base]
console.log(crearEtiquetaNomina("horas extras", true)); // [HORAS EXTRAS]

// Por defecto: si no se pasa, usa el valor indicado
function repetirConcepto(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetirConcepto("IESS "));    // IESS IESS IESS  (usa el default 3)
console.log(repetirConcepto("IESS ", 5)); // IESS IESS IESS IESS IESS

type Nivel = "info" | "warn" | "error";

function logNomina(
  mensaje: string,
  nivel: Nivel = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<Nivel, string> = {
    info:  "ℹ️  INFO ",
    warn:  "⚠️  WARN ",
    error: "❌ ERROR",
  };

  const hora = timestamp ? ` [${new Date().toISOString()}]` : "";
  return `${prefijos[nivel]}${hora}: ${mensaje}`;
}

console.log(logNomina("Nómina del mes iniciada"));
// ℹ️  INFO : Nómina del mes iniciada

console.log(logNomina("Descuadre en totales", "warn"));
// ⚠️  WARN : Descuadre en totales

console.log(logNomina("Error al conectar con IESS", "error", true));
// ❌ ERROR [2026-07-14T...]: Error al conectar con IESS
