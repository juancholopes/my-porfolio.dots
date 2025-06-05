import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      titleKey: "projects.vetCareFrontend.title",
      descriptionKey: "projects.vetCareFrontend.description",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
      ],
      github: "https://github.com/juanchopi37/vet-care-frontend",
      demo: "#",
      image: "./public/projects/vet-pet-frontend.png",
    },
    {
      titleKey: "projects.vetCareBackend.title",
      descriptionKey: "projects.vetCareBackend.description",
      technologies: ["Node.js", "Express.js", "MySQL", "Sequelize", "JWT"],
      github: "https://github.com/juanchopi37/vet-care-backend",
      demo: "#",
      image: "./public/projects/vet-pet-backend.png",
    },
    {
      titleKey: "projects.portfolio.title",
      descriptionKey: "projects.portfolio.description",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      github: "https://github.com/juanchopi37/my-porfolio.dots",
      demo: "#",
      image: "./public/projects/portafolio-personal.png",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Decorative lines */}
      <div className="absolute top-20 left-0 w-32 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
      <div className="absolute bottom-20 right-0 w-48 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-cursor="text">
            <span className="text-blue-400" data-cursor="text">{t("projects.title")}</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto" data-cursor="text">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="border border-blue-500/30 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 h-full">
                {/* Project image */}
                <div className="h-48 rounded-lg mb-6 relative overflow-hidden bg-slate-800 project-image">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 project-image"
                    onError={(e) => {
                      // Fallback to gradient placeholder if image fails to load
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.classList.add(
                        "bg-gradient-to-br",
                        "from-blue-500/20",
                        "to-blue-700/20",
                      );
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Code
                      size={24}
                      className="text-white opacity-70 drop-shadow-lg"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300" data-cursor="text">
                  {t(project.titleKey)}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed" data-cursor="text">
                  {t(project.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      data-cursor="text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    data-cursor="text"
                  >
                    <Github size={18} />
                    <span>{t("projects.code")}</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    data-cursor="text"
                  >
                    <ExternalLink size={18} />
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
