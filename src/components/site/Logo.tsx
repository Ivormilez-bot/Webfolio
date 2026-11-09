import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-baseline gap-2 font-display ${className}`}
      aria-label="Ivor Wanjala — home"
    >
      <span className="text-lg font-semibold tracking-tight text-foreground">Ivor Wanjala</span>
      <span className="h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
    </Link>
  );
}
