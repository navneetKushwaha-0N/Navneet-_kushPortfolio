import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiDownload } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./animation.css";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState("https://via.placeholder.com/40");
  const [profilePic, setProfilePic] = useState(null);

  const toggleModal = (signUp = false) => {
    setIsSignUp(signUp);
    setIsModalOpen(!isModalOpen);
  };

  const handleSignup = async () => {
    const response = await fetch("http://localhost:5001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        profilePic,
      }),
    });
  
    const data = await response.json();
  
    if (response.status === 400) {
      alert(data.message); // Show alert if email is already in use
    } else if (response.status === 201) {
      alert("Signup successful! Please log in.");
    } else {
      alert("Something went wrong, try again.");
    }
  };
  

  const handleAuth = async () => {
    try {
      const email = document.querySelector("[name='email']").value;
      const password = document.querySelector("[name='password']").value;

      if (isSignUp) {
        const username = document.querySelector("[name='username']").value;
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        if (profilePic) formData.append("profilePic", profilePic);

        const { data } = await axios.post("http://localhost:5001/signup", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        localStorage.setItem("token", data.token);
        setUserProfile(data.profilePic);
      } else {
        const { data } = await axios.post("http://localhost:5001/login", { email, password });

        localStorage.setItem("token", data.token);
        setUserProfile(data.profilePic);
      }

      setIsLoggedIn(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Authentication failed:", error.response?.data);
      alert(error.response?.data?.message || "Authentication failed");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const { data } = await axios.get("http://localhost:5001/user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserProfile(data.profilePic);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Auto-login failed", error);
        localStorage.removeItem("token");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserProfile("https://via.placeholder.com/40");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13547a] to-[#80d0c7] text-white flex flex-col font-['Roboto']">
      {/* Navigation */}
      <nav className="bg-white bg-opacity-10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold">नवneet</span>
            <div className="space-x-4">
              {!isLoggedIn ? (
                <>
                  <button onClick={() => toggleModal(false)} className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">Login</button>
                  <button onClick={() => toggleModal(true)} className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600">Sign Up</button>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <img src={userProfile} alt="Profile" className="w-10 h-10 rounded-full" />
                  <button onClick={handleLogout} className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600">Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
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

      {/* Auth Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">{isSignUp ? "Sign Up" : "Login"}</h2>
            <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-3 border rounded-md" />
            <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-3 border rounded-md" />
            {isSignUp && (
              <>
                <input type="text" name="username" placeholder="Username" className="w-full p-2 mb-3 border rounded-md" />
                <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} className="w-full p-2 mb-3 border rounded-md" />
              </>
            )}
            <button onClick={handleAuth} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">{isSignUp ? "Sign Up" : "Login"}</button>
            <button onClick={() => setIsModalOpen(false)} className="w-full mt-2 bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
