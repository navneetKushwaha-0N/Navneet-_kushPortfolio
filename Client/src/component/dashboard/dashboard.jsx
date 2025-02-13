import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiDownload } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./animation.css";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState("https://via.placeholder.com/40");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5001/admin/panel", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => setIsLoggedIn(true))
        .catch(() => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        });
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAuth = async () => {
    try {
      setLoading(true);
      const email = document.querySelector("[name='email']").value;
      const password = document.querySelector("[name='password']").value;

      const { data } = await axios.post("http://localhost:5001/admin/login", { email, password });

      localStorage.setItem("token", data.token);
      setUserProfile(data.profilePic || "https://via.placeholder.com/40");
      setIsLoggedIn(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error("❌ Authentication failed:", error.response?.data);
      alert(error.response?.data?.message || "❌ Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserProfile("https://via.placeholder.com/40");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13547a] to-[#80d0c7] text-white flex flex-col font-['Roboto']">
      <nav className="bg-white bg-opacity-10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold">नवneet</span>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">
                Logout
              </button>
            ) : (
              <button onClick={toggleModal} className="px-4 py-2 bg-white text-[#13547a] rounded-md hover:bg-[#80d0c7] hover:text-white">
                Admin Login
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-light mb-4">Navneet Kushwaha</h1>
          <p className="text-xl">Web Developer</p>
          <div className="flex justify-center space-x-6 my-8">
            <a href="https://www.linkedin.com/in/navneet--kushwaha/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#80d0c7] transition duration-200 transform hover:scale-110">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/mollenmi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#80d0c7] transition duration-200 transform hover:scale-110">
              <FaGithub size={32} />
            </a>
            <a href="https://www.instagram.com/mollen_0_mist/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#80d0c7] transition duration-200 transform hover:scale-110">
              <FaInstagram size={32} />
            </a>
          </div>
          <a href="/resume.pdf" download className="inline-flex items-center px-6 py-3 text-lg border border-transparent font-medium rounded-md text-[#13547a] bg-white hover:bg-[#80d0c7] hover:text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
            <FiDownload className="mr-2" /> Download Resume
          </a>
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
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
