export type Subtema = {
  id: string;
  titulo: string;
  fecha: string;
  acontecimiento: string;
  personajes: string;
  lugar: string;
  explicacion: string;
};

export type Tema = {
  id: string;
  titulo: string;
  descripcion: string;
  subtemas: Subtema[];
};

export const bloque1 = {
  titulo: "Bloque 1: El México Antiguo y los Pueblos Originarios",
  intro:
    "Viaja a los tiempos en que se pintaban cuevas, se fundaban ciudades y se escribía la historia con dibujos.",
  temas: [
    {
      id: "tema-1",
      titulo: "Tema 1 — Las primeras comunidades",
      descripcion:
        "Cómo vivían los antiguos pobladores, sus casas, vestimenta, formas de hablar y la niñez.",
      subtemas: [
        {
          id: "el-openo",
          titulo: "Asentamientos arcaicos en El Opeño",
          fecha: "Hacia 1600 a.C.",
          acontecimiento: "Las tumbas y casas más antiguas del occidente de México",
          personajes: "Familias agricultoras del occidente",
          lugar: "El Opeño, Michoacán",
          explicacion:
            "En El Opeño vivieron familias que ya sembraban maíz y construían tumbas bajo la tierra, con escaleritas para bajar. Dejaban figuritas de barro junto a sus seres queridos porque creían que el viaje después de la vida seguía. Sus casas eran de barro y palos, y los niños ayudaban a cuidar las milpas.",
        },
        {
          id: "pinturas-aguascalientes",
          titulo: "Pinturas rupestres en Aguascalientes",
          fecha: "Hace más de 2,000 años",
          acontecimiento: "Dibujos pintados en rocas y cuevas",
          personajes: "Pueblos cazadores y recolectores del norte",
          lugar: "Cañadas y cerros de Aguascalientes",
          explicacion:
            "Antes de que existieran los cuadernos, la gente pintaba en las rocas con tintes de plantas y minerales. Dibujaban soles, animales y personas para contar lo que veían o para marcar lugares importantes, como dónde había agua. Son como mensajes muy antiguos que todavía podemos mirar.",
        },
        {
          id: "agricolas-occidente",
          titulo: "Comunidades agrícolas en el occidente",
          fecha: "Del 1500 a.C. en adelante",
          acontecimiento: "Nacen las primeras aldeas que viven del campo",
          personajes: "Familias campesinas de Jalisco, Colima y Nayarit",
          lugar: "Occidente de México",
          explicacion:
            "Cuando la gente aprendió a sembrar maíz, frijol y calabaza, dejó de caminar todo el tiempo y construyó aldeas. Guardaban semillas, hacían ollas de barro y celebraban cuando llegaba la lluvia. Así nacieron los pueblos donde todos se conocían y trabajaban juntos.",
        },
        {
          id: "cabezas-olmecas",
          titulo: "Cabezas colosales olmecas",
          fecha: "Entre 1200 y 400 a.C.",
          acontecimiento: "Se esculpen enormes cabezas de piedra",
          personajes: "Escultores olmecas y sus gobernantes",
          lugar: "San Lorenzo y La Venta, costa del Golfo",
          explicacion:
            "Los olmecas tallaron cabezas de piedra tan grandes como un refrigerador y más pesadas que un elefante. Se cree que son retratos de sus gobernantes, cada uno con su casco distinto. Movieron esas piedras kilómetros enteros ¡sin ruedas ni camiones!",
        },
        {
          id: "el-caracol",
          titulo: 'Observatorio "El Caracol"',
          fecha: "Alrededor del año 900 d.C.",
          acontecimiento: "Se construye un edificio para observar el cielo",
          personajes: "Astrónomos mayas de Chichén Itzá",
          lugar: "Chichén Itzá, Yucatán",
          explicacion:
            "El Caracol es una torre redonda con ventanitas colocadas a propósito para mirar el Sol, la Luna y el planeta Venus. Los mayas usaban esas observaciones para saber cuándo sembrar y cuándo hacer fiestas. Era su telescopio hecho de piedra.",
        },
        {
          id: "melipona",
          titulo: "Crianza de la abeja melipona",
          fecha: "Desde tiempos prehispánicos hasta hoy",
          acontecimiento: "Cuidado de una abeja sin aguijón",
          personajes: "Apicultores mayas",
          lugar: "Península de Yucatán",
          explicacion:
            "La melipona es una abeja pequeñita que no pica. Los mayas la cuidaban en troncos huecos y usaban su miel como alimento y como medicina. Todavía hay familias que siguen esa tradición de hace cientos de años.",
        },
      ],
    },
    {
      id: "tema-2",
      titulo: "Tema 2 — Códices y Tlacuilos",
      descripcion:
        "La historia contada a través de pictogramas y los escritores del México antiguo.",
      subtemas: [
        {
          id: "codices-tlacuilos",
          titulo: "Elaboración de códices por los Tlacuilos",
          fecha: "Siglos XIII a XVI",
          acontecimiento: "Se pintan libros plegables con dibujos",
          personajes: "Tlacuilos (pintores-escribanos)",
          lugar: "Ciudades del centro de México",
          explicacion:
            "Los tlacuilos eran artistas que escribían con dibujos. Hacían el papel con corteza de árbol (amate) o piel de venado, lo doblaban como acordeón y pintaban con colores hechos de plantas e insectos. Cada símbolo contaba algo: un año, una batalla, un nombre. Así guardaban la memoria de su pueblo.",
        },
      ],
    },
    {
      id: "tema-3",
      titulo: "Tema 3 — Grandes sucesos y autoridades",
      descripcion: "La fundación de Tenochtitlan y las formas de asignar autoridades.",
      subtemas: [
        {
          id: "tlatoani",
          titulo: "Elección del Tlatoani mexica",
          fecha: "Siglos XIV a XVI",
          acontecimiento: "Se elige al gobernante de los mexicas",
          personajes: "Consejo de nobles y guerreros mexicas",
          lugar: "México-Tenochtitlan",
          explicacion:
            'El tlatoani ("el que habla") no era elegido por votación de todo el pueblo: un consejo de personas sabias y guerreros escogía al mejor entre la familia gobernante. Debía ser valiente, saber hablar bien y conocer las tradiciones.',
        },
        {
          id: "zapoteco",
          titulo: "Autoridades del pueblo Zapoteco",
          fecha: "Desde el año 500 a.C.",
          acontecimiento: "Organización de gobernantes y sacerdotes",
          personajes: "Señores y sacerdotes zapotecos",
          lugar: "Monte Albán y valles de Oaxaca",
          explicacion:
            "En los valles de Oaxaca mandaban señores que vivían en palacios de piedra, acompañados por sacerdotes que leían el calendario. Cada pueblo tenía su jefe, y todos respondían al señor principal de Monte Albán, una ciudad construida sobre un cerro aplanado.",
        },
        {
          id: "ahaw-maya",
          titulo: "Coronación y ritual del Ahaw Maya",
          fecha: "Periodo Clásico, 250 a 900 d.C.",
          acontecimiento: "Ceremonia para nombrar al gobernante maya",
          personajes: "El Ahaw y los sacerdotes mayas",
          lugar: "Ciudades mayas como Palenque y Copán",
          explicacion:
            "El Ahaw era el gobernante maya. En su coronación recibía un tocado de plumas de quetzal, un cetro y un nuevo nombre. La gente creía que él conectaba el mundo de las personas con el de los dioses, por eso la ceremonia duraba varios días con música y ofrendas.",
        },
        {
          id: "tenochtitlan",
          titulo: "Fundación de México-Tenochtitlan",
          fecha: "Año 1325",
          acontecimiento: "Nace la ciudad de los mexicas",
          personajes: "Los mexicas guiados por sus sacerdotes",
          lugar: "Islote del lago de Texcoco",
          explicacion:
            "Después de caminar muchos años, los mexicas vieron la señal que esperaban: un águila parada sobre un nopal. Ahí, en un islote rodeado de agua, fundaron su ciudad. Construyeron chinampas para sembrar sobre el lago y calzadas para llegar a tierra firme.",
        },
        {
          id: "purepecha",
          titulo: "Señorío Tarasco o Purépecha",
          fecha: "Siglos XIV a XVI",
          acontecimiento: "Se forma un reino poderoso en Michoacán",
          personajes: "El Cazonci, gobernante purépecha",
          lugar: "Tzintzuntzan, a orillas del lago de Pátzcuaro",
          explicacion:
            "Los purépechas fueron tan fuertes que los mexicas nunca pudieron conquistarlos. Su gobernante se llamaba Cazonci y vivía en Tzintzuntzan, donde construyeron templos redondos llamados yácatas. Eran expertos trabajando el cobre.",
        },
      ],
    },
  ] as Tema[],
};

