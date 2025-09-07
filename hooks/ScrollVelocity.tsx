"use client"

import React, { useEffect, useRef } from "react"
import * as anime from "animejs"

interface ScrollVelocityProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[] | string
  velocity?: number // positive = left to right, negative = right to left
}

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  children,
  velocity = 50, // pixels per second
  className,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const contentWidth = contentRef.current.scrollWidth
    const containerWidth = containerRef.current.offsetWidth

    let currentX = 0
    let rafId: number

    const step = () => {
      currentX -= (velocity / 60) // ~60fps → px per frame
      if (Math.abs(currentX) >= contentWidth) {
        currentX = 0 // reset for infinite loop
      }

      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${currentX}px)`
      }

      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(rafId)
  }, [velocity])

  return (
    <div
      ref={containerRef}
      className={`relative m-0 flex flex-nowrap overflow-hidden whitespace-nowrap ${className}`}
      {...props}
    >
      <div
        ref={contentRef}
        className="flex flex-row flex-nowrap whitespace-nowrap text-xl font-semibold *:mr-6 *:block md:text-2xl xl:text-4xl"
      >
        {typeof children === "string"
          ? Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx}>{children}</span>
            ))
          : Array.isArray(children)
          ? [...children, ...children, ...children].map((child, idx) => 
              React.isValidElement(child) 
                ? React.cloneElement(child, { 
                    key: `${child.key || 'item'}-${idx}` 
                  })
                : child
            )
          : children}
      </div>
    </div>
  )
}

export { ScrollVelocity }
