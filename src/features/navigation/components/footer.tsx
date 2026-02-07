import { Github, Linkedin, Mail, Heart, Code2, Coffee } from "lucide-react";
import { useTranslation } from "react-i18next";
import CopyEmailButton from "./copy-email-button-footer";
import ContactButton from "./contact-button";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="py-8 sm:py-12 lg:py-16 relative border-t border-blue-500/20"
    >
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

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
                href="https://github.com/juancholopes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Github
                  size={18}
                  className="text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200 sm:w-5 sm:h-5"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-carlos-lopez-moreno-9a29b0299/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Linkedin
                  size={18}
                  className="text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200 sm:w-5 sm:h-5"
                />
              </a>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(
                      "juancarloslopezmoreno@proton.me",
                    );
                  } catch (err) {
                    const textArea = document.createElement("textarea");
                    textArea.value = "juancarloslopezmoreno@proton.me";
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
                  }
                }}
                className="p-1.5 sm:p-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Mail
                  size={18}
                  className="text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200 sm:w-5 sm:h-5"
                />
              </button>
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
                  {currentYear} {t("footer.portfolio")}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-slate-500 dark:text-gray-400">
              <>
                {t("footer.madeWith")}
                <Heart
                  size={14}
                  className="inline-block mx-1 animate-pulse text-red-500 sm:w-4 sm:h-4"
                />
              </>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
