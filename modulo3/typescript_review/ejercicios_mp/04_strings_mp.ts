// tipos-string.ts
const nombre4:    string = "Luis Pérez";
const saludo:    string = `Rol de pago generado para: ${nombre4}`;
const vacia:     string = "";
const comillas:  string = 'Departamento: Talento Humano';

console.log(nombre4);
console.log(saludo);
console.log(`La cadena vacia tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombre4.toUpperCase());      // LUIS PÉREZ
console.log(nombre4.toLowerCase());      // luis pérez
console.log(nombre4.includes("Pérez"));  // true
console.log(nombre4.split(" "));         // ["Luis", "Pérez"]
