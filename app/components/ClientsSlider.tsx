"use client";
import { motion } from "framer-motion";

export default function ClientsSlider({ clients }: { clients: string[] }) {
  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      <div className=" mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Trusted by Industry Leaders
        </h2>
        <p className="text-slate-600 mb-12">
          Partnering with global brands to deliver excellence
        </p>

        {/* Slider Wrapper */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15,
            }}
          >
            {[...clients, ...clients].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-28 rounded-xl bg-gray-50 shadow-md hover:shadow-lg flex items-center justify-center transition-all"
              >
                <img
                  src={`/img/${logo}`}
                  alt={logo.replace(".PNG", "")}
                  className="h-14 object-contain transition"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
