"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Royal Seoul House",
    description: "A modern restaurant website for Royal Seoul House, featuring menu, reservations, and more. Deployed live.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    github: "https://github.com/AakashKathait/r-s-h",
    demo: "https://royalseoulhouse.com",
    image: "/royal-seoul-house.png",
    alt: "Screenshot of Royal Seoul House website UI",
  },
  {
    title: "Students List App",
    description: "A web app to manage and display a list of students. Features add, remove, and view functionalities.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/AakashKathait/students-list-app",
    demo: "https://aakashkathait.github.io/students-list-app/",
    image: "/students-list-app.png",
    alt: "Screenshot of Students List App UI",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A classic Tic-Tac-Toe game built with JavaScript. Play against a friend and enjoy a simple, interactive UI.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/AakashKathait/Tic-Tac-Toe",
    demo: "https://aakashkathait.github.io/Tic-Tac-Toe/",
    image: "/tic-tac-toe.png",
    alt: "Screenshot of Tic-Tac-Toe project UI",
  },
];

const ProjectsSection = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="w-full flex flex-col items-center text-center py-8 xs:py-12 sm:py-20 gap-4 xs:gap-6 sm:gap-8 max-w-full sm:max-w-3xl mx-auto rounded-2xl sm:rounded-3xl shadow-xl bg-[var(--color-background)] px-2 xs:px-4 sm:px-10 transition-colors duration-500 relative"
  >
    {/* Geometric wavy SVG divider */}
    <svg className="absolute top-0 left-0 w-full h-10 sm:h-16 z-0 opacity-30 pointer-events-none" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,40 C360,120 1080,-40 1440,60 L1440,100 L0,100 Z" fill="var(--color-surface)" />
    </svg>
    {/* Faint grid pattern overlay */}
    <svg className="absolute inset-0 w-full h-full z-0 opacity-10 pointer-events-none" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="20" height="20" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="200" fill="url(#grid)" />
    </svg>
    <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-3 xs:mb-4 sm:mb-5 inline-block relative leading-tight">
      <span className="text-[var(--color-primary)]">Projects</span>
      <motion.span
        layoutId="projects-accent"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="block h-1 w-12 bg-[var(--color-accent)] rounded-full mt-2 mx-auto"
        style={{ width: 48 }}
      />
    </h2>
    <p className="max-w-xl text-xs xs:text-sm sm:text-lg text-[var(--color-text)] mb-3 xs:mb-4 sm:mb-5 leading-relaxed">
      Here are some of the web development projects I’ve worked on recently.
    </p>
    {/* Vertical accent line for timeline effect (hide on mobile) */}
    <div className="hidden md:block absolute left-1/2 top-36 bottom-10 w-1 bg-[var(--color-surface)] rounded-full opacity-40 -translate-x-1/2 z-0" />
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-14 items-stretch justify-items-center relative z-10">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          className={`w-full max-w-md rounded-xl sm:rounded-2xl border border-[var(--color-primary)] p-0 bg-[var(--color-surface)] shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl group flex flex-col h-full ${i % 2 === 0 ? 'md:mt-8' : 'md:mb-8'}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
        >
          <div className="relative w-full aspect-video bg-[var(--color-background)] group">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-opacity duration-300 group-hover:opacity-90 rounded-t-xl sm:rounded-t-2xl"
              sizes="(max-width: 768px) 100vw, 400px"
              priority={false}
            />
          </div>
          <div className="p-4 sm:p-6 flex flex-col gap-2 xs:gap-3 sm:gap-4 flex-1">
            <h3 className="text-base xs:text-lg sm:text-2xl font-bold mb-1 text-left text-[var(--color-primary)] leading-snug">{project.title}</h3>
            <p className="text-[var(--color-text)] mb-1 xs:mb-2 sm:mb-3 text-left text-xs xs:text-sm sm:text-base leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2 xs:mb-3 sm:mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-xs xs:text-sm font-semibold border border-[var(--color-primary)] tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline text-xs xs:text-sm sm:text-base font-medium"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline text-xs xs:text-sm sm:text-base font-medium"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default ProjectsSection; 