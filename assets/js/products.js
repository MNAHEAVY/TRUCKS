const productos = [
  {
    id: 0,
    code: "10223",
    name: "Tapón del depósito de combustible",
    description:
      "Tapón del depósito de combustible. Plástico con rosca exterior. Sellado con llave - Ford Sapão 90-02 - Seat Inca 95-03 - Agrale",
    brand: "Ford",
    group: "Tapones",
    image: "images/1.webp",
  },
  {
    id: 1120,
    code: "10239",
    name: "Tapa de combustible",
    description:
      " Con trinquete sellado - Sin llave Scania 113 88 a 97 - Camiones GM 86 a 97 - Ford Cargo 814 96 a 01",
    brand: "Ford",
    group: "Tapones",
    image: "images/doss.webp",
  },
  {
    id: 1542,
    code: "10293",
    name: " Tapón de combustible ",
    description:
      "Tapón de combustible Valvulado - Con llave - Tanque con rosca interna - VW 15-190 después de 05 / Ford F-4000 después de 05",
    brand: "Volkswagen",
    group: "Tapones",
    image: "images/trees.webp",
  },
  {
    id: 1,
    code: "10298",
    name: "Tapón de aceite de motor Cummis",
    description:
      "Tapón de aceite de motor Cummis.- Con anillo - Volkswagen 17-310 00 a 10 - 18-310 00 a 10 - 24-22 después de 06 - 26-220 después de 06",
    brand: "Volkswagen",
    group: "Tapones",
    image: "images/4.webp",
  },
  {
    id: 2,
    code: "10146",
    name: "Tapa de Refrigeración - VALVULADA - 0,5 Bar - Mercedes-Benz",
    description: "Tapa de Refrigeración - VALVULADA - 0,5 Bar - Mercedes-Benz ",
    brand: "Mercedes-Benz",
    group: "Tapones",
    image: "images/tres.webp",
  },
  {
    id: 225,
    code: "10150",
    name: "Tapa de radiador",
    description: "Tapa de radiador 0,9 Bar Toyota Corolla",
    brand: "Toyota",
    group: "Tapones",
    image: "images/10.webp",
  },
  {
    id: 226,
    code: "10215",
    name: "Tapón de combustible",
    description:
      "Tapón de combustible. Sellado. Con boquilla de 105 mm y llave Ford Sapão 90 al 02 - Agrale Agrale 87 al 88 - Volvo 420",
    brand: "Volvo",
    group: "Tapones",
    image: "images/11.webp",
  },
  {
    id: 227,
    code: "10216",
    name: "Tapón de combustible",
    description:
      "Tapón de combustible. - Sellado con llave - Ford Cargo 85 a 01 F-4000 4.3 72 a 99 - Camionetas GM 86 a 97",
    brand: "Ford",
    group: "Tapones",
    image: "images/12.webp",
  },
  {
    id: 3,
    code: "10312",
    name: "DEPÓSITO INFERIOR DE LA TAPA DEL RADIADOR - 7 LIBRAS - MERCEDES- BENZ 1618 90 A 13 - 1932 70 A 90 - 1933 70 A 90 - 1935 90 A 00 Tapa de enfriamiento",
    description:
      "DEPÓSITO INFERIOR DE LA TAPA DEL RADIADOR - 7 LIBRAS - MERCEDES- BENZ 1618 90 A 13 - 1932 70 A 90 1933 70 A 90 - 1935 90 A 00",
    brand: "Volkswagen",
    group: "Tapas",
    image: "images/cuatro.webp",
  },
  {
    id: 4,
    code: "10335",
    name: "Tapa de enfriamiento",
    description:
      "Tapa de enfriamiento - Sellada Volkswagen 2368 91 a 00 - OF 1722-M 04 a 12",
    brand: "Volkswagen",
    group: "Tapas",
    image: "images/5.webp",
  },
  {
    id: 450,
    code: "10341",
    name: "Tapa de refrigeración sellada sin válvula",
    description:
      "Tapa de refrigeración sellada sin válvula - Scania T/R/P-114 Serie IV 95 a 07",
    brand: "Scania",
    group: "Tapas",
    image: "images/6.webp",
  },
  {
    id: 5,
    code: "10341",
    name: "Tapa del depósito del lavaparabrisas",
    description: "Tapa del depósito del lavaparabrisas - Camiones Mercedes-Benz 70 a 90",
    brand: "Mercedes-Benz",
    group: "Tapas",
    image: "images/6.webp",
  },
  {
    id: 6,
    code: "10366",
    name: "Tapa del depósito del lavaparabrisas",
    description: "Tapa del depósito del lavaparabrisas - Camiones Mercedes-Benz 70 a 90",
    brand: "Mercedes-Benz",
    group: "Tapones",
    image: "images/7.webp",
  },
  {
    id: 610,
    code: "10403",
    name: "Tapón de depósito",
    description:
      "Tapón de depósito. - Valvulado con llave - Mercedes-Benz Actros después de 10 - Axor 01 a 13",
    brand: "Mercedes-Benz",
    group: "Tapones",
    image: "images/8.webp",
  },
  {
    id: 7,
    code: "10506",
    name: "Tapón de combustible",
    description:
      "Tapón de combustible. Sellado. Con llave. Borde exterior de acero inoxidable con rosca interna - Volvo FH después de 2012 - Scania Serie V después de 2007",
    brand: "Scania",
    group: "Tapones",
    image: "images/9.webp",
  },
  {
    id: 8,
    code: "10521",
    name: "Tapa de depósito UREA 32",
    description:
      " Tapa de depósito UREA 32. Con llave. Ford Cargo GI después del 85, Cargo GII después del 11 y Mercedes-Benz Actros después del 10.",
    brand: "Mercedes-Benz",
    group: "Tapas",
    image: "images/13.webp",
  },
  {
    id: 9,
    code: "10541",
    name: "Tapón de combustible",
    description:
      "Depósito de plástico con rosca exterior. Sellado con llave - Ford Sapão 90 a 02 - Camiones Scania - Agrale Agrale",
    brand: "Scania",
    group: "Tapones",
    image: "images/14.webp",
  },
  {
    id: 10,
    code: "10542",
    name: "Tapón de combustible",
    description:
      "Tapón de combustible. Sellado. Con llave. Depósito de plástico. Con rosca interna - Borde alto - Ford Cargo después de 2012 - Camiones Mercedes-Benz.",
    brand: "Mercedes-Benz",
    group: "Tapones",
    image: "images/15.webp",
  },
  {
    id: 11,
    code: "21485",
    name: "Manija de puerta exterior con llave de serpiente",
    description:
      "Manija de puerta exterior con llave de serpiente, izquierda, Volkswagen Constellation, tractor, uso general",
    brand: "Volkswagen",
    group: "Manijas",
    image: "images/16.webp",
  },
  {
    id: 12,
    code: "21486",
    name: "Manija de puerta exterior con llave de serpiente",
    description:
      "Manija de puerta exterior con llave de serpiente, derecha, Volkswagen Constellation, tractor, uso general",
    brand: "Volkswagen",
    group: "Manijas",
    image: "images/16.webp",
  },
  {
    id: 13,
    code: "30135",
    name: "Cerradura mecánica de la puerta delantera",
    description:
      "Cerradura mecánica de la puerta delantera - Izquierda - Ford Cargo GI después del 85",
    brand: "Ford",
    group: "Cerraduras",
    image: "images/17.webp",
  },
  {
    id: 14,
    code: "30136",
    name: "Cerradura mecánica de la puerta delantera derecha",
    description:
      "Cerradura mecánica de la puerta delantera derecha - Ford Cargo GI después del 85",
    brand: "Ford",
    group: "Cerraduras",
    image: "images/18.webp",
  },
  {
    id: 15,
    code: "36287",
    name: "Par de Burletes de Puerta Delantera (Premium)",
    description:
      "Par de Burletes de Puerta Delantera (Premium) - Modelo Original - Medida: 4,90 Metros - MB 709 87 al 96 - Sprinter 97 al 19",
    brand: "Mercedes-Benz",
    group: "Burletes",
    image: "images/19.webp",
  },
  {
    id: 16,
    code: "36297",
    name: "Par de Burletes - Modelo Original",
    description:
      "Par de Burletes - Modelo Original - Premium - 4,90mts - Mercedes- Benz Atego después del 97 - Axor 01 al 13",
    brand: "Mercedes-Benz",
    group: "Burletes",
    image: "images/20.webp",
  },
  {
    id: 17,
    code: "37634",
    name: "Marco del salpicadero con pestaña",
    description:
      "Marco del salpicadero con pestaña - goma derecha - Volkswagen Constellation",
    brand: "Volkswagen",
    group: "Marcos",
    image: "images/21.webp",
  },
  {
    id: 18,
    code: "39222",
    name: "Burlete para parabrisas - Ala ancha",
    description:
      "Burlete para parabrisas - Ala ancha - Mercedes-Benz Cabina alta 1313 71 a 87 - 1515 72 a 90",
    brand: "Mercedes-Benz",
    group: "Burletes",
    image: "images/22.webp",
  },
  {
    id: 19,
    code: "39234",
    name: "Burlete de parabrisas",
    description:
      "Burlete de parabrisas - Mercedes- Benz 1315 - 1518 - 1718 - 1725 - 1933-2 - 2425 - Axor",
    brand: "Mercedes-Benz",
    group: "Burletes",
    image: "images/23.webp",
  },
  {
    id: 20,
    code: "39347",
    name: "Burlete de moldura de capó interna",
    description:
      "Burlete de moldura de capó interna - Mercedes-Benz L-1620 90 a 12 (cabina mediana/cabina corta y larga)",
    brand: "Mercedes-Benz",
    group: "Burletes",
    image: "images/24.webp",
  },
  {
    id: 21,
    code: "39349",
    name: "Juego de goma de guardabarros de PVC",
    description: "Juego de goma de guardabarros de PVC - Mercedes-Benz 1111-1113",
    brand: "Mercedes-Benz",
    group: "Juegos de Goma",
    image: "images/25.webp",
  },
  {
    id: 2256,
    code: "39403",
    name: "Burlete de PTA. int.",
    description: "Burlete de PTA. int. - Scania T-R-112 - T-R-113",
    brand: "Scania",
    group: "Burletes",
    image: "images/26.webp",
  },
  {
    id: 22,
    code: "39405",
    name: "Burlete de PTA.",
    description: " Burlete Ext. de PTA - Scania T-R-112 - T-R-114",
    brand: "Scania",
    group: "Burletes",
    image: "images/27.webp",
  },
  {
    id: 2246,
    code: "50127",
    name: "Cerradura Mecánica Delantera Izquierda",
    description:
      "Cerradura Mecánica Delantera Izquierda - Mercedes-Benz 1113 84 a 96 - OH-1316 - Agrale - Uso General",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/28.webp",
  },
  {
    id: 23,
    code: "50250",
    name: "Manija ventilete derecho",
    description: "Manija ventilete derecho - Mercedes-Benz 709 87 a 96 - Atron 11 a 14",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/29.webp",
  },
  {
    id: 24,
    code: "50278",
    name: "Interruptor de encendido y arranque eléctrico 5 salidas para 24V",
    description:
      "Interruptor de encendido y arranque eléctrico 5 salidas para 24V - Mercedes-Benz O-364 95 en adelante - O-400 95 en adelante",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/30.webp",
  },
  {
    id: 25,
    code: "50279",
    name: "Manija de puerta exterior delantera derecha con llave",
    description:
      "Manija de puerta exterior delantera derecha con llave - Mercedes-Benz FPN - HPN después del 85 - Atron 11 a 14",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/31.webp",
  },
  {
    id: 2622,
    code: "50280",
    name: "Manija de puerta",
    description:
      "Manija de puerta exterior delantera derecha con llave - Mercedes-Benz FPN - HPN después del 85 - Atron 11 a 14",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/32.webp",
  },
  {
    id: 26,
    code: "50281",
    name: "Par de manijas de puerta PTA delanteras",
    description:
      "Par de manijas de puerta PTA delanteras (derecha/izquierda) - Mercedes-Benz Atron - HPN",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/33.webp",
  },
  {
    id: 27,
    code: "50282",
    name: "Cerradura de puerta - Mecánica - Derecha",
    description:
      "Cerradura de puerta - Mecánica - Derecha - Mercedes-Benz HPN Bicudo 96 a 20 - Atron 11 a 20 - Accelo después de 03 - FPN Cerradura de puerta - Mecánica - Izquierda - Mercedes-Benz HPN Bicudo 96 a 20 - Atron 11 a 20 - Accelo después de 03 - FPN Cilindro de encendido con llave - Mercedes-Benz HPN 1218 - HPN 1418 - HPN 196 después del 94 Tope de puerta - Derecha/Izquierda - Mercedes- Benz Atron 11 a 14 - HPN 85 a 00 / Uso general / Aobús",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/34.webp",
  },
  {
    id: 271,
    code: "50283",
    name: "Cerradura de puerta - Mecánica - Izquierda",
    description:
      "Cerradura de puerta - Mecánica - Izquierda - Mercedes-Benz HPN Bicudo 96 a 20 - Atron 11 a 20 - Accelo después de 03 - FPN",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/34.webp",
  },
  {
    id: 272,
    code: "50284",
    name: "Cilindro de encendido con llave",
    description:
      "Cilindro de encendido con llave - Mercedes-Benz HPN 1218 - HPN 1418 - HPN 196 después del 94",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/35.webp",
  },
  {
    id: 273,
    code: "50285",
    name: "Tope de puerta",
    description:
      " Tope de puerta - Derecha/Izquierda - Mercedes- Benz Atron 11 a 14 - HPN 85 a 00 / Uso general / Aobús",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/36.webp",
  },
  {
    id: 274,
    code: "50286",
    name: "Manija interior de puerta delantera",
    description:
      "Manija interior de puerta delantera derecha - Roja - Derecha Mercedes-Benz HPN después del 96- FPN después del 96 - Puntiaguda después del 96 - Atron después del 11",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/37.webp",
  },
  {
    id: 28,
    code: "50287",
    name: "Manija de apertura de puerta interior - Roja - Izquierda",
    description:
      "Manija de apertura de puerta interior - Roja - Izquierda Mercedes-Benz FPN después del 96- HPN después del 96 - Puntiaguda después del 96 - Actron",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/37.webp",
  },
  {
    id: 29,
    code: "50288",
    name: "Juego de manija y cilindro de puerta",
    description:
      "Juego de manija y cilindro de puerta. Delantero/Encendido de nailon - Mercedes-Benz 709 (87 a 96) - 909 (86 a 97)",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/38.webp",
  },
  {
    id: 292,
    code: "50289",
    name: "Pedal Acelerador",
    description: "Pedal Acelerador - Mercedes-Benz 709 - O-364 - Agrale Agrale",
    brand: "Mercedes-Benz",
    group: "Pedales",
    image: "images/39.webp",
  },
  {
    id: 30,
    code: "50290",
    name: "Manija de puerta exterior - Con llave - Nailon",
    description:
      "Manija de puerta exterior - Con llave - Nailon - Derecha/Izquierda - Mercedes-Benz 709 94 a 97 - Agrale - Uso general",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/40.webp",
  },
  {
    id: 303,
    code: "50339",
    name: "Maquina levanta cristales Eléctrico",
    description:
      "Manija de puerta exterior - Con llave - Nailon - Derecha/Izquierda - Mercedes-Benz 709 94 a 97 - Agrale - Uso general Maquina levanta cristales Eléctrico - Con Motor 24V Fix.Mabuchi - Delantero - Izquierdo - Mercedes-Benz HPN Bicudo 91 a 00 - LK 91 a 00",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/41.webp",
  },
  {
    id: 31,
    code: "50348",
    name: "Manija interior de puerta delantera derecha con pasador metálico Gris",
    description:
      "Manija interior de puerta delantera derecha con pasador metálico Gris - Mercedes-Benz FPN después de 90 - HPN después de 90",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/42.webp",
  },
  {
    id: 32,
    code: "50363",
    name: "Reparación de barra de acoplamiento PTA",
    description:
      "Reparación de barra de acoplamiento PTA. Con buje PTA. Delantera izquierda. Mercedes- Benz HPN 196",
    brand: "Mercedes-Benz",
    group: "Barras",
    image: "images/43.webp",
  },
  {
    id: 33,
    code: "50365",
    name: "Carcasa de la manija interior de la puerta delantera",
    description:
      "Carcasa de la manija interior de la puerta delantera derecha/izquierda, gris - Mercedes-Benz 709",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/44.webp",
  },
  {
    id: 332,
    code: "50372",
    name: "Bolsillo lateral delantero",
    description: "Bolsillo lateral delantero derecho/izquierdo Gris - Mercedes- Benz 709",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/45.webp",
  },
  {
    id: 333,
    code: "50384",
    name: "Manija exterior de la puerta",
    description:
      "Manija exterior de la puerta - Con llave - Derecha - Mercedes-Benz Accelo después de 03 / Aobús",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/46.webp",
  },
  {
    id: 3334,
    code: "50385",
    name: "Manija exterior de la puerta",
    description:
      "Manija exterior de la puerta - Con llave - Izquierda - Mercedes-Benz Accelo después de 03 / Aobús",
    brand: "Mercedes-Benz",
    group: "Manijas",
    image: "images/46.webp",
  },

  {
    id: 34,
    code: "50388",
    name: "Cable acciona cerradura interna/manija de puerta",
    description:
      "Cable acciona cerradura interna/manija de puerta - Derecha - Mercedes-Benz Accelo después de 03 - Aobús de uso general",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/47.webp",
  },
  {
    id: 342,
    code: "50389",
    name: "Cable opera cerradura/manija interna",
    description:
      "Cable opera cerradura/manija interna - Izquierda - Mercedes- Benz Accelo después de 03 - Aobús de uso general",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/48.webp",
  },
  {
    id: 343,
    code: "50392",
    name: "Marco de puerta",
    description:
      "Marco de puerta. Delantero Derecho/Izquierdo - Mercedes Benz Accelo después del 13",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/49.webp",
  },
  {
    id: 35,
    code: "50403",
    name: "Manivela de ajuste del vidrio de la puerta",
    description:
      "Manivela de ajuste del vidrio de la puerta - Gris - Tapete metálico - Derecha/Izquierda",
    brand: null,
    group: "Cerraduras",
    image: "images/50.webp",
  },
  {
    id: 36,
    code: "50467",
    name: "Cerradura del capó inferior",
    description:
      "Cerradura del capó inferior - Mercedes-Benz HPN después de 00 - 1418 después de 00 - 1620 después de 00 - Uso general",
    brand: "Mercedes-Benz",
    group: "Cerraduras",
    image: "images/51.webp",
  },
  {
    id: 364,
    code: "60101",
    name: "Tapa de refrigeración",
    description:
      "Tapa de refrigeración 0,75 Bar - Scania 112 81 a 98 - 142 81 a 90 - 113H 88 a 97",
    brand: "Mercedes-Benz",
    group: "Tapas",
    image: "images/52.webp",
  },
  {
    id: 37,
    code: "60111",
    name: "Manija de puerta exterior - Con llave - Metal - Izquierda",
    description:
      "Manija de puerta exterior - Con llave - Metal - Izquierda - Camiones Scania P-R-T 80 a 97 - Saab 80 a 97 - Serie II 80 a 97",
    brand: "Scania",
    group: "Manijas",
    image: "images/53.webp",
  },
  {
    id: 38,
    code: "60112",
    name: "Manija de puerta exterior - Con llave - Metal - Derecha",
    description:
      "Manija de puerta exterior - Con llave - Metal - Derecha - Camiones Scania P-R-T 80 a 97 - Saab 80 a 97 - Serie II 80 a 97",
    brand: "Scania",
    group: "Manijas",
    image: "images/53.webp",
  },
  {
    id: 39,
    code: "60113",
    name: "Tapa depósito de agua del lavaparabrisas",
    description: "Tapa depósito de agua del lavaparabrisas - Scania 112-113",
    brand: "Scania",
    group: "Tapas",
    image: "images/55.webp",
  },
  {
    id: 391,
    code: "60123",
    name: "Cerradura de puerta mecánica",
    description:
      "Cerradura de puerta mecánica - Izquierda - Scania R-112 80 a 97 - 113 80 a 97 - Saab 80 a 97 - Serie II 80 a 97",
    brand: "Scania",
    group: "Cerraduras",
    image: "images/54.webp",
  },
  {
    id: 392,
    code: "60124",
    name: "Cerradura de puerta mecánica",
    description:
      "Cerradura Mecánica de Puerta - Derecha - Scania R-112 80 a 97 - 113 80 a 97 - Saab 80 a 97 - Serie II 80 a 97",
    brand: "Scania",
    group: "Cerraduras",
    image: "images/54.webp",
  },
  {
    id: 392,
    code: "60149",
    name: "Maquina levanta cristales mecánico",
    description:
      "Maquina levanta cristales mecánico - Puerta delantera - Izquierda - Scania Serie II T-R-112 88 a 97 - Serie III T-R-P 112 88 a 97",
    brand: "Scania",
    group: "Manijas",
    image: "images/56.webp",
  },

  {
    id: 40,
    code: "60150",
    name: "Maquina levanta cristales mecánico delantero derecho",
    description:
      "Maquina levanta cristales mecánico delantero derecho - Scania R-Line después del 81 - T- Line después del 87 Manija interior comp. delantera derecha - Scania 143 Manija interior comp. delantera derecha - izquierda - Scania 143",
    brand: "Scania",
    group: "Manijas",
    image: "images/56.webp",
  },
  {
    id: 401,
    code: "60170",
    name: "Manija interior comp. delantera",
    description:
      "Manija interior comp. delantera derecha - Scania 143 Manija interior comp. delantera derecha  - Scania 143",
    brand: "Scania",
    group: "Manijas",
    image: "images/57.webp",
  },
  {
    id: 402,
    code: "60171",
    name: "Manija interior comp. delantera",
    description:
      "Manija interior comp. delantera Izquierda - Scania 143 Manija interior comp. delantera - izquierda - Scania 143",
    brand: "Scania",
    group: "Manijas",
    image: "images/57.webp",
  },
  {
    id: 41,
    code: "60172",
    name: "Bloqueo de dirección de columna de dirección",
    description:
      "Bloqueo de dirección de columna de dirección con pieza eléctrica y llave - Scania 113 88 a 97",
    brand: "Scania",
    group: "Bloqueos",
    image: "images/58.webp",
  },
  {
    id: 42,
    code: "60193",
    name: "Soporte de bolsa de eje delantero",
    description:
      "Soporte de bolsa de eje delantero - derecho/izquierdo - Scania R-113 - R-143 - T-113 - T-143 Manija de puerta interior (completa) - Izquierda - Scania Serie IV 98 a 08",
    brand: "Scania",
    group: "Manijas",
    image: "images/59.webp",
  },
  {
    id: 432,
    code: "61105",
    name: "Manija de puerta interior",
    description:
      "Manija de puerta interior (completa) - Izquierda - Scania Serie IV 98 a 08",
    brand: "Scania",
    group: "Manijas",
    image: "images/60.webp",
  },
  {
    id: 43,
    code: "61156",
    name: "Bisagra de la parrilla delantera inferior",
    description:
      "Bisagra de la parrilla delantera inferior. - decir. - Scania P 98 à 08 - R 98 à 08 - Serie IV 98 à 08 - T 98 à 08",
    brand: "Scania",
    group: "Bisagras",
    image: "images/61.webp",
  },
  {
    id: 44,
    code: "61158",
    name: "Bisagra de rejilla central delantera derecha",
    description:
      "Bisagra de rejilla central delantera derecha - Scania R 98 a 08 - Serie IV 98 a 08",
    brand: "Scania",
    group: "Bisagras",
    image: "images/62.webp",
  },
  {
    id: 45,
    code: "61159",
    name: "Bisagra de rejilla central delantera izquierda",
    description:
      "Bisagra de rejilla central delantera izquierda - Scania R 98 a 08 - Serie IV 98 a 08 Tirante de susp. Cabine Basculante - Scania P após 98 - R após 98 - Série IV após 98 - Série V após 98 Barra de control superior curvada. - Scania Serie IV 95 a 07 Apoyabrazos delantero derecho - derecho/izquierdo - Scania Serie IV 98 a 08",
    brand: "Scania",
    group: "Bisagras",
    image: "images/62.webp",
  },
  {
    id: 461,
    code: "61168",
    name: "Tirante de suspension",
    description:
      "Tirante de susp. Cabine Basculante- Scania P após 98 - R após 98 Série IV após 98 - Série V após 98",
    brand: "Scania",
    group: "Suspension",
    image: "images/63.webp",
  },
  {
    id: 462,
    code: "61173",
    name: "Barra de control superior curvada",
    description: "Barra de control superior curvada.- Scania Serie IV 95 a 07",
    brand: "Scania",
    group: "Rejillas",
    image: "images/64.webp",
  },
  {
    id: 463,
    code: "61184",
    name: "Apoyabrazos delantero",
    description:
      "Apoyabrazos delantero derecho- derecho/izquierdo - Scania Serie IV 98 a 08",
    brand: "Scania",
    group: "Manijas",
    image: "images/65.webp",
  },
  {
    id: 464,
    code: "61187",
    name: "Rejilla delantera para ventilación/refrigeración del motor",
    description:
      "Rejilla delantera para ventilación/refrigeración del motor - Scania 112-113",
    brand: "Scania",
    group: "Rejillas",
    image: "images/66.webp",
  },
  {
    id: 467,
    code: "61188",
    name: "Moldura de rejilla delantera",
    description:
      "Moldura de rejilla delantera / Soporte para emblema de rejilla delantera - Scania 112-113",
    brand: "Scania",
    group: "Rejillas",
    image: "images/67.webp",
  },
  {
    id: 468,
    code: "61207",
    name: "Depósito de líquido de dirección hidráulica",
    description:
      "Depósito de líquido de dirección hidráulica. Completo. - Scania T/R/P-114 95-07",
    brand: "Scania",
    group: "Deposito",
    image: "images/68.webp",
  },
  {
    id: 47,
    code: "61209",
    name: "Casquillo de suspensión de la cabina del volquete",
    description:
      "Casquillo de suspensión de la cabina del volquete - Scania 112 - 113 98 a 08",
    brand: "Scania",
    group: "Casquillos",
    image: "images/69.webp",
  },
  {
    id: 481,
    code: "61229",
    name: "Bloqueo inferior (pequeño) de la rejilla del capó delantero",
    description:
      "Bloqueo inferior (pequeño) de la rejilla del capó delantero - Izquierda - Scania Serie V después de 10",
    brand: "Scania",
    group: "Manijas",
    image: "images/70.webp",
  },
  {
    id: 48,
    code: "70766",
    name: "Manija de puerta exterior",
    description:
      "Manija de puerta exterior - Con llave - Derecha - Iveco Stralis 97 a 07 - Tector 98 a 10 - Cursor/Cavallino 97 a 07",
    brand: "Scania",
    group: "Manijas",
    image: "images/71.webp",
  },
  {
    id: 49,
    code: "70783",
    name: "Manivela trampilla",
    description:
      "Manivela trampilla - Iveco Cavallino - Eurocargo - Eurotech - Stralis - Trakker",
    brand: "Iveco",
    group: "Manijas",
    image: "images/72.webp",
  },
  {
    id: 50,
    code: "70806",
    name: "Manija de puerta exterior - Con llave - Derecha",
    description:
      "Manija de puerta exterior - Con llave - Derecha - Iveco Cursor después de 08 - Stralis después de 11 - Tector después de 11",
    brand: "Iveco",
    group: "Manijas",
    image: "images/73.webp",
  },
  {
    id: 51,
    code: "70807",
    name: "Manija de puerta exterior - Con llave - Izquierda",
    description:
      "Manija de puerta exterior - Con llave - Izquierda - Iveco Cursor después de 08 - Stralis después de 11 - Tector después de 11",
    brand: "Iveco",
    group: "Manijas",
    image: "images/73.webp",
  },
  {
    id: 51,
    code: "71021",
    name: "Cerradura de puerta mecánica",
    description:
      "Cerradura de puerta mecánica - Con interruptor - Izquierda - Iveco Cavallino después del 97 - Cursor después del 97 - Trakker después del 04",
    brand: "Iveco",
    group: "Cerraduras",
    image: "images/74.webp",
  },
  {
    id: 521,
    code: "71293",
    name: "Maquina levanta cristales Mecánico",
    description:
      "Maquina levanta cristales Mecánico - Cable de Acero Izquierda - Iveco Eurocargo hasta 08 - Eurotech hasta 08 - Trakker hasta 08 - Cursor hasta 08",
    brand: "Iveco",
    group: "Levantavidrios",
    image: "images/75.webp",
  },
  {
    id: 522,
    code: "71294",
    name: "Maquina levanta cristales Mecánico",
    description:
      "Maquina levanta cristales Mecánico - Cable de Acero Derecha - Iveco Eurocargo hasta 08 - Eurotech hasta 08 - Trakker hasta 08 - Cursor hasta 08",
    brand: "Iveco",
    group: "Levantavidrios",
    image: "images/75.webp",
  },
  {
    id: 52123,
    code: "71297",
    name: "Máquina levanta cristales Eléctrico - Sin Motor",
    description:
      "Máquina levanta cristales Eléctrico - Sin Motor - Fix.Mabuchi 8 Dientes - Cable Acero - Izquierdo - Iveco Stralis/Tector/Trakker hasta 08",
    brand: "Iveco",
    group: "Levantavidrios",
    image: "images/76.webp",
  },
  {
    id: 52,
    code: "71299",
    name: "Máquina levanta cristales Eléctrico - Sin Motor",
    description:
      "Máquina levanta cristales eléctrico sin motor, fijación ranurada original, cable de acero, izquierdo, Iveco Stralis/Tector/Cursor posterior a 08 ",
    brand: "Iveco",
    group: "Levantavidrios",
    image: "images/91.webp",
  },
  {
    id: 532,
    code: "96256",
    name: "Amortiguador de gas del capó",
    description:
      "Amortiguador de gas para capó - Longitud: 485 mm / Carrera: 200 mm / Carga: 25 kgf - Diámetro del pistón: 8 mm / Tubo: 18 mm",
    brand: "Iveco",
    group: "Amortiguadores",
    image: "images/77.webp",
  },
  {
    id: 53,
    code: "97065",
    name: "Amortiguador de gas del capó",
    description: "Amortiguador de gas del capó - Iveco Trakker después de 04",
    brand: "Iveco",
    group: "Amortiguadores",
    image: "images/78.webp",
  },
  {
    id: 541,
    code: "99037",
    name: "Amortiguador de gas del capó",
    description: "Amortiguador de gas del capó - Scania P-G-R Serie V",
    brand: "Scania",
    group: "Amortiguadores",
    image: "images/79.webp",
  },
  {
    id: 54,
    code: "10264",
    name: "Tapón del depósito de combustible",
    description: "Tapón del depósito de combustible",
    brand: "Scania",
    group: "Tapones",
    image: "images/80.webp",
  },
  {
    id: 55,
    code: "50386",
    name: "Manija interior de puerta delantera",
    description: "Manija interior de puerta delantera Izq",
    brand: null,
    group: "Manijas",
    image: "images/81.webp",
  },
  {
    id: 56,
    code: "50386",
    name: "Manija interior de puerta delantera",
    description: "Manija interior de puerta delantera Der",
    brand: null,
    group: "Manijas",
    image: "images/81.webp",
  },
  {
    id: 57,
    code: "50393",
    name: "Cilindro de encendido de la columna de dirección",
    description: "Cilindro de encendido de la columna de dirección",
    brand: null,
    group: "Cerraduras",
    image: "images/83.webp",
  },
  {
    id: 5712,
    code: "60175",
    name: "Cerradura de puerta ",
    description: "Cerradura de puerta - mecánica izquierda.",
    brand: null,
    group: "Cerraduras",
    image: "images/84.webp",
  },
  {
    id: 571,
    code: "61110",
    name: "Gancho doble para pestillo de capó externo",
    description: "Gancho doble para pestillo de capó externo",
    brand: null,
    group: "Cerraduras",
    image: "images/85.jpg",
  },
  {
    id: 571,
    code: "60112",
    name: "Varilla medidora de aceite",
    description:
      "Varilla medidora de aceite - acero tamaño: 370mm/medida para montaje: 410mm",
    brand: null,
    group: "Varillas",
    image: "images/86.webp",
  },
  {
    id: 58,
    code: "61118",
    name: "Varilla medidora de aceite - dirección asistida",
    description: "Varilla medidora de aceite - dirección asistida",
    brand: null,
    group: "Manijas",
    image: "images/87.webp",
  },
  {
    id: 58,
    code: "61157",
    name: "Bisagra de rejilla delantera",
    description: "Bisagra de rejilla delantera - inferior - izquierda",
    brand: null,
    group: "Manijas",
    image: "images/88.webp",
  },
  {
    id: 58,
    code: "70767",
    name: "Manija externa de la puerta",
    description: "Manija externa de la puerta c/llave - izquierda",
    brand: null,
    group: "Manijas",
    image: "images/89.webp",
  },
  {
    id: 59,
    code: "71020",
    name: "Cerradura de puerta delantera derecha mecánica",
    description: "Cerradura de puerta delantera derecha mecánica",
    brand: null,
    group: "Cerraduras",
    image: "images/90.jpg",
  },
  {
    id: 60,
    code: "1001",
    name: "MANGUERA DEL INTERCOOLER",
    description:
      "MANGUERA DEL INTERCOOLER, MERCEDES-BENZ 1620 / 1720 / OF1721 / 1726 / 1723K / 1723S / 1938, Ø85 MM X 215 MM, OEM: 6965007375",
    brand: "MERCEDES-BENZ 1620 / 1720 / OF1721 / 1726 / 1723K / 1723S / 1938",
    group: "MANGUERAS",
    image: "images/93.jpg",
  },
  {
    id: 61,
    code: "1005",
    name: "MANGUERA DEL INTERCOOLER",
    description: "MANGUERA DEL INTERCOOLER, AXOR, Ø100MM X 205MM, OEM: A9585013382",
    brand: "AXOR",
    group: "MANGUERAS",
    image: "images/94.jpg",
  },
  {
    id: 62,
    code: "1007",
    name: "MANGUERA DE CONEXIÓN DEL INTERCOOLER",
    description:
      "MANGUERA DE CONEXIÓN DEL INTERCOOLER, ACTROS, Ø115MM X 212MM, OEM: A0020945582 / A0020946682",
    brand: "ACTROS",
    group: "MANGUERAS",
    image: "images/95.jpg",
  },
  {
    id: 63,
    code: "1011",
    name: "MANGUERA DEL INTERCOOLER",
    description:
      "MANGUERA DEL INTERCOOLER, P96, Ø65MM X 65MM, OEM: 1347080/1546550 / 1543023",
    brand: "P96",
    group: "MANGUERAS",
    image: "images/96.jpg",
  },
  {
    id: 64,
    code: "1017",
    name: "MANGUERA DEL INTERCOOLER",
    description:
      "MANGUERA DEL INTERCOOLER, CARGO 1316/ 1317/ 1415/ 1721, Ø76MM X 103MM, OEM: 4C45/6W650/BA",
    brand: "CARGO 1316/ 1317/ 1415/ 1721",
    group: "MANGUERAS",
    image: "images/97.jpg",
  },
  {
    id: 65,
    code: "1004",
    name: "MANGUERA DEL INTERCOOLER",
    description:
      "MANGUERA DEL INTERCOOLER, NUEVO STRALIS / STRALIS / NUEVO TRAKKER, Ø100MM X 310MM, OEM: 5801688746",
    brand: "NUEVO STRALIS / STRALIS / NUEVO TRAKKER",
    group: "MANGUERAS",
    image: "images/98.jpg",
  },
  {
    id: 66,
    code: "1006",
    name: "MANGUERA DE REFRIGERACIÓN",
    description: "MANGUERA DE REFRIGERACIÓN, ACTROS, Ø115MM X 212MM, OEM: A0020945782",
    brand: "ACTROS",
    group: "MANGUERAS",
    image: "images/99.jpg",
  },
  {
    id: 67,
    code: "1010",
    name: "MANGUERA DE TURBINA",
    description:
      "MANGUERA DE TURBINA, SERIE 3 111/112/113/143, Ø76MM X 100MM, OEM: 267353/ 373210",
    brand: "SERIE 3 111/112/113/143",
    group: "MANGUERAS",
    image: "images/101.jpg",
  },
  {
    id: 68,
    code: "1016",
    name: "MANGUERA DE CONEXIÓN DE TURBINA",
    description:
      "MANGUERA DE CONEXIÓN DE TURBINA, CARGA PESADA, Ø76MM X 120MM, OEM: 7C45/6C640/AA",
    brand: "CARGA PESADA",
    group: "MANGUERAS",
    image: "images/100.jpg",
  },
  {
    id: 69,
    code: "1018",
    name: "MANGUERA DEL INTERCOOLER",
    description:
      "MANGUERA DEL INTERCOOLER, EUROTECH/ EUROTRAKKER, Ø90MM X 180MM, OEM: 41026109",
    brand: "EUROTECH/ EUROTRAKKER",
    group: "MANGUERAS",
    image: "images/102.jpg",
  },
  {
    id: 70,
    code: "1021",
    name: "MANGUERA DEL INTERCOOLER",
    description: "MANGUERA DEL INTERCOOLER, 112/113/142, Ø 90MM X 150MM, OEM: 488368",
    brand: "112/113/142",
    group: "MANGUERAS",
    image: "images/103.jpg",
  },
  {
    id: 71,
    code: "1026",
    name: "MANGUERA DEL INTERCOOLER",
    description:
      "MANGUERA DEL INTERCOOLER, NUEVO STRALIS / STRALIS / NUEVO TRAKKER, Ø90MM X 200MM, OEM: 5801688744",
    brand: "NUEVO STRALIS / STRALIS / NUEVO TRAKKER",
    group: "MANGUERAS",
    image: "images/102.jpg",
  },
  {
    id: 72,
    code: "1027",
    name: "MANGUERA DEL INTERCOOLER",
    description: "MANGUERA DEL INTERCOOLER, EUROTECH, Ø90MM L 165MM, OEM: 42088621",
    brand: "EUROTECH",
    group: "MANGUERAS",
    image: "images/104.jpg",
  },
  {
    id: 73,
    code: "1023",
    name: "MANGUERA DE CONEXIÓN DE TURBINA",
    description:
      "MANGUERA DE CONEXIÓN DE TURBINA, FORD CARGO 1622 / 1722 / 2422 / 2622 / 2425 / 2626 / 1630 / 1731 / 4030 / 4031 / 2631 / 1630 ARG / 4331 / 2622 / 2626 / 4031 / 3222 / 2422 / 1722 / 1731 / 1730 ARG VW CONSTELLATION 24-250 / 26-260 / 31-260 / 31-320 / 31-370 / 25-320 / 26-370 TRABAJADOR: 15-170 / 15-180 / 15-190 / 17-250 / 24-250 / 31-260/ 17-180/ 24-220 BUS - 15-180/ 15-190/17-210/ 17-230 EOD/ 17-260 EOT/ 18-320 EOT, Ø76MM X 85MM, OEM FORD: 2C45/6W650/AB, OEM VOLKSWAGEN: 2TC 117231",
    brand:
      "FORD CARGO 1622 / 1722 / 2422 / 2622 / 2425 / 2626 / 1630 / 1731 / 4030 / 4031 / 2631 / 1630 ARG / 4331 / 2622 / 2626 / 4031 / 3222 / 2422 / 1722 / 1731 / 1730 ARG VW CONSTELLATION 24-250 / 26-260 / 31-260 / 31-320 / 31-370 / 25-320 / 26-370 TRABAJADOR: 15-170 / 15-180 / 15-190 / 17-250 / 24-250 / 31-260/ 17-180/ 24-220 BUS - 15-180/ 15-190/17-210/ 17-230 EOD/ 17-260 EOT/ 18-320 EOT",
    group: "MANGUERAS",
    image: "images/105.jpg",
  },
  {
    id: 74,
    code: "1028",
    name: "MANGUERA DEL INTERCOOLER",
    description:
      "MANGUERA DEL INTERCOOLER, OH1625/ OH1630/ OH1628/ O400, Ø100MM X 220MM, OEM: A3865288182",
    brand: "OH1625/ OH1630/ OH1628/ O400",
    group: "MANGUERAS",
    image: "images/106.jpg",
  },
  {
    id: 75,
    code: "0025538205",
    name: "CILINDRO HIDRAULICO LEVANTA CABINA",
    description:
      "CILINDRO HIDRAULICO LEVANTA CABINA, OEM A0025538205, MERCEDES-BENZ ATEGO Y AXOR 2",
    brand: "MERCEDES-BENZ",
    group: "CILINDRO LEVANTA CABINA",
    image: "images/107.webp",
  },
  {
    id: 76,
    code: "1423397",
    name: "CILINDRO HIDRAULICO LEVANTA CABINA",
    description:
      "CILINDRO HIDRAULICO LEVANTA CABINA, OEM 1354889 1423397 1466507 1511921, SCANIA P-/G-/R-/T- SERIES",
    brand: "SCANIA",
    group: "CILINDRO LEVANTA CABINA",
    image: "images/108.webp",
  },
  {
    id: 77,
    code: "1477878",
    name: "CILINDRO HIDRAULICO LEVANTA CABINA",
    description:
      "CILINDRO HIDRAULICO LEVANTA CABINA, OEM 1477878 1720924, SCANIA P-/G-/R-/T- SERIES",
    brand: "SCANIA",
    group: "CILINDRO LEVANTA CABINA",
    image: "images/109.webp",
  },
  {
    id: 78,
    code: "375351",
    name: "CILINDRO LEVANTA CABINA",
    description: "CILINDRO LEVANTA CABINA, SCANIA P93 S 2/3 CG/CP",
    brand: "SCANIA",
    group: "CILINDRO LEVANTA CABINA",
    image: "images/110.webp",
  },
  {
    id: 79,
    code: "001",
    name: "AMORTIGUADORES DE CABINA",
    description:
      "AMORTIGUADORES DE CABINA, SCANIA SERIE 4 Y 5 - G/R 1998 A 2011 / P 2004 A 2018 DELANTERO / NEUMÁTICO, OEM: 1363122 / 1424228",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/111.jpg",
  },
  {
    id: 80,
    code: "009",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, SCANIA SÉRIE 4 E 5 - P/G/R 2004 A 2011 DELANTERO",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/112.jpg",
  },
  {
    id: 81,
    code: "013",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 3 - T 1991 A 1998 TRASERO, OEM: 1348121",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/113.jpg",
  },
  {
    id: 82,
    code: "015",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 4 Y 5 - P/G/R 2004 A 2011 DELANTERO Y TRASERO, OEM: 1349840 / 1424231",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/114.jpg",
  },
  {
    id: 83,
    code: "023",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, IVECO EUROTECH 1999 A 2006 DELANTERO, OEM: 41019150 / 8169050 / 41015530",
    brand: "IVECO",
    group: "AMORTIGUADORES",
    image: "images/115.jpg",
  },
  {
    id: 84,
    code: "003",
    name: "AMORTIGUADORES DE CABINA",
    description:
      "AMORTIGUADORES DE CABINA, SCANIA SERIE 3 - T 1991 A 1998 TRASERO / NEUMÁTICO, OEM: 1348477 / 1348119",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/116.jpg",
  },
  {
    id: 85,
    code: "012",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 4 - T 1998 A 2006 / P 1998 A 2003 TRASERO, OEM: 1476415 / 1381919",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/117.jpg",
  },
  {
    id: 86,
    code: "014",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 3 - R 1991 A 1998 TRASERO, OEM: 1314278",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/118.jpg",
  },
  {
    id: 87,
    code: "019",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 3 - R 1991 A 1998 TRASERO, OEM: 13142781, COMPONENTES: 004 + 014",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/119.jpg",
  },
  {
    id: 88,
    code: "028",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, IVECO EUROTECH 1998 A 2006 TRASERO, OEM: 504000259, COMPONENTES: 036 B",
    brand: "IVECO",
    group: "AMORTIGUADORES",
    image: "images/120.jpg",
  },
  {
    id: 89,
    code: "028 B",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, IVECO STRALIS / EUROTECH / NUEVO STRALIS HI-ROAD TRASERO REPUESTOS ORIGINALES Y BARRA SUSPENTECH 2 MM",
    brand: "IVECO",
    group: "AMORTIGUADORES",
    image: "images/121.jpg",
  },
  {
    id: 90,
    code: "040 B",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, VOLVO FH 2004 A 2009 REPUESTO TRASERO ORIGINAL, OEM: 21651231",
    brand: "VOLVO",
    group: "AMORTIGUADORES",
    image: "images/122.jpg",
  },
  {
    id: 91,
    code: "042 B",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, IVECO HI WAY 2013 A 2023 / STRALIS 2005 A 2019 / IVECO STRALIS HI ROAD 2019 A 2023 DELANTERO *VARILLA DE REPUESTO 13 MM *042 B 20: VARILLA DE REPUESTO 20 MM",
    brand: "IVECO",
    group: "AMORTIGUADORES",
    image: "images/123.jpg",
  },
  {
    id: 92,
    code: "036",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, IVECO STRALIS 2005 A 2019 / STRALIS HI ROAD 2019 A 2023 TRASERO, OEM: 504060241, COMPONENTES: 036 B",
    brand: "IVECO",
    group: "AMORTIGUADORES",
    image: "images/124.jpg",
  },
  {
    id: 93,
    code: "042",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, IVECO STRALIS 2005 A 2019 / STRALIS HI ROAD 2019 A 2023 DELANTERO, OEM: 500357351 / 504080540 / 2997842, COMPONENTES: 042B",
    brand: "IVECO",
    group: "AMORTIGUADORES",
    image: "images/125.jpg",
  },
  {
    id: 94,
    code: "057",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 4 Y 5 - P/G/R 2004 A 2011 TRASERO, OEM: 1434380, COMPONENTES: 037 + 012",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/126.jpg",
  },
  {
    id: 95,
    code: "065",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 4 - R 1998 A 2003 DELANTERO Y TRASERO, OEM: 1349840 / 1424231",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/127.jpg",
  },
  {
    id: 96,
    code: "048",
    name: "CONJUNTO DE RESORTE DE BOBINA DE CABINA",
    description:
      "CONJUNTO DE RESORTE DE BOBINA DE CABINA, IVECO EUROTECH 1998 A 2006 TRASERO, OEM: 500377859",
    brand: "IVECO",
    group: "AMORTIGUADORES",
    image: "images/128.jpg",
  },
  {
    id: 97,
    code: "063",
    name: "AMORTIGUADORES DE CABINA",
    description:
      "AMORTIGUADORES DE CABINA, VOLVO FH 1993 A 2014 / VOLVO FM 2000 A 2014 TRASERO/HORIZONTAL, OEM: 3198849 / 20960909 / 21539730",
    brand: "VOLVO",
    group: "AMORTIGUADORES",
    image: "images/129.jpg",
  },
  {
    id: 98,
    code: "071",
    name: "AMORTIGUADORES DE CABINA",
    description:
      "AMORTIGUADORES DE CABINA, VOLVO FH 1993 A 2014 / VOLVO FM 200 A 2014 / VOLVO FMX 2011 A 2014 TRASERO / HELICOIDAL, OEM: 21137458",
    brand: "VOLVO",
    group: "AMORTIGUADORES",
    image: "images/130.jpg",
  },
  {
    id: 99,
    code: "095",
    name: "CONJUNTO DE RESORTE DE BOBINA DE CABINA",
    description:
      "CONJUNTO DE RESORTE DE BOBINA DE CABINA, VOLVO FM 2000 A 2014 / FMX 2011 A 2014 TRASERO, OEM: 21137458 / 3199261, COMPONENTES: 071 + 443",
    brand: "VOLVO",
    group: "AMORTIGUADORES",
    image: "images/131.jpg",
  },
  {
    id: 100,
    code: "128",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 5 - R HIGHLINE 2008 A 2011 DELANTERO, OEM: 1434379, COMPONENTES: 001 + 125",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/132.jpg",
  },
  {
    id: 101,
    code: "130",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 5 - P 2012 A 2018 DELANTERO / SCANIA SERIE 5 - P/G/R 2012 A 2018 TRASERO, OEM: 1502468",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/133.jpg",
  },
  {
    id: 102,
    code: "171",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 5 - G/R 2012 A 2018 DELANTERO, OEM: 1802567",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/134.jpg",
  },
  {
    id: 103,
    code: "174",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, MERCEDES-BENZ AXOR SERIE 20 2006 A 2023 (EXCEPTO AXOR 1933) ACTROS 2010 A 2020 (EXCEPTO NUEVO ACTROS) ATEGO CABINA DORMITORIO 2013 EN ADELANTE TRASERA, OEM: A9428906119 / A9588901019, COMPONENTES: 174 B",
    brand: "MERCEDES-BENZ",
    group: "AMORTIGUADORES",
    image: "images/135.jpg",
  },
  {
    id: 104,
    code: "106",
    name: "CONJUNTO DE RESORTE HELICOIDAL CABINA",
    description:
      "CONJUNTO DE RESORTE HELICOIDAL CABINA, MERCEDES-BENZ SERIE 20 2006 A 2023 DELANTERO",
    brand: "MERCEDES-BENZ",
    group: "AMORTIGUADORES",
    image: "images/136.jpg",
  },
  {
    id: 105,
    code: "129",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 5 - R HIGHLINE 2008 A 2011 TRASERO, OEM: 1873668 / 2493164 / 2086674 / 1434380, COMPONENTES: 037 + 125",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/137.jpg",
  },
  {
    id: 106,
    code: "131",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 5 - P 2012 A 2018 DELANTERO, OEM: 1445984, COMPONENTES: 001 + 130",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/138.jpg",
  },
  {
    id: 107,
    code: "173 B",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, MERCEDES-BENZ ACTROS 2010 A 2020 (EXCEPTO NUEVO ACTROS) DELANTERO",
    brand: "MERCEDES-BENZ",
    group: "AMORTIGUADORES",
    image: "images/139.jpg",
  },
  {
    id: 108,
    code: "174 B",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, MERCEDES-BENZ AXOR SERIE 20 - DESDE 2006 / ACTROS 210 A 2020 (EXCEPTO AXOR 1933) / ATEGO CABINA DORMITORIO DESDE 2013 - REPUESTO TRASERO SUSPENTECH, OEM : A9428906119 / A9588901019",
    brand: "MERCEDES-BENZ",
    group: "AMORTIGUADORES",
    image: "images/140.jpg",
  },
  {
    id: 109,
    code: "184",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, VOLVO FH 2004 A 2014 DELANTERO, OEM: 20453256 / 21111932 / 20889132, COMPONENTES: 061 + 184 B + 3019",
    brand: "VOLVO",
    group: "AMORTIGUADORES",
    image: "images/141.jpg",
  },
  {
    id: 110,
    code: "186",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, VOLVO FH 2004 A 2014 TRASERO, OEM: 21651231 / 3172985 / 20427897 / 20889134 / 22144200, COMPONENTES: 186 B",
    brand: "VOLVO",
    group: "AMORTIGUADORES",
    image: "images/142.jpg",
  },
  {
    id: 111,
    code: "337",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, IVECO HI WAY 2013 A 2023 TRASERO, OEM: 97383886",
    brand: "IVECO",
    group: "AMORTIGUADORES",
    image: "images/143.jpg",
  },
  {
    id: 112,
    code: "344",
    name: "CONJUNTO DE RESORTE DE BOBINA DE CABINA",
    description:
      "CONJUNTO DE RESORTE DE BOBINA DE CABINA, FORD CARGO CABINA SIMPLE 2011 A 2019 DELANTERA (COMFORT), OEM: BC45-5C368-AB",
    brand: "FORD",
    group: "AMORTIGUADORES",
    image: "images/144.jpg",
  },
  {
    id: 113,
    code: "374",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 6 - R 2019 EN ADELANTE DELANTERO, OEM: 2621045 / 2955066, COMPONENTES: 374 B + 375",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/145.jpg",
  },
  {
    id: 114,
    code: "376",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 6 - R 2019 EN ADELANTE TRASERO, OEM: 2621046 / KB140233 / 2955067, COMPONENTES: 376 B + 377",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/146.jpg",
  },
  {
    id: 115,
    code: "184 B",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description: "RESORTE NEUMÁTICO DE CABINA, VOLVO FH 2010 A 2014 DELANTERO",
    brand: "VOLVO",
    group: "AMORTIGUADORES",
    image: "images/147.jpg",
  },
  {
    id: 116,
    code: "186 B",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, VOLVO FH 2004 A 2014 TRASERO *186 B 20: BARRA DE REPUESTO 20 MM",
    brand: "VOLVO",
    group: "AMORTIGUADORES",
    image: "images/148.jpg",
  },
  {
    id: 117,
    code: "343",
    name: "CONJUNTO DE RESORTE DE BOBINA DE CABINA",
    description:
      "CONJUNTO DE RESORTE DE BOBINA DE CABINA, FORD CARGO CABINA DORMITORIO 2011 A 2019 DELANTERA, OEM: BC45-5C368-BB",
    brand: "FORD",
    group: "AMORTIGUADORES",
    image: "images/149.jpg",
  },
  {
    id: 118,
    code: "362",
    name: "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA",
    description:
      "CONJUNTO DE RESORTE NEUMÁTICO DE CABINA, IVECO HI WAY 2013 A 2023 DELANTERO, OEM: 97383885, COMPONENTES: 042 B",
    brand: "IVECO",
    group: "AMORTIGUADORES",
    image: "images/150.jpg",
  },
  {
    id: 119,
    code: "374 B",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 6 - R 2019 EN ADELANTE DELANTERO, OEM: KB110666 / 2621043 / 2955068",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/151.jpg",
  },
  {
    id: 120,
    code: "376 B",
    name: "RESORTE NEUMÁTICO DE CABINA",
    description:
      "RESORTE NEUMÁTICO DE CABINA, SCANIA SERIE 6 - R 2019 EN ADELANTE TRASERO, OEM: KB140233 / 2621044 / 2955069",
    brand: "SCANIA",
    group: "AMORTIGUADORES",
    image: "images/152.jpg",
  },
  {
    id: 121,
    code: "034",
    name: "TERMINALES DE CABINA",
    description:
      "TERMINALES DE CABINA, SCANIA SERIE 4 Y 5 - P 2004 A 2018 / G 2004 A 2011 / R 1998 A 2011 DIÁMETRO DELANTERO 16 MM / M12 X 1,75 MM, OEM: 1364293 / 1744210",
    brand: "SCANIA",
    group: "TERMINALES",
    image: "images/153.jpg",
  },
  {
    id: 122,
    code: "136",
    name: "TERMINALES DE CABINA",
    description:
      "TERMINALES DE CABINA, SCANIA SERIE 5 - R HIGHLINE 2008 A 2011 DIÁMETRO DELANTERO EXTENDIDO 16 MM / M12 X 1,75 MM, OEM: 1744211 / 2094316",
    brand: "SCANIA",
    group: "TERMINALES",
    image: "images/154.jpg",
  },
  {
    id: 123,
    code: "126",
    name: "TERMINALES DE CABINA",
    description:
      "TERMINALES DE CABINA, SCANIA SERIE 4 - T 1998 A 2006 DIÁMETRO TRASERO 14 MM / M12 X 1,75 MM, OEM: 1504160",
    brand: "SCANIA",
    group: "TERMINALES",
    image: "images/155.jpg",
  },
  {
    id: 124,
    code: "1000-90UA",
    name: "ARO GIRATORIO 1000 X 90",
    description: "ARO GIRATORIO 1000 X 90",
    brand: null,
    group: "AROS",
    image: "images/156.webp",
  },
  {
    id: 125,
    code: "1000.2",
    name: "ARO GIRATORIO 1000 DOBLE HILERA",
    description: "ARO GIRATORIO 1000 DOBLE HILERA CAPACIDAD 15 TN - ALTO 90 MM",
    brand: null,
    group: "AROS",
    image: "images/156.webp",
  },
  {
    id: 126,
    code: "9585530301",
    name: "BOMBA LEVANTA CABINA",
    description: "BOMBA LEVANTA CABINA, MERCEDES BENZ ATEGO",
    brand: "Mercedes-Benz",
    group: "BOMBAS",
    image: "images/157.webp",
  },
  {
    id: 127,
    code: "9585530201",
    name: "BOMBA HIDRAÚLICA LEVANTA CABINA",
    description:
      "BOMBA HIDRAÚLICA LEVANTA CABINA, MERCEDES-BENZ AXOR 1933/2533/2625/2628/2826/2831, OEM A9585530201 A9585530301 A9585530501",
    brand: "Mercedes-Benz",
    group: "BOMBAS",
    image: "images/158.webp",
  },
  {
    id: 128,
    code: "6954900065",
    name: "FLEXIBLE DE ESCAPE",
    description:
      "FLEXIBLE DE ESCAPE M.BENZ OF 1722 - O500 - 1624 CON ABRAZADERA, OEM: 6954900065 / E009152",
    brand: "Mercedes-Benz",
    group: "FLEXIBLES",
    image: "images/159.webp",
  },
  {
    id: 129,
    code: "3824900165",
    name: "FLEXIBLE DE ESCAPE",
    description:
      "FLEXIBLE DE ESCAPE M.BENZ OF 1417 - 1418 / O500 URBANO CON ABRAZADERA, OEM: 3824900165 - E009153",
    brand: "Mercedes-Benz",
    group: "FLEXIBLES",
    image: "images/160.webp",
  },
  {
    id: 130,
    code: "6344900565",
    name: "FLEXIBLE CAÑO SALIDA DE ESCAPE",
    description:
      "FLEXIBLE CAÑO SALIDA DE ESCAPE MERCEDES BENZ O500 5, OEM: 6344900565 / M-092E",
    brand: "Mercedes-Benz",
    group: "FLEXIBLES",
    image: "images/159.webp",
  },
  {
    id: 131,
    code: "009154",
    name: "FLEXIBLE DE ESCAPE",
    description:
      "FLEXIBLE DE ESCAPE OF 1618 S - O500 LARGA DISTANCIA, CON ABRAZADERA OEM: 3684900165",
    brand: null,
    group: "FLEXIBLES",
    image: "images/160.webp",
  },
  {
    id: 132,
    code: "001",
    name: "CAÑO ESPIRALADO PARA AIRE ROJA",
    description: "CAÑO ESPIRALADO PARA AIRE COLOR ROJO, MEDIDAS: 1/4 - 3/8",
    brand: null,
    group: "CAÑOS",
    image: "images/161.webp",
  },
  {
    id: 133,
    code: "002",
    name: "CAÑO ESPIRALADO PARA AIRE AZUL",
    description: "CAÑO ESPIRALADO PARA AIRE COLOR AZUL, MEDIDAS: 1/4 - 3/8",
    brand: null,
    group: "CAÑOS",
    image: "images/162.webp",
  },
  {
    id: 134,
    code: "003",
    name: "CAÑO ESPIRALADO ROJO 7,5 MTS",
    description: "CAÑO ESPIRALADO COLOR ROJO DE 7,5 METROS, MEDIDAS: 1/4 - 3/8",
    brand: null,
    group: "CAÑOS",
    image: "images/161.webp",
  },
  {
    id: 135,
    code: "004",
    name: "CAÑO ESPIRALADO AZUL 7,5 MTS",
    description: "CAÑO ESPIRALADO COLOR AZUL DE 7,5 METROS, MEDIDAS: 1/4 - 3/8",
    brand: null,
    group: "CAÑOS",
    image: "images/162.webp",
  },
  {
    id: 136,
    code: "064",
    name: "SUSPENSIÓN DE EJE CON RESORTE DE AIRE",
    description:
      "SUSPENSIÓN DE EJE CON RESORTE DE AIRE, VOLVO FH / FM 2004 A 2014 TRACCIÓN Y TERCER EJE (MAYOR Ø), OEM: 20582206, FIRESTONE: 950880 / 1T15LNR-6, CONTITECH: 6605 N P01, COMPONENTES: 064 K + 230 BSE KIT DE REPUESTO",
    brand: "Volvo",
    group: "SUSPENSIÓN",
    image: "images/163.jpg",
  },
  {
    id: 137,
    code: "137 EEB",
    name: "EJE DE SUSPENSIÓN DE RESORTE NEUMÁTICO",
    description:
      "EJE DE SUSPENSIÓN DE RESORTE NEUMÁTICO BASE TRACCIÓN, VOLVO FH / FM (Ø MENOR) A PARTIR DE 2004 / SUSPENSIÓN DE EJE VOLVO FH / FM A PARTIR DE 2015",
    brand: "Volvo",
    group: "SUSPENSIÓN",
    image: "images/164.jpg",
  },
  {
    id: 138,
    code: "833",
    name: "RESORTE CONTORNILLADO EJE DE SUSPENSIÓN",
    description:
      "RESORTE CONTORNILLADO EJE DE SUSPENSIÓN, FACCHINI / HBZ, OEM FACCHINI: 308501702, OEM HBZ: 8000-26, FIRESTONE: 950352 / 333, CONTITECH: FT 530-35 846, GOODYEAR: 8457",
    brand: null,
    group: "SUSPENSIÓN",
    image: "images/165.jpg",
  },
  {
    id: 139,
    code: "858",
    name: "RESORTE CONTORNILLADO",
    description:
      "RESORTE CONTORNILLADO, RANDON / SUSPENSYS / WAR / AMERICA / EJE DE SUSPENSIÓN IBERO, OEM RANDON - SUSPENSYS: 212100278, OEM WAR: 5036002015006, OEM IBERO MOP: 059 000 003, CONTITECH: FD 200-19 810, GOODYEAR: 8520",
    brand: null,
    group: "SUSPENSIÓN",
    image: "images/166.jpg",
  },
  {
    id: 140,
    code: "064 K",
    name: "SIN BASE SUSPENSIÓN DE EJE CON RESORTE DE AIRE",
    description:
      "SIN BASE SUSPENSIÓN DE EJE CON RESORTE DE AIRE, VOLVO FH / FM 2004 A 2014 TRACCIÓN Y TERCER EJE (MAYOR Ø), OEM: 20582206, FIRESTONE: 950880 / 1T15LNR-6, CONTITECH: 6605 N P01",
    brand: "Volvo",
    group: "SUSPENSIÓN",
    image: "images/167.jpg",
  },
  {
    id: 141,
    code: "137 / 137 K",
    name: "SIN BASE SUSPENSIÓN DE EJE CON RESORTE DE AIRE TRACCIÓN",
    description:
      "SIN BASE SUSPENSIÓN DE EJE CON RESORTE DE AIRE TRACCIÓN, VOLVO FH / FM 2004 A 2014 (Ø MENOR), OEM: 20582215 / 21961456, FIRESTONE: 950881 / 1T15UR-9 / W01-M58-8474, CONTINTECH: 6608 - NP01, COMPONENTES: 137 K + 137 BSE KIT DE REPUESTO",
    brand: "Volvo",
    group: "SUSPENSIÓN",
    image: "images/168.jpg",
  },
  {
    id: 142,
    code: "853",
    name: "RESORTE CONTORNILLADO EJE DE SUSPENSIÓN",
    description:
      "RESORTE CONTORNILLADO EJE DE SUSPENSIÓN, RANDON / JO/ SUSPENSYS / RODOFORT, OEM RANDON / JOST: AD00076J00 / 212100337, FIRESTONE: 950313 / 20, CONTITECH: FD 200-19 823, GOODYEAR: 8521",
    brand: null,
    group: "SUSPENSIÓN",
    image: "images/169.jpg",
  },
];

