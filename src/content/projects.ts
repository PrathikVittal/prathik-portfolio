export type Project = {
    slug: "ai-meeting-assistant" | "disposable-camera" | "courtroom-chaos" | "titanfund" | "castai" | "flowos" | "ai-workforce-os" | "tech-solutio" | "field-ops" | "trigen-studio" | "ai-personal-assistant" | "voting";
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
            "Guests scan a **QR code** to capture a host-set **shot limit** with no app install or login.",
            "Photos stream into a **host-moderated gallery** served by a serverless **S3 & CloudFront** pipeline with **UUID-keyed caching**.",
            "**Bulk ZIP export** with **NextAuth**-secured **PostgreSQL/Prisma** storage, deployed on AWS.",
        ],
        image: "/projects/Digital%20Disposable%20Events.png",
        codeUrl: "https://github.com/PrathikVittal/disposable-camera",
        demoLabel: "View Project",
    },
    {
        slug: "courtroom-chaos",
        title: "Courtroom Chaos",
        summary:
            "A real-time multiplayer AI courtroom game supporting up to 8 players over WebSockets, with a voice-interactive AI judge, built in under 24 hours at the UCLA Google DeepMind Hackathon (Runner-Up & Judges' Favorite).",
        tags: ["React", "Node.js", "WebSockets", "Google Gemini API (Live, Lyria, Nano Banana)"],
        bullets: [
            "**Voice-interactive AI judge** that listens, interrupts, assigns roles, and delivers dynamic verdicts.",
            "**Real-time multiplayer** gameplay powered by **WebSockets** and the **Google Gemini API**.",
            "**Runner-Up & Judges' Favorite** at the UCLA Google DeepMind Hackathon.",
        ],
        image: "/projects/Courtroom%20Chaos.png",
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "ai-meeting-assistant",
        title: "AI Meeting Assistant",
        summary:
            "A full-stack AI-powered video conferencing platform with custom AI agents, automatic transcription, and smart search.",
        tags: ["Next.js", "DrizzleORM", "PostgreSQL", "OpenAI API", "Inngest", "Stream SDK"],
        bullets: [
            "Engineered **custom AI agents** that join meetings and assist participants in real time.",
            "**Automatic meeting transcription** and summarization with **smart transcript search**.",
            "**Background job orchestration** with **Inngest** and secure authentication.",
        ],
        image: "/projects/Agentic%20AI%20Assistant.png",
        codeUrl: "https://github.com/PrathikVittal/ai-assistant-app",
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
            "**Smart contracts** automatically release funds when students submit verified proof of **milestone achievement** — no manual intervention needed.",
            "CSUF student identity verified via **@csuf.edu email domain**, **MetaMask wallet linking**, and optional **faculty sponsorship** with tiered trust levels.",
            "Gas costs reduced by **~35%** through **packed structs**, **batch operations**, and separation of read-only from write functions — optimized for mainnet readiness.",
        ],
        image: "/projects/TitanFund.png",
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "ai-workforce-os",
        title: "AI Workforce OS",
        summary:
            "A distributed multi-agent AI workforce OS running 12 concurrent agents across 6 MCP-integrated tools, where each node runs a permission-scoped agent that mirrors the authority of a real team role — PM, Tech Lead, SDE, or QA — serving its user as a LangGraph copilot.",
        tags: ["Next.js", "TypeScript", "LangGraph", "CrewAI", "MCP", "NATS", "PostgreSQL", "Claude Agent SDK"],
        bullets: [
            "Each agent node runs **permission-scoped** to its role **(PM/TL/SDE/QA)**, acting as a **LangGraph copilot** for code review, debugging, and planning via **MCP tools** connected to GitHub, Jira, and the filesystem.",
            "Agents gossip work with teammate agents over **NATS team-boundary channels** while a **CrewAI lead agent** orchestrates task assignment and auto-generates **standups with velocity and blocker insights**.",
            "All inter-agent authority is enforced by an **RBAC control plane** — agents can only act within the permissions of the human role they represent.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "castai",
        title: "CastAI — Live AI Sports Commentator",
        summary:
            "Point your camera at anything — a ping pong match, a chess game, a paper airplane contest — and get live sports commentary in real time, complete with dramatic narration, fake crowd reactions, and completely made-up stats.",
        tags: ["React", "Vite", "TypeScript", "Express", "WebSocket", "Gemini 2.0 Flash Live", "Web Audio API", "Tailwind CSS"],
        bullets: [
            "**Multimodal AI** streams **play-by-play commentary** and spoken audio **(PCM)** in real time directly from your webcam feed.",
            "**Server-side Gemini WebSocket proxy** keeps the API key secure while forwarding camera frames and streaming text + audio back to the client.",
            "**Sport Modes** (ping pong, chess, paper airplanes, dance battles, and more) with an adjustable **energy slider** from chill to **MAX HYPE**.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "flowos",
        title: "FlowOS — AI Focus Coach",
        summary:
            "A real-time focus monitoring app that watches you work through your webcam and sends gentle AI-powered nudges the moment your attention drifts, fidgeting spikes, or you disappear from frame.",
        tags: ["React", "Vite", "TypeScript", "Express", "WebSocket", "Gemini API", "Web Audio API"],
        bullets: [
            "Set one goal, pick a session length, and get a live **stillness score** and **attention score** updated every few seconds via a **camera-to-AI pipeline**.",
            "AI delivers **spoken nudges** (text-to-speech via **PCM**) when focus slips — subtle enough not to break flow, specific enough to actually help.",
            "**End-of-session recap** surfaces distraction patterns and personalized fixes for the next round.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "tech-solutio",
        title: "Tech Solutio — AI Algorithm Solver",
        summary:
            "A three-panel IDE-style web app where you describe or paste any algorithm problem and get an AI-generated solution with step-by-step explanation, language selection, and persistent history.",
        tags: ["Next.js", "TypeScript", "OpenAI API", "NextAuth", "Tailwind CSS"],
        bullets: [
            "**Three-panel layout** (problem sidebar, input panel, solution output) mirrors a real IDE, keeping context and solution visible simultaneously.",
            "Supports **multiple languages**; solutions stream in with **syntax-highlighted code** and a toggleable **explanation panel**.",
            "Full **solve history** persisted per user with one-click reload to revisit or iterate on past problems.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "field-ops",
        title: "Field Ops — Infrastructure Reporting Platform",
        summary:
            "A full-stack field operations platform where workers submit geo-tagged infrastructure, safety, and environmental reports from the field — with a live Mapbox dashboard, status tracking, and background job processing.",
        tags: ["Next.js", "tRPC", "Drizzle ORM", "Neon PostgreSQL", "PostGIS", "Mapbox GL", "Better Auth", "Inngest"],
        bullets: [
            "**Plugin-based report types** (infrastructure, safety, environmental) each with **dynamic form fields**, GPS auto-detect, and severity classification.",
            "**Live Mapbox dashboard** plots all reports as **color-coded pins** by status (pending, validated, flagged, escalated) with real-time feed updates.",
            "**Background job orchestration** via **Inngest** handles report processing and status transitions without blocking the request path.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "trigen-studio",
        title: "TriGen Studio — Text-to-3D Scene Generator",
        summary:
            "Describe a 3D scene in plain text and watch TriGen Studio acquire real assets from PolyHaven, auto-layout them in a Three.js viewport, and let you export the result as a GLB or OBJ file.",
        tags: ["React", "Vite", "TypeScript", "Three.js", "Express", "WebSocket", "OpenAI API", "PolyHaven API"],
        bullets: [
            "AI parses your prompt into a **structured scene manifest**, then acquires matching **3D assets** (textures, meshes) from **PolyHaven** in parallel with a **concurrency-limited pipeline**.",
            "**Review mode** lets you inspect and edit the manifest before committing to the full asset acquisition and scene assembly.",
            "**Export as GLB or OBJ** directly from the studio with a keyboard shortcut **(⌘E)**, ready for Blender, game engines, or AR tools.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "View Project",
    },
    {
        slug: "ai-personal-assistant",
        title: "AI Personal Assistant — Multi-Role Chat Platform",
        summary:
            "A Next.js platform where you build a personal roster of specialized AI assistants — fitness coach, grammar fixer, email writer, YouTube script writer, and more — each with a tailored persona, instructions, and suggested prompts.",
        tags: ["Next.js", "TypeScript", "Convex", "OpenAI API", "Google OAuth", "Tailwind CSS", "Motion"],
        bullets: [
            "Browse and select from a library of **role-scoped assistants**; each carries **custom system instructions** and sample questions tuned to its specialty.",
            "**Three-panel workspace** (assistant list, chat UI, settings) with **real-time Convex-backed** message persistence across sessions.",
            "**Google OAuth** authentication and per-user assistant rosters stored in **Convex**, so your lineup persists across devices.",
        ],
        codeUrl: "https://github.com/PrathikVittal/ai-chatbot-w-agents",
        demoLabel: "View Project",
    },
    {
        slug: "voting",
        title: "Smart Vote (Blockchain) — Demo: Simulated Wallet + Voting",
        summary:
            "A simulated voting app with dummy wallet connect and tamper-proof-style UI (no chain required).",
        tags: ["Solidity (concept)", "Security", "Encryption (concept)", "UI simulation"],
        bullets: [
            "**Dummy wallet** connect flow.",
            "Vote casting + **results tally** simulated locally.",
            "Later: integrate **testnet** + contract calls.",
        ],
        codeUrl: "https://github.com/YOUR_REPO", // TODO
        demoLabel: "Try Voting Demo",
    },
];
