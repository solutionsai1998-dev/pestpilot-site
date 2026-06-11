"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/shared/Button";
import { PestPilotLogo } from "@/components/shared/PestPilotLogo";
import { navLinks } from "@/lib/constants";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const overlay = isOpen ? (
    <div className="fixed inset-0 z-[9999]">
      <button
        aria-label="Close mobile menu overlay"
        className="absolute inset-0 bg-primary/40"
        onClick={() => setIsOpen(false)}
        type="button"
      />
      <aside
        aria-label="Mobile navigation"
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col gap-8 overflow-y-auto bg-white p-6 shadow-2xl"
        id="mobile-nav-drawer"
      >
        <div className="flex items-center justify-between">
          <Link className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href="/" onClick={() => setIsOpen(false)}>
            <PestPilotLogo markHeight={32} markWidth={28} wordmarkSize={22} />
          </Link>
          <button
            aria-label="Close navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              className="rounded-md text-lg font-semibold text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button className="w-full" href="/demo" onClick={() => setIsOpen(false)}>
          Book a Demo
        </Button>
      </aside>
    </div>
  ) : null;

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-nav-drawer"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
