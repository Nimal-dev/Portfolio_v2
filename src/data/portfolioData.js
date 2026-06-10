import profileImage from "../assets/me.png";
import resumePdf from "../assets/Nimal_Prince_FullStack_Developer_Resume.pdf";

import reactIcon from "../assets/Skills/react.png";
import htmlIcon from "../assets/Skills/html.png";
import cssIcon from "../assets/Skills/css.png";
import bootstrapIcon from "../assets/Skills/bootstrap.png";
import jsIcon from "../assets/Skills/js.png";
import nodeIcon from "../assets/Skills/nodejs.png";
import mongoIcon from "../assets/Skills/mongodb.png";
import mysqlIcon from "../assets/Skills/mysql.png";
import djangoIcon from "../assets/Skills/django.png";
import dartIcon from "../assets/Skills/dart.png";
import flutterIcon from "../assets/Skills/flutter.png";
import gitIcon from "../assets/Skills/git.png";
import githubIcon from "../assets/Skills/github.png";

import gmGroupsImage from "../assets/gmgroups.png";
import ekthaImage from "../assets/ektha.png";
import trancefitImage from "../assets/Trancefit.png";
import ultimateImage from "../assets/Ultimate.png";
import ultimateAppImage from "../assets/mobile.png";
import teamLeadImage from "../assets/TL.jpg";
import coordinatorImage from "../assets/PC.jpg";

export const profile = {
  name: "Nimal Prince",
  eyebrow: "Full-stack developer focused on practical product delivery",
  title: "Full-Stack Developer building AI-assisted web and mobile products.",
  shortTitle: "Full-Stack Developer",
  location: "Kerala, India",
  availability: "Open to full-time developer roles and product-focused freelance builds",
  email: "nimalprince.dev@gmail.com",
  image: profileImage,
  resume: resumePdf,
  roleHighlights: [
    "React Frontend Developer",
    "Node.js Backend Builder",
    "Flutter App Developer",
    "AI Product Developer",
  ],
  summary:
    "I design and build responsive web apps, mobile experiences, and AI-assisted tools with a strong focus on clean interfaces, reliable workflows, and maintainable code. My work spans React, Node.js, MongoDB, Django, and Flutter, with hands-on experience taking ideas from requirements to usable products.",
  about: [
    "I am a Computer Science and Engineering graduate from UKFCET Kollam with professional experience across web and mobile development. I have worked as a Flutter development intern and as a Project Associate, contributing to client-facing websites, internal tools, dashboards, and cross-platform app features.",
    "My strength is turning broad requirements into polished, usable software. I care about responsive UI, readable implementation, smooth user journeys, and practical engineering choices that make products easier to maintain after launch.",
  ],
  strengths: [
    "Frontend interfaces with React, Vite, Bootstrap, and animation libraries",
    "Backend APIs and data flows using Node.js, Express, MongoDB, MySQL, and Django",
    "Mobile-first product thinking through Flutter and Dart experience",
    "AI-enabled product features, document analysis flows, and developer tooling concepts",
  ],
  metrics: [
    { value: "1+ yr", label: "professional project delivery" },
    { value: "10+", label: "web and mobile builds shipped" },
    { value: "Full-stack", label: "React, Node, MongoDB, Flutter" },
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nimalprince",
      icon: "bi bi-linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/Nimal-dev",
      icon: "bi bi-github",
    },
    {
      label: "Email",
      href: "mailto:nimalprince.dev@gmail.com",
      icon: "bi bi-envelope-fill",
    },
  ],
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Responsive interfaces, motion, and component-driven UI.",
    items: [
      { name: "React", img: reactIcon, color: "#61dafb" },
      { name: "JavaScript", img: jsIcon, color: "#f7df1e" },
      { name: "HTML5", img: htmlIcon, color: "#e34f26" },
      { name: "CSS3", img: cssIcon, color: "#1572b6" },
      { name: "Bootstrap", img: bootstrapIcon, color: "#7952b3" },
    ],
  },
  {
    title: "Backend & Data",
    description: "APIs, database-backed features, and product workflows.",
    items: [
      { name: "Node.js", img: nodeIcon, color: "#68a063" },
      { name: "MongoDB", img: mongoIcon, color: "#47a248" },
      { name: "MySQL", img: mysqlIcon, color: "#00758f" },
      { name: "Django", img: djangoIcon, color: "#44b78b" },
    ],
  },
  {
    title: "Mobile & Tools",
    description: "Cross-platform mobile work and engineering collaboration.",
    items: [
      { name: "Flutter", img: flutterIcon, color: "#54c5f8" },
      { name: "Dart", img: dartIcon, color: "#0175c2" },
      { name: "Git", img: gitIcon, color: "#f05032" },
      { name: "GitHub", img: githubIcon, color: "#ffffff" },
    ],
  },
];

