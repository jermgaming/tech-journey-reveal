
import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Python", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "REST APIs", level: 85 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 65 },
        { name: "Git", level: 85 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Specialized Skills",
      skills: [
        { name: "C++", level: 75 },
        { name: "Embedded Systems", level: 70 },
        { name: "System Design", level: 75 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Problem Solving", level: 90 }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive skill set across the full development stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-full mr-4`}>
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
