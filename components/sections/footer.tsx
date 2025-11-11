"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Nadeer E P</h3>
            <p className="text-gray-400">Flutter Developer | Building amazing apps</p>
          </div>

          <div className="flex gap-8">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
<div className="flex justify-center items-center">
  <p className="text-gray-400 text-sm text-center">
    © {currentYear} Nadeer E P. All rights reserved.
  </p>
</div>

        </div>
      </div>
    </footer>
  )
}
