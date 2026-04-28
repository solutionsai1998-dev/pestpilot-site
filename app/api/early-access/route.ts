import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const DATA_FILE = path.join(process.cwd(), "data", "submissions.json");

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, technicians, painPoint } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const submission: Submission = {
      name: String(name).trim(),
      email: String(email).trim(),
      company: String(company || "").trim(),
      technicians: String(technicians || "").trim(),
      painPoint: String(painPoint || "").trim(),
      submittedAt: new Date().toISOString()
    };

    const submissions = readSubmissions();
    submissions.push(submission);
    writeSubmissions(submissions);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
