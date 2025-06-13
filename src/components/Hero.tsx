import React, { useState } from "react";
import { Code2, Github, Linkedin, Mail, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    const email = "juancarloslopezmoreno@proton.me";
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      textArea.setAttribute("readonly", "");
      textArea.setAttribute("tabindex", "-1");
      textArea.setAttribute("aria-hidden", "true");

      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(textArea);

      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

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
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
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
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0"
          data-cursor="text"
        >
          {t("hero.subtitle")}
        </p>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
          <a
            href="https://github.com/juanchopi37"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 zed-glow"
            data-cursor="text"
          >
            <Github
              size={20}
              className="text-blue-500 dark:text-blue-400 sm:w-6 sm:h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-carlos-lopez-moreno-9a29b0299/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 zed-glow"
            data-cursor="text"
          >
            <Linkedin
              size={20}
              className="text-blue-500 dark:text-blue-400 sm:w-6 sm:h-6"
            />
          </a>
          <button
            onClick={copyEmail}
            className="p-2 sm:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 zed-glow relative"
            data-cursor="text"
            title={emailCopied ? t("common.copied") : t("common.copyEmail")}
          >
            {emailCopied ? (
              <Check
                size={20}
                className="text-green-400 sm:w-6 sm:h-6 animate-pulse"
              />
            ) : (
              <Mail
                size={20}
                className="text-blue-500 dark:text-blue-400 sm:w-6 sm:h-6"
              />
            )}

            {/* Tooltip de confirmación */}
            {emailCopied && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-900/95 backdrop-blur-sm text-white text-sm rounded-lg border border-blue-500/30 whitespace-nowrap z-20 animate-fade-in">
                <span className="flex items-center space-x-1">
                  <Check size={14} className="text-green-400" />
                  <span className="text-green-400">{t("common.copied")}</span>
                </span>
                {/* Flecha del tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95"></div>
                </div>
              </div>
            )}
          </button>
        </div>

        <a
          href="#about"
          className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg zed-glow text-sm sm:text-base"
          data-cursor="text"
        >
          <Code2 className="mr-2" size={16} />
          <span className="sm:inline">{t("hero.exploreWork")}</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
