"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

declare global {
  interface Window {
    anime: any
  }
}

export default function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.anime) {
      // Animate hero text on page load
      window.anime
        .timeline({
          easing: "easeOutExpo",
        })
        .add({
          targets: ".hero-title",
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 1000,
        })
        .add(
          {
            targets: ".hero-subtitle",
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
          },
          "-=600",
        )
        .add(
          {
            targets: ".hero-description",
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
          },
          "-=400",
        )
        .add(
          {
            targets: ".hero-cta",
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 500,
          },
          "-=200",
        )
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 opacity-0">
          Hi, I'm <span className="text-primary">Rizwan Ali</span>
        </h1>

        <h2 className="hero-subtitle text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 opacity-0">
          Full Stack Developer
        </h2>

        <p className="hero-description text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0">
          I create modern, responsive web applications with clean code and beautiful user experiences. Passionate about
          React, Next.js, and cutting-edge web technologies.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
          <Button size="lg" onClick={scrollToAbout} className="text-lg px-8 py-3 rounded-lg">
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="text-lg px-8 py-3 rounded-lg bg-transparent"
          >
            <ArrowDown className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
