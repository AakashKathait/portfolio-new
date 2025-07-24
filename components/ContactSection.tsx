"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setValidationError(null); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Client-side validation
    if (!form.email.trim() || !form.message.trim()) {
      setValidationError("Email and message are required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    setValidationError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full max-w-2xl mx-auto py-10 xs:py-14 sm:py-20 px-4 xs:px-6 sm:px-12 bg-[var(--color-surface)] rounded-2xl sm:rounded-3xl shadow-xl flex flex-col items-center gap-8 relative overflow-hidden transition-colors duration-500">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-2 xs:mb-3 sm:mb-4 text-center text-[var(--color-primary)]">Contact</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 xs:gap-5 sm:gap-6 z-10" autoComplete="off" noValidate>
        <label className="flex flex-col gap-1 text-[var(--color-text)] font-medium">
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-background)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-1 text-[var(--color-text)] font-medium">
          Email <span className="text-red-500">*</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-background)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
            autoComplete="email"
          />
        </label>
        <label className="flex flex-col gap-1 text-[var(--color-text)] font-medium">
          Message <span className="text-red-500">*</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="px-4 py-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-background)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition resize-none"
          />
        </label>
        {validationError && (
          <p className="text-red-600 font-medium text-center mt-2">{validationError}</p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow hover:bg-[var(--color-accent)] transition-colors text-base sm:text-lg tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-600 font-medium text-center mt-2">Message sent! I’ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-medium text-center mt-2">Something went wrong. Please try again.</p>
        )}
      </form>
      {/* Email and GitHub links with icons, no underline */}
      <div className="flex flex-row items-center justify-center gap-6 mt-4 z-10">
        <a
          href="mailto:aakashkathait01@gmail.com"
          className="flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] font-medium text-base transition-colors no-underline"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
          Email
        </a>
        <a
          href="https://github.com/AakashKathait"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] font-medium text-base transition-colors no-underline"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactSection; 