// // Referencias globales
// concontainer = document.getElementById("product-grid");
// consearchInp = document.getElementById("search-inp");
// consearchBton = document.getElementById("search-bton");

// // Mostrar productos
// function renderProductos(lista) {
//   container.innerHTML = "";
//   lista.forEach((producto) => {
//     conitem = document.createElement("a");
//     item.href = "#";
//     item.className = "group product-item";
//     item.setAttribe("data-marca", producto.brand);
//     item.setAttribe("data-group", producto.group);
//     item.innerHTML = `
//       <img
//         src="${producto.image}"
//         alt="${producto.name}"
//         class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
//       />
//       <h3 class="mt-4 text-sm text-gray-700">${producto.name}</h3>
//       <p class="mt-1 text-sm font-medium text-gray-500">${producto.code}</p>
//     `;
//     container.appendChild(item);
//   });
// }

// // Filtro por texto
// function filtrarPorTexto() {
//   conquery = searchInp.value.trim().toLowerCase();
//   confiltrados = productos.filter(
//     (p) =>
//       p.name.toLowerCase().includes(query) ||
//       p.code.toLowerCase().includes(query) ||
//       p.brand.toLowerCase().includes(query) ||
//       p.group.toLowerCase().includes(query)
//   );
//   renderProductos(filtrados);
//   aplicarFiltrosCheckbox(); // Reaplica filtros si hay checkboxes seleccionados
// }

