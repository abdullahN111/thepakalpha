import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();

  const res = await fetch("https://script.google.com/macros/s/AKfycbyb0mbmXGhh4j1oPh4OcmZ4GSeLXY1jdAzMYQB5VwCjjprU8WlYJzWsvYHl24SpbO5gdw/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

const message = await res.text();
  return NextResponse.json({ message });
}
