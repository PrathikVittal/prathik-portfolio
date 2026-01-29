import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const action = String(body?.action || "");
    const prompt = String(body?.prompt || "");

    let result = "";

    if (action === "email") {
        result =
            `Subject: Request for a quick meeting\n\n` +
            `Hi [Name],\n\n` +
            `I hope you’re doing well. I wanted to check if you have 15–20 minutes sometime next week for a quick meeting to discuss ${prompt.toLowerCase()}.\n\n` +
            `I’m available [provide 2–3 time options], but I’m happy to work around your schedule.\n\n` +
            `Thank you,\nPrathik`;
    } else if (action === "grammar") {
        result =
            "Mock grammar suggestions:\n" +
            "- Keep sentences short and direct.\n" +
            "- Use consistent tense.\n" +
            "- Replace vague words with specifics.\n\n" +
            `Original:\n${prompt}`;
    } else if (action === "youtube") {
        result =
            "YouTube script (mock):\n\n" +
            "Hook (0:00–0:10): Here’s a quick way to solve this.\n" +
            "Body (0:10–0:45): Explain 3 key steps.\n" +
            "CTA (0:45–1:00): Like/subscribe + next video.\n\n" +
            `Topic:\n${prompt}`;
    } else {
        result = `Unknown action: ${action}`;
    }

    return NextResponse.json({ result });
}
