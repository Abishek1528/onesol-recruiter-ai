"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, AlertTriangle, Zap } from "lucide-react";

// --- DATA ---
const rawPainPoints = [
  {
    id: 1,
    name: "Sarah K.",
    role: "Founder at TechStart",
    quote: "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    color: "bg-rose-50 text-rose-600 border-rose-100",
    badge: "Slow Response"
  },
  {
    id: 2,
    name: "Rahul M.",
    role: "Hiring Manager",
    quote: "Posted on LinkedIn. Got 200 applications. Skimmed 20. Hired on gut feeling. They quit in 2 months.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    badge: "Quality Issue"
  },
  {
    id: 3,
    name: "Priya S.",
    role: "CEO at InnovateLabs",
    quote: "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    badge: "Overwhelmed"
  },
  {
    id: 4,
    name: "Amit T.",
    role: "Head of HR at ScaleUp",
    quote: "Our best candidate accepted another offer while we were still scheduling interviews.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=100",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    badge: "Lost Talent"
  }
];

// Triple the array for smoother high-speed looping without gaps
const painPoints = [...rawPainPoints, ...rawPainPoints, ...rawPainPoints];

// --- FRAMER MOTION VARIANTS (Entrance) ---
const leftContentVariants = {
  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

const rightColumnEntrance = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 1, ease: "easeOut" as const, delay: 0.3 }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden pt-28 pb-20 lg:pt-0 lg:pb-0 font-sans selection:bg-[#B197FC] selection:text-white">
      
      {/* --- PREMIUM AMBIENT BACKGROUND --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-[#A5D8FF]/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#B197FC]/15 blur-[120px] rounded-full pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light" />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: The Solution --- */}
          <motion.div 
            variants={leftContentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center relative"
          >
            {/* Decorative Sparkle */}
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 1, type: "spring" }}
              className="absolute -top-12 -left-12 text-[#B197FC] opacity-20"
            >
              <Zap size={120} strokeWidth={1} />
            </motion.div>

            {/* Badge */}
            <div className="mb-8 w-fit">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#B197FC]/30 text-xs font-bold tracking-widest text-slate-600 shadow-lg shadow-[#B197FC]/10 uppercase backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B197FC] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B197FC]"></span>
                </span>
                AI Recruiting Engine
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F172A] leading-[1.1] mb-8 tracking-tight font-sans relative z-10">
              Cut hiring time, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B197FC] to-[#7C3AED] relative inline-block">
                by 70% with AI.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#A5D8FF]" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.4" />
                </svg>
              </span>
              
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
              Stop losing great candidates to slow, manual processes. Let our AI handle the screening, scheduling, and ranking—so you can build your dream team.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <button className="group relative px-8 py-4 bg-[#0F172A] text-white rounded-xl font-bold text-lg shadow-2xl shadow-[#B197FC]/30 hover:shadow-[#B197FC]/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative flex items-center justify-center gap-3">
                  Start Hiring Smarter
                  <ArrowRight size={20} className="text-[#A5D8FF]" />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:border-[#B197FC] hover:text-[#7C3AED] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <Play size={12} className="fill-current ml-0.5" />
                </div>
                See How It Works
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-200 shadow-sm" 
                       style={{ backgroundImage: `url(https://randomuser.me/api/portraits/men/${i+30}.jpg)`, backgroundSize: 'cover' }} />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="font-bold text-slate-700">Trusted by 500+ Founders</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: INFINITE SCROLLING PAIN POINTS --- */}
          <div className="relative h-[700px] overflow-hidden">
            
            {/* Top/Bottom Fade Masks (Premium Look) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FAFAFA] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent z-20 pointer-events-none" />

            {/* Container for Entrance Animation */}
            <motion.div 
              variants={rightColumnEntrance}
              initial="hidden"
              animate="visible"
              className="w-full max-w-md ml-auto h-full"
            >
              {/* CSS ANIMATED WRAPPER */}
              <div 
                className="flex flex-col gap-6 pt-10"
                style={{
                  animation: 'vertical-scroll 10s linear infinite',
                  willChange: 'transform'
                }}
              >
                
                {painPoints.map((point, index) => (
                  <div
                    key={`${point.id}-${index}`}
                    className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 
                               transition-all duration-300 cursor-default transform
                               hover:scale-105 hover:-rotate-1 hover:z-50 hover:shadow-2xl hover:shadow-[#B197FC]/30 hover:border-[#B197FC]/50"
                  >
                    {/* Glowing Purple Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#B197FC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                    
                    {/* Sparkle Icon that appears on Hover */}
                    <div className="absolute -top-3 -right-3 bg-[#B197FC] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg z-20">
                        <Zap size={16} fill="currentColor" />
                    </div>

                    <div className="flex gap-4 relative z-10">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <img 
                          src={point.image} 
                          alt={point.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md group-hover:border-[#B197FC] transition-colors"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-bold text-slate-900 text-base font-sans group-hover:text-[#7C3AED] transition-colors">{point.name}</h4>
                            <p className="text-xs text-slate-500 font-semibold font-sans">{point.role}</p>
                          </div>
                          {/* Alert Badge */}
                          <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${point.color} group-hover:bg-white group-hover:shadow-sm transition-all`}>
                            <AlertTriangle size={12} />
                            {point.badge}
                          </span>
                        </div>
                        
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 group-hover:bg-white group-hover:border-[#B197FC]/30 transition-colors">
                          <p className="text-sm text-slate-700 leading-snug font-medium font-sans">
                            &ldquo;{point.quote}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}