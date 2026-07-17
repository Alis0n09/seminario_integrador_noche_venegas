// Concepto puro
interface Empleado {
  readonly cedula: string;      // no se puede cambiar después de crear el objeto
  nombre: string;           // obligatoria
  email: string;            // obligatoria
  banco?: string;          // opcional: puede estar o no
}

const e: Empleado = { cedula: "1712345678", nombre: "María López", email: "maria@empresa.ec" };

// e.cedula = "999"; // ERROR: no se puede asignar a 'cedula' porque es de solo lectura

// La propiedad opcional puede omitirse sin error:
const e2: Empleado = { cedula: "1723456789", nombre: "Carlos Ruiz", email: "carlos@empresa.ec", banco: "Pichincha" };

interface ConceptoPago {
  readonly codigo: string;
  nombre: string;
  monto: number;
  descripcion?: string;   // texto largo, no siempre presente
  activo: boolean;
}

function mostrarConcepto(c: ConceptoPago): void {
  const desc = c.descripcion ? ` — ${c.descripcion}` : "";
  const estado = c.activo ? "Activo" : "Inactivo";
  console.log(`[${c.codigo}] ${c.nombre} $${c.monto}${desc} (${estado})`);
}

const sueldoBase: ConceptoPago = {
  codigo: "ING-001",
  nombre: "Sueldo base",
  monto: 680,
  descripcion: "Remuneración mensual",
  activo: true,
};

const iess: ConceptoPago = {
  codigo: "DES-001",
  nombre: "Aporte IESS personal",
  monto: 64.26,
  activo: true,
};

mostrarConcepto(sueldoBase); // [ING-001] Sueldo base $680 — Remuneración mensual (Activo)
mostrarConcepto(iess);       // [DES-001] Aporte IESS personal $64.26 (Activo)


interface AnalistaNomina {
  readonly codigo: string;
  nombre: string;
  apellido: string;
  cargo: string;   
  departamento: string;
}

function mostrarAnalista(a: AnalistaNomina): void {
  const cargo = a.cargo ? ` — ${a.cargo}` : "";
  const departamento = a.departamento ? ` — ${a.departamento}` : "";
  console.log(`[${a.codigo}] ${a.nombre} ${cargo} (${departamento})`);
}
