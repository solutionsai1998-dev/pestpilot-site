import { createCanvas, registerFont } from "canvas";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "..", "public", "og-image.png");

const W = 1200;
const H = 630;

const canvas = createCanvas(W, H);
const ctx = canvas.getContext("2d");

// Background gradient: deep forest green
const grad = ctx.createLinearGradient(0, 0, W, H);
grad.addColorStop(0, "#17382a");
grad.addColorStop(0.5, "#1b4332");
grad.addColorStop(1, "#204b37");
ctx.fillStyle = grad;
ctx.fillRect(0, 0, W, H);

// Subtle topographic line pattern
ctx.strokeStyle = "rgba(255,255,255,0.04)";
ctx.lineWidth = 1;
for (let y = 0; y < H; y += 44) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(W, y);
  ctx.stroke();
}
for (let x = 0; x < W; x += 44) {
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, H);
  ctx.stroke();
}

// Shield icon (top-left area, centered above wordmark)
const shieldX = W / 2;
const shieldY = 120;
ctx.save();
ctx.translate(shieldX, shieldY);

// Shield outline
ctx.beginPath();
ctx.moveTo(0, -36);
ctx.bezierCurveTo(30, -36, 36, -30, 36, -20);
ctx.lineTo(36, 10);
ctx.bezierCurveTo(36, 30, 0, 46, 0, 46);
ctx.bezierCurveTo(0, 46, -36, 30, -36, 10);
ctx.lineTo(-36, -20);
ctx.bezierCurveTo(-36, -30, -30, -36, 0, -36);
ctx.closePath();
ctx.strokeStyle = "#F77F00";
ctx.lineWidth = 2.5;
ctx.stroke();

// Simple ant silhouette inside shield
ctx.fillStyle = "#F77F00";
// Body (3 segments)
ctx.beginPath();
ctx.ellipse(0, 0, 8, 6, 0, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(0, 12, 7, 5, 0, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(0, 22, 6, 4, 0, 0, Math.PI * 2);
ctx.fill();
// Antennae
ctx.strokeStyle = "#F77F00";
ctx.lineWidth = 1.5;
ctx.beginPath();
ctx.moveTo(-4, -5);
ctx.lineTo(-12, -16);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(4, -5);
ctx.lineTo(12, -16);
ctx.stroke();
// Legs
ctx.lineWidth = 1;
ctx.beginPath(); ctx.moveTo(-7, 2); ctx.lineTo(-18, -2); ctx.stroke();
ctx.beginPath(); ctx.moveTo(7, 2); ctx.lineTo(18, -2); ctx.stroke();
ctx.beginPath(); ctx.moveTo(-6, 12); ctx.lineTo(-17, 12); ctx.stroke();
ctx.beginPath(); ctx.moveTo(6, 12); ctx.lineTo(17, 12); ctx.stroke();
ctx.beginPath(); ctx.moveTo(-5, 22); ctx.lineTo(-16, 26); ctx.stroke();
ctx.beginPath(); ctx.moveTo(5, 22); ctx.lineTo(16, 26); ctx.stroke();

ctx.restore();

// Wordmark: "Pest" in white, "Pilot" in amber
const wordmarkY = 280;
ctx.font = "bold 96px system-ui, -apple-system, sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// "Pest" in white
const pestWidth = ctx.measureText("Pest").width;
const pilotWidth = ctx.measureText("Pilot").width;
const totalWidth = pestWidth + pilotWidth;
const startX = (W - totalWidth) / 2;

ctx.textAlign = "left";
ctx.fillStyle = "#FFFFFF";
ctx.fillText("Pest", startX, wordmarkY);

ctx.fillStyle = "#F77F00";
ctx.fillText("Pilot", startX + pestWidth, wordmarkY);

// Amber accent line
const lineWidth = 200;
const lineY = wordmarkY + 56;
ctx.strokeStyle = "#F77F00";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo((W - lineWidth) / 2, lineY);
ctx.lineTo((W + lineWidth) / 2, lineY);
ctx.stroke();

// Tagline
ctx.textAlign = "center";
ctx.font = "32px system-ui, -apple-system, sans-serif";
ctx.fillStyle = "rgba(255,255,255,0.88)";
ctx.fillText("Built for the bugs, not the paperwork.", W / 2, lineY + 50);

// Features line
ctx.font = "20px system-ui, -apple-system, sans-serif";
ctx.fillStyle = "rgba(255,255,255,0.50)";
ctx.fillText("Scheduling  ·  Dispatch  ·  Invoicing  ·  EPA Compliance", W / 2, lineY + 95);

// Bottom-right URL
ctx.textAlign = "right";
ctx.font = "16px system-ui, -apple-system, sans-serif";
ctx.fillStyle = "rgba(255,255,255,0.30)";
ctx.fillText("pestpilot.com", W - 40, H - 30);

const buf = canvas.toBuffer("image/png");
writeFileSync(outputPath, buf);
console.log(`OG image written to ${outputPath} (${buf.length} bytes)`);
