// condicionales.ts

const sueldo: number = 520;

if (sueldo > 800) {
  console.log("Sueldo alto — revisar retenciones");
} else if (sueldo > 460) {
  console.log("Sueldo sobre el SBU");   // ← este se ejecuta
} else if (sueldo > 300) {
  console.log("Sueldo basico");
} else {
  console.log("Sueldo por debajo del minimo");
}

// Con boolean
const contratoVigente: boolean = true;

if (contratoVigente) {
  console.log("Incluir en la nomina del mes");
} else {
  console.log("Excluir de la nomina");
}

// Con string
const rol: string = "admin";

if (rol === "admin") {
  console.log("Puede aprobar la nomina");
} else if (rol === "analista") {
  console.log("Puede calcular roles de pago");
} else {
  console.log("Solo consulta");
}
