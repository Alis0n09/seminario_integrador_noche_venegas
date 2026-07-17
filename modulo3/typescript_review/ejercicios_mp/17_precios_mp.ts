const sueldos: number[] = [450, 680, 520, 850];

const sueldosConIESS: number[] = sueldos.map((s) =>
    Number((s * (1 - 9.45 / 100)).toFixed(2))
);

console.log(sueldos);

sueldosConIESS.forEach((neto) =>
    console.log(`Sueldo neto (después IESS): $${neto}`)
);
