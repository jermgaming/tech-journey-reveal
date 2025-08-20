
import React from 'react';
import { User, Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Highly motivated, disciplined, and hardworking software engineer seeking opportunities 
              for skill and knowledge development while contributing to organizational goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center ">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Educational Background</h3>
                </div>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p><strong>M.Tech in CSE</strong> - NIT Jaipur (2025) - 8.00 CGPA</p>
                  <p><strong>B.Tech in Information Technology</strong> - Bhilai Institute of Technology (2021) - 8.47 CGPA</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                    <Code className="text-blue-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Technical Expertise</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Proficient in modern programming languages, frameworks, and tools. 
                  Experienced in both firmware development and enterprise-level applications 
                  with a strong focus on SOX compliance and critical systems.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <Briefcase className="text-purple-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Key Achievements</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Part of firmware development team at Marvell Semiconductor focusing on Automotive BU
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Led Global Risk and Compliance team at TCS with SOX compliance expertise
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Semi-finalist in e-Yantra Robotics competition (IIT Bombay) 2019
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Solved 300+ DSA problems on various coding platforms
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Team Leader experience with algorithm development and PCB design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
