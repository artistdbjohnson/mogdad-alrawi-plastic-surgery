"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Reveal-on-scroll. Content is visible by default (no JS ⇒ no hiding); `.js .rv` hides until seen,
 *  with a CSS-only safety net that un-hides after 4s even if this component never mounts. */
export function Motion() {
  const path = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv:not(.in)"));
    if (!els.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((e) => io.observe(e));
    const t = window.setTimeout(() => els.forEach((e) => e.classList.add("in")), 3500);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, [path]);
  return null;
}
