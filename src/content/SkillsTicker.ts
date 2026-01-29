export type IconName =
    | "python"
    | "javascript"
    | "typescript"
    | "react"
    | "nextjs"
    | "node"
    | "cplusplus"
    | "java"
    | "docker"
    | "kubernetes"
    | "convex"
    | "mongodb"
    | "kafka"
    | "gcp"
    | "mysql"
    | "postgres"
    | "restapis"
    | "microservices"
    | "apis"
    | "tensorflow"
    | "ml"
    | "html"
    | "css"
    | "git";

export type SkillItem = {
    label: string;
    icon: IconName; // ✅ use icon everywhere
};

export type SkillRow = {
    items: SkillItem[];
    reverse?: boolean;
    durationSeconds?: number;
};

// ✅ 24 unique skills, 6 per row (NO repeats)
export const skillsTickerRows: SkillRow[] = [
    {
        durationSeconds: 26,
        items: [
            { label: "Python", icon: "python" },
            { label: "JavaScript", icon: "javascript" },
            { label: "TypeScript", icon: "typescript" },
            { label: "React.js", icon: "react" },
            { label: "Next.js", icon: "nextjs" },
            { label: "Node.js", icon: "node" },
        ],
    },
    {
        reverse: true,
        durationSeconds: 28,
        items: [
            { label: "C++", icon: "cplusplus" },
            { label: "Java", icon: "java" },
            { label: "Docker", icon: "docker" },
            { label: "Kubernetes", icon: "kubernetes" },
            { label: "Kafka", icon: "kafka" },
            { label: "Git", icon: "git" },
        ],
    },
    {
        durationSeconds: 30,
        items: [
            { label: "Convex", icon: "convex" },
            { label: "MongoDB", icon: "mongodb" },
            { label: "Postgres", icon: "postgres" },
            { label: "MySQL", icon: "mysql" },
            { label: "GCP", icon: "gcp" },
            { label: "REST APIs", icon: "restapis" },
        ],
    },
    {
        reverse: true,
        durationSeconds: 32,
        items: [
            { label: "Microservices", icon: "microservices" },
            { label: "APIs", icon: "apis" },
            { label: "TensorFlow", icon: "tensorflow" },
            { label: "ML", icon: "ml" },
            { label: "HTML", icon: "html" },
            { label: "CSS", icon: "css" },
        ],
    },
];
