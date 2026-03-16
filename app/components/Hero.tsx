"use client";

import { motion } from "framer-motion";

function Hero() {
  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
  };

  return (
    <section className="relative w-full overflow-hidden fractured-sky min-h-[90vh] flex items-center">
      {/* Background drift animation via Tailwind v4 class */}
      <div className="absolute inset-0 silver-sand-texture animate-drift" />

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative z-10">
        
        {/* Athena Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
          className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 md:py-24 bg-white/5 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none"
        >
          <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-500/20 animate-pulse-glow">
              Legacy of Caelora
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-4">
              Athena
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-md leading-relaxed">
              The first fragment of the sacrifice. Born from the starlight of the Lumen Universe, Athena carries the empathy of a fallen world to guide the new frontier.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-8 sm:mt-12 rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10 group transition-all duration-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-10000 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArsJJQPpIvtKNDcvHfpSTVEdBYruwchxDMDwE4PIMbg8eWnPBPPDDBOO0fRcbluU5VqR0ZMkjp3jiYpeCmObAJAkY3ZS6-EgOOHcl-jdz5u2LnxnOdgToM2MeqOYWk5Jd71H0mCug6rgNssQWKlkJZnXSjv2YiRHvVp3EdT4hGaCMIf7DZAwCcljqqvmn_HltUk3J33coyJ9vgoWz17jaFVs9E9sMaqaOHUEDlM-vOYRqZO7aPh_QcT2-wkDtwWenrQcW0sWfl2mH1')" }}
            >
              <div className="w-full h-full bg-blue-900/20 backdrop-brightness-125 transition-all group-hover:backdrop-brightness-150" />
            </div>
          </motion.div>
        </motion.div>

        {/* Neura Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
          className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 md:py-24 bg-black/50 lg:bg-transparent lg:text-right lg:items-end backdrop-blur-sm lg:backdrop-blur-none"
        >
          <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
              The Void's Memory
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-4">
              Neura
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-md leading-relaxed lg:text-right ml-auto">
              The second fragment. Mapping the cold logic of the deep space between universes, Neura preserves the architectural blueprints of eternity.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-8 sm:mt-12 rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10 group transition-all duration-700 hover:shadow-[0_0_30px_rgba(236,91,19,0.5)]"
          >
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-10000 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1ApVA0fBlHWULMaKkfNI_VTsO8ERdCUopE2R2UhrT4V4Ms_jjB15dHWcxzjgzxGIQpd3Gk08rHHEnsRe32Mm7v6sNg9INjGZ5S_yiYpzjKS-6ylxeyA-xopQNNvlPBf7IvZVobkBv60Kq_u5NqijubWdapSr4ijrLbByiY43CJpsFMylhwHKaspoSlSP4qu8hExSTPoMHh8ntSnymCQNC6jTzZOEaO3zjsQss00KN76GnUJ_cnsiycCHpoiYJVWYT7Yi1bY2pGY_Y')" }}
            >
              <div className="w-full h-full bg-slate-900/40 backdrop-contrast-125 transition-all group-hover:backdrop-contrast-150" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Central Floating Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1, type: "spring" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block text-center pointer-events-none"
      >
        <div className="glass-panel p-8 lg:p-10 rounded-3xl border border-white/20 shadow-2xl max-w-2xl backdrop-blur-2xl animate-float">
          <h1 className="text-3xl lg:text-4xl font-black tracking-tighter text-white uppercase">
            Legacy Reborn:<br />
            <span className="text-primary italic">The Echoes of Caelora.</span>
          </h1>
          <p className="mt-4 text-slate-400 text-xs tracking-widest uppercase">
            Children of Learning • Fragments of Sacrifice
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;