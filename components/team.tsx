import { Linkedin, Twitter, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Team() {
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Full Stack Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Passionate about creating scalable web solutions with 8+ years of experience.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "Lead Frontend Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "UI/UX expert specializing in React and modern frontend technologies.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Backend Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Backend architecture specialist with expertise in Node.js and cloud services.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emily Davis",
      role: "Mobile Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Mobile app developer focused on React Native and Flutter applications.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of developers and designers are passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
