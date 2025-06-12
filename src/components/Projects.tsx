
import React from 'react';
import { Code, Link as LinkIcon, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automating Workflows with Webhooks",
      description: "System that streamlines processes using webhooks to trigger automated actions. Includes sending emails, processing transactions, and notifying users when specific events occur.",
      technologies: ["Webhooks", "Node.js", "JavaScript", "API Integration"],
      gradient: "from-blue-500 to-purple-600",
      category: "Automation"
    },
    {
      title: "PowerShell Script Automation",
      description: "Designed automation script that can retrieve business-related data from Active Directory users and computers across various databases and servers in multiple domains.",
      technologies: ["PowerShell", "Active Directory", "Database Integration", "Multi-domain"],
      gradient: "from-green-500 to-blue-500",
      category: "Enterprise Automation"
    },
    {
      title: "Zerodha MCP Server",
      description: "Lightweight protocol server that facilitates structured communication between LLM and Zerodha's order execution system. Provides buy/sell requests for specified stocks.",
      technologies: ["Protocol Design", "API Integration", "Trading Systems", "Communication"],
      gradient: "from-purple-500 to-pink-500",
      category: "Financial Technology"
    },
    {
      title: "Collab-draw Whiteboard",
      description: "Real-time collaborative whiteboard web app using React and HTML Canvas. Features include room creation, shape drawing, freehand doodling, undo/resize, and dynamic font/color customization.",
      technologies: ["React", "HTML Canvas", "Real-time Collaboration", "WebSockets"],
      gradient: "from-orange-500 to-red-500",
      category: "Web Application"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Key Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing innovative solutions and technical achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <div className="bg-muted p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <Code size={16} />
                      </div>
                      <div className="bg-muted p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <LinkIcon size={16} />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors duration-200">
                    <span className="mr-2">View Project</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
