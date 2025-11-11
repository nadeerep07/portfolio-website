"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
      image: "/coordinator.png",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Recognition and milestones
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="card-dark-hover overflow-hidden group cursor-pointer rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Certificate Image */}
              <div className="relative w-full aspect-[5/3] overflow-hidden bg-slate-900">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Certificate Content */}
              <div className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <Award
                    className="text-cyan-400 flex-shrink-0 mt-1"
                    size={22}
                  />
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-purple-400 font-medium text-sm mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-xs mb-3">{cert.date}</p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors duration-300"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
