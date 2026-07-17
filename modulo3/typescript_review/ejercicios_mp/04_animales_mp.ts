// tipos-string.ts
const nombre1:    string = "Maria";
const cargo:    string = "Contadora de nomina";
const departamento:     string = "Recursos Humanos";
const empresa:  string = 'Comercial Guayaquil Cía. Ltda.';

console.log(nombre1);
console.log(cargo);
console.log(`La cadena departamento tiene longitud: ${departamento.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombre1.toUpperCase());           // MARIA
console.log(cargo.toLowerCase());             // contadora de nomina
console.log(empresa.includes("Guayaquil"));   // true
console.log(cargo.split(" "));                // ["Contadora", "de", "nomina"]
