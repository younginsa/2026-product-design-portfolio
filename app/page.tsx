"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isInTextArea, setIsInTextArea] = useState(false)
  const textAreaRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const [isNeuboatHovered, setIsNeuboatHovered] = useState(false)
  const [neuboatVideoError, setNeuboatVideoError] = useState(false)
  const neuboatVideoRef = useRef<HTMLVideoElement>(null)
  const [isCyberSecurityHovered, setIsCyberSecurityHovered] = useState(false)
  const [cyberSecurityTapped, setCyberSecurityTapped] = useState(false)
  const [cyberSecurityVideoError, setCyberSecurityVideoError] = useState(false)
  const cyberSecurityVideoRef = useRef<HTMLVideoElement>(null)
  const [isNeuboatTapped, setIsNeuboatTapped] = useState(false)
  const [isHinasCloudHovered, setIsHinasCloudHovered] = useState(false)
  const [hinasCloudTapped, setHinasCloudTapped] = useState(false)
  const [hinasCloudVideoError, setHinasCloudVideoError] = useState(false)
  const hinasCloudVideoRef = useRef<HTMLVideoElement>(null)
  const [isEnerbuildHovered, setIsEnerbuildHovered] = useState(false)
  const [enerbuildTapped, setEnerbuildTapped] = useState(false)
  const [enerbuildVideoError, setEnerbuildVideoError] = useState(false)
  const enerbuildVideoRef = useRef<HTMLVideoElement>(null)

  // Animated words
  const words = ["workflow", "product", "design system"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const measureRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textAreaRef.current && isInTextArea) {
        const rect = textAreaRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isInTextArea])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Measure initial word width
  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.textContent = words[0]
      setContainerWidth(measureRef.current.offsetWidth)
    }
  }, [])

  // Neuboat card: play on hover (desktop) or tap (mobile), pause when neither
  useEffect(() => {
    const video = neuboatVideoRef.current
    if (!video || neuboatVideoError) return
    if (isNeuboatHovered || isNeuboatTapped) video.play().catch(() => {})
    else {
      video.pause()
      video.currentTime = 0
    }
  }, [isNeuboatHovered, isNeuboatTapped, neuboatVideoError])

  // Ship Cyber security card: play on hover or tap
  useEffect(() => {
    const video = cyberSecurityVideoRef.current
    if (!video || cyberSecurityVideoError) return
    if (isCyberSecurityHovered || cyberSecurityTapped) video.play().catch(() => {})
    else {
      video.pause()
      video.currentTime = 0
    }
  }, [isCyberSecurityHovered, cyberSecurityTapped, cyberSecurityVideoError])

  // HiNAS Cloud card: play on hover or tap
  useEffect(() => {
    const video = hinasCloudVideoRef.current
    if (!video || hinasCloudVideoError) return
    if (isHinasCloudHovered || hinasCloudTapped) video.play().catch(() => {})
    else {
      video.pause()
      video.currentTime = 0
    }
  }, [isHinasCloudHovered, hinasCloudTapped, hinasCloudVideoError])

  // Enerbuild card: play on hover or tap
  useEffect(() => {
    const video = enerbuildVideoRef.current
    if (!video || enerbuildVideoError) return
    if (isEnerbuildHovered || enerbuildTapped) video.play().catch(() => {})
    else {
      video.pause()
      video.currentTime = 0
    }
  }, [isEnerbuildHovered, enerbuildTapped, enerbuildVideoError])

  // Cycle through words and update width
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        const nextIndex = (prev + 1) % words.length
        if (measureRef.current) {
          measureRef.current.textContent = words[nextIndex]
          setContainerWidth(measureRef.current.offsetWidth)
        }
        return nextIndex
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center py-4 backdrop-blur-lg border-b border-border bg-background/80 px-4 md:px-6 mx-auto justify-between lg:px-20">
        <ThemeToggle />
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-12">
          <Link
            href="#project"
            className="nav-link transition-colors text-muted-foreground hover:text-foreground leading-7 text-sm font-normal"
          >
            Work
          </Link>
          <Link
            href="#projects-intro"
            className="nav-link transition-colors text-muted-foreground hover:text-foreground text-sm font-normal"
          >
            Projects
          </Link>
          <Link
            href="#blog"
            className="nav-link transition-colors text-muted-foreground hover:text-foreground text-sm font-normal"
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

      <main className="flex-1 container mx-auto px-[6%] max-w-[90rem] pt-10">
        {/* Featured Project Block */}
        <section id="featured-project" className="py-10 my-0 md:py-20 md:pb-[80px] mt-10 mb-20">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start mx-6 md:pr-8">
            <div
              ref={textAreaRef}
              className="w-full md:w-auto md:max-w-sm relative transition-all duration-500 flex-shrink-0"
              onMouseEnter={() => setIsInTextArea(true)}
              onMouseLeave={() => setIsInTextArea(false)}
            >
              {/* Background layer - lowest z-index */}
              <div className="absolute right-0 bottom-0 bg-transparent z-0"></div>

              {/* Text content layer - middle z-index */}
              <div className="relative z-10 w-full max-w-sm h-auto tracking-normal leading-6">
                <h2 className="font-semibold mb-0.5 tracking-tight text-primary text-4xl" style={{ fontFamily: 'var(--font-manrope), "Manrope", sans-serif' }}>
                  {"Design for the Ocean,"}
                </h2>
                <h2 className="font-semibold tracking-tight text-primary mb-3 text-4xl" style={{ fontFamily: 'var(--font-manrope), "Manrope", sans-serif' }}>
                  {"iF Award winner:"}
                </h2>
                <h2 className="font-normal text-base text-primary mb-20" style={{ fontFamily: '"Andale Mono", monospace' }}>
                  @Avikus (HD Hyundai)
                </h2>

                {/* Two column text block */}
                <div className="flex gap-16" style={{ fontFamily: 'var(--font-manrope), "Manrope", sans-serif' }}>
                  <div className="flex flex-col">
                    <span className="leading-5 text-input text-sm">Hello I'm</span>
                    <span className="font-normal text-primary leading-6 text-sm">Youngin Sa</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="leading-5 text-input text-sm">I design to achieve</span>
                    <span className="font-normal text-primary leading-6 text-sm">Complexity became clarity</span>
                  </div>
                </div>
              </div>

              {/* Gradient overlay - highest z-index, only affects text, hidden in dark mode */}
              {isInTextArea && mounted && theme !== "dark" && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20"
                  style={{
                    background: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(180, 255, 0, 0.4) 0%, rgba(45, 240, 158, 0.3) 40%, rgba(0, 0, 255, 0.2) 70%, transparent 100%)`,
                    mixBlendMode: "screen",
                  }}
                />
              )}
            </div>

            {/* Hero video - fixed 1080×1920 (9:16) ratio; container keeps ratio so no top/bottom crop */}
            <div className="w-full aspect-[9/16] md:max-h-[400px] md:w-[225px] md:flex-none rounded-lg overflow-hidden relative bg-muted md:mr-6">
              <video
                ref={heroVideoRef}
                src={`${base}/videos/intro.mp4`}
                poster={`${base}/images/thumbnail.png`}
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                controls
                aria-label="Intro video"
                onPlay={() => setIsVideoPlaying(true)}
                onEnded={() => setIsVideoPlaying(false)}
              />
              {!isVideoPlaying && (
                <button
                  type="button"
                  onClick={() => {
                    heroVideoRef.current?.play()
                    setIsVideoPlaying(true)
                  }}
                  className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                  aria-label="Play video"
                >
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors pointer-events-none">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                      <Play className="h-7 w-7 ml-1 fill-current" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Works Section - 6 projects in 2 columns */}
        <section id="project" className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Project Card 1 - Link to external Dribbble URL in new tab */}
            <Link
              href="https://dribbble.com/shots/26504921-Fleet-Cyber-security"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card border-border cursor-pointer p-4 border-0 block"
              onMouseEnter={() => setIsCyberSecurityHovered(true)}
              onMouseLeave={() => {
                setIsCyberSecurityHovered(false)
                setCyberSecurityTapped(false)
              }}
            >
              <div
                className="aspect-[4/3] w-full overflow-hidden mb-6 relative bg-muted"
                onClick={(e) => {
                  if (!isCyberSecurityHovered && !cyberSecurityTapped && !cyberSecurityVideoError) {
                    e.preventDefault()
                    e.stopPropagation()
                    setCyberSecurityTapped(true)
                  }
                }}
              >
                {(cyberSecurityVideoError || (!isCyberSecurityHovered && !cyberSecurityTapped)) && (
                  <Image
                    src={`${base}/images/fleet-cyber-security.jpg`}
                    alt="Ship Cyber security project thumbnail"
                    width={600}
                    height={400}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                {!cyberSecurityVideoError && (isCyberSecurityHovered || cyberSecurityTapped) && (
                  <video
                    ref={cyberSecurityVideoRef}
                    src={`${base}/videos/cybersecurity.mp4`}
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    aria-label="Ship Cyber security project preview"
                    onError={() => setCyberSecurityVideoError(true)}
                  />
                )}
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1 md:gap-0">
                  <h3 className="text-base text-foreground font-normal">Ship Cyber security </h3>
                  <p className="text-base text-input font-normal">Avikus</p>
                </div>
                <p className="hidden md:block text-sm text-input max-w-[80%] font-normal">
                  TLDR; Fleet management systems with real-time threat monitoring.
                </p>
              </div>
            </Link>

            {/* Project Card 2 */}
            <Link
              href="https://dribbble.com/shots/26499093-Navigation-app-for-boats?utm_source=Clipboard_Shot&utm_campaign=youngsah&utm_content=Navigation%20app%20for%20boats&utm_medium=Social_Share"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card border-border cursor-pointer p-4 border-0 block"
              onMouseEnter={() => setIsNeuboatHovered(true)}
              onMouseLeave={() => {
                setIsNeuboatHovered(false)
                setIsNeuboatTapped(false)
              }}
            >
              <div
                className="aspect-[4/3] w-full overflow-hidden mb-6 relative bg-muted"
                onClick={(e) => {
                  if (!isNeuboatHovered && !isNeuboatTapped && !neuboatVideoError) {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsNeuboatTapped(true)
                  }
                }}
              >
                {(neuboatVideoError || (!isNeuboatHovered && !isNeuboatTapped)) && (
                  <Image
                    src={`${base}/images/secure-network-management.jpg`}
                    alt="Neuboat project thumbnail"
                    width={600}
                    height={400}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                {!neuboatVideoError && (isNeuboatHovered || isNeuboatTapped) && (
                  <video
                    ref={neuboatVideoRef}
                    src={`${base}/videos/neuboat.mp4?v=2`}
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    aria-label="Neuboat project preview"
                    onError={() => setNeuboatVideoError(true)}
                  />
                )}
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1 md:gap-0">
                  <h3 className="text-base font-normal text-foreground">Neuboat</h3>
                  <p className="text-base text-input font-normal">Avikus</p>
                </div>
                <p className="hidden md:block text-sm text-input font-normal max-w-[80%]">
                  TLDR; Boat control &amp; navigation iOS app
                </p>
              </div>
            </Link>

            {/* Project Card 3 */}
            <Link
              href="https://dribbble.com/shots/26499786-Onshore-fleet-management-solution?utm_source=Clipboard_Shot&utm_campaign=youngsah&utm_content=Onshore%20fleet%20management%20solution&utm_medium=Social_Share"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card border-border cursor-pointer p-4 border-0 block"
              onMouseEnter={() => setIsHinasCloudHovered(true)}
              onMouseLeave={() => {
                setIsHinasCloudHovered(false)
                setHinasCloudTapped(false)
              }}
            >
              <div
                className="aspect-[4/3] w-full overflow-hidden mb-6 relative bg-muted"
                onClick={(e) => {
                  if (!isHinasCloudHovered && !hinasCloudTapped && !hinasCloudVideoError) {
                    e.preventDefault()
                    e.stopPropagation()
                    setHinasCloudTapped(true)
                  }
                }}
              >
                {(hinasCloudVideoError || (!isHinasCloudHovered && !hinasCloudTapped)) && (
                  <Image
                    src={`${base}/images/secure-network-management-project.jpg`}
                    alt="HiNAS Cloud project thumbnail"
                    width={600}
                    height={400}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                {!hinasCloudVideoError && (isHinasCloudHovered || hinasCloudTapped) && (
                  <video
                    ref={hinasCloudVideoRef}
                    src={`${base}/videos/cloud.mp4`}
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    aria-label="HiNAS Cloud project preview"
                    onError={() => setHinasCloudVideoError(true)}
                  />
                )}
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1 md:gap-0">
                  <h3 className="text-base font-normal text-foreground">HiNAS Cloud</h3>
                  <p className="text-base text-input font-normal">Avikus</p>
                </div>
                <p className="hidden md:block text-sm text-input font-normal max-w-[80%]">
                  TLDR; iF Design 2024 awareded!
                </p>
              </div>
            </Link>

            {/* Project Card 4 - Second Row */}
            <Link
              href="https://dribbble.com/shots/26789403-Surround-view-system-for-ships?utm_source=Clipboard_Shot&utm_campaign=youngsah&utm_content=Surround%20view%20system%20for%20ships&utm_medium=Social_Share"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card border-border cursor-pointer p-4 border-0 block"
            >
              <div className="aspect-[4/3] w-full overflow-hidden mb-6">
                <Image
                  src={`${base}/images/project-five.png`}
                  alt="Project thumbnail"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1 md:gap-0">
                  <h3 className="text-base font-normal text-foreground">{"360° SVM"} </h3>
                  <p className="text-base text-input font-normal">Avikus</p>
                </div>
                <p className="hidden md:block text-sm text-input font-normal max-w-[80%]">
                  TLDR; Ship Surround View Monitoring system.
                </p>
              </div>
            </Link>

            {/* Project Card 5 */}
            <Link href="/project/geared-ai" className="project-card border-border cursor-pointer p-4 border-0 block">
              <div className="aspect-[4/3] w-full overflow-hidden mb-6">
                <Image
                  src={`${base}/images/geared-ai.png`}
                  alt="Project thumbnail"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1 md:gap-0">
                  <h3 className="text-base font-normal text-foreground">Geared.ai</h3>
                  <p className="text-base text-input font-normal">Freelance</p>
                </div>
                <p className="hidden md:block text-sm text-input font-normal max-w-[80%]">
                  TLDR; AI-powered platform for enhancing workflow.
                </p>
              </div>
            </Link>

            {/* Project Card 6 */}
            <Link
              href="/project/energino"
              className="project-card border-border cursor-pointer p-4 border-0 block"
              onMouseEnter={() => setIsEnerbuildHovered(true)}
              onMouseLeave={() => {
                setIsEnerbuildHovered(false)
                setEnerbuildTapped(false)
              }}
            >
              <div
                className="aspect-[4/3] w-full overflow-hidden mb-6 relative bg-muted"
                onClick={(e) => {
                  if (!isEnerbuildHovered && !enerbuildTapped && !enerbuildVideoError) {
                    e.preventDefault()
                    e.stopPropagation()
                    setEnerbuildTapped(true)
                  }
                }}
              >
                {(enerbuildVideoError || (!isEnerbuildHovered && !enerbuildTapped)) && (
                  <Image
                    src={`${base}/images/project-six.png`}
                    alt="Enerbuild project thumbnail"
                    width={600}
                    height={400}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                {!enerbuildVideoError && (isEnerbuildHovered || enerbuildTapped) && (
                  <video
                    ref={enerbuildVideoRef}
                    src={`${base}/videos/enerbuild.mp4`}
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    aria-label="Enerbuild project preview"
                    onError={() => setEnerbuildVideoError(true)}
                  />
                )}
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1 md:gap-0">
                  <h3 className="text-base font-normal text-foreground">Enerbuild</h3>
                  <p className="text-base text-input font-normal">Freelance</p>
                </div>
                <p className="hidden md:block text-sm text-input font-normal max-w-[80%]">
                  TLDR; Architectural Design Platform for Energy Planning
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Projects Intro Section - Target for "Projects" menu link */}
        <section id="projects-intro" className="py-[70px] pt-32 pb-0 pl-6 pr-6">
          <div className="max-w-4xl">
            <h2 className="text-foreground text-2xl font-light">
              I design{" "}
              {" "}
              to achieve product outcomes.
            </h2>
          </div>
        </section>

        {/* Projects Section - 3 projects in single row */}
        <section id="project-2" className="py-0 mt-6"></section>

        {/* Blog Section */}
        <section id="blog" className="py-10 pt-0">
          <div className="grid md:grid-cols-3 gap-2">
            {/* Blog Card 1 */}
            <div className="border-border cursor-pointer group p-4 border-0 bg-transparent">
              <Link
                href="https://www.figma.com/community/plugin/1585181547477168350"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/3] w-full overflow-hidden mb-6 rounded-[16px]"
              >
                <Image
                  src={`${base}/images/font-to-mm.png`}
                  alt="Blog post thumbnail"
                  width={600}
                  height={400}
                  className="blog-image h-full w-full object-cover"
                />
              </Link>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0">
                  <h3 className="text-base leading-7 font-normal text-foreground"> Measure text </h3>
                  <div className="flex items-center gap-1">
                    <Link
                      href="https://www.figma.com/community/plugin/1585181547477168350"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-muted-foreground hover:text-foreground transition-colors text-base font-normal"
                    >
                      Figma
                    </Link>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="border-border cursor-pointer group p-4 border-0 bg-transparent">
              <Link
                href="https://medium.com/@ysa_32921/figma-to-google-slides-with-gpt-86e93de57f82"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/3] w-full overflow-hidden mb-6 rounded-[16px]"
              >
                <Image
                  src={`${base}/images/figma-to-google-slide.png`}
                  alt="Blog post thumbnail"
                  width={600}
                  height={400}
                  className="blog-image h-full w-full object-cover"
                />
              </Link>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0">
                  <h3 className="text-base leading-7 font-normal text-foreground">Figma to Google Slide</h3>
                  <div className="flex items-center gap-1">
                    <Link
                      href="https://medium.com/@ysa_32921/figma-to-google-slides-with-gpt-86e93de57f82"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-muted-foreground hover:text-foreground transition-colors text-base"
                    >
                      Medium
                    </Link>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="border-border cursor-pointer group p-4 border-0 bg-transparent">
              <Link
                href="#"
                className="block aspect-[4/3] w-full overflow-hidden mb-6 rounded-[16px]"
              >
                <Image
                  src={`${base}/images/design-system-template.png`}
                  alt="Blog post thumbnail"
                  width={600}
                  height={400}
                  className="blog-image h-full w-full object-cover"
                />
              </Link>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0">
                  <h3 className="text-base leading-7 font-normal text-foreground">Type and Translate!</h3>
                  <div className="flex items-center gap-1">
                    <Link
                      href="#"
                      className="nav-link text-muted-foreground hover:text-foreground transition-colors text-base"
                    >
                      {"Appstore"}
                    </Link>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="max-w-4xl">
            <h2 className="text-foreground text-2xl font-light mb-6 ml-6 mr-6">
              Open to share ideas and grow together.
            </h2>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-10 text-muted-foreground py-0 px-6">
              <Link
                href="https://attachments.are.na/39370898/63cf2567bbc4526b91aca361575e5002.pdf?1757289697"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-base font-normal text-input"
              >
                Resume
              </Link>
              <Link
                href="https://www.linkedin.com/in/young-in-sa-921b32176/"
                className="footer-link text-base font-normal text-input"
              >
                LinkedIn
              </Link>
              <Link href="https://dribbble.com/youngsah" className="footer-link text-base font-normal text-input">
                Dribbble
              </Link>
              <Link href="#" className="footer-link text-base font-normal text-input">
                Email
              </Link>
            </div>
          </div>
        </section>
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
