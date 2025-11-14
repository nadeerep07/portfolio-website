"use client";

import { useEffect, useRef, useState } from "react";

export function About() {
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

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Stats Cards */}
          <div className="space-y-6">
            <div className="card-dark p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">1+</h3>
              <p className="text-gray-300">Years of Experience</p>
            </div>
            <div className="card-dark p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">4+</h3>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="card-dark p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">∞</h3>
              <p className="text-gray-300">Always Learning</p>
            </div>
          </div>

          {/* About Text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate Flutter Developer skilled in{" "}
              <span className="text-cyan-400 font-semibold">
                Dart, Firebase, REST APIs
              </span>
              , and advanced state management frameworks like{" "}
              <span className="text-cyan-400 font-semibold">
                BLoC, Provider, and GetX
              </span>
              .
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Along with mobile development, I'm also growing my expertise in{" "}
              <span className="text-cyan-400 font-semibold">
                full-stack web development
              </span>{" "}
              using{" "}
              <span className="text-cyan-400 font-semibold">
                Next.js, Express, MongoDB, and modern UI libraries
              </span>
              . I’m constantly improving my skills by building real projects and
              learning how to structure scalable, production-ready applications.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My focus is always on writing clean, maintainable code and
              crafting smooth, responsive user experiences — whether it's for
              mobile apps or the web.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Currently based in Kerala, India, I'm always excited to take on
              new challenges, learn new technologies, and collaborate with teams
              to build meaningful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
