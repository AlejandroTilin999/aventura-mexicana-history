import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

import aventuraFinal from "@/assets/aventura-final.jpg";
import conquista from "@/assets/era-conquista.png";
import independencia from "@/assets/era-independencia.png";
import moderno from "@/assets/era-moderno.png";
import prehispanica from "@/assets/era-prehispanica.png";
import revolucion from "@/assets/era-revolucion.png";
import virreinato from "@/assets/era-virreinato.png";
import personajes from "@/assets/personajes-collage.png";
import xolo from "@/assets/xolo-hero.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "México Increíble | Historia para niñas y niños" },
      { name: "description", content: "Explora seis épocas de la historia de México con Xolo, ilustraciones, personajes y una línea del tiempo interactiva." },
      { property: "og:title", content: "México Increíble | Historia para niñas y niños" },
      { property: "og:description", content: "Una aventura ilustrada por seis épocas de la historia de México." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const eras = [
  { kicker: "Antes de 1521", title: "México antiguo", text: "Ciudades, ciencia y culturas que miraban las estrellas.", image: prehispanica, tone: "bg-era-turquoise" },
  { kicker: "1519–1521", title: "Encuentro y conquista", text: "Dos mundos se encontraron y todo empezó a cambiar.", image: conquista, tone: "bg-era-sky" },
  { kicker: "1521–1786", title: "Virreinato", text: "Resistencias, comunidades y una sociedad hecha de muchas raíces.", image: virreinato, tone: "bg-era-coral" },
  { kicker: "1810–1821", title: "Independencia", text: "Una campana encendió el deseo de ser una nación libre.", image: independencia, tone: "bg-era-yellow" },
  { kicker: "1910–1920", title: "Revolución", text: "Trenes, ideas y personas que lucharon por un país más justo.", image: revolucion, tone: "bg-era-orange" },
  { kicker: "Hoy", title: "México moderno", text: "Tradiciones antiguas conviven con ciencia, arte y tecnología.", image: moderno, tone: "bg-era-lilac" },
];

const moments = [
  ["1325", "Nace México-Tenochtitlan", "En un islote del lago de Texcoco comenzó una de las ciudades más asombrosas del mundo."],
  ["1521", "Una ciudad cambia", "Tenochtitlan cayó y comenzó el periodo virreinal, con encuentros, pérdidas y nuevas mezclas."],
  ["1810", "Suena la campana", "El llamado de Dolores inició un movimiento que transformaría la Nueva España."],
  ["1821", "México es independiente", "Después de once años de lucha, nació un país con enormes retos por delante."],
  ["1910", "Comienza la Revolución", "Personas de muchas regiones exigieron tierra, democracia y mejores condiciones."],
  ["2026", "La historia sigue", "Cada generación escribe una parte nueva. La tuya también cuenta."],
];

const destinos = ["/bloque1", "/bloque2", "/bloque3", "/bloque4", "/bloque5", "/bloque6"] as const;

function Index() {
  const rail = useRef<HTMLDivElement>(null);
  const slide = (direction: number) => rail.current?.scrollBy({ left: direction * 420, behavior: "smooth" });

  return (
    <main id="inicio" className="overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-extrabold" aria-label="México Increíble, inicio">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">MX</span>
          México Increíble
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold md:flex" aria-label="Navegación principal">
          <a className="transition-colors hover:text-primary" href="#epocas">Épocas</a>
          <a className="transition-colors hover:text-primary" href="#personajes">Personajes</a>
          <a className="transition-colors hover:text-primary" href="#tiempo">Línea del tiempo</a>
        </nav>
        <Button asChild size="default"><a href="#epocas">Explorar <ArrowDown className="size-4" /></a></Button>
      </header>

      <section className="mx-auto grid min-h-[calc(100svh-80px)] max-w-[1440px] auto-rows-[138px] grid-cols-2 gap-3 px-5 pb-10 md:auto-rows-[170px] md:grid-cols-6 md:gap-4 md:px-10" aria-labelledby="titulo">
        <div className="relative col-span-2 row-span-3 flex flex-col justify-between overflow-hidden rounded-bento border-2 border-border bg-primary p-6 text-primary-foreground md:col-span-4 md:p-10">
          <span className="w-fit rounded-full bg-primary-foreground px-3 py-1 text-xs font-extrabold uppercase text-primary">Tu pasado es una aventura</span>
          <h1 id="titulo" className="max-w-4xl text-5xl font-extrabold leading-[0.93] md:text-7xl lg:text-8xl">La historia de México no cabe en un libro.</h1>
          <p className="max-w-xl text-base font-semibold text-primary-foreground/80 md:text-xl">Por eso la convertimos en un viaje lleno de preguntas, personajes increíbles y pistas por descubrir.</p>
          <Sparkles className="absolute right-8 top-16 size-14 text-highlight md:size-20" aria-hidden="true" />
        </div>
        <div className="col-span-2 row-span-2 flex items-end justify-center overflow-hidden rounded-bento border-2 border-border bg-hero-soft md:col-span-2">
          <img src={xolo} width={1024} height={1024} alt="Xolo, un ajolote explorador con mapa y mochila" className="h-full w-full object-contain object-bottom" />
        </div>
        <div className="flex flex-col justify-between rounded-bento border-2 border-border bg-highlight p-4 md:p-5"><span className="text-4xl font-extrabold md:text-5xl">500+</span><span className="text-sm font-bold">años conectados</span></div>
        <div className="flex flex-col justify-between rounded-bento border-2 border-border bg-coral p-4 text-coral-foreground md:p-5"><span className="text-4xl font-extrabold md:text-5xl">6</span><span className="text-sm font-bold">épocas para viajar</span></div>
      </section>

      <section id="epocas" className="py-24 md:py-32">
        <div className="mx-auto mb-12 max-w-[1440px] px-5 md:mb-14 md:px-10">
          <div className="flex flex-col gap-6 rounded-bento border-2 border-border bg-background p-6 md:flex-row md:items-center md:justify-between md:gap-10 md:p-8" aria-label="Tu progreso de hoy">
            <div>
              <h2 className="text-2xl font-extrabold md:text-3xl">Tu progreso de hoy</h2>
              <p className="mt-1 text-sm font-bold uppercase text-primary">Has explorado 2 de 6 bloques</p>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex gap-1.5" role="img" aria-label="Semana: 3 de 7 días completados">
                {["L", "M", "X", "J", "V", "S", "D"].map((day, i) => (
                  <span key={day} className={`grid size-9 place-items-center rounded-full text-xs font-extrabold ${i < 3 ? "bg-success text-success-foreground" : "border-2 border-border text-muted-foreground"}`}>{day}</span>
                ))}
              </div>
              <div className="min-w-[220px] flex-1">
                <div className="h-3 w-full overflow-hidden rounded-full bg-muted"><div className="h-full w-1/3 rounded-full bg-success" /></div>
                <p className="mt-2 text-xs font-extrabold text-muted-foreground">33% completado · ¡sigue explorando!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-10 flex max-w-[1440px] items-end justify-between px-5 md:px-10">
          <div><p className="mb-3 text-sm font-extrabold uppercase text-primary">Elige por dónde empezar</p><h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Seis puertas al pasado</h2></div>
          <div className="hidden gap-2 md:flex"><Button variant="icon" size="icon" onClick={() => slide(-1)} aria-label="Ver época anterior"><ArrowLeft /></Button><Button variant="icon" size="icon" onClick={() => slide(1)} aria-label="Ver época siguiente"><ArrowRight /></Button></div>
        </div>
        <div ref={rail} className="era-rail flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.25rem,calc((100vw-1440px)/2+2.5rem))] pb-8">
          {eras.map((era, index) => {
            const card = (
              <>
                <img src={era.image} width={1024} height={768} loading="lazy" alt="" className="h-[58%] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-background p-6"><p className="text-xs font-extrabold uppercase text-primary">{String(index + 1).padStart(2, "0")} · {era.kicker}</p><h3 className="mt-2 text-2xl font-extrabold">{era.title}</h3><p className="mt-2 text-sm font-medium text-muted-foreground">{era.text}</p><p className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold uppercase text-primary">Abrir bloque <ArrowRight className="size-3" /></p></div>
              </>
            );
            const className = `group relative h-[500px] w-[82vw] max-w-[430px] shrink-0 snap-start overflow-hidden rounded-bento border-2 border-border ${era.tone}`;
            const destino = destinos[index];
            if (!destino) return null;
            return <Link key={era.title} to={destino} className={`${className} block`}>{card}</Link>;
          })}
        </div>
      </section>

      <section id="personajes" className="mx-auto grid min-h-[850px] max-w-[1280px] items-center gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
        <div className="relative z-10 md:-mr-24"><p className="mb-4 text-sm font-extrabold uppercase text-coral">Personajes que dejaron huella</p><h2 className="text-5xl font-extrabold leading-[0.98] md:text-7xl">Gente real.<br />Ideas enormes.</h2><p className="mt-6 max-w-md text-lg font-medium text-muted-foreground">Poetas, líderes, artistas y rebeldes. No fueron perfectos: fueron personas que tomaron decisiones difíciles.</p></div>
        <div className="relative min-h-[580px]">
          <div className="absolute inset-6 rotate-2 rounded-bento border-2 border-border bg-cork" />
          <img src={personajes} width={1536} height={1024} loading="lazy" alt="Collage de Sor Juana, Benito Juárez, Frida Kahlo, Miguel Hidalgo y Josefa Ortiz" className="absolute inset-0 h-full w-full -rotate-1 object-contain drop-shadow-collage" />
          <span className="absolute left-[8%] top-[8%] -rotate-6 bg-highlight px-3 py-2 text-sm font-extrabold">Sor Juana</span><span className="absolute right-[7%] top-[12%] rotate-3 bg-coral px-3 py-2 text-sm font-extrabold text-coral-foreground">Benito Juárez</span><span className="absolute bottom-[10%] left-[12%] rotate-6 bg-primary px-3 py-2 text-sm font-extrabold text-primary-foreground">Frida Kahlo</span>
        </div>
      </section>

      <section id="tiempo" className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center"><p className="mb-3 text-sm font-extrabold uppercase text-primary">Una pista lleva a otra</p><h2 className="text-4xl font-extrabold md:text-6xl">El tiempo corre por aquí</h2></div>
        <div className="timeline relative">
          {moments.map(([year, title, text], index) => <article key={year} className={`relative mb-8 grid grid-cols-[46px_1fr] items-start gap-5 md:grid-cols-[1fr_90px_1fr] ${index % 2 ? "md:text-left" : "md:text-right"}`}>
            <div className={`hidden md:block ${index % 2 ? "md:col-start-3" : "md:col-start-1"}`}><p className="text-sm font-extrabold text-primary">{year}</p><h3 className="mt-1 text-2xl font-extrabold">{title}</h3><p className="mt-2 font-medium text-muted-foreground">{text}</p></div>
            <div className="z-10 col-start-1 grid size-11 place-items-center rounded-full border-4 border-background bg-primary text-sm font-extrabold text-primary-foreground md:col-start-2">{index + 1}</div>
            <div className="col-start-2 md:hidden"><p className="text-sm font-extrabold text-primary">{year}</p><h3 className="mt-1 text-xl font-extrabold">{title}</h3><p className="mt-2 text-sm font-medium text-muted-foreground">{text}</p></div>
          </article>)}
        </div>
      </section>

      <section className="relative mx-3 flex min-h-screen items-center justify-center overflow-hidden rounded-bento border-2 border-border md:mx-5">
        <img src={aventuraFinal} width={1920} height={1088} loading="lazy" alt="Xolo recorre un camino por las distintas épocas de México" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-cta-overlay" />
        <div className="relative mx-auto max-w-3xl px-6 text-center"><p className="mb-4 text-sm font-extrabold uppercase text-primary">Tu turno</p><h2 className="text-5xl font-extrabold leading-tight md:text-7xl">¿Qué misterio quieres resolver primero?</h2><Button asChild variant="sunshine" size="lg" className="mt-8"><a href="#epocas">Comenzar la aventura <ArrowRight /></a></Button></div>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-5 py-8 text-sm font-bold md:flex-row md:px-10"><span>MX · México Increíble</span><div className="flex gap-6"><a href="#epocas">Épocas</a><a href="#personajes">Personajes</a><a href="#tiempo">Cronología</a></div><span>Hecho para mentes curiosas</span></footer>
    </main>
  );
}