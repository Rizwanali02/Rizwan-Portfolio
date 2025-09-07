import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import FreelanceProjects from "@/components/FreelanceProjects"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FreelanceProjects />
      <Projects />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
