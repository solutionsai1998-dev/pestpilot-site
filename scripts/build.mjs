import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "app/layout.tsx",
  "app/page.tsx",
  "components/layout/Header.tsx",
  "components/layout/Footer.tsx",
  "components/layout/Nav.tsx",
  "components/layout/MobileMenu.tsx",
  "components/shared/Button.tsx",
  "components/shared/Badge.tsx",
  "components/shared/Card.tsx",
  "components/shared/TestimonialCard.tsx",
  "components/shared/VideoModal.tsx",
  "styles/globals.css",
  "tailwind.config.ts",
  "next.config.js"
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length > 0) {
  console.error("Build validation failed. Missing required files:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log("Offline scaffold validation passed.");
