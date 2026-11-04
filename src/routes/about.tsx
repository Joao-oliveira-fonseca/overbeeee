import { createFileRoute } from "@tanstack/react-router";
import { Handshake, HeartHandshake, Hexagon, Swords, TrendingUp, Users } from "lucide-react";
import logo from "@/assets/overbee_logo.png.asset.json";
import { PageHero, Reveal, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About OVERBEE — More Than a Team" },
      { name: "description", content: "The story, mission, values and hive identity behind OVERBEE." },
      { property: "og:title", content: "About OVERBEE — More Than a Team" },
      { property: "og:description", content: "The story, mission, values and hive identity behind OVERBEE." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Teamwork", d: "Trabalho em equipe.", I: Handshake },
  { t: "Respect", d: "Respeito.", I: HeartHandshake },
  { t: "Evolution", d: "Evolução constante.", I: TrendingUp },
  { t: "Competitiveness", d: "Espírito competitivo.", I: Swords },
  { t: "Community", d: "União.", I: Users },
];

function About() {
  return (
    <>
      <PageHero kicker="About us" title="More than a team. We are a hive." />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <SectionTitle kicker="01" title="Our story" />
          <p className="text-lg text-muted-foreground">A OVERBEE é uma organização e comunidade dedicada a reunir jogadores de Overwatch, incentivando o desenvolvimento individual, a competitividade e o trabalho em equipe.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionTitle kicker="02" title="Our mission" />
          <p className="text-lg text-muted-foreground">Criar um ambiente onde jogadores possam evoluir, competir, construir conexões e conquistar novas oportunidades.</p>
        </Reveal>
      </section>
      <section className="border-y border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="03" title="Our values" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.07}>
                <div className="card-hive clip-angle h-full p-6">
                  <v.I className="size-8 text-primary" />
                  <h3 className="font-display mt-4 text-3xl">{v.t}</h3>
                  <p className="text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="hex-pattern mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <img src={logo.url} alt="OVERBEE hive emblem" className="clip-hex mx-auto w-full max-w-sm bg-foreground object-cover" loading="lazy" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionTitle kicker="04" title="Our identity" />
          <p className="text-lg text-muted-foreground">
            A colmeia é o nosso símbolo. Cada abelha tem um papel, e é a união de todas que constrói algo maior. Assim é a OVERBEE: organização, colaboração e propósito compartilhado — cada jogador, coach e membro da comunidade é uma célula do mesmo favo.
          </p>
          <div className="mt-6 flex gap-3 text-primary">{[0, 1, 2].map((i) => <Hexagon key={i} className="size-6" />)}</div>
        </Reveal>
      </section>
    </>
  );
}
