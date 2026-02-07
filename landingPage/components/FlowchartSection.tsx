"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Video, Mail, Calendar, UserCheck, ArrowRight, Sparkles } from "lucide-react";

// --- Configuration & Data ---
const PRIMARY_PURPLE = "#B197FC";

const flows = [
  {
    id: "screening",
    title: "AI Screening",
    steps: [
      { icon: Mail, label: "Application Received", type: "trigger", detail: "Instant capture" },
      { icon: UserCheck, label: "AI Analysis", type: "action", detail: "Parses & ranks top 10%" },
      { icon: Calendar, label: "Auto-Schedule", type: "decision", condition: "Score > 75%", detail: "Syncs with Calendar" },
    ],
    highlight: "Process 250+ resumes in under 5 minutes."
  },
  {
    id: "interview",
    title: "Video Intelligence",
    steps: [
      { icon: Video, label: "Async Interview", type: "trigger", detail: "Candidate records answers" },
      { icon: Sparkles, label: "Sentiment Analysis", type: "action", detail: "AI detects soft skills" },
      { icon: CheckCircle2, label: "Smart Offer", type: "decision", condition: "Match > 90%", detail: "Drafts contract" },
    ],
    highlight: "Reduce interview time by 70% per hire."
  },
  {
    id: "nurture",
    title: "Pipeline Nurture",
    steps: [
      { icon: UserCheck, label: "Silver Medalists", type: "trigger", detail: "Scored 60-74%" },
      { icon: Calendar, label: "Smart Wait", type: "action", detail: "3-Month warm-up sequence" },
      { icon: Mail, label: "Re-Engagement", type: "action", detail: "Auto-suggest new roles" },
    ],
    highlight: "Turn rejected candidates into future hires."
  },
];

export default function FlowchartSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#B197FC] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-100 shadow-sm text-xs font-semibold text-purple-600 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#B197FC] animate-pulse" />
            Workflow Automation
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Recruiting on <span style={{ color: PRIMARY_PURPLE }}>Autopilot</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Stop doing busy work. Build custom, logic-based hiring workflows that screen, rank, and schedule candidates while you sleep.
          </p>
        </div>

        {/* --- Tab Navigation (Pill Design) --- */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full border border-slate-200 shadow-sm relative">
            {flows.map((flow, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={flow.id}
                  onClick={() => setActiveTab(index)}
                  // INCREASED FONT SIZE: text-sm -> text-base
                  className={`relative px-8 py-3 rounded-full text-base font-medium transition-colors duration-300 z-10 ${
                    isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#B197FC]/20 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {flow.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- The Flowchart Canvas --- */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            // ADDED BORDER: border-slate-200 (Thicker definition for the main box)
            className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-purple-900/5 border border-slate-200 relative overflow-hidden"
          >
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-[0.4]" 
                 style={{ 
                   backgroundImage: `radial-gradient(#B197FC 1px, transparent 1px)`, 
                   backgroundSize: '30px 30px' 
                 }} 
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Steps Container */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 md:gap-4">
                  
                  {flows[activeTab].steps.map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center flex-1 group">
                      
                      {/* --- CARD NODE --- */}
                      <div className="relative w-full md:w-auto flex-1 max-w-[320px]">
                        {/* Conditional Badge */}
                        {step.condition && (
                          <div className="absolute -top-3 right-4 z-20 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg border border-slate-700">
                            IF {step.condition}
                          </div>
                        )}
                        
                        {/* CARD STYLING UPDATES: 
                           1. Increased padding (p-8)
                           2. Added explicit hover border color (group-hover:border-purple-300)
                           3. Increased font sizes inside 
                        */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-purple-300 group-hover:shadow-purple-500/10">
                          <div className="flex items-center gap-5 mb-5">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" 
                                 style={{ background: `linear-gradient(135deg, ${PRIMARY_PURPLE}20, ${PRIMARY_PURPLE}05)` }}>
                              <step.icon size={26} color="#7C3AED" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-[#B197FC] uppercase tracking-wider mb-1">{step.type}</p>
                              {/* INCREASED FONT: text-xl */}
                              <h4 className="font-bold text-slate-900 text-xl leading-tight">{step.label}</h4>
                            </div>
                          </div>
                          {/* INCREASED FONT: text-base */}
                          <p className="text-base text-slate-500 font-medium leading-relaxed">{step.detail}</p>
                        </div>
                      </div>

                      {/* --- CONNECTOR (Arrow) --- */}
                      {i !== flows[activeTab].steps.length - 1 && (
                        <div className="flex-shrink-0 flex flex-col md:flex-row items-center justify-center py-6 md:py-0 md:px-6 text-slate-300">
                          {/* Desktop Arrow */}
                          <div className="hidden md:flex items-center">
                            <div className="w-16 h-[3px] bg-slate-200 group-hover:bg-[#B197FC] transition-colors duration-300 rounded-full" />
                            <ArrowRight size={20} className="-ml-3 group-hover:text-[#B197FC] transition-colors duration-300" />
                          </div>
                          {/* Mobile Line */}
                          <div className="md:hidden h-10 w-[3px] bg-slate-200 rounded-full" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* --- Bottom Result Highlight --- */}
                <div className="mt-20 text-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-purple-900/20"
                  >
                    <div className="bg-green-500/20 p-1.5 rounded-full">
                      <CheckCircle2 size={20} className="text-green-400" />
                    </div>
                    <span className="font-medium text-lg">
                      <span className="text-slate-400 mr-2">Expected Outcome:</span> 
                      {flows[activeTab].highlight}
                    </span>
                  </motion.div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}