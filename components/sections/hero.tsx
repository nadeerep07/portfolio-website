"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <div
            className={`flex justify-center md:justify-end transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative w-70 h-96 rounded-2xl overflow-hidden border-2 border-cyan-500/30 glow-blue">
              <Image
                src="/images/design-mode/nadeer_casual.png"
                alt="Nadeer E P"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Hero Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-6">
              <div>
                <p className="text-cyan-400 text-lg font-semibold mb-2">
                  Welcome to my portfolio
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-snug sm:leading-tight">
                  Hi, I'm <span className="gradient-text">Nadeer E&nbsp;P</span>
                </h1>

                <p className="text-2xl text-gray-400 mt-4">Flutter Developer</p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Building beautiful, fast, and scalable apps with Flutter.
                Passionate about creating seamless user experiences and
                leveraging modern technologies to solve real-world problems.
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-base">
                <MapPin size={18} className="text-cyan-400" />
                <span>Kerala, India</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => {
            const nextSection = document.querySelector("#about"); // target next section ID
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        >
          <ChevronDown
            className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 animate-bounce"
            size={36}
          />
        </div>
      </div>
    </section>
  );
}
