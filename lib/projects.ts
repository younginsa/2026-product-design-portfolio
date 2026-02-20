export interface Project {
  slug: string
  title: string
  subtitle: string
  company: string
  description: string
  thumbnail: string
  heroImage: string
  mainImage1: string
  mainImage2: string
  summary: {
    role: string
    timeline: string
    outcome: string
    tools: string
  }
}

export const projects: Project[] = [
  {
    slug: "ship-cyber-security",
    title: "Ship Cyber security",
    subtitle: "Fleet management systems with real-time threat monitoring",
    company: "Avikus",
    description:
      "A cyber security monitoring system for maritime vessels with real-time threat detection and incident response capabilities.",
    thumbnail: "/images/fleet-cyber-security.jpg",
    heroImage: "/images/fleet-cyber-security.jpg",
    mainImage1: "/cyber-security-dashboard.png",
    mainImage2: "/threat-monitoring-interface.jpg",
    summary: {
      role: "Lead Product Designer",
      timeline: "2024",
      outcome: "Delivered 20+ pages of workflow in a month",
      tools: "Figma, Protopie",
    },
  },
  {
    slug: "neuboat",
    title: "Neuboat",
    subtitle: "Boat control & navigation iOS app",
    company: "Avikus",
    description:
      "An iOS application for boat control and navigation, enabling remote vessel monitoring and route planning.",
    thumbnail: "/images/secure-network-management.jpg",
    heroImage: "/images/secure-network-management.jpg",
    mainImage1: "/boat-navigation-app.jpg",
    mainImage2: "/marine-control-interface.jpg",
    summary: {
      role: "Product Designer",
      timeline: "2023-2024",
      outcome: "Delivered 20+ pages of workflow in a month",
      tools: "Figma, Swift UI",
    },
  },
  {
    slug: "hinas-cloud",
    title: "HiNAS Cloud",
    subtitle: "iF Design Award 2024 Winner",
    company: "Avikus",
    description:
      "A cloud-based navigation assistance system with route optimization and fleet analytics. Winner of iF Design Award 2024.",
    thumbnail: "/images/secure-network-management-project.jpg",
    heroImage: "/images/secure-network-management-project.jpg",
    mainImage1: "/cloud-navigation-system.jpg",
    mainImage2: "/fleet-analytics-dashboard.jpg",
    summary: {
      role: "Lead Product Designer",
      timeline: "2023",
      outcome: "Delivered 20+ pages of workflow in a month",
      tools: "Figma, After Effects",
    },
  },
  {
    slug: "360-svm",
    title: "360° SVM",
    subtitle: "Ship Surround View Monitoring system",
    company: "Avikus",
    description:
      "A 360-degree surround view monitoring system providing complete situational awareness for ship captains and crew.",
    thumbnail: "/images/project-five.png",
    heroImage: "/images/project-five.png",
    mainImage1: "/surround-view-monitoring.jpg",
    mainImage2: "/ship-camera-system.jpg",
    summary: {
      role: "Product Designer",
      timeline: "2024",
      outcome: "Delivered 20+ pages of workflow in a month",
      tools: "Figma, Unity",
    },
  },
  {
    slug: "geared-ai",
    title: "Geared.ai",
    subtitle: "AI-powered platform for enhancing workflow",
    company: "Freelance",
    description:
      "An AI productivity platform that automates repetitive tasks and provides intelligent workflow insights.",
    thumbnail: "/images/geared-ai.png",
    heroImage: "/images/geared-ai.png",
    mainImage1: "/images/geared-ai-main-1.png",
    mainImage2: "/images/geared-ai-main-2.png",
    summary: {
      role: "Product Designer",
      timeline: "2024",
      outcome: "Delivered 20+ pages of workflow in a month",
      tools: "Figma, Framer",
    },
  },
  {
    slug: "energino",
    title: "Enerbuild",
    subtitle: "Architectural Design Platform for Energy Planning",
    company: "Freelance",
    description:
      "A design platform helping architects integrate energy planning with real-time consumption predictions.",
    thumbnail: "/images/project-six.png",
    heroImage: "/images/project-six.png",
    mainImage1: "/images/energino-main-1-v2.png",
    mainImage2: "/images/energino-main-2.png",
    summary: {
      role: "Product Designer",
      timeline: "2024",
      outcome: "Delivered 20+ pages of workflow in a month",
      tools: "Figma, Rhino",
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
