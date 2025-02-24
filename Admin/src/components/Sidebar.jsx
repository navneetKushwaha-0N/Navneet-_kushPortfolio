"use client"

import { useState } from "react"
import {
  FaChartBar,
  FaProjectDiagram,
  FaEnvelope,
  FaCog,
  FaUserShield,
  FaHistory,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"

export function Sidebar({ setActiveComponent, isMinimized, toggleSidebar }) {
  const [activeItem, setActiveItem] = useState("overview")

  const handleItemClick = (component) => {
    setActiveComponent(component)
    setActiveItem(component)
  }

  const menuItems = [
    { name: "Overview", icon: FaChartBar, component: "overview" },
    { name: "Projects", icon: FaProjectDiagram, component: "projects" },
    { name: "Messages", icon: FaEnvelope, component: "messages" },
    { name: "Settings", icon: FaCog, component: "settings" },
    { name: "Authentication", icon: FaUserShield, component: "authentication" },
    { name: "Logs", icon: FaHistory, component: "logs" },
  ]

  return (
    <div
      className={`bg-gray-800 text-white ${isMinimized ? "w-16" : "w-64"} flex flex-col justify-between transition-all duration-300 ease-in-out`}
    >
      <div>
        <div className="p-4 flex items-center justify-center">
          <div
            className={`rounded-full overflow-hidden ${isMinimized ? "w-10 h-10" : "w-16 h-16"} transition-all duration-300`}
          >
            <img src="https://github.com" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.component}
              className={`w-full flex items-center text-left text-base mb-2 ${isMinimized ? "px-2 justify-center" : "px-4"} py-3 ${activeItem === item.component ? "bg-gray-700" : ""} hover:bg-gray-700 transition-colors duration-200`}
              onClick={() => handleItemClick(item.component)}
            >
              <item.icon className={`${isMinimized ? "mr-0" : "mr-3"} text-xl`} />
              {!isMinimized && <span>{item.name}</span>}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <button
          className={`w-full flex items-center text-left text-base mb-2 ${isMinimized ? "px-2 justify-center" : "px-4"} py-3 hover:bg-gray-700 transition-colors duration-200`}
        >
          <FaSignOutAlt className={`${isMinimized ? "mr-0" : "mr-3"} text-xl`} />
          {!isMinimized && <span>Logout</span>}
        </button>
        <button
          className="w-full flex justify-center text-lg py-2 hover:bg-gray-700 transition-colors duration-200"
          onClick={toggleSidebar}
        >
          {isMinimized ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
    </div>
  )
}

