import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
