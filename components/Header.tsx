"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "#hero", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
  ) },
  { label: "About", href: "#about", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ) },
  { label: "Projects", href: "#projects", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
  ) },
  { label: "Contact", href: "#contact", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5a8.38 8.38 0 01-.9 3.8c-.6 1.2-1.5 2.3-2.6 3.2-1.1.9-2.4 1.5-3.8 1.5s-2.7-.6-3.8-1.5c-1.1-.9-2-2-2.6-3.2A8.38 8.38 0 013 10.5C3 6.4 7.03 3 12 3s9 3.4 9 7.5z" /></svg>
  ) },
];

const Header = () => {
  const [active, setActive] = useState("#hero");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.querySelector(link.href));
      const scrollY = window.scrollY + 80;
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && section.offsetTop <= scrollY) {
          setActive(navLinks[i].href);
          found = true;
          break;
        }
      }
      // If at the bottom of the page, always highlight the last section (Contact)
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
        sections[sections.length - 1]
      ) {
        setActive(navLinks[navLinks.length - 1].href);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top nav for desktop/tablet */}
      <header className="hidden sm:block fixed top-0 left-0 w-full z-50 bg-[var(--color-background)]/80 backdrop-blur border-b border-[var(--color-surface)] shadow-sm transition-all">
        <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="font-bold text-base xs:text-lg sm:text-xl tracking-tight text-[var(--color-primary)]">Aakash Kathait</span>
          <ul className="flex gap-1 xs:gap-2 sm:gap-4 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (el) {
                      const yOffset = -64; // Offset in px
                      const y = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={`px-2 xs:px-3 py-1 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-xs xs:text-sm sm:text-base ${
                    active === link.href
                      ? "bg-[var(--color-primary)] text-white shadow"
                      : "text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              {mounted && (
                <button
                  aria-label="Toggle Dark Mode"
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="ml-2 p-2 rounded-full bg-[var(--color-surface)] hover:bg-[var(--color-primary)] transition-colors border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                >
                  {resolvedTheme === "dark" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                  )}
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      {/* Bottom nav for mobile */}
      <nav className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-[var(--color-background)]/95 border-t border-[var(--color-surface)] shadow-t flex justify-around items-center py-1 px-2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector(link.href);
              if (el) {
                const yOffset = -64; // Offset in px
                const y = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-xs xs:text-sm sm:text-base ${
              active === link.href
                ? "text-[var(--color-primary)] font-semibold"
                : "text-[var(--color-text)]"
            }`}
            aria-label={link.label}
          >
            <span className="block w-6 h-6 mb-0.5 xs:w-7 xs:h-7 sm:w-8 sm:h-8">{link.icon}</span>
            <span className="text-[10px] xs:text-xs sm:text-sm mt-0.5">{link.label}</span>
          </a>
        ))}
        {/* Theme toggle as a floating action button */}
        {mounted && (
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="absolute -top-6 right-4 bg-[var(--color-surface)] border border-[var(--color-primary)] rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-colors"
            style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
          >
            {resolvedTheme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>
        )}
      </nav>
    </>
  );
};

export default Header; 