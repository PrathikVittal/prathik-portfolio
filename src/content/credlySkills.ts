// src/content/credlySkills.ts

export type CredlyBadgeRef = {
    title: string;
    issuer: string;
    issued?: string; // keep optional if you don't have it yet
};

export type CredlyVerifiedSkill = {
    name: string;
    flags?: Array<"IN_DEMAND" | "FUTURE_PROOF">;
    description: string;
    learnMoreUrl?: string; // optional (you can add later)
    sources?: string; // e.g. "4 sources of skill evidence"
    credlyBadges: CredlyBadgeRef[];
};

export const credlyVerifiedSkills: CredlyVerifiedSkill[] = [
    {
        name: "Machine Learning (ML)",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        sources: "4 sources of skill evidence",
        description:
            "Machine Learning (ML) involves developing algorithms that enable systems to learn from data and improve over time. It is useful for automating decision-making processes and enhancing data-driven insights in various applications.",
        learnMoreUrl: "https://www.credly.com", // placeholder (optional)
        credlyBadges: [
            {
                title: "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 14, 2024",
            },
            {
                title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 24, 2024",
            },
            {
                title: "Create ML Models with BigQuery ML Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 2, 2024",
            },
            {
                title: "Build and Deploy Machine Learning Solutions on Vertex AI Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 14, 2024",
            },
        ],
    },

    {
        name: "Cloud Computing",
        flags: ["IN_DEMAND"],
        description:
            "Cloud computing refers to the delivery of computing services, including storage, processing, and networking, over the internet. It is useful for enabling scalable and flexible resource management in various work contexts.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 23, 2024",
            },
            {
                title: "Implement Load Balancing on Compute Engine Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 24, 2024",
            },
            {
                title: "Google Cloud Computing Foundations Certificate",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "BigQuery",
        flags: ["FUTURE_PROOF"],
        description:
            "Google BigQuery is a fully-managed, serverless data warehouse that enables scalable analysis over petabytes of data. Understanding of Google BigQuery is useful for performing complex data mining and data science tasks efficiently.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 14, 2024",
            },
            {
                title: "Google Cloud Computing Foundations Certificate",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Cloud Storage",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Cloud storage is a model of computer data storage where digital data is stored in logical pools accessible over the internet. Understanding of cloud storage is useful for managing and accessing data remotely.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 23, 2024",
            },
            {
                title: "Google Cloud Computing Foundations Certificate",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Compute Engine",
        description:
            "Compute Engine is an Infrastructure as a Service component of Google Cloud Platform, providing scalable and flexible virtual machines for running large-scale workloads. Understanding of Compute Engine is useful for managing and deploying cloud-based applications efficiently.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Implement Load Balancing on Compute Engine Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 24, 2024",
            },
            {
                title: "Google Cloud Computing Foundations Certificate",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Computer Network Management",
        flags: ["FUTURE_PROOF"],
        description:
            "Computer network management involves administering and managing computer networks, ensuring efficient operation, troubleshooting issues, and optimizing performance through monitoring, configuration, and maintenance tasks.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Implement Load Balancing on Compute Engine Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 24, 2024",
            },
            {
                title: "Build a Secure Google Cloud Network Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Data Ingestion",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Data ingestion involves loading data into a data store, such as a database, enabling efficient data management and retrieval. It supports tasks like data integration, transformation, and analysis.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 14, 2024",
            },
            {
                title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 24, 2024",
            },
        ],
    },

    {
        name: "Data Pipelines",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Data pipelines involve the sequential processing of data, enabling efficient data transformation and integration. They facilitate streamlined data flow and support complex data analysis tasks in data science.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 14, 2024",
            },
            {
                title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 24, 2024",
            },
        ],
    },

    {
        name: "Generative AI",
        description:
            "Generative AI refers to the branch of artificial intelligence focused on creating new content, such as text, images, or music, by learning from existing data and patterns. It is useful in automating creative processes and enhancing content generation in various fields.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Generative AI Overview for Project Managers",
                issuer: "Project Management Institute",
                issued: "Dec 7, 2024",
            },
            {
                title: "Prompt Design in Vertex AI Skill Badge",
                issuer: "Google Cloud",
                issued: "Sep 7, 2024",
            },
        ],
    },

    {
        name: "Identity And Access Management (IAM)",
        description:
            "Identity and Access Management (IAM) involves managing user identities and controlling access to technology resources, ensuring appropriate access rights and enhancing security within an organization.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 23, 2024",
            },
            {
                title: "Google Cloud Computing Foundations Certificate",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Amazon API Gateway",
        flags: ["FUTURE_PROOF"],
        description:
            "Amazon API Gateway is a service used to create, publish, maintain, monitor, and secure APIs. Understanding of Amazon API Gateway is useful for managing API lifecycle and ensuring secure and efficient data exchange.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "AWS Knowledge: Serverless - Training Badge",
                issuer: "Amazon Web Services Training and Certification",
                issued: "Dec 7, 2024",
            },
        ],
    },

    {
        name: "Amazon Web Services (AWS)",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Amazon Web Services (AWS) is a collection of remote computing services that together make up a cloud computing platform, offered by Amazon. Understanding of AWS is useful for managing and deploying scalable cloud-based applications.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "AWS Knowledge: Serverless - Training Badge",
                issuer: "Amazon Web Services Training and Certification",
                issued: "Dec 7, 2024",
            },
        ],
    },

    {
        name: "Application Programming Interface (API)",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Application Programming Interface (API) refers to a set of protocols and tools that enable communication and data exchange between software applications, enhancing integration and functionality in back-end development and web design.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Google Cloud Computing Foundations Certificate",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Artificial Intelligence (AI)",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Artificial Intelligence (AI) involves applying methods that simulate human-intelligence processes such as learning, reasoning, and pattern recognition to allow systems to generate predictions or responses. It is useful in automating processes, improving decision-making, and increasing efficiency across various applications.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Prompt Design in Vertex AI Skill Badge",
                issuer: "Google Cloud",
                issued: "Sep 7, 2024",
            },
        ],
    },

    {
        name: "AutoML",
        description:
            "AutoML, or Automated Machine Learning, is a technology that automatically selects the best algorithms and designs models for specific data tasks. Understanding of AutoML is useful for simplifying machine learning processes and enhancing accessibility.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Build and Deploy Machine Learning Solutions on Vertex AI Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 14, 2024",
            },
        ],
    },

    {
        name: "Cloud Infrastructure",
        flags: ["IN_DEMAND"],
        description:
            "Cloud infrastructure encompasses the technologies and principles of virtualization, storage, and networking, which are useful for deploying and managing applications in cloud environments.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Google Cloud Computing Foundations Certificate",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Cloud Security",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Cloud security involves implementing policies and technologies to protect data, applications, and infrastructure in cloud environments, ensuring secure access and safeguarding against threats.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Build a Secure Google Cloud Network Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Data Engineering",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Data engineering involves capturing, cleansing, transforming, and loading data to support data analysis and decision-making. It enables efficient data management and integration, enhancing data accessibility and reliability.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 14, 2024",
            },
        ],
    },

    {
        name: "Dataflow",
        description:
            "Dialogflow is a software tool that enables developers to build and integrate conversational user interfaces, such as chatbots or voice-activated applications, using natural language processing and machine learning technologies. Understanding of Dialogflow is useful for creating interactive applications that respond to user inputs in a natural and intuitive manner.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Create ML Models with BigQuery ML Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 2, 2024",
            },
        ],
    },

    {
        name: "Extract, Transform, Load (ETL)",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Extract, Transform, Load (ETL) involves transferring data from multiple sources to a new format or context, enabling data integration and analysis for informed decision-making.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 14, 2024",
            },
        ],
    },

    {
        name: "Financial Forecasting",
        description:
            "Financial forecasting involves estimating future financial outcomes to support budgeting, capital budgeting, and valuation processes. It helps in making informed decisions and planning for financial stability and growth.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Create ML Models with BigQuery ML Skill Badge",
                issuer: "Google Cloud",
                issued: "Dec 2, 2024",
            },
        ],
    },

    {
        name: "Google Cloud Platform (GCP)",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Google Cloud Platform (GCP) is a suite of cloud computing services provided by Google, offering infrastructure and tools for various computing needs. Understanding of GCP is useful for managing cloud-based applications and services.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Google Cloud Computing Foundations Certificate",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Kubernetes",
        flags: ["IN_DEMAND"],
        description:
            "Kubernetes (commonly stylized as K8s) is an open-source container orchestration system for automating software deployment, scaling, and management. Understanding of K8s is useful for managing containerized applications and optimizing cloud resources.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Implement Load Balancing on Compute Engine Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 24, 2024",
            },
        ],
    },

    {
        name: "Network Security",
        description:
            "Network security involves implementing measures to prevent, detect, and monitor unauthorized access or misuse of network resources, enabling secure communication and data protection.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Google Cloud Computing Foundations Certificate",
                issuer: "Google Cloud",
                issued: "Nov 25, 2024",
            },
        ],
    },

    {
        name: "Prompt Engineering",
        description:
            "Prompt engineering involves designing and refining inputs to guide AI models in generating coherent and relevant outputs. It supports effective AI content creation and improves interaction quality.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Prompt Design in Vertex AI Skill Badge",
                issuer: "Google Cloud",
                issued: "Sep 7, 2024",
            },
        ],
    },

    {
        name: "Pub/sub",
        description:
            "Pub/sub, short for Publish/Subscribe, is a messaging pattern that facilitates decoupled communication between information producers and consumers. It is useful in software architecture for enabling scalable and flexible message distribution.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 23, 2024",
            },
        ],
    },

    {
        name: "Python",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "Python is an interpreted high-level programming language used for a wide range of applications, including web development, data analysis, and automation.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 24, 2024",
            },
        ],
    },

    {
        name: "System Monitoring",
        flags: ["IN_DEMAND"],
        description:
            "System monitoring involves actively reviewing system logs to ensure systems and services function correctly, identifying issues, and generating alerts for system problems, enhancing IT infrastructure management.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 23, 2024",
            },
        ],
    },

    {
        name: "TensorFlow",
        flags: ["IN_DEMAND", "FUTURE_PROOF"],
        description:
            "TensorFlow is a free and open-source software library for machine learning and artificial intelligence. Understanding of TensorFlow is useful for developing and deploying machine learning models and neural networks.",
        learnMoreUrl: "https://www.credly.com",
        credlyBadges: [
            {
                title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
                issuer: "Google Cloud",
                issued: "Nov 24, 2024",
            },
        ],
    },
];
