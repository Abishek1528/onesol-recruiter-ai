"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CONFIGURATION ---
const colors = {
  accent1: "#A5D8FF", // Background
  accent2: "#D0BCFF", 
  accent3: "#B197FC", 
  white: "#FFFFFF",
  textMain: "#1F2937",
  textMuted: "#9CA3AF",
};

const chartMetrics = [
  { 
    id: 1, label: "Screening", value: "10x", height: 70, color: colors.accent3, 
    detail: "AI parses 250+ apps/day vs 25 manually" 
  },
  { 
    id: 2, label: "Time-to-Hire", value: "-70%", height: 60, color: colors.accent2, 
    detail: "Hiring timeline drops from 42 days to 12 days" 
  },
  { 
    id: 3, label: "Interviews", value: "25x", height: 90, color: colors.accent3, 
    detail: "200+ automated interviews vs 8 manual calls" 
  },
  { 
    id: 4, label: "Completion", value: "95%", height: 85, color: colors.accent2, 
    detail: "Smart forms reduce candidate drop-off significantly" 
  },
  { 
    id: 5, label: "Quality", value: "89%", height: 75, color: colors.accent3, 
    detail: "Optimizer attracts higher-quality pipelines" 
  },
  { 
    id: 6, label: "Costs", value: "-80%", height: 50, color: colors.accent2, 
    detail: "Vs traditional agencies & software subscriptions" 
  },
  { 
    id: 7, label: "Bad Hires", value: "-50%", height: 40, color: colors.accent3, 
    detail: "Skills assessment improves hiring accuracy" 
  },
];

export default function ImpactMetrics() {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  const activeMetric = hoveredMetric ? chartMetrics.find((m) => m.id === hoveredMetric) : null;

  return (
    // OUTER SECTION: White/Transparent background, handles vertical spacing
    <section className="py-16 w-full flex justify-center">
      
      {/* INNER CONTAINER: The Blue Box with Rounded Corners and Reduced Width */}
      <div 
        className="relative w-[95%] max-w-6xl rounded-[3rem] overflow-hidden py-16 px-4 md:px-8 shadow-sm"
        style={{ backgroundColor: colors.accent1 }}
      >
        
        {/* Background Texture (Contained inside the rounded box) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay"
             style={{ 
               backgroundImage: `radial-gradient(${colors.white} 1px, transparent 1px)`,
               backgroundSize: '20px 20px'
             }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-bold mb-3 tracking-tight text-gray-900"
            >
              The RecruiterAI Advantage
            </motion.h2>
            <p className="text-sm md:text-lg text-gray-700/80 max-w-xl mx-auto">
              Data-driven precision at a scale impossible for human teams alone.
            </p>
          </div>

          {/* Compact Dashboard Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl rounded-3xl p-6 md:p-8 bg-white shadow-xl relative overflow-hidden"
          >
            {/* Top Info Area */}
            <div className="h-14 mb-4 flex flex-col justify-center border-b border-dashed border-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredMetric || "default"}
                  initial={{ opacity: 0, x: -5, filter: "blur(2px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 5, filter: "blur(2px)" }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-start"
                >
                  <span 
                    className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1 flex items-center gap-2" 
                    style={{ color: activeMetric ? activeMetric.color : colors.textMuted }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeMetric ? activeMetric.color : "#E5E7EB" }} />
                    {activeMetric ? activeMetric.label : "LIVE METRICS"}
                  </span>
                  <p className="text-base md:text-lg font-medium leading-tight text-gray-800 line-clamp-1">
                    {activeMetric ? activeMetric.detail : "Hover over the bars to see impact details."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Chart Area */}
            <div className="h-[200px] w-full flex items-end justify-between gap-2 md:gap-3">
              {chartMetrics.map((m, i) => {
                const isHovered = hoveredMetric === m.id;
                const isDimmed = hoveredMetric !== null && !isHovered;

                return (
                  <div 
                    key={m.id} 
                    className="relative flex flex-col items-center justify-end h-full flex-1 group cursor-pointer"
                    onMouseEnter={() => setHoveredMetric(m.id)}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    {/* Floating Value */}
                    <motion.div 
                      animate={{ 
                        y: isHovered ? -3 : 0, 
                        scale: isHovered ? 1.1 : 1,
                        opacity: isDimmed ? 0 : 1 
                      }}
                      className="mb-1"
                    >
                      <span className="text-sm md:text-base font-bold tracking-tight text-gray-900">
                        {m.value}
                      </span>
                    </motion.div>

                    {/* THE BAR */}
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${m.height}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.8, 
                        delay: i * 0.05, 
                        type: "spring", 
                        stiffness: 120,
                        damping: 12
                      }}
                      className="w-full max-w-[48px] rounded-t-lg relative shadow-sm"
                      style={{ backgroundColor: m.color }}
                      animate={{
                        opacity: isDimmed ? 0.3 : 1,
                        filter: isDimmed ? "grayscale(100%)" : "grayscale(0%)",
                        scaleX: isHovered ? 1.05 : 1,
                      }}
                    />

                    {/* X-Axis Label */}
                    <div className="absolute -bottom-8 w-full flex justify-center">
                      <p 
                        className={`text-[8px] md:text-[9px] text-center uppercase tracking-widest font-bold transition-all duration-300 ${
                          isHovered ? "text-gray-900 -translate-y-0.5" : "text-gray-400"
                        }`}
                      >
                        {m.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="h-4" /> 
          </motion.div>
        </div>
      </div>
    </section>
  );
}