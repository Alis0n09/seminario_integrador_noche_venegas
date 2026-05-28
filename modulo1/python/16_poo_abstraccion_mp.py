# beneficio.py
from abc import ABC, abstractmethod

class Beneficio(ABC):
    def __init__(self, nombre="beneficio base"):
        self.nombre = nombre

    @abstractmethod
    def calcular(self, sueldo_base) -> float:
        pass

    @abstractmethod
    def descripcion(self) -> str:
        pass

    def resumen(self) -> str:
        return (f"{self.__class__.__name__} {self.nombre}: "
                f"valor=${self.calcular(800):.2f}")

class DecimoTercero(Beneficio):
    def __init__(self):
        super().__init__("Decimo Tercero")

    def calcular(self, sueldo_base):
        return sueldo_base / 12

    def descripcion(self):
        return "Decimo tercer sueldo - se paga en diciembre"

class DecimoCuarto(Beneficio):
    def __init__(self):
        super().__init__("Decimo Cuarto")

    def calcular(self, sueldo_base):
        return 460.00

    def descripcion(self):
        return "Decimo cuarto sueldo - SBU 2024"

class FondosReserva(Beneficio):
    def __init__(self):
        super().__init__("Fondos de Reserva")

    def calcular(self, sueldo_base):
        return sueldo_base * 0.0833

    def descripcion(self):
        return "Fondos de reserva - 8.33% del sueldo"

beneficios = [DecimoTercero(), DecimoCuarto(), FondosReserva()]

for b in beneficios:
    print(b.resumen())

total_beneficios = sum(b.calcular(800) for b in beneficios)
print(f"Total beneficios mensuales: ${total_beneficios:.2f}")
