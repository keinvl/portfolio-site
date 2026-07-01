"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, Trophy, Medal, Sparkles, ExternalLink } from "lucide-react";
import { Achievement } from "../types";

export default function Achievements() {
  const [activeCategory, setActiveCategory] = React.useState<"All" | "Awards" | "Certificates">("All");

  const achievementsList: Achievement[] = [
    {
      id: "ach-1",
      title: "Gold Award, Global Start-Up Design Thinking Hackathon 2025",
      issuer: "Chung-Ang University and COSS Immersive Media, South Korea",
      date: "Sep 2025",
      category: "Awards",
      description: "Secured Gold Award in an international hackathon in South Korea by delivering an innovative technology solution through design thinking and cross-cultural collaboration.",
    },
    {
      id: "ach-2",
      title: "Silver Award, 2025 Global Startup Competition",
      issuer: "Chung-Ang University and COSS Immersive Media, South Korea",
      date: "Nov 2025",
      category: "Awards",
      description: "Awarded Silver at an international startup competition in South Korea for developing innovative technology solutions and presenting impactful business ideas.",
    },
  ];

  const categories: Array<"All" | "Awards" | "Certificates"> = ["All", "Awards", "Certificates"];

  const filteredAchievements = activeCategory === "All"
    ? achievementsList
    : achievementsList.filter(item => item.category === activeCategory);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Premium subtle background glow details */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-rose/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-[#C9ADA7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-2">
          <div>
            <span className="text-xs font-mono uppercase bg-brand-rose/20 dark:bg-brand-slate/40 text-brand-slate dark:text-brand-rose px-3 py-1 rounded-full">
              Notable Achievements
            </span>
            <h2 className="text-4xl font-display font-extrabold text-brand-dark dark:text-brand-cream tracking-tight sm:text-5xl mt-5">
              Moments I'm Proud Of
            </h2>
            <p className="text-xs text-brand-slate/70 dark:text-brand-rose font-mono mt-3 font-bold uppercase tracking-wider leading-relaxed">
              From international competitions to personal milestones, each achievement represents growth, resilience, and impact.
            </p>
          </div>

          {/* Premium Tab Controls */}
          <div className="flex overflow-x-auto no-scrollbar bg-brand-cream dark:bg-brand-dark/60 p-1 rounded-xl border border-brand-rose/40 dark:border-brand-slate/40 self-start md:self-end shadow-sm">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative w-28 md:w-32 py-2 text-xs font-mono font-bold uppercase tracking-wider cursor-pointer rounded-lg transition-colors duration-200 select-none flex items-center justify-center text-center"
                >
                  <span className={`relative z-10 transition-colors duration-200 ${isSelected ? "text-white dark:text-brand-dark" : "text-brand-slate/80 dark:text-brand-rose/80 hover:text-brand-dark dark:hover:text-brand-cream"}`}>
                    {cat}
                  </span>

                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryBackgroundDetails"
                      className="absolute inset-0 bg-brand-dark dark:bg-brand-rose rounded-lg z-0 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Premium Minimal Bento Grid styled cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, idx) => {
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-brand-slate/10 border border-brand-rose/45 dark:border-brand-slate/30 hover:border-brand-brown dark:hover:border-brand-rose shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
                >
                  <div>
                    {/* Upper Metadata line */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1.5">
                        <Award size={15} className="text-brand-rose dark:text-brand-mauve" />
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-rose/80 dark:text-brand-mauve/80">
                          {item.category}
                        </span>
                      </div>
                      
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-slate/50 dark:text-brand-rose/50">
                        {item.date}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-display font-semibold text-brand-dark dark:text-brand-cream group-hover:text-brand-rose transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>
                    
                    {/* Issuer label with clean brand ornament */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-1 h-3 rounded-full bg-brand-rose" />
                      <span className="text-xs font-bold text-brand-slate dark:text-brand-rose-light/90 tracking-wide">
                        {item.issuer}
                      </span>
                    </div>

                    {/* Description with precise reading size and improved card spacing */}
                    <p className="text-[13px] leading-relaxed text-brand-slate/80 dark:text-brand-cream/80 font-normal mt-4 border-t border-brand-rose/5 pt-3">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
    </section>
  );
}
