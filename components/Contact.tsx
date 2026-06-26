"use client";

import { useState, useRef, useCallback } from "react";
import { Mail, Phone } from "lucide-react";
import type { SVGProps } from "react";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "Mobile",
    value: "+91-81414 71552",
    href: "tel:+918141471552",
    description: "Call me",
    accentRgb: "251,146,60",
    accent: "#fb923c",
    Icon: ({ className }: { className?: string }) => <Phone size={20} className={className} />,
  },
  {
    label: "Email",
    value: "pratiksonigra98@gmail.com",
    href: "mailto:pratiksonigra98@gmail.com",
    description: "Send me an email",
    accentRgb: "34,211,238",
    accent: "#22d3ee",
    Icon: ({ className }: { className?: string }) => <Mail size={20} className={className} />,
  },
  {
    label: "GitHub",
    value: "pratik-sonigra",
    href: "https://github.com/pratik-sonigra",
    description: "See my projects on GitHub",
    accentRgb: "167,139,250",
    accent: "#a78bfa",
    Icon: ({ className }: { className?: string }) => <GitHubIcon className={className} />,
  },
  {
    label: "LinkedIn",
    value: "pratik-sonigra",
    href: "https://www.linkedin.com/in/pratik-sonigra",
    description: "Connect on LinkedIn",
    accentRgb: "52,211,153",
    accent: "#34d399",
    Icon: ({ className }: { className?: string }) => <LinkedInIcon className={className} />,
  },
];

function ContactCard({
  label, value, href, description, accent, accentRgb, Icon,
}: typeof contactLinks[0]) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <a
      ref={cardRef}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      aria-label={description}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col items-center gap-3 w-full sm:w-44 px-5 py-5 sm:py-6 rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: hovered ? `rgba(${accentRgb}, 0.45)` : "rgba(255,255,255,0.08)",
        boxShadow: hovered ? `0 0 32px rgba(${accentRgb}, 0.15)` : "none",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Fluid cursor glow */}
      {hovered && (
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 200,
            height: 200,
            left: mouse.x - 100,
            top: mouse.y - 100,
            background: `radial-gradient(circle, rgba(${accentRgb}, 0.18) 0%, rgba(${accentRgb}, 0.05) 50%, transparent 70%)`,
            transition: "left 0.05s ease-out, top 0.05s ease-out",
          }}
        />
      )}

      {/* Top accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: hovered ? 1 : 0.3,
        }}
      />

      <div
        className="relative z-10 p-3 rounded-xl border transition-all duration-150"
        style={{
          color: accent,
          borderColor: hovered ? `rgba(${accentRgb}, 0.4)` : `rgba(${accentRgb}, 0.2)`,
          background: hovered ? `rgba(${accentRgb}, 0.15)` : `rgba(${accentRgb}, 0.08)`,
        }}
      >
        <Icon />
      </div>

      <div className="relative z-10 text-center">
        <p
          className="text-sm font-semibold transition-colors duration-150"
          style={{ color: hovered ? accent : "#e2e8f0" }}
        >
          {label}
        </p>
        <p className="text-[10px] text-slate-500 mt-0.5 leading-snug text-center break-all">{value}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  const [sectionMouse, setSectionMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSectionMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section
      id="contact"
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
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-3">
            Let&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connect
            </span>
          </h2>
          <div className="mx-auto w-16 h-px bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mb-6" />
        </div>

        <p className="text-slate-400 text-base mb-12 leading-relaxed">
          Have a project in mind, want to collaborate, or just want to say hello?
          I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
          {contactLinks.map((link) => (
            <ContactCard key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
