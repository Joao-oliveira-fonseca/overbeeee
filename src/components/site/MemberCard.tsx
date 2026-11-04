import { User } from "lucide-react";
import type { Member } from "@/data/teams";
import { externalLinkProps } from "@/config/links";

export function MemberCard({ m }: { m: Member }) {
  return (
    <article className="card-hive clip-angle group overflow-hidden">
      <div className="hex-pattern relative flex aspect-[4/5] items-center justify-center bg-deep">
        {m.photo ? (
          <img src={m.photo} alt={m.nickname} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="clip-hex flex size-28 items-center justify-center bg-secondary transition-colors group-hover:bg-primary/20">
            <User className="size-12 text-muted-foreground" />
          </div>
        )}
        <span className="font-heading absolute left-3 top-3 bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
          {m.role}
        </span>
      </div>
      <div className="p-5">
        <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-primary">{m.position}</p>
        <h3 className="font-display mt-1 text-3xl">{m.nickname}</h3>
        {m.realName && <p className="text-sm text-muted-foreground">{m.realName}</p>}
        <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
        {m.social && (
          <a href={m.social} {...externalLinkProps} className="mt-3 inline-block text-xs text-primary underline">
            Social
          </a>
        )}
      </div>
    </article>
  );
}
