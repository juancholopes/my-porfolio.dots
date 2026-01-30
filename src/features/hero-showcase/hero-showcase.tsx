import { useTranslation } from "react-i18next";
import SocialLinkedinButton from "./components/social-linkedin-buttom";
import SocialGithubButton from "./components/social-github-buttom";
import CopyEmailButton from "./components/copy-email-button";
import DownloadCvButton from "./components/download-cv-button";
import Shuffle from "../../shared/components/shuffle";

const HeroShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="relative z-10 text-left max-w-full w-full">
        <div >
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-bold mb-4 md:mb-6 leading-tight md:leading-none"
          >
            <Shuffle
              tag="span"
              text={t("hero.greeting")}
              className="notable-regular normal-case text-foreground text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] leading-tight md:leading-none"
            />
            <br />
            <Shuffle
              tag="span"
              text={t("hero.name")}
              className="notable-regular inline-block normal-case text-blue-500 dark:text-blue-400 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] leading-tight md:leading-none"
            />
          </h1>
        </div>

        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto lg:mx-0"
          data-cursor="text"
        >
          {t("hero.subtitle")}
        </p>

        <div className="flex justify-center lg:justify-start flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
          <SocialLinkedinButton />
          <SocialGithubButton />
          <CopyEmailButton />
          <DownloadCvButton />
        </div>
      </div>
    </section>
  );
};

export default HeroShowcase;
