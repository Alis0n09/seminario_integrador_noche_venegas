// Concepto puro
class EmpleadoNomina {
  nombre: string;
  sueldoBase: number;
  activo: boolean;

  constructor(nombre: string, sueldoBase: number, activo: boolean) {
    this.nombre = nombre;
    this.sueldoBase = sueldoBase;
    this.activo = activo;
  }

  // Método: acción que puede realizar la instancia
  describir(): string {
    const estado = this.activo ? "activo en nómina" : "inactivo";
    return `${this.nombre} — $${this.sueldoBase} (${estado})`;
  }
}

const contador = new EmpleadoNomina("Ana Vega", 850, true);
const vendedor = new EmpleadoNomina("Pedro Salazar", 520, false);

console.log(contador.describir()); // Ana Vega — $850 (activo en nómina)
console.log(vendedor.describir()); // Pedro Salazar — $520 (inactivo)
