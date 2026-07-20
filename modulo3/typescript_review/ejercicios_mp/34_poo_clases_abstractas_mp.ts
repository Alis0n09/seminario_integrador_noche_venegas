// Concepto puro
abstract class ConceptoNomina {
  abstract calcular(): number;       // sin implementación — las subclases DEBEN implementarlo
  abstract describirConcepto(): string;

  // Los métodos concretos SÍ tienen implementación
  resumen(): string {
    return (
      `${this.describirConcepto()} | ` +
      `Monto: $${this.calcular().toFixed(2)}`
    );
  }
}

class Ingreso extends ConceptoNomina {
  private monto: number;
  private nombre: string;

  constructor(monto: number, nombre: string) {
    super();
    this.monto = monto;
    this.nombre = nombre;
  }

  override calcular(): number {
    return this.monto;
  }

  override describirConcepto(): string {
    return `Ingreso: ${this.nombre}`;
  }
}

class Descuento extends ConceptoNomina {
  private monto: number;
  private nombre: string;

  constructor(monto: number, nombre: string) {
    super();
    this.monto = monto;
    this.nombre = nombre;
  }

  override calcular(): number {
    return -this.monto;
  }

  override describirConcepto(): string {
    return `Descuento: ${this.nombre}`;
  }
}

// const c = new ConceptoNomina(); // Error: Cannot create an instance of an abstract class.

const sueldo = new Ingreso(680, "Sueldo base");
const iess = new Descuento(64.26, "Aporte IESS personal");

console.log(sueldo.resumen()); // Ingreso: Sueldo base | Monto: $680.00
console.log(iess.resumen());   // Descuento: Aporte IESS personal | Monto: $-64.26