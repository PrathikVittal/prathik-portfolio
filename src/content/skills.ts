import { Code, Layers, Database, Cloud, Shield, Cpu } from "lucide-react";

export const skillGroups = [
    { title: "Programming Languages", icon: Code, items: ["Python", "JavaScript", "C++", "Go", "Java", "Solidity"] },
    { title: "Distributed Systems", icon: Layers, items: ["Kubernetes", "Docker", "NATS", "Kafka", "REST APIs", "Microservices"] },
    { title: "Databases", icon: Database, items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { title: "Cloud & Tools", icon: Cloud, items: ["Google Cloud", "Git", "OpenAI APIs", "TensorFlow", "Convex", "Linux"] },
    { title: "Concepts", icon: Shield, items: ["DSA", "Networking", "Operating Systems", "Design Patterns", "System Optimization"] },
    { title: "AI/ML", icon: Cpu, items: ["NLP", "Computer Vision", "MLOps basics", "Model evaluation", "Inference workflows"] },
];
