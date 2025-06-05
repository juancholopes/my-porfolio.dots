
import React from 'react';
import { Database, Globe, Users, Server, Palette, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Stack = () => {
  const { t } = useTranslation();
  
  const stackCategories = [
    {
      titleKey: "stack.frontend",
      icon: Globe,
      technologies: ["React", "TypeScript", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      titleKey: "stack.backend",
      icon: Server,
      technologies: ["Node.js", "Express.js", "Python", "C#", "REST APIs", "JWT"],
      color: "from-green-500 to-emerald-500"
    },
    {
      titleKey: "stack.database",
      icon: Database,
      technologies: ["MySQL", "PostgreSQL", "Sequelize", "Database Design", "SQL", "Data Modeling"],
      color: "from-purple-500 to-violet-500"
    },
    {
      titleKey: "stack.softSkills",
      icon: Users,
      technologies: ["Scrum", "Kanban", "Agile", "Team Leadership", "Problem Solving", "Communication"],
      color: "from-orange-500 to-red-500"
    },
    {
      titleKey: "stack.design",
      icon: Palette,
      technologies: ["Figma", "Framer", "UX/UI Design", "Responsive Design", "Accessibility", "User Experience"],
      color: "from-pink-500 to-rose-500"
    },
    {
      titleKey: "stack.tools",
      icon: Zap,
      technologies: ["Git & GitHub", "Bun", "Bash", "Clean Architecture", "Code Quality", "Automation"],
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="stack" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-6 right-8 sm:top-10 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 border border-blue-500/20 rounded-full hidden sm:block"></div>
      <div className="absolute bottom-10 left-8 sm:bottom-20 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 border border-blue-500/30 rotate-45 hidden sm:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" data-cursor="text">
            <span className="text-blue-500 dark:text-blue-400" data-cursor="text">{t('stack.title')}</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0" data-cursor="text">
            {t('stack.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stackCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeIn 0.6s ease-in-out'
              }}
            >
              <div className="border border-blue-500/30 rounded-lg p-4 sm:p-6 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-slate-200/70 dark:hover:bg-slate-900/70 transition-all duration-300 h-full hover:scale-105">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${category.color} p-2 sm:p-3 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" data-cursor="text">
                  {t(category.titleKey)}
                </h3>
                
                <div className="space-y-1.5 sm:space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex items-center space-x-2 sm:space-x-3 group/tech"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 dark:bg-blue-400 rounded-full group-hover/tech:scale-125 transition-transform duration-200 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-gray-300 group-hover/tech:text-foreground transition-colors duration-200 text-sm sm:text-base" data-cursor="text">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 border border-blue-500/50 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"></div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="border border-blue-500/30 rounded-lg p-4 sm:p-6 lg:p-8 bg-slate-100/30 dark:bg-slate-900/30 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-blue-500 dark:text-blue-400" data-cursor="text">
              {t('stack.continuousLearning')}
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed" data-cursor="text">
              {t('stack.learningDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
