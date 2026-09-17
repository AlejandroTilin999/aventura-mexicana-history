import { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  Bot,
  Contrast,
  Minus,
  RotateCcw,
  Send,
  Type,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Chatbot de los 6 bloques                                            */
/* ------------------------------------------------------------------ */

type ChatMessage = { role: "user" | "bot"; text: string };

const BLOQUES: { match: RegExp; titulo: string; respuesta: string }[] = [
  {
    match: /antiguo|olmeca|maya|azteca|mexica|tenochtitlan|pir[aá]mide|prehisp/i,
    titulo: "México Antiguo",
    respuesta:
      "Bloque 1 — México Antiguo: aquí viven los olmecas (los primeros, famosos por sus cabezas gigantes de piedra), los mayas (grandes astrónomos y matemáticos) y los aztecas o mexicas, que construyeron la ciudad de Tenochtitlan sobre un lago. ¿Quieres saber de otra época?",
  },
  {
    match: /conquista|virreinato|español|colonia|h[eé]rn[aá]n|cort[eé]s|1519|1521/i,
    titulo: "Conquista y Virreinato",
    respuesta:
      "Bloque 2 — Conquista y Virreinato: en 1519 llegaron los españoles y en 1521 cayó Tenochtitlan. Después vinieron casi 300 años de vida colonial: nuevas ciudades, comidas y costumbres mezcladas. ¿Exploramos otro bloque?",
  },
  {
    match: /independencia|dolores|hidalgo|morelos|1810|1821|grito|campana/i,
    titulo: "Independencia",
    respuesta:
      "Bloque 3 — Independencia: el 16 de septiembre de 1810 el padre Miguel Hidalgo tocó la campana de Dolores y llamó a la lucha. Después siguió José María Morelos, hasta que en 1821 México logró ser independiente. ¿Cuál otro bloque te interesa?",
  },
  {
    match: /reforma|ju[aá]rez|puebla|5 de mayo|zaragoza|leyes/i,
    titulo: "Reforma",
    respuesta:
      "Bloque 4 — Reforma: Benito Juárez impulsó leyes para un México más justo. En esa época ocurrió la Batalla de Puebla del 5 de mayo de 1862, cuando el ejército mexicano venció al francés. ¿Seguimos con otro bloque?",
  },
  {
    match: /porfirio|revoluci[oó]n|madero|zapata|villa|1910|tren|d[ií]az/i,
    titulo: "Porfiriato y Revolución",
    respuesta:
      "Bloque 5 — Porfiriato y Revolución: después del largo gobierno de Porfirio Díaz, en 1910 comenzó la Revolución con Francisco I. Madero, Emiliano Zapata y Pancho Villa, que pedían tierra y justicia. ¿Qué otro bloque visitamos?",
  },
  {
    match: /contempor|moderno|actual|hoy|siglo xx|siglo xxi|tradicion|2026/i,
    titulo: "México Contemporáneo",
    respuesta:
      "Bloque 6 — México Contemporáneo: el México de los siglos XX y XXI, con sus grandes ciudades, su arte, sus fiestas y tradiciones vivas como el Día de Muertos. ¡La historia sigue escribiéndose!",
  },
];

const FUERA_DE_TEMA =
  "Solo puedo hablar de los 6 bloques de historia de México. ¿Cuál te interesa?";

const SALUDO =
  "¡Hola! Soy el guía de México Increíble. Puedo contarte de 6 bloques: México Antiguo, Conquista y Virreinato, Independencia, Reforma, Porfiriato y Revolución, y México Contemporáneo. ¿Por cuál empezamos?";

function responder(pregunta: string): string {
  if (/^hola|^buenas|^hi\b|qué tal|que tal/i.test(pregunta.trim())) return SALUDO;
  const bloque = BLOQUES.find((b) => b.match.test(pregunta));
  return bloque ? bloque.respuesta : FUERA_DE_TEMA;
}

function Chatbot() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<ChatMessage[]>([
    { role: "bot", text: SALUDO },
  ]);
  const [entrada, setEntrada] = useState("");
  const listaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (abierto) {
      listaRef.current?.scrollTo({ top: listaRef.current.scrollHeight });
      inputRef.current?.focus();
    }
  }, [abierto, mensajes]);

  const enviar = () => {
    const texto = entrada.trim();
    if (!texto) return;
    setMensajes((m) => [...m, { role: "user", text: texto }, { role: "bot", text: responder(texto) }]);
    setEntrada("");
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
              <p
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-snug",
                  m.role === "user"
                    ? "self-end bg-primary text-primary-foreground"
                    : "self-start text-foreground",
                )}
              >
                {m.text}
              </p>
            ))}
          </div>
          <form
            className="flex items-center gap-2 border-t border-border p-2"
            onSubmit={(e) => {
              e.preventDefault();
              enviar();
            }}
          >
            <input
              ref={inputRef}
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
              placeholder="Pregunta por un bloque…"
              aria-label="Escribe tu pregunta sobre historia de México"
              className="min-w-0 flex-1 rounded-full border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <Button type="submit" variant="primary" size="icon" aria-label="Enviar mensaje">
              <Send className="h-4 w-4" aria-hidden />
            </Button>
          </form>
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

function Accesibilidad() {
  const [abierto, setAbierto] = useState(false);
  const [estado, setEstado] = useState<A11yState>(A11Y_INICIAL);
  const [leyendo, setLeyendo] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("a11y-contrast", estado.contraste);
    html.classList.toggle("a11y-large-text", estado.textoGrande);
    html.classList.toggle("a11y-reduced-motion", estado.movimientoReducido);
  }, [estado]);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const alternar = (clave: keyof A11yState) => setEstado((e) => ({ ...e, [clave]: !e[clave] }));

  const leerPagina = () => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (leyendo) {
      synth.cancel();
      setLeyendo(false);
      return;
    }
    const texto = document.querySelector("main")?.textContent?.replace(/\s+/g, " ").trim() ?? "";
    if (!texto) return;
    const voz = new SpeechSynthesisUtterance(texto.slice(0, 4000));
    voz.lang = "es-MX";
    voz.onend = () => setLeyendo(false);
    synth.cancel();
    synth.speak(voz);
    setLeyendo(true);
  };

  const restablecer = () => {
    setEstado(A11Y_INICIAL);
    window.speechSynthesis?.cancel();
    setLeyendo(false);
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
              onClick={leerPagina}
              aria-pressed={leyendo}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                leyendo ? "bg-primary/10" : "hover:bg-muted",
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  leyendo ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                )}
              >
                <Volume2 className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold leading-tight">
                  {leyendo ? "Detener lectura" : "Lector de voz"}
                </span>
                <span className="block text-xs text-muted-foreground">Lee la página en voz alta</span>
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
        {abierto ? <Zap className="h-6 w-6" aria-hidden /> : <Accessibility className="h-6 w-6" aria-hidden />}
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
