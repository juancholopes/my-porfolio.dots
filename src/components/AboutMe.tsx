import React from "react";
import { User, Target, Zap } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500/30 rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-blue-500/30 rotate-12"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a full-stack developer with a passion for creating efficient,
              scalable, and user-friendly applications. With expertise in modern
              web technologies, I enjoy turning complex problems into simple,
              beautiful designs.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              My journey in programming started with curiosity and has evolved
              into a career dedicated to continuous learning and innovation. I
              believe in writing clean, maintainable code and creating
              exceptional user experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <User size={20} className="text-blue-400" />
                </div>
                <span className="text-gray-300">Agile Methodologies</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Target size={20} className="text-blue-400" />
                </div>
                <span className="text-gray-300">
                  Clean Code and Clean Architecture
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Zap size={20} className="text-blue-400" />
                </div>
                <span className="text-gray-300">
                  Always learning new technologies
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 border border-blue-500/30 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="space-y-3">
                  <div className="h-4 bg-blue-500/30 rounded"></div>
                  <div className="h-8 bg-blue-500/20 rounded"></div>
                  <div className="h-6 bg-blue-500/40 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-6 bg-blue-500/40 rounded"></div>
                  <div className="h-4 bg-blue-500/30 rounded"></div>
                  <div className="h-10 bg-blue-500/20 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-8 bg-blue-500/20 rounded"></div>
                  <div className="h-6 bg-blue-500/40 rounded"></div>
                  <div className="h-4 bg-blue-500/30 rounded"></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border border-blue-500/50 rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/30 rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
