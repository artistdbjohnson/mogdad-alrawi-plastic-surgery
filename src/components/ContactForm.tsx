"use client";
import { useState } from "react";
import { CONTACT } from "@/lib/content";
import { T } from "./T";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div className="two">
        <label className="field"><span><T v={CONTACT.first} /></span><input name="first" autoComplete="given-name" required /></label>
        <label className="field"><span><T v={CONTACT.last} /></span><input name="last" autoComplete="family-name" required /></label>
      </div>
      <label className="field"><span><T v={CONTACT.email} /></span><input name="email" type="email" autoComplete="email" required /></label>
      <label className="field"><span><T v={CONTACT.msg} /></span><textarea name="message" /></label>
      <div><button className="btn" type="submit"><T v={CONTACT.send} /></button></div>
      <p className="note" role="status">{sent ? <T v={CONTACT.demo} /> : null}</p>
    </form>
  );
}
