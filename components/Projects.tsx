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
    title: "Tweeter Clone",
    description:
      "modern social media platform that allows users to post short messages, follow other users, and engage with content through likes and retweets. user can chat with each other in real-time.",
    image: "/image-tweeter.png",
    technologies: ["ReactJs", "Redux-Toolkit", "MongoDB", "Express", "NodeJs"],
    githubUrl: "https://github.com/Rizwanali02/Twitter-Web-App",
    liveUrl: "https://twitter-web-app-eight.vercel.app",
    featured: true,
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application that enables users to communicate instantly. Built with React.js and Socket.io for seamless messaging.",
    image: "/imageChat.png",
    technologies: ["React.js", "TailwindCSS", "Socket.io", "Node.js","Express"],
    githubUrl: "https://github.com/Rizwanali02/chat-app-frontend",
    liveUrl: "https://chat-app-nu-nine-37.vercel.app/",
    featured: true,
  },
  {
    title: "Movix Web App",
    description:
      "A movie discovery and recommendation platform that provides users with detailed information about movies, including trailers, ratings, and reviews. Built with React.js and TailwindCSS for a seamless browsing experience.",
    image: "/image.png",
    technologies: ["React.js", "TailwindCSS"],
    githubUrl: "https://github.com/Rizwanali02/Moviex_Web_App",
    liveUrl: "https://themovixweb.netlify.app",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React.js, featuring user authentication and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "MongoDB","Context API"],
    githubUrl: "https://github.com/Rizwanali02/Laptop-Ecommerce",
    liveUrl: "https://laptop-ecommerce-pink.vercel.app/",
    featured: false,
  },
  {
    title: "Blog web App",
    description:
      "A modern blogging platform with rich text editing, SEO optimization, and social sharing features. Built with React.js and TailwindCSS for a sleek user experience.",
    image: "/task-management-dashboard.png",
    technologies: ["ReactJs", "Express", "MongoDB","NodeJs"],
    githubUrl: "https://github.com/Rizwanali02/Blog-App",
    liveUrl: "https://taskflow-app.vercel.apphttps://blog-app-ivory-iota.vercel.app/",
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

                <div className={`${project.featured ? "md:w-1/2" : ""} mt-5` }>
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
            <a href="https://github.com/rizwanali02" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
