

import { useState } from "react"
import { FaToggleOn, FaToggleOff } from "react-icons/fa"

export function PortfolioVisibility() {
  const [sections, setSections] = useState([
    { id: 1, name: "About", visible: true },
    { id: 2, name: "Projects", visible: true },
    { id: 3, name: "Skills", visible: true },
    { id: 4, name: "Experience", visible: true },
    { id: 5, name: "Education", visible: true },
    { id: 6, name: "Blog", visible: false },
    { id: 7, name: "Contact", visible: true },
  ])

  const toggleVisibility = (id) => {
    setSections(sections.map((section) => (section.id === id ? { ...section, visible: !section.visible } : section)))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Portfolio Visibility</h2>
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="flex items-center justify-between">
            <span>{section.name}</span>
            <button
              onClick={() => toggleVisibility(section.id)}
              className={`text-2xl ${section.visible ? "text-green-500" : "text-gray-400"}`}
            >
              {section.visible ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

