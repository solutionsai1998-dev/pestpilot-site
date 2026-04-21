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
          <Link className="flex items-center gap-2 rounded-md text-2xl font-extrabold tracking-tight text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href="/">
            <svg viewBox="-60 -60 120 130" className="h-8 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 -48 C40 -48 48 -40 48 -28 L48 14 C48 40 0 58 0 58 C0 58 -48 40 -48 14 L-48 -28 C-48 -40 -40 -48 0 -48Z" stroke="#F77F00" strokeWidth="3" fill="rgba(247,127,0,0.08)"/>
              <ellipse cx="0" cy="-4" rx="10" ry="8" fill="#F77F00"/>
              <ellipse cx="0" cy="14" rx="8" ry="6" fill="#F77F00"/>
              <ellipse cx="0" cy="28" rx="7" ry="5" fill="#F77F00"/>
              <line x1="-5" y1="-10" x2="-16" y2="-24" stroke="#F77F00" strokeWidth="2" strokeLinecap="round"/>
              <line x1="5" y1="-10" x2="16" y2="-24" stroke="#F77F00" strokeWidth="2" strokeLinecap="round"/>
              <line x1="-9" y1="-2" x2="-22" y2="-8" stroke="#F77F00" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="9" y1="-2" x2="22" y2="-8" stroke="#F77F00" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="-8" y1="14" x2="-21" y2="14" stroke="#F77F00" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="8" y1="14" x2="21" y2="14" stroke="#F77F00" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="-6" y1="28" x2="-19" y2="34" stroke="#F77F00" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="6" y1="28" x2="19" y2="34" stroke="#F77F00" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
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
                <Link className="rounded-md text-sm text-text hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href={link.href} key={link.href}>
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-primary transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
