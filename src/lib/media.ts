import media from "@/media.json";
export type Media = { w: number; h: number; blur: string; src: string };
export const MEDIA = media as Record<string, Media>;
/** Client's own published photography, served from their Squarespace CDN originals through next/image. */
export const src = (id: string) => MEDIA[id].src;
