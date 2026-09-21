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

export const bloque3 = {
  titulo: "Bloque 3: El Virreinato",
  periodo: "1521–1786",
  intro:
    "Durante casi tres siglos, la Nueva España vivió resistencias, nuevas comunidades, intercambios culturales y grandes cambios en su territorio.",
  temas: [
    {
      id: "tema-1",
      titulo: "Tema 1 — La violencia de la invasión y la resistencia indígena",
      descripcion:
        "Los abusos de los conquistadores y la valentía de los pueblos que defendieron su libertad.",
      subtemas: [
        {
          id: "invasion-nuno-guzman-resistencia-tenamaxtle",
          titulo: "Invasión de Nuño Beltrán de Guzmán y la resistencia de Francisco de Tenamaxtle",
          fecha: "1530",
          acontecimiento:
            "Invasión violenta de Michoacán y rebelión defensiva liderada por Francisco de Tenamaxtle",
          personajes:
            "Nuño Beltrán de Guzmán, tropas españolas y Francisco de Tenamaxtle (líder indígena cazcán de Nochistlán)",
          lugar: "Michoacán y la región Cazcána (Nochistlán)",
          explicacion:
            "Aunque el rey purépecha se había rendido en paz, en el año 1530 la tranquilidad se rompió cuando el conquistador Nuño Beltrán de Guzmán invadió la región de Michoacán. Nuño de Guzmán y su ejército saquearon los pueblos con gran violencia, robando bienes y esclavizando a más de 4,500 personas para hacerlas trabajar a la fuerza. Ante estos terribles abusos, surgió la resistencia de líderes indígenas como Francisco de Tenamaxtle, señor cazcán de Nochistlán. Tenamaxtle y sus guerreros se enfrentaron con valentía a las tropas españolas en la llamada Guerra del Mixtón para poner fin a la explotación y defender la libertad de su pueblo.",
        },
      ],
    },
    {
      id: "tema-2",
      titulo: "Tema 2 — La organización social y la labor comunitaria de la Iglesia",
      descripcion:
        "Comunidades protegidas, centros de enseñanza y el encuentro de raíces indígenas, europeas y africanas.",
      subtemas: [
        {
          id: "hospital-santa-fe-colegio-san-nicolas",
          titulo: "Fundación del Hospital de Santa Fe y el Colegio de San Nicolás por \"Tata Vasco\"",
          fecha: "1533 (Fundación del Hospital) y 1540 (Fundación del Colegio)",
          acontecimiento:
            "Creación de los pueblos-hospitales y centros de enseñanza para los pueblos originarios",
          personajes:
            "Vasco de Quiroga (conocido cariñosamente como \"Tata Vasco\") y los frailes evangelizadores",
          lugar: "Santa Fe de la Laguna y Pátzcuaro, Michoacán",
          explicacion:
            "Para atender a la población indígena que sufría por los abusos y despojos de la conquista, llegaron frailes y curas que buscaron organizar la vida comunitaria. Uno de los personajes más importantes fue Vasco de Quiroga, a quien los habitantes llamaban con afecto \"Tata Vasco\". En 1533, Vasco de Quiroga fundó el Hospital de Santa Fe de la Laguna, y en 1540 creó el Colegio de San Nicolás Obispo en Pátzcuaro. Alrededor de estos hospitales, la población indígena se organizó en comunidades protegidas donde aprendían oficios artesanales como la alfarería, el trabajo en madera y la cobrería.",
        },
        {
          id: "mestizaje-afrodescendientes",
          titulo: "El mestizaje y la integración de la población afrodescendiente",
          fecha: "Durante los tres siglos del Virreinato (siglos XVI al XVIII)",
          acontecimiento:
            "Conformación de la sociedad novohispana y aportes de la cultura africana",
          personajes:
            "Los pueblos originarios, los colonizadores españoles y las personas de origen africano",
          lugar: "Minas, haciendas agrícolas y ciudades de la Nueva España",
          explicacion:
            "Con la llegada de los españoles, también se trajo a la fuerza a miles de personas de origen africano para trabajar en las minas, el campo y las ciudades. La convivencia diaria entre los pueblos originarios, los españoles y las poblaciones africanas dio origen al mestizaje y a una enorme variedad étnica y cultural. Las personas afrodescendientes compartieron sus costumbres, tradiciones, música, bailes y saberes, los cuales se mezclaron con las raíces indígenas y europeas para formar el rico mosaico cultural que hoy nos identifica como país.",
        },
      ],
    },
    {
      id: "tema-3",
      titulo: "Tema 3 — La economía, el comercio y la salud en la vida cotidiana virreinal",
      descripcion:
        "Las monedas que cambiaron el comercio y los retos que enfrentó la población ante el hambre y las enfermedades.",
      subtemas: [
        {
          id: "monedas-macuquinas",
          titulo: "Las primeras monedas metálicas: las macuquinas",
          fecha: "Época colonial (siglos XVII y XVIII, como 1671, 1729 y 1756)",
          acontecimiento:
            "Fabricación de monedas de plata y oro en la Casa de Moneda de México",
          personajes:
            "Comerciantes novohispanos, artesanos y reyes españoles (como Carlos II, Felipe V y Carlos III)",
          lugar: "La Casa de Moneda de México y los mercados de la Nueva España",
          explicacion:
            "Durante el periodo del Virreinato, el comercio cambió gracias a la introducción de las monedas metálicas fabricadas por la Casa de Moneda de México. Las primeras monedas de plata y oro, llamadas macuquinas, se elaboraban de forma artesanal a golpe de martillo, por lo que tenían formas y bordes irregulares. Más adelante se utilizaron las monedas de busto, en las que se grababa la imagen de los reyes de España. Con estas monedas se reemplazó el antiguo trueque con granos de cacao o mantas, permitiendo a la gente comprar alimentos, ropa y herramientas en los tianguis novohispanos.",
        },
        {
          id: "epidemias-hambruna-vacuna",
          titulo: "Epidemias, crisis de alimentos y la llegada de la vacuna contra la viruela",
          fecha: "1694 (Hambruna y epidemia) y finales del siglo XVIII (Llegada de la vacuna)",
          acontecimiento:
            "La epidemia de tifo por escasez de lluvia y la primera campaña de vacunación infantil contra la viruela",
          personajes:
            "Población novohispana, el doctor Edward Jenner y los expedicionarios de la vacuna",
          lugar: "Valladolid (hoy Morelia) y provincias de la Nueva España",
          explicacion:
            "Durante la época virreinal, las familias enfrentaron graves problemas provocados por fenómenos naturales y enfermedades contagiosas. En el año 1694, la falta de lluvias provocó una escasez de alimentos que derivó en una terrible hambruna y una epidemia de tifo. Tiempo después, para combatir la viruela (una enfermedad peligrosa que afectaba a muchos niños), se trajo a México la vacuna descubierta por el doctor Edward Jenner. Como no existían los refrigeradores, la vacuna viajaba viva de brazo en brazo en niños pequeños que cruzaron el océano en barco para salvar la vida de miles de personas.",
        },
      ],
    },
    {
      id: "tema-5",
      titulo: "Tema 5 — La organización del territorio novohispano",
      descripcion:
        "La nueva división territorial que buscó organizar el gobierno, los impuestos y los caminos.",
      subtemas: [
        {
          id: "intendencia-valladolid",
          titulo: "Creación de la Intendencia de Valladolid",
          fecha: "1786",
          acontecimiento:
            "Reorganización territorial de la Nueva España en Intendencias",
          personajes: "Autoridades de la Corona Española y gobernantes locales",
          lugar: "Intendencia de Valladolid (actual estado de Michoacán)",
          explicacion:
            "En el año 1786, el gobierno español decidió reorganizar la administración del territorio colonial dividiendo el país en grandes regiones llamadas Intendencias. En esa fecha se estableció la Intendencia de Valladolid, la cual abarcaba casi en su totalidad el territorio de lo que hoy es el estado de Michoacán. Esta nueva división sirvió para controlar de manera más ordenada el cobro de impuestos, la justicia en los tribunales y la seguridad en los caminos poco antes de que iniciara la Guerra de Independencia.",
        },
      ],
    },
  ] as Tema[],
};

