import { Link } from "@tanstack/react-router";
import { ArrowRight, RotateCcw, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export type Pregunta = {
  pregunta: string;
  opciones: string[];
  correcta: number;
};

type QuizProps = {
  preguntas: Pregunta[];
  tituloFinal: string;
  siguiente?: { to: "/bloque1" | "/bloque2" | "/bloque3" | "/bloque4" | "/bloque5" | "/bloque6"; label: string };
  onCerrar: () => void;
};

export function Quiz({ preguntas, tituloFinal, siguiente, onCerrar }: QuizProps) {
  const [actual, setActual] = useState(0);
  const [seleccion, setSeleccion] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"bien" | "mal" | null>(null);
  const [terminado, setTerminado] = useState(false);
  const [confirmar, setConfirmar] = useState(false);

  const total = preguntas.length;
  const pregunta = preguntas[actual]!;
  const progreso = Math.round(((terminado ? total : actual) / total) * 100);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setConfirmar(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const responder = (index: number) => {
    if (feedback === "bien") return;
    setSeleccion(index);
    if (index === pregunta.correcta) {
      setFeedback("bien");
    } else {
      setFeedback("mal");
    }
  };

  const continuar = () => {
    if (actual + 1 >= total) {
      setTerminado(true);
    } else {
      setActual(actual + 1);
      setSeleccion(null);
      setFeedback(null);
    }
  };

  const repetir = () => {
    setActual(0);
    setSeleccion(null);
    setFeedback(null);
    setTerminado(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quiz"
      className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 p-0 sm:items-center sm:p-6"
    >
      <div className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-bento border-2 border-border bg-background p-6 sm:rounded-bento md:p-8">
        <button
          type="button"
          onClick={() => setConfirmar(true)}
          aria-label="Cerrar quiz"
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border-2 border-border transition-colors hover:bg-muted"
        >
          <X className="size-5" />
        </button>

        {!terminado ? (
          <>
            <p className="pr-12 text-xs font-extrabold uppercase text-primary">
              Pregunta {actual + 1} de {total}
            </p>
            <div className="mt-3 h-3 w-full overflow-hidden rounded-full border-2 border-border bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${Math.max(progreso, 8)}%` }}
              />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold leading-tight md:text-3xl">{pregunta.pregunta}</h2>

            <div className="mt-6 grid gap-3">
              {pregunta.opciones.map((opcion, index) => {
                const esCorrecta = index === pregunta.correcta;
                const marcada = seleccion === index;
                let estilo = "border-border hover:bg-hero-soft";
                if (marcada && feedback === "bien") estilo = "border-success bg-highlight";
                else if (marcada && feedback === "mal") estilo = "border-coral bg-coral/20";
                else if (feedback === "bien" && esCorrecta) estilo = "border-success bg-highlight";
                return (
                  <button
                    key={opcion}
                    type="button"
                    onClick={() => responder(index)}
                    className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left text-base font-bold transition-colors ${estilo}`}
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border-2 border-border bg-background text-sm font-extrabold">
                      {String.fromCharCode(97 + index)}
                    </span>
                    {opcion}
                  </button>
                );
              })}
            </div>

            {feedback === "bien" && (
              <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <p className="text-lg font-extrabold text-primary">¡Muy bien!</p>
                <Button variant="sunshine" size="default" onClick={continuar}>
                  {actual + 1 >= total ? "Ver resultado" : "Siguiente pregunta"} <ArrowRight />
                </Button>
              </div>
            )}
            {feedback === "mal" && (
              <p className="mt-5 text-lg font-extrabold text-coral-foreground">Inténtalo de nuevo</p>
            )}
          </>
        ) : (
          <div className="flex flex-col items-start gap-6 pr-10">
            <p className="text-xs font-extrabold uppercase text-primary">Quiz terminado</p>
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">{tituloFinal}</h2>
            <div className="flex flex-wrap gap-3">
              {siguiente && (
                <Button asChild variant="sunshine" size="lg">
                  <Link to={siguiente.to}>
                    {siguiente.label} <ArrowRight />
                  </Link>
                </Button>
              )}
              <Button variant="outline" size="lg" onClick={repetir}>
                <RotateCcw /> Repetir quiz
              </Button>
            </div>
          </div>
        )}
      </div>

      {confirmar && (
        <div
          role="alertdialog"
          aria-modal="true"
          aria-label="Confirmar salida"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 p-6"
          onClick={() => setConfirmar(false)}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md rounded-bento border-2 border-border bg-background p-6 md:p-8"
          >
            <h3 className="text-2xl font-extrabold leading-tight">¿Seguro que quieres salir?</h3>
            <p className="mt-2 text-base font-medium text-muted-foreground">Perderás tu progreso.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="sunshine" size="default" onClick={onCerrar}>
                Sí, salir
              </Button>
              <Button variant="outline" size="default" onClick={() => setConfirmar(false)}>
                No, continuar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
