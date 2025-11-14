"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Zap, GitBranch } from "lucide-react"

export function Skills() {
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

  const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Dart", "C", "JavaScript"],
    color: "cyan",
  },
  {
    title: "Frameworks",
    icon: Zap,
    skills: ["Flutter", "Express.js", "SwiftUI"],
    color: "purple",
  },
  {
    title: "State Management",
    icon: Database,
    skills: ["BLoC", "Provider", "GetX", "Riverpod"],
    color: "cyan",
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: ["Firebase", "MongoDB", "Hive", "Sqflite"],
    color: "purple",
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Android Studio", "VS Code", "Xcode", "Postman"],
    color: "cyan",
  },
  {
    title: "Backend & APIs",
    icon: Zap,
    skills: [
      "REST APIs",
      "Node.js",
      "Express.js",
      "Cloudinary",
      "Razorpay",
      "Google Maps API"
    ],
    color: "purple",
  },
  {
    title: "Learning & Exploring",
    icon: Zap,
    skills: ["Swift", "Kotlin", "Full-stack workflows"],
    color: "cyan",
  },
]


  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const isBlue = category.color === "cyan"
            return (
              <div
                key={index}
                className={`card-dark-hover p-6 cursor-pointer transition-all duration-300 hover:scale-105`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`flex items-center gap-3 mb-4 ${isBlue ? "text-cyan-400" : "text-purple-400"}`}>
                  <Icon size={28} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                        isBlue
                          ? "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40"
                          : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/40"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
