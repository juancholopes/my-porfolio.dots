import { useTranslation } from "react-i18next";
import BlurText from "@shared/components/blur-text.tsx";
import StackGallery from "./components/stack-gallery";

const TechStackDisplay = () => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
            data-cursor="text"
          >
            <BlurText
              text={t("stack.title")}
              delay={50}
              animateBy="letters"
              direction="bottom"
              align="center"
              className="text-blue-500 dark:text-blue-400"
            />
          </h2>
          <p
            className="text-slate-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0"
            data-cursor="text"
          >
            {t("stack.subtitle")}
          </p>
        </div>

        <StackGallery />
      </div>
    </section>
  );
};

export default TechStackDisplay;
