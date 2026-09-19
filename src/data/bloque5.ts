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

export const bloque5 = {
  titulo: "Bloque 5: El Porfiriato y la Revolución Mexicana",
  periodo: "1910–1920",
  intro: "Descubre los avances y desigualdades del Porfiriato, el inicio de la Revolución y las leyes que transformaron al país.",
  temas: [
    {
      id: "tema-1",
      titulo: "Tema 1 — El Porfiriato y la modernización de los transportes y comunicaciones",
      descripcion: "Nuevas tecnologías conectaron al país, aunque la mayoría de las familias vivía grandes dificultades.",
      subtemas: [
        {
          id: "inicio-porfiriato-tecnologias",
          titulo: "Inicio del Porfiriato y la llegada de nuevas tecnologías",
          fecha: "1876 (Inicio del Porfiriato) y periodo de 1870 a 1891",
          acontecimiento: "Inicio del Porfiriato y la modernización de las vías de comunicación",
          personajes: "Porfirio Díaz (inicio del periodo del Porfiriato) y la población mexicana",
          lugar: "México y la región de Michoacán (Morelia, Celaya, Cuitzeo, Zamora y Jacona)",
          explicacion: "En el año 1876 comenzó el periodo conocido como el Porfiriato. Durante estos años, el país vivió una gran modernización en los transportes y las comunicaciones. Entre 1870 y 1891 llegaron inventos muy novedosos, como las primeras líneas del telégrafo, las rutas de tranvías, las líneas de teléfono y el ferrocarril. El tren ayudó a conectar pueblos y ciudades muy lejanas en menos tiempo. Sin embargo, aunque hubo muchos avances tecnológicos, la vida para la mayoría del pueblo continuaba siendo muy difícil y de gran explotación.",
        },
      ],
    },
    {
      id: "tema-2",
      titulo: "Tema 2 — El estallido de la Revolución Mexicana y la vida cotidiana",
      descripcion: "Campesinos, trabajadores y soldaderas lucharon para terminar con las injusticias y transformar México.",
      subtemas: [
        {
          id: "inicio-revolucion-mexicana",
          titulo: "El inicio del conflicto armado de la Revolución Mexicana",
          fecha: "1910",
          acontecimiento: "Inicio de la Revolución Mexicana y movimiento de justicia social",
          personajes: "Francisco I. Madero (iniciador con el Plan de San Luis y el lema \"Sufragio Efectivo, No Reelección\"), Emiliano Zapata, Pancho Villa, las soldaderas, los soldados federales, el fotógrafo Hugo Brehme y el grabador José Guadalupe Posada",
          lugar: "México (ciudades, valles, campos de batalla y vías del ferrocarril)",
          explicacion: "En el año 1910 comenzó la Revolución Mexicana, un movimiento armado que nació con muchas esperanzas de cambiar al país para acabar con las injusticias y la explotación del pueblo. Francisco I. Madero fue quien inició la lucha con su lema \"Sufragio Efectivo, No Reelección\", pidiendo que el pueblo pudiera elegir a sus gobernantes. En este conflicto lucharon campesinos, trabajadores y valientes mujeres conocidas como soldaderas. Durante los años de guerra, el comercio y el trabajo en el campo se paralizaron, provocando duros momentos y pérdidas humanas. Artistas como José Guadalupe Posada crearon grabados famosos como las calaveras Maderistas y Zapatistas, mientras que fotógrafos como Hugo Brehme retrataron en sus imágenes la vida diaria de los soldados, los trenes llenos de gente y a líderes como Emiliano Zapata y Pancho Villa.",
        },
      ],
    },
    {
      id: "tema-3",
      titulo: "Tema 3 — Las leyes y la Constitución de 1917",
      descripcion: "Las demandas de la Revolución se convirtieron en derechos para el pueblo, los trabajadores y el campo.",
      subtemas: [
        {
          id: "constitucion-1917",
          titulo: "Promulgación de la Constitución de 1917",
          fecha: "1917",
          acontecimiento: "Promulgación de la Constitución Política de los Estados Unidos Mexicanos",
          personajes: "Venustiano Carranza y los diputados constituyentes",
          lugar: "México",
          explicacion: "Como fruto de las luchas y demandas del pueblo durante la Revolución Mexicana, en el año 1917 el líder Venustiano Carranza promulgó la Constitución de 1917. Esta importante ley o Carta Magna se escribió para garantizar la justicia social, defender los derechos del pueblo, de los trabajadores, del campo y de la niñez, asegurando que las mexicanas y los mexicanos pudieran vivir en un país más libre, ordenado e igualitario.",
        },
      ],
    },
  ] as Tema[],
};
