import Link from "next/link";
import { HOME, UI, LOCATIONS, SERVICES, TIMELINE, SITE } from "@/lib/content";
import { T } from "@/components/T";
import { Plate } from "@/components/Plate";
import { Quotes } from "@/components/Quotes";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import { src } from "@/lib/media";

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-grid">
          <div>
            <div className="k rv"><T v={UI.label} /></div>
            <h1 className="rv" style={{ marginTop: 22 }}><T v={HOME.h1} /></h1>
            <div className="hero-meta rv">
              <span className="muted">Royal Victoria Infirmary · Cobalt Hospital · TSS Independent House</span>
              <span className="muted">Newcastle upon Tyne · Gateshead</span>
            </div>
            <div className="hero-cta rv">
              <Link className="btn" href="/appointments"><T v={UI.book} /></Link>
              <Link className="btn btn-line" href="/services"><T v={HOME.ourServices} /></Link>
            </div>
          </div>
          <Plate id="torso" alt={{ en: "Classical marble torso on black", pt: "Torso clássico em mármore sobre fundo negro" }} ratio="557 / 807" sizes="(max-width: 900px) 80vw, 30vw" priority className="hero-art" fit="contain" />
        </div>
      </section>

      <section className="wrap">
        <div className="stmt">
          <h2 className="rv"><T v={HOME.discover} /></h2>
          <div className="rv">
            <p className="lead"><T v={HOME.discoverP} /></p>
            <Link className="arrow" href="/services"><T v={UI.learn} /> <i>→</i></Link>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(84px,12vh,168px)" }} aria-label="Mr Mogdad Alrawi">
        <div className="bento">
          <div className="card card-night b-bg rv">
            <div className="card-media"><Image src={src("tyne-night")} alt="" fill sizes="(max-width: 1100px) 100vw, 36vw" style={{ objectFit: "cover", objectPosition: "38% 50%" }} /></div>
            <div className="k"><T v={UI.background} /></div>
            <dl className="tline">
              {TIMELINE.map((x) => (<div key={x.y} style={{ display: "contents" }}><dt>{x.y}</dt><dd><T v={x.t} /></dd></div>))}
            </dl>
          </div>
          <Quotes />
          <div className="card card-night b-where rv" style={{ background: "var(--paper-2)", color: "var(--ink)" }}>
            <div className="k"><T v={UI.where} /></div>
            <ul className="where-list">
              {LOCATIONS.map((x) => (<li key={x.name}><a href={x.href} target="_blank" rel="noopener"><span>{x.name}</span><small>{x.sub}</small><i aria-hidden="true">↗</i></a></li>))}
            </ul>
            <div className="consult">
              <div className="k" style={{ marginBottom: 8, color: "var(--muted)" }}><T v={UI.consult} /></div>
              <p style={{ margin: 0 }}><T v={{ en: "Thursday & Friday · 17:30 – 20:00", pt: "Quinta e sexta · 17:30 – 20:00" }} /></p>
              <a className="arrow" href={SITE.telHref}>{SITE.tel} <i>→</i></a>
            </div>
          </div>
          <figure className="card b-portrait rv">
            <Image src={src("surgeon")} alt="Mr Mogdad Alrawi" fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 30vw" style={{ objectFit: "cover", objectPosition: "60% 25%" }} />
            <figcaption><div style={{ fontFamily: "var(--font-display-stack)", fontSize: "1.5rem", lineHeight: 1.1 }}>Mr Mogdad Alrawi</div><div className="k" style={{ margin: "6px 0 0", color: "var(--night-soft)" }}>FRCS(Plast) · GMC 6063454</div></figcaption>
          </figure>
        </div>
      </section>

      <section className="band" aria-labelledby="explore">
        <Plate id="quay-day" alt={{ en: "Newcastle Quayside and the Tyne bridges", pt: "Cais de Newcastle e as pontes do Tyne" }} ratio="21 / 9" sizes="100vw" rv={false} />
        <div className="band-copy"><div className="wrap">
          <h2 id="explore" style={{ maxWidth: "14ch" }}><T v={HOME.explore} /></h2>
          <p className="lead" style={{ marginTop: 18 }}><T v={HOME.exploreP} /></p>
        </div></div>
      </section>

      <section className="wrap sec" aria-labelledby="svc">
        <div className="stmt" style={{ borderTop: 0, paddingTop: 0 }}>
          <h2 id="svc" className="rv"><T v={HOME.ourServices} /></h2>
          <div className="rv"><Plate id="implant" alt={{ en: "Surgeon's gloved hands holding a breast implant", pt: "Mãos enluvadas do cirurgião a segurar um implante mamário" }} ratio="16 / 10" rv={false} /></div>
        </div>
        <div className="svc">
          {SERVICES.map((g, i) => (
            <div className="svc-row rv" key={g.id}>
              <div className="svc-n">{String(i + 1).padStart(2, "0")}</div>
              <h3><Link href={`/services#${g.id}`}><T v={g.name} /></Link></h3>
              <ul>{g.items.map((it, k) => <li key={k}><T v={it} /></li>)}</ul>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 32 }}><Link className="arrow" href="/services"><T v={UI.viewServices} /> <i>→</i></Link></p>
      </section>

      <section className="wrap sec" id="contact" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="contact-grid">
          <div className="rv">
            <h2><T v={HOME.contactH} /></h2>
            <p className="lead" style={{ marginTop: 24 }}><T v={HOME.contactP} /></p>
            <div className="dl" style={{ marginTop: 40 }}>
              <a href={SITE.telHref}>{SITE.tel}</a>
              <a href={`mailto:${SITE.email}`} style={{ overflowWrap: "anywhere" }}>{SITE.email}</a>
            </div>
          </div>
          <div className="rv"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
