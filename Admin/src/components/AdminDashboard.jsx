

import { useState } from "react"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { Overview } from "./Overview"
import { Projects } from "./Projects"
import { Messages } from "./Messages"
import { Settings } from "./Settings"
import { Authentication } from "./Authentication"
import { Logs } from "./Logs"
import { PortfolioVisibility } from "./PortfolioVisibility"
import axios from "axios"

export function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("overview")
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Assume logged in for now
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userProfile, setUserProfile] = useState("https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D") // Default profile pic

  const handleComponentChange = (component) => {
    setActiveComponent(component)
  }

  const handleAuth = async () => {
    try {
      setLoading(true)
      const email = document.querySelector("[name='email']").value
      const password = document.querySelector("[name='password']").value

      const { data } = await axios.post("http://localhost:5001/admin/login", { email, password })

      localStorage.setItem("token", data.token)
      setUserProfile(data.profilePic || "https://via.placeholder.com/40")
      setIsLoggedIn(true)
      setIsModalOpen(false)

      // ✅ Redirect to Admin Dashboard after successful login
      window.location.href = "/admin-dashboard"
    } catch (error) {
      console.error("❌ Authentication failed:", error.response?.data)
      alert(error.response?.data?.message || "❌ Authentication failed")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    setUserProfile("https://via.placeholder.com/40") // Reset profile pic
    window.location.href = "/" // Redirect to Home after logout
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar 
        setActiveComponent={handleComponentChange} 
        isMinimized={isSidebarMinimized} 
        toggleSidebar={() => setIsSidebarMinimized(!isSidebarMinimized)} 
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          {activeComponent === "overview" && <Overview />}
          {activeComponent === "projects" && <Projects />}
          {activeComponent === "messages" && <Messages />}
          {activeComponent === "settings" && (
            <div className="space-y-8">
              <Settings />
              <PortfolioVisibility />
            </div>
          )}
          {activeComponent === "authentication" && <Authentication handleAuth={handleAuth} />}
          {activeComponent === "logs" && <Logs />}
        </main>
      </div>

      {/* Logout Button */}
      {isLoggedIn && (
        <button 
          onClick={handleLogout} 
          className="absolute bottom-10 right-10 bg-red-500 text-white py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      )}
    </div>
  )
}
