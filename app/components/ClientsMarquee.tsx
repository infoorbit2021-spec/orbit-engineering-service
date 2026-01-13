"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

function ClientsMarquee({ clients }: { clients: string[] }) {
  const baseX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (!containerRef.current) return;

    const speed = 0.05;
    baseX.current -= delta * speed;

    const width = containerRef.current.scrollWidth / 2;
    if (Math.abs(baseX.current) >= width) baseX.current = 0;

    containerRef.current.style.transform = `translateX(${baseX.current}px)`;
  });

  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Trusted by Industry Leaders
        </h2>
        <p className="text-slate-600 mb-12">
          Partnering with global brands to deliver excellence
        </p>

        <div className="relative w-full overflow-hidden">
          <div ref={containerRef} className="flex gap-10 whitespace-nowrap">
            {[...clients, ...clients].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-28 flex items-center justify-center"
              >
                <img
                  src={`/img/client/${encodeURIComponent(logo)}`}
                  alt=""
                  className="h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsMarquee;
