"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Copy, Check } from "lucide-react"

export function Contact() {
  const [showPhone, setShowPhone] = useState(false)
  const [copied, setCopied] = useState("")

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(""), 2000)
  }

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // Open Gmail compose in new tab
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=nadeerep.dev@gmail.com', '_blank')
  }

  const primaryActions = [
    {
      icon: Mail,
      label: "Email Me",
      value: "nadeerep.dev@gmail.com",
      description: "For project inquiries and collaboration",
      link: "#",
      gradient: "from-cyan-500 to-blue-500",
      isEmail: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect professionally",
      description: "Let's network and share opportunities",
      link: "https://www.linkedin.com/in/nadeerep/",
      gradient: "from-blue-500 to-purple-500",
      isEmail: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Check out my code",
      description: "Explore my projects and contributions",
      link: "https://github.com/nadeerep07",
      gradient: "from-purple-500 to-pink-500",
      isEmail: false,
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Primary Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {primaryActions.map((action, index) => {
              const Icon = action.icon
              return (
                <a
                  key={index}
                  href={action.link}
                  onClick={action.isEmail ? handleEmailClick : undefined}
                  target={action.link.startsWith("http") ? "_blank" : undefined}
                  rel={action.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-dark p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{action.label}</h3>
                  <p className="text-gray-400 text-sm mb-2">{action.description}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-cyan-400 text-sm font-mono">{action.value}</p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Additional Info Card */}
          <div className="card-dark p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Based in</p>
                  <p className="text-white font-semibold">Kerala, India</p>
                  <p className="text-gray-500 text-xs mt-1">Available for remote work</p>
                </div>
              </div>

              {/* Phone (with reveal) */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  {showPhone ? (
                    <div className="flex items-center gap-2">
                      <p className="text-white font-semibold font-mono">9207874848</p>
                      <button
                        onClick={() => handleCopy("9207874848", "phone")}
                        className="p-1 hover:bg-slate-700 rounded transition-colors"
                        title="Copy phone number"
                      >
                        {copied === "phone" ? (
                          <Check className="text-green-400" size={16} />
                        ) : (
                          <Copy className="text-gray-400" size={16} />
                        )}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowPhone(true)}
                      className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors"
                    >
                      Click to reveal →
                    </button>
                  )}
                  <p className="text-gray-500 text-xs mt-1">For urgent matters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time Banner */}
          <div className="card-dark p-6 border-l-4 border-cyan-500">
            <div className="flex items-start gap-4">
              <MessageSquare className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-bold mb-2">Quick Response</h3>
                <p className="text-gray-400 text-sm">
                  I typically respond to emails within 24 hours. For the fastest response, reach out via{" "}
                  <a href="https://www.linkedin.com/in/nadeerep/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    LinkedIn
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
