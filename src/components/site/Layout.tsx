
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { DiscordButton, InstagramButton } from "./Social";
import {
  DISCORD_INVITE_URL,
  INSTAGRAM_URL,
  externalLinkProps,
} from "@/config/links";

// Logo principal hospedada na pasta public
const logo = "/overbee.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/teams", label: "Teams" },
  { to: "/competitive", label: "Competitive" },
  { to: "/community", label: "Community" },
] as const;

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={logo}
        alt="OVERBEE logo"
        width={size}
        height={size}
        className="clip-hex bg-foreground object-contain"
        style={{ width: size, height: size }}
      />

      <span className="font-display text-2xl tracking-wider">
        OVER<span className="text-primary">BEE</span>
      </span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);

    on();
    window.addEventListener("scroll", on);

    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-deep/90 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="font-heading relative text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:after:absolute data-[status=active]:after:-bottom-2 data-[status=active]:after:left-0 data-[status=active]:after:h-0.5 data-[status=active]:after:w-full data-[status=active]:after:bg-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <DiscordButton className="!px-5 !py-3" />
        </div>

        <button
          aria-label="Open menu"
          className="text-primary lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden border-b border-border bg-deep lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  className="font-display text-3xl data-[status=active]:text-primary"
                >
                  {n.label}
                </Link>
              ))}

              <DiscordButton />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="hex-pattern border-t border-primary/40 bg-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo size={56} />

          <p className="font-heading mt-4 text-sm font-bold tracking-[0.3em] text-primary">
            THE HIVE OF OVERWATCH
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            "ONE HIVE. ONE COMMUNITY. ONE VISION."
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-heading text-sm uppercase tracking-widest text-muted-foreground hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3">
          <DiscordButton />
          <InstagramButton />
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs tracking-widest text-muted-foreground">
        © 2026 OVERBEE. ALL RIGHTS RESERVED. ·{" "}
        <a
          href={INSTAGRAM_URL}
          {...externalLinkProps}
          className="hover:text-primary"
        >
          Instagram
        </a>{" "}
        ·{" "}
        <a
          href={DISCORD_INVITE_URL}
          {...externalLinkProps}
          className="hover:text-primary"
        >
          Discord
        </a>
      </div>
    </footer>
  );
}

function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200);

    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deep"
        >
          <motion.img
            src={logo}
            alt="OVERBEE"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="clip-hex size-28 bg-foreground object-contain"
          />

          <p className="font-display mt-6 text-4xl tracking-[0.3em] text-primary text-glow">
            OVERBEE
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-deep">
      <Loader />
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
