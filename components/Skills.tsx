"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollVelocity } from "@/hooks/ScrollVelocity"

declare global {
  interface Window {
    anime: any
  }
}

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 95,
    description: "Building interactive UIs with hooks and modern patterns",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: 90,
    description: "Full-stack React framework with SSR and API routes",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 85,
    description: "Server-side JavaScript and RESTful API development",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 80,
    description: "Fast, unopinionated web framework for Node.js",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 75,
    description: "NoSQL database design and optimization",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 95,
    description: "ES6+ features, async programming, and modern JS",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 85,
    description: "Type-safe JavaScript for better development experience",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    level: 80,
    description: "Predictable state container for JavaScript apps",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    level: 75,
    description: "Platform for building mobile and desktop web applications",
  },
  {
    name: "Fastify.js",
    icon: "https://www.fastify.io/img/logos/fastify-black.svg",
    level: 70,
    description: "Fast and low overhead web framework for Node.js",
  },
  {
    name: "Nest.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
    level: 75,
    description: "Progressive Node.js framework for building efficient applications",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    level: 90,
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    level: 85,
    description: "Popular CSS framework for responsive web design",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 80,
    description: "Relational database management system",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: 85,
    description: "Advanced open source relational database",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    level: 90,
    description: "Version control and collaborative development platform",
  },
  {
    name: "GitLab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    level: 80,
    description: "DevOps platform for the entire software development lifecycle",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 95,
    description: "Semantic markup and accessibility best practices",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 90,
    description: "Modern CSS, Flexbox, Grid, and responsive design",
  },
]

export default function Skills() {
  const half = Math.ceil(skills.length / 2)
  const firstHalf = skills.slice(0, half)
  const secondHalf = skills.slice(half)


  // Animation function
  const animateCards = () => {
    if (typeof window !== "undefined" && window.anime) {
      // Reset all cards to initial state
      window.anime.set(".skill-card", {
        opacity: 0,
        translateY: 30,
        scale: 0.9
      })

      // Animate cards
      window.anime({
        targets: ".skill-card",
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.9, 1],
        duration: 600,
        easing: "easeOutExpo",
        delay: window.anime.stagger(100),
      })

      // Animate progress bars
      setTimeout(() => {
        window.anime({
          targets: ".skill-progress",
          width: (el: HTMLElement) => el.getAttribute("data-width") + "%",
          duration: 1000,
          easing: "easeOutExpo",
          delay: window.anime.stagger(50),
        })
      }, 300)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window.anime) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCards()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 },
      )

      const skillsSection = document.getElementById("skills")
      if (skillsSection) {
        observer.observe(skillsSection)
      }

      return () => observer.disconnect()
    }
  }, [])


  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="overflow-hidden">
          <ScrollVelocity velocity={30} className="py-4">
            {firstHalf.map((skill, index) => (
              <div key={`first-${skill.name}-${index}`} className="flex-shrink-0 w-80 mx-4 h-full max-w-80">
                <Card className="skill-card opacity-0 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Skill Icon */}
                      <div className="w-12 h-12 flex-shrink-0">
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={`${skill.name} icon`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Agar icon fail ho jaye to placeholder dikhao
                            (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"
                          }}
                        />
                      </div>

                      {/* Skill Name & Description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-foreground mb-2 truncate">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 overflow-hidden break-words">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Proficiency</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="skill-progress bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          data-width={skill.level}
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </ScrollVelocity>
           <ScrollVelocity velocity={60} className="py-4">
             {secondHalf.map((skill, index) => (
              <div key={`second-${skill.name}-${index}`} className="flex-shrink-0 w-80 mx-4 h-full max-w-80">
                <Card className="skill-card opacity-0 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Skill Icon */}
                      <div className="w-12 h-12 flex-shrink-0">
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={`${skill.name} icon`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Agar icon fail ho jaye to placeholder dikhao
                            (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"
                          }}
                        />
                      </div>

                      {/* Skill Name & Description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-foreground mb-2 truncate">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 overflow-hidden break-words">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Proficiency</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="skill-progress bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          data-width={skill.level}
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </ScrollVelocity>
        </div>
      </div>
    </section>
  )
}
