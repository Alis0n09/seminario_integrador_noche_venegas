// Concepto puro
const sueldos: number[] = [450, 520, 680];

// forEach: para "hacer algo" con cada elemento
sueldos.forEach((s) => console.log(s * 1.0945));  // sueldo + aporte IESS estimado

// forEach con bloque de codigo amplio
sueldos.forEach((sueldo) => {
    console.log(sueldo * 1.0945);
    console.log(sueldo / 30);
    console.log(sueldo / 12);
}) 

// map: para CREAR una lista transformada
const decimos: number[] = sueldos.map((s) => s / 12);
console.log(decimos);  // [37.5, 43.33..., 56.66...]

// normalizar cédulas de empleados
const cedulas: string[] = ["  1712345678 ", "1723456789", " 1734567890"];

const limpias: string[] = cedulas.map((c) => c.trim());
console.log(limpias);  // ["1712345678", "1723456789", "1734567890"]

// forEach para reportar, map para transformar
limpias.forEach((c, i) => console.log(`Empleado ${i + 1} — Cédula: ${c}`));
