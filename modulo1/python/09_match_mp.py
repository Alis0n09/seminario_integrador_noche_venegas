print("Tipo de contrato laboral Ecuador")
contrato = input("Ingrese tipo de contrato: fijo/indefinido/temporal/porhoras: ")
match contrato:
    case "fijo":
        print("Contrato a plazo fijo - con decimos completos")
    case "indefinido":
        print("Contrato indefinido - estabilidad laboral total")
    case "temporal":
        print("Contrato temporal - sin estabilidad")
    case "porhoras":
        print("Contrato por horas - pago proporcional")
    case _:
        print(f"Tipo de contrato {contrato} no reconocido en el sistema")

print("Categoria ocupacional")
categoria = int(input("Ingrese categoria (1-5): "))
match categoria:
    case n if n == 0:
        print("Categoria no valida")
    case 1:
        print("Categoria 1 - Directivo")
    case 2:
        print("Categoria 2 - Profesional")
    case 3:
        print("Categoria 3 - Tecnico")
    case 4:
        print("Categoria 4 - Operativo")
    case n if n >= 5:
        print("Categoria 5+ - Administrativo")
