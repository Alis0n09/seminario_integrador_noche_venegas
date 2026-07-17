// Concepto puro
class RolPago {
  readonly cedula: string;           // no cambia tras la creación
  public empleado: string;        // visible desde fuera
  private sueldoNeto: number;         // solo accesible dentro de la clase
  protected moneda: string;      // accesible también en subclases

  constructor(cedula: string, empleado: string, sueldoInicial: number) {
    this.cedula = cedula;
    this.empleado = empleado;
    this.sueldoNeto = sueldoInicial;
    this.moneda = "USD";
  }

  // Método público que expone el sueldo de forma controlada
  obtenerSueldoNeto(): number {
    return this.sueldoNeto;
  }

  agregarBonificacion(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.sueldoNeto += monto;
  }
}

const rol = new RolPago("1712345678", "María López", 615.74);
console.log(rol.empleado);              // María López
console.log(rol.cedula);                // 1712345678
console.log(rol.obtenerSueldoNeto());   // 615.74
rol.agregarBonificacion(85);
console.log(rol.obtenerSueldoNeto());  // 700.74

// rol.sueldoNeto = 9999;  // Error: 'sueldoNeto' is private
// rol.cedula = "otro";    // Error: 'cedula' is readonly
