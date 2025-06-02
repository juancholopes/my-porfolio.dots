
import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "project1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "project2"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides real-time weather data, forecasts, and interactive maps using multiple APIs.",
      technologies: ["React", "TypeScript", "API Integration", "Chart.js"],
      github: "#",
      demo: "#",
      image: "project3"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization, reporting, and automated insights generation.",
      technologies: ["Next.js", "Python", "D3.js", "Redis"],
      github: "#",
      demo: "#",
      image: "project4"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Decorative lines */}
      <div className="absolute top-20 left-0 w-32 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
      <div className="absolute bottom-20 right-0 w-48 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in various technologies and frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="border border-blue-500/30 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 h-full">
                {/* Project visual representation */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-lg mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`bg-blue-500/${20 + (i % 3) * 10} rounded h-4`}
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animation: 'fadeIn 0.5s ease-in-out'
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Code size={24} className="text-blue-400 opacity-50" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
