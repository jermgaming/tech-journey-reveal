
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Marvell Semiconductor",
      position: "Software/Firmware Intern",
      duration: "July 2024 - June 2025",
      period: "11 Months",
      description: "Part of the firmware development team (PTP) under Automotive BU. Proficient in ASPICE concepts with hands-on experience at Level -2, ensuring understanding and implementation of automotive standards.",
      technologies: ["C", "Embedded C", "C++", "ASPICE", "Firmware Development", "Automotive"],
      color: "from-purple-500 to-purple-600"
    },
    {
      company: "Tata Consultancy Services (TCS)",
      position: "Systems Engineer",
      duration: "Aug 2021 - Jul 2023",
      period: "2 Years",
      description: "Part of the Global Risk and Compliance team. Role involved performing compliance assessments (SOX compliance and Critical Application audit) of Sherwin-Williams infrastructure (operating systems and databases) supporting business-critical applications.",
      technologies: ["SOX Compliance", "Risk Assessment", "Database Management", "Infrastructure Audit", "Business Applications"],
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              3+ years of hands-on experience in software development and compliance
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 bg-gradient-to-br ${exp.color} rounded-full border-4 border-background shadow-lg z-10`}></div>
                  
                  <div className="ml-16 w-full">
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
                          <p className="text-lg font-medium text-primary">{exp.position}</p>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-2 sm:mt-0">
                          <Calendar size={16} className="mr-2" />
                          <span className="font-medium">{exp.duration}</span>
                          <span className="ml-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
