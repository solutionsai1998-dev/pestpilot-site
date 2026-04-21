"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/shared/Button";
import { navLinks } from "@/lib/constants";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-nav-drawer"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-primary/40">
          <button
            aria-label="Close mobile menu overlay"
            className="absolute inset-0 cursor-default"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <aside
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col gap-8 bg-white p-6 shadow-lg"
            id="mobile-nav-drawer"
          >
            <div className="flex items-center justify-between">
              <Link className="text-xl font-extrabold text-primary" href="/" onClick={() => setIsOpen(false)}>
                PestPilot
              </Link>
              <button
                aria-label="Close navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  className="text-lg font-semibold text-text"
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button className="w-full" href="/demo" onClick={() => setIsOpen(false)}>
              Start Free Trial
            </Button>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
