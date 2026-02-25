"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const MESSAGES = [
  "Hi - welcome.",
  "I do not quit on hard problems.",
  "I test, learn, and improve in tight loops.",
  "If you need momentum, let's talk.",
]

const HIDE_SELECTOR = "#project"

export function ChatBubble() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOverWorkOrProjects, setIsOverWorkOrProjects] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setIsOverWorkOrProjects(!!el?.closest(HIDE_SELECTOR))
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false)
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : MESSAGES.length - 1))
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev < MESSAGES.length - 1 ? prev + 1 : 0))
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  if (!isVisible || isOverWorkOrProjects) return null

  const offsetX = 24
  const offsetY = 12

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: position.x + offsetX,
        top: position.y,
        transform: `translateY(calc(-100% - ${offsetY}px))`,
      }}
    >
      <div className="relative bg-[#f5f0e8] dark:bg-[#2d2a26] rounded-lg shadow-lg border border-[#e8e2d9] dark:border-[#3d3a36] w-max max-w-[200px]">
        <div className="px-2.5 py-1.5">
          <p className="text-[12px] text-foreground leading-snug mb-1.5">
            {MESSAGES[currentIndex]}
          </p>
          <div className="flex flex-nowrap items-center gap-2 text-[10px] text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>Close</span>
              <kbd className="px-1 py-px rounded bg-[#e8e2d9] dark:bg-[#3d3a36] text-[8px] font-mono leading-none">
                Esc
              </kbd>
            </div>
            <div className="flex items-center gap-1">
              <span>Prev</span>
              <kbd className="px-1 py-px rounded bg-[#e8e2d9] dark:bg-[#3d3a36] text-[8px] font-mono flex items-center leading-none">
                <ChevronLeft className="h-2.5 w-2.5" />
              </kbd>
            </div>
            <div className="flex items-center gap-1">
              <span>Next</span>
              <kbd className="px-1 py-px rounded bg-[#e8e2d9] dark:bg-[#3d3a36] text-[8px] font-mono flex items-center leading-none">
                <ChevronRight className="h-2.5 w-2.5" />
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