// // Filtros por checkbox
// function aplicarFiltrosCheckbox() {
//   conbrandCheckboxes = document.querySelectorAll('inp[name="brand[]"]');
//   congroupCheckboxes = document.querySelectorAll('inp[name="group[]"]');
//   conitems = document.querySelectorAll(".product-item");

//   conmarcasSeleccionadas = Array.from(brandCheckboxes)
//     .filter((cb) => cb.checked)
//     .map((cb) => cb.value);

//   congruposSeleccionados = Array.from(groupCheckboxes)
//     .filter((cb) => cb.checked)
//     .map((cb) => cb.value);

//   items.forEach((item) => {
//     conmarca = item.getAttribe("data-marca");
//     congrupo = item.getAttribe("data-group");

//     concoincideMarca =
//       marcasSeleccionadas.length === 0 || marcasSeleccionadas.includes(marca);
//     concoincideGrupo =
//       gruposSeleccionados.length === 0 || gruposSeleccionados.includes(grupo);

//     item.style.display = coincideMarca && coincideGrupo ? "" : "none";
//   });
// }
// document.addEventListener("DOMContentLoaded", () => {
//   conbrands = [
//     "Mercedes-Benz",
//     "Scania",
//     "Iveco",
//     "Volvo",
//     "Ford",
//     "Volkswagen",
//     "Randon",
//     "Facchini",
//     "Jost",
//     "WAR",
//     "America",
//     "SUSPENSYS",
//     "HBZ",
//     "Ibero",
//   ];

