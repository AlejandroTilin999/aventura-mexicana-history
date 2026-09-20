import { createFileRoute } from "@tanstack/react-router";

import { BlockPage } from "@/components/blocks/BlockPage";
import { bloque6 } from "@/data/bloque6";

export const Route = createFileRoute("/bloque6")({
  head: () => ({
    meta: [
      { title: "Bloque 6: México Moderno | México Increíble" },
      { name: "description", content: "Explora el campo, la tecnología, los derechos y la diversidad cultural del México moderno." },
      { property: "og:title", content: "Bloque 6: Hoy – México Moderno" },
      { property: "og:description", content: "Cinco historias sobre los cambios y la diversidad del México de hoy." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Bloque6Page,
});

function Bloque6Page() {
  return <BlockPage numero={6} periodo={bloque6.periodo} nombre="Hoy – México Moderno" intro={bloque6.intro} temas={bloque6.temas} />;
}
