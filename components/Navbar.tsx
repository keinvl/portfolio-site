"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { User, Code, Award, Briefcase, Moon, Sun, Layers, Mail } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = React.useState("home");

  // Track scroll position for link activation
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "experiences", "projects", "achievements", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active if section is in view center
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: <User className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />, label: "About", id: "home" },
    { icon: <Layers className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />, label: "Skills", id: "skills" },
    { icon: <Briefcase className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />, label: "Experiences", id: "experiences" },
    { icon: <Code className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />, label: "Works", id: "projects" },
    { icon: <Award className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />, label: "Certificates", id: "achievements" },
    { icon: <Mail className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />, label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
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
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 xl:top-1/2 xl:left-8 xl:-translate-y-1/2 xl:translate-x-0 z-50 transition-all w-[92%] sm:w-auto max-w-md md:max-w-lg xl:max-w-none">
      <div className="flex xl:flex-col items-center justify-between xl:justify-center gap-1 sm:gap-2.5 p-1.5 sm:p-3 bg-white/85 dark:bg-[#0B0B13]/85 backdrop-blur-2xl border border-brand-rose/25 dark:border-brand-slate/40 rounded-full shadow-2xl relative w-full">
        
        {navItems.map((item, i) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={i}
              onClick={() => scrollTo(item.id)}
              className="p-2.5 sm:p-3.5 hover:bg-brand-rose/10 dark:hover:bg-brand-slate/40 rounded-full transition-all group relative cursor-pointer flex-1 xl:flex-initial flex items-center justify-center"
              aria-label={`Scroll to ${item.label}`}
            >
              <span className={`relative z-10 transition-colors ${
                isActive
                  ? "text-brand-slate dark:text-brand-rose font-bold scale-110 block"
                  : "text-brand-slate/60 hover:text-brand-slate dark:text-brand-rose/60 dark:hover:text-brand-cream block"
              }`}>
                {item.icon}
              </span>

              {/* Floating Tooltip Label */}
              <div className="absolute bottom-[140%] left-1/2 -translate-x-1/2 xl:bottom-auto xl:left-[130%] xl:top-1/2 xl:-translate-y-1/2 bg-[#12121E] dark:bg-brand-cream text-white dark:text-brand-dark text-[9px] sm:text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg border border-brand-rose/20 dark:border-brand-slate/30 whitespace-nowrap z-50">
                {item.label}
              </div>

              {/* Highlight backdrop overlay */}
              {isActive && (
                <motion.div
                  layoutId="activeFloatingBackground"
                  className="absolute inset-x-1.5 sm:inset-0 bg-brand-rose/20 dark:bg-brand-slate/30 rounded-full -z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}

        <div className="h-[20px] w-[1px] xl:h-[24px] xl:w-[2px] bg-brand-rose/20 dark:bg-brand-slate/30 mx-0.5 sm:mx-1 xl:my-2 xl:mx-0" />

        {/* Theme mode toggle button */}
        <button
          onClick={toggleTheme}
          className="p-2.5 sm:p-3.5 hover:bg-brand-rose/10 dark:hover:bg-brand-slate/40 rounded-full transition-all text-brand-slate dark:text-yellow-400 cursor-pointer flex-1 xl:flex-initial flex items-center justify-center"
          aria-label="Toggle theme color mode"
          title={theme === "dark" ? "Light Mode" : "Dark Mode"}
        >
          {theme === "dark" ? <Sun className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" /> : <Moon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />}
        </button>
      </div>
    </nav>
  );
}
