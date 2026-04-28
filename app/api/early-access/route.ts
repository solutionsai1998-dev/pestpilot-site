import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Resend } from "resend";

export const runtime = "nodejs";

const DATA_FILE = process.env.VERCEL
  ? path.join("/tmp", "pestpilot-early-access-submissions.json")
  : path.join(process.cwd(), "data", "submissions.json");
const NOTIFICATION_EMAIL = "solutions.ai1998@gmail.com";
const FROM_EMAIL = process.env.EARLY_ACCESS_FROM_EMAIL || "PestPilot <onboarding@resend.dev>";

type Submission = {
  name: string;
  email: string;
  company: string;
  technicians: string;
  painPoint: string;
  submittedAt: string;
};

function readSubmissions(): Submission[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeSubmissions(submissions: Submission[]) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2));
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendSubmissionEmail(submission: Submission) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return;
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date(submission.submittedAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Phoenix"
  });

  const rows = [
    ["Name", submission.name],
    ["Email", submission.email],
    ["Company", submission.company || "Not provided"],
    ["Technicians", submission.technicians || "Not provided"],
    ["Biggest pain point", submission.painPoint || "Not provided"],
    ["Submitted", `${submittedAt} MST`]
  ];

  await resend.emails.send({
    from: FROM_EMAIL,
    to: NOTIFICATION_EMAIL,
    replyTo: submission.email,
    subject: `New PestPilot early access lead: ${submission.name}`,
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #17382a;">
        <h2>New PestPilot early access lead</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="font-weight: 700; border-bottom: 1px solid #e5e7eb;">${escapeHtml(label)}</td>
                  <td style="border-bottom: 1px solid #e5e7eb;">${escapeHtml(value)}</td>
                </tr>`
            )
            .join("")}
        </table>
      </div>`
  });
}

export async function POST(request: NextRequest) {
  let submission: Submission;

  try {
    const body = await request.json();
    const { name, email, company, technicians, painPoint } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    submission = {
      name: String(name).trim(),
      email: String(email).trim(),
      company: String(company || "").trim(),
      technicians: String(technicians || "").trim(),
      painPoint: String(painPoint || "").trim(),
      submittedAt: new Date().toISOString()
    };
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  try {
    await sendSubmissionEmail(submission);
  } catch (error) {
    console.error("Early access email failed", error);
  }

  const submissions = readSubmissions();
  submissions.push(submission);
  writeSubmissions(submissions);

  return NextResponse.json({ success: true }, { status: 201 });
}
