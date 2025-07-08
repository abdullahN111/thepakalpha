import { NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_ID = process.env.SHEET_ID;
const RANGE = "email";

export async function POST(req) {
  const { email } = await req.json();

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: RANGE,
      valueInputOption: "RAW",
      requestBody: { values: [[email]] },
    });

    return NextResponse.json({ message: "Email submitted successfully" });
  } catch (err) {
    console.error("Google Sheets error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
