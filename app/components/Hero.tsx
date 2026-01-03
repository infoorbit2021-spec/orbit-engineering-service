import { getSheetData } from "../lib/fetchGoogleSheet";
import HeroClient from "./HeroClient";

export const revalidate = 600; // revalidate every 10 mins

export default async function Hero() {
  // ✅ Fetch sheet data server-side
  
   const herodata = await getSheetData('Hero')

  // ---- Hero Section ----
 const slides = herodata
  .filter((r: any) => r.Page === 'Home' && r.Object === 'HeroSlider')
  .sort((a: any, b: any) => Number(a.ItemNo) - Number(b.ItemNo))
  .map((r: any) => ({
    ItemNo: Number(r.ItemNo),
    Title: r.Title,
    Subtitle: r.Subtitle,
    CtaText: r.CtaText,
    Image: r.Image,
  }));

  console.log("slides.........................................",slides);

  if (!slides || slides.length === 0) {
    return (
      <section className="h-[70vh] flex items-center justify-center bg-slate-900 text-slate-300">
        Loading hero slides...
      </section>
    );
  }

  // ✅ Pass slides down to client for animation
  return <HeroClient slides={slides} />;
}