export const experience = [
  {
    role: "Project Associate",
    company: "Logiprompt Techno Solutions Pvt. Ltd.",
    period: "1 year",
    type: "Professional Experience",
    summary:
      "Built and maintained web and mobile solutions for real project requirements, collaborating across planning, UI implementation, testing, and delivery.",
    highlights: [
      "Developed responsive client-facing interfaces and dashboard workflows.",
      "Translated requirements into reusable UI components and backend-connected features.",
      "Supported project documentation, QA feedback loops, and technical delivery decisions.",
    ],
  },
  {
    role: "Software Trainee Intern",
    company: "Logiprompt Techno Solutions Pvt. Ltd.",
    period: "4 months",
    type: "Internship",
    summary:
      "Focused on Flutter-based mobile application development while learning production workflows, API integration, and collaborative engineering practices.",
    highlights: [
      "Implemented responsive Flutter UI components using Dart.",
      "Integrated API-driven features and handled real development feedback cycles.",
      "Built practical experience in mobile app structure, testing, and iteration.",
    ],
  },
];

export const projects = [
  {
    id: "leaseguard",
    title: "LeaseGuard",
    category: "AI Product",
    type: "Featured Case Study",
    role: "Full-stack product developer",
    description:
      "AI-powered rental agreement analyzer that helps tenants understand risk, red flags, and legal language before signing.",
    fullDescription:
      "LeaseGuard is a mobile-first AI web application designed to make rental agreements easier to understand. The product analyzes agreement text, surfaces risky clauses, summarizes legal language in plain English, and gives users a fairness-oriented overview so they can make more confident decisions.",
    image: "/projects/leaseguard.png",
    gallery: [
      "/projects/leaseguard/Homepage_filled.png",
      "/projects/leaseguard/Analyzed_page.png",
      "/projects/leaseguard/Analyzed_chatbot.png",
    ],
    techStack: [
      "Next.js 15",
      "FastAPI",
      "Groq AI",
      "Llama 3.3 70B",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Document analysis flow that converts dense rental terms into plain-language summaries.",
      "Red flag detection for clauses such as unfair rent hikes, vague deposits, and one-sided obligations.",
      "Fairness score designed to give users a fast, scannable risk indicator.",
      "Context-aware chat so users can ask follow-up questions about their uploaded agreement.",
      "Dual-model AI strategy balancing speed, cost, and response quality.",
    ],
    impact: [
      "Turns a stressful legal review task into a guided product experience.",
      "Demonstrates AI integration, document workflows, and user-centered risk communication.",
    ],
    status: "Case study ready",
    featured: true,
    accent: "#8de9ff",
  },
  {
    id: "codetoflow",
    title: "CodeToFlow",
    category: "Developer Tool",
    type: "Featured Case Study",
    role: "Frontend and AI workflow developer",
    description:
      "AI-assisted developer tool that converts source code into interactive logic flowcharts for documentation and debugging.",
    fullDescription:
      "CodeToFlow helps developers understand complex code paths by turning source code into structured visual flowcharts. The tool is designed for fast comprehension, cleaner documentation, and easier debugging, especially when working with unfamiliar or tangled logic.",
    image: null,
    gallery: [],
    techStack: ["React", "Vite", "Groq AI", "Mermaid.js", "CSS Variables"],
    features: [
      "AI-assisted code interpretation that maps logic into readable flow diagrams.",
      "Interactive Mermaid.js rendering for fast visual documentation.",
      "Spaghetti score concept for surfacing code complexity at a glance.",
      "AI chat workflow for asking questions about selected code.",
      "Export-ready diagram experience for sharing and documentation.",
    ],
    impact: [
      "Shows product thinking around developer productivity and technical communication.",
      "Combines frontend engineering, AI workflows, and practical debugging use cases.",
    ],
    status: "Prototype concept",
    featured: true,
    accent: "#b39cff",
  },
  {
    id: "schoolmart",
    title: "SchoolMart",
    category: "MERN Platform",
    type: "Featured Case Study",
    role: "Full-stack MERN developer",
    description:
      "Marketplace and management platform for school procurement, vendor coordination, orders, inventory, and payments.",
    fullDescription:
      "SchoolMart is a MERN-based marketplace and operations platform that connects schools with verified vendors for nutritional supply procurement. The system supports role-based access, marketplace browsing, inventory updates, order processing, status tracking, and secure payment handling.",
    image: "/projects/schoolmart/homepage.png",
    gallery: [
      "/projects/schoolmart/marketplace.png",
      "/projects/schoolmart/dashboard.png",
      "/projects/schoolmart/login.png",
    ],
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Razorpay"],
    features: [
      "Role-based access for administrators, schools, and vendors.",
      "Vendor inventory management with pricing, units, and stock updates.",
      "Marketplace ordering experience for essential school supplies.",
      "Order status tracking across pending, packed, and delivered states.",
      "Payment integration with Razorpay for secure transaction handling.",
    ],
    impact: [
      "Replaces manual procurement coordination with a structured digital workflow.",
      "Highlights full-stack application design, access control, and payment integration.",
    ],
    status: "Case study ready",
    featured: true,
    accent: "#7dffa8",
  },
  {
    id: "gm-groups",
    title: "GM Groups Club",
    category: "Client Website",
    type: "Selected Web Build",
    role: "Frontend developer",
    description:
      "Brand website for a private club, presenting business identity, announcements, investor collaborations, and ventures.",
    fullDescription:
      "GM Groups Club is a responsive brand website created to present the club's identity, business ventures, collaborations, and announcements through a polished digital presence.",
    image: gmGroupsImage,
    gallery: [gmGroupsImage],
    techStack: ["React", "Responsive UI", "Brand Website"],
    features: [
      "Responsive marketing pages with clear brand sections.",
      "Structured content for collaborations, ventures, and announcements.",
      "Visual-first presentation for public discovery.",
    ],
    impact: [
      "Improved the club's online presence with a dedicated digital identity.",
    ],
    liveUrl: "https://gmgroups.site/",
    status: "Live project",
    featured: false,
    accent: "#ffcf8d",
  },
  {
    id: "ektha-2025",
    title: "EKTHA 2025",
    category: "Event Website",
    type: "Selected Web Build",
    role: "Frontend developer",
    description:
      "Responsive techno-cultural festival website with event discovery, schedule presentation, and high-energy visual design.",
    fullDescription:
      "EKTHA 2025 is a festival website built as a digital hub for a techno-cultural event. The interface presents workshops, hackathons, cultural programs, and event information in a responsive experience.",
    image: ekthaImage,
    gallery: [ekthaImage],
    techStack: ["React", "Responsive UI", "Event Website"],
    features: [
      "Event-first landing experience for festival discovery.",
      "Responsive schedule and information sections.",
      "Visual design aligned with a youth-focused technology and culture event.",
    ],
    impact: [
      "Created a central web destination for event communication and discovery.",
    ],
    liveUrl: "https://ektha2025.netlify.app/",
    status: "Live project",
    featured: false,
    accent: "#ff8dd7",
  },
  {
    id: "trancefit-gym",
    title: "Trancefit Gym",
    category: "Business Website",
    type: "Selected Web Build",
    role: "Frontend developer",
    description:
      "Responsive gym website designed to present services, brand energy, and location information for online discovery.",
    fullDescription:
      "Trancefit Gym is a responsive business website built to showcase the gym's brand, services, and online presence with a clean, accessible interface.",
    image: trancefitImage,
    gallery: [trancefitImage],
    techStack: ["React", "Responsive UI", "Business Website"],
    features: [
      "Responsive pages for gym discovery and service presentation.",
      "Clean layout for brand information and calls to action.",
      "Performance-conscious static deployment.",
    ],
    impact: ["Helped the gym present a professional public-facing web presence."],
    liveUrl: "https://trancefit.netlify.app/",
    status: "Live project",
    featured: false,
    accent: "#8dffea",
  },
  {
    id: "ultimate-fitness-point",
    title: "Ultimate Fitness Point",
    category: "Business Website",
    type: "Selected Web Build",
    role: "Frontend developer",
    description:
      "Gym website and management-focused experience for presenting services, members, classes, and payment workflows.",
    fullDescription:
      "Ultimate Fitness Point is a gym-focused web build that combines a public website with management-oriented workflows for members, classes, and payments.",
    image: ultimateImage,
    gallery: [ultimateImage, ultimateAppImage],
    techStack: ["React", "Responsive UI", "Management Workflow"],
    features: [
      "Public-facing gym website with service and brand presentation.",
      "Management-oriented workflow concepts for members, classes, and payments.",
      "Responsive design for mobile and desktop users.",
    ],
    impact: [
      "Demonstrates the ability to combine marketing pages with operational product thinking.",
    ],
    liveUrl: "https://ultimatefitnesspoint.netlify.app/",
    status: "Live project",
    featured: false,
    accent: "#ffd36e",
  },
  {
    id: "ultimate-fitness-app",
    title: "Ultimate Fitness App",
    category: "Web App",
    type: "Selected Web Build",
    role: "Frontend developer",
    description:
      "Gym management app concept for member handling, class coordination, payment visibility, and admin workflows.",
    fullDescription:
      "Ultimate Fitness App is a management-oriented web application experience for gym owners and staff to coordinate members, classes, and payments through a focused interface.",
    image: ultimateAppImage,
    gallery: [ultimateAppImage],
    techStack: ["React", "Admin UI", "Responsive App"],
    features: [
      "Admin-oriented interface for gym operations.",
      "Member, class, and payment management workflow design.",
      "Responsive app layout suitable for daily operational use.",
    ],
    impact: [
      "Shows capability in dashboard design and workflow-driven product screens.",
    ],
    liveUrl: "https://ultimatefitnesspoint.netlify.app/login",
    status: "Live project",
    featured: false,
    accent: "#a7ff8d",
  },
];

export const testimonials = [
  {
    name: "Muhammed Aslam",
    role: "Team Lead",
    company: "Logiprompt Techno Solutions Pvt. Ltd.",
    image: teamLeadImage,
    quote:
      "Nimal is proactive in seeking feedback, open to guidance, and consistently demonstrates a desire to grow professionally. He adapts quickly, contributes well in team discussions, and delivers clean, well-documented work.",
  },
  {
    name: "Apsara Raj",
    role: "Dept. Coordinator",
    company: "Logiprompt Techno Solutions Pvt. Ltd.",
    image: coordinatorImage,
    quote:
      "Nimal has been a valuable contributor to both web and mobile application projects. His attention to maintainable code, problem-solving ability, and willingness to learn make him a strong developer to work with.",
  },
];
