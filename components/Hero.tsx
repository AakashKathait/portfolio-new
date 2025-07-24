"use client";
import React from "react";
import { motion } from "framer-motion";

const techStack = [
  "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", // Frontend
  "Node.js", "Express.js", "npm", // Backend
  "MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Supabase" // Database & ORM
];

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="w-full flex flex-col items-center text-center py-10 xs:py-14 sm:py-24 gap-4 xs:gap-6 sm:gap-8 max-w-full sm:max-w-2xl mx-auto rounded-2xl sm:rounded-3xl shadow-xl bg-[var(--color-background)] transition-colors duration-500 relative overflow-hidden px-3 xs:px-4 sm:px-0"
  >
    {/* Animated, lifelike water waves at the bottom (higher waves) */}
    <svg className="absolute left-0 bottom-0 w-full h-40 sm:h-56 z-0 pointer-events-none" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path className="animate-water-wave1" d="M0,300 Q360,180 720,300 T1440,300 L1440,400 L0,400 Z" fill="var(--color-primary)" fillOpacity="0.5" />
      <path className="animate-water-wave2" d="M0,340 Q400,220 900,340 T1440,340 L1440,400 L0,400 Z" fill="var(--color-accent)" fillOpacity="0.3" />
      <path className="animate-water-wave3" d="M0,320 Q300,250 800,320 T1440,320 L1440,400 L0,400 Z" fill="var(--color-primary)" fillOpacity="0.2" />
    </svg>
    {/* Animated, perfectly round bubbles rising from the higher waves */}
    <svg className="absolute left-0 bottom-0 w-full h-[400px] z-0 pointer-events-none" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <circle className="animate-bubble1" cx="200" cy="380" r="16" fill="var(--color-accent)" opacity="0.18" />
      <circle className="animate-bubble2" cx="400" cy="400" r="12" fill="var(--color-primary)" opacity="0.15" />
      <circle className="animate-bubble3" cx="700" cy="390" r="18" fill="var(--color-accent)" opacity="0.13" />
      <circle className="animate-bubble4" cx="1100" cy="400" r="10" fill="var(--color-primary)" opacity="0.14" />
      <circle className="animate-bubble5" cx="1300" cy="380" r="14" fill="var(--color-accent)" opacity="0.16" />
      <circle className="animate-bubble6" cx="900" cy="400" r="9" fill="var(--color-primary)" opacity="0.12" />
      <circle className="animate-bubble7" cx="300" cy="400" r="11" fill="var(--color-accent)" opacity="0.15" />
    </svg>
    <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 xs:mb-3 sm:mb-4 inline-block relative z-10 leading-tight">
      <span className="text-[var(--color-primary)]">Aakash Kathait</span>
      <motion.span
        layoutId="hero-accent"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="block h-1 w-16 bg-[var(--color-accent)] rounded-full mt-2 mx-auto"
        style={{ width: 64 }}
      />
    </h1>
    <h2 className="text-base xs:text-lg sm:text-2xl font-semibold text-[var(--color-text)] mb-2 xs:mb-3 sm:mb-4 z-10 leading-snug">
      Full Stack Web Developer
    </h2>
    <p className="max-w-xl text-sm xs:text-base sm:text-lg text-[var(--color-text)] mb-4 xs:mb-5 sm:mb-6 z-10 leading-relaxed">
      I am a passionate full stack web developer who thrives on learning and mastering new technologies. I continuously expand my skills and strive to understand every detail of the tools I use. My goal is to build robust, scalable, and user-friendly web applications that make a difference.
    </p>
    <div className="flex flex-wrap justify-center gap-2 mb-4 xs:mb-5 sm:mb-6 z-10">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-text)] text-xs xs:text-sm font-medium border border-[var(--color-primary)] tracking-wide"
        >
          {tech}
        </span>
      ))}
    </div>
    <a
      href="#projects"
      className="inline-block px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow hover:bg-[var(--color-accent)] transition-colors z-10 text-sm xs:text-base sm:text-lg tracking-wide"
    >
      View My Work
    </a>
    {/* Wavy SVG divider */}
    <svg
      className="absolute left-0 bottom-0 w-full h-10 sm:h-16 text-[var(--color-background)] z-10"
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 C360,120 1080,-40 1440,60 L1440,100 L0,100 Z"
        fill="var(--color-surface)"
      />
    </svg>
  </motion.section>
);

export default Hero; 