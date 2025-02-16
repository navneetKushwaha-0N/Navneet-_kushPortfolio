"use client"

import { useState } from "react"
import { FaHome, FaCog, FaSignOutAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa"

export function Sidebar({ setActiveComponent, isMinimized, toggleSidebar }) {
  const [activeItem, setActiveItem] = useState("signup")

  const handleItemClick = (component) => {
    setActiveComponent(component)
    setActiveItem(component)
  }

  return (
    <div
      className={`bg-gray-800 text-white ${isMinimized ? "w-16" : "w-64"} flex flex-col justify-between transition-all duration-300 ease-in-out`}
    >
      <div>
        <div className="p-4 flex items-center justify-center">
          <img
            src="https://github.com/shadcn.png"
            alt="Profile"
            className={`rounded-full ${isMinimized ? "w-12 h-12" : "w-20 h-20"} transition-all duration-300`}
          />
        </div>
        <nav className="mt-8">
          <button
            className={`w-full flex items-center text-left text-lg mb-2 ${isMinimized ? "px-2 justify-center" : "px-4"} py-3 ${activeItem === "signup" ? "bg-gray-700" : ""} hover:bg-gray-700 transition-colors duration-200`}
            onClick={() => handleItemClick("signup")}
          >
            <FaHome className={`${isMinimized ? "mr-0" : "mr-2"}`} />
            {!isMinimized && <span>Create Admin</span>}
          </button>
          <button
            className={`w-full flex items-center text-left text-lg mb-2 ${isMinimized ? "px-2 justify-center" : "px-4"} py-3 ${activeItem === "update" ? "bg-gray-700" : ""} hover:bg-gray-700 transition-colors duration-200`}
            onClick={() => handleItemClick("update")}
          >
            <FaCog className={`${isMinimized ? "mr-0" : "mr-2"}`} />
            {!isMinimized && <span>Update Project</span>}
          </button>
        </nav>
      </div>
      <div className="p-4">
        <button
          className={`w-full flex items-center text-left text-lg mb-2 ${isMinimized ? "px-2 justify-center" : "px-4"} py-3 hover:bg-gray-700 transition-colors duration-200`}
        >
          <FaSignOutAlt className={`${isMinimized ? "mr-0" : "mr-2"}`} />
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

