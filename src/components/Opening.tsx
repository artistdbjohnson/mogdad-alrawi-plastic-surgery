"use client";
import Image from "next/image";
import { src } from "@/lib/media";
import { useEffect } from "react";
import { UI } from "@/lib/content";
import { T } from "./T";

/** "Gallery label" open. Hidden unless the head script opts in; pure CSS ends in visibility:hidden, so it can never trap the page. */
export function Opening() {
  useEffect(() => {
    const d = document.documentElement;
    if (!d.classList.contains("lo-on")) return;
    const done = () => d.classList.add("lo-done");
    const t = window.setTimeout(done, 3700);
    const k = () => done();
    window.addEventListener("keydown", k, { once: true });
    return () => { window.clearTimeout(t); window.removeEventListener("keydown", k); };
  }, []);
  return (
    <div className="label-open" aria-hidden="true" onClick={() => document.documentElement.classList.add("lo-done")}>
      <button type="button" className="lo-skip" tabIndex={-1}><T v={UI.skipIntro} /></button>
      <div className="lo-inner">
        <div className="lo-torso"><Image src={src("torso")} alt="" fill sizes="300px" priority style={{ objectFit: "cover" }} /></div>
        <div className="lo-card">
          <div className="lo-name">Mogdad Alrawi</div>
          <p className="lo-small"><T v={UI.label} /></p>
          <p className="lo-small"><T v={UI.labelSub} /></p>
          <p className="lo-small">MBChB · FRCSI · MSc · EBOPRAS · FRCS(Plast)</p>
        </div>
      </div>
    </div>
  );
}
