export type NavItem = {
  href: string;
  label: string;
};

export const navLinks: NavItem[] = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
];

export const footerLinks: NavItem[] = [
  ...navLinks,
  { href: "/demo", label: "Demo" }
];

export const legalLinks: NavItem[] = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" }
];

export const socialLinks = [
  { href: "#", label: "X" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "YouTube" }
];
