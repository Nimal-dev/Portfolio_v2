import profileImage from "../assets/me.png";
import resumePdf from "../assets/Nimal_Prince_FullStack_Developer_Resume.pdf";

import gmGroupsImage from "../assets/gmgroups.png";
import ekthaImage from "../assets/ektha.png";
import trancefitImage from "../assets/Trancefit.png";
import ultimateImage from "../assets/Ultimate.png";
import ultimateAppImage from "../assets/mobile.png";
import teamLeadImage from "../assets/TL.jpg";
import coordinatorImage from "../assets/PC.jpg";

export const profile = {
  name: "Nimal Prince",
  firstName: "Nimal",
  lastName: "Prince",
  role: "iOS Engineer Intern",
  company: "Infilect Technologies",
  founderOf: "Gate Track",
  founderLogo: "/projects/gatetrack/logo.png",
  founderUrl: "https://gatetrack.in",
  lead: "iOS engineer at Infilect Technologies. Founder of Gate Track.",
  statement:
    "I build products end to end: iPhone apps, web platforms, and the backends behind them. Since 2023 I have shipped software for clients, a product team, and now my own company.",
  location: "Kerala, India",
  timeZone: "Asia/Kolkata",
  email: "nimalprince.dev@gmail.com",
  image: profileImage,
  resume: resumePdf,
  now: [
    {
      label: "Working as",
      value: "iOS Engineer Intern at Infilect Technologies",
    },
    {
      label: "Founder of",
      value: "Gate Track",
    },
    {
      label: "Graduated",
      value: "B.Tech in Computer Science and Engineering, 2026",
    },
  ],
  about: [
    "Software engineer from Kerala who likes building technologies that help people.",
    "Two years of full-stack work came first: React and Node platforms, Flutter apps, and AI-assisted tools for real clients. Now I build native iOS at Infilect and run Gate Track on the side.",
    "I care about interfaces that feel considered, code that stays readable, and products that solve a real problem.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Nimal-dev", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nimalprince", icon: "linkedin" },
    { label: "Email", href: "mailto:nimalprince.dev@gmail.com", icon: "mail" },
  ],
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    id: "infilect",
    role: "iOS Engineer Intern",
    company: "Infilect Technologies",
    period: "2026 – Present",
    start: "2026",
    kind: "Full-time internship",
    summary:
      "Building and shipping native iOS features with Swift, working with the engineering team from design review through release.",
    highlights: [
      "Implementing production screens and flows in Swift and SwiftUI.",
      "Integrating REST APIs and handling networking, state, and on-device persistence.",
      "Taking part in code review, testing, and App Store release cycles.",
    ],
  },
  {
    id: "gate-track",
    role: "Founder",
    company: "Gate Track",
    period: "2026 – Present",
    start: "2026",
    kind: "Own venture",
    summary:
      "Founded Gate Track, a live railway gate status app for India, and built it end to end: Flutter app, Node and MongoDB backend, admin dashboard, and the public site at gatetrack.in.",
    highlights: [
      "Designed the product around community reports and timetable-based closure predictions.",
      "Shipped the app in 13 Indian languages with push notifications and in-train live tracking.",
      "Ran the launch, including promo videos and social content, and passed 100 downloads.",
    ],
  },
  {
    id: "logiprompt-associate",
    role: "Project Associate",
    company: "Logiprompt Techno Solutions",
    period: "Nov 2023 – Oct 2024",
    start: "2023",
    kind: "Full-time",
    summary:
      "Built and maintained web and mobile solutions for real client requirements, across planning, UI implementation, testing, and delivery.",
    highlights: [
      "Developed responsive client-facing interfaces and dashboard workflows in React and the MERN stack.",
      "Translated requirements into reusable UI components and backend-connected features.",
      "Supported project documentation, QA feedback loops, and delivery decisions.",
    ],
  },
  {
    id: "logiprompt-trainee",
    role: "Software Trainee, Flutter",
    company: "Logiprompt Techno Solutions",
    period: "Jul 2023 – Oct 2023",
    start: "2023",
    kind: "Internship",
    summary:
      "Focused on Flutter mobile development while learning production workflows, API integration, and collaborative engineering.",
    highlights: [
      "Implemented responsive Flutter UI components in Dart.",
      "Integrated API-driven features and worked through real development feedback cycles.",
      "Built a working understanding of mobile app structure, testing, and iteration.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    school: "UKF College of Engineering and Technology, Kollam",
    year: "2026",
  },
  {
    degree: "Higher Secondary, Bioscience",
    school: "Mayyanad HSS, Kerala",
    year: "2019",
  },
];

