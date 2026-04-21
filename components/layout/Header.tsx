import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Nav } from "@/components/layout/Nav";
import { Button } from "@/components/shared/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-white/95 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-6 py-4">
        <Link className="rounded-md text-2xl font-extrabold tracking-tight text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href="/">
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
