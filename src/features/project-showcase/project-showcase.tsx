import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import projectsData from "@/data/projects.json";
import ProjectCard from "./components/project-card";
import PrimaryButton from "@shared/components/ui/primary-button";

const INITIAL_PROJECTS = 2;
const LOAD_MORE_COUNT = 2;

const ProjectShowcase = () => {
  const { t } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + LOAD_MORE_COUNT, projectsData.length));
  };

  const hasMoreProjects = visibleProjects < projectsData.length;

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

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
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Botón "show more" */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <PrimaryButton onClick={showMoreProjects} icon={ChevronDown}>
              {t("projects.showMore")}
            </PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
