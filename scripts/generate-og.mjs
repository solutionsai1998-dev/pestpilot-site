import { createCanvas } from "canvas";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "..", "public", "og-image.png");

const W = 1200;
const H = 630;

const canvas = createCanvas(W, H);
const ctx = canvas.getContext("2d");

// Background gradient
const grad = ctx.createLinearGradient(0, 0, W, H);
grad.addColorStop(0, "#17382a");
grad.addColorStop(0.5, "#1b4332");
grad.addColorStop(1, "#204b37");
ctx.fillStyle = grad;
ctx.fillRect(0, 0, W, H);

// Subtle grid
ctx.strokeStyle = "rgba(255,255,255,0.04)";
ctx.lineWidth = 1;
for (let y = 0; y < H; y += 44) {
  ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
}
for (let x = 0; x < W; x += 44) {
  ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
}

// Ambient glow
const glow = ctx.createRadialGradient(W * 0.3, H * 0.3, 0, W * 0.3, H * 0.3, 400);
glow.addColorStop(0, "rgba(247,127,0,0.12)");
glow.addColorStop(1, "transparent");
ctx.fillStyle = glow;
ctx.fillRect(0, 0, W, H);

// Shield icon — larger, centered above wordmark
const shieldX = W / 2;
const shieldY = 110;
ctx.save();
ctx.translate(shieldX, shieldY);

const S = 1.8; // scale factor
ctx.beginPath();
ctx.moveTo(0, -36 * S);
ctx.bezierCurveTo(30 * S, -36 * S, 36 * S, -30 * S, 36 * S, -20 * S);
ctx.lineTo(36 * S, 10 * S);
ctx.bezierCurveTo(36 * S, 30 * S, 0, 46 * S, 0, 46 * S);
ctx.bezierCurveTo(0, 46 * S, -36 * S, 30 * S, -36 * S, 10 * S);
ctx.lineTo(-36 * S, -20 * S);
ctx.bezierCurveTo(-36 * S, -30 * S, -30 * S, -36 * S, 0, -36 * S);
ctx.closePath();
ctx.strokeStyle = "#F77F00";
ctx.lineWidth = 3;
ctx.stroke();

// Ant inside shield (scaled)
ctx.fillStyle = "#F77F00";
ctx.beginPath(); ctx.ellipse(0, 0, 14, 10, 0, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.ellipse(0, 20, 12, 8, 0, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.ellipse(0, 38, 10, 7, 0, 0, Math.PI * 2); ctx.fill();
ctx.strokeStyle = "#F77F00";
ctx.lineWidth = 2.5;
ctx.beginPath(); ctx.moveTo(-7, -8); ctx.lineTo(-20, -26); ctx.stroke();
ctx.beginPath(); ctx.moveTo(7, -8); ctx.lineTo(20, -26); ctx.stroke();
ctx.lineWidth = 1.5;
ctx.beginPath(); ctx.moveTo(-12, 4); ctx.lineTo(-30, -2); ctx.stroke();
ctx.beginPath(); ctx.moveTo(12, 4); ctx.lineTo(30, -2); ctx.stroke();
ctx.beginPath(); ctx.moveTo(-10, 20); ctx.lineTo(-28, 20); ctx.stroke();
ctx.beginPath(); ctx.moveTo(10, 20); ctx.lineTo(28, 20); ctx.stroke();
ctx.beginPath(); ctx.moveTo(-8, 38); ctx.lineTo(-26, 44); ctx.stroke();
ctx.beginPath(); ctx.moveTo(8, 38); ctx.lineTo(26, 44); ctx.stroke();

ctx.restore();

// Wordmark — BIG
const wordmarkY = 310;
ctx.font = "bold 140px system-ui, -apple-system, sans-serif";
ctx.textBaseline = "middle";

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
const lineWidth = 300;
const lineY = wordmarkY + 70;
ctx.strokeStyle = "#F77F00";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo((W - lineWidth) / 2, lineY);
ctx.lineTo((W + lineWidth) / 2, lineY);
ctx.stroke();

// Tagline — bigger
ctx.textAlign = "center";
ctx.font = "bold 44px system-ui, -apple-system, sans-serif";
ctx.fillStyle = "rgba(255,255,255,0.92)";
ctx.fillText("Built for the bugs, not the paperwork.", W / 2, lineY + 60);

// Features line
ctx.font = "24px system-ui, -apple-system, sans-serif";
ctx.fillStyle = "rgba(255,255,255,0.55)";
ctx.fillText("Scheduling  ·  Dispatch  ·  Invoicing  ·  EPA Compliance", W / 2, lineY + 110);

// Bottom-right URL
ctx.textAlign = "right";
ctx.font = "20px system-ui, -apple-system, sans-serif";
ctx.fillStyle = "rgba(255,255,255,0.30)";
ctx.fillText("pestpilot.com", W - 48, H - 36);

const buf = canvas.toBuffer("image/png");
writeFileSync(outputPath, buf);
console.log(`OG image written to ${outputPath} (${buf.length} bytes)`);
