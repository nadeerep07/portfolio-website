"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, ExternalLink } from "lucide-react"

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
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

  const certifications = [
    {
      id: 1,
      title: "Google Play Store Listing Certificate",
      issuer: "Google Play Academy",
      date: "October 28, 2025",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google_play_cerficate-OTsZQORvYaCLOLdQU7UEZ3rJnhhA3T.png",
      link: "https://www.credential.net/9af1bfe0-3865-4468-bee5-2554813637be",
      icon: Award,
    },
    {
      id: 2,
      title: "Best Coordinator of the Month",
      issuer: "Brototype",
      date: "2024",
      image: "/achievement-badge.png",
      link: "#",
      icon: Award,
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg">Recognition and milestones</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="card-dark-hover overflow-hidden group cursor-pointer transition-all duration-300"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Certificate Image */}
              <div className="relative h-64 bg-slate-800 overflow-hidden">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                </div>
                <p className="text-purple-400 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">{cert.date}</p>

<a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
>
  View Certificate <ExternalLink size={16} />
</a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
