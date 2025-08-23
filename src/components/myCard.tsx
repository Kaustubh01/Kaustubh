import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Github } from "lucide-react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectCard() {
  return (
    <Card className="w-[350px] overflow-hidden rounded-2xl shadow-md bg-black border-none">
      {/* Image */}
      <img
        src="https://via.placeholder.com/350x200"
        alt="Project thumbnail"
        className="w-full h-48 object-cover"
      />

      <CardHeader>
        {/* Title */}
        <CardTitle className="text-xl font-bold">Project Title</CardTitle>

        {/* Subtitle */}
        <CardDescription className="text-gray-500">
          This is a short project subtitle or description.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex gap-3 mt-2">
        {/* Circular GitHub button */}
        <Button variant="outline" size="icon" className="rounded-full">
          <Github className="h-5 w-5" />
        </Button>

        {/* Circular Web button */}
        <Button variant="outline" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  )
}
