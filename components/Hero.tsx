"use client";

import { ChevronDown } from "lucide-react";

const taglines = [".NET", "Distributed Systems", "AI-Native Apps"];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center px-6"
      style={{ overflow: "hidden" }}
    >
      {/* Background orbs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cyan orb — top-right */}
        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(6,182,212,0.03) 55%, transparent 75%)",
            animation: "orb-float 12s ease-in-out infinite",
          }}
        />
        {/* Indigo orb — bottom-left */}
        <div
          className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(129,140,248,0.12) 0%, rgba(129,140,248,0.02) 55%, transparent 75%)",
            animation: "orb-float-reverse 16s ease-in-out infinite",
          }}
        />
        {/* Soft cyan center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]"
          style={{ animation: "fade-up 0.6s 0ms ease both" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #22d3ee, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Pratik Sonigra
          </span>
        </h1>

        {/* Title */}
        <p
          className="text-xl sm:text-2xl font-semibold text-slate-200 mb-6"
          style={{ animation: "fade-up 0.6s 120ms ease both" }}
        >
          Senior Software Engineer
        </p>

        {/* Tagline pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          style={{ animation: "fade-up 0.6s 240ms ease both" }}
        >
          {taglines.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm font-medium border border-cyan-400/40 text-cyan-300 bg-cyan-400/[0.07]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fade-up 0.6s 360ms ease both" }}
        >
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-sm bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-all duration-150 cursor-pointer shadow-lg hover:shadow-cyan-400/30 active:scale-95"
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-sm border border-white/20 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-150 cursor-pointer active:scale-95"
            style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToProjects}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors duration-150 cursor-pointer"
          style={{ animation: "bounce-y 1.5s ease-in-out infinite" }}
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}