export const skillGroups = [
  {
    title: "iOS",
    note: "Where I work day to day now.",
    items: ["Swift", "SwiftUI", "UIKit", "Xcode", "REST and JSON", "App Store releases"],
  },
  {
    title: "Web",
    note: "Two years of shipping client platforms.",
    items: ["React", "Next.js", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion", "HTML and CSS"],
  },
  {
    title: "Backend and data",
    note: "APIs, auth, and the data behind the screens.",
    items: ["Node.js", "Express", "FastAPI", "Django", "MongoDB", "MySQL", "Firebase", "Razorpay"],
  },
  {
    title: "Mobile and AI",
    note: "Cross-platform apps and LLM-backed features.",
    items: ["Flutter", "Dart", "Groq", "Llama 3.3", "Prompt design"],
  },
  {
    title: "Tools",
    note: "How the work gets reviewed and shipped.",
    items: ["Git", "GitHub", "Postman", "Charles Proxy", "Amplitude", "Jira", "Netlify", "Figma"],
  },
];

export const projects = [
  {
    id: "gate-track",
    title: "Gate Track",
    category: "Mobile app, founder",
    type: "Case study",
    role: "Founder, product and engineering",
    description:
      "Live railway gate status for India. Community reports, timetable-based predictions, and in-train tracking so you know whether to cross or wait.",
    fullDescription:
      "Gate Track is the app I founded and built to answer a daily question for anyone who lives near a railway line in India: is the level crossing open right now? Travellers report gate status, the app combines those reports with train timetables to predict upcoming closures, and anyone riding a train can share their live position so people on the road see it coming. It ships in 13 Indian languages and crossed 100 downloads within weeks of launch.",
    image: "/projects/gatetrack/showcase.jpg",
    logo: "/projects/gatetrack/logo.png",
    gallery: ["/projects/gatetrack/feature.jpg", "/projects/gatetrack/map.jpg", "/projects/gatetrack/downloads.jpg"],
    techStack: ["Flutter", "Dart", "Firebase Messaging", "flutter_map", "Node.js", "MongoDB", "Netlify"],
    features: [
      "Live map of nearby railway gates with open, closed, and caution states.",
      "Community-driven reports, including adding crossings that are missing from the map.",
      "Schedule prediction that uses train timetables to estimate the next closure.",
      "Inside-the-train mode that shares live position with people approaching a gate.",
      "Proximity warnings when you are within about a kilometre of a closing gate.",
      "13 Indian languages, push notifications, and an admin dashboard for moderation.",
    ],
    impact: [
      "Turns a guess at every level crossing into a quick check before you leave.",
      "The first product I own end to end: app, backend, website, and launch marketing.",
    ],
    liveUrl: "https://gatetrack.in",
    status: "Live on stores",
    featured: true,
    accent: "#ff7a1a",
  },
  {
    id: "leaseguard",
    title: "LeaseGuard",
    category: "AI product",
    type: "Case study",
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
    techStack: ["Next.js 15", "FastAPI", "Groq AI", "Llama 3.3 70B", "MongoDB", "Tailwind CSS", "Framer Motion"],
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
    status: "Case study",
    featured: true,
    accent: "#ff4f8b",
  },
  {
    id: "schoolmart",
    title: "SchoolMart",
    category: "MERN platform",
    type: "Case study",
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
    status: "Case study",
    featured: true,
    accent: "#7cf0c2",
  },
  {
    id: "codetoflow",
    title: "CodeToFlow",
    category: "Developer tool",
    type: "Case study",
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
    status: "Prototype",
    featured: true,
    accent: "#b39cff",
  },
  {
    id: "gm-groups",
    title: "GM Groups Club",
    category: "Brand website",
    type: "Web build",
    role: "Frontend developer",
    description:
      "Brand website for a private club, presenting business identity, announcements, investor collaborations, and ventures.",
    fullDescription:
      "GM Groups Club is a responsive brand website created to present the club's identity, business ventures, collaborations, and announcements through a polished digital presence.",
    image: gmGroupsImage,
    gallery: [gmGroupsImage],
    techStack: ["React", "Responsive UI"],
    features: [
      "Responsive marketing pages with clear brand sections.",
      "Structured content for collaborations, ventures, and announcements.",
      "Visual-first presentation for public discovery.",
    ],
    impact: ["Improved the club's online presence with a dedicated digital identity."],
    liveUrl: "https://gmgroups.site/",
    status: "Live",
    featured: false,
    accent: "#ffcf8d",
  },
  {
    id: "ektha-2025",
    title: "EKTHA 2025",
    category: "Event website",
    type: "Web build",
    role: "Frontend developer",
    description:
      "Responsive techno-cultural festival website with event discovery, schedule presentation, and high-energy visual design.",
    fullDescription:
      "EKTHA 2025 is a festival website built as a digital hub for a techno-cultural event. The interface presents workshops, hackathons, cultural programs, and event information in a responsive experience.",
    image: ekthaImage,
    gallery: [ekthaImage],
    techStack: ["React", "Responsive UI"],
    features: [
      "Event-first landing experience for festival discovery.",
      "Responsive schedule and information sections.",
      "Visual design aligned with a youth-focused technology and culture event.",
    ],
    impact: ["Created a central web destination for event communication and discovery."],
    liveUrl: "https://ektha2025.netlify.app/",
    status: "Live",
    featured: false,
    accent: "#ff8dd7",
  },
  {
    id: "trancefit-gym",
    title: "Trancefit Gym",
    category: "Business website",
    type: "Web build",
    role: "Frontend developer",
    description:
      "Responsive gym website designed to present services, brand energy, and location information for online discovery.",
    fullDescription:
      "Trancefit Gym is a responsive business website built to showcase the gym's brand, services, and online presence with a clean, accessible interface.",
    image: trancefitImage,
    gallery: [trancefitImage],
    techStack: ["React", "Responsive UI"],
    features: [
      "Responsive pages for gym discovery and service presentation.",
      "Clean layout for brand information and calls to action.",
      "Performance-conscious static deployment.",
    ],
    impact: ["Helped the gym present a professional public-facing web presence."],
    liveUrl: "https://trancefit.netlify.app/",
    status: "Live",
    featured: false,
    accent: "#8dffea",
  },
  {
    id: "ultimate-fitness-point",
    title: "Ultimate Fitness Point",
    category: "Business website",
    type: "Web build",
    role: "Frontend developer",
    description:
      "Gym website and management-focused experience for presenting services, members, classes, and payment workflows.",
    fullDescription:
      "Ultimate Fitness Point is a gym-focused web build that combines a public website with management-oriented workflows for members, classes, and payments.",
    image: ultimateImage,
    gallery: [ultimateImage, ultimateAppImage],
    techStack: ["React", "Responsive UI", "Management workflow"],
    features: [
      "Public-facing gym website with service and brand presentation.",
      "Management-oriented workflow concepts for members, classes, and payments.",
      "Responsive design for mobile and desktop users.",
    ],
    impact: ["Demonstrates the ability to combine marketing pages with operational product thinking."],
    liveUrl: "https://ultimatefitnesspoint.netlify.app/",
    status: "Live",
    featured: false,
    accent: "#ffd36e",
  },
  {
    id: "ultimate-fitness-app",
    title: "Ultimate Fitness App",
    category: "Web app",
    type: "Web build",
    role: "Frontend developer",
    description:
      "Gym management app concept for member handling, class coordination, payment visibility, and admin workflows.",
    fullDescription:
      "Ultimate Fitness App is a management-oriented web application experience for gym owners and staff to coordinate members, classes, and payments through a focused interface.",
    image: ultimateAppImage,
    gallery: [ultimateAppImage],
    techStack: ["React", "Admin UI", "Responsive app"],
    features: [
      "Admin-oriented interface for gym operations.",
      "Member, class, and payment management workflow design.",
      "Responsive app layout suitable for daily operational use.",
    ],
    impact: ["Shows capability in dashboard design and workflow-driven product screens."],
    liveUrl: "https://ultimatefitnesspoint.netlify.app/login",
    status: "Live",
    featured: false,
    accent: "#a7ff8d",
  },
];

export const testimonials = [
  {
    name: "Muhammed Aslam",
    role: "Team Lead",
    company: "Logiprompt Techno Solutions",
    image: teamLeadImage,
    quote:
      "Nimal is proactive in seeking feedback, open to guidance, and consistently demonstrates a desire to grow professionally. He adapts quickly, contributes well in team discussions, and delivers clean, well-documented work.",
  },
  {
    name: "Apsara Raj",
    role: "Department Coordinator",
    company: "Logiprompt Techno Solutions",
    image: coordinatorImage,
    quote:
      "Nimal has been a valuable contributor to both web and mobile application projects. His attention to maintainable code, problem-solving ability, and willingness to learn make him a strong developer to work with.",
  },
];
