import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { projects, getProjectBySlug } from "@/lib/projects"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const projectSummaries: Record<string, { role: string; timeline: string; outcome: string; tools: string }> = {
  "ship-cyber-security": {
    role: "Lead Product Designer",
    timeline: "2024",
    outcome: "Delivered 20+ pages of workflow in a month",
    tools: "Figma, Protopie",
  },
  neuboat: {
    role: "Product Designer",
    timeline: "2023-2024",
    outcome: "Shipped iOS app with 4.8 star rating",
    tools: "Figma, Swift UI",
  },
  "hinas-cloud": {
    role: "Lead Product Designer",
    timeline: "2023",
    outcome: "Won iF Design Award 2024",
    tools: "Figma, After Effects",
  },
  "360-svm": {
    role: "Product Designer",
    timeline: "2024",
    outcome: "Implemented real-time 360° monitoring system",
    tools: "Figma, Unity",
  },
  "geared-ai": {
    role: "Product Designer",
    timeline: "January - March 2025",
    outcome: "Designed 6 different AI agent services",
    tools: "Figma, ChatGPT + Mobbin",
  },
  energino: {
    role: "Product Designer",
    timeline: "August - September 2025 (3D simulation)\nOctober - November 2025 (Framer prototype)",
    outcome: "Delivered 20+ pages of workflow in a month\nLive Framer prototype for delivery",
    tools: "Figma, Midjourney, ImageFX, Framer",
  },
}

function renderTimeline(timeline: string) {
  const lines = timeline.split("\n")
  return lines.map((line, index) => {
    // Find the parenthetical part manually
    const openParen = line.indexOf("(")
    const closeParen = line.indexOf(")")

    if (openParen !== -1 && closeParen !== -1 && closeParen > openParen) {
      const beforeParen = line.substring(0, openParen)
      const parenContent = line.substring(openParen, closeParen + 1)
      const afterParen = line.substring(closeParen + 1)

      return (
        <p key={index} className="text-[14px] text-foreground font-normal mb-1 mb-1">
          {beforeParen}
          <span className="text-gray-400">{parenContent}</span>
          {afterParen}
        </p>
      )
    }

    return (
      <p key={index} className="text-[14px] text-foreground font-normal">
        {line}
      </p>
    )
  })
}

function renderOutcome(outcome: string) {
  const lines = outcome.split("\n")
  return lines.map((line, index) => (
    <p key={index} className="text-[14px] text-foreground font-normal">
      {line}
    </p>
  ))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const summary = projectSummaries[slug] || {
    role: "Product Designer",
    timeline: "2024",
    outcome: "Project completed successfully",
    tools: "Figma",
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex-1 container mx-auto px-[10%] max-w-[90rem] pt-24">
        {/* Back Button */}
        <div className="py-6">
          <Link
            href="/#project"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
        </div>

        {/* Title Section */}
        <section className="py-10 px-6">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4 font-sans">{project.title}</h1>
          <p className="text-xl font-light mb-4 md:text-xl font-sans text-foreground">{project.subtitle}</p>
          <p className="font-light max-w-3xl text-base font-sans text-muted-foreground">{project.description}</p>
        </section>

        {/* Hero Image */}
        <section className="py-10 px-6">
          <div className="w-full overflow-hidden">
            <Image
              src={project.heroImage ? `${base}${project.heroImage}` : `${base}/placeholder.svg`}
              alt={`${project.title} hero image`}
              width={1600}
              height={1200}
              className="w-full h-auto object-contain rounded-[10px]"
            />
          </div>
        </section>

        {/* Summary - 2 columns */}
        <section className="py-10 px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 p-6 rounded-[16px] summary-card">
              <div>
                <h3 className="text-sm text-muted-foreground font-light mb-[6px]">Role</h3>
                <p className="text-[14px] text-foreground font-normal">{summary.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-light mb-[6px]">Timeline</h3>
                {renderTimeline(summary.timeline)}
              </div>
            </div>
            <div className="space-y-6 p-6 rounded-[16px] summary-card">
              <div>
                <h3 className="text-sm text-muted-foreground font-light mb-[6px]">Outcome</h3>
                {renderOutcome(summary.outcome)}
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-light mb-[6px]">Tools</h3>
                <p className="text-[14px] text-foreground font-normal">{summary.tools}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image 1 */}
        <section className="py-10 px-6">
          <div className="w-full overflow-hidden rounded-[16px]">
            <Image
              src={project.mainImage1 ? `${base}${project.mainImage1}` : `${base}/placeholder.svg`}
              alt={`${project.title} main image 1`}
              width={1600}
              height={1200}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* Main Image 2 */}
        {slug !== "energino" && (
          <section className="py-10 px-6">
            <div className="w-full overflow-hidden rounded-[16px]">
              <Image
                src={project.mainImage2 ? `${base}${project.mainImage2}` : `${base}/placeholder.svg`}
                alt={`${project.title} main image 2`}
                width={1600}
                height={1200}
                className="w-full h-auto object-contain"
              />
            </div>
          </section>
        )}

        {/* 3-column image grid for Enerbuild (energino) project */}
        {slug === "energino" && (
          <section className="py-10 px-6 pt-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="w-full overflow-hidden rounded-[10px]">
                <Image
                  src={`${base}/images/energino-m2.jpeg`}
                  alt="Enerbuild image 1"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full overflow-hidden rounded-[10px]">
                <Image
                  src={`${base}/images/energino-m1.png`}
                  alt="Enerbuild image 2"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full overflow-hidden rounded-[10px]">
                <Image
                  src={`${base}/images/energino-m3.jpeg`}
                  alt="Enerbuild image 3"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          <p className="text-center text-sm font-light text-muted-foreground">
            © 2026 SA YOUNG IN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
