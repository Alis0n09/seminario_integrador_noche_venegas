// tipos-string.ts
const nombre4:    string = "Ana García";
const saludo:    string = `Hola, ${nombre4}`;
const vacia:     string = "";
const comillas:  string = 'También con comillas simples';

console.log(nombre4);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombre4.toUpperCase());      // ANA GARCÍA
console.log(nombre4.toLowerCase());      // ana garcía
console.log(nombre4.includes("García")); // true
console.log(nombre4.split(" "));         // ["Ana", "García"]