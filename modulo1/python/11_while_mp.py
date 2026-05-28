print("Registro de empleados en el sistema de nomina")
contador = 1
while contador <= 5:
    print(f"Empleado #{contador} registrado en nomina")
    contador += 1

dato = ""
while dato != "salir":
    dato = input("Ingrese nombre del empleado (o 'salir' para terminar): ")
    if dato != "salir":
        print("Empleado registrado:", dato)

cantidad = int(input("Cuantos empleados va a procesar? "))
total_nomina = 0
contador = 1
while contador <= cantidad:
    sueldo = float(input(f"Sueldo del empleado #{contador}: "))
    total_nomina += sueldo
    contador += 1
print("Total nomina a pagar:", total_nomina)
if total_nomina >= 5000:
    print("La empresa supera los 5000 en nomina - aplicar retenciones")
else:
    print("Nomina dentro del rango normal")
