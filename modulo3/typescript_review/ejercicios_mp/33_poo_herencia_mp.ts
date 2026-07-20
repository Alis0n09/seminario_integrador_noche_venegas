// Concepto puro
class Trabajador {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  generarRol(): string {
    return `${this.nombre} — rol de pago en proceso.`;
  }
}

class EmpleadoContrato extends Trabajador {
  departamento: string;

  constructor(nombre: string, departamento: string) {
    super(nombre); // llama al constructor del padre
    this.departamento = departamento;
  }

  // override sobrescribe el método del padre
  override generarRol(): string {
    return `${this.nombre} (${this.departamento}) — rol de pago generado.`;
  }

  liquidar(concepto: string): string {
    return `${this.nombre} — liquidación por ${concepto}.`;
  }
}

const t = new Trabajador("Temporal");
const e = new EmpleadoContrato("Carlos Ruiz", "Contabilidad");

console.log(t.generarRol());           // Temporal — rol de pago en proceso.
console.log(e.generarRol());           // Carlos Ruiz (Contabilidad) — rol de pago generado.
console.log(e.liquidar("fin de contrato")); // Carlos Ruiz — liquidación por fin de contrato.
console.log(e.departamento);           // Contabilidad

class Empleado {
  nombre: string;
  protected salarioBase: number;

  constructor(nombre: string, salarioBase: number) {
    this.nombre = nombre;
    this.salarioBase = salarioBase;
  }

  calcularSalario(): number {
    return this.salarioBase;
  }

  infoLaboral(): string {
    return `${this.nombre} — Salario: $${this.calcularSalario()}`;
  }
}

class Gerente extends Empleado {
  private bonificacion: number;

  constructor(nombre: string, salarioBase: number, bonificacion: number) {
    super(nombre, salarioBase);
    this.bonificacion = bonificacion;
  }

  override calcularSalario(): number {
    return this.salarioBase + this.bonificacion;
  }
}

class Vendedor extends Empleado {
  private comision: number;
  private ventasMes: number;

  constructor(nombre: string, salarioBase: number, comision: number, ventasMes: number) {
    super(nombre, salarioBase);
    this.comision = comision;
    this.ventasMes = ventasMes;
  }

  override calcularSalario(): number {
    return this.salarioBase + this.comision * this.ventasMes;
  }
}

const emp = new Empleado("Pedro Salazar", 450);
const ger = new Gerente("Laura Mendoza", 900, 350);
const vend = new Vendedor("Ana Vega", 460, 25, 40);

console.log(emp.infoLaboral());  // Pedro Salazar — Salario: $450
console.log(ger.infoLaboral());  // Laura Mendoza — Salario: $1250
console.log(vend.infoLaboral()); // Ana Vega — Salario: $1460