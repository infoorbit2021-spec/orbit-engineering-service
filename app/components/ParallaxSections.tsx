"use client";
import { motion } from "framer-motion";

export default function ParallaxTimeline({ sections, about, overlayColors }: any) {
  return (
    <div className="relative border-l-4 border-blue-500 ml-6 overflow-hidden">
      {sections.map((s: any, i: number) => {
        const isRight = i % 2 === 0;
        const overlay = overlayColors[i % overlayColors.length];

        return (
          <motion.div
            key={i}
            className={`relative mb-20 px-[5%] ${isRight ? "text-left" : "text-right"}`}
            initial={{ opacity: 0, x: isRight ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Timeline dot */}
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full left-[-6px] md:left-[-8px] top-1.5" />

            {/* Timeline card */}
            <section
              className="relative p-8 rounded-lg shadow-xl bg-cover bg-center bg-fixed overflow-hidden"
              style={{ backgroundImage: `url(/img/${about.Image})` }}
            >
              {/* Overlay */}
              <div className={`absolute inset-0 ${overlay} backdrop-blur-sm rounded-lg pointer-events-none`} />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: s.text }} className="prose" />
              </div>
            </section>
          </motion.div>
        );
      })}
    </div>
  );
}
