import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Code2 } from "lucide-react";
import PrimaryButton from "@shared/components/ui/primary-button";
import SocialLinks from "./components/social-links";
import CopyEmailButton from "./components/copy-email-button";
import DownloadCvButton from "./components/download-cv-button";

const HeroShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="relative z-10 text-center lg:text-left max-w-full w-full">
        <div className="float-animation">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-bold mb-4 md:mb-6 leading-tight md:leading-none"
            data-cursor="text"
          >
            <span className="text-foreground" data-cursor="text">
              {t("hero.greeting")}
            </span>
            <br />
            <span
              className="text-blue-500 dark:text-blue-400 inline-block"
              data-cursor="text"
            >
              {t("hero.name")}
            </span>
          </h1>
        </div>

        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto lg:mx-0"
          data-cursor="text"
        >
          {t("hero.subtitle")}
        </p>

        <div className="flex justify-center lg:justify-start flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
          <SocialLinks />
          <CopyEmailButton />
          <DownloadCvButton />
        </div>

        {/* Botón ver mas */}
        <div className="flex justify-center lg:justify-start">
          <PrimaryButton href="#about" icon={Code2}>
            {t("hero.exploreWork")}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default HeroShowcase;
