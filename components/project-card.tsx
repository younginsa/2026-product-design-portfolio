import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
}

export default function ProjectCard({ title, description, imageSrc, tags }: ProjectCardProps) {
  return (
    <div className="border border-neutral-200 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover rounded-none" />
      </div>
      <div className="p-6 border-t border-neutral-200">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-500">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200 rounded-none"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-4">
          <Button
            variant="ghost"
            className="px-0 text-neutral-900 hover:bg-transparent hover:text-neutral-700 rounded-none"
          >
            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
