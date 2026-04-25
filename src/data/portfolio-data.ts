export type Experience = {
  title: string;
  focus: string;
  time: string;
  details: string | string[];
};
export type SystemProject = {
  id: string;
  title: string;
  image?: string;
  imageAlt?: string;
  tech: string[];
  metrics: string[];
  links: { label: string; href: string }[];
  architecture: string[];
  flow: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  href: string;
  readTime: string;
  published: string;
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
  "Credentials",
  "My Skills",
  "Let's Connect",
];

export type CertificationCard = {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  image: string;
  imageAlt: string;
};

export type OpenSourceContribution = {
  name: string;
  organization: string;
  href: string;
  summary: string;
  highlights: string[];
};

export const certifications: CertificationCard[] = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "October 2025",
    badge: "Cloud Fundamentals",
    image: "/certifications/azure-fundamentals.svg",
    imageAlt: "Microsoft Azure Fundamentals certification artwork",
  },
  {
    title: "IBM DevOps and Software Engineering Professional Certificate",
    issuer: "IBM",
    date: "September 2025",
    badge: "Professional Certificate",
    image: "/certifications/ibm-devops-professional.svg",
    imageAlt: "IBM DevOps and Software Engineering certification artwork",
  },
  {
    title: "Microsoft Azure Developer Associate (AZ-204)",
    issuer: "Microsoft",
    date: "November 2025",
    badge: "Developer Associate",
    image: "/certifications/azure-developer-associate.svg",
    imageAlt: "Microsoft Azure Developer Associate certification artwork",
  },
  {
    title: "SAP Data Analyst",
    issuer: "SAP",
    date: "2025",
    badge: "Data Analyst",
    image: "/certifications/sap-data-analyst.svg",
    imageAlt: "SAP Data Analyst certification artwork",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    issuer: "Oracle",
    date: "September 2025",
    badge: "DevOps Professional",
    image: "/certifications/oci-devops-professional.svg",
    imageAlt: "Oracle Cloud Infrastructure DevOps certification artwork",
  },
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    name: "Flatcar",
    organization: "Flatcar Linux",
    href: "https://github.com/adharsh277/Flatcar",
    summary: "Contribution work around lightweight, immutable Linux infrastructure for container hosts.",
    highlights: ["Linux OS", "CNCF ecosystem", "Infrastructure hardening"],
  },
  {
    name: "Falco",
    organization: "CNCF Security",
    href: "https://github.com/adharsh277/falco",
    summary: "Security-focused contribution track for runtime threat detection and container visibility.",
    highlights: ["Security", "Runtime detection", "Cloud-native"],
  },
  {
    name: "Thanos",
    organization: "Prometheus Scale-Out",
    href: "https://github.com/adharsh277/thanos",
    summary: "Work focused on scalable observability tooling and long-term metrics retention.",
    highlights: ["Observability", "Prometheus", "Metrics storage"],
  },
  {
    name: "Besu",
    organization: "Hyperledger",
    href: "https://github.com/adharsh277/besu",
    summary: "Open-source blockchain infrastructure contribution track for Ethereum client workflows.",
    highlights: ["Blockchain", "Client tooling", "Distributed systems"],
  },
];

export const projects: SystemProject[] = [
  {
    id: "sys-01",
    title:
      "Kubernetes-Based Microservices Platform with Blue-Green and Canary Deployments",
    image: "/projects/sys-01.svg",
    imageAlt: "Kubernetes microservices architecture preview",
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
    image: "/projects/sys-02.svg",
    imageAlt: "Global ESG intelligence cloud pipeline preview",
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
    image: "/projects/sys-03.svg",
    imageAlt: "Prathidhwani cloud-native recruitment platform preview",
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
    image: "/projects/sys-04.svg",
    imageAlt: "InfoCreon startup hosting platform preview",
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

export const experiences: Experience[] = [
  {
    title: "Intern - Infocreon Solutions Private Limited",
    focus: "Azure Data Factory, Databricks, Synapse, Power BI",
    time: "Foundation Phase",
    details: "Worked on foundational data engineering tasks and learned core Azure services.",
  },
  {
    title: "Jr. DevOps Engineer - Infocreon Solution PVT LTD - Kochi",
    focus: "Docker, Linux, DigitalOcean, Nginx, CI/CD",
    time: "Nov 2025 - Present",
    details: "Implemented CI/CD pipelines and managed cloud infrastructure.",
  },
  {
    title: "CNCF Open Source Contributor - Cloud and DevOps Projects",
    focus: "Falco, Helm, Flatcar, Kubernetes",
    time: "Open Source Track",
    details: "Contributed to open source projects in the CNCF ecosystem.",
  },
  {
    title: "Hackathon Finalist - HackVerse by Linux Socials",
    focus: "Solidity, Web3, MySQL, MIT App Inventor",
    time: "Top 10 Finalist among 500+ participants",
    details: "Developed a blockchain-based solution and reached the finals.",
  },
  {
    title: "University Club Leadership - Untangle Club",
    focus: "Teamwork, Communication, Event Coordination, Execution",
    time: "Leadership Track",
    details: "Led university club activities and coordinated events.",
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

export const blogPosts: BlogPost[] = [
  {
    id: "blog-01",
    title: "Kubernetes Is Not a Skill. It's a Competitive Moat.",
    summary:
      "If you're a DevOps engineer who truly understands Kubernetes, you're building a competitive moat that is hard to replace.",
    image: "/projects/blog-01.svg",
    imageAlt: "Kubernetes competitive moat blog cover",
    href: "https://medium.com/@adharshunni0007/kubernetes-is-not-a-skill-its-a-competitive-moat-5408ad8cdf26",
    readTime: "3-4 min read",
    published: "Latest",
  },
  {
    id: "blog-02",
    title: "The DevOps Engineer Isn't Dead. They Just Leveled Up.",
    summary:
      "Why 2026 is still the best time to be in platform and infrastructure engineering, if you're willing to evolve.",
    image: "/projects/blog-02.svg",
    imageAlt: "DevOps engineer leveled up blog cover",
    href: "https://medium.com/@adharshunni0007/the-devops-engineer-isnt-dead-they-just-leveled-up-6ac9b98ddd53",
    readTime: "3-4 min read",
    published: "Latest",
  },
  {
    id: "blog-03",
    title: "AI Won't Replace DevOps Engineers - It'll Replace the Lazy Ones",
    summary:
      "AI will not replace DevOps engineers who adapt; it will accelerate teams that combine automation with real infrastructure thinking.",
    image: "/projects/blog-03.svg",
    imageAlt: "AI and DevOps future blog cover",
    href: "https://medium.com/@adharshunni0007/ai-wont-replace-devops-engineers-it-ll-replace-the-lazy-ones-0269e5e08ca5",
    readTime: "3-4 min read",
    published: "Latest",
  },
];

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
