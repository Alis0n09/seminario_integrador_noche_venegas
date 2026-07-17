const montos2: number[] = [450, 680, -1, 520, 850, -1, 390];
//                                  ↑              ↑   montos inválidos (negativos)

// continue: ignora los inválidos pero sigue procesando
console.log("--- con continue ---");
for (const m of montos2) {
  if (m < 0) {
    console.log("Monto invalido ignorado");
    continue;  // salta al siguiente
  }
  console.log(`Procesando sueldo: $${m}`);
}

// break: se detiene al primer error crítico
console.log("--- con break ---");
for (const m of montos2) {
  if (m < 0) {
    console.log("Error crítico en nomina — deteniendo");
    break;  // sale del bucle
  }
  console.log(`Procesando sueldo: $${m}`);
}
