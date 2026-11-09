import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/softbytestudios/" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net/ivormilez" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ivor-wanjala-b63664112/" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Available for select projects · 2026
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Let's build something
              <br />
              worth remembering.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-foreground/80 hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-foreground/80 hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-foreground/80 hover:text-primary">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-foreground/80 hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Connect</p>
              <ul className="space-y-2 text-sm">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground/80 hover:text-primary"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ivor Wanjala. Crafted with intent.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:ivorwanjala@gmail.com" className="hover:text-foreground">
              ivorwanjala@gmail.com
            </a>
            <span>Kenya · Remote worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
