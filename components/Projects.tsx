"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Tag, Calendar, Briefcase, ChevronRight, Layers, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isExpandedImage, setIsExpandedImage] = React.useState<boolean>(false);

  const projectList: Project[] = [
    {
      id: "pro-1",
      title: "Capture The Flag (CTF)",
      description: "Hands-on cybersecurity challenges focused on vulnerability discovery, exploitation, digital forensics, cryptography, and security analysis.",
      detailedDescription: "Participated in Capture The Flag (CTF) challenges and accumulated over 2,800 points across multiple cybersecurity domains. Solved challenges involving web exploitation, cryptography, OSINT, digital forensics, and miscellaneous security concepts. Applied analytical thinking and problem-solving techniques to identify vulnerabilities, investigate security scenarios, and strengthen practical cybersecurity skills in controlled environments.",
      category: "Web App",
      tags: ["Cyber Security", "CTF", "Web Security", "Cryptography", "OSINT", "Digital Forensics", "Vulnerability Assessment"],
      imageUrl: "/images/ctf.png",
      accentGradient: "from-[#9A8C98] to-[#C9ADA7]",
      role: "Participant",
      duration: "1 Week (2025)",
      link: "#"
    },
    {
      id: "pro-2",
      title: "Vision Mate",
      description: "AI-powered assistive application that helps visually impaired users through real-time object detection and audio-based guidance.",
      detailedDescription: "Vision Mate is an assistive application designed to improve accessibility for visually impaired users. The application integrates real-time object detection and audio feedback to help users better understand their surroundings. Contributed to front-end development and user experience optimization while supporting the integration of AI-powered computer vision features. Developed as part of an international innovation and design-thinking competition focused on inclusive technology solutions.",
      category: "Mobile Design",
      tags: ["Python", "TypeScript", "Computer Vision", "Artificial Intelligence", "Accessibility", "UI/UX", "Object Detection", "Mobile Development", "Assistive Technology"],
      imageUrl: "/images/vision.png",
      githubUrl: "https://github.com/keinvl/WalkingStickApp",
      accentGradient: "from-[#F2E9E4] to-[#C9ADA7]",
      role: "Front-End Developer",
      duration: "4 Days (2025)",
      link: "#"
    },
    {
      id: "pro-3",
      title: "Whispxr",
      description: "End-to-end encrypted messaging platform built with hybrid RSA-AES encryption for secure real-time communication.",
      detailedDescription: "Whispxr is a secure messaging platform that prioritizes user privacy through end-to-end encryption. Built with a hybrid RSA-AES encryption approach, it ensures that all communications remain private and tamper-proof. The platform features a clean, intuitive interface designed for seamless real-time communication.",
      category: "Web App",
      tags: ["React", "Next.js","TypeScript", "Firebase", "Tailwind CSS", "End-to-End Encryption", "RSA", "AES", "Real-Time Communication"],
      imageUrl: "/images/whispxr.png",
      githubUrl: "https://github.com/geraldman/whispxr",
      demoUrl: "https://whispxr.vercel.app/",
      accentGradient: "from-[#4A4E69] to-[#9A8C98]",
      role: "Front-End Developer",
      duration: "1 Month (2026)",
      link: "#"
    }
  ];


  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono uppercase bg-brand-rose/20 dark:bg-brand-slate/40 text-brand-slate dark:text-brand-rose px-3 py-1 rounded-full">
            Recent Projects
          </span>
          <h2 className="text-4xl font-display font-bold mt-4 text-brand-dark dark:text-brand-cream tracking-tight">
            What I've Been Building
          </h2>
          <p className="text-xs text-brand-slate/70 dark:text-brand-rose font-mono mt-2 font-bold uppercase tracking-wider leading-relaxed">
            A collection of projects where cybersecurity, software development, and innovation come together to solve real-world challenges.
          </p>
        </div>


      </div>

      {/* Projects Grid Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectList.map((project) => (
          <motion.div
            key={project.id}
            layout
            onClick={() => setSelectedProject(project)}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-brand-slate/10 border border-brand-rose/45 dark:border-brand-slate/30 cursor-pointer shadow-sm hover:shadow-md hover:border-brand-brown dark:hover:border-brand-rose transition-all flex flex-col justify-between"
          >
            {/* Visual Header Grid Gradient */}
            <div className="relative aspect-video overflow-hidden bg-brand-slate-light/10">
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${project.accentGradient} flex items-center justify-center`}>
                  <Layers size={20} className="text-white/60" />
                </div>
              )}
              {/* Overlay graphics */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-end items-start mb-2">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-brand-rose dark:text-brand-mauve font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Detail <ChevronRight size={12} />
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-brand-dark dark:text-brand-cream mb-1.5 group-hover:text-brand-rose transition-colors leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-[13px] leading-relaxed text-brand-slate dark:text-brand-cream/80 mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tag Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-brand-slate-light dark:bg-brand-dark hover:bg-brand-rose/20 dark:hover:bg-brand-slate/50 rounded-md text-[9px] font-mono border border-brand-rose/10 text-brand-slate dark:text-brand-rose"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub and Live Demo Action Links underneath Tag Badges */}
                {(project.githubUrl || project.demoUrl) && (
                  <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-slate dark:bg-[#1a1a2e] border border-brand-rose/15 dark:border-brand-slate/40 text-[10px] font-mono font-bold uppercase tracking-wider text-white dark:text-[#C9ADA7] hover:bg-brand-rose hover:border-brand-rose hover:text-white dark:hover:bg-brand-rose dark:hover:text-brand-dark transition-all duration-300"
                      >
                        <FaGithub size={11} /> GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-rose/10 border border-brand-rose/25 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-rose hover:bg-brand-rose hover:text-white transition-all duration-300"
                      >
                        <Globe size={11} /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-dark/60 dark:bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white dark:bg-brand-dark border border-brand-rose/30 dark:border-brand-slate/30 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 w-10 h-10 rounded-full bg-white/80 dark:bg-brand-slate/80 text-brand-slate dark:text-brand-cream flex items-center justify-center cursor-pointer border border-brand-rose/20 hover:scale-105 hover:bg-brand-rose/10 transition-all z-20 shadow-sm"
                aria-label="Close modal dialog"
              >
                <X size={20} />
              </button>

              {/* Modal Contents */}
              <div className="p-8 pt-16 max-h-[480px] overflow-y-auto">
                {/* Expandable Image container inside detail modal */}
                {selectedProject.imageUrl && (
                  <div 
                    onClick={() => setIsExpandedImage(true)}
                    className="relative group cursor-zoom-in overflow-hidden rounded-2xl border border-brand-rose/15 dark:border-brand-slate/40 mb-6 shadow-md"
                  >
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-101"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center pointer-events-none">
                      <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/90 drop-shadow-sm">
                        Expand Preview
                      </span>
                    </div>
                  </div>
                )}

                <h3 className="text-3xl font-display font-extrabold text-brand-dark dark:text-brand-cream leading-tight mb-4">
                  {selectedProject.title}
                </h3>

                {/* Scope & Details list */}
                <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-brand-rose/10 text-xs">
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-brand-slate dark:text-[#C9ADA7]" size={16} />
                    <div>
                      <div className="text-brand-slate/60 dark:text-brand-rose/60 font-mono text-[10px] uppercase">My Role</div>
                      <div className="font-semibold text-brand-dark dark:text-brand-cream">{selectedProject.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="text-brand-slate dark:text-[#C9ADA7]" size={16} />
                    <div>
                      <div className="text-brand-slate/60 dark:text-brand-rose/60 font-mono text-[10px] uppercase">Project Timeline</div>
                      <div className="font-semibold text-brand-dark dark:text-brand-cream">{selectedProject.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-slate dark:text-brand-rose mb-2 font-bold">
                    Description & Goals
                  </h4>
                  <p className="text-sm leading-relaxed text-brand-slate dark:text-brand-cream/90">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Tech Stacks */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-slate dark:text-brand-rose mb-2 font-bold">
                    Technologies Implemented
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md text-xs bg-brand-slate-light dark:bg-brand-slate/20 border border-brand-rose/15 text-brand-slate dark:text-brand-rose font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub and Live Demo Action Links underneath tags in detail modal */}
                {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                  <div className="pt-6 border-t border-brand-rose/10 flex flex-wrap gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-slate dark:bg-[#1a1a2e] border border-brand-rose/15 dark:border-brand-slate/40 text-[11px] font-mono font-bold uppercase tracking-wider text-white dark:text-[#C9ADA7] hover:bg-brand-rose hover:border-brand-rose hover:text-white dark:hover:bg-brand-rose dark:hover:text-brand-dark transition-all duration-300"
                      >
                        <FaGithub size={12} /> GitHub Repository
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-rose/10 border border-brand-rose/25 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-rose hover:bg-brand-rose hover:text-white transition-all duration-300"
                      >
                        <Globe size={12} /> Live Deployment
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox for expanded full screen project imagery */}
      <AnimatePresence>
        {isExpandedImage && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background film */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpandedImage(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
            />

            {/* Expander Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[85vh] z-10 flex flex-col items-center justify-center pl-4 pr-4"
            >
              {/* Close Button Top-right of window */}
              <button
                onClick={() => setIsExpandedImage(false)}
                className="absolute -top-12 right-0 text-white hover:text-brand-rose font-mono text-xs flex items-center gap-1.5 bg-white/10 dark:bg-brand-dark border border-white/20 px-3 py-1.5 rounded-full hover:scale-105 transition-all cursor-pointer shadow-md select-none"
              >
                <X size={14} /> Close
              </button>

              {/* Box frame */}
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-brand-dark/40 flex items-center justify-center max-h-[75vh]">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="max-w-full max-h-[75vh] object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-4 text-center">
                <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                  {selectedProject.title}
                </h4>
                <p className="text-[10px] font-mono text-brand-rose/70 uppercase tracking-widest mt-0.5 font-bold">
                  Widescreen Render View
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

