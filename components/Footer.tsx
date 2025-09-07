"use client"

import { useEffect } from "react"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    anime: any
  }
}

export default function Footer() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.anime) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              window.anime({
                targets: ".footer-content",
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                easing: "easeOutExpo",
              })

              window.anime({
                targets: ".social-link",
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 600,
                easing: "easeOutExpo",
                delay: window.anime.stagger(100, { start: 300 }),
              })

              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.3 },
      )

      const footer = document.querySelector("footer")
      if (footer) {
        observer.observe(footer)
      }

      return () => observer.disconnect()
    }
  }, [])

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-content opacity-0">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">Let's Connect</h3>
              <p className="text-muted-foreground">Always interested in new opportunities and collaborations</p>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="social-link opacity-0 hover:scale-110 transition-transform duration-200"
              >
                <a href="https://github.com/rizwanali02" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="social-link opacity-0 hover:scale-110 transition-transform duration-200"
              >
                <a href="https://linkedin.com/in/rizwan-ali-8aa492276" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="social-link opacity-0 hover:scale-110 transition-transform duration-200"
              >
                <a href="mailto:rizwanali02hindoli@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground flex items-center justify-center">
              © 2025 Rizwan Ali . Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js and
              Shadcn/Ui.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
