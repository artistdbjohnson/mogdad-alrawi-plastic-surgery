"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE, UI } from "@/lib/content";
import { T } from "./T";
import { setLang, useLang } from "@/lib/lang";

export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="Mogdad Alrawi Plastic Surgery">
      <span className="wm-a">Mogdad Alrawi</span>
      <span className="wm-b">Plastic Surgery</span>
    </Link>
  );
}

function LangToggle() {
  const lang = useLang();
  return (
    <div className="seg" role="group" aria-label="Language / Idioma">
      <button type="button" lang="en" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
      <span aria-hidden="true">|</span>
      <button type="button" lang="pt-PT" aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>PT</button>
    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => { setTheme((document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light"); }, []);
  const lang = useLang();
  const label = lang === "pt" ? (theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro") : (theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  return (
    <button type="button" className="icon-btn" aria-label={label} title={label} onClick={() => {
      const next = theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("ma-theme", next); } catch {}
      setTheme(next);
    }}>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4">
        {theme === "dark" ? <><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" strokeLinecap="round" /></> : <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" strokeLinejoin="round" />}
      </svg>
    </button>
  );
}

const LINKS = [
  { href: "/services", v: UI.services },
  { href: "/about", v: UI.about },
  { href: "/contact", v: UI.contact },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.body.style.overflow = "hidden"; window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [open]);
  return (
    <>
      <a className="skip" href="#main"><T v={UI.skip} /></a>
      <header className="site-header">
        <div className="nav-row">
          <Wordmark />
          <nav className="top-nav" aria-label="Primary">
            {LINKS.map((x) => <Link key={x.href} href={x.href} aria-current={path === x.href ? "page" : undefined}><T v={x.v} /></Link>)}
          </nav>
          <div className="nav-tools">
            <LangToggle />
            <ThemeToggle />
            <Link className="btn btn-sm nav-book" href="/appointments"><T v={UI.book} /></Link>
            <button type="button" className="icon-btn menu-btn" aria-expanded={open} aria-controls="sheet" onClick={() => setOpen(true)}>
              <span className="sr-only"><T v={UI.menu} /></span>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" stroke="currentColor" strokeWidth="1.4"><path d="M3 8h18M3 16h18" /></svg>
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div className="sheet" id="sheet" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="sheet-top">
            <Wordmark />
            <button type="button" className="icon-btn" onClick={() => setOpen(false)}>
              <span className="sr-only"><T v={UI.close} /></span>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" stroke="currentColor" strokeWidth="1.4"><path d="M5 5l14 14M19 5 5 19" /></svg>
            </button>
          </div>
          <nav aria-label="Mobile">
            <Link href="/"><T v={UI.home} /></Link>
            {LINKS.map((x) => <Link key={x.href} href={x.href}><T v={x.v} /></Link>)}
            <Link href="/appointments"><T v={UI.book} /></Link>
          </nav>
          <div className="sheet-foot">
            <a href={SITE.telHref}>{SITE.tel}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 10 }}><LangToggle /><ThemeToggle /></div>
          </div>
        </div>
      ) : null}
    </>
  );
}