//   conbrandLi= document.getElementById("brand-list");

//   brands.forEach((brand) => {
//     conid = `brand-${brand.toLowerCase().replace(/\s+/g, "-")}`;

//     condiv = document.createElement("div");
//     div.className = "flex gap-3";
//     div.innerHTML = `
//         <div class="flex h-5 shrink-0 items-center">
//           <div class="group grid size-4 grid-cols-1">
//             <inp
//               id="${id}"
//               name="brand[]"
//               value="${brand}"
//               type="checkbox"
//               class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:oline-2 focus-visible:oline-offset-2 focus-visible:oline-indigo-600"
//             />
//             <svg
//               class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
//               viewBox="0 0 14 14"
//               fill="none"
//             >
//               <path
//                 class="opacity-0 group-has-checked:opacity-100"
//                 d="M3 8L6 11L11 3.5"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 class="opacity-0 group-has-indeterminate:opacity-100"
//                 d="M3 7H11"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//         <label for="${id}" class="text-sm text-gray-600">${brand}</label>
//       `;
//     brandList.appendChild(div);
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   concategories = [
//     "Amortiguadores",
//     "Aros",
//     "Barras",
//     "Bisagras",
//     "Bombas",
//     "Burletes",
//     "Cabina",
//     "Cañones",
//     "Cerraduras",
//     "Cilindro Levanta Cabina",
//     "Flexibles",
//     "Juegos de Goma",
//     "Levantavidrios",
//     "Manijas",
//     "Mangueras",
//     "Marcos",
//     "Otros",
//     "Pedales",
//     "Rejillas",
//     "Suspensión",
//     "Tapas",
//     "Tapones",
//     "Terminales",
//   ];

//   concategoryLi= document.getElementById("category-list");

//   categories.forEach((category) => {
//     conid = `category-${category.toLowerCase().replace(/\s+/g, "-")}`;

//     condiv = document.createElement("div");
//     div.className = "flex gap-3";
//     div.innerHTML = `
//         <div class="flex h-5 shrink-0 items-center">
//           <div class="group grid size-4 grid-cols-1">
//             <inp
//               id="${id}"
//               name="category[]"
//               value="${category}"
//               type="checkbox"
//               class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:oline-2 focus-visible:oline-offset-2 focus-visible:oline-indigo-600"
//             />
//             <svg
//               class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
//               viewBox="0 0 14 14"
//               fill="none"
//             >
//               <path
//                 class="opacity-0 group-has-checked:opacity-100"
//                 d="M3 8L6 11L11 3.5"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 class="opacity-0 group-has-indeterminate:opacity-100"
//                 d="M3 7H11"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//         <label for="${id}" class="text-sm text-gray-600">${category}</label>
//       `;
//     categoryList.appendChild(div);
//   });
// });

// Collapse funcionalidad
// function initCollapse() {
//   contoggleBtons = document.querySelectorAll(
//     "bton[aria-controls^='filter-section']"
//   );

//   toggleBtons.forEach((bton) => {
//     contargetId = bton.getAttribe("aria-controls");
//     contarget = document.getElementById(targetId);
//     conicons = bton.querySelectorAll("svg");

//     // Estado inicial: colapsado
//     bton.setAttribe("aria-expanded", "false");
//     target.classList.add("hidden");

//     // Mostrar solo el icono "+" (primer ícono)
//     if (icons[0]) icons[0].classList.remove("hidden"); // +
//     if (icons[1]) icons[1].classList.add("hidden"); // -

//     // Evento click para toggle
//     bton.addEventListener("click", () => {
//       conisExpanded = bton.getAttribe("aria-expanded") === "true";
//       bton.setAttribe("aria-expanded", !isExpanded);
//       target.classList.toggle("hidden");

//       // Alternar iconos: icons[0] = +, icons[1] = -
//       if (icons.length >= 2) {
//         icons[0].classList.toggle("hidden", !isExpanded); // mostrar + si cerrado
//         icons[1].classList.toggle("hidden", isExpanded); // mostrar - si abierto
//       }
//     });
//   });
// }
// function aplicarTodosLosFiltros() {
//   conquery = searchInp.value.trim().toLowerCase();

//   conselectedBrands = Array.from(
//     document.querySelectorAll('inp[name="brand[]"]:checked')
//   ).map((cb) => cb.value);
//   conselectedGroups = Array.from(
//     document.querySelectorAll('inp[name="group[]"]:checked')
//   ).map((cb) => cb.value);

//   confiltrados = productos.filter((p) => {
//     concoincideTexto =
//       p.name.toLowerCase().includes(query) ||
//       p.code.toLowerCase().includes(query) ||
//       p.brand.toLowerCase().includes(query) ||
//       p.group.toLowerCase().includes(query);

//     concoincideMarca = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
//     concoincideGrupo = selectedGroups.length === 0 || selectedGroups.includes(p.group);

//     return coincideTexto && coincideMarca && coincideGrupo;
//   });

//   renderProductos(filtrados);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderProductos(productos);
//   initCollapse();

//   if (searchInp && searchBton) {
//     // Buscar mientras escribe
//     searchInp.addEventListener("search-inp", aplicarTodosLosFiltros);
//     // Buscar al apretar enter
//     searchInp.addEventListener("keydown", (e) => {
//       if (e.key === "Enter") aplicarTodosLosFiltros();
//     });
//     // Buscar con botón
//     searchBton.addEventListener("click", aplicarTodosLosFiltros);
//   }

//   // Al cambiar un checkbox
//   document.addEventListener("change", (e) => {
//     if (e.target.matches('inp[name="brand[]"], inp[name="group[]"]')) {
//       aplicarTodosLosFiltros();
//     }
//   });
// });

// Elementosconproductos = [

// Collapse funcionalidad

// Collapse funcionalidad
function initCollapse() {
  const toggleButtons = document.querySelectorAll(
    "button[aria-controls^='filter-section']"
  );

  toggleButtons.forEach((button) => {
    const targetId = button.getAttribute("aria-controls");
    const target = document.getElementById(targetId);
    const icons = button.querySelectorAll("svg");

    // Estado inicial: colapsado
    button.setAttribute("aria-expanded", "false");
    target?.classList.add("hidden");

    if (icons[0]) icons[0].classList.remove("hidden"); // +
    if (icons[1]) icons[1].classList.add("hidden"); // -

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);
      target?.classList.toggle("hidden");

      if (icons.length >= 2) {
        icons[0].classList.toggle("hidden", !isExpanded);
        icons[1].classList.toggle("hidden", isExpanded);
      }
    });
  });
}

