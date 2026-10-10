import Link from "next/link";
import { T } from "@/components/T";
export default function NotFound() {
  return (
    <section className="wrap page-head" style={{ minHeight: "60vh" }}>
      <h1><T v={{ en: "Page not found", pt: "Página não encontrada" }} /></h1>
      <p style={{ marginTop: 24 }}><Link className="arrow" href="/"><T v={{ en: "Back to Mogdad Alrawi Plastic Surgery", pt: "Voltar a Mogdad Alrawi Plastic Surgery" }} /> <i>→</i></Link></p>
    </section>
  );
}
