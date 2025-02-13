import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, ResponsiveContainer } from "recharts";

const skillsData = [
  { skill: "React", level: 90 },
  { skill: "JavaScript", level: 85 },
  { skill: "Node.js", level: 80 },
  { skill: "MongoDB", level: 75 },
  { skill: "CSS", level: 80 },
  { skill: "Express.js", level: 70 }
];

const SkillsChart = () => {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
          <PolarGrid stroke="rgba(255, 255, 255, 0.2)" />
          <PolarAngleAxis dataKey="skill" tick={{ fill: "white", fontSize: 14 }} />
          <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)", border: "none", color: "white" }} />
          <Radar name="Skill Level" dataKey="level" stroke="#00c7ff" fill="#00c7ff" fillOpacity={0.3} isAnimationActive={true} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
