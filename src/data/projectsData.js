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
    },
    {
        id: "schoolmart",
        title: "SchoolMart",
        description: "A comprehensive e-commerce and management platform connecting student innovation with the market.",
        fullDescription: "The SchoolMart is a comprehensive web-based solution developed using the MERN stack (MongoDB, Express.js, React, Node.js) to streamline the procurement and management of nutritional supplies for schools. The system addresses the logistical challenges of food distribution by creating a digital marketplace that connects schools directly with verified local food and market vendors. Key functionalities include role-based authentication for Administrators, Schools, and Vendors. Schools can manage student data, track dietary requirements, and browse a real-time marketplace to order essential supplies (grains, vegetables, fruits) from registered vendors. Vendors utilize a dedicated dashboard to manage inventory, update prices with detailed unit descriptions (e.g., kg, liter), and process incoming orders with status tracking (Pending, Packed, Delivered). The platform ensures transparency and accountability through a central Admin module that oversees all transactions, user management, and system activities. Integrated payment processing facilitates secure financial transactions, ensuring timely procurement of quality nutrition for students. This digitization replaces manual workflows, reduces inefficiencies, and ensures a consistent supply of healthy food to educational institutions.",
        image: "/projects/schoolmart/homepage.png",
        gallery: [
            "/projects/schoolmart/marketplace.png",
            "/projects/schoolmart/dashboard.png",
            "/projects/schoolmart/login.png"
        ],
        techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Razorpay"],
        features: [
            "Dual-Interface System: Marketplace for students & Admin Dashboard for staff.",
            "Secure Payments: Integrated with Razorpay for safe transactions.",
            "Real-time Order Tracking: Students and admins can track order status.",
            "Role-Based Access Control: Distinct features for Students, Staff, and Admins.",
            "Inventory Management: Efficiently manage school project stocks."
        ],
        price: "Contact for Pricing"
    }
];
