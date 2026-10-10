"use client";
import Image from "next/image";
import { src, MEDIA } from "@/lib/media";
import type { L } from "@/lib/content";
import { useLang } from "@/lib/lang";


export function Plate({ id, alt, ratio = "3 / 2", sizes = "(max-width: 900px) 100vw, 50vw", pos = "50% 50%", priority = false, caption, className = "", rv = true, fit = "cover" }: {
  id: string; alt: L; ratio?: string; sizes?: string; pos?: string; priority?: boolean; caption?: React.ReactNode; className?: string; rv?: boolean; fit?: "cover" | "contain";
}) {
  const lang = useLang();
  const m = MEDIA[id];
  return (
    <figure className={`plate ${rv ? "rv" : ""} ${className}`}>
      <div className="plate-frame" style={{ aspectRatio: ratio }}>
        <Image src={src(id)} alt={alt[lang]} fill sizes={sizes} quality={80} priority={priority} placeholder={m ? "blur" : "empty"} blurDataURL={m?.blur} style={{ objectFit: fit, objectPosition: pos }} />
      </div>
      {caption ? <figcaption className="cap">{caption}</figcaption> : null}
    </figure>
  );
}
