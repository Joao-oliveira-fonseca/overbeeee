import { Instagram, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { DISCORD_INVITE_URL, INSTAGRAM_URL, externalLinkProps } from "@/config/links";

type Props = { label: string; href?: string; variant?: "solid" | "outline"; icon?: ReactNode; className?: string };

function ExternalButton({ label, href, variant = "solid", icon, className = "" }: Props & { href: string }) {
  return (
    <a href={href} {...externalLinkProps} className={`${variant === "solid" ? "btn-honey" : "btn-outline-honey"} ${className}`}>
      {icon}
      {label}
    </a>
  );
}

export function DiscordButton({ label = "Join Discord", href = DISCORD_INVITE_URL, ...rest }: Partial<Props>) {
  return <ExternalButton label={label} href={href} icon={<MessageCircle className="size-4" />} {...rest} />;
}

export function InstagramButton({ label = "Instagram", href = INSTAGRAM_URL, variant = "outline", ...rest }: Partial<Props>) {
  return <ExternalButton label={label} href={href} variant={variant} icon={<Instagram className="size-4" />} {...rest} />;
}
