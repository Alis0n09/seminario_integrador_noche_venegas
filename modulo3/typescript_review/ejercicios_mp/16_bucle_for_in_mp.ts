// Concepto puro
const aportesIESS: Record<string, number> = {
  personal: 9.45,
  patronal: 11.15,
  fondosReserva: 8.33,
};

for (const tipo in aportesIESS) {
  console.log(`${tipo} → ${aportesIESS[tipo]}%`);
}
// personal → 9.45%, patronal → 11.15%, fondosReserva → 8.33%

const configNomina = {
  empresa: "Distribuidora Andina S.A.",
  periodo: "2026-07",
  moneda: "USD",
  empleadosActivos: 45,
};

console.log("--- Configuracion de nomina ---");
for (const clave in configNomina) {
  const valor = configNomina[clave as keyof typeof configNomina];
  console.log(`${clave.padEnd(18)}: ${valor}`);
}
