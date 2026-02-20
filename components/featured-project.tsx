import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface FeaturedProjectProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
}

export function FeaturedProject({ title, description, imageSrc, tags }: FeaturedProjectProps) {
  return (
    <div className="grid gap-0 lg:grid-cols-2 border border-neutral-200">
      <div className="relative aspect-video overflow-hidden lg:order-last">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover rounded-none" />
      </div>
      <div className="flex flex-col justify-center p-6 border-r border-neutral-200">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
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
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">{title}</h3>
          <p className="text-neutral-500 md:text-lg">{description}</p>
        </div>
        <Button
          variant="ghost"
          className="w-fit px-0 mt-4 text-neutral-900 hover:bg-transparent hover:text-neutral-700 rounded-none"
        >
          View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
