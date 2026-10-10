"use client";
import { useSyncExternalStore } from "react";
import type { L } from "./content";

export type Lang = "en" | "pt";
const EVT = "ma-lang";

function read(): Lang {
  if (typeof document === "undefined") return "en";
  return document.documentElement.lang.toLowerCase().startsWith("pt") ? "pt" : "en";
}
function subscribe(cb: () => void) {
  window.addEventListener(EVT, cb);
  return () => window.removeEventListener(EVT, cb);
}
export function useLang(): Lang {
  return useSyncExternalStore(subscribe, read, () => "en" as Lang);
}
export function setLang(l: Lang) {
  try { localStorage.setItem("ma-lang", l); } catch {}
  document.documentElement.lang = l === "pt" ? "pt-PT" : "en-GB";
  window.dispatchEvent(new Event(EVT));
}
export function tr(v: L, l: Lang) { return v[l]; }
