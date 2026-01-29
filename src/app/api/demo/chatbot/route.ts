import { NextResponse } from "next/server";

function fakeAI(prompt: string) {
    const p = prompt.toLowerCase();

    if (p.includes("linkedin bio")) {
        return "Software Engineer focused on cloud-native systems, real-time streaming, and secure APIs. MS CS @ CSUF. Built AI apps and distributed systems using Docker/Kubernetes, Kafka/NATS, and modern web stacks.";
    }

    if (p.includes("summarize") && p.includes("experience")) {
        return "2+ years building cloud-native and real-time systems at ProTee United, improving latency, reliability, and CI/CD automation.\nML internship experience with ResNet/YOLO + practical MLOps and testing workflows.";
    }

    if (p.includes("rest api") && p.includes("voting")) {
        return [
            "Example REST API design (dummy):",
            "POST /auth/connect-wallet -> { walletId }",
            "GET /elections -> list active elections",
            "POST /votes -> { electionId, candidateId, walletId }",
            "GET /results/:electionId -> tallies + audit log hash",
        ].join("\n");
    }

    // default generic response
    return `Fake AI reply:\n\nI received: "${prompt}"\n\nIf this were the real project, I'd route this to your backend (or OpenAI) and stream tokens back to the UI.`;
}

export async function POST(req: Request) {
    const body = await req.json();
    const prompt = String(body?.prompt || "");
    const reply = fakeAI(prompt);
    return NextResponse.json({ reply });
}
