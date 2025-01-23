import React, { useState } from "react"

const AboutSection = () => {
    const [isProfileClicked, setIsProfileClicked] = useState(false)

    const handleProfileClick = () => {
        setIsProfileClicked(true)
        setTimeout(() => setIsProfileClicked(false), 300)
    }

    return (
        <section className="bg-gradient-to-br from-[#13547a] to-[#80d0c7] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>

                    <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8">
                        <div className="flex flex-col md:flex-row items-center mb-6">
                            <img
                                src= "Frontend_Part/src/assets/Favicon.png"
                                alt="Profile"
                                className={`w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6 border-4 border-white/30 cursor-pointer transition-transform duration-300 ${
                                    isProfileClicked ? "scale-95" : "hover:scale-105"
                                }`}
                                onClick={handleProfileClick}
                            />
                            <div>
                                <h3 className="text-2xl font-semibold">Navneet kushwaha</h3>
                                <p className="text-blue-100">Full Stack Developer</p>
                            </div>
                        </div>

                        <p className="text-blue-50 mb-6">
                           Hi, I'm Navneet Kushwaha, a B.Tech student with a passion for technology and a drive to continuously improve my skills. As a tech enthusiast, I'm fascinated by the power of MERN STACK to create engaging and dynamic web experiences.

With a strong foundation in MERN STACK, I'm committed to staying up-to-date with the latest trends and best practices in web development as well as backend development. I'm always looking for opportunities to learn and grow, whether through online courses, tutorials, or hands-on projects.

As a motivated and collaborative individual, I'm excited to connect with like-minded professionals and explore potential career opportunities in the tech industry. Let's connect and see how we can work together to create innovative solutions!



                        </p>

                        <div className="mb-8">
                            <h4 className="text-xl font-semibold mb-4">Key Skills</h4>
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {["React", "Node.js", "TypeScript","Azure", "Docker", "MongoDB"].map((skill) => (
                                    <li
                                        key={skill}
                                        className="bg-white/20 text-white py-2 px-4 rounded-full text-sm inline-block transition-all duration-300 ease-in-out hover:bg-white/30 hover:shadow-lg hover:-translate-y-1 cursor-default"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
