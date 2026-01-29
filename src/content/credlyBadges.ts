// src/content/credlyBadges.ts

export type CredlyBadge = {
    title: string;
    issuer: string;
    description: string;
    imageSrc: string; // from /public
    credlyUrl?: string; // optional (add later)
};

export const credlyBadges: CredlyBadge[] = [
    {
        title: "Build and Deploy Machine Learning Solutions on Vertex AI Skill Badge",
        issuer: "Google Cloud",
        description:
            "Demonstrates skill using Vertex AI’s unified platform and its AutoML/custom training services to train, evaluate, tune, explain, and deploy ML solutions.",
        imageSrc: "/badges/vertex-ai-build-deploy.png",
    },
    {
        title: "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge",
        issuer: "Google Cloud",
        description:
            "Shows capability building data transformation pipelines to BigQuery and building ML models with BigQuery ML; includes working with Cloud Storage/Dataflow/BigQuery and orchestrating/copying data across locations.",
        imageSrc: "/badges/bigquery-ml-engineer-data.png",
    },
    {
        title: "AWS Knowledge: Serverless - Training Badge",
        issuer: "Amazon Web Services Training and Certification",
        description:
            "Validates understanding of AWS serverless concepts and services, with a focus on AWS Lambda and Amazon API Gateway.",
        imageSrc: "/badges/aws-knowledge-serverless.png",
    },
    {
        title: "Generative AI Overview for Project Managers",
        issuer: "Project Management Institute",
        description:
            "Covers applying generative AI techniques in real-world scenarios and integrating GenAI into project workflows to enhance productivity and outcomes.",
        imageSrc: "/badges/genai-pm.png",
    },
    {
        title: "Create ML Models with BigQuery ML Skill Badge",
        issuer: "Google Cloud",
        description:
            "Demonstrates skill creating and evaluating ML models using BigQuery ML to generate data predictions.",
        imageSrc: "/badges/bigquery-ml-create-models.png",
    },
    {
        title: "Build a Secure Google Cloud Network Skill Badge",
        issuer: "Google Cloud",
        description:
            "Shows ability to build, scale, and secure applications on Google Cloud with core networking and security concepts.",
        imageSrc: "/badges/gcp-secure-network.png",
    },
    {
        title: "Google Cloud Computing Foundations Certificate",
        issuer: "Google Cloud",
        description:
            "Foundational cloud computing proficiency supporting paths in IT infrastructure, cloud engineering, and cloud-native application development.",
        imageSrc: "/badges/gcp-computing-foundations-certificate.png",
    },
    {
        title: "Implement Load Balancing on Compute Engine Skill Badge",
        issuer: "Google Cloud",
        description:
            "Demonstrates creating and deploying VMs on Compute Engine, running containerized apps on GKE, and configuring network/HTTP load balancers using Cloud Shell and gcloud.",
        imageSrc: "/badges/gcp-load-balancing.png",
    },
    {
        title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
        issuer: "Google Cloud",
        description:
            "Validates cleaning data with Dataprep by Trifacta, running pipelines in Dataflow, running Spark jobs in Dataproc, and calling ML APIs (NLP, Speech-to-Text, Video Intelligence).",
        imageSrc: "/badges/gcp-prepare-data-ml-apis.png",
    },
    {
        title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
        issuer: "Google Cloud",
        description:
            "Shows how to build/connect storage-centric cloud infrastructure using Cloud Storage, IAM, Cloud Functions, and Pub/Sub, plus monitoring basics.",
        imageSrc: "/badges/gcp-app-dev-environment.png",
    },
    {
        title: "Prompt Design in Vertex AI Skill Badge",
        issuer: "Google Cloud",
        description:
            "Demonstrates prompt engineering foundations, multimodal generative techniques, and applying Gemini models in practical scenarios within Vertex AI.",
        imageSrc: "/badges/vertex-ai-prompt-design.png",
    },
];
