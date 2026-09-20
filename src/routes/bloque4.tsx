import { createFileRoute } from "@tanstack/react-router";

import { BlockPage } from "@/components/blocks/BlockPage";
import { bloque4 } from "@/data/bloque4";

export const Route = createFileRoute("/bloque4")({
  head: () => ({
    meta: [
      { title: "Bloque 4: Independencia | México Increíble" },
      { name: "description", content: "Descubre las conspiraciones, los líderes insurgentes y la consumación de la Independencia de México." },
      { property: "og:title", content: "Bloque 4: Independencia" },
      { property: "og:description", content: "Seis historias de la Independencia explicadas para niñas y niños." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Bloque4Page,
});

function Bloque4Page() {
  return <BlockPage numero={4} periodo={bloque4.periodo} nombre="Independencia" intro={bloque4.intro} temas={bloque4.temas} siguiente="/bloque5" />;
}
