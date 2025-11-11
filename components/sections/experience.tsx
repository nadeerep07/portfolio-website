"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
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

const experiences = [
  {
    id: 1,
    role: "Flutter Developer Trainee",
    company: "Brototype (Coding Bootcamp)",
    duration: "Oct 2024 – Nov 2025",
    highlights: [
      "Completed an intensive hands-on Flutter development program",
      "Built and deployed production-level apps: QuickPitch and InvoZoyo",
      "Gained practical experience with Firebase, REST APIs, and Razorpay",
      "Worked on state management using BLoC and Provider",
      "Collaborated with peers on debugging, UI design, and optimization",
    ],
  },
]


  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">My career journey</p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="card-dark p-8 relative">
                {/* Timeline Dot */}
<div className="absolute  top-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-950">
  <Briefcase size={24} className="text-white" />
</div>


<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4 pl-14">
  <div>
    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
    <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
  </div>
  <div className="flex items-center gap-2 text-gray-400">
    <Calendar size={18} />
    <span className="font-semibold">{exp.duration}</span>
  </div>
</div>


                <div className="border-t border-slate-800 pt-6">
                  <h4 className="font-semibold text-gray-300 mb-4">Key Highlights:</h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-cyan-400 font-bold mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
