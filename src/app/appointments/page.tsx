import type { Metadata } from "next";
import { APPT, SITE } from "@/lib/content";
import { T } from "@/components/T";
import { Plate } from "@/components/Plate";

export const metadata: Metadata = { title: "Appointments" };
export default function Appointments() {
  return (
    <>
      <section className="wrap page-head">
        <h1 className="rv"><T v={APPT.h1a} /><br /><T v={APPT.h1b} /></h1>
      </section>
      <section className="wrap" style={{ paddingBottom: "clamp(64px,9vh,120px)" }}>
        <div className="hours rv">
          <div>
            <h3><T v={APPT.freeH} /></h3>
            <ul>{APPT.free.map((x, i) => <li key={i}><T v={x} /></li>)}</ul>
          </div>
          <div>
            <h3><T v={APPT.f2fH} /></h3>
            <p className="muted" style={{ margin: 0 }}>{APPT.f2fAt.join(" · ")}</p>
            <ul>{APPT.f2f.map((x, i) => <li key={i}><T v={x} /></li>)}</ul>
          </div>
        </div>
        <div className="dl rv" style={{ marginTop: 56 }}>
          <div className="k"><T v={APPT.telephone} /></div>
          <a href={SITE.telHref}>{SITE.tel}</a>
          <div className="k" style={{ marginTop: 10 }}>Email</div>
          <a href={`mailto:${SITE.email}`} style={{ overflowWrap: "anywhere" }}>{SITE.email}</a>
        </div>
      </section>
      <Plate id="quay-day" alt={{ en: "Newcastle Quayside and the Tyne bridges", pt: "Cais de Newcastle e as pontes do Tyne" }} ratio="21 / 9" sizes="100vw" />
    </>
  );
}
