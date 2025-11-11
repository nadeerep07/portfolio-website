"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "QuickPitch",
      description:
        "A modern pitch presentation app with intuitive slide management and real-time collaboration features.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/create-a-modern-minimalistic-app-launch-_xg2_NRROSvK6YdjDngiaFA_VeMS029lR9uUXDDiXWPy2w-gnsySnPvSNTLh5D3n7FsgTAxZSvt0E.jpeg",
      tech: ["Flutter", "Firebase", "Provider"],
      link: "https://play.google.com/store/apps/details?id=com.quickpitch",
      type: "Apps",
    },
    {
      id: 2,
      title: "InvoZoyo",
      description: "Professional invoicing application with PDF generation, payment tracking, and client management.",
      image: "/invoice-app.jpg",
      tech: ["Flutter", "Hive", "PDF Export"],
      link: "https://play.google.com/store/apps/details?id=com.zoyo.bathware",
      type: "Apps",
    },
    {
      id: 3,
      title: "Dirham Symbol Package",
      description:
        "A Flutter package that formats and displays the UAE Dirham (AED) currency symbol in multiple styles for consistent representation across apps.",
      image:
        "https://raw.githubusercontent.com/nadeerep07/dirham-symbol/master/screenshots/light_mode.png",
      tech: ["Dart", "Flutter Package"],
      link: "https://pub.dev/packages/dirham_symbol",
      type: "Packages",
    },
  ]

  const filters = ["All", "Apps", "Packages"]
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.type === activeFilter)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Apps and packages I've built</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/50"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card-dark-hover overflow-hidden group cursor-pointer transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                >
                  View on Store <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
