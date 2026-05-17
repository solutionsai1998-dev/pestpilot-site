import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Nav } from "@/components/layout/Nav";
import { Button } from "@/components/shared/Button";
import { PestPilotLogo } from "@/components/shared/PestPilotLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-white/95 backdrop-blur">
      <div className="container flex min-h-[4.5rem] items-center justify-between gap-4 py-3 md:min-h-20 md:gap-6 md:py-4">
        <Link className="max-w-[11rem] overflow-hidden rounded-md md:max-w-[13rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href="/">
          <PestPilotLogo markHeight={34} markWidth={30} wordmarkSize={23} />
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
