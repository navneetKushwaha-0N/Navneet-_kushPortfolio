"use client"

import { useState } from "react"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { AdminSignUp } from "./AdminSignUp"
import { ProjectUpdate } from "./ProjectUpdate"

export function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("signup")
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setActiveComponent={setActiveComponent} isMinimized={isSidebarMinimized} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          {activeComponent === "signup" && <AdminSignUp />}
          {activeComponent === "update" && <ProjectUpdate />}
        </main>
      </div>
    </div>
  )
}