// Elementos
const searchInputs = [
  document.getElementById("search-input-mobile"),
  document.getElementById("search-input-desktop"),
].filter(Boolean);

const searchButtons = [
  document.getElementById("search-button-mobile"),
  document.getElementById("search-button-desktop"),
].filter(Boolean);

const brandLists = [
  document.getElementById("brand-list-mobile"),
  document.getElementById("brand-list-desktop"),
].filter(Boolean);

const categoryLists = [
  document.getElementById("category-list-mobile"),
  document.getElementById("category-list-desktop"),
].filter(Boolean);

const productGrid = document.getElementById("product-grid");

// Render productos
function renderProductos(lista) {
  productGrid.innerHTML = "";

  if (lista.length === 0) {
    productGrid.innerHTML = `
      <p class="text-gray-500 mt-4">No se encontraron productos que coincidan con tu búsqueda.</p>
    `;
    return;
  }

  lista.forEach((producto) => {
    const card = document.createElement("a");
    card.href = `/detail.html?code=${producto.code}`;
    card.className = "group product-item";
    card.setAttribute("data-marca", producto.brand);
    card.setAttribute("data-group", producto.group);
    card.innerHTML = `
      <img
        src="${producto.image}"
        alt="${producto.name}"
        class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
      />
      <h3 class="mt-4 text-sm text-gray-700">${producto.name}</h3>
      <p class="mt-1 text-sm font-medium text-gray-900">${producto.code}</p>
    `;
    productGrid.appendChild(card);
  });
}

