print("Funciones para sistema de nomina Ecuador")
print("funcion basica")
def mostrar_bienvenida():
    print("Sistema de Control de Nomina - Ecuador")
mostrar_bienvenida()

print("funcion con parametro")
def saludar_empleado(nombre):
    print(f"Bienvenido al sistema: {nombre}")
saludar_empleado("John")
saludar_empleado("Maria")

print("funcion que devuelve valor con return")
def calcular_sueldo_neto(sueldo_base, horas_extra, valor_hora):
    total_horas = horas_extra * valor_hora
    total_ingresos = sueldo_base + total_horas
    iess = total_ingresos * 0.0945
    return total_ingresos - iess
print(calcular_sueldo_neto(800, 10, 5))

print("funcion por posicion y por nombre")
def presentar_empleado(nombre, cargo, ciudad):
    print(f"Empleado(a): {nombre}, cargo: {cargo}, ciudad: {ciudad}")
presentar_empleado("Maria", "Contadora", "Quito")
presentar_empleado("Carla", "Ingeniera", "Guayaquil")
presentar_empleado(ciudad="Cuenca", nombre="Luis", cargo="Analista")

print("funcion con valores por defecto")
def generar_pago(nombre, moneda="USD", simbolo="$"):
    print(simbolo, nombre, moneda)
generar_pago("Pedro", "USD")
generar_pago("Juan", simbolo="$")
generar_pago("Carlos", "USD")

print("funcion con parametros posicionales")
def sumar_sueldos(*args):
    print(f"Sueldos recibidos {args}")
    return sum(args)
print(sumar_sueldos(800, 950, 1200))
print(sumar_sueldos(800, 900, 1100, 1300, 1500))
print(sumar_sueldos(460, 800, 1000))

print("funcion parametros combinados con posicionales")
def mostrar_nomina(titulo, *sueldos):
    print(f"Nomina: {titulo}")
    for sueldo in sueldos:
        print(f"- ${sueldo}")
mostrar_nomina("Nomina Abril", 800, 950, 1200)

print("funcion parametros clave valor variables")
def crear_empleado(**kwargs):
    print(f"Datos del empleado {kwargs}")
    for clave, valor in kwargs.items():
        print(f"- {clave}: {valor}")
crear_empleado(nombre="Juan", apellido="Paris", cargo="Desarrollador", sueldo=1200)

print("funcion parametros combinacion con todos los tipos")
def configurar_nomina(empresa, *empleados, quincenal=False, **opciones):
    print("Configuracion de nomina")
    print(f"Empresa: {empresa}")
    print(f"Empleados IDs: {empleados}")
    print(f"Opciones: {opciones}")
configurar_nomina("UTE", 101, 102, 103, quincenal=True, moneda="USD", decimos=True)

print("Devolver multiples valores")
def minmax_sueldo(sueldos):
    return min(sueldos), max(sueldos)

minimo, maximo = minmax_sueldo([800, 950, 1200, 600, 1500])
print("Sueldo minimo:", minimo, "Sueldo maximo:", maximo)
_, maximo = minmax_sueldo([800, 950, 1200])
print("Sueldo maximo:", maximo)
_, minimo = minmax_sueldo([460, 800, 2000])
print("Sueldo minimo:", minimo)

print("Devolver diccionario en el caso de muchos valores")
def analizar_nomina(sueldos):
    total = sum(sueldos)
    n = len(sueldos)
    return {
        "total": total,
        "media": total / n if n > 0 else 0,
        "minimo": min(sueldos),
        "maximo": max(sueldos),
        "promedio": sum(sueldos) / len(sueldos),
        "count": n
    }

datos_sueldos = [800, 950, 1200, 1100, 1500, 600, 1300]
stats = analizar_nomina(datos_sueldos)
print(f"Total nomina: ${stats['total']}")
print(f"Media salarial: ${stats['media']}")
print(f"Sueldo minimo: ${stats['minimo']}")
print(f"Sueldo maximo: ${stats['maximo']}")
print(f"Promedio: ${stats['promedio']}")
print(f"Cantidad empleados: {stats['count']}")

print("funciones lambda")
def doble_sueldo(numero):
    return numero * 2
duplicar = lambda x: x * 2
print(doble_sueldo(800))
print(duplicar(800))
suma_sueldos = lambda a, b: a + b
print(suma_sueldos(800, 950))
