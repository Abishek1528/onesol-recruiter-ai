'use client'

export default function LogoTicker() {
  const logos = ["LinkedIn", "Naukri.com", "Indeed", "AngelList", "Instahyre", "Wellfound", "Glassdoor", "Monster"];
  
  // PALETTE:
  // #B197FC (Purple) -> Used for active hover state

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      
      {/* --- Top Decorative Line --- */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#D0BCFF] opacity-30"></div>

      <div className="container mx-auto px-4 text-center mb-10">
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">
            Trusted Ecosystem
        </h3>
        <p className="text-4xl font-bold text-slate-900">
            Post Once, Reach Everywhere
        </p>
      </div>

      {/* --- Marquee Container --- */}
      <div 
        className="relative flex overflow-hidden"
        style={{
            // Smooth fade-out edges
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        {/* Increased gap from gap-12 to gap-24 for more space */}
        <div 
          className="whitespace-nowrap flex gap-24 px-4 items-center group"
          style={{
            animation: 'marquee 20s linear infinite',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)'
          }}
        >
          {/* Tripled list for seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-3xl font-extrabold cursor-pointer select-none transition-all duration-200 ease-out hover:text-[#B197FC] hover:scale-105 text-slate-300 group-hover:[&:not(:hover)]:opacity-50"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* --- Bottom Decorative Line --- */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#A5D8FF] opacity-30"></div>
    </section>
  );
}