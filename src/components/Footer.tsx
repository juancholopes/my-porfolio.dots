import React from "react";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import CopyEmailButton from "./CopyEmailButton";
import ContactButton from "./ContactButton";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-16 relative border-t border-blue-500/20">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand section */}
          <div className="space-y-4 flex-1 max-w-md">
            <div className="flex items-center space-x-2">
              <Code2 size={24} className="text-blue-400" />
              <h3 className="text-2xl font-bold text-white">
                {t("footer.portfolio")}
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Github
                  size={20}
                  className="text-blue-400 group-hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="#"
                className="p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Linkedin
                  size={20}
                  className="text-blue-400 group-hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="#"
                className="p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Mail
                  size={20}
                  className="text-blue-400 group-hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4 flex-shrink-0">
            <h4 className="text-xl font-bold text-white">
              {t("footer.getInTouch")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-gray-300">
                  juancarloslopezmoreno@proton.me
                </span>
                <CopyEmailButton email="juancarloslopezmoreno@proton.me" />
              </div>
              <div className="text-gray-300">{t("footer.availability")}</div>
            </div>

            {/* Call to action */}
            <div className="pt-4">
              <ContactButton variant="primary" showCopyButton={false} />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>
                © {currentYear} {t("footer.portfolio")}. {t("footer.madeWith")}
              </span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>{t("footer.coffeeMessage")}</span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{t("footer.builtWith")}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>{t("footer.styledWith")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-8 h-8 border border-blue-500/30 rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-6 h-6 bg-blue-500/20 rotate-12"></div>
    </footer>
  );
};

export default Footer;
