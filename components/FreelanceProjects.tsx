"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Users, Shield, CreditCard, Smartphone } from "lucide-react"

declare global {
  interface Window {
    anime: any
  }
}

export default function FreelanceProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (typeof window !== "undefined" && window.anime) {
              // Animate section title
              window.anime({
                targets: ".freelance-title",
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 800,
                easing: "easeOutQuart",
              })

              // Animate cards with stagger
              window.anime({
                targets: cardsRef.current,
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: window.anime.stagger(200, { start: 300 }),
                easing: "easeOutQuart",
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  const technologies = [
    "Next.js",
    "Shadcn/ui",
    "Zustand",
    "PostgreSQL",
    "Express.js",
    "Node.js",
    "PayU Gateway",
    "Google Auth",
  ]

  const features = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Multi-Role Admin System",
      description: "Marketing person, area manager, city manager roles",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Google Authentication",
      description: "Secure login with Google OAuth integration",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "PayU Payment Gateway",
      description: "Integrated payment processing for bookings",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Responsive Design",
      description: "Optimized for all devices and screen sizes",
    },
  ]

  return (
    <section ref={sectionRef} id="freelance" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="freelance-title text-3xl sm:text-4xl font-bold text-foreground mb-4 opacity-0">
            Freelance Projects
          </h2>
          <p className="freelance-title text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">
            Independent projects showcasing full-stack development expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main Project Card */}
          <Card ref={addToRefs} className="opacity-0 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl font-bold">Roomhy</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://roomhy.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Site
                    </a>
                  </Button>
                </div>
              </div>
              <CardDescription className="text-base">Hostel Management System</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A comprehensive hostel management platform that enables hostels, PGs, and apartments to be onboarded
                with a powerful admin dashboard. The system features role-based access control, payment processing, and
                responsive design for seamless management across all devices.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <Card key={index} ref={addToRefs} className="opacity-0 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
