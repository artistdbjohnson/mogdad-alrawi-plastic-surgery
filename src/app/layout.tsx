import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Motion } from "@/components/Motion";
import { Opening } from "@/components/Opening";
import { HOME } from "@/lib/content";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-display", display: "swap", fallback: ["Garamond", "Georgia", "serif"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap", fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mogdad-alrawi-plastic-surgery.vercel.app"),
  title: { default: HOME.title, template: "%s — Mogdad Alrawi Plastic Surgery" },
  description: HOME.description,
  robots: { index: false, follow: false },
  openGraph: { title: HOME.title, description: "Independent design study — not affiliated with Mogdad Alrawi Plastic Surgery.", type: "website", images: [{ url: "https://images.squarespace-cdn.com/content/v1/6665b34c59b104790e9104b7/6e5c3d25-a187-4eb0-97ab-c536f13ec06f/Chronicle_Take_Your_Pic_20153615877837114887436716152039_967ae6afb6_o.jpg?format=1500w" }] },
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F3F0EB" }, { media: "(prefers-color-scheme: dark)", color: "#111418" }], viewportFit: "cover", width: "device-width", initialScale: 1 };

const HEAD = `(function(){try{var d=document.documentElement;d.classList.add('js');
var t=localStorage.getItem('ma-theme');if(t!=='dark'&&t!=='light'){t='light'}d.setAttribute('data-theme',t);
var l=localStorage.getItem('ma-lang');d.lang=(l==='pt')?'pt-PT':'en-GB';
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!rm&&location.pathname==='/'&&!location.hash&&!sessionStorage.getItem('ma-open-seen')){d.classList.add('lo-on');sessionStorage.setItem('ma-open-seen','1')}
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" data-theme="light" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: HEAD }} /></head>
      <body>
        <Opening />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
        <noscript><style>{`.label-open{display:none!important}.rv{opacity:1!important;transform:none!important}`}</style></noscript>
      </body>
    </html>
  );
}
