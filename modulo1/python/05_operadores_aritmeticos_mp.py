sueldo_base = float(input("Ingrese sueldo base del empleado: "))
horas_extra = float(input("Ingrese numero de horas extra trabajadas: "))
valor_hora_extra = float(input("Valor por hora extra: "))

total_horas_extra = horas_extra * valor_hora_extra
total_ingresos = sueldo_base + total_horas_extra
aporte_iess = total_ingresos * 0.0945
sueldo_neto = total_ingresos - aporte_iess
decimo_tercero = total_ingresos / 12
decimo_cuarto = 460.00

print("--- CALCULO DE NOMINA ECUADOR ---")
print("Sueldo base:", sueldo_base)
print("Valor horas extra:", total_horas_extra)
print("Total ingresos:", total_ingresos)
print("Aporte IESS (9.45%):", aporte_iess)
print("Sueldo neto a recibir:", sueldo_neto)
print("Decimo tercero (proporcional):", decimo_tercero)
print("Decimo cuarto (SBU 2024):", decimo_cuarto)
