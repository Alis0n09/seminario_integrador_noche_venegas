// Concepto puro
type Cedula = string | number;           // unión de primitivos
type NombreEmpleado = string;                // alias de primitivo (documenta intención)
type Periodo = [number, number]; // alias de tupla [año, mes]

// Alias de objeto
type Empresa = {
  ruc: string;
  razonSocial: string;
};

const empresa: Empresa = { ruc: "1790123456001", razonSocial: "Distribuidora Andina S.A." };
const id: Cedula = 1712345678;          // válido
const id2: Cedula = "1712345678";  // también válido

type RolID = string | number;
type Prioridad = "baja" | "media" | "alta" | "urgente";

type IncidenciaNomina = {
  id: RolID;
  titulo: string;
  prioridad: Prioridad;
  resuelta: boolean;
};

function imprimirIncidencia(t: IncidenciaNomina): void {
  const estrella = t.prioridad === "urgente" ? " ⚠️" : "";
  console.log(`[${t.id}] ${t.titulo} — ${t.prioridad}${estrella}`);
}

const t1: IncidenciaNomina = { id: "N-001", titulo: "Descuadre en aportes IESS",  prioridad: "urgente", resuelta: false };
const t2: IncidenciaNomina = { id: 42,      titulo: "Actualizar sueldo base", prioridad: "baja",    resuelta: true  };

imprimirIncidencia(t1); // [N-001] Descuadre en aportes IESS — urgente ⚠️
imprimirIncidencia(t2); // [42] Actualizar sueldo base — baja
