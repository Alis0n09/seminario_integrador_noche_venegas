// Concepto puro

// Declaración tradicional
function calcularIESS(sueldo: number): number {
  return sueldo * 9.45 / 100;
}

// Flecha equivalente — con cuerpo explícito
const calcularIESSFlecha = (sueldo: number): number => {
  return sueldo * 9.45 / 100;
};

// Flecha con retorno implícito (una expresión, sin llaves)
const calcularIESSCorto = (sueldo: number): number => sueldo * 9.45 / 100;

// Sin parámetros
const periodoActual = (): string => new Date().toLocaleDateString("es-EC");

// Un solo parámetro (paréntesis opcionales, pero recomendados en TS)
const decimoTercero = (sueldo: number): number => sueldo / 12;

console.log(calcularIESS(450));       // 42.525
console.log(calcularIESSFlecha(450)); // 42.525
console.log(calcularIESSCorto(450));  // 42.525
console.log(decimoTercero(680));      // 56.666...
console.log(periodoActual());         // e.g. "14/7/2026"

const trim      = (s: string): string => s.trim();
const aMinusculas = (s: string): string => s.toLowerCase();
const capitalizar = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const quitarEspacios = (s: string): string => s.replace(/\s+/g, "_");

// Encadenar transformaciones manualmente
function normalizarEmpleado(nombre: string): string {
  return quitarEspacios(capitalizar(aMinusculas(trim(nombre))));
}

const entradas = ["  MARÍA LÓPEZ  ", " carlos ruiz", "PEDRO  SALAZAR "];
entradas.forEach((e) => console.log(normalizarEmpleado(e)));
// María_lópez
// Carlos_ruiz
// Pedro__salazar  (doble espacio interno → doble guión)
