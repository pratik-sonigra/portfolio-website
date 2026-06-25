"use client";

import { useState, useRef, useCallback } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  github: string;
  accent: string;
  accentRgb: string;
}

const projects: Project[] = [
  {
    id: "envault",
    number: "01",
    name: "envault",
    tagline: "What your LLM sees, stays safe.",
    description:
      "Middleware that detects and redacts secrets, API keys, and PII before text reaches any LLM API — replacing them with typed placeholders in an ephemeral vault.",
    tags: ["Python", "Security", "LLM"],
    github: "https://github.com/pratik-sonigra/envault",
    accent: "#34d399",
    accentRgb: "52,211,153",
  },
  {
    id: "deprisker",
    number: "02",
    name: "deprisker",
    tagline: "Find which files will hurt the most when they break.",
    description:
      "Builds a directed dependency graph and scores every module by risk — centrality, dependents, circular chains. Output: terminal report + interactive HTML visualization.",
    tags: ["Python", "CLI", "Graph Analysis"],
    github: "https://github.com/pratik-sonigra/deprisker",
    accent: "#22d3ee",
    accentRgb: "34,211,238",
  },
  {
    id: "testmap",
    number: "03",
    name: "testmap",
    tagline: "Stop guessing what to test next.",
    description:
      "Maps tests to the functions they cover, then renders it as a dependency graph. Surgical visual map of what's untested and exactly which tests break if a function changes.",
    tags: ["Python", "Testing", "Static Analysis"],
    github: "https://github.com/pratik-sonigra/testmap",
    accent: "#fb923c",
    accentRgb: "251,146,60",
  },
  {
    id: "commitlore",
    number: "04",
    name: "commitlore",
    tagline: "Your git history has a story. This reads it.",
    description:
      "Analyzes full git history — commit patterns, file churn, co-change clusters, author bursts — and synthesizes it into a human-readable narrative document.",
    tags: ["Python", "CLI", "Git"],
    github: "https://github.com/pratik-sonigra/commitlore",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col overflow-hidden rounded-2xl border cursor-default h-full"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: hovered
          ? `rgba(${project.accentRgb}, 0.45)`
          : "rgba(255,255,255,0.08)",
        boxShadow: hovered ? `0 0 40px rgba(${project.accentRgb}, 0.15)` : "none",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Fluid cursor glow */}
      {hovered && (
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 300,
            height: 300,
            left: mouse.x - 150,
            top: mouse.y - 150,
            background: `radial-gradient(circle, rgba(${project.accentRgb}, 0.15) 0%, rgba(${project.accentRgb}, 0.04) 50%, transparent 70%)`,
            transition: "left 0.05s ease-out, top 0.05s ease-out",
          }}
        />
      )}

      {/* Top accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          opacity: hovered ? 1 : 0.3,
        }}
      />

      {/* Number watermark */}
      <div
        className="absolute right-4 bottom-3 text-[64px] font-black leading-none select-none pointer-events-none"
        style={{ color: `rgba(${project.accentRgb}, 0.07)` }}
      >
        {project.number}
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-5">
        {/* Number badge */}
        <span
          className="self-start text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded-md border mb-3"
          style={{
            color: project.accent,
            borderColor: `rgba(${project.accentRgb}, 0.25)`,
            background: `rgba(${project.accentRgb}, 0.07)`,
          }}
        >
          {project.number}
        </span>

        <h3
          className="text-lg font-bold font-mono tracking-tight mb-1.5"
          style={{ color: project.accent }}
        >
          {project.name}
        </h3>

        <p className="text-sm text-slate-200 font-medium mb-2.5 leading-snug">
          &ldquo;{project.tagline}&rdquo;
        </p>

        <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] rounded-full font-medium border"
              style={{
                color: `rgba(${project.accentRgb}, 0.85)`,
                borderColor: `rgba(${project.accentRgb}, 0.2)`,
                background: `rgba(${project.accentRgb}, 0.06)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 w-fit text-xs font-medium transition-colors duration-150 cursor-pointer group/link"
          style={{ color: hovered ? project.accent : "#64748b" }}
          aria-label={`View ${project.name} on GitHub`}
        >
          View on GitHub
          <ExternalLink
            size={11}
            className="transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [sectionMouse, setSectionMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleSectionMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setSectionMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    []
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="relative flex flex-col min-h-screen pt-16 px-4 sm:px-6 pb-6 overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      {/* Section-level fluid cursor glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 600,
          height: 600,
          left: sectionMouse.x - 300,
          top: sectionMouse.y - 300,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.05) 0%, rgba(129,140,248,0.03) 40%, transparent 70%)",
          transition: "left 0.12s ease-out, top 0.12s ease-out",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 flex flex-col flex-1 max-w-6xl mx-auto w-full">
        {/* Heading */}
        <div className="pt-8 pb-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-100 mb-2">
            Things I&apos;ve{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Developer tools designed around one idea: reduce the time between confusion and clarity.
          </p>
        </div>

        {/* Bento grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
