import React from "react"
import { FiDownload } from "react-icons/fi"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import "./animation.css"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13547a] to-[#80d0c7] text-white flex flex-col font-['Roboto']">
      {/* Navigation */}
      <nav className="bg-white bg-opacity-10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">नवneet</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="overflow-hidden whitespace-nowrap inline-block">
            <div className="inline-block animate-showup text-6xl font-light mb-4">Navneet Kushwaha</div>
            <div className="inline-block w-0 animate-reveal">
              <span className="animate-slidein inline-block">Web Developer</span>
            </div>
          </div>
          <div className="flex justify-center space-x-6 my-8">
            <a
              href="https://www.linkedin.com/in/navneet--kushwaha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#80d0c7] transition-colors duration-200 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/mollenmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#80d0c7] transition-colors duration-200 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.instagram.com/mollen_0_mist/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#80d0c7] transition-colors duration-200 transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 text-lg border border-transparent font-medium rounded-md text-[#13547a] bg-white hover:bg-[#80d0c7] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#80d0c7] transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <FiDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white bg-opacity-10 backdrop-blur-lg py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">© 2025 Navneet Kushwaha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

