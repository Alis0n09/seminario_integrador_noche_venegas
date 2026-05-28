print("Calculo de impuesto a la renta e IESS")

print("if simple - verificar empleado activo")
activo = True
if activo:
    print("Empleado activo - proceder con pago")

print("if-else - sueldo minimo")
sueldo = 850
if sueldo >= 460:
    print("Sueldo sobre el SBU")
else:
    print("Sueldo por debajo del SBU - revisar")

print("if multiples condiciones - impuesto a la renta")
ingreso_anual = 15000
if ingreso_anual < 11212:
    print("No paga impuesto a la renta (fraccion basica)")
elif ingreso_anual < 14250:
    print("Paga impuesto sobre fraccion basica - 5%")
elif ingreso_anual < 17820:
    print("Paga impuesto sobre fraccion basica - 10%")
else:
    print("Paga impuesto sobre fraccion basica - 15%+")

print("if condiciones anidadas - afiliacion IESS")
tiene_contrato = True
afiliado_iess = False
if tiene_contrato:
    if afiliado_iess:
        print("Aportes IESS registrados correctamente")
    else:
        print("Empleado sin afiliacion IESS - registrar urgente")
else:
    print("Sin contrato laboral")

print("if con operadores logicos")
documento_ok = True
ficha_medica = True
if documento_ok and ficha_medica:
    print("Empleado habilitado para nomina")

es_supervisor = False
tiene_permiso_pago = True
if es_supervisor or tiene_permiso_pago:
    print("Puede aprobar la nomina")

bloqueado = False
if not bloqueado:
    print("Empleado habilitado para cobro")
