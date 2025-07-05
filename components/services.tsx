import { Code, Smartphone, Globe, Database, Cloud, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions to meet your specific business requirements and workflows.",
      features: ["Scalable Architecture", "API Integration", "Database Design", "Cloud Deployment"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, databases, and cloud infrastructure.",
      features: ["RESTful APIs", "Database Optimization", "Security First", "Microservices"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud migration, deployment, and management services for scalable applications.",
      features: ["AWS/Azure/GCP", "DevOps", "Auto Scaling", "Cost Optimization"],
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "24/7 monitoring, updates, and technical support to keep your applications running smoothly.",
      features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Optimization"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive development services to help your business thrive in the digital world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
