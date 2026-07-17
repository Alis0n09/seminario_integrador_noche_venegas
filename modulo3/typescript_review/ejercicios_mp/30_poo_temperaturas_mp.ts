class Nomina {
  sueldoBruto: number;
  sueldoNeto : number;

  constructor(bruto: number, neto: number) {
    this.sueldoBruto = bruto;
    this.sueldoNeto = neto
  }

  calcularIESS(): number {
    return this.sueldoBruto * 9.45 / 100;
  }

  calcularDecimoTercero(): number {
    return this.sueldoBruto / 12;
  }

  calcularNeto(): number {
    return this.sueldoBruto - this.calcularIESS()
  }

  describir(): string {
    return (
      `Bruto: $${this.sueldoBruto} | ` +
      `IESS: $${this.calcularIESS().toFixed(2)} | ` +
      `Décimo 3ro: $${this.calcularDecimoTercero().toFixed(2)} | ` +
      `Neto: $${this.calcularNeto().toFixed(2)}`
    );
  }
}

const rolGerente = new Nomina(1200, 0);
const rolAsistente = new Nomina(450, 0);

console.log(rolGerente.describir());
console.log(rolAsistente.describir());
console.log(`Gerente — IESS: $${rolGerente.calcularIESS().toFixed(2)}, Décimo 3ro: $${rolGerente.calcularDecimoTercero().toFixed(2)}`);
console.log(`Asistente — IESS: $${rolAsistente.calcularIESS().toFixed(2)}, Décimo 3ro: $${rolAsistente.calcularDecimoTercero().toFixed(2)}`);
