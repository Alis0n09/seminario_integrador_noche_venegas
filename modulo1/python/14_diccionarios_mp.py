print("Diccionarios de empleados - Nomina")
print("Crear diccionarios")
vacio = {}
empleado = {"nombre": "Pedrito", "sueldo": 850, "cargo": "Operativo", "ciudad": "Quito"}
config = dict(empresa="UTE", moneda="USD", periodicidad="Mensual")

print(empleado["nombre"])
empleado["nombre"] = "Jose"
print(empleado)
del empleado["sueldo"]
print(empleado)
print("nombre" in empleado)
print("ciudad" in empleado)
print(empleado.keys())
print(empleado.values())
print(empleado.items())
for clave, valor in empleado.items():
    print(f"clave: {clave}, valor: {valor}")
