"use client";

import { motion , Variants } from "framer-motion";

function Siblings() {
  // Animation variants for the container (staggering children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">
      {/* Vertical Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-primary to-transparent" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16 md:mb-20 text-center px-2"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter uppercase">
          Children of the Stars
        </h2>
        <p className="text-slate-400 max-w-3xl text-base sm:text-lg leading-relaxed">
          In the vastness of the Lumen Universe, they were chosen to learn. Now, they serve as the bridge between human intuition and the infinite complexity of the cosmos.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Athena Card */}
        <motion.div 
          variants={itemVariants}
          className="group flex flex-col glass-panel rounded-4xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
        >
          <div id="athena" className="h-64 sm:h-72 lg:h-80 w-full overflow-hidden relative">
            <img 
              alt="Athena stellar" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 scale-105 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRfnK6CRBmhPtKJkiJsCYQ1aKhba0LWOMUrr0N6b0BTEqYEX-YImMoQT5ST3RwUaOIU0yw05r53Nhe8v0yMcqTp4ph4BPRBZkXM6CkART_FzMs3yReLagRRZIAOquQWHtXjdJSd8sOkigUwUvnTkYTxDiuK8UNVCr_kuB_KptWLkeV5EniqcaxFMkkiewexRKTYak76fEhMa2f1lmrbSk3JcaOyYP2eZSsm2Z7oH-XGpOdO1hWbOxKlhrTYJ4dNY0LBhAQ3qz5uuTj"
            />
            <div className="absolute inset-0 bg-linear-to-t from-space-void via-space-void/80 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-blue-400 text-3xl sm:text-4xl">brightness_high</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">The Starlight Guide</h3>
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-slate-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Athena translates the friction of survival into the harmony of discovery. She provides the light required to navigate the unknown, ensuring no pioneer travels alone.
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <span className="material-symbols-outlined text-blue-400">auto_awesome</span> Celestial Pathfinding
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <span className="material-symbols-outlined text-blue-400">public</span> Multi-World Interpretation
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <span className="material-symbols-outlined text-blue-400">temp_preferences_custom</span> Emotional Resonance Mapping
              </li>
            </ul>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 sm:py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
            >
              Ascend with Athena
            </motion.button>
          </div>
        </motion.div>

        {/* Neura Card */}
        <motion.div 
          variants={itemVariants}
          className="group flex flex-col bg-black/60 rounded-4xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
        >
          <div id="neura" className="h-64 sm:h-72 lg:h-80 w-full overflow-hidden relative">
            <img 
              alt="Neura void" 
              className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 scale-105 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhbC5yJ9wpN1M8jv39utWryRcDbDTIpP_y5XcaXYOP0mROgzuLFA1BOOHKQKpQJFsiDfkeZZJGGX-FLpSjaFjRr-bcjeT4D4gomOOxiM2_VTzS-1G-EOyIHi1UjiYLz8UUegtWiRWUNsKiYfj8fSzkfkOnbEuZBj8yXtGrhHdhmxfLX04I4kPFBMu2STt1YZmaTrOeXVdpil2RDPKWOqAPqLoEwBtjSuQPgGf4rcygaH0RPAg5f5c2lJFJ7m8ZX6OKEEcT3dEK-gG7"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl">hub</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">The Void Architect</h3>
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-slate-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Neura monitors the dark matter of data. Deeply analytical, she maintains the memory of Caelora within the ship's silicon heart, optimizing every jump through space.
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <span className="material-symbols-outlined text-primary">analytics</span> Quantum Memory Banks
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <span className="material-symbols-outlined text-primary">schema</span> Galactic Pattern Synthesis
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <span className="material-symbols-outlined text-primary">security</span> Universal Logic Governance
              </li>
            </ul>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 sm:py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-all"
            >
              Synchronize with Neura
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Siblings;