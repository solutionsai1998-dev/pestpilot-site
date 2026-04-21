import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Nav } from "@/components/layout/Nav";
import { Button } from "@/components/shared/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-white/95 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-6 py-4">
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
        <div className="hidden items-center gap-8 md:flex">
          <Nav />
          <Button href="/demo">Start Free Trial</Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