export const quizBloque3 = [
  {
    pregunta: "¿En qué año invadió Nuño Beltrán de Guzmán la región de Michoacán?",
    opciones: ["1521", "1530", "1810"],
    correcta: 1,
  },
  {
    pregunta: "¿Quién lideró la resistencia indígena contra Nuño de Guzmán?",
    opciones: ["Francisco de Tenamaxtle", "Hernán Cortés", "Vasco de Quiroga"],
    correcta: 0,
  },
  {
    pregunta: "¿Cómo llamaban cariñosamente a Vasco de Quiroga?",
    opciones: ["Tata Vasco", "El Irecha", "El Virrey"],
    correcta: 0,
  },
  {
    pregunta: "¿Qué fundó Vasco de Quiroga en 1533?",
    opciones: ["El Hospital de Santa Fe", "La Casa de Moneda", "La Intendencia de Valladolid"],
    correcta: 0,
  },
  {
    pregunta: "¿Qué monedas se fabricaban a golpe de martillo en la época colonial?",
    opciones: ["Las macuquinas", "Los pesos de oro", "Las monedas de busto"],
    correcta: 0,
  },
  {
    pregunta: "¿Qué enfermedad combatió la vacuna que llegó a México en el siglo XVIII?",
    opciones: ["La viruela", "El tifo", "La gripe"],
    correcta: 0,
  },
  {
    pregunta: "¿En qué año se creó la Intendencia de Valladolid?",
    opciones: ["1521", "1694", "1786"],
    correcta: 2,
  },
];
