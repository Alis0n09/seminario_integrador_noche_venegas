// Concepto puro

// void — no hay valor de retorno significativo
function imprimirRolPago(texto: string): void {
  console.log(texto);
  // No hay return, o hay un "return;" vacío
}

// never — la función nunca retorna
function lanzarErrorNomina(mensaje: string): never {
  throw new Error(mensaje);
  // TypeScript sabe que el código tras throw es inalcanzable
}

function bucleInfinito(): never {
  while (true) {
    // proceso eterno de cálculo de nómina, por ejemplo
  }
}

// Inferencia — TypeScript deduce "number"
function calcularNeto(sueldo: number, descuento: number) {
  return sueldo - descuento; // tipo inferido: number
}

// Pero el retorno explícito actúa de contrato:
function dividirSueldo(sueldo: number, dias: number): number {
  if (dias === 0) lanzarErrorNomina("Días trabajados no puede ser cero"); // never encaja en cualquier tipo
  return sueldo / dias;
}
