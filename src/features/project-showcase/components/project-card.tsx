import { Github, ExternalLink, Code } from "lucide-react";
import { useTranslation } from "react-i18next";
import LazyImage from "@shared/components/lazy-image";
import PrimaryButton from "@shared/components/ui/primary-button";

interface ProjectCardProps {
  project: {
    image: string;
    titleKey: string;
    descriptionKey: string;
    technologies: string[];
    github: string;
    demo: string | null;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="group relative">
      <div className="border border-blue-500/30 rounded-lg p-4 sm:p-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 h-full flex flex-col">
        {/* Imagen del proyecto */}
        <div className="aspect-video w-full rounded-lg mb-4 sm:mb-6 relative overflow-hidden bg-muted project-image">
          <div className="relative w-full h-full">
            <div className="w-full h-full">
              <LazyImage
                src={project.image}
                alt={t(project.titleKey)}
                className="w-full h-full object-cover transition-transform duration-300 project-image peer"
                priority={index < 2}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.classList.add(
                    "bg-gradient-to-br",
                    "from-blue-500/20",
                    "to-blue-700/20",
                  );
                }}
              />
              <div className="img-gradient-overlay"></div>
            </div>
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
              <Code
                size={20}
                className="text-white opacity-70 drop-shadow-lg sm:w-6 sm:h-6"
              />
            </div>
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

        {/* Project and demo link sections */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-auto">
          <PrimaryButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
            data-cursor="text"
            icon={Github}
          >
            {t("projects.code")}
          </PrimaryButton>
          {project.demo !== null && (
            <PrimaryButton
              href={project.demo}
              target="_blank"
              icon={ExternalLink}
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
              data-cursor="text"
            >
              
              {t("projects.demo")}
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
