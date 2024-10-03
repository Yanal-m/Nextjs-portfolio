'use client';

import { useState, useEffect } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-black">{skill}</span>
        <span className="text-sm font-medium text-black">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-[#ff8615] h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function Skills() {
  const skills = [
    { skill: "HTML", percentage: 90 },
    { skill: "CSS", percentage: 85 },
    { skill: "JavaScript", percentage: 80 },
    { skill: "React", percentage: 75 },
    { skill: "Node.js", percentage: 70 },
    { skill: "Python", percentage: 65 },
  ];

  return (
    <section id="skills" className="min-h-screen bg-white py-20 px-[8%]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">My <span className="text-[#ff8615]">Skills</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
