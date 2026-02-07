export const projects = [
    {
        id: "leaseguard",
        title: "LeaseGuard",
        description: "An AI-powered rental agreement analyzer that detects red flags and simplifies legal jargon.",
        fullDescription: "LeaseGuard is a modern, mobile-first web application designed to empower tenants by analyzing rental agreements using advanced AI. It detects red flags, summarizes complex legal terms, and provides a 'fairness score' to help users sign with confidence.",
        image: "/projects/leaseguard.png",
        gallery: [
            "/projects/leaseguard/Homepage_filled.png",
            "/projects/leaseguard/Analyzed_page.png",
            "/projects/leaseguard/Analyzed_chatbot.png"
        ],
        techStack: ["Next.js 15", "FastAPI", "Groq AI (Llama 3.3 70B)", "MongoDB", "Tailwind CSS v4", "Framer Motion"],
        features: [
            "AI Analysis & Summary: Converts legal jargon into simple English.",
            "Red Flag Detection: Identifies unfair clauses like unlimited rent hikes.",
            "Fairness Score: Assigns a 0-100 score based on tenant protection standards.",
            "Context-Aware Chat: Ask specific questions about your document.",
            "Dual-Model Strategy: Optimized for performance and cost."
        ],
        price: "Contact for Pricing"
    },
    {
        id: "codetoflow",
        title: "CodeToFlow",
        description: "Instantly convert complex code into beautiful, interactive logic flowcharts with AI assistance.",
        fullDescription: "CodeToFlow is an intelligent developer tool that instantly converts complex code into beautiful, interactive logic flowcharts. It's designed to help developers document, debug, and understand spaghetti code in seconds. Unlike generic diagram tools, it offers a developer-first suite with a spaghetti score, AI chat, and blazing-fast generation.",
        image: null, // Placeholder will be used
        gallery: [], // No screenshots available yet
        techStack: ["React", "Vite", "Groq AI (Llama-3.3-70b)", "Mermaid.js", "CSS Variables"],
        features: [
            "Spaghetti Score: Judges your code complexity.",
            "Talk to Your Code: Integrated AI Chat for code questions.",
            "Blazing Fast generation powered by Groq.",
            "Developer-centric Dark Mode.",
            "Export to SVG/PNG."
        ],
        price: "Contact for Pricing"
    }
];
