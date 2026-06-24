"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../components/ThemeContext";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import IntroLoader from "../components/IntroLoader";
import { Code2, Layers, Trophy, BookOpen, Sparkles, Terminal, FileDown, ArrowRight, Heart, Star, GraduationCap, Mail } from "lucide-react";

function HomeContent() {

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B13] text-brand-dark dark:text-brand-cream transition-colors duration-500 relative flex flex-col justify-between">
      
      {/* Decorative Glow Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-brown/12 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-rose/12 blur-[130px] rounded-full" />
      </div>

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-36 pb-20 relative z-10 w-full flex-grow">
        
        {/* HERO SECTION - PREMIUM ABOUT REDESIGN & LAYERED MOCKUP CARD */}
        <section id="home" className="mb-24 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center items-start space-y-6">
              
              {/* Project Availability Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 bg-brand-cream dark:bg-[#12121e] px-4 py-1.5 rounded-full border border-brand-rose/45 dark:border-brand-slate/40 shadow-xs"
              >
                <span className="w-2 h-2 bg-green-500 dark:bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-slate dark:text-brand-rose">
                  Open to work
                </span>
              </motion.div>

              {/* Responsive Typographical Headline & Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-7xl font-display font-black tracking-tighter text-brand-dark dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-brand-cream dark:via-brand-rose dark:to-brand-mauve leading-[1.1]">
                  HI, I'M <span className="text-brand-slate dark:text-brand-rose font-display">KEIRA NEVRADA LAY.</span>
                </h1>
                
                <p className="text-base md:text-lg font-medium text-brand-slate dark:text-brand-cream/90 leading-relaxed max-w-xl">
                  <span className="text-brand-dark dark:text-brand-cream font-bold underline decoration-brand-rose decoration-4 underline-offset-4">Cyber Security</span> enthusiast with a strong interest in threat detection, security monitoring, vulnerability assessment, and secure software development. Passionate about building resilient systems and continuously exploring the evolving cybersecurity landscape.
                </p>
              </motion.div>

              {/* Visual Pill Capsule Badges matching user photograph reference */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="py-1 w-full text-left"
              >
                <div className="flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-rose/60 dark:border-white/10 bg-brand-cream dark:bg-[#12121e] text-xs font-bold text-brand-slate dark:text-[#C9ADA7] shadow-xs select-none transition-transform hover:scale-[1.03] duration-200">
                    Security Analysis
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-rose/60 dark:border-white/10 bg-brand-cream dark:bg-[#12121e] text-xs font-bold text-brand-slate dark:text-[#C9ADA7] shadow-xs select-none transition-transform hover:scale-[1.03] duration-200">
                    Network & Web Security
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-rose/60 dark:border-white/10 bg-brand-cream dark:bg-[#12121e] text-xs font-bold text-brand-slate dark:text-[#C9ADA7] shadow-xs select-none transition-transform hover:scale-[1.03] duration-200">
                    Software Development
                  </span>
                </div>
              </motion.div>

              {/* Premium Call to Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="flex flex-wrap gap-3 pt-2 w-full"
              >
                <a 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group flex items-center gap-2 px-5 py-3 bg-brand-slate hover:bg-brand-slate/90 dark:bg-brand-rose dark:hover:bg-brand-rose/90 text-white dark:text-brand-dark font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-[#12121e] hover:bg-brand-slate/5 dark:hover:bg-white/5 text-brand-slate dark:text-brand-rose border border-brand-rose/35 dark:border-brand-slate/50 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0 shadow-xs"
                >
                  <Mail size={14} />
                  <span>Contact Me</span>
                </a>
              </motion.div>
            </div>

            {/* Right Card Column - High-Fidelity Layered Mockup matches photo reference */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end py-10 lg:py-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                className="relative w-[210px] xs:w-[260px] sm:w-[280px] aspect-[3/4] overflow-visible group lg:mr-[115px] lg:-translate-y-4"
              >
                {/* Visual Portrait Photo with elegant custom styling, glows and borders - Shifted left & up to avoid overlapping */}
                <div className="absolute inset-0 -translate-x-6 xs:-translate-x-10 sm:-translate-x-14 lg:-translate-x-20 -translate-y-6 xs:-translate-y-8 sm:-translate-y-10 lg:-translate-y-12 rounded-[2rem] bg-gradient-to-tr from-brand-slate/10 via-brand-rose/25 to-brand-mauve/15 dark:from-[#12121e] dark:to-brand-slate/30 p-2 shadow-2xl border border-brand-rose/15 dark:border-brand-slate/30 overflow-visible transition-all duration-300">
                  <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-brand-slate-light dark:bg-brand-dark/40 relative">
                    {/* Premium gradient overlay mapping to the brand slate design */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-brand-rose/5 z-10 rounded-[1.8rem]" />
                    
                    {/* Glowing thin frame outline overlay */}
                    <div className="absolute inset-3 rounded-[1.5rem] border border-white/10 z-10 pointer-events-none transition-all duration-300 group-hover:inset-4" />
                    
                    {/* High Quality Studio Portrait Placeholder from Unsplash (editable manually later) */}
                    <img
                      src="/me.jpeg"
                      alt="Keira Lay"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[15%_center] drop-shadow-lg contrast-[1.05] brightness-[1.05] dark:brightness-[0.95] dark:contrast-[1.1] transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
 
                {/* Overlapping Glassmorphic President University Mockup Card - High-Fidelity restoration with premium layout */}
                <motion.div
                  initial={{ x: 15, y: 25, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 85, damping: 15 }}
                  className="absolute -bottom-8 -right-4 xs:-right-8 sm:-right-[45px] lg:-right-[115px] w-[220px] xs:w-[285px] sm:w-[310px] bg-brand-slate-light/95 dark:bg-brand-dark/95 backdrop-blur-md rounded-[2rem] border border-brand-rose/25 dark:border-brand-slate/40 p-3 xs:p-4.5 shadow-2xl z-20 flex flex-col justify-between"
                >
                  {/* Top content block - Custom asymmetric university headers */}
                  <div className="flex items-center gap-4 pb-4 border-b border-brand-rose/15 dark:border-brand-slate/30">
                    
                    {/* High-Fidelity Calendar-style Date/GPA Badge */}
                    <div className="flex flex-col items-center justify-center bg-white/80 dark:bg-[#12121e]/85 px-2.5 py-2 rounded-2xl border border-brand-rose/10 shadow-xs min-w-[58px] h-[58px]">
                      <span className="text-[7.5px] font-mono uppercase tracking-[0.15em] text-brand-mauve dark:text-brand-rose/60 font-black leading-none">
                        GPA
                      </span>
                      <span className="text-xl font-display font-black tracking-tight text-brand-slate dark:text-brand-rose mt-1 leading-none font-sans">
                        3.99
                      </span>
                    </div>

                    {/* Left: Beautifully stylized custom university title and brand */}
                    <div className="flex-grow flex flex-col text-left">
                      <h3 className="text-xl sm:text-2xl font-display font-black tracking-tighter italic text-brand-slate dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-brand-rose dark:to-brand-cream leading-none uppercase select-none">
                        Informatics
                      </h3>
                      
                      <span className="text-[10px] font-mono tracking-[0.15em] text-brand-mauve dark:text-[#C9ADA7]/80 font-bold uppercase mt-1 block">
                        President University
                      </span>
                    </div>

                  </div>

                  {/* Overlapping dynamic circular action button matching the iconic accent overlay detail */}
                  <div className="absolute -bottom-3.5 -left-3.5 w-10 h-10 rounded-full bg-brand-slate dark:bg-brand-rose flex items-center justify-center text-brand-cream dark:text-brand-dark shadow-xl border border-white dark:border-brand-dark z-30 transition-transform hover:scale-110 duration-200 cursor-pointer">
                    <GraduationCap size={15} />
                  </div>

                  {/* Bottom metrics in a floating seamless capsule pill exactly matching the reference layout */}
                  <div className="mt-4 bg-white/70 dark:bg-[#12121e]/70 backdrop-blur-md rounded-[1.4rem] border border-brand-rose/15 dark:border-brand-slate/40 py-2.5 px-3 shadow-lg flex items-center justify-between w-full">
                    
                    {/* Column 1: Batch */}
                    <div className="flex flex-col items-center flex-1">
                      <BookOpen size={13} className="text-brand-rose fill-brand-rose/20 mb-1 transition-transform hover:scale-110 duration-150" />
                      <span className="text-[9.5px] sm:text-[10.5px] font-mono font-black text-brand-slate dark:text-brand-cream leading-none text-center uppercase whitespace-nowrap">
                        BATCH 24
                      </span>
                      <span className="text-[7px] font-mono uppercase tracking-wider text-brand-slate/40 dark:text-[#C9ADA7]/40 mt-0.5 font-bold">
                        Class
                      </span>
                    </div>
 
                    {/* Seamless vertical divider */}
                    <div className="w-[1px] h-5.5 border-r border-dashed border-brand-rose/25 dark:border-brand-slate/30"></div>

                    {/* Column 2: Status */}
                    <div className="flex flex-col items-center flex-1">
                      <Trophy size={13} className="text-brand-slate dark:text-brand-rose fill-brand-rose/10 mb-1 transition-transform hover:scale-110 duration-150" />
                      <span className="text-[9.5px] sm:text-[10.5px] font-mono font-black text-brand-slate dark:text-brand-cream leading-none text-center uppercase whitespace-nowrap">
                        ACTIVE
                      </span>
                      <span className="text-[7px] font-mono uppercase tracking-wider text-brand-slate/40 dark:text-[#C9ADA7]/40 mt-0.5 font-bold">
                        Status
                      </span>
                    </div>

                    {/* Seamless vertical divider */}
                    <div className="w-[1px] h-5.5 border-r border-dashed border-brand-rose/25 dark:border-brand-slate/30"></div>

                    {/* Column 3: Focus Major */}
                    <div className="flex flex-col items-center flex-[1.2] min-w-[72px]">
                      <GraduationCap size={13} className="text-brand-mauve mb-1 transition-transform hover:scale-110 duration-150" />
                      <span className="text-[9.5px] sm:text-[10.5px] font-mono font-black text-brand-slate dark:text-brand-cream leading-none text-center uppercase whitespace-nowrap">
                        CYBER SEC
                      </span>
                      <span className="text-[7px] font-mono uppercase tracking-wider text-brand-slate/40 dark:text-[#C9ADA7]/40 mt-0.5 font-bold">
                        Major
                      </span>
                    </div>

                  </div>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <Skills />

        {/* EXPERIENCES SECTION */}
        <Experiences />

        {/* PROJECTS SECTION */}
        <Projects />

        {/* ACHIEVEMENTS/CERTIFICATES PANEL */}
        <Achievements />

        {/* SOCIALS/CONTACT GRID SECTION */}
        <Socials />

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <IntroLoader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <HomeContent />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
