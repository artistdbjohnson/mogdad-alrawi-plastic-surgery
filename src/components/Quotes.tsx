"use client";
import { useEffect, useState } from "react";
import { REVIEWS, UI } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { T } from "./T";

/** Patient voice card — one exact quote at a time; the reader chooses (no auto-advance). */
export function Quotes() {
  const lang = useLang();
  const [i, setI] = useState(0);
  const [hyd, setHyd] = useState(false);
  useEffect(() => setHyd(true), []);
  const r = REVIEWS[i];
  return (
    <div className="card b-voice rv">
      <div className="k"><T v={UI.voice} /></div>
      <blockquote className="quote" aria-live="polite">“{hyd ? r.q[lang] : <T v={r.q} />}”</blockquote>
      <div className="k" style={{ marginBottom: 0 }}>{hyd ? r.p[lang] : <T v={r.p} />}</div>
      <div className="q-dots" role="group" aria-label={lang === "pt" ? "Avaliações" : "Reviews"}>
        {REVIEWS.map((x, k) => (
          <button key={k} type="button" aria-pressed={k === i} aria-label={`${k + 1} / ${REVIEWS.length} — ${x.p[lang]}`} onClick={() => setI(k)} />
        ))}
      </div>
    </div>
  );
}
