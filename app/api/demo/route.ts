import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const NOTIFICATION_EMAIL = "solutions.ai1998@gmail.com";
const FROM_EMAIL = process.env.EARLY_ACCESS_FROM_EMAIL || "PestPilot <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { fullName, companyName, email, phone, technicians, software } = body;

    if (!fullName || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const resend = new Resend(apiKey);

    const rows = [
      ["Name", fullName],
      ["Email", email],
      ["Company", companyName || "Not provided"],
      ["Phone", phone || "Not provided"],
      ["Technicians", technicians || "Not provided"],
      ["Current software", software || "Not provided"],
    ];

    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `New PestPilot demo request: ${fullName} — ${companyName || "No company"}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #17382a;">
          <h2>New PestPilot demo request</h2>
          <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
            ${rows.map(([label, value]) => `
                <tr>
                  <td style="font-weight: 700; border-bottom: 1px solid #e5e7eb;">${escapeHtml(label)}</td>
                  <td style="border-bottom: 1px solid #e5e7eb;">${escapeHtml(value)}</td>
                </tr>`).join("")}
          </table>
        </div>`,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Demo request email failed", error);
    return NextResponse.json({ error: "Failed to send demo request." }, { status: 500 });
  }
}
