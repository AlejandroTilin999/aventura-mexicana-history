import { Link } from "@tanstack/react-router";
import { ArrowRight, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const [aciertos, setAciertos] = useState(0);
  const temporizador = useRef<number | null>(null);

  const total = preguntas.length;
  const pregunta = preguntas[actual]!;
  const progreso = Math.round(((terminado ? total : actual) / total) * 100);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setConfirmar(true);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (temporizador.current !== null) window.clearTimeout(temporizador.current);
    };
  }, []);

  const avanzar = (acierto: boolean) => {
    const nuevosAciertos = aciertos + (acierto ? 1 : 0);
    if (acierto) setAciertos(nuevosAciertos);
    if (actual + 1 >= total) {
      setTerminado(true);
    } else {
      setActual(actual + 1);
      setSeleccion(null);
      setFeedback(null);
    }
  };

  const responder = (index: number) => {
    if (feedback !== null) return; // una sola oportunidad por pregunta
    setSeleccion(index);
    const acierto = index === pregunta.correcta;
    setFeedback(acierto ? "bien" : "mal");
    temporizador.current = window.setTimeout(
      () => avanzar(acierto),
      acierto ? 1000 : 1500,
    );
  };

  const repetir = () => {
    if (temporizador.current !== null) window.clearTimeout(temporizador.current);
    setActual(0);
    setSeleccion(null);
    setFeedback(null);
    setTerminado(false);
    setAciertos(0);
  };

  const porcentaje = total > 0 ? (aciertos / total) * 100 : 0;
  const aprobado = porcentaje >= 70;

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
                const marcada = seleccion === index;
                let estilo = "border-border hover:bg-hero-soft";
                if (marcada && feedback === "bien") estilo = "border-success bg-highlight";
                else if (marcada && feedback === "mal") estilo = "border-coral bg-coral/20";
                return (
                  <button
                    key={opcion}
                    type="button"
                    onClick={() => responder(index)}
                    disabled={feedback !== null}
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
              <p className="mt-5 text-lg font-extrabold text-primary">¡Muy bien!</p>
            )}
            {feedback === "mal" && (
              <p className="mt-5 text-lg font-extrabold text-coral-foreground">Inténtalo de nuevo</p>
            )}
          </>
        ) : (
          <div className="flex flex-col items-start gap-6 pr-10">
            <p className="text-xs font-extrabold uppercase text-primary">Quiz terminado</p>
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              {aprobado ? tituloFinal : "¡Casi lo logras! Inténtalo de nuevo"}
            </h2>
            <p className="text-lg font-bold text-muted-foreground">
              Acertaste {aciertos} de {total}
            </p>
            <div className="flex flex-wrap gap-3">
              {aprobado && siguiente && (
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
