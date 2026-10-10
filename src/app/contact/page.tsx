import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/content";
import { T } from "@/components/T";
import { Plate } from "@/components/Plate";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <section className="wrap page-head" style={{ paddingBottom: "clamp(84px,12vh,168px)" }}>
      <div className="contact-grid">
        <div>
          <h1 className="rv"><T v={CONTACT.h1} /></h1>
          <p className="lead rv" style={{ marginTop: 28 }}><T v={CONTACT.p} /></p>
          <div className="dl rv" style={{ margin: "40px 0 48px" }}>
            <a href={SITE.telHref}>{SITE.tel}</a>
            <a href={`mailto:${SITE.email}`} style={{ overflowWrap: "anywhere" }}>{SITE.email}</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
          </div>
          <div className="rv"><ContactForm /></div>
        </div>
        <Plate id="millennium-night" alt={{ en: "Gateshead Millennium Bridge lit at night", pt: "Gateshead Millennium Bridge iluminada à noite" }} ratio="3 / 4" sizes="(max-width: 960px) 100vw, 45vw" />
      </div>
    </section>
  );
}
