import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Nav } from "@/components/layout/Nav";
import { Button } from "@/components/shared/Button";
import { PestPilotLogo } from "@/components/shared/PestPilotLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-white/95 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-6 py-4">
        <Link className="max-w-[13rem] overflow-hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href="/">
          <PestPilotLogo markHeight={36} markWidth={32} wordmarkSize={24} />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Nav />
          <Button href="/pricing">Start Free Trial</Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
