"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center py-4 backdrop-blur-lg border-b border-border bg-background/80 px-4 md:px-6 mx-auto justify-between lg:px-20">
      <ThemeToggle />
      <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
        <Link
          href="/#project"
          className="nav-link transition-colors text-base text-muted-foreground hover:text-foreground"
        >
          Work
        </Link>
        <Link
          href="/#projects-intro"
          className="nav-link transition-colors text-base text-muted-foreground hover:text-foreground"
        >
          Projects
        </Link>
        <Link
          href="/#blog"
          className="nav-link transition-colors text-base text-muted-foreground hover:text-foreground"
        >
          Connect
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="https://attachments.are.na/39370898/63cf2567bbc4526b91aca361575e5002.pdf?1757289697"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button flex items-center px-3 py-1.5 border border-border bg-transparent hover:text-foreground rounded-none text-sm text-muted-foreground font-normal"
        >
          Resume <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}
