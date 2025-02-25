import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">Navneet Kushwaha</h2>
            <p className="text-sm">Web Developer & Designer</p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/mollenmi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/navneet--kushwaha/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://x.com/KushwahaNa89485"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button onClick={() => setIsOpen(true)} className="bg-[#3498db] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Hire Me
          </button>
        </div>

        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} All rights reserved. | Contact: navneetkushwaha64@gmail.com
        </div>
      </div>
      
      {/* Hire Me Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white/90 p-6 rounded-lg shadow-lg w-80 border border-gray-300">
            <h2 className="text-xl font-bold mb-2 text-gray-900">Hire Me</h2>
            <p className="text-sm text-gray-700 mb-4">Interested in working with me? Reach out through the following channels:</p>
            <div className="flex flex-col gap-4">
              <a href="mailto:navneetkushwaha64@gmail.com" className="flex items-center text-gray-700 hover:text-gray-900">
                <Mail size={18} className="mr-2" /> navneetkushwaha64@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/navneet--kushwaha/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
                <Linkedin size={18} className="mr-2" /> LinkedIn Profile
              </a>
              <a href="tel:+918050545269" className="flex items-center text-gray-700 hover:text-gray-900">
                <Phone size={18} className="mr-2" /> +91 8050545269
              </a>
            </div>
            <button onClick={() => setIsOpen(false)} className="mt-4 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white px-4 py-2 rounded-lg hover:opacity-90">
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}