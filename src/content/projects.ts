export type Project = {
    slug: "agentic-assistant" | "disposable-camera" | "courtroom-chaos" | "titanfund" | "voting";
    title: string;
    summary: string;
    tags: string[];
    bullets: string[];
    codeUrl: string;
    demoLabel: string;
    image?: string;
};

export const projects: Project[] = [
    {
        slug: "disposable-camera",
        title: "Digital Disposable Camera",
        summary:
            "A full-stack platform that turns any phone browser into a disposable camera — guests scan a QR code to capture a host-set shot limit with zero app install or login.",
        tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "AWS S3 & CloudFront"],
        bullets: [
            "Guests scan a QR code to capture a host-set shot limit with no app install or login.",
            "Photos stream into a host-moderated gallery served by a serverless S3 & CloudFront pipeline with UUID-keyed caching.",
            "Bulk ZIP export with NextAuth-secured PostgreSQL/Prisma storage, deployed on AWS.",
        ],
        image: "/projects/Digital%20Disposable%20Events.png",
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "courtroom-chaos",
        title: "Courtroom Chaos",
        summary:
            "A real-time multiplayer AI courtroom game with a voice-interactive AI judge, built in under 24 hours at the UCLA Google DeepMind Hackathon (Runner-Up & Judges' Favorite).",
        tags: ["React", "Node.js", "WebSockets", "Google Gemini API (Live, Lyria, Nano Banana)"],
        bullets: [
            "Voice-interactive AI judge that listens, interrupts, assigns roles, and delivers dynamic verdicts.",
            "Real-time multiplayer gameplay powered by WebSockets and the Google Gemini API.",
            "Runner-Up & Judges' Favorite at the UCLA Google DeepMind Hackathon.",
        ],
        image: "/projects/Courtroom%20Chaos.png",
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "agentic-assistant",
        title: "Agentic AI Assistant",
        summary:
            "A full-stack AI-powered video conferencing platform with custom AI agents, automatic transcription, and smart search.",
        tags: ["Next.js", "DrizzleORM", "PostgreSQL", "OpenAI API", "Inngest", "Stream SDK"],
        bullets: [
            "Engineered custom AI agents that join meetings and assist participants in real time.",
            "Automatic meeting transcription and summarization with smart transcript search.",
            "Background job orchestration with Inngest and secure authentication.",
        ],
        image: "/projects/Agentic%20AI%20Assistant.png",
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "titanfund",
        title: "TitanFund",
        summary:
            "A blockchain-based micro-crowdfunding platform for CSUF students to raise funds for certifications, research materials, and academic projects — with milestone-based smart contract automation.",
        tags: [
            "Solidity",
            "Next.js",
            "Web3.js",
            "Hardhat",
            "Chakra UI",
            "MetaMask",
            "Sepolia Testnet",
            "IPFS",
            "Vercel",
        ],
        bullets: [
            "Smart contracts automatically release funds when students submit verified proof of milestone achievement — no manual intervention needed.",
            "CSUF student identity verified via @csuf.edu email domain, MetaMask wallet linking, and optional faculty sponsorship with tiered trust levels.",
            "Gas costs reduced by ~35% through packed structs, batch operations, and separation of read-only from write functions — optimized for mainnet readiness.",
        ],
        image: "/projects/TitanFund.png",
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
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
