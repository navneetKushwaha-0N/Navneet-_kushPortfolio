import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">Navneet Kushwaha</h2>
            <p className="text-sm">Web Developer & Designer</p>
          </div>
          
          {/* Uncomment and update this section if needed */}
          {/* <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <a
              href="mailto:navneetkushwaha64@gmail.com"
              className="flex items-center justify-center md:justify-start hover:text-gray-900 transition-colors"
            >
              <Mail size={18} className="mr-2" />
              navneetkushwaha64@gmail.com
            </a>
          </div> */}

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
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} All rights reserved. | Contact: navneetkushwaha64@gmail.com
        </div>
      </div>
    </footer>
  );
}
