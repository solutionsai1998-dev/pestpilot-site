import clsx from "clsx";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

type NavProps = {
  className?: string;
  onNavigate?: () => void;
};

export function Nav({ className, onNavigate }: NavProps) {
  return (
    <nav aria-label="Primary" className={clsx("flex items-center gap-6", className)}>
      {navLinks.map((link) => (
        <Link
          className="text-sm font-medium text-text transition-colors hover:text-primary-light"
          href={link.href}
          key={link.href}
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
