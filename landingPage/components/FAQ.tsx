"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Image from "next/image";

const questions = [
  {
    question: "How does the AI screening actually work?",
    answer: "Our AI doesn't just look for keywords. It uses semantic analysis to understand the context of a candidate's experience, comparing it against your specific job requirements to surface the best potential matches."
  },
  {
    question: "Can I integrate this with my existing ATS?",
    answer: "Yes. We support 2-way sync with Greenhouse, Lever, Workday, and 20+ other platforms. This means you can work from RecruiterAI and have everything automatically update in your main system of record."
  },
  {
    question: "Is my candidate data secure?",
    answer: "Security is our priority. We are SOC2 Type II compliant, GDPR ready, and use enterprise-grade encryption for all data at rest and in transit. Your data is never used to train our public models."
  },
  {
    question: "What happens if I need more seats?",
    answer: "Our pricing scales with you. You can add or remove seats at any time from your dashboard. For enterprise teams larger than 20, we offer volume discounts and a dedicated account manager."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-gray-50/50 relative overflow-hidden">
      
      {/* 1. Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Sticky Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Image 
                  src="/faq.svg" 
                  alt="FAQ" 
                  width={600} 
                  height={120} 
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* FIXED: Reduced margin-bottom (mb-8) to bring button closer */}
              <p className="text-dark-light text-lg leading-relaxed mb-8">
                Here are the common questions that users ask before they start using our product. If you have any other questions you&apos;d like to ask, feel free to contact us.
              </p>
              
              <button className="group flex items-center gap-2 text-primary font-semibold text-lg hover:text-purple-600 transition-colors">
                Contact our support team <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Stacked List */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {questions.map((q, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group"
              >
                 {/* CHANGE 1: Thicker Gradient Border (-inset-[3px]) 
                    CHANGE 2: Higher Opacity on Hover (opacity-100) 
                 */}
                 <div className={`absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-0 transition-opacity duration-300 ${openIndex === i ? "opacity-100" : "group-hover:opacity-100 blur-[2px] group-hover:blur-sm"}`} />

                <div className={`relative bg-white rounded-xl overflow-hidden transition-all duration-300 border ${openIndex === i ? "border-transparent" : "border-gray-200 group-hover:border-transparent"}`}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <span className={`text-xl font-bold transition-colors duration-300 ${openIndex === i ? "text-dark" : "text-dark-medium group-hover:text-dark"}`}>
                      {q.question}
                    </span>
                    
                    {/* Minimalist Icon */}
                    <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                       openIndex === i ? "bg-primary/10 text-primary rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-primary/5 group-hover:text-primary"
                    }`}>
                      {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 md:px-8 pb-8 text-dark-light leading-relaxed text-lg border-t border-gray-50/50 pt-4">
                          {q.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}