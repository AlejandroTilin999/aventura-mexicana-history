import { createFileRoute } from "@tanstack/react-router";

import { BlockPage } from "@/components/blocks/BlockPage";
import { bloque5 } from "@/data/bloque5";

export const Route = createFileRoute("/bloque5")({
  head: () => ({
    meta: [
      { title: "Bloque 5: Porfiriato y Revolución | México Increíble" },
      { name: "description", content: "Conoce el Porfiriato, el inicio de la Revolución Mexicana y la Constitución de 1917." },
      { property: "og:title", content: "Bloque 5: El Porfiriato y la Revolución Mexicana" },
      { property: "og:description", content: "Tres historias sobre la modernización, la Revolución y la Constitución de 1917." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Bloque5Page,
});

function Bloque5Page() {
  return <BlockPage numero={5} periodo={bloque5.periodo} nombre="El Porfiriato y la Revolución Mexicana" intro={bloque5.intro} temas={bloque5.temas} siguiente="/bloque6" />;
}
