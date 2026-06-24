"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, ChevronRight, GraduationCap } from "lucide-react";
import { Experience } from "../types";

export default function Experiences() {
  const experiences: Experience[] = [
    {
      id: "exp-1",
      role: "President University Student Ambassador",
      company: "Admission Department of President University",
      duration: "Sep 2025 – Present",
      location: "Cikarang, Indonesia",
      description: [
        "Represent President University in student outreach, promotional, and engagement activities.",
        "Assist prospective students and parents by providing information about academic programs and campus life."
      ],
      skills: []
    },
    {
      id: "exp-2",
      role: "Member of Research & Technology Division",
      company: "President University Major Association Informatics (PUMA Informatics)",
      duration: "Oct 2024 – Oct 2025",
      location: "Cikarang, Indonesia",
      description: [
        "Participated in research and technology initiatives to support student learning and technical development.",
        "Collaborated with team members in organizing technology-related activities, workshops, and knowledge-sharing sessions."
      ],
      skills: []
    },
    {
      id: "exp-3",
      role: "Master of Ceremony (MC)",
      company: "Faculty of Computer Science, President University",
      duration: "Dec 2024 – Sep 2025",
      location: "Cikarang, Indonesia",
      description: [
        "Hosted multiple academic and technology-focused events, including orientation programs, AI & Data Science talk shows, and international discussions featuring speakers from Indonesia and Japan.",
        "Facilitated audience engagement and ensured effective communication between speakers, organizers, and participants.",
        "Demonstrated strong public speaking, communication, and event coordination skills in large-scale academic environments."
      ],
      skills: []
    },
    {
      id: "exp-4",
      role: "Person In Charge (PIC) of Event Organizer",
      company: "President University Major Association Informatics (PUMA Informatics)",
      duration: "Oct 2024 – Dec 2024",
      location: "Cikarang, Indonesia",
      description: [
        "Coordinated cross-functional teams and managed event operations for over 100 participants.",
        "Ensured successful event delivery through effective problem-solving, scheduling, and stakeholder coordination."
      ],
      skills: []
    }
  ];

  const [activeTab, setActiveTab] = React.useState<string>(experiences[0].id);

  return (
    <section id="experiences" className="py-24 relative overflow-hidden">
      
      {/* Decorative backdrop glow */}
      <div className="absolute right-[-10%] top-[20%] w-[350px] h-[350px] bg-brand-rose/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[-10%] w-[250px] h-[250px] bg-brand-mauve/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full">
        
        {/* Header Block */}
        <div className="text-left flex flex-col items-start mb-16">
          <span className="text-xs font-mono uppercase bg-brand-rose/20 dark:bg-brand-slate/40 text-brand-slate dark:text-brand-rose px-3 py-1 rounded-full">
            Journeys & Milestones
          </span>
          <h2 className="text-4xl font-display font-bold mt-4 text-brand-dark dark:text-brand-cream tracking-tight">
            Experiences That Shaped Me
          </h2>
          <p className="text-xs text-brand-slate/70 dark:text-brand-rose font-mono mt-2 font-bold uppercase tracking-wider leading-relaxed">
            Developing leadership, communication, and teamwork skills alongside my journey in cybersecurity and software development.
          </p>
        </div>

        {/* Dynamic Responsive Tabbed Board */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left: Tab selectors & Pagination Dots */}
          <div className="md:col-span-4 flex flex-col gap-4 md:sticky md:top-28">
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto pb-4 md:pb-0 gap-2 border-b md:border-b-0 md:border-l border-brand-rose/40 dark:border-brand-slate/40 md:max-h-[380px] pr-2 no-scrollbar">
              {experiences.map((exp) => {
                const isActive = activeTab === exp.id;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(exp.id)}
                    className={`relative text-left px-4 py-3.5 md:py-4 md:pl-5 rounded-xl md:rounded-r-xl md:rounded-l-none transition-all duration-300 font-display font-black text-[13px] md:text-[15px] uppercase tracking-normal whitespace-nowrap md:whitespace-normal cursor-pointer flex-grow md:flex-grow-0 shrink-0 flex items-center justify-between group ${
                      isActive
                        ? "text-brand-slate dark:text-brand-rose bg-brand-cream dark:bg-brand-dark border-l-2 md:border-l-4 border-brand-rose dark:border-brand-rose"
                        : "text-brand-mauve hover:text-brand-slate dark:hover:text-[#C9ADA7] hover:bg-brand-cream/45 dark:hover:bg-brand-dark/30"
                    }`}
                  >
                    <div className="flex flex-col items-start pr-2">
                      <span className="leading-tight">{exp.role}</span>
                      <span className="text-[10px] md:text-xs font-mono tracking-normal font-medium normal-case opacity-65 mt-1.5 group-hover:opacity-100 block">
                        {exp.duration}
                      </span>
                    </div>
                    <ChevronRight size={16} className={`hidden md:block transition-transform duration-300 shrink-0 ${
                      isActive ? "translate-x-1 text-brand-rose" : "opacity-0 group-hover:opacity-40"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Premium Dots Pagination Indicator */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 mt-1 px-1">
              <div className="flex items-center gap-1.5">
                {experiences.map((exp, index) => {
                  const isActive = activeTab === exp.id;
                  return (
                    <button
                      key={`dot-${exp.id}`}
                      onClick={() => setActiveTab(exp.id)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? "w-6 bg-brand-rose" 
                          : "w-2 bg-brand-rose/25 hover:bg-brand-rose/55"
                      }`}
                      title={exp.company}
                      aria-label={`Go to ${exp.company}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Detailed panels */}
          <div className="md:col-span-8 bg-brand-cream/40 dark:bg-[#12121e]/40 border border-brand-rose/55 dark:border-brand-slate/40 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-lg min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {experiences.map((exp) => {
                if (exp.id !== activeTab) return null;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex-grow flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Role title and metadata */}
                      <div className="border-b border-brand-rose/15 dark:border-brand-slate/30 pb-5">
                        <h3 className="text-xl lg:text-2xl font-display font-black text-brand-slate dark:text-white uppercase leading-tight tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="mt-3">
                          <span className="text-brand-rose text-[14px] font-mono font-bold block mb-1">
                            @{exp.company}
                          </span>
                          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-mono font-bold text-brand-slate/70 dark:text-[#C9ADA7]">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={13} className="text-brand-rose/85 shrink-0" /> {exp.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={13} className="text-brand-rose/85 shrink-0" /> {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description Bullet Points */}
                      <ul className="space-y-3.5 mt-6 text-left">
                        {exp.description.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-rose mt-2 shrink-0 animate-pulse" />
                            <p className="text-sm text-brand-slate dark:text-brand-cream/90 leading-relaxed font-normal">
                              {bullet}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
