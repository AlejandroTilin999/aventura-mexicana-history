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

export const bloque4 = {
  titulo: "Bloque 4: Independencia",
  periodo: "1810–1821",
  intro: "Conoce las conspiraciones, el valor de los insurgentes y el camino que llevó a México a convertirse en una nación libre.",
  temas: [
    {
      id: "tema-1",
      titulo: "Tema 1 — Las conspiraciones y el inicio de la lucha",
      descripcion: "Las reuniones secretas y el levantamiento que encendieron la lucha por la libertad.",
      subtemas: [
        {
          id: "conspiracion-valladolid",
          titulo: "La Conspiración de Valladolid",
          fecha: "1809",
          acontecimiento: "Conspiración criolla contra el poder de la Corona española",
          personajes: "Grupo de criollos insurgentes",
          lugar: "Valladolid (actual Morelia, Michoacán)",
          explicacion: "En el año 1809, un grupo de criollos se reunió en secreto en la ciudad de Valladolid para organizarse contra el gobierno del rey de España. Querían que estas tierras fueran independientes y pudieran gobernarse por sí mismas, preparando el terreno para la gran lucha que estaba por comenzar.",
        },
        {
          id: "inicio-guerra-independencia",
          titulo: "El inicio de la Guerra de Independencia",
          fecha: "1810",
          acontecimiento: "Inicio de la Guerra de Independencia y toma de Valladolid",
          personajes: "El cura Miguel Hidalgo y Costilla (educado en el Colegio de San Nicolás Obispo de Valladolid, considerado el Padre de la Patria e iniciador)",
          lugar: "Dolores y Valladolid",
          explicacion: "En 1810, el cura Miguel Hidalgo comenzó el movimiento armado para liberar al pueblo del dominio español. Marchó con sus tropas insurgentes y logró tomar la ciudad de Valladolid. Por su gran valentía al encabezar este levantamiento, Miguel Hidalgo es recordado y honrado hasta el día de hoy como el \"Padre de la Patria\".",
        },
      ],
    },
    {
      id: "tema-2",
      titulo: "Tema 2 — La organización insurgente y el liderazgo de Morelos",
      descripcion: "Cómo los insurgentes organizaron su gobierno, sus recursos y sus campañas por distintas regiones.",
      subtemas: [
        {
          id: "junta-zitacuaro-monedas",
          titulo: "La Junta de Zitácuaro y las monedas insurgentes",
          fecha: "1811–1813",
          acontecimiento: "Gobierno insurgente de la Junta de Zitácuaro y creación de la moneda nacional insurgente",
          personajes: "La Junta de Zitácuaro y José María Morelos",
          lugar: "Zitácuaro, Chilpancingo, Zongolica y Oaxaca",
          explicacion: "Para organizar a los jefes de la lucha y fabricar sus propios recursos, los insurgentes formaron la Junta de Zitácuaro y comenzaron a fabricar sus propias monedas de plata. Estas monedas llevaban marcas especiales como \"SUD\" o el nombre de Morelos, y se usaban para comprar alimentos y suministros para el ejército insurgente en regiones como Zongolica, Chilpancingo y Oaxaca.",
        },
        {
          id: "campanas-morelos",
          titulo: "Las campañas militares y el recorrido de Morelos",
          fecha: "Durante la Guerra de Independencia (1810–1815)",
          acontecimiento: "Campañas militares insurgentes lideradas por José María Morelos",
          personajes: "José María Morelos y sus tropas",
          lugar: "Charo, Indaparapeo, Nocupétaro, Carácuaro, Huetamo, Villa Madero, Acuitzio del Canje y Tenencia Morelos",
          explicacion: "El líder insurgente José María Morelos recorrió numerosas comunidades al frente de su ejército para defender la causa de la libertad. Pasó por lugares como Indaparapeo, Charo, Carácuaro, Nocupétaro y Huetamo, ganando batallas y transmitiendo la esperanza de un país libre a todas las familias de la región.",
        },
      ],
    },
    {
      id: "tema-3",
      titulo: "Tema 3 — La resistencia y la victoria final",
      descripcion: "La lucha que se mantuvo viva hasta unir fuerzas y alcanzar la Independencia de México.",
      subtemas: [
        {
          id: "resistencia-vicente-guerrero",
          titulo: "La resistencia insurgente de Vicente Guerrero",
          fecha: "Durante la Guerra de Independencia (hacia 1810–1821)",
          acontecimiento: "Lucha armada y resistencia insurgente de las fuerzas afrodescendientes",
          personajes: "Vicente Guerrero (héroe afrodescendiente de la Independencia nacido en Tixtla)",
          lugar: "Las montañas de Tixtla (en el actual estado de Guerrero)",
          explicacion: "Vicente Guerrero fue un valiente líder afrodescendiente que nació en las montañas de Tixtla. Mantuvo viva la mecha de la Independencia en los momentos más difíciles de la guerra, combatiendo desde las montañas hasta convertirse en uno de los principales héroes que lograron la libertad de México.",
        },
        {
          id: "consumacion-independencia",
          titulo: "La consumación de la Independencia",
          fecha: "1821",
          acontecimiento: "Consumación de la Independencia de México",
          personajes: "Vicente Guerrero, Agustín de Iturbide y el ejército insurgente",
          lugar: "México",
          explicacion: "Tras diez largos años de una difícil guerra marcada por el hambre y las carencias, en el año 1821 se alcanzó la victoria. Vicente Guerrero y Agustín de Iturbide unieron sus fuerzas con el Plan de Iguala para lograr que nuestro país fuera finalmente una nación libre y soberana.",
        },
      ],
    },
  ] as Tema[],
};
