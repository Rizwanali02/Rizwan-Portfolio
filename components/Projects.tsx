"use client"

import type React from "react"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

declare global {
  interface Window {
    anime: any
  }
}

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard. Includes real-time inventory management and order tracking.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns and WebSocket integration.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com/alexjohnson/task-manager",
    liveUrl: "https://taskflow-app.vercel.app",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts. Features beautiful data visualizations and offline support.",
    image: "/preview/project4.png",
    technologies: ["React", "Chart.js", "OpenWeather API", "PWA"],
    githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    liveUrl: "https://weather-pro.vercel.app",
    featured: false,
  },
  {
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics platform for social media managers, featuring engagement tracking, content scheduling, and performance insights across multiple platforms.",
    image: "/social-media-analytics-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
    githubUrl: "https://github.com/alexjohnson/social-analytics",
    liveUrl: "https://social-insights.vercel.app",
    featured: false,
  },
]

export default function Projects() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.anime) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Stagger animation for project cards
              window.anime({
                targets: ".project-card",
                opacity: [0, 1],
                translateY: [50, 0],
                scale: [0.95, 1],
                duration: 800,
                easing: "easeOutExpo",
                delay: window.anime.stagger(150),
              })
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )

      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        observer.observe(projectsSection)
      }

      return () => observer.disconnect()
    }
  }, [])

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.anime) {
      window.anime({
        targets: e.currentTarget,
        scale: 1.02,
        duration: 300,
        easing: "easeOutQuad",
      })
    }
  }

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.anime) {
      window.anime({
        targets: e.currentTarget,
        scale: 1,
        duration: 300,
        easing: "easeOutQuad",
      })
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`project-card opacity-0 overflow-hidden transition-all duration-300 cursor-pointer ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className={`${project.featured ? "md:flex" : ""}`}>
                <div className={`${project.featured ? "md:w-1/2" : ""}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                <div className={`${project.featured ? "md:w-1/2" : ""}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-bold text-foreground mb-2">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button variant="default" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
