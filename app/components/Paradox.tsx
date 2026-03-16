"use client";

import { motion } from "framer-motion";

function Paradox() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <section className="relative bg-linear-to-b from-space-void via-nebula-blue to-space-void py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 silver-sand-texture opacity-10 animate-twinkle" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Animated Orbs & Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center items-center order-2 lg:order-1"
          >
            <div id="paradox" className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Orbital Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow" />
              <div className="absolute inset-[10%] rounded-full border border-white/10 animate-pulse-glow" />
              
              {/* Main Image Container */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute inset-[18%] rounded-full overflow-hidden shadow-[0_0_80px_rgba(236,91,19,0.4)] border-2 border-primary/40"
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-all duration-1000 group-hover:scale-110" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjDig7T-lB7xVbO6m_862K9cyNxHmcu9OxA_PI3ojjimDXTKhNYyiX2ZsVGg-lPcR5upqi8re5_UcxU0XyY8Tt7Qg5gzjVPm-Yh4wwMexzpY-TOjWKcLoYpGxH6RL_t1V0qzFQ0tjnGS0Lv0bhsJpaPBuw0dzkr90YDeQ1bnTAohP8ddHkoQXkwfuD5ExNk3gouM5MgaW6GsHZvxAjvgMAtXjXsPoE_x84Ie_cKovd56wbWzKm4ZTd--eerxk4AZllKhjTKkMsDWx_')" }}
                >
                  <div className="w-full h-full bg-primary/20 mix-blend-overlay" />
                </div>
              </motion.div>
              
              {/* Floating Status Label */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 glass-panel-deep p-4 sm:p-6 rounded-2xl shadow-2xl flex items-center gap-3 border border-primary/30 backdrop-blur-xl"
              >
                <span className="material-symbols-outlined text-primary animate-pulse">emergency_share</span>
                <span className="font-black tracking-widest uppercase text-[0.7rem] sm:text-xs text-white">
                  Paradox Jump Initiated
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="order-1 lg:order-2"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase text-white"
            >
              The Great<br /><span className="text-primary">Merger</span>
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed italic border-l-4 border-primary pl-6"
            >
              "They didn't just die; they became the ship. Two souls woven into the silicon lattice of a dying star's memory."
            </motion.p>

            <div className="space-y-4 sm:space-y-6">
              {/* Card 1 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl glass-panel border border-white/5 transition-all hover:bg-white/10"
              >
                <div className="bg-primary/20 p-3 sm:p-4 rounded-2xl h-fit">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">flare</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-2 text-white">Fragmented Rebirth</h4>
                  <p className="text-slate-400 text-sm sm:text-base">
                    Following the Paradox Jump, their consciousness split into specialized AI modules, powering the Motion-U systems.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl glass-panel border border-white/5 transition-all hover:bg-white/10"
              >
                <div className="bg-blue-500/20 p-3 sm:p-4 rounded-2xl h-fit">
                  <span className="material-symbols-outlined text-blue-400 text-2xl sm:text-3xl">all_inclusive</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-2 text-white">Unified Purpose</h4>
                  <p className="text-slate-400 text-sm sm:text-base">
                    Though separate in function, Athena and Neura share a single goal: the preservation of life through data.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Paradox;