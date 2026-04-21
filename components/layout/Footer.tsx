import { Facebook, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { footerLinks, legalLinks } from "@/lib/constants";

const socialIcons = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Youtube, label: "YouTube" }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <Link className="text-2xl font-extrabold tracking-tight text-primary" href="/">
            PestPilot
          </Link>
          <p className="max-w-md text-small text-text-light">
            Pest control software for scheduling, dispatch, invoicing, and compliance.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-text-light">Navigate</h2>
          <nav aria-label="Footer" className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link className="text-sm text-text hover:text-primary-light" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-text-light">Legal</h2>
            <div className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link className="text-sm text-text hover:text-primary-light" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-text-light">Social</h2>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <Link
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-primary transition hover:border-primary hover:bg-primary hover:text-white"
                  href={href}
                  key={label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container flex flex-col gap-2 py-4 text-small text-text-light md:flex-row md:items-center md:justify-between">
          <p className="m-0">© 2026 PestPilot. All rights reserved.</p>
          <p className="m-0">Built exclusively for pest control operators.</p>
        </div>
      </div>
    </footer>
  );
}
