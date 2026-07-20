// Concepto puro
interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class RolPago implements Serializable, Validable {
  cedula: string;
  conceptos: string[];
  total: number;

  constructor(cedula: string, conceptos: string[], total: number) {
    this.cedula = cedula;
    this.conceptos = conceptos;
    this.total = total;
  }

  serializar(): string {
    return JSON.stringify({ cedula: this.cedula, conceptos: this.conceptos, total: this.total });
  }

  esValido(): boolean {
    return this.conceptos.length > 0 && this.total > 0;
  }
}

const rol = new RolPago("1712345678", ["Sueldo base", "Horas extras", "IESS personal"], 615.74);
console.log(rol.esValido());    // true
console.log(rol.serializar());
// {"cedula":"1712345678","conceptos":["Sueldo base","Horas extras","IESS personal"],"total":615.74}