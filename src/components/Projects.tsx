import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import { useTranslation } from "react-i18next";
import projectsData from "../data/projects.json";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Decorative lines */}
      <div className="absolute top-20 left-0 w-16 sm:w-32 h-0.5 bg-gradient-to-r from-blue-500 to-transparent hidden sm:block"></div>
      <div className="absolute bottom-20 right-0 w-24 sm:w-48 h-0.5 bg-gradient-to-l from-blue-500 to-transparent hidden sm:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
            data-cursor="text"
          >
            <span
              className="text-blue-500 dark:text-blue-400"
              data-cursor="text"
            >
              {t("projects.title")}
            </span>
          </h2>
          <p
            className="text-slate-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0"
            data-cursor="text"
          >
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="group relative">
              <div className="border border-blue-500/30 rounded-lg p-4 sm:p-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 h-full">
                {/* Imagen del proyecto */}
                <div className="aspect-video w-full rounded-lg mb-4 sm:mb-6 relative overflow-hidden bg-muted project-image">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 project-image"
                    onError={(e) => {
                      // Imagen de respaldo en caso de error de carga
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.classList.add(
                        "bg-gradient-to-br",
                        "from-blue-500/20",
                        "to-blue-700/20",
                      );
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                    <Code
                      size={20}
                      className="text-white opacity-70 drop-shadow-lg sm:w-6 sm:h-6"
                    />
                  </div>
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
                  data-cursor="text"
                >
                  {t(project.titleKey)}
                </h3>

                <p
                  className="text-slate-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base"
                  data-cursor="text"
                >
                  {t(project.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs sm:text-sm border border-blue-500/30"
                      data-cursor="text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                    data-cursor="text"
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>{t("projects.code")}</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                    data-cursor="text"
                  >
                    <ExternalLink
                      size={16}
                      className="sm:w-[18px] sm:h-[18px]"
                    />
                    <span>{t("projects.demo")}</span>
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
