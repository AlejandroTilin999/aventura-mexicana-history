import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Minus, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";

import { bloque3, type Subtema } from "@/data/bloque3";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/bloque3")({
  head: () => ({
    meta: [
      { title: "Bloque 3: El Virreinato | México Increíble" },
      {
        name: "description",
        content:
          "Descubre la resistencia indígena, las comunidades, la economía, la salud y el territorio de la Nueva España, explicado para niñas y niños.",
      },
      { property: "og:title", content: "Bloque 3: El Virreinato" },
      {
        property: "og:description",
        content: "Seis historias del Virreinato explicadas para niñas y niños de 8 años.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Bloque3Page,
});

const tonos = ["bg-highlight", "bg-coral text-coral-foreground", "bg-era-turquoise"];

function Bloque3Page() {
  const [abierto, setAbierto] = useState<string | null>(bloque3.temas[0]?.id ?? null);
  const [detalle, setDetalle] = useState<Subtema | null>(null);

  useEffect(() => {
    if (!detalle) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDetalle(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detalle]);

  return (
    <main className="bg-background text-foreground">
      <header className="mx-auto flex max-w-[1100px] flex-col gap-6 px-5 py-10 md:px-10 md:py-16">
        <Button asChild variant="outline" size="default" className="w-fit">
          <Link to="/">
            <ArrowLeft className="size-4" /> Volver
          </Link>
        </Button>
        <p className="text-sm font-extrabold uppercase text-primary">
          Bloque 3 · {bloque3.periodo}
        </p>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[0.98] md:text-6xl">
          El Virreinato
        </h1>
        <p className="max-w-2xl text-lg font-medium text-muted-foreground">{bloque3.intro}</p>
      </header>

      <section className="mx-auto flex max-w-[1100px] flex-col gap-6 px-5 pb-16 md:px-10">
        {bloque3.temas.map((tema, i) => {
          const open = abierto === tema.id;
          return (
            <article key={tema.id} className="overflow-hidden rounded-bento border-2 border-border">
              <button
                type="button"
                onClick={() => setAbierto(open ? null : tema.id)}
                aria-expanded={open}
                className={`flex w-full items-start justify-between gap-6 p-6 text-left md:p-8 ${tonos[i]}`}
              >
                <span>
                  <span className="block text-2xl font-extrabold md:text-3xl">{tema.titulo}</span>
                  <span className="mt-2 block max-w-2xl text-sm font-semibold opacity-80 md:text-base">
                    {tema.descripcion}
                  </span>
                  <span className="mt-3 block text-xs font-extrabold uppercase">
                    {tema.subtemas.length} {tema.subtemas.length === 1 ? "subtema" : "subtemas"}
                  </span>
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-border bg-background text-foreground">
                  {open ? <Minus className="size-5" /> : <Plus className="size-5" />}
                </span>
              </button>

              {open && (
                <div className="grid gap-4 bg-background p-5 sm:grid-cols-2 md:p-8">
                  {tema.subtemas.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setDetalle(sub)}
                      className="group flex flex-col gap-2 rounded-2xl border-2 border-border p-5 text-left transition-colors hover:bg-hero-soft"
                    >
                      <span className="text-xs font-extrabold uppercase text-primary">{sub.fecha}</span>
                      <span className="text-lg font-extrabold leading-tight">{sub.titulo}</span>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-extrabold uppercase text-muted-foreground group-hover:text-primary">
                        Leer más <ArrowRight className="size-3" />
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </section>

      <section className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-5 border-t-2 border-border px-5 py-10 md:flex-row md:items-center md:px-10">
        <p className="text-lg font-extrabold">¿Listo para seguir el viaje?</p>
        <Button asChild variant="sunshine" size="lg">
          <Link to="/" hash="epocas">
            Siguiente bloque <ArrowRight />
          </Link>
        </Button>
      </section>

      {detalle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={detalle.titulo}
          className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 p-0 sm:items-center sm:p-6"
          onClick={() => setDetalle(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-bento border-2 border-border bg-background p-6 sm:rounded-bento md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase text-primary">{detalle.fecha}</p>
                <h2 className="mt-2 text-3xl font-extrabold leading-tight">{detalle.titulo}</h2>
              </div>
              <button
                type="button"
                onClick={() => setDetalle(null)}
                aria-label="Cerrar"
                className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-border transition-colors hover:bg-muted"
              >
                <X className="size-5" />
              </button>
            </div>

            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Acontecimiento", detalle.acontecimiento],
                ["Personajes", detalle.personajes],
                ["Lugar", detalle.lugar],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border-2 border-border p-4">
                  <dt className="text-xs font-extrabold uppercase text-muted-foreground">{label}</dt>
                  <dd className="mt-1 text-sm font-bold">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              {detalle.explicacion}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
