import React from "react";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Animated lines */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-20 left-4 sm:left-10 w-16 sm:w-32 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
        <div className="absolute top-40 right-8 sm:right-20 w-24 sm:w-48 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
        <div className="absolute bottom-40 left-8 sm:left-20 w-32 sm:w-64 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-20 sm:w-40 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>

        {/* Vertical lines */}
        <div className="absolute left-16 sm:left-32 top-20 w-0.5 h-12 sm:h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
        <div className="absolute right-16 sm:right-32 bottom-20 w-0.5 h-16 sm:h-32 bg-gradient-to-t from-blue-500 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="float-animation">
<<<<<<< HEAD
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">{t('hero.greeting')}</span>
=======
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6" data-cursor="text">
            <span className="text-foreground" data-cursor="text">{t('hero.greeting')}</span>
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
            <br />
            <span className="text-blue-500 dark:text-blue-400 inline-block" data-cursor="text">{t('hero.name')}</span>
          </h1>
        </div>

<<<<<<< HEAD
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
=======
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0" data-cursor="text">
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
          {t('hero.subtitle')}
        </p>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
          <a
            href="https://github.com/juanchopi37"
            className="p-2 sm:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 zed-glow"
            data-cursor="text"
          >
            <Github size={20} className="text-blue-500 dark:text-blue-400 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-carlos-lopez-moreno-9a29b0299/"
            className="p-2 sm:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 zed-glow"
            data-cursor="text"
          >
            <Linkedin size={20} className="text-blue-500 dark:text-blue-400 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:juancarloslopezmoreno@proton.me"
            className="p-2 sm:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 zed-glow"
            data-cursor="text"
          >
            <Mail size={20} className="text-blue-500 dark:text-blue-400 sm:w-6 sm:h-6" />
          </a>
        </div>

        <a
          href="#about"
<<<<<<< HEAD
          className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-primary-foreground transition-all duration-300 rounded-lg zed-glow"
=======
          className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg zed-glow text-sm sm:text-base"
          data-cursor="text"
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
        >
          <Code2 className="mr-2" size={16} />
          <span className="sm:inline">{t('hero.exploreWork')}</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
