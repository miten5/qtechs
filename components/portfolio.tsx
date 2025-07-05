import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform with patient portal",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "PostgreSQL", "Tailwind", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate App",
      description: "Mobile-first real estate application with advanced search features",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Firebase", "Maps API", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Financial Dashboard",
      description: "Analytics dashboard for financial data visualization and reporting",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "D3.js", "Express", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      description: "Online learning platform with video streaming and progress tracking",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Angular", "NestJS", "AWS", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Analytics",
      description: "Social media analytics tool with real-time data processing",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "Django", "Redis", "Celery"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
