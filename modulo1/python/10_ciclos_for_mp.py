print("Calculo de nomina para multiples empleados")
print("for basico - numeros de empleados")
for i in range(1, 6):
    print(f"Procesando empleado #{i}")

empleados = ["Ana Garcia", "Luis Perez", "Carlos Lopez"]
for empleado in empleados:
    print(f"Procesando nomina de: {empleado}")

print("control de interrupcion en nomina")
for i in range(1, 10):
    if i == 3:
        continue
    if i == 7:
        break
    print(f"Empleado #{i} procesado")
else:
    print("Todos los empleados procesados")

print("for con range step - cada 2 empleados")
for i in range(1, 10, 2):
    print(f"Empleado #{i} - revision especial")

print("for con range regresivo")
for i in range(10, 0, -1):
    print(f"Procesando empleado #{i} en orden inverso")

print("for con enumerate - lista de empleados")
nombres = ["Ana", "Luis", "Carlos", "Maria"]
for indice, nombre in enumerate(nombres):
    print(f"Empleado #{indice + 1}: {nombre}")

print("for con zip - empleados y sueldos")
sueldos = [850, 1200, 950, 1100]
for nombre, sueldo in zip(nombres, sueldos):
    print(f"{nombre} - Sueldo: ${sueldo}")

print("for anidados - departamentos y empleados")
for depto in range(1, 4):
    for emp in range(1, 4):
        print(f"Depto {depto}, Empleado {emp}")

cantidad = int(input("Cuantos empleados va a registrar? "))
total_nomina = 0
for i in range(1, cantidad + 1):
    sueldo = float(input(f"Sueldo empleado #{i}: "))
    total_nomina += sueldo
promedio = total_nomina / cantidad
print("Total nomina:", total_nomina)
print("Promedio salarial:", promedio)
if promedio >= 800:
    print("La empresa cumple con el SBU Ecuador")
else:
    print("Algunos empleados estan por debajo del SBU")
