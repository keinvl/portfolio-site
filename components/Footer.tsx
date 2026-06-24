"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Heart, Globe, MessageSquare, Code, Terminal } from "lucide-react";

export default function Footer() {
  const [time, setTime] = React.useState("");
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuSections = [
    { label: "About", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Experiences", id: "experiences" },
    { label: "Works", id: "projects" },
    { label: "Certificates", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 40;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="pt-16 pb-12 mt-20 border-t border-brand-rose/20 dark:border-brand-slate/30 bg-[#FAF7F5]/45 dark:bg-[#07070D]/40 text-left relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Segment: Mini Sitemap & Location Clock */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          
          {/* Column 1: Short Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start space-y-4">
            <h3 className="text-lg font-display font-black tracking-tight text-brand-dark dark:text-brand-cream uppercase">
              Keira Lay
            </h3>
            <p className="text-xs text-brand-mauve dark:text-[#C9ADA7]/75 font-medium leading-relaxed max-w-xs">
              Turning curiosity into projects, ideas into solutions, and challenges into opportunities.
            </p>
          </div>

          {/* Column 2: Minimalist Sitemap */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-mono font-black text-brand-slate dark:text-brand-rose/70 uppercase tracking-[0.2em] mb-4">
              Navigation Map
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
              {menuSections.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScrollTo(item.id)}
                  className="text-sm font-sans text-brand-mauve hover:text-brand-rose dark:text-[#C9ADA7]/80 dark:hover:text-brand-rose transition-all duration-200 text-left cursor-pointer font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Location Status & Live Local Time (WIB) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between">
            <div className="flex flex-col items-start md:items-end">
              <h4 className="text-[10px] font-mono font-black text-brand-slate dark:text-brand-rose/70 uppercase tracking-[0.2em] mb-3">
                Current Time
              </h4>
              <div className="flex items-center gap-2 text-brand-dark dark:text-brand-cream">
                <Globe size={13} className="text-brand-rose animate-spin-slow shrink-0" />
                <span className="text-xs font-mono font-black uppercase">
                  Jakarta, ID
                </span>
                <span className="text-xs font-mono text-brand-slate/45 dark:text-[#C9ADA7]/45 select-none">
                  (WIB)
                </span>
              </div>
              <div className="text-2xl font-mono font-black tracking-tight text-brand-slate dark:text-brand-rose mt-1 select-all">
                {time || "00:00:00"}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Engine metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-brand-slate/60 dark:text-brand-rose/60 font-bold uppercase tracking-wider">
            ©2026 Keira Nevrada Lay. All RIghts Reserved.
          </p>
          <p className="text-[10px] font-mono text-brand-slate/70 dark:text-brand-rose/70 flex items-center gap-1.5 justify-center font-bold uppercase tracking-wider">
            <Heart size={12} className="text-brand-rose fill-brand-rose/10 shrink-0" /> Just Getting Started!
          </p>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-brand-rose text-brand-slate hover:bg-brand-mauve dark:hover:bg-[#B5968F] hover:scale-110 active:scale-95 shadow-lg rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group"
          title="Back to top"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </footer>
  );
}
