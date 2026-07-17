// tipo-any.ts

let dato: any = "nómina quincenal";
dato = 850.00;        // ✅ sin error
dato = true;          // ✅ sin error
dato = [450, 520, 680]; // ✅ sin error

// Parece útil pero es trampa: pierdes el autocompletado
// y los errores vuelven a aparecer en tiempo de ejecución
console.log(dato.metodoQueNoExiste()); // TypeScript no avisa, pero falla al ejecutar
