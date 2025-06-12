
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
            Software Engineer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            3 Years of Experience in Full-Stack Development
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
              <span className="text-sm font-medium">2 Years @ TCS</span>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
              <span className="text-sm font-medium">1 Year @ Marvell Semiconductor</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Learn More About Me
            </button>
            <a
              href="#contact"
              className="border border-border bg-card/50 backdrop-blur-sm text-foreground px-8 py-3 rounded-full font-medium hover:bg-accent transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-muted-foreground hover:text-foreground transition-colors" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
