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
                                src="https://images.app.goo.gl/7Z6UE36WUMj7pwPeA"
                                alt="Profile"
                                className={`w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6 border-4 border-white/30 cursor-pointer transition-transform duration-300 ${
                                    isProfileClicked ? "scale-95" : "hover:scale-105"
                                }`}
                                onClick={handleProfileClick}
                            />
                            <div>
                                <h3 className="text-2xl font-semibold">John Doe</h3>
                                <p className="text-blue-100">Full Stack Developer</p>
                            </div>
                        </div>

                        <p className="text-blue-50 mb-6">
                            I'm a passionate full stack developer with over 5 years of experience in creating robust and scalable web
                            applications. My expertise lies in React, Node.js, and cloud technologies. I love solving complex problems
                            and continuously learning new technologies to stay at the forefront of web development.
                        </p>

                        <div className="mb-8">
                            <h4 className="text-xl font-semibold mb-4">Key Skills</h4>
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL"].map((skill) => (
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
