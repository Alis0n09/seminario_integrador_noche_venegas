print("Gestion de empleados - Listas")
print("Crear listas")
vacia = []
print(vacia)
codigos = [101, 102, 103, 104, 105]
print(codigos)
nombres = ["Alison", "John", "Jose", "Alex"]
print(nombres)
mixta = [101, "Alison", True, "Quito", None, 850.50]
print(mixta)
anidada = [101, 102, [103, 104], 105, [106, [107, 108]]]
print(anidada)

print("Acceso a los elementos de una lista")
print(nombres[1])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])

print("CRUD de una lista de empleados")
empleados = ["Alison", "John", "Jose", "Alex"]
print(empleados)
empleados.insert(1, "Pedrito")
print(empleados)
empleados.append("Sofia")
print(empleados)
empleados.extend(["Carlos", "Elena"])
empleados[0] = "Maria Emilia"
print(empleados)
empleados.remove("Maria Emilia")
print(empleados)
eliminado = empleados.pop()
print("Eliminado:", eliminado)
eliminado = empleados.pop(2)
print("Eliminado:", eliminado)
print(empleados)
del empleados[0]
print(empleados)

print("Buscar valores en los elementos de una lista")
print("Alison" in empleados)
print(empleados.index("John"))
print(empleados.count("John"))

print("Ordenar lista de empleados")
sueldos_desordenados = [850, 600, 1200, 950, 700]
print(sueldos_desordenados)

sueldos_desordenados.sort()
print(sueldos_desordenados)

sueldos_desordenados.sort(reverse=True)
print(sueldos_desordenados)

ordenada = sorted(sueldos_desordenados)
print(ordenada)
print(sueldos_desordenados)

print("Diccionarios en nomina")
print("Crear diccionarios")
vacio = {}
empleado = {"nombre": "Pedrito", "sueldo": 850, "cargo": "Operativo"}
config = dict(empresa="UTE", moneda="USD")

print(empleado["nombre"])
empleado["nombre"] = "Jose"
print(empleado)
del empleado["sueldo"]
print(empleado)
print("nombre" in empleado)
print("cargo" in empleado)
print(empleado.keys())
print(empleado.values())
print(empleado.items())
for clave, valor in empleado.items():
    print(f"clave: {clave}, valor: {valor}")
