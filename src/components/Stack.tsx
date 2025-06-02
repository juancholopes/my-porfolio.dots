
import React from 'react';
import { Database, Globe, Smartphone, Server, Palette, Zap } from 'lucide-react';

const Stack = () => {
  const stackCategories = [
    {
      title: "Frontend",
      icon: Globe,
      technologies: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: Server,
      technologies: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: Database,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "iOS", "Android", "Expo", "Cordova"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Design",
      icon: Palette,
      technologies: ["Figma", "Adobe XD", "Photoshop", "Sketch", "Blender", "After Effects"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Tools",
      icon: Zap,
      technologies: ["Git", "Docker", "AWS", "Vercel", "Webpack", "Vite"],
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="stack" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-24 h-24 border border-blue-500/20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border border-blue-500/30 rotate-45"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-blue-400">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life. Always learning and adapting to new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stackCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeIn 0.6s ease-in-out'
              }}
            >
              <div className="border border-blue-500/30 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 h-full hover:scale-105">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex items-center space-x-3 group/tech"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover/tech:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-300 group-hover/tech:text-white transition-colors duration-200">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border border-blue-500/50 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="border border-blue-500/30 rounded-lg p-8 bg-slate-900/30 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Continuous Learning
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              The tech world evolves rapidly, and I'm committed to staying updated with the latest trends, 
              best practices, and emerging technologies. I regularly explore new frameworks, attend tech conferences, 
              and contribute to open-source projects to enhance my skills and give back to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
