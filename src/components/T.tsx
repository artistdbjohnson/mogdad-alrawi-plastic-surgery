import type { L } from "@/lib/content";
/** Both languages are in the DOM; CSS shows the active one → no flash, works without JS, SEO-safe. */
export function T({ v }: { v: L }) {
  if (v.en === v.pt) return <>{v.en}</>;
  return (
    <>
      <span data-l="en">{v.en}</span>
      <span data-l="pt" lang="pt-PT">{v.pt}</span>
    </>
  );
}
