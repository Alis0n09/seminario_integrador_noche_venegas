// tipos-string.ts
const nombre1:    string = "Canelo";
const raza:    string = "Gato";
const color:     string = "Naranja";
const dueño:  string = 'Alison';

console.log(nombre1);
console.log(raza);
console.log(`La cadena color tiene longitud: ${color.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombre1.toUpperCase());      // ANA GARCÍA
console.log(nombre1.toLowerCase());      // ana garcía
console.log(nombre1.includes("Venegas")); // true
console.log(nombre1.split(" "));         // ["Ana", "García"]