"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingSequence({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate system sync for Athena & Neura
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-space-void overflow-hidden"
          >
            {/* Cosmic Background Elements */}
            <div className="absolute inset-0 silver-sand-texture opacity-20 animate-drift" />
            
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* The Planet (Caelora Core) */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: 360 
                }}
                transition={{ 
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                }}
                className="w-32 h-32 rounded-full bg-linear-to-tr from-primary/80 to-blue-600/40 blur-xs shadow-[0_0_50px_rgba(236,91,19,0.3)] border border-white/10"
              />

              {/* The Rocket Orbiting */}
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '8s' }}>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4"
                >
                  <span className="material-symbols-outlined text-primary text-4xl rotate-45 shadow-primary">
                    rocket_launch
                  </span>
                  {/* Rocket Trail */}
                  <div className="w-1 h-12 bg-linear-to-t from-transparent via-primary/50 to-transparent -mt-2 mx-auto blur-xs" />
                </motion.div>
              </div>

              {/* Outer Star Rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: '12s' }} />
              <div className="absolute inset-10 rounded-full border border-white/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
            </div>

            {/* Loading Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center z-10"
            >
              <h2 className="text-white font-black text-2xl tracking-tighter uppercase mb-2">
                Initiating Paradox Jump
              </h2>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-xs justify-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
                SYNCING_ATHENA_LOGIC...
              </div>
              
              {/* Progress Bar */}
              <div className="w-64 h-1 bg-white/5 rounded-full mt-8 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 3.5, ease: "easeInOut" }}
                  className="w-full h-full bg-primary"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!loading && children}
    </>
  );
}