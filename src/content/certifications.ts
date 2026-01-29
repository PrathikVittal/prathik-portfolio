// src/content/certifications.ts

export type CredlyBadge = {
    title: string;
    issuer: string;
    description?: string;
    image?: string; // local path from /public
    link?: string;  // credly link (optional for now)
    date?: string;  // optional
};

export const credlyBadges: CredlyBadge[] = [
    {
        title: "Build and Deploy Machine Learning Solutions on Vertex AI Skill Badge",
        issuer: "Google Cloud",
        image: "https://images.credly.com/images/f4c342c9-af98-4352-b54a-a8a166ee8f68/image.png",
        description:
            "Demonstrates hands-on skills using Vertex AI for training, evaluation, tuning, explainability, and deploying ML solutions with AutoML and custom training workflows.",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge",
        issuer: "Google Cloud",
        image: "https://images.credly.com/images/6160e2c1-4a95-4f47-8c5b-f2dde7bb6a67/image.png",
        description:
            "Shows ability to build ETL pipelines to BigQuery and develop machine learning models using BigQuery ML and supporting GCP services (e.g., Cloud Storage, Dataflow, Composer).",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "AWS Knowledge: Serverless - Training Badge",
        issuer: "Amazon Web Services Training and Certification",
        image: "https://images.credly.com/images/0c20a5b7-b4e9-4c2f-8b68-342e00a85e05/blob",
        description:
            "Covers serverless concepts with a focus on AWS Lambda and Amazon API Gateway, validating practical understanding of key serverless building blocks.",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "Generative AI Overview for Project Managers",
        issuer: "Project Management Institute",
        image: "https://images.credly.com/images/f5c094f4-e07c-44e0-b685-4ffd8980fd53/blob",
        description:
            "Introduces generative AI concepts, use-cases, and practical adoption guidance for project managers to integrate GenAI responsibly and improve productivity.",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "Create ML Models with BigQuery ML Skill Badge",
        issuer: "Google Cloud",
        image: "https://images.credly.com/images/073a27aa-c3d6-44b5-875f-906191666d70/image.png",
        description:
            "Validates ability to create and evaluate machine learning models directly in BigQuery ML to generate predictions from data using SQL-based ML workflows.",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "Build a Secure Google Cloud Network Skill Badge",
        issuer: "Google Cloud",
        image: "https://images.credly.com/images/e1131ae3-4a52-4af1-9801-b7853767cf79/image.png",
        description:
            "Demonstrates skills to build, scale, and secure applications on Google Cloud with networking and security-focused implementation practices.",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "Google Cloud Computing Foundations Certificate",
        issuer: "Google Cloud",
        image: "https://images.credly.com/images/4dda8ae4-99ee-476c-bca3-6f0adbab42fe/image.png",
        description:
            "Foundational credential covering cloud fundamentals, infrastructure, networking & security, and data/ML basics—supporting diverse cloud and cloud-native career paths.",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "Implement Load Balancing on Compute Engine Skill Badge",
        issuer: "Google Cloud",
        image: "https://images.credly.com/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png",
        description:
            "Covers configuring network/HTTP load balancers, deploying VMs, and working with Cloud Shell/gcloud, plus concepts related to containerized workloads and traffic management.",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
        issuer: "Google Cloud",
        image: "https://images.credly.com/images/68756311-9319-4eeb-a2b7-76defc8dd8a2/image.png",
        description:
            "Focuses on cleaning and preparing data pipelines using tools like Dataprep/Trifacta, Dataflow, and Dataproc, and calling ML APIs (NLP, Speech-to-Text, Video Intelligence).",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
        issuer: "Google Cloud",
        image: "https://images.credly.com/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png",
        description:
            "Demonstrates setting up a basic app development environment using cloud storage-centric infrastructure and core services like IAM, Cloud Functions, and Pub/Sub.",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
    {
        title: "Prompt Design in Vertex AI Skill Badge",
        issuer: "Google Cloud",
        image: "https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png",
        description:
            "Validates prompt engineering skills for generative AI in Vertex AI, including applying multimodal techniques and guiding model outputs for real-world scenarios.",
        // link: "PASTE_CREDLY_LINK_HERE",
    },
];

export type CredlySkill = {
    name: string;
    evidenceCount: number;
    details?: string; // you'll fill later
};

export const credlySkills: CredlySkill[] = [
    { name: "Machine Learning (ML)", evidenceCount: 4 },
    { name: "Cloud Computing", evidenceCount: 3 },
    { name: "BigQuery", evidenceCount: 2 },
    { name: "Cloud Storage", evidenceCount: 2 },
    { name: "Compute Engine", evidenceCount: 2 },
    { name: "Computer Network Management", evidenceCount: 2 },
    { name: "Data Ingestion", evidenceCount: 2 },
    { name: "Data Pipelines", evidenceCount: 2 },
    { name: "Generative AI", evidenceCount: 2 },
    { name: "Identity And Access Management (IAM)", evidenceCount: 2 },

    { name: "Amazon API Gateway", evidenceCount: 1 },
    { name: "Amazon Web Services (AWS)", evidenceCount: 1 },
    { name: "Application Programming Interface (API)", evidenceCount: 1 },
    { name: "Artificial Intelligence (AI)", evidenceCount: 1 },
    { name: "AutoML", evidenceCount: 1 },
    { name: "Cloud Infrastructure", evidenceCount: 1 },
    { name: "Cloud Security", evidenceCount: 1 },
    { name: "Data Engineering", evidenceCount: 1 },
    { name: "Dataflow", evidenceCount: 1 },
    { name: "Extract, Transform, Load (ETL)", evidenceCount: 1 },
    { name: "Financial Forecasting", evidenceCount: 1 },
    { name: "Google Cloud Platform (GCP)", evidenceCount: 1 },
    { name: "Kubernetes", evidenceCount: 1 },
    { name: "Network Security", evidenceCount: 1 },
    { name: "Prompt Engineering", evidenceCount: 1 },
    { name: "Pub/sub", evidenceCount: 1 },
    { name: "Python", evidenceCount: 1 },
    { name: "System Monitoring", evidenceCount: 1 },
    { name: "TensorFlow", evidenceCount: 1 },
];



export const courses: string[] = [
    "Google Cloud — ML Engineer Learning Path",
    "Google Cloud — Introduction to Gen AI Learning Path",
    "Google Cloud — Computing Foundations",
];


export const workshops: string[] = [
    "I Code Python — Python hands-on workshop (NASSCOM)",
    "Artificial, Virtual and Animated Computing — Computer Society of India",
];

export const awards: { title: string; detail: string }[] = [
    {
        title: "Gameathon — 1st Place",
        detail: "Jyothy Institute of Technology • 24-hour game dev challenge using Unity3D, C++.",
    },
];
