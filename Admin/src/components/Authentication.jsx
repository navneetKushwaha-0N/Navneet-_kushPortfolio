"use client"

import { useState } from "react"
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserPlus, FaUserMinus } from "react-icons/fa"

export function Authentication() {
  const [showPassword, setShowPassword] = useState(false)
  const [adminProfile, setAdminProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "https://example.com/profile.jpg",
  })
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  })
  const [admins, setAdmins] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Super Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  ])

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    // Here you would typically send the updated profile to your backend
    console.log("Updated profile:", adminProfile)
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    // Here you would typically send the new password to your backend
    console.log("Password change:", password)
    // Reset password fields
    setPassword({ current: "", new: "", confirm: "" })
  }

  const handleAddAdmin = () => {
    // Here you would typically send an invitation to a new admin
    console.log("Invite new admin")
  }

  const handleRemoveAdmin = (id) => {
    // Here you would typically send a request to remove the admin
    setAdmins(admins.filter((admin) => admin.id !== id))
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
        <div className="flex items-center mb-4">
          <img
            src={adminProfile.profilePicture || "/placeholder.svg"}
            alt="Admin"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">{adminProfile.name}</p>
            <p className="text-gray-600">{adminProfile.email}</p>
          </div>
        </div>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="name"
                type="text"
                value={adminProfile.name}
                onChange={(e) => setAdminProfile({ ...adminProfile, name: e.target.value })}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                value={adminProfile.email}
                onChange={(e) => setAdminProfile({ ...adminProfile, email: e.target.value })}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Update Profile
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block mb-1">
              Current Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="currentPassword"
                type={showPassword ? "text" : "password"}
                value={password.current}
                onChange={(e) => setPassword({ ...password, current: e.target.value })}
                className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="newPassword" className="block mb-1">
              New Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="newPassword"
                type={showPassword ? "text" : "password"}
                value={password.new}
                onChange={(e) => setPassword({ ...password, new: e.target.value })}
                className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={password.confirm}
                onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Change Password
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Multi-Admin Access</h2>
        <button
          onClick={handleAddAdmin}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-4"
        >
          <FaUserPlus className="inline-block mr-2" /> Invite New Admin
        </button>
        <div className="space-y-4">
          {admins.map((admin) => (
            <div key={admin.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
              <div>
                <p className="font-semibold">{admin.name}</p>
                <p className="text-gray-600">{admin.email}</p>
                <p className="text-sm text-gray-500">{admin.role}</p>
              </div>
              <button onClick={() => handleRemoveAdmin(admin.id)} className="text-red-500 hover:text-red-600">
                <FaUserMinus />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

