export type SystemProject = {
  id: string;
  title: string;
  tech: string[];
  metrics: string[];
  links: { label: string; href: string }[];
  architecture: string[];
  flow: string[];
};

export const identity = {
  name: "Adharsh Unnikrishnan",
  headline: "Aspiring AI Infrastructure Engineer",
  badge: "CLOUD • DEVOPS • PLATFORM ENGINEERING",
  roles: [
    "AI Infrastructure Engineer",
    "Platform Engineer",
    "Cloud Engineer",
  ],
  location: "Kerala",
  email: "adharshu777@gmail.com",
  phone: "+91 8714717587",
};

export const navItems = [
  "Home",
  "Selected Work",
  "Experience",
  "My Skills",
  "Let's Connect",
];

export const certifications = [
  "Stripe",
  "DataStax",
  "Coca-Cola",
  "General Motors",
  "Shopify",
  "GitLab",
  "Duolingo",
  "Mercado",
  "Astrato",
  "Agency Elevation",
  "Coyote",
  "Shares",
];

export const projects: SystemProject[] = [
  {
    id: "sys-01",
    title:
      "Kubernetes-Based Microservices Platform with Blue-Green and Canary Deployments",
    tech: [
      "Python",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    metrics: ["99.9% Uptime", "Zero Downtime"],
    architecture: [
      "Ingress Controller",
      "Service Mesh",
      "Canary Release Router",
      "Observability Layer",
    ],
    flow: [
      "Commit -> CI Validation",
      "Build -> Scan -> Push",
      "Progressive Delivery",
      "Metric Guardrail Rollback",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/adharsh277/devops-microservices-platform",
      },
    ],
  },
  {
    id: "sys-02",
    title: "Global ESG Intelligence Platform: End-to-End Cloud and AI ESG Pipeline",
    tech: [
      "Azure Data Lake",
      "Databricks",
      "Power BI",
      "Azure ML",
      "TensorFlow",
      "GitHub Actions",
    ],
    metrics: ["5-Stage Pipeline", "Real-time Analytics"],
    architecture: [
      "Ingestion Gateway",
      "Feature Store",
      "Model Scoring Plane",
      "Executive Insight Layer",
    ],
    flow: [
      "Extract ESG Signals",
      "Transform and Normalize",
      "Model Inference",
      "Dashboard Publish",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/adharsh277/Global-ESG-Intelligence-Platform",
      },
    ],
  },
  {
    id: "sys-03",
    title: "Prathidhwani Job Portal - Cloud-Native Recruitment Platform",
    tech: [
      "CI/CD",
      "GitHub Actions",
      "DigitalOcean",
      "Docker",
      "Next.js",
      "React",
      "Django REST",
    ],
    metrics: ["Startup Client", "Live In Production"],
    architecture: [
      "Next.js Edge UI",
      "Django API Core",
      "Background Job Worker",
      "Cloud Security Envelope",
    ],
    flow: [
      "Pull Request Quality Gates",
      "Container Deployment",
      "Smoke Test",
      "Production Release",
    ],
    links: [
      { label: "Repository", href: "https://github.com/infocreon/job-portal" },
      { label: "Live System", href: "https://jobs.prathidhwani.org/" },
    ],
  },
  {
    id: "sys-04",
    title: "InfoCreon.com - Startup Website Hosting and Live Deployment",
    tech: [
      "Website Hosting",
      "Production Deployment",
      "Cloud Infrastructure",
      "Performance Optimization",
    ],
    metrics: ["Startup Client", "Live In Production"],
    architecture: [
      "Global CDN",
      "Cloud Runtime",
      "Caching Layer",
      "Monitoring Hooks",
    ],
    flow: [
      "Build and Bundle",
      "Deploy to Runtime",
      "Automated Health Check",
      "Traffic Shift",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/infocreon/InfocreonWebSite",
      },
      { label: "Live System", href: "https://infocreon.com/" },
    ],
  },
];

export const experiences = [
  {
    title: "Intern - Infocreon Solutions Private Limited",
    focus: "Azure Data Factory, Databricks, Synapse, Power BI",
    time: "Foundation Phase",
  },
  {
    title: "Jr. DevOps Engineer - Infocreon Solution PVT LTD - Kochi",
    focus: "Docker, Linux, DigitalOcean, Nginx, CI/CD",
    time: "Nov 2025 - Present",
  },
  {
    title: "CNCF Open Source Contributor - Cloud and DevOps Projects",
    focus: "Falco, Helm, Flatcar, Kubernetes",
    time: "Open Source Track",
  },
  {
    title: "Hackathon Finalist - HackVerse by Linux Socials",
    focus: "Solidity, Web3, MySQL, MIT App Inventor",
    time: "Top 10 Finalist among 500+ participants",
  },
  {
    title: "University Club Leadership - Untangle Club",
    focus: "Teamwork, Communication, Event Coordination, Execution",
    time: "Leadership Track",
  },
];

export const skillGraph = [
  ["Kubernetes", "Helm"],
  ["Kubernetes", "CI/CD"],
  ["Python", "AI Models"],
  ["Terraform", "Cloud Infrastructure"],
  ["Docker", "Kubernetes"],
  ["GitHub Actions", "CI/CD"],
  ["Databricks", "Data Engineering"],
  ["Grafana", "Observability"],
  ["Azure", "Data Engineering"],
  ["Argo CD", "GitOps"],
] as const;

export const testimonials = [
  "Yash Singh - Senior DevOps Engineer @ Oracle",
  "Apoorv Patel - Scientist @ DRDO",
  "Faye Kelmith - Open Source Engineer and CNCF Contributor",
  "U Akshay - System Administrator @ Siemens, Germany",
  "Jon Bronicki - SDE @ Microsoft",
  "Terry Howe - SDE @ AWS",
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/adharsh277" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adharsh277/" },
  { label: "X", href: "https://x.com/itsAdharsh" },
  { label: "Facebook", href: "https://facebook.com" },
];

export const blockchainProjects = [
  {
    name: "Bitcoin Smart Escrow dApp",
    tech: ["Next.js 14", "TypeScript", "bitcoinjs-lib", "Xverse Wallet", "Zustand", "TailwindCSS"],
    links: [
      { label: "Repository", href: "https://github.com/adharsh277/midl" },
      { label: "Live", href: "https://midl-dapp.vercel.app" },
    ],
  },
  {
    name: "AURA-T - Autonomous Stable Treasury Agent",
    tech: ["Next.js 14", "Node.js", "Express", "TypeScript", "Solidity", "WebSockets", "TailwindCSS"],
    links: [
      { label: "Repository", href: "https://github.com/adharsh277/AURA" },
      { label: "Live", href: "https://aura-t.vercel.app" },
    ],
  },
  {
    name: "TLOOT - GameFi Social Ticketing Platform",
    tech: ["Next.js", "React", "TypeScript", "Solidity", "Wagmi", "Viem", "RainbowKit", "Hardhat", "OpenZeppelin"],
    links: [
      { label: "Repository", href: "https://github.com/adharsh277/tloot-pool" },
      { label: "Live", href: "https://tloot-pool.vercel.app" },
    ],
  },
];
