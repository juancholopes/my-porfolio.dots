import React from "react";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import CopyEmailButton from "./CopyEmailButton";
import ContactButton from "./ContactButton";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="py-8 sm:py-12 lg:py-16 relative border-t border-blue-500/20"
    >
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="space-y-3 sm:space-y-4 flex-1 max-w-md">
            <div className="flex items-center space-x-2">
              <Code2
                size={20}
                className="text-blue-500 dark:text-blue-400 sm:w-6 sm:h-6"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                {t("footer.portfolio")}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {t("footer.description")}
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="p-1.5 sm:p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Github
                  size={18}
                  className="text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200 sm:w-5 sm:h-5"
                />
              </a>
              <a
                href="#"
                className="p-1.5 sm:p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Linkedin
                  size={18}
                  className="text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200 sm:w-5 sm:h-5"
                />
              </a>
              <a
                href="#"
                className="p-1.5 sm:p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Mail
                  size={18}
                  className="text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200 sm:w-5 sm:h-5"
                />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-3 sm:space-y-4 flex-shrink-0">
            <h4 className="text-lg sm:text-xl font-bold text-foreground">
              {t("footer.getInTouch")}
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start flex-col sm:flex-row sm:items-center">
                <span className="text-slate-600 dark:text-gray-300 text-sm sm:text-base break-all">
                  juancarloslopezmoreno@proton.me
                </span>
                <div className="mt-1 sm:mt-0 sm:ml-2">
                  <CopyEmailButton email="juancarloslopezmoreno@proton.me" />
                </div>
              </div>
              <div className="text-slate-600 dark:text-gray-300 text-sm sm:text-base">
                {t("footer.availability")}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-3 sm:pt-4">
              <ContactButton variant="primary" showCopyButton={false} />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-blue-500/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 text-slate-600 dark:text-gray-300 text-center sm:text-left">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="text-sm sm:text-base">
                  © {currentYear} {t("footer.portfolio")}.{" "}
                  {t("footer.madeWith")}
                </span>
                <Heart
                  size={14}
                  className="text-red-400 animate-pulse sm:w-4 sm:h-4"
                />
              </div>
              <span className="text-sm sm:text-base">
                {t("footer.coffeeMessage")}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-slate-500 dark:text-gray-400">
              <span>{t("footer.builtWith")}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block"></div>
              <span>{t("footer.styledWith")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10 w-6 h-6 sm:w-8 sm:h-8 border border-blue-500/30 rotate-45 hidden sm:block"></div>
      <div className="absolute bottom-6 right-4 sm:bottom-10 sm:right-10 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500/20 rotate-12 hidden sm:block"></div>
    </footer>
  );
};

export default Footer;
