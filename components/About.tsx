"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

declare global {
  interface Window {
    anime: any
  }
}

export default function About() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.anime) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              window.anime({
                targets: ".about-card",
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 800,
                easing: "easeOutExpo",
                delay: window.anime.stagger(200),
              })
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.3 },
      )

      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        observer.observe(aboutSection)
      }

      return () => observer.disconnect()
    }
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer with hands-on experience in building scalable web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="about-card opacity-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Hello, I'm Rizwan Ali</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with experience building modern web applications. I specialize in
                Angular.js React.js, Next.js, and Node.js, creating scalable solutions that deliver exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community. I believe in writing clean, maintainable code and
                following best practices.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">What I Do</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Frontend Development with Angular.js & React.js & Next.js
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Backend Development with Node.js & Express & Fastify.js & Nest.js
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Database Design & Management
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="about-card opacity-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Work Experience</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-foreground">Full Stack Developer</h4>
                    <span className="text-sm text-muted-foreground">16 oct - 16 jul 2025</span>
                  </div>
                  <p className="text-primary font-medium mb-2">IDCLE • Mumbai, India</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Working as a full-stack developer on various high-quality projects, implementing modern web
                    technologies and delivering scalable solutions for clients across different industries.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Angular.js</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      Node.js
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      MySql
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      + More
                    </span>
                  </div>
                </div>

                <div className="border-l-4 border-muted pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-foreground">Software Development Intern</h4>
                    <span className="text-sm text-muted-foreground">15 Apr - 15 oct 2024</span>
                  </div>
                  <p className="text-primary font-medium mb-2">IDCLE • Mumbai, India</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Started as an intern and gained hands-on experience in full-stack development. Contributed to
                    multiple projects and learned industry best practices while working with experienced developers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                      JavaScript
                    </span>
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                      MongoDB
                    </span>
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Fastify.js
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-4">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                    1 Year Experience
                  </div>
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                    Multiple Projects
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
