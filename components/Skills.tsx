"use client";


import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  Activity,
  Search,
  Terminal,
  Code,
  Database,
  BrainCircuit,
  Eye,
  Scan,
  Network,
  Cpu,
  Atom,
  Wind,
  FileSearch,
  Binary,
  MonitorCheck,
  Server,
  TerminalSquare,
  Wrench,
  Info
} from "lucide-react";




interface SkillItem {
  name: string;
  category: string;
  logoUrl: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  lvl: string;
  desc: string;
}




// Brand helper component to dynamically grab official, colored SVGs
const BrandIcon = ({ logoUrl, fallback: Fallback, alt }: { logoUrl: string, fallback: any, alt: string }) => {
  const [error, setError] = React.useState(false);
  return error ? (
    <Fallback size={20} className="text-brand-slate/60 dark:text-[#C9ADA7]/60" />
  ) : (
    <img
      src={logoUrl}
      alt={alt}
      onError={() => setError(true)}
      className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105"
      referrerPolicy="no-referrer"
    />
  );
};




export default function Skills() {
  const skills: SkillItem[] = [
    {
      name: "Wazuh",
      category: "Cyber Security",
      logoUrl: "/icons/wazuh.jpeg",
      icon: Eye,
      lvl: "Advanced",
      desc: "Deploying active endpoint monitors, parsing live system telemetry records, and assessing vulnerabilities."
    },
    {
      name: "Wireshark",
      category: "Network Forensics",
      logoUrl: "https://cdn.simpleicons.org/wireshark/167CD2",
      icon: Activity,
      lvl: "Advanced",
      desc: "Intercepting raw socket traffic streams, auditing handshakes, and reconstructing forensic timelines."
    },
    {
      name: "Nmap",
      category: "Security Discovery",
      logoUrl: "https://cdn.simpleicons.org/nmap/4F5D75",
      icon: Eye,
      lvl: "Advanced",
      desc: "Mapping networks, scanning service endpoints, and writing targeted security automation commands."
    },
    {
      name: "Nessus",
      category: "Vulnerability Auditing",
      logoUrl: "https://cdn.simpleicons.org/tenable/002B49",
      icon: Shield,
      lvl: "Intermediate",
      desc: "Identifying host configuration anomalies, security deviations, and compliance risks."
    },
    {
      name: "Burp Suite",
      category: "Web Auditing",
      logoUrl: "/icons/burpsuite.png",
      icon: Scan,
      lvl: "Advanced",
      desc: "Fuzzing web interfaces, intercepting application payloads, and securing logic redirections."
    },
    {
      name: "Autopsy",
      category: "Digital Forensics",
      logoUrl: "/icons/autopsy.jpeg",
      icon: FileSearch,
      lvl: "Advanced",
      desc: "Analyzing file systems, carving file indices, and parsing hardware images securely."
    },
    {
      name: "NetworkMiner",
      category: "Network Forensics",
      logoUrl: "/icons/networkminer.jpeg",
      icon: Network,
      lvl: "Advanced",
      desc: "Analyzing network PCAP captures, identifying OS hosts, and harvesting credentials from sessions."
    },
    {
      name: "ExifTool",
      category: "Metadata Forensics",
      logoUrl: "https://cdn.simpleicons.org/exiftool/9A8C98",
      icon: FileSearch,
      lvl: "Advanced",
      desc: "Parsing image and document file formats to extract GPS location data and device metadata records."
    },
    {
      name: "Kali Linux",
      category: "Security Platforms",
      logoUrl: "https://cdn.simpleicons.org/kalilinux/557C93",
      icon: Terminal,
      lvl: "Advanced",
      desc: "Scripting penetration modules, configuring secure tools, and investigating network segments."
    },
    {
      name: "Ubuntu",
      category: "System Administration",
      logoUrl: "https://cdn.simpleicons.org/ubuntu/E95420",
      icon: MonitorCheck,
      lvl: "Advanced",
      desc: "Hardening system firewalls, administering user privileges, and orchestration of systemd services."
    },
    {
      name: "Python",
      category: "Programming Language",
      logoUrl: "https://cdn.simpleicons.org/python/3776AB",
      icon: TerminalSquare,
      lvl: "Advanced",
      desc: "Automating forensic triage script files, parsing extensive log assets, and web fetching loops."
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E",
      icon: Code,
      lvl: "Intermediate",
      desc: "Creating responsive asynchronous application structures, state synchronization, and DOM workflows."
    },
    {
      name: "PHP",
      category: "Programming Language",
      logoUrl: "https://cdn.simpleicons.org/php/777BB4",
      icon: Code,
      lvl: "Advanced",
      desc: "Creating secure custom logic, web headers, session algorithms, and SQL interactions."
    },
    {
      name: "Java",
      category: "Programming Language",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      icon: Cpu,
      lvl: "Intermediate",
      desc: "Validating object-oriented algorithms, clean data operations, and structuring program modules."
    },
    {
      name: "C++",
      category: "Programming Language",
      logoUrl: "https://cdn.simpleicons.org/cplusplus/00599C",
      icon: Wrench,
      lvl: "Advanced",
      desc: "Compiling native calculation libraries, low-latency data arrays, and procedural tasks."
    },
    {
      name: "React",
      category: "Frontend Engine",
      logoUrl: "https://cdn.simpleicons.org/react/61DAFB",
      icon: Atom,
      lvl: "Advanced",
      desc: "Creating high-fidelity desktop and mobile web applications with performant modular component hierarchies."
    },
    {
      name: "Next.js",
      category: "Meta Framework",
      logoUrl: "https://cdn.simpleicons.org/nextdotjs/9A8C98",
      icon: Atom,
      lvl: "Advanced",
      desc: "Developing server-side rendered React speed-optimized static and dynamic web portals."
    },
    {
      name: "Laravel",
      category: "Backend Framework",
      logoUrl: "https://cdn.simpleicons.org/laravel/FF2D20",
      icon: Server,
      lvl: "Advanced",
      desc: "Architecting reliable application backends, structured database schemas, and robust API endpoints."
    },
    {
      name: "TypeScript",
      category: "Programming Language",
      logoUrl: "https://cdn.simpleicons.org/typescript/3178C6",
      icon: Code,
      lvl: "Advanced",
      desc: "Architecting strongly-typed applications, custom generic structures, and modular scalable layouts."
    },
    {
      name: "Tailwind CSS",
      category: "UI Styling",
      logoUrl: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
      icon: Wind,
      lvl: "Advanced",
      desc: "Translating sophisticated design ratios into pixel-perfect responsive layouts and fluid experiences."
    },
    {
      name: "Firebase",
      category: "Cloud Suite",
      logoUrl: "https://cdn.simpleicons.org/firebase/FFCA28",
      icon: Database,
      lvl: "Advanced",
      desc: "Configuring serverless authorization, cloud hosting structures, and real-time synchronization systems."
    },
    {
      name: "MySQL",
      category: "Relational Database",
      logoUrl: "https://cdn.simpleicons.org/mysql/4479A1",
      icon: Database,
      lvl: "Advanced",
      desc: "Optimizing relational records, indexing configurations, and protecting queries against injection."
    },
    {
      name: "Hugging Face",
      category: "Artificial Intelligence",
      logoUrl: "https://cdn.simpleicons.org/huggingface/FFD21E",
      icon: BrainCircuit,
      lvl: "Intermediate",
      desc: "Using transformer pipelines, offline tokenizers, and lightweight audit intelligence models."
    }
  ];


  // Duplicate array to achieve seamless half-width loop
  const marqueeItems = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 select-none relative overflow-visible">
      {/* Soft background ambient glow */}
      <div className="absolute left-[-5%] top-[25%] w-[260px] h-[260px] bg-brand-rose/4 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] bottom-[-5%] w-[220px] h-[220px] bg-brand-slate/4 blur-[110px] rounded-full pointer-events-none" />

      {/* Modern, clean headers */}
      <div className="text-left flex flex-col items-start mb-12">
        <span className="text-xs font-mono uppercase bg-brand-rose/20 dark:bg-brand-slate/40 text-brand-slate dark:text-brand-rose px-3 py-1 rounded-full">
          Expertise & Stack
        </span>
        <h2 className="text-4xl font-display font-bold mt-4 text-brand-dark dark:text-brand-cream tracking-tight">
          Tools I Work With
        </h2>
        <p className="text-xs text-brand-slate/70 dark:text-brand-rose font-mono mt-2 font-bold uppercase tracking-wider leading-relaxed">
          Endless visual carousel. Hover cards to pause cycle.
        </p>
      </div>


      {/* INFINITE MARQUEE LIST (Completely seamless CSS mask-faded carousel, borderless & sleek) */}
      <div
        className="relative w-full overflow-hidden py-10 select-none"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, #fff 15%, #fff 85%, transparent)",
          maskImage: "linear-gradient(to right, transparent, #fff 15%, #fff 85%, transparent)"
        }}
      >
        {/* Continuous one-way animated display rack - Seamless Left to Right */}
        <motion.div
          className="flex gap-14 items-center justify-start min-w-max px-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
              repeatDelay: 0
            }
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeItems.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center shrink-0 group py-1 transition-all duration-300"
              >
                {/* Visual Avatar Bubble - Borderless light mode, ultra-premium soft ambient drop shadow mapping precisely to user reference photo */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border border-brand-rose/10 dark:border-brand-slate/40 bg-white dark:bg-[#12121e] hover:border-brand-brown dark:hover:border-brand-rose hover:scale-[1.08] shadow-[0_8px_30px_rgba(140,110,99,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(140,110,99,0.12)]">
                  <BrandIcon logoUrl={item.logoUrl} fallback={item.icon} alt={item.name} />
                </div>

                {/* Plain, clean centered label text underneath (No box / No borders) */}
                <span className="text-[11px] font-mono tracking-wider font-bold mt-3 transition-colors duration-300 uppercase text-brand-slate/70 dark:text-[#C9ADA7]/80 group-hover:text-brand-brown dark:group-hover:text-brand-rose">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}