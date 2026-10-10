import Link from "next/link";
import type { Metadata } from "next";
import { ABOUT, HOSPITAL_LINKS, ADDITIONAL_LINKS, REVIEWS, SITE, UI } from "@/lib/content";
import { T } from "@/components/T";
import { Plate } from "@/components/Plate";

export const metadata: Metadata = { title: "About" };
const Ext = ({ list }: { list: { name: string; href: string }[] }) => (
  <ul className="links">{list.map((x) => <li key={x.name}><a href={x.href} target="_blank" rel="noopener"><span>{x.name}</span><i aria-hidden="true">↗</i></a></li>)}</ul>
);
export default function About() {
  return (
    <>
      <section className="wrap page-head">
        <h1 className="rv"><T v={ABOUT.h1} /></h1>
        <div className="two-col" style={{ marginTop: 48 }}>
          <div />
          <div className="rv"><p className="lead"><T v={ABOUT.p1} /></p><p><T v={ABOUT.p2} /></p></div>
        </div>
      </section>
      <section className="wrap" style={{ paddingBottom: "clamp(84px,12vh,168px)" }}>
        <div className="two-col">
          <aside>
            <Plate id="surgeon" alt={{ en: "Mr Mogdad Alrawi, Consultant Plastic Surgeon", pt: "Sr. Mogdad Alrawi, Cirurgião Plástico Consultor" }} ratio="4 / 5" pos="62% 30%" sizes="(max-width: 960px) 100vw, 34vw" caption={<T v={UI.label} />} />
            <div style={{ marginTop: 48 }}>
              <div className="k" style={{ marginBottom: 10 }}><T v={ABOUT.hospitalLinks} /></div>
              <Ext list={HOSPITAL_LINKS} />
              <div className="k" style={{ marginBottom: 10 }}><T v={ABOUT.additional} /></div>
              <Ext list={ADDITIONAL_LINKS} />
            </div>
          </aside>
          <div className="prose rv">
            <div className="k"><T v={ABOUT.aboutDr} /></div>
            <h2 style={{ margin: "14px 0 40px" }}>Mr Mogdad Alrawi</h2>
            <h3><T v={ABOUT.nhsH} /></h3><p><T v={ABOUT.nhs} /></p>
            <h3><T v={ABOUT.cosH} /></h3><p><T v={ABOUT.cos} /></p>
            <h3><T v={ABOUT.trainH} /></h3><p><T v={ABOUT.train} /></p>
            <h3><T v={ABOUT.qualH} /></h3><p>{ABOUT.qual}</p>
            <h3><T v={ABOUT.memH} /></h3>
            <ul className="mem">{ABOUT.mem.map((m, i) => <li key={i}><T v={m} /></li>)}</ul>
          </div>
        </div>
      </section>
      <section className="wrap sec" style={{ borderTop: "1px solid var(--line)" }} aria-labelledby="cl">
        <h2 id="cl" className="rv" style={{ marginBottom: 44 }}><T v={ABOUT.clients} /></h2>
        <div className="reviews">
          {REVIEWS.map((r, i) => (<figure key={i} className="rv"><blockquote>“<T v={r.q} />”</blockquote><figcaption className="k"><T v={r.p} /></figcaption></figure>))}
        </div>
        <p style={{ marginTop: 28 }}><a className="arrow" href={SITE.reviews} target="_blank" rel="noopener"><T v={UI.moreReviews} /> <i>↗</i></a></p>
      </section>
      <section className="band">
        <Plate id="millennium-night" alt={{ en: "Gateshead Millennium Bridge lit at night", pt: "Gateshead Millennium Bridge iluminada à noite" }} ratio="21 / 9" pos="50% 62%" sizes="100vw" rv={false} />
        <div className="band-copy"><div className="wrap closer">
          <h2><T v={ABOUT.closer1} /><br /><T v={ABOUT.closer2} /></h2>
          <Link className="btn" href="/services" style={{ background: "var(--night-ink)", color: "var(--night)" }}><T v={UI.viewServices} /></Link>
        </div></div>
      </section>
    </>
  );
}
