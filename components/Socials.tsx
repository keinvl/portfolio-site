"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ThumbsUp, ArrowUpRight, Copy, Check } from "lucide-react";

export default function Socials() {
  const [likes, setLikes] = React.useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("adam_likes");
      return stored ? parseInt(stored, 10) : 142;
    }
    return 142;
  });

  const [hasLiked, setHasLiked] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem("adam_likes", newLikes.toString());
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("keiranevrada@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-32 pb-20 mb-12">
      <div className="text-left flex flex-col items-start mb-16">
        <span className="text-xs font-mono uppercase bg-brand-rose/20 dark:bg-brand-slate/40 text-brand-slate dark:text-brand-rose px-3 py-1 rounded-full">
          Get in Touch
        </span>
        <h2 className="text-4xl font-display font-bold mt-4 text-brand-dark dark:text-brand-cream tracking-tight">
          Have an Idea?
        </h2>
        <p className="text-xs text-brand-slate/70 dark:text-brand-rose font-mono mt-2 font-bold uppercase tracking-wider leading-relaxed">
          Every great opportunity starts with a conversation. Let's build something meaningful together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
        
        {/* Large Left Card - Interactive Bio & Like (col-span-7) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="lg:col-span-7 p-8 rounded-[2.2rem] bg-white dark:bg-[#12121e] border border-brand-rose/45 dark:border-brand-slate/40 flex flex-col justify-between group relative overflow-hidden min-h-[320px] transition-all duration-300 shadow-md hover:shadow-xl"
        >
          {/* Subtle overlay decorative circle */}
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-brand-rose/10 pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          
          <div>
            <span className="text-xs font-mono uppercase bg-brand-rose/25 dark:bg-brand-slate/40 text-brand-slate dark:text-brand-rose px-3 py-1 rounded-md font-extrabold border border-brand-rose/30">
              One Last Thing
            </span>
            <h3 className="text-3xl font-display font-bold mt-4 mb-2 text-brand-dark dark:text-brand-cream tracking-tight">
              The Journey Is Just Beginning.
            </h3>
            <p className="text-sm leading-relaxed text-brand-slate dark:text-brand-cream/80 mb-6 font-medium">
              Every project, competition, and experience has shaped my journey and I'm excited to see where the next one leads!            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center mt-4 relative z-10">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs cursor-pointer tracking-wider uppercase transition-all ${
                hasLiked
                  ? "bg-brand-slate text-white dark:bg-brand-rose dark:text-brand-dark cursor-default"
                  : "bg-brand-slate-light hover:bg-brand-rose/25 text-brand-slate dark:bg-brand-slate/30 dark:text-brand-cream dark:hover:bg-brand-slate/50 border border-brand-rose/35 shadow-xs"
              }`}
            >
              <ThumbsUp size={14} className={hasLiked ? "fill-white dark:fill-brand-dark" : ""} />
              {hasLiked ? "Liked!" : "Send High Five"} ({likes})
            </button>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs cursor-pointer tracking-wider uppercase bg-white dark:bg-brand-dark hover:bg-brand-rose/15 text-brand-slate border border-brand-rose/40 hover:border-brand-rose dark:hover:bg-brand-slate/20 transition-all shadow-xs"
            >
              <Mail size={14} />
              {copied ? "Copied Email!" : "Copy Email"}
            </button>
          </div>
        </motion.div>

        {/* Right side - 3 Premium Column Bento Cards exactly matching the uploaded reference (col-span-5) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          
          {/* Card 1: GitHub */}
          <motion.a
            href="https://github.com/keinvl"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between items-center text-center p-6 rounded-[2.2rem] bg-white dark:bg-[#12121e]/85 border border-brand-rose/45 dark:border-brand-slate/40 shadow-sm hover:shadow-xl hover:border-brand-rose dark:hover:border-brand-rose transition-all duration-300 group relative overflow-hidden"
          >
            {/* Top Tagline Container */}
            <div className="flex flex-col items-center">
              <span className="text-[9px] font-mono tracking-[0.18em] text-brand-slate dark:text-brand-rose/60 font-black uppercase mb-1">
                CODEBASE
              </span>
            </div>

            {/* Middle Main Content */}
            <div className="my-6 flex flex-col items-center">
              <div className="p-3.5 rounded-2xl bg-brand-slate-light dark:bg-brand-dark/50 text-brand-slate dark:text-brand-rose/80 border border-brand-rose/30 group-hover:scale-110 transition-transform duration-300 mb-3 shadow-xs">
                <FaGithub size={22} />
              </div>
              <h4 className="text-xl font-display font-black tracking-tight text-brand-dark dark:text-brand-cream">
                GitHub
              </h4>
            </div>

            {/* Bottom Status/Action Pill matching sketch layout */}
            <div className="w-full bg-brand-slate-light dark:bg-brand-dark/40 border border-brand-rose/35 group-hover:bg-brand-rose/25 group-hover:border-brand-rose/60 py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 transition-all duration-300 shadow-xs">
              <span className="text-[10px] font-mono font-black uppercase text-brand-slate dark:text-[#C9ADA7] group-hover:text-brand-rose tracking-wider">
                EXPLORE
              </span>
              <ArrowUpRight size={11} className="text-brand-slate/50 dark:text-[#C9ADA7]/50 group-hover:text-brand-rose transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>

          {/* Card 2: LinkedIn (Highlighted Rose/Mauve/Brown Theme matching central brand card) */}
          <motion.a
            href="https://www.linkedin.com/in/keira-nevrada-lay-b7940a26b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between items-center text-center p-6 rounded-[2.2rem] bg-gradient-to-b from-brand-rose/35 to-white border-2 border-brand-brown dark:from-brand-slate/30 dark:to-[#12121e]/85 dark:border-brand-slate/50 shadow-md hover:shadow-2xl hover:border-brand-rose transition-all duration-300 group relative overflow-visible"
          >
            {/* Glowing Accent Ring for Highlight Card */}
            <div className="absolute -inset-px rounded-[2.2rem] bg-gradient-to-b from-brand-brown/25 to-brand-rose/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 blur-md" />

            {/* Top Tagline Container */}
            <div className="flex flex-col items-center">
              <span className="text-[9px] font-mono tracking-[0.18em] text-brand-brown dark:text-brand-rose/80 font-black uppercase mb-1">
                NETWORK
              </span>
            </div>

            {/* Middle Main Content */}
            <div className="my-6 flex flex-col items-center">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-brand-dark/70 text-brand-brown dark:text-brand-rose border border-brand-rose/30 group-hover:scale-110 transition-transform duration-300 mb-3 shadow-xs">
                <FaLinkedin size={22} />
              </div>
              <h4 className="text-xl font-display font-black tracking-tight text-brand-slate dark:text-brand-cream">
                LinkedIn
              </h4>
            </div>

            {/* Bottom Status/Action Pill Highlighted matching sketch layout */}
            <div className="w-full bg-brand-brown text-brand-cream dark:bg-brand-rose dark:text-brand-dark py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-brand-brown/15 dark:shadow-brand-rose/10 z-10">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider">
                CONNECT
              </span>
              <ArrowUpRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>

          {/* Card 3: Email (Interactive Copy Action) */}
          <motion.div
            onClick={handleCopyEmail}
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between items-center text-center p-6 rounded-[2.2rem] bg-white dark:bg-[#12121e]/85 border border-brand-rose/45 dark:border-brand-slate/40 shadow-sm hover:shadow-xl hover:border-brand-rose dark:hover:border-brand-rose transition-all duration-300 group relative overflow-hidden cursor-pointer"
          >
            {/* Top Tagline Container */}
            <div className="flex flex-col items-center">
              <span className="text-[9px] font-mono tracking-[0.18em] text-brand-slate dark:text-brand-rose/60 font-black uppercase mb-1">
                CONTACT
              </span>
            </div>

            {/* Middle Main Content */}
            <div className="my-6 flex flex-col items-center">
              <div className="p-3.5 rounded-2xl bg-brand-slate-light dark:bg-brand-dark/50 text-brand-slate dark:text-brand-rose/80 border border-brand-rose/30 group-hover:scale-110 transition-transform duration-300 mb-3 shadow-xs">
                <Mail size={22} className="group-hover:rotate-6 transition-transform" />
              </div>
              <h4 className="text-xl font-display font-black tracking-tight text-brand-dark dark:text-brand-cream">
                Email
              </h4>
            </div>

            {/* Bottom Status/Action Pill matching sketch layout */}
            <div className={`w-full py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 transition-all duration-300 border ${
              copied 
                ? "bg-green-500 border-green-500 text-white" 
                : "bg-brand-slate-light dark:bg-brand-dark/40 border-brand-rose/35 group-hover:bg-brand-rose/25 group-hover:border-brand-rose/60"
            }`}>
              <span className={`text-[10px] font-mono font-black uppercase tracking-wider ${
                copied ? "text-white" : "text-brand-slate dark:text-[#C9ADA7] group-hover:text-brand-rose"
              }`}>
                {copied ? "COPIED!" : "COPY"}
              </span>
              {copied ? (
                <Check size={11} className="text-white" />
              ) : (
                <Copy size={11} className="text-brand-slate/50 dark:text-[#C9ADA7]/50 group-hover:text-brand-rose transition-transform" />
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
