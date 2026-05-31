# encapsulamiento_nomina.py

class Empleado:
    def __init__(self, cedula, nombre, sueldo_inicial=460):
        self.cedula = cedula
        self.nombre = nombre
        self.__sueldo = sueldo_inicial
        self.__historial_pagos = []
        self.__activo = True
        self.__registrar(f"Empleado creado con sueldo ${sueldo_inicial}")

    @property
    def sueldo(self):
        return self.__sueldo

    @property
    def activo(self):
        return self.__activo

    @property
    def historial(self):
        return list(self.__historial_pagos)

    def pagar(self, horas_extra=0, valor_hora=0):
        total_horas = horas_extra * valor_hora
        ingreso_total = self.__sueldo + total_horas
        iess = ingreso_total * 0.0945
        neto = ingreso_total - iess
        self.__registrar(f"Pago: bruto=${ingreso_total}, neto=${neto:.2f}")
        return neto

    def aumentar_sueldo(self, porcentaje):
        if porcentaje <= 0:
            raise ValueError("El porcentaje debe ser positivo")
        incremento = self.__sueldo * porcentaje / 100
        self.__sueldo += incremento
        self.__registrar(f"Aumento: +{porcentaje}% (${incremento})")
        return self

    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.__historial_pagos.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"Empleado({self.nombre}: ${self.__sueldo})"

e1 = Empleado("1712345678", "Alison Venegas", 800)
e2 = Empleado("1712345679", "Lucia Perez", 500)

pago1 = e1.pagar(10, 5)
pago2 = e2.pagar()

print(e1)
print(e2)
print(f"Pago Alison: ${pago1}")
print(f"Pago Lucia: ${pago2}")

for entrada in e1.historial:
    print(f"  {entrada}")
