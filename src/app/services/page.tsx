import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES_PAGE, SERVICES, LOCATIONS, UI } from "@/lib/content";
import { T } from "@/components/T";
import { Plate } from "@/components/Plate";

export const metadata: Metadata = { title: "Services" };
export default function Services() {
  return (
    <>
      <section className="wrap page-head">
        <div className="k rv"><T v={SERVICES_PAGE.kicker} /></div>
        <h1 className="rv" style={{ marginTop: 20 }}>Mogdad Alrawi Plastic Surgery</h1>
        <div className="two-col" style={{ marginTop: 48 }}>
          <p className="k rv" style={{ color: "var(--ink)" }}><T v={SERVICES_PAGE.choose} /></p>
          <p className="lead rv"><T v={SERVICES_PAGE.p} /></p>
        </div>
      </section>
      <Plate id="implant" alt={{ en: "Surgeon's gloved hands holding a breast implant", pt: "Mãos enluvadas do cirurgião a segurar um implante mamário" }} ratio="21 / 9" sizes="100vw" pos="50% 45%" />
      <section className="wrap sec" aria-labelledby="our">
        <h2 id="our" className="rv" style={{ marginBottom: 40 }}><T v={{ en: "Our Services", pt: "Os nossos serviços" }} /></h2>
        <div className="svc">
          {SERVICES.map((g, i) => (
            <div className="svc-row rv" id={g.id} key={g.id}>
              <div className="svc-n">{String(i + 1).padStart(2, "0")}</div>
              <h3><T v={g.name} /></h3>
              <ul>{g.items.map((it, k) => <li key={k}><T v={it} /></li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section className="band" aria-labelledby="bk">
        <Plate id="tyne-night" alt={{ en: "The Tyne Bridge at night", pt: "A Tyne Bridge à noite" }} ratio="2400 / 994" sizes="100vw" rv={false} />
        <div className="band-copy"><div className="wrap">
          <div className="k" style={{ color: "var(--night-soft)" }}>{LOCATIONS.map((x) => x.name).join(" · ")}</div>
          <h2 id="bk" style={{ margin: "14px 0 26px", maxWidth: "16ch" }}><T v={SERVICES_PAGE.bookH} /></h2>
          <Link className="btn" href="/appointments" style={{ background: "var(--night-ink)", color: "var(--night)" }}><T v={UI.book} /></Link>
        </div></div>
      </section>
    </>
  );
}
