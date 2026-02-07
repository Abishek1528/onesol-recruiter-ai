"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Configuration ---
const PRIMARY_PURPLE = "#B197FC";
const NAV_BG_BLUE = "#A5D8FF"; // Requested Background Color

const navLinks = ["Product", "Solutions", "Pricing", "Resources"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "py-3 backdrop-blur-xl shadow-sm" // Height reduction on scroll
            : "bg-transparent py-5"
        }`}
        style={{
          // Apply the requested blue background ONLY when scrolled, with some transparency
          backgroundColor: scrolled ? `${NAV_BG_BLUE}E6` : "transparent", // E6 = 90% opacity
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between relative z-10">
          
          {/* --- LOGO --- */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden bg-slate-900 shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B197FC] via-transparent to-transparent" />
              
              <span className="relative z-10 font-bold text-lg" style={{ color: PRIMARY_PURPLE }}>R</span>
            </div>
            <span className="text-xl font-bold tracking-tight transition-colors" style={{ color: scrolled ? "#1e293b" : "#1e293b" }}>
              Recruiter<span style={{ color: PRIMARY_PURPLE }}>AI</span>
            </span>
          </div>

          {/* --- DESKTOP LINKS --- */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-bold transition-colors duration-200 relative group"
                style={{ 
                    // Using purple for text as requested, slightly darker for readability on blue
                    color: scrolled ? "#5B21B6" : "#4B5563" 
                }} 
              >
                {item}
                <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" 
                    style={{ backgroundColor: PRIMARY_PURPLE }}
                />
              </a>
            ))}
          </div>

          {/* --- DESKTOP BUTTONS --- */}
          <div className="hidden md:flex items-center gap-4">
            <button 
                className="text-sm font-bold px-4 py-2 transition-colors"
                style={{ color: scrolled ? "#5B21B6" : "#4B5563" }}
            >
              Sign In
            </button>
            <button 
              className="group relative px-6 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg shadow-purple-900/20 overflow-hidden transition-all hover:scale-105 hover:shadow-purple-900/40"
              style={{ backgroundColor: '#1F2937' }} // Dark Slate base
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial 
                <ArrowRight size={14} className="text-[#B197FC]" />
              </span>
            </button>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            className="md:hidden text-slate-700 hover:text-slate-900 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- PROFESSIONAL GRADIENT SEPARATOR LINE --- */}
        <div 
          className={`absolute bottom-0 left-0 w-full h-[1px] transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Gradient: Transparent -> Purple -> Transparent */}
          <div 
            className="w-full h-full"
            style={{ 
                background: `linear-gradient(90deg, transparent, ${PRIMARY_PURPLE}, transparent)` 
            }} 
          />
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-white/95 backdrop-blur-xl border-b border-purple-100 p-6 md:hidden shadow-2xl"
            style={{ backgroundColor: `${NAV_BG_BLUE}F2` }} // Mobile menu also uses the blue
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-lg font-bold py-3 border-b border-purple-200/30 hover:pl-2 transition-all"
                  style={{ color: "#5B21B6" }} // Dark purple for text
                >
                  {item}
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <button className="w-full py-3 font-semibold transition-colors" style={{ color: "#5B21B6" }}>
                  Sign In
                </button>
                <button className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-semibold shadow-xl shadow-purple-900/20 active:scale-95 transition-all flex justify-center items-center gap-2">
                  Start Free Trial
                  <ArrowRight size={16} className="text-[#B197FC]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}