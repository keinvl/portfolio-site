"use client";
import * as React from "react";
import { motion, type Variants } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
  key?: React.Key;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [phase, setPhase] = React.useState<"loading" | "tilting" | "expanding">("loading");

  // Phase transition timing triggers
  React.useEffect(() => {
    if (phase === "loading") {
      const timer = setTimeout(() => {
        setPhase("tilting");
      }, 1200); // Elegant wait for the initial circle display
      return () => clearTimeout(timer);
    } else if (phase === "tilting") {
      // Stay tilted slightly, then explode/expand
      const timer = setTimeout(() => {
        setPhase("expanding");
      }, 550);
      return () => clearTimeout(timer);
    } else if (phase === "expanding") {
      // Complete after the quick expand transition finishes
      const timer = setTimeout(() => {
        onComplete();
      }, 650);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  // Framer-motion variant definitions for cinematic polish
  const circleVariants: Variants = {
    loading: {
      scale: 1,
      rotate: 0,
      x: 0,
      borderColor: "rgba(154, 140, 152, 0.35)", // brand-mauve (#9A8C98) subtle level
    },
    tilting: {
      scale: 0.92,
      rotate: -15, // tilt to the left
      x: -8,       // shift left slightly
      borderColor: "rgba(154, 140, 152, 0.7)",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const, // Ultra-smooth out-quintic curve
      },
    },
    expanding: {
      scale: 50, // massive expansion
      rotate: -45, // continuation of tilting turn
      x: 0,
      borderWidth: "1px",
      borderColor: "rgba(154, 140, 152, 0.9)",
      backgroundColor: "#ffffff",
      boxShadow: "0 0 120px rgba(154, 140, 152, 0.15)",
      transition: {
        duration: 0.65,
        ease: [0.76, 0, 0.24, 1] as const, // Power4 exponential ease-in-out
      },
    },
  };

  const textVariants: Variants = {
    loading: { opacity: 1, scale: 1 },
    tilting: { opacity: 0.4, scale: 0.95, transition: { duration: 0.3 } },
    expanding: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
  };

  const containerVariants: Variants = {
    loading: { opacity: 1 },
    tilting: { opacity: 1 },
    expanding: { 
      opacity: [1, 1, 0],
      transition: { duration: 0.65, ease: "easeInOut" as const }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={phase}
      variants={containerVariants}
      className="fixed inset-0 w-full h-full bg-[#ffffff] z-50 flex items-center justify-center overflow-hidden select-none"
    >
      {/* Absolute elegant soft radial ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9ADA7]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Orchestrated Animation Grid */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* The Concept Circle Element */}
        <motion.div
          animate={phase}
          variants={circleVariants}
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-brand-mauve/30 flex flex-col items-center justify-center relative bg-[#F2E9E4] backdrop-blur-sm shadow-[0_8px_32px_rgba(154,140,152,0.08)]"
        >
          {/* Subtle slow infinite spinning orbit dot (active only during loading) */}
          {phase === "loading" && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-[-2.5px] rounded-full pointer-events-none"
            >
              <div className="w-2 h-2 bg-[#9A8C98] rounded-full shadow-[0_0_8px_rgba(154,140,152,0.6)]" />
            </motion.div>
          )}

          {/* Minimal textual displays inside the circle */}
          <motion.div
            animate={phase}
            variants={textVariants}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Elegant Monogram Display Accent */}
            <span className="text-3xl sm:text-4xl font-display font-black tracking-tight text-[#2D1E1B] leading-none select-none">
              KL
            </span>

            {/* Ambient Brand Title */}
            <span className="text-[9px] font-mono tracking-[0.35em] text-[#9A8C98] font-bold uppercase mt-2">
              KEIRA
            </span>
          </motion.div>
        </motion.div>

        {/* Cinematic outer halo ring that vanishes quickly during transitions */}
        {phase === "loading" && (
          <motion.div
            initial={{ scale: 0.82, opacity: 0 }}
            animate={{ scale: 1.12, opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-[#C9ADA7]/25 pointer-events-none"
          />
        )}
      </div>

      {/* Extreme Bottom Ambient welcome caption */}
      <motion.div
        animate={phase}
        variants={textVariants}
        className="absolute bottom-12 text-[#9A8C98]/60 font-mono text-[9px] tracking-[0.3em] uppercase text-center font-bold"
      >
        KEIRA'S SPACE PANEL
      </motion.div>
    </motion.div>
  );
}
