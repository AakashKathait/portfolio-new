"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "Full Stack Development",
  "Responsive Design",
  "REST APIs",
  "Database Management",
  "UI/UX Principles",
  "Version Control (Git)",
  "Problem Solving",
  "Team Collaboration"
];

const AboutSection = () => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="w-full flex flex-col items-center py-10 xs:py-14 sm:py-20 gap-6 xs:gap-8 sm:gap-10 max-w-full sm:max-w-2xl mx-auto rounded-2xl sm:rounded-3xl shadow-xl bg-[var(--color-surface)] px-4 xs:px-6 sm:px-12 transition-colors duration-500 relative overflow-hidden
      lg:min-h-screen lg:flex lg:justify-center lg:items-center"
  >
    {/* Creative background accent */}
    <svg className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 z-0 opacity-20 pointer-events-none" viewBox="0 0 320 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="64" rx="160" ry="40" fill="var(--color-accent)" />
    </svg>
    {/* Light noise overlay */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-10" style={{backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9p6y7wAAAABJRU5ErkJggg==")', backgroundRepeat:'repeat'}} />
    <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-2 xs:mb-3 sm:mb-4 inline-block relative text-center w-full leading-tight z-10">
      <span className="text-[var(--color-primary)]">About Me</span>
      <motion.span
        layoutId="about-accent"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="block h-1 w-12 bg-[var(--color-accent)] rounded-full mt-2 mx-auto"
        style={{ width: 48 }}
      />
    </h2>
    {/* Profile image centered */}
    <div className="flex flex-col items-center z-10">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[var(--color-primary)] bg-[var(--color-surface)] flex items-center justify-center shadow-lg mx-auto"
      >
        <Image src="/profile.jpg" alt="Aakash Kathait profile photo" width={160} height={160} className="object-cover w-full h-full rounded-full" />
      </motion.div>
    </div>
    {/* Bio text centered */}
    <div className="w-full text-center z-10">
      <p className="text-base xs:text-lg sm:text-xl text-[var(--color-text)] mb-3 xs:mb-4 sm:mb-5 leading-relaxed font-medium">
        Hi! I’m <span className="font-semibold">Aakash Kathait</span>, a full stack web developer passionate about building robust, scalable, and user-friendly web applications. I love learning new technologies, solving complex problems, and collaborating with others to create impactful digital experiences.
      </p>
    </div>
    {/* Divider accent */}
    <div className="w-16 h-1 rounded-full bg-[var(--color-accent)] opacity-70 mx-auto my-2 sm:my-4 z-10" />
    {/* Skills card/grid with creative background accent */}
    <div className="relative w-full flex justify-center z-10">
      {/* Creative blob behind skills */}
      <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-72 h-24 z-0 opacity-20 pointer-events-none" viewBox="0 0 288 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="144" cy="48" rx="144" ry="32" fill="var(--color-primary)" />
      </svg>
      <div className="w-full sm:w-4/5 bg-[var(--color-background)] rounded-2xl shadow-md px-4 xs:px-6 sm:px-10 py-6 flex flex-col items-center gap-4 border border-[var(--color-primary)] relative z-10">
        <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2 text-[var(--color-text)] tracking-wide text-center">Key Skills</h3>
        <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 w-full justify-items-center">
          {skills.map((skill) => (
            <li key={skill} className="flex justify-center items-center px-3 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-text)] text-xs font-medium border border-[var(--color-primary)] tracking-wide shadow-sm text-center w-full max-w-[8rem] break-words">
              <span className="w-full text-center break-words">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.section>
);

export default AboutSection; 