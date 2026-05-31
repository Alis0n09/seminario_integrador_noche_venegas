# herencia_nomina.py

class Empleado:
    def __init__(self, cedula, nombre, sueldo_base):
        self.cedula = cedula
        self.nombre = nombre
        self.sueldo_base = sueldo_base
        self._total_pagado = 0

    def calcular_pago(self):
        iess = self.sueldo_base * 0.0945
        neto = self.sueldo_base - iess
        self._total_pagado += neto
        return neto

    def __str__(self):
        return f"{self.nombre} ({self.cedula}) - ${self.sueldo_base}"

class EmpleadoTiempoCompleto(Empleado):
    def __init__(self, cedula, nombre, sueldo_base, horas_contractuales=160):
        super().__init__(cedula, nombre, sueldo_base)
        self.horas_contractuales = horas_contractuales

    def calcular_pago(self):
        pago_base = super().calcular_pago()
        decimo_tercero = self.sueldo_base / 12
        fondos_reserva = self.sueldo_base * 0.0833
        total = pago_base + decimo_tercero + fondos_reserva
        return total

    def __str__(self):
        return f"{super().__str__()} (TC - {self.horas_contractuales}h)"

class EmpleadoMedioTiempo(Empleado):
    def __init__(self, cedula, nombre, sueldo_base, horas_semanales=20):
        super().__init__(cedula, nombre, sueldo_base)
        self.horas_semanales = horas_semanales

    def calcular_pago(self):
        pago_base = super().calcular_pago()
        return pago_base * 0.5

    def __str__(self):
        return f"{super().__str__()} (MT - {self.horas_semanales}h/sem)"

class EmpleadoPorHoras(Empleado):
    def __init__(self, cedula, nombre, valor_hora, horas_trabajadas=0):
        sueldo_base = valor_hora * horas_trabajadas
        super().__init__(cedula, nombre, sueldo_base)
        self.valor_hora = valor_hora
        self.horas_trabajadas = horas_trabajadas

    def registrar_horas(self, horas):
        self.horas_trabajadas += horas
        self.sueldo_base = self.valor_hora * self.horas_trabajadas

    def __str__(self):
        return f"{super().__str__()} (PH - ${self.valor_hora}/h)"

emp1 = EmpleadoTiempoCompleto("1712345678", "Ana Garcia", 800)
emp2 = EmpleadoMedioTiempo("1712345679", "Luis Perez", 460)
emp3 = EmpleadoPorHoras("1712345680", "Carlos Lopez", 5, 80)

print(emp1)
print(emp2)
print(emp3)
print(f"Pago {emp1.nombre}: ${emp1.calcular_pago():.2f}")
print(f"Pago {emp2.nombre}: ${emp2.calcular_pago():.2f}")
print(f"Pago {emp3.nombre}: ${emp3.calcular_pago():.2f}")

print(isinstance(emp1, EmpleadoTiempoCompleto))
print(isinstance(emp1, Empleado))
print(isinstance(emp1, EmpleadoMedioTiempo))

print(EmpleadoTiempoCompleto.__mro__)
