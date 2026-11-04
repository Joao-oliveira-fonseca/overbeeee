import { createFileRoute } from "@tanstack/react-router";
import { Gamepad2, Monitor } from "lucide-react";
import type { ComponentType } from "react";
import { PageHero, Reveal, SectionTitle } from "@/components/site/Reveal";
import { MemberCard } from "@/components/site/MemberCard";
import { consoleRoster, pcRoster, staff, type Member } from "@/data/teams";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "OVERBEE Teams — PC & Console Rosters" },
      { name: "description", content: "Meet the independent OVERBEE PC and Console competitive lineups and staff." },
      { property: "og:title", content: "OVERBEE Teams — PC & Console Rosters" },
      { property: "og:description", content: "Meet the independent OVERBEE PC and Console competitive lineups and staff." },
    ],
  }),
  component: Teams,
});

function Roster({ id, title, sub, members, Icon }: { id: string; title: string; sub: string; members: Member[]; Icon: ComponentType<{ className?: string }> }) {
  return (
    <section id={id} className="scroll-mt-24 py-24 odd:bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 flex items-end justify-between gap-6 border-b border-primary/40 pb-6">
          <div>
            <p className="font-heading flex items-center gap-2 text-xs font-bold uppercase tracking-[0.35em] text-primary"><Icon className="size-4" /> Roster</p>
            <h2 className="font-display mt-2 text-6xl md:text-8xl">{title}</h2>
            <p className="font-heading mt-2 tracking-widest text-muted-foreground">{sub}</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {members.map((m, i) => <Reveal key={i} delay={(i % 4) * 0.06}><MemberCard m={m} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Teams() {
  return (
    <>
      <PageHero kicker="Our teams" title="Two lineups. One hive." sub="Placeholders — official player information will be added soon." />
      <Roster id="pc" title="OVERBEE PC" sub="BUILT FOR PRECISION. UNITED TO WIN." members={pcRoster} Icon={Monitor} />
      <Roster id="console" title="OVERBEE CONSOLE" sub="ONE TEAM. ONE PURPOSE. ONE HIVE." members={consoleRoster} Icon={Gamepad2} />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle kicker="Organization" title="Management & Staff" />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-7">
          {staff.map((m, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="card-hive clip-angle p-5 text-center">
                <div className="clip-hex mx-auto size-16 bg-primary/20" />
                <p className="font-heading mt-4 text-[11px] font-bold uppercase tracking-widest text-primary">{m.position}</p>
                <p className="font-display text-2xl">{m.nickname}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
