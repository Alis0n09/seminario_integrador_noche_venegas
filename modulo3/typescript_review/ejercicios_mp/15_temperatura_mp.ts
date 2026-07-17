const sueldos = [450, 680, 520, 850, 390, 720];
let max = 0;
for (const sueldo of sueldos) {
    if (sueldo > max){
        max = sueldo
    }
}
console.log(max);
