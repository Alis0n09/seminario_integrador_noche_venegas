console.log("------------------------");
const roles = { contabilidad: 850, ventas: 720, produccion: 680, administracion: 520 }
let contador = 0;
for (const valor in roles){
    const sueldos = roles[valor as keyof typeof roles];
    if (sueldos >= 680){
        console.log( `Sueldo alto: ${valor}` );
        contador ++;
    }
}
console.log(contador);
