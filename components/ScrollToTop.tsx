"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

declare global {
  interface Window {
    anime: any
  }
}

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    if (typeof window !== "undefined" && window.anime) {
      window.anime({
        targets: ".scroll-to-top",
        scale: [1, 0.8, 1],
        duration: 300,
        easing: "easeOutExpo",
      })
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="scroll-to-top fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