export type Pregunta = {
  pregunta: string;
  opciones: string[];
  correcta: number;
};

export const quizBloque1: Pregunta[] = [
  {
    pregunta: "¿Hace cuántos años vivieron las familias en El Opeño?",
    opciones: ["1600 a.C.", "Hace 9,000 años", "1325 d.C."],
    correcta: 1,
  },
  {
    pregunta: "¿Qué sembraban las familias de El Opeño?",
    opciones: ["Maíz", "Trigo", "Arroz"],
    correcta: 0,
  },
  {
    pregunta: "¿Dónde pintaban los pueblos cazadores y recolectores del norte?",
    opciones: ["En rocas y cuevas", "En lienzos de tela", "En papel amate"],
    correcta: 0,
  },
  {
    pregunta: "¿Qué aprendieron a sembrar las comunidades agrícolas del occidente?",
    opciones: ["Maíz, frijol y calabaza", "Uvas y manzanas", "Café y cacao"],
    correcta: 0,
  },
  {
    pregunta: "¿Qué cultura talló las cabezas colosales de piedra?",
    opciones: ["Los olmecas", "Los mayas", "Los zapotecos"],
    correcta: 0,
  },
  {
    pregunta: "¿Cómo se llamaban los artistas que pintaban los códices?",
    opciones: ["Los tlacuilos", "Los tlatoanis", "Los ahaw"],
    correcta: 0,
  },
  {
    pregunta: "¿Quién elegía al Tlatoani mexica?",
    opciones: ["Un consejo de nobles y guerreros", "Todo el pueblo votaba", "Lo heredaba de su padre"],
    correcta: 0,
  },
  {
    pregunta: "¿Dónde vivían los señores zapotecos?",
    opciones: ["En Monte Albán y valles de Oaxaca", "En Chichén Itzá", "En Tenochtitlan"],
    correcta: 0,
  },
  {
    pregunta: "¿Qué recibía el Ahaw maya en su coronación?",
    opciones: [
      "Un tocado de plumas de quetzal, un cetro y un nuevo nombre",
      "Una espada de oro",
      "Una corona de plata",
    ],
    correcta: 0,
  },
  {
    pregunta: "¿Cómo se llamaba el gobernante purépecha?",
    opciones: ["El Cazonci", "El Tlatoani", "El Ahaw"],
    correcta: 0,
  },
];

