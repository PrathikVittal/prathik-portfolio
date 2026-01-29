export type Project = {
    slug: "chatbot" | "assistant" | "voting";
    title: string;
    summary: string;
    tags: string[];
    bullets: string[];
    codeUrl: string;
    demoLabel: string;
};

export const projects: Project[] = [
    {
        slug: "chatbot",
        title: "AI SaaS Chatbot (MERN + OpenAI) — Demo: Fake AI",
        summary:
            "A secure, responsive chatbot experience using a mocked AI backend to demonstrate streaming-style UX without real keys.",
        tags: ["React", "Node concepts", "OpenAI (mock)", "Kafka (concept)", "Docker (concept)"],
        bullets: [
            "Fake AI demo: instant responses via Next.js API route.",
            "UI supports chat history, code blocks, and quick actions.",
            "Later: swap fake API with your real backend or OpenAI route.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "Try Chatbot Demo",
    },
    {
        slug: "assistant",
        title: "AI Personal Assistant (Next.js + Convex + Eden AI) — Demo: Mock Gmail",
        summary:
            "Mocked Gmail-auth flow and assistant actions to showcase product UX (no real auth needed).",
        tags: ["Next.js", "Auth UI (mock)", "Microservices (concept)", "Docker/K8s (concept)"],
        bullets: [
            "Mock Gmail sign-in/out UI.",
            "Assistant actions: generate email, grammar check, YouTube script — all mocked.",
            "Later: connect real auth + backend endpoints.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "Try Assistant Demo",
    },
    {
        slug: "voting",
        title: "Smart Vote (Blockchain) — Demo: Simulated Wallet + Voting",
        summary:
            "A simulated voting app with dummy wallet connect and tamper-proof-style UI (no chain required).",
        tags: ["Solidity (concept)", "Security", "Encryption (concept)", "UI simulation"],
        bullets: [
            "Dummy wallet connect flow.",
            "Vote casting + results tally simulated locally.",
            "Later: integrate testnet + contract calls.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "Try Voting Demo",
    },
];
