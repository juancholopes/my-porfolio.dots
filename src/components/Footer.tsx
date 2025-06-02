
import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-16 relative border-t border-blue-500/20">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 size={24} className="text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Portfolio</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating innovative digital solutions with passion and precision. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Github size={20} className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="#" 
                className="p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Linkedin size={20} className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="#" 
                className="p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Mail size={20} className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                About Me
              </a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#stack" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Tech Stack
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">hello@developer.com</span>
              </div>
              <div className="text-gray-300">
                Available for freelance work and collaboration opportunities.
              </div>
            </div>
            
            {/* Call to action */}
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg group"
              >
                <Mail className="mr-2 group-hover:scale-110 transition-transform duration-200" size={18} />
                Let's Work Together
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Portfolio. Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and lots of coffee.</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Built with React & TypeScript</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Styled with Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-8 h-8 border border-blue-500/30 rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-6 h-6 bg-blue-500/20 rotate-12"></div>
    </footer>
  );
};

export default Footer;
