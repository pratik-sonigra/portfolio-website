"use client";

import { useState, useRef, useCallback } from "react";

const techStack = [
  ".NET / C#",
  "SQL Server",
  "RabbitMQ",
  "Distributed Systems",
  "Python",
  "LangChain",
  "LangGraph",
  "RAG",
  "Knowledge Graphs",
  "PostgreSQL",
  "Docker",
  "Microservices",
  "IoT",
  "REST APIs",
  "AI-Native Apps",
];

export default function About() {
  const [sectionMouse, setSectionMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSectionMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="scroll-mt-16 relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      {/* Fluid cursor glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 500,
          height: 500,
          left: sectionMouse.x - 250,
          top: sectionMouse.y - 250,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(129,140,248,0.03) 45%, transparent 70%)",
          transition: "left 0.12s ease-out, top 0.12s ease-out",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-3">
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h2>
          <div className="mx-auto w-16 h-px bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full" />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio card */}
          <div
            className="rounded-2xl p-5 sm:p-8 border"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-widest">
              Background
            </h3>
            <p className="text-slate-300 leading-relaxed text-[0.95rem]">
              Senior Software Engineer with 7+ years of experience building scalable,
              high-performance applications across enterprise software, document processing
              systems, microservice architectures, and IoT platforms.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed text-[0.95rem]">
              Core expertise in{" "}
              <span className="text-cyan-300 font-medium">.NET, C#, SQL Server, RabbitMQ</span>,
              distributed systems, and backend architecture. Recently focused on building{" "}
              <span className="text-indigo-300 font-medium">AI-native applications</span> —
              designing intelligent workflows powered by RAG, Knowledge Graphs, LangChain,
              LangGraph, and Composio.
            </p>
          </div>

          {/* Tech stack pills */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-5 uppercase tracking-widest">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-400/[0.06] transition-all duration-150 cursor-default select-none"
                  style={{ backdropFilter: "blur(4px)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
