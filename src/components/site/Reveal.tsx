import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12">
      {kicker && <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">{kicker}</p>}
      <h2 className="font-display mt-2 text-5xl md:text-6xl">{title}</h2>
      <div className="mt-4 h-1 w-20 bg-primary" />
      {sub && <p className="mt-5 max-w-2xl text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

export function PageHero({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <section className="hex-pattern relative overflow-hidden border-b border-border pb-20 pt-40">
      <HexFloaters />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-3 text-6xl leading-none md:text-8xl"
        >
          {title}
        </motion.h1>
        {sub && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{sub}</p>}
      </div>
    </section>
  );
}

const floaters = [
  { l: "8%", t: "20%", s: 60, d: 0 }, { l: "80%", t: "15%", s: 90, d: 2 }, { l: "65%", t: "70%", s: 40, d: 4 },
  { l: "20%", t: "75%", s: 70, d: 1 }, { l: "92%", t: "55%", s: 30, d: 3 }, { l: "45%", t: "30%", s: 24, d: 5 },
];
export function HexFloaters() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {floaters.map((f, i) => (
        <div key={i} className="clip-hex animate-float-hex absolute border bg-primary/20" style={{ left: f.l, top: f.t, width: f.s, height: f.s, animationDelay: `${f.d}s` }} />
      ))}
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={`p${i}`} className="animate-rise absolute bottom-0 size-1 rounded-full bg-primary" style={{ left: `${(i * 7.3) % 100}%`, animationDuration: `${10 + (i % 5) * 3}s`, animationDelay: `${i * 0.8}s` }} />
      ))}
    </div>
  );
}
