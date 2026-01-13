"use client";
import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

export default function Clients() {
  const clients = ["ae_smith.png", "air_master.png", "ambient_services.jpg", "amin_group.png",  "climatech.png", "equilibrium.jpg", "fredon.jpg", "Icon_mechanical_services.png", "jec_airconditioning.jpg",  "metalair_sheetmetal.png", "precise_air.png", "protech.png", "Icon_mechanical_services.png", "redstar.jpg",  "seda_services_logo.jpg", "varium.png"];

  const baseX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;

    const speed = 0.05; // px per ms
    baseX.current -= delta * speed;

    const width = containerRef.current.scrollWidth / 2;

    if (Math.abs(baseX.current) >= width) {
      baseX.current = 0;
    }

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
            {clients.map((logo, i) => (
              <div
                key={`a-${i}`}
                className="flex-shrink-0 w-40 h-28 flex items-center justify-center"
              >
                <img
                  src={`/img/client/${logo}`}
                  alt=""
                  className="h-14 object-contain"
                />
              </div>
            ))}

            {clients.map((logo, i) => (
              <div
                key={`b-${i}`}
                className="flex-shrink-0 w-40 h-28 flex items-center justify-center"
              >
                <img
                  src={`/img/client/${logo}`}
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
