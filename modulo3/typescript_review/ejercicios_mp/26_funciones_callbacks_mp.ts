// Concepto puro

// Tipo de función nombrado
type Calculador = (sueldo: number) => number;
type Predicado     = (sueldo: number) => boolean;

// Función que RECIBE una función (orden superior)
function aplicar(sueldo: number, fn: Calculador): number {
  return fn(sueldo);
}

// Función que DEVUELVE una función
function calculadorDe(porcentaje: number): Calculador {
  return (sueldo) => sueldo * (porcentaje / 100);
}

// Uso
const calcularIESS = calculadorDe(9.45);
const calcularFondosReserva: Calculador = (s) => s * 8.33 / 100;

console.log(aplicar(450, calcularIESS));    // 42.525
console.log(aplicar(450, calcularFondosReserva)); // 37.485
console.log(aplicar(450, (s) => s + 85)); // 535 (bonificación inline)

// Filtrar con un predicado tipado
function filtrar(sueldos: number[], condicion: Predicado): number[] {
  return sueldos.filter(condicion);
}

const sueldos = [450, 520, 680, 390, 850, 460];
console.log(filtrar(sueldos, (s) => s >= 460)); // [520, 680, 850, 460]
console.log(filtrar(sueldos, (s) => s > 600));       // [680, 850]


type RolPago = { cedula: string; sueldo: number; empleado: string };
type ProcesadorRol = (rol: RolPago) => RolPago;

// Funciones que transforman un rol de pago
const aplicarIESS: ProcesadorRol = (r) => ({
  ...r,
  sueldo: Number((r.sueldo * (1 - 9.45 / 100)).toFixed(2)),
});

const aplicarDescuentoPrestamo = (monto: number): ProcesadorRol =>
  (r) => ({ ...r, sueldo: Number((r.sueldo - monto).toFixed(2)) });

// Pipeline: aplica una lista de procesadores en orden
function procesarRolPago(rol: RolPago, pasos: ProcesadorRol[]): RolPago {
  return pasos.reduce((r, fn) => fn(r), rol);
}

const rol: RolPago = { cedula: "1712345678", sueldo: 680, empleado: "Carlos Ruiz" };

const resultado = procesarRolPago(rol, [
  aplicarDescuentoPrestamo(50),  // préstamo $50 → $630
  aplicarIESS,                   // - 9.45% IESS  → $570.47
]);

console.log(resultado);
// { cedula: '1712345678', sueldo: 570.47, empleado: 'Carlos Ruiz' }
