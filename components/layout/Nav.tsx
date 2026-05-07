import clsx from "clsx";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

type NavProps = {
  className?: string;
  onNavigate?: () => void;
};

const featureGroups = [
  {
    heading: "Run the office",
    links: [
      { href: "/features/scheduling", label: "Scheduling" },
      { href: "/features/dispatch", label: "Dispatch" },
      { href: "/features/invoicing", label: "Invoicing" },
      { href: "/features/team-management", label: "Team Management" }
    ]
  },
  {
    heading: "Customers & compliance",
    links: [
      { href: "/features/customer-portal", label: "Customer Portal & SMS" },
      { href: "/features/chemical-tracking", label: "Chemical Tracking" },
      { href: "/features/reporting", label: "Reporting" },
      { href: "/features/branding", label: "Branding" }
    ]
  }
] as const;

export function Nav({ className, onNavigate }: NavProps) {
  return (
    <nav aria-label="Primary" className={clsx("flex items-center gap-6", className)}>
      {navLinks.map((link) =>
        link.href === "/features" ? (
          <div className="group relative" key={link.href}>
            <Link
              className="text-sm font-medium text-text transition-colors hover:text-primary-light"
              href={link.href}
              onClick={onNavigate}
            >
              {link.label}
            </Link>
            <div className="invisible absolute left-1/2 top-full z-40 w-[520px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid gap-6 rounded-[24px] border border-border bg-white p-6 shadow-xl md:grid-cols-2">
                {featureGroups.map((group) => (
                  <div key={group.heading}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-light">
                      {group.heading}
                    </p>
                    <div className="mt-3 space-y-2">
                      {group.links.map((featureLink) => (
                        <Link
                          className="block rounded-xl px-3 py-2 text-sm font-medium text-text transition hover:bg-bg-alt hover:text-primary"
                          href={featureLink.href}
                          key={featureLink.href}
                          onClick={onNavigate}
                        >
                          {featureLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Link
            className="text-sm font-medium text-text transition-colors hover:text-primary-light"
            href={link.href}
            key={link.href}
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}
