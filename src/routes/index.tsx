import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Gamepad2, Monitor, Users } from "lucide-react";
import logo from const logo = "/overbee.jpg";
import frame from "@/assets/hex_frame.png.asset.json";
import { HexFloaters, Reveal, SectionTitle } from "@/components/site/Reveal";
import { DiscordButton, InstagramButton } from "@/components/site/Social";
import { MemberCard } from "@/components/site/MemberCard";
import { pcRoster } from "@/data/teams";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OVERBEE — The Hive of Overwatch" },
      { name: "description", content: "One hive. One community. One vision. OVERBEE is a competitive Overwatch organization with PC and Console teams." },
      { property: "og:title", content: "OVERBEE — The Hive of Overwatch" },
      { property: "og:description", content: "Competitive Overwatch organization with PC and Console rosters." },
    ],
  }),
  component: Home,
});

function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  return (
    <>
      <section className="hex-pattern relative flex min-h-screen items-center overflow-hidden">
        <motion.div style={{ y, backgroundImage: `url(${frame.url})` }} className="absolute inset-0 bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-deep/70 to-deep" />
        <HexFloaters />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-28 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="font-heading inline-block border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-bold tracking-[0.3em] text-primary">
              THE HIVE OF OVERWATCH
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }} className="font-display mt-6 text-8xl leading-[0.85] md:text-[10rem]">
              OVER<span className="text-primary text-glow">BEE</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="font-heading mt-6 text-xl font-bold tracking-widest">
              "ONE HIVE. ONE COMMUNITY. ONE VISION."
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="mt-4 max-w-xl text-muted-foreground">
              Mais do que uma comunidade, somos uma organização construída por jogadores apaixonados por Overwatch, competitividade e trabalho em equipe.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="mt-10 flex flex-wrap gap-4">
              <Link to="/about" className="btn-outline-honey">Discover Overbee <ArrowRight className="size-4" /></Link>
              <DiscordButton label="Join the Hive" />
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, duration: 0.9 }} className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute -inset-6 clip-hex bg-primary/30 blur-2xl" />
            <img src={logo.url} alt="OVERBEE — A Colmeia emblem" className="clip-hex relative w-full bg-foreground object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle kicker="Who we are" title="An organization built by players" sub="A OVERBEE reúne jogadores de Overwatch para evoluir, competir e construir conexões, em PC e Console." />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { to: "/teams" as const, hash: "pc", t: "PC Competitive Team", s: "Built for precision. United to win.", I: Monitor },
            { to: "/teams" as const, hash: "console", t: "Console Competitive Team", s: "One team. One purpose. One hive.", I: Gamepad2 },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <Link to={c.to} hash={c.hash} className="card-hive clip-angle hex-pattern group relative block overflow-hidden p-10">
                <c.I className="size-12 text-primary" />
                <h3 className="font-display mt-6 text-5xl">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.s}</p>
                <span className="font-heading mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                  View roster <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="Team preview" title="Meet the hive" />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
            {pcRoster.slice(0, 5).map((m, i) => (
              <Reveal key={i} delay={i * 0.05}><MemberCard m={m} /></Reveal>
            ))}
          </div>
          <Link to="/teams" className="btn-outline-honey mt-10">All teams <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      <section className="hex-pattern relative overflow-hidden py-28">
        <HexFloaters />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <Users className="mx-auto size-12 text-primary" />
          <h2 className="font-display mt-4 text-6xl md:text-7xl">Join our community</h2>
          <p className="mt-4 text-muted-foreground">PC ou Console — há um lugar para você na colmeia.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <DiscordButton label="Join our Community" />
            <InstagramButton label="Follow us on Instagram" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
