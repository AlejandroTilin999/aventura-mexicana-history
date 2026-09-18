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

export const bloque2 = {
  titulo: "Bloque 2: La Conquista y el Virreinato",
  periodo: "1519–1786",
  intro:
    "Dos mundos se encontraron y todo empezó a cambiar: ciudades nuevas, caminos nuevos y una historia que se volvió mezcla.",
  temas: [
    {
      id: "tema-1",
      titulo: "Tema 1 — El encuentro de dos mundos y la caída de Tenochtitlan",
      descripcion:
        "Cómo terminó el mundo mexica y cómo empezó una época completamente nueva para estos territorios.",
      subtemas: [
        {
          id: "caida-tenochtitlan-purepecha",
          titulo: "La caída de México-Tenochtitlan y la subordinación del Señorío Purépecha",
          fecha: "1521",
          acontecimiento:
            "Caída de México-Tenochtitlan y subordinación del Señorío Purépecha",
          personajes:
            "Hernán Cortés, los conquistadores españoles, los guerreros mexicas y el Irecha o Cazonci (máximo gobernante purépecha)",
          lugar: "México-Tenochtitlan y el Señorío Purépecha (Michoacán)",
          explicacion:
            "En el año 1521 ocurrió uno de los momentos que transformaron para siempre la historia de nuestro país. Los conquistadores españoles, acompañados por soldados que exploraban estas tierras, llegaron al centro de México. Tras varios enfrentamientos en el lago y en las calles de la gran ciudad, el Señorío Mexica fue derrotado en 1521. Al enterarse de la caída de Tenochtitlan, el Irecha (el rey supremo de los purépechas) decidió evitar la destrucción de sus pueblos y ofreció subordinarse pacíficamente a Hernán Cortés. Este acontecimiento marcó el fin del periodo prehispánico y dio inicio a la época del Virreinato.",
        },
      ],
    },
  ] as Tema[],
};
