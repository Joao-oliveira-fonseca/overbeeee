import { createFileRoute } from "@tanstack/react-router";
import { Film, Gamepad2, Headphones, MessageSquare, Monitor, Search, Swords, UserPlus, Users } from "lucide-react";
import frame from "@/assets/hex_frame.png.asset.json";
import { HexFloaters, PageHero, Reveal, SectionTitle } from "@/components/site/Reveal";
import { DiscordButton, InstagramButton } from "@/components/site/Social";
import { INSTAGRAM_HANDLE } from "@/config/links";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "OVERBEE Community — Welcome to the Hive" },
      { name: "description", content: "Join the OVERBEE Overwatch community on Discord and Instagram, for PC and Console players." },
      { property: "og:title", content: "OVERBEE Community — Welcome to the Hive" },
      { property: "og:description", content: "Join the OVERBEE Overwatch community on Discord and Instagram." },
    ],
  }),
  component: Community,
});

const features = [
  { t: "Chat comunitário", I: MessageSquare }, { t: "Procurando grupo", I: Search }, { t: "Partidas competitivas", I: Swords },
  { t: "Compartilhamento de clips", I: Film }, { t: "Canais de voz", I: Headphones }, { t: "Recrutamento", I: UserPlus },
  { t: "Interação entre jogadores", I: Users },
];

function Community() {
  return (
    <>
      <PageHero kicker="Community" title="Welcome to the hive." />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle kicker="Open to all" title="A community for every player" />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { t: "PC Community", I: Monitor, d: "Espaço para jogadores de computador encontrarem parceiros, jogarem juntos e compartilharem experiências." },
            { t: "Console Community", I: Gamepad2, d: "Espaço para jogadores de console se conectarem e participarem das atividades da comunidade." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="card-hive clip-angle h-full p-10">
                <c.I className="size-10 text-primary" />
                <h3 className="font-display mt-4 text-5xl">{c.t}</h3>
                <p className="mt-3 text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="Inside the Discord" title="What you can find here" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.05}>
                <div className="card-hive clip-angle flex h-full flex-col items-center gap-3 p-5 text-center">
                  <f.I className="size-7 text-primary" />
                  <span className="font-heading text-sm font-bold">{f.t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${frame.url})` }} />
        <div className="absolute inset-0 bg-deep/60" />
        <HexFloaters />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="font-heading text-xs font-bold tracking-[0.35em] text-primary">JOIN OUR DISCORD</p>
          <h2 className="font-display mt-3 text-7xl md:text-8xl">Become part of the <span className="text-primary text-glow">Hive.</span></h2>
          <DiscordButton label="Join the Hive" className="mt-10 !px-12 !py-6 !text-lg" />
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <SectionTitle kicker="Our Instagram" title={INSTAGRAM_HANDLE} />
        <InstagramButton label="Our Instagram" variant="solid" />
      </section>
    </>
  );
}
