import React, { useState } from "react";
import profilePic from "/Users/mollenmist/Desktop/Navneet-_kushPortfolio/Client/src/assets/public/Favicon.png"; // ✅ Corrected Image Path
import SkillsChart from "../skillchart/SkillsChart"; // ✅ Import Skill Chart Component

const AboutSection = () => {
    const [isProfileClicked, setIsProfileClicked] = useState(false);

    const handleProfileClick = () => {
        setIsProfileClicked(true);
        setTimeout(() => setIsProfileClicked(false), 300);
    };

    return (
        <section className="bg-gradient-to-br from-[#13547a] to-[#80d0c7] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

                    <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8">
                        {/* Profile Section */}
                        <div className="flex flex-col md:flex-row items-center mb-6">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className={`w-32 h-32 rounded-full border-4 border-white/30 cursor-pointer transition-transform duration-300 shadow-lg 
                                    ${isProfileClicked ? "scale-95" : "hover:scale-105 hover:shadow-xl"}`}
                                onClick={handleProfileClick}
                            />
                            <div className="text-center md:text-left md:ml-6">
                                <h3 className="text-2xl font-semibold">Navneet Kushwaha</h3>
                                <p className="text-blue-100">Full Stack Developer</p>
                            </div>
                        </div>

                        {/* Flexbox Layout: About Text (Left) + Skill Chart (Right) */}
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            {/* About Text (Left Side) */}
                            <div className="md:w-1/2 pr-6">
                                <p className="text-white/80 leading-relaxed">
                                    Hi, I'm Navneet Kushwaha, a B.Tech student with a passion for technology and a drive to continuously improve my skills.
                                    As a tech enthusiast, I'm fascinated by the power of the MERN STACK to create engaging and dynamic web experiences.
                                    <br /><br />
                                    With a strong foundation in MERN STACK, I'm committed to staying up-to-date with the latest trends and best practices in 
                                    web development and backend development. I'm always looking for opportunities to learn and grow, whether through online 
                                    courses, tutorials, or hands-on projects.
                                    <br /><br />
                                    As a motivated and collaborative individual, I'm excited to connect with like-minded professionals and explore potential 
                                    career opportunities in the tech industry. Let's connect and create innovative solutions!
                                </p>
                            </div>

                            {/* Skills Chart (Right Side) */}
                            <div className="md:w-1/2 flex justify-center">
                                <div className="p-6 rounded-lg w-full max-w-md">
                                    <h4 className="text-xl font-semibold text-center mb-4">Skill Chart</h4>
                                    <SkillsChart />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
