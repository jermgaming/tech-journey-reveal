
import React from 'react';
import { User, Code, Briefcase } from 'lucide-react';

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
              Passionate software engineer with expertise in full-stack development, 
              building scalable solutions and driving innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <User className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Professional Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Started my career at TCS, where I spent 2 years honing my skills in 
                  software development and working on enterprise-level applications. 
                  Currently contributing at Marvell Semiconductor, focusing on innovative 
                  semiconductor solutions.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                    <Code className="text-blue-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Technical Expertise</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Proficient in modern web technologies, cloud platforms, and software 
                  architecture. Experienced in both front-end and back-end development 
                  with a strong focus on clean, maintainable code.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
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
                    Successfully delivered multiple enterprise-level projects at TCS
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Contributing to cutting-edge semiconductor technology at Marvell
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Expertise in full-stack development and modern frameworks
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Strong problem-solving skills and collaborative team player
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
