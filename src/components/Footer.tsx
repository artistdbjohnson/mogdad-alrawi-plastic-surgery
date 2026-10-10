import Link from "next/link";
import { SITE, UI, LOCATIONS } from "@/lib/content";
import { T } from "./T";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="wordmark"><span className="wm-a">Mogdad Alrawi</span><span className="wm-b">Plastic Surgery</span></div>
            <p className="muted" style={{ marginTop: 22, color: "var(--night-soft)", maxWidth: "34ch" }}>MBChB, FRCSI, MSc, EBOPRAS, FRCS(Plast)</p>
          </div>
          <div><div className="k"><T v={UI.explore} /></div>
            <ul><li><Link href="/about"><T v={UI.aboutUs} /></Link></li><li><Link href="/contact"><T v={UI.contact} /></Link></li><li><Link href="/services"><T v={UI.services} /></Link></li><li><Link href="/appointments"><T v={UI.book} /></Link></li></ul></div>
          <div><div className="k"><T v={UI.where} /></div>
            <ul>{LOCATIONS.map((x) => <li key={x.name}><a href={x.href} target="_blank" rel="noopener">{x.name}</a></li>)}</ul></div>
          <div><div className="k"><T v={UI.followUs} /></div>
            <ul><li><a href={SITE.linkedin} target="_blank" rel="noopener">LinkedIn</a></li><li><a href={SITE.telHref}>{SITE.tel}</a></li><li><a href={`mailto:${SITE.email}`} style={{ overflowWrap: "anywhere" }}>{SITE.email}</a></li></ul></div>
        </div>
        <div className="foot-base">
          <span>© Mogdad Alrawi Plastic Surgery · <T v={UI.notAffiliated} /></span>
          <span><T v={UI.built} /></span>
        </div>
      </div>
    </footer>
  );
}
