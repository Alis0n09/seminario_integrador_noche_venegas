// Concepto puro
class CalculoNomina {
  private _sueldoBase: number;

  constructor(sueldoBase: number) {
    this._sueldoBase = sueldoBase;
  }

  get sueldoBase(): number {
    return this._sueldoBase;
  }

  set sueldoBase(valor: number) {
    if (valor <= 0) throw new Error("El sueldo debe ser positivo");
    this._sueldoBase = valor;
  }

  get aporteIESS(): number {
    return this._sueldoBase * 9.45 / 100;
  }
}

const c = new CalculoNomina(680);
console.log(c.sueldoBase);              // 680   ← usa el getter
console.log(c.aporteIESS.toFixed(2));   // 64.26

c.sueldoBase = 850;                     // usa el setter
console.log(c.aporteIESS.toFixed(2));   // 80.33

// c.sueldoBase = -3;  // Error: El sueldo debe ser positivo
