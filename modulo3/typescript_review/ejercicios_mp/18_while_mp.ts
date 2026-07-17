// while — comprueba la condición ANTES de cada vuelta
let empleadosPendientes = 12;       // roles por generar
let procesados = 0;

while (empleadosPendientes > 0) {
  const lote = empleadosPendientes > 5 ? 5 : empleadosPendientes;
  procesados++;
  empleadosPendientes -= lote;
  console.log(`Lote ${procesados}: ${lote} roles generados (quedan ${empleadosPendientes})`);
}

// do-while — ejecuta AL MENOS UNA VEZ, ideal para reintentos
let intentos = 0;
let nominaAprobada = false;

do {
  intentos++;
  console.log(`Intento de aprobación #${intentos}...`);
  if (intentos === 3) nominaAprobada = true;  // simula éxito al 3er intento
} while (!nominaAprobada && intentos < 5);

console.log(nominaAprobada ? `Nomina aprobada en ${intentos} intentos` : "Falló");

const montos: number[] = [450, 680, -1, 520, 850, -1, 390];
//                                  ↑              ↑   montos inválidos (negativos)

// continue: ignora los inválidos pero sigue procesando
console.log("--- con continue ---");
for (const m of montos) {
  if (m < 0) {
    console.log("Monto invalido ignorado");
    continue;  // salta al siguiente
  }
  console.log(`Procesando sueldo: $${m}`);
}

