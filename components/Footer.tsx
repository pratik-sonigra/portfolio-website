export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-slate-400 font-medium">Pratik Sonigra</span>.
          {" "}Built with{" "}
          <span className="text-cyan-400/80">Next.js</span> &amp;{" "}
          <span className="text-indigo-400/80">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
