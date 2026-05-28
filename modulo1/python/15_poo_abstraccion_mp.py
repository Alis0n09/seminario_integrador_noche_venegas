# empleado.py

class Empleado:
    especie = "Homo sapiens"

    def __init__(self, nombre, sueldo_base):
        self.nombre = nombre
        self.sueldo_base = sueldo_base

    def calcular_pago(self):
        iess = self.sueldo_base * 0.0945
        return self.sueldo_base - iess

    def aumentar_sueldo(self, porcentaje):
        self.sueldo_base += self.sueldo_base * porcentaje / 100
        print(f"Nuevo sueldo de {self.nombre}: ${self.sueldo_base:.2f}")

    def __str__(self):
        return f"Empleado({self.nombre}, ${self.sueldo_base})"

    def __repr__(self):
        return f"Empleado(nombre={self.nombre!r}, sueldo_base={self.sueldo_base!r})"

ana = Empleado("Ana Garcia", 800)
luis = Empleado("Luis Perez", 950)

print(ana.calcular_pago())
print(luis.calcular_pago())
ana.aumentar_sueldo(10)
print(str(ana))
print(repr(ana))
print(Empleado.especie)
