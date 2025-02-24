import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiDownload } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./animation.css";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem("token");
    if (!token) return setIsLoggedIn(false);

    try {
      await axios.get("http://localhost:5001/admin/panel", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsLoggedIn(true);
      navigate("/admin-dashboard");
    } catch {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    }
  };

  const handleAuth = async () => {
    try {
      setLoading(true);
      const email = document.querySelector("[name='email']").value.trim();
      const password = document.querySelector("[name='password']").value.trim();

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      const { data } = await axios.post("http://localhost:5001/admin/login", { email, password });

      if (data?.token) {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        setIsModalOpen(false);
        navigate("/admin-dashboard");
      } else {
        alert("Invalid response from server. Please try again.");
      }
    } catch (error) {
      console.error("❌ Authentication failed:", error.response?.data);
      alert(error.response?.data?.message || "Authentication failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13547a] to-[#80d0c7] text-white flex flex-col font-['Roboto']">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between h-16 items-center">
            <span className="text-3xl font-bold tracking-wide text-white">नवneet</span>
            {isLoggedIn ? (
              <button 
                onClick={handleLogout} 
                className="px-5 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-200"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2 bg-white text-[#13547a] font-medium rounded-lg hover:bg-[#80d0c7] hover:text-white transition-all duration-200"
              >
                Admin Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <h1 className="text-6xl font-light mb-4">Navneet Kushwaha</h1>
          <p className="text-xl">Web Developer</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 my-8">
            <a href="#" className="text-white hover:text-[#80d0c7] transition duration-200 transform hover:scale-110">
              <FaLinkedin size={32} />
            </a>
            <a href="#" className="text-white hover:text-[#80d0c7] transition duration-200 transform hover:scale-110">
              <FaGithub size={32} />
            </a>
            <a href="#" className="text-white hover:text-[#80d0c7] transition duration-200 transform hover:scale-110">
              <FaInstagram size={32} />
            </a>
          </div>

          {/* Resume Button */}
          <a href="/resume.pdf" download className="inline-flex items-center px-6 py-3 text-lg border border-transparent font-medium rounded-md text-[#13547a] bg-white hover:bg-[#80d0c7] hover:text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
            <FiDownload className="mr-2" /> Download Resume
          </a>
        </div>
      </main>

      {/* Admin Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>
            <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-3 border rounded-md" />
            <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-3 border rounded-md" />
            <button onClick={handleAuth} className="w-full bg-[#13547a] text-white py-2 rounded-md hover:bg-[#80d0c7]">
              {loading ? "Logging in..." : "Login"}
            </button>
            <button onClick={() => setIsModalOpen(false)} className="w-full mt-2 bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