// Inicializar filtros
function initFilters() {
  const marcas = [...new Set(productos.map((p) => p.brand).filter(Boolean))];
  const categorias = [...new Set(productos.map((p) => p.group).filter(Boolean))];

  brandLists.forEach((list) => {
    list.innerHTML = marcas
      .map(
        (brand) => `
        <label class="flex items-center">
          <input type="checkbox" name="brand" value="${brand}" class="mr-2">
          ${brand}
        </label>
      `
      )
      .join("");
  });

  categoryLists.forEach((list) => {
    list.innerHTML = categorias
      .map(
        (cat) => `
        <label class="flex items-center">
          <input type="checkbox" name="category" value="${cat}" class="mr-2">
          ${cat}
        </label>
      `
      )
      .join("");
  });
}

// Filtrar productos
function filtrarProductos() {
  const queries = searchInputs.map((input) => input.value?.toLowerCase() || "");
  const combinedQuery = queries.find((q) => q.trim().length > 0) || "";

  const marcasSeleccionadas = Array.from(
    document.querySelectorAll('input[name="brand"]:checked')
  ).map((cb) => cb.value);

  const categoriasSeleccionadas = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((cb) => cb.value);

  const filtrados = productos.filter((p) => {
    const coincideBusqueda =
      (p.name?.toLowerCase() || "").includes(combinedQuery) ||
      (p.code?.toLowerCase() || "").includes(combinedQuery) ||
      (p.brand?.toLowerCase() || "").includes(combinedQuery) ||
      (p.group?.toLowerCase() || "").includes(combinedQuery);

    const coincideMarca =
      marcasSeleccionadas.length === 0 || marcasSeleccionadas.includes(p.brand);

    const coincideCategoria =
      categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(p.group);

    return coincideBusqueda && coincideMarca && coincideCategoria;
  });

  renderProductos(filtrados);
}

// Eventos búsqueda
searchInputs.forEach((input) => {
  input.addEventListener("input", filtrarProductos);
});

searchButtons.forEach((btn) => {
  btn.addEventListener("click", filtrarProductos);
});

// Eventos filtros
document.addEventListener("change", (e) => {
  if (e.target.name === "brand" || e.target.name === "category") {
    filtrarProductos();

    // Cerrar panel mobile si está visible
    if (!panel?.classList.contains("hidden")) {
      closeBtn?.click();
    }
  }
});

// Off-canvas panel (mobile)
const openBtn = document.getElementById("openFiltersBtn");
const closeBtn = document.getElementById("closeFiltersBtn");
const panel = document.getElementById("filtersPanel");
const content = document.getElementById("filtersContent");

openBtn?.addEventListener("click", () => {
  panel?.classList.remove("hidden");
  setTimeout(() => {
    content?.classList.remove("translate-x-full");
    content?.classList.add("translate-x-0");
  }, 10);
});

closeBtn?.addEventListener("click", () => {
  content?.classList.remove("translate-x-0");
  content?.classList.add("translate-x-full");
  setTimeout(() => {
    panel?.classList.add("hidden");
  }, 300);
});

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  initCollapse();
  renderProductos(productos);
});
