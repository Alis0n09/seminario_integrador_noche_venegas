nombre = input("Ingrese nombre del empleado: ")
print("Registrado:", nombre)
print(f"Bienvenido, {nombre}")
print("Bienvenido, " + nombre)

sueldo_str = input("Ingrese sueldo base del empleado: ")
print(f"Sueldo ingresado: ${sueldo_str}")
sueldo = float(sueldo_str)
print(f"El sueldo anual es: ${sueldo * 12}")
