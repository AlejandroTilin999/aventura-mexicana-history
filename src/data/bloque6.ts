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

export const bloque6 = {
  titulo: "Bloque 6: Hoy – México Moderno",
  periodo: "Siglos XX y XXI",
  intro: "Explora cómo cambiaron el campo, las ciudades, los trabajos, la comunicación y los derechos en el México actual.",
  temas: [
    {
      id: "tema-1",
      titulo: "Tema 1 — Transformación del campo, las grandes obras y fenómenos naturales del siglo XX",
      descripcion: "El reparto de tierras, las grandes construcciones y un volcán que nació frente a los ojos de una comunidad.",
      subtemas: [
        {
          id: "reformas-campo-infraestructura",
          titulo: "Las reformas del campo y las grandes obras de infraestructura",
          fecha: "Décadas de 1920 a 1980",
          acontecimiento: "Reparto de tierras ejidales, construcción de presas e industrialización",
          personajes: "Lázaro Cárdenas y las familias campesinas",
          lugar: "Michoacán y diversas regiones de México",
          explicacion: "Tras el movimiento revolucionario, líderes como Lázaro Cárdenas impulsaron cambios importantes en el país y en las regiones, promoviendo el reparto de tierras en ejidos para las familias campesinas. Con el paso de los años se construyeron grandes obras de infraestructura, como la presa El Infiernillo, la siderúrgica y el puerto industrial Lázaro Cárdenas. Estas obras permitieron generar energía, transportar mercancías y desarrollar nuevas formas de trabajo.",
        },
        {
          id: "volcan-paricutin",
          titulo: "El nacimiento del volcán Paricutín",
          fecha: "20 de febrero de 1943",
          acontecimiento: "Erupción y surgimiento del volcán Paricutín",
          personajes: "Habitantes de las comunidades locales y científicos",
          lugar: "Paricutín y San Juan Parangaricutiro, Michoacán",
          explicacion: "En el año 1943 ocurrió un suceso natural sorprendente cuando nació el volcán Paricutín en medio del campo. La lava del volcán se extendió lentamente hasta rodear y cubrir pueblos enteros como San Juan Parangaricutiro, dejando únicamente visible la parte superior de su iglesia. Este acontecimiento transformó el paisaje de la zona y obligó a las personas a mudarse a una nueva localidad, dejando un registro científico único de cómo nace un volcán.",
        },
      ],
    },
    {
      id: "tema-2",
      titulo: "Tema 2 — Evolución de los trabajos, las comunicaciones y los transportes",
      descripcion: "Los oficios y las maneras de comunicarnos cambiaron con la electricidad y las tecnologías digitales.",
      subtemas: [
        {
          id: "oficios-comunicacion-digital",
          titulo: "Transformación de los oficios y la llegada de la comunicación digital",
          fecha: "Siglo XX al siglo XXI",
          acontecimiento: "Evolución de los trabajos tradicionales y avance de las tecnologías de información",
          personajes: "Escribanos, faroleros, afiladores, zapateros, organilleros y la población contemporánea",
          lugar: "Pueblos y ciudades de la República Mexicana",
          explicacion: "Con el desarrollo de la tecnología, las herramientas y la electricidad, muchos trabajos de la antigüedad se transformaron o desaparecieron, como los escribanos, soldadores de cubetas y los encendedores de faroles. Al mismo tiempo, oficios artesanales como los afiladores, zapateros y organilleros se han mantenido para conservar las tradiciones. Además, la forma de comunicarnos evolucionó desde el envío de cartas en papel y el telégrafo hasta el teléfono celular, el correo electrónico y los mensajes instantáneos que permiten platicar al momento.",
        },
      ],
    },
    {
      id: "tema-3",
      titulo: "Tema 3 — Derechos humanos, igualdad y la nación pluricultural",
      descripcion: "El reconocimiento de los derechos, la igualdad y la diversidad que forman la identidad de México.",
      subtemas: [
        {
          id: "igualdad-derechos-ninez",
          titulo: "La igualdad de género y la protección de los derechos de la niñez",
          fecha: "Época contemporánea",
          acontecimiento: "Reconocimiento de los derechos de las mujeres y de las niñas, niños y adolescentes",
          personajes: "Susana Guízar, Dolores del Río, María Félix, Frida Kahlo, así como niñas y niños del país",
          lugar: "México",
          explicacion: "Durante el siglo XX, figuras públicas como Susana Guízar, Dolores del Río, María Félix y Frida Kahlo impulsaron una revolución hacia la igualdad entre hombres y mujeres al romper estereotipos de la época. De igual forma, las leyes de México reconocieron los derechos humanos fundamentales de las niñas, niños y adolescentes, garantizando su dignidad, libertad, educación, salud y protección contra la violencia y la discriminación.",
        },
        {
          id: "mexico-pluricultural",
          titulo: "México como nación pluricultural y la conservación de la identidad",
          fecha: "Época actual",
          acontecimiento: "Reconocimiento constitucional de la pluriculturalidad y los pueblos originarios",
          personajes: "Pueblos originarios (mayas, purépechas, mexicas, zapotecos, entre otros), comunidades afromexicanas y población en general",
          lugar: "Todo el territorio mexicano",
          explicacion: "En el Artículo 2º de la Constitución se establece que México es una nación pluricultural sustentada originalmente en sus pueblos indígenas. Las familias conservan vivas las costumbres, tradiciones, vestimentas, lenguas maternas, alimentos de origen prehispánico (como el maíz, frijol y chile) y símbolos patrios que nos dan sentido de pertenencia e identidad ante el mundo.",
        },
      ],
    },
  ] as Tema[],
};
