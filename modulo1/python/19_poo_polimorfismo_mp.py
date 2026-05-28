# polimorfismo_nomina.py

class Pago:
    def __init__(self, empleado, valor):
        self.empleado = empleado
        self.valor = valor

    def procesar(self):
        raise NotImplementedError("Las subclases deben implementar procesar()")

    def __str__(self):
        return f"{self.__class__.__name__} → {self.empleado}"

class PagoEfectivo(Pago):
    def procesar(self):
        return f"Pago en efectivo a {self.empleado}: ${self.valor} - Recibo firmado"

class PagoTransferencia(Pago):
    def procesar(self):
        comision = self.valor * 0.01
        return f"Transferencia a {self.empleado}: ${self.valor} (comision: ${comision})"

class PagoCheque(Pago):
    def procesar(self):
        return f"Cheque #{hash(self.empleado)} a nombre de {self.empleado}: ${self.valor}"

class PagoTarjeta(Pago):
    def __init__(self, empleado, valor, terminal):
        super().__init__(empleado, valor)
        self.terminal = terminal

    def procesar(self):
        return f"Tarjeta terminal {self.terminal}: ${self.valor} - Aprobado"

def procesar_todos_pagos(pagos):
    for pago in pagos:
        print(f"  {pago.procesar()}")

pagos = [
    PagoEfectivo("Gabriela Calderon", 800),
    PagoTransferencia("Ines Calderon", 950),
    PagoCheque("Maria Torres", 1200),
    PagoTarjeta("Carlos Ruiz", 600, "TERM-001"),
]

print("Procesando pagos de nomina:")
procesar_todos_pagos(pagos)

class PagoPayPal:
    def procesar(self):
        return "Pago via PayPal - procesado"

class PagoBitcoin:
    def procesar(self):
        return "Pago via Bitcoins - procesado"

def procesar_pago(pago):
    resultado = pago.procesar()
    print(f"Procesando: {resultado}")

for metodo in [PagoEfectivo("Test", 100), PagoPayPal(), PagoBitcoin()]:
    procesar_pago(metodo)
