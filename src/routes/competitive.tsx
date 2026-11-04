import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Gamepad2, Monitor, Trophy } from "lucide-react";
import { PageHero, Reveal, SectionTitle } from "@/components/site/Reveal";
import { DiscordButton } from "@/components/site/Social";
import { CONSOLE_TRYOUT_URL, PC_TRYOUT_URL } from "@/config/links";
import { consoleAchievements, pcAchievements, type Achievement } from "@/data/teams";

export const Route = createFileRoute("/competitive")({
  head: () => ({
    meta: [
      { title: "OVERBEE Competitive — Built to Compete" },
      { name: "description", content: "OVERBEE competitive scene, PC and Console recruitment, tryouts, scrims and achievements." },
      { property: "og:title", content: "OVERBEE Competitive — Built to Compete" },
      { property: "og:description", content: "Recruitment, tryouts, scrims and achievements for PC and Console." },
    ],
  }),
  component: Competitive,
});

function Results({ title, items }: { title: string; items: Achievement[] }) {
  return (
    <div className="card-hive clip-angle p-6">
      <h3 className="font-display flex items-center gap-2 text-3xl"><Trophy className="size-6 text-primary" /> {title}</h3>
      <ul className="mt-4 divide-y divide-border">
        {items.map((a, i) => (
          <li key={i} className="flex justify-between gap-4 py-3 text-sm">
            <span>{a.event}</span>
            <span className="text-primary">{a.result}</span>
            <span className="text-muted-foreground">{a.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Competitive() {
  return (
    <>
      <PageHero kicker="Competitive" title="Built to compete." />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle kicker="Our competitive scene" title="Develop. Compete. Win." sub="A OVERBEE investe no desenvolvimento de jogadores e equipes, com treinos estruturados, análise de partidas e participação em campeonatos de Overwatch." />
      </section>
      <section className="border-y border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="Recruitment" title="Join the lineup" />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { t: "PC Recruitment", I: Monitor, d: "Estamos buscando jogadores comprometidos, competitivos e com vontade de evoluir junto à nossa equipe de PC.", b: "Apply for PC Tryout", h: PC_TRYOUT_URL },
              { t: "Console Recruitment", I: Gamepad2, d: "Estamos buscando jogadores comprometidos, competitivos e com vontade de evoluir junto à nossa equipe de Console.", b: "Apply for Console Tryout", h: CONSOLE_TRYOUT_URL },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="card-hive clip-angle hex-pattern h-full p-10">
                  <c.I className="size-10 text-primary" />
                  <h3 className="font-display mt-4 text-5xl">{c.t}</h3>
                  <p className="mt-3 text-muted-foreground">{c.d}</p>
                  <DiscordButton label={c.b} href={c.h} className="mt-8" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle kicker="Tryouts & Scrims" title="Upcoming activity" />
        <Reveal>
          <div className="card-hive clip-angle flex items-center gap-4 p-8">
            <CalendarDays className="size-8 shrink-0 text-primary" />
            <p className="text-muted-foreground">Nenhuma seletiva ou scrim anunciada no momento. Fique de olho no nosso Discord para as próximas datas.</p>
          </div>
        </Reveal>
      </section>
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="Achievements" title="Competitive history" sub="Placeholders — official results will be added soon." />
          <div className="grid gap-6 md:grid-cols-2">
            <Results title="PC" items={pcAchievements} />
            <Results title="Console" items={consoleAchievements} />
          </div>
        </div>
      </section>
    </>
  );
}
