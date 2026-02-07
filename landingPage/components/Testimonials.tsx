'use client';

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { User, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const containerRef = useRef(null);
  // Trigger animation when 50% of the section is visible
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  // --- STRICT PALETTE ---
  const colors = {
    accent1: '#A5D8FF', // Light Blue
    accent2: '#D0BCFF', // Lavender
    accent3: '#B197FC', // Purple
    slate900: '#0f172a',
    slate600: '#475569',
    white: '#ffffff'
  };

  const testimonials = [
    {
      id: 1,
      text: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling.",
      author: "Rahul Mehta",
      role: "Founder, TechStart"
    },
    {
      id: 2,
      text: "The AI screening is frighteningly accurate. It found hidden gems we would have completely missed with manual review.",
      author: "Sarah Jenkins",
      role: "VP HR, ScaleUp"
    },
    {
      id: 3,
      text: "A game changer for our small team. I can finally focus on building product instead of sorting through endless resumes.",
      author: "David Chen",
      role: "CTO, NextGen"
    }
  ];

  // --- ANIMATION VARIANTS ---
  // The cards start stacked in the center, then spread out
  const cardVariants: Variants = {
    hidden: { 
      x: 0, 
      y: 50, 
      scale: 0.9, 
      opacity: 0,
      rotate: 0
    },
    visible: (index: number) => {
      // Logic: Index 0 goes Left, Index 1 goes Center, Index 2 goes Right
      // (Or any arrangement you prefer. Here: 0=Left, 1=Right, 2=Center for balance)
      
      let xOffset = 0;
      let rotation = 0;
      let delay = 0;

      if (index === 0) { xOffset = -340; rotation = -5; delay = 0.2; } // Left
      if (index === 1) { xOffset = 340; rotation = 5; delay = 0.4; }  // Right
      if (index === 2) { xOffset = 0; rotation = 0; delay = 0.6; }    // Center

      return {
        x: xOffset,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: rotation,
        transition: { 
          type: "spring" as const, 
          stiffness: 100, 
          damping: 20, 
          delay: delay // Stagger the spreading
        }
      };
    }
  };

  // Text inside the card waits until the card is settled to appear
  const contentVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: (index: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.5, 
        delay: 0.8 + (index * 0.2) // Delay text until card movement finishes
      }
    })
  };

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden flex flex-col items-center justify-center min-h-[700px]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(${colors.accent2} 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }}>
      </div>
      
      <div className="relative z-10 text-center mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 border"
          style={{ backgroundColor: `${colors.accent1}20`, borderColor: colors.accent1, color: colors.slate600 }}
        >
          USER LOVE
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
        >
          Success Stories
        </motion.h2>
      </div>

      {/* --- CARD STAGE --- */}
      <div className="relative w-full max-w-6xl h-[400px] flex items-center justify-center">
        
        {testimonials.map((t, index) => {
          // Determine color based on position for visual variety
          let borderColor = colors.accent2; // Default (Side cards)
          let iconColor = colors.accent2;
          let zIndex = 10;

          if (index === 2) { // Center Card (Last one)
            borderColor = colors.accent3; // Purple for center
            iconColor = colors.accent3;
            zIndex = 20; // On top
          }

          return (
            <motion.div
              key={t.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Trigger animation on scroll
              whileHover={{ 
                scale: 1.05, 
                zIndex: 100, 
                boxShadow: `0 20px 40px -10px ${colors.accent3}40`,
                borderColor: colors.accent3
              }}
              className="absolute top-0 w-full max-w-[360px] bg-white p-8 rounded-[2rem] border-2 flex flex-col justify-between h-[340px] shadow-xl cursor-default"
              style={{ 
                borderColor: borderColor,
                zIndex: zIndex
              }}
            >
              {/* Card Content */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: `${iconColor}20` }}>
                    <Quote size={18} className="fill-current" style={{ color: iconColor }} />
                  </div>
                  <div className="flex gap-1 pt-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} size={12} fill={iconColor} stroke="none" />
                    ))}
                  </div>
                </div>

                {/* TEXT ANIMATION: Fades in after card settles */}
                <motion.p 
                  custom={index}
                  variants={contentVariants} // Uses separate text animation
                  className="text-lg font-medium leading-relaxed text-slate-900"
                >
                  {t.text}
                </motion.p>
              </div>

              <motion.div 
                custom={index}
                variants={contentVariants} // Uses separate text animation
                className="flex items-center gap-3 pt-5 border-t border-slate-100 mt-auto"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shrink-0 border-2"
                  style={{ backgroundColor: `${colors.accent2}40`, borderColor: iconColor }}>
                  <User size={18} className="text-slate-600" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-900">{t.author}</h5>
                  <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: colors.slate600 }}>{t.role}</p>
                </div>
              </motion.div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}