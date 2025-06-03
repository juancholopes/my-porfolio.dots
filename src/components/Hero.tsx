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
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
        <div className="absolute top-40 right-20 w-48 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
        <div className="absolute bottom-40 left-20 w-64 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-40 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>

        {/* Vertical lines */}
        <div className="absolute left-32 top-20 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
        <div className="absolute right-32 bottom-20 w-0.5 h-32 bg-gradient-to-t from-blue-500 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="float-animation">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">{t('hero.greeting')}</span>
            <br />
            <span className="text-blue-400 inline-block">{t('hero.name')}</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/juanchopi37"
            className="p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 zed-glow"
          >
            <Github size={24} className="text-blue-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-carlos-lopez-moreno-9a29b0299/"
            className="p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 zed-glow"
          >
            <Linkedin size={24} className="text-blue-400" />
          </a>
          <a
            href="mailto:juancarloslopezmoreno@proton.me"
            className="p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 zed-glow"
          >
            <Mail size={24} className="text-blue-400" />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg zed-glow"
        >
          <Code2 className="mr-2" size={20} />
          {t('hero.exploreWork')}
        </a>
      </div>
    </section>
  );
};

export default Hero;
