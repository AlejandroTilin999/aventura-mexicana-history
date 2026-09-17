import { useCallback, useEffect, useRef, useState } from "react";
import {
  Accessibility,
  Bot,
  Contrast,
  Minus,
  RotateCcw,
  Square,
  Type,
  Volume2,
  X,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Chatbot de los 6 bloques                                            */
/* ------------------------------------------------------------------ */

type ChatMessage = {
  role: "user" | "bot";
  text: string;
  enlace?: { texto: string; to: string; hash?: string };
};

const PREGUNTAS: { id: number; texto: string; respuesta: string; enlace: { to: string; hash?: string } }[] = [
  {
    id: 1,
    texto: "¿Qué es el Bloque 1?",
    respuesta:
      "Bloque 1 — México Antiguo: aquí viven los olmecas, los mayas y los aztecas o mexicas, que construyeron la gran ciudad de Tenochtitlan sobre un lago.",
    enlace: { to: "/bloque1" },
  },
  {
    id: 2,
    texto: "¿Qué es el Bloque 2?",
    respuesta:
      "Bloque 2 — Conquista y Virreinato: en 1519 llegaron los españoles y en 1521 cayó Tenochtitlan. Después vinieron casi 300 años de vida colonial.",
    enlace: { to: "/", hash: "epocas" },
  },
  {
    id: 3,
    texto: "¿Qué es el Bloque 3?",
    respuesta:
      "Bloque 3 — Independencia: el 16 de septiembre de 1810 el padre Hidalgo tocó la campana de Dolores. En 1821 México logró ser independiente.",
    enlace: { to: "/", hash: "epocas" },
  },
  {
    id: 4,
    texto: "¿Qué es el Bloque 4?",
    respuesta:
      "Bloque 4 — Reforma: Benito Juárez impulsó leyes para un México más justo. En esa época ocurrió la Batalla de Puebla del 5 de mayo de 1862.",
    enlace: { to: "/", hash: "epocas" },
  },
  {
    id: 5,
    texto: "¿Qué es el Bloque 5?",
    respuesta:
      "Bloque 5 — Porfiriato y Revolución: tras el largo gobierno de Porfirio Díaz, en 1910 comenzó la Revolución con Madero, Zapata y Villa.",
    enlace: { to: "/", hash: "epocas" },
  },
  {
    id: 6,
    texto: "¿Qué es el Bloque 6?",
    respuesta:
      "Bloque 6 — México Contemporáneo: el México de los siglos XX y XXI, con sus grandes ciudades, su arte y tradiciones vivas como el Día de Muertos.",
    enlace: { to: "/", hash: "epocas" },
  },
];

const SALUDO =
  "¡Hola! Soy el guía de México Increíble. Elige una pregunta y te cuento de qué trata cada bloque:";

function Chatbot() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<ChatMessage[]>([{ role: "bot", text: SALUDO }]);
  const listaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (abierto) listaRef.current?.scrollTo({ top: listaRef.current.scrollHeight });
  }, [abierto, mensajes]);

  const preguntar = (p: (typeof PREGUNTAS)[number]) => {
    setMensajes((m) => [
      ...m,
      { role: "user", text: p.texto },
      { role: "bot", text: p.respuesta, enlace: { texto: "Ir al bloque →", ...p.enlace } },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {abierto && (
        <div
          role="dialog"
          aria-label="Chatbot de historia de México"
          className="flex w-[min(92vw,340px)] flex-col overflow-hidden rounded-bento border border-border bg-background shadow-xl"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Bot className="h-4 w-4" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-tight">Guía de historia</p>
              <p className="text-xs text-muted-foreground">Los 6 bloques de México</p>
            </div>
            <Button variant="icon" size="icon" aria-label="Cerrar chat" onClick={() => setAbierto(false)}>
              <X className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <div ref={listaRef} className="flex h-72 flex-col gap-2 overflow-y-auto px-3 py-3">
            {mensajes.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-snug",
                  m.role === "user"
                    ? "self-end bg-primary text-primary-foreground"
                    : "self-start text-foreground",
                )}
              >
                <p>{m.text}</p>
                {m.enlace && (
                  <Link
                    to={m.enlace.to}
                    hash={m.enlace.hash}
                    onClick={() => setAbierto(false)}
                    className="mt-1 inline-block font-semibold text-primary underline underline-offset-2"
                  >
                    {m.enlace.texto}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-border p-3">
            {PREGUNTAS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => preguntar(p)}
                className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {p.texto}
              </button>
            ))}
          </div>
        </div>
      )}
      <Button
        variant="primary"
        size="icon"
        aria-label={abierto ? "Cerrar chatbot" : "Abrir chatbot de historia"}
        aria-expanded={abierto}
        onClick={() => setAbierto((v) => !v)}
        className="h-14 w-14 rounded-full shadow-lg"
      >
        <Bot className="h-6 w-6" aria-hidden />
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Panel de accesibilidad                                              */
/* ------------------------------------------------------------------ */

type A11yState = {
  contraste: boolean;
  textoGrande: boolean;
  movimientoReducido: boolean;
};

const A11Y_INICIAL: A11yState = { contraste: false, textoGrande: false, movimientoReducido: false };

const SELECTOR_LEIBLE = "h1, h2, h3, h4, p, li, summary, [data-readable]";

function Accesibilidad() {
  const [abierto, setAbierto] = useState(false);
  const [estado, setEstado] = useState<A11yState>(A11Y_INICIAL);
  const [lectorActivo, setLectorActivo] = useState(false);
  const [leyendo, setLeyendo] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("a11y-contrast", estado.contraste);
    html.classList.toggle("a11y-large-text", estado.textoGrande);
    html.classList.toggle("a11y-reduced-motion", estado.movimientoReducido);
  }, [estado]);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const alternar = (clave: keyof A11yState) => setEstado((e) => ({ ...e, [clave]: !e[clave] }));

  const detener = useCallback(() => {
    window.speechSynthesis?.cancel();
    setLeyendo(false);
  }, []);

  const hablar = useCallback((el: Element) => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const texto = el.textContent?.replace(/\s+/g, " ").trim() ?? "";
    if (!texto) return;
    synth.cancel();
    const voz = new SpeechSynthesisUtterance(texto.slice(0, 2000));
    voz.lang = "es-MX";
    voz.onend = () => setLeyendo(false);
    synth.speak(voz);
    setLeyendo(true);
  }, []);

  // Lector por elemento: resalta al pasar el cursor y lee al hacer clic o enfocar.
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("a11y-reader", lectorActivo);
    if (!lectorActivo) {
      detener();
      return;
    }

    const alHacerClic = (e: MouseEvent) => {
      const objetivo = (e.target as Element | null)?.closest(SELECTOR_LEIBLE);
      if (!objetivo || !objetivo.closest("main")) return;
      // Mientras el lector está activo, leer en lugar de navegar/abrir.
      e.preventDefault();
      e.stopPropagation();
      hablar(objetivo);
    };

    const alEnfocar = (e: FocusEvent) => {
      const objetivo = (e.target as Element | null)?.closest(SELECTOR_LEIBLE);
      if (!objetivo || !objetivo.closest("main")) return;
      hablar(objetivo);
    };

    document.addEventListener("click", alHacerClic, true);
    document.addEventListener("focusin", alEnfocar);
    return () => {
      html.classList.remove("a11y-reader");
      document.removeEventListener("click", alHacerClic, true);
      document.removeEventListener("focusin", alEnfocar);
      detener();
    };
  }, [lectorActivo, hablar, detener]);

  const restablecer = () => {
    setEstado(A11Y_INICIAL);
    setLectorActivo(false);
    detener();
  };

  const opciones: {
    clave: keyof A11yState;
    icono: typeof Contrast;
    etiqueta: string;
    descripcion: string;
  }[] = [
    { clave: "contraste", icono: Contrast, etiqueta: "Contraste alto", descripcion: "Colores más marcados" },
    { clave: "textoGrande", icono: Type, etiqueta: "Texto más grande", descripcion: "Aumenta 20%" },
    { clave: "movimientoReducido", icono: Minus, etiqueta: "Reducir movimiento", descripcion: "Sin animaciones" },
  ];

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      {leyendo && (
        <button
          type="button"
          onClick={detener}
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg"
        >
          <Square className="h-4 w-4" aria-hidden />
          Detener
        </button>
      )}
      {abierto && (
        <div
          role="dialog"
          aria-label="Panel de accesibilidad"
          className="w-[min(92vw,300px)] overflow-hidden rounded-bento border border-border bg-background shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-sm font-bold">Accesibilidad</p>
            <Button variant="icon" size="icon" aria-label="Cerrar panel de accesibilidad" onClick={() => setAbierto(false)}>
              <X className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <div className="flex flex-col gap-1 p-2">
            {opciones.map(({ clave, icono: Icono, etiqueta, descripcion }) => (
              <button
                key={clave}
                type="button"
                role="switch"
                aria-checked={estado[clave]}
                onClick={() => alternar(clave)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                  estado[clave] ? "bg-primary/10" : "hover:bg-muted",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    estado[clave] ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                  )}
                >
                  <Icono className="h-4 w-4" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-tight">{etiqueta}</span>
                  <span className="block text-xs text-muted-foreground">{descripcion}</span>
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "h-5 w-9 shrink-0 rounded-full p-0.5 transition-colors",
                    estado[clave] ? "bg-primary" : "bg-muted-foreground/30",
                  )}
                >
                  <span
                    className={cn(
                      "block h-4 w-4 rounded-full bg-background transition-transform",
                      estado[clave] && "translate-x-4",
                    )}
                  />
                </span>
              </button>
            ))}
            <button
              type="button"
              role="switch"
              aria-checked={lectorActivo}
              onClick={() => setLectorActivo((v) => !v)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                lectorActivo ? "bg-primary/10" : "hover:bg-muted",
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  lectorActivo ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                )}
              >
                <Volume2 className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold leading-tight">Lector de voz</span>
                <span className="block text-xs text-muted-foreground">
                  Haz clic en un texto y lo lee
                </span>
              </span>
              <span
                aria-hidden
                className={cn(
                  "h-5 w-9 shrink-0 rounded-full p-0.5 transition-colors",
                  lectorActivo ? "bg-primary" : "bg-muted-foreground/30",
                )}
              >
                <span
                  className={cn(
                    "block h-4 w-4 rounded-full bg-background transition-transform",
                    lectorActivo && "translate-x-4",
                  )}
                />
              </span>
            </button>
            <button
              type="button"
              onClick={restablecer}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                <RotateCcw className="h-4 w-4" aria-hidden />
              </span>
              <span className="block text-sm font-semibold leading-tight">Restablecer</span>
            </button>
          </div>
        </div>
      )}
      <Button
        variant="outline"
        size="icon"
        aria-label={abierto ? "Cerrar opciones de accesibilidad" : "Abrir opciones de accesibilidad"}
        aria-expanded={abierto}
        onClick={() => setAbierto((v) => !v)}
        className="h-14 w-14 rounded-full border-2 bg-background shadow-lg"
      >
        <Accessibility className="h-6 w-6" aria-hidden />
      </Button>
    </div>
  );
}

export function FloatingWidgets() {
  return (
    <>
      <Accesibilidad />
      <Chatbot />
    </>
  );
}
