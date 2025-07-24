"use client";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center font-sans">
      <Header />
      <main className="w-full max-w-3xl flex-1 flex flex-col items-center px-4 py-16 gap-16 pt-32 pb-20">
        <section id="hero" className="w-full">
          <Hero />
        </section>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="w-full py-6 flex justify-center text-xs text-[var(--color-text)] border-t border-[var(--color-surface)]">
        © {new Date().getFullYear()} Aakash Kathait
      </footer>
    </div>
  );
}
