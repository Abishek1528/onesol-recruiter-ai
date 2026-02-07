'use client';

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  // STRICT PALETTE
  const colors = {
    blue: '#A5D8FF',     // Accent 1
    lavender: '#D0BCFF', // Accent 2
    purple: '#B197FC',   // Accent 3 (Main Background)
    white: '#FFFFFF'
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[3rem] p-12 md:p-24 text-center overflow-hidden isolate shadow-xl"
          style={{ backgroundColor: colors.purple }} // Solid Purple Background
        >
          {/* --- Solid Color Decorations (No Gradients) --- */}
          
          {/* Large Blue Circle Decoration */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-40 mix-blend-overlay"
            style={{ backgroundColor: colors.blue }}
          />
          
          {/* Lavender Circle Decoration */}
          <motion.div 
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full opacity-40 mix-blend-overlay"
            style={{ backgroundColor: colors.lavender }}
          />

          {/* --- Content --- */}
          <div className="relative z-10 max-w-3xl mx-auto">
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
              Ready to Hire Better, Faster?
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 font-medium text-white/90">
              Join 500+ companies hiring smarter with AI
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              
              {/* Primary Button: White BG with Purple Text */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-bold px-10 py-5 rounded-full shadow-lg transition-transform"
                style={{ 
                  backgroundColor: colors.white, 
                  color: colors.purple 
                }}
              >
                Start Free Trial
              </motion.button>

              {/* Secondary Button: Transparent with Blue Border */}
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-4 font-bold px-10 py-5 rounded-full flex items-center justify-center gap-3 transition-colors"
                style={{ 
                  borderColor: colors.blue, // Uses the #A5D8FF Blue
                  color: colors.white 
                }}
              >
                Schedule Demo <ArrowRight size={22} />
              </motion.button>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}