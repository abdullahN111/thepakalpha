import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();

  const res = await fetch("https://script.google.com/macros/s/AKfycby71CEcqAiDfu114D-LSW_dp5ap_OayTKQB9hnZwh2rRZ6rtPWS_Pt7s9A6SZ4w0AXZ/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const message = await res.text();
  return NextResponse.json({ message });
}
