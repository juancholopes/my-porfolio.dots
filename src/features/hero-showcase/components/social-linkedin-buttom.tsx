import { Linkedin } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SocialLinkedinButton = () => {
  const [showLinkedinTooltip, setShowLinkedinTooltip] = useState(false);
  const { t } = useTranslation();

  return (
    <button
      onClick={() =>
        window.open(
          "https://www.linkedin.com/in/juan-carlos-lopez-moreno-9a29b0299/",
          "_blank",
        )
      }
      onMouseEnter={() => setShowLinkedinTooltip(true)}
      onMouseLeave={() => setShowLinkedinTooltip(false)}
      className="p-2 md:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 relative"
      data-cursor="text"
    >
      <Linkedin
        size={20}
        className="text-blue-500 dark:text-blue-400 md:w-6 md:h-6"
      />

      {/* Tooltip hover */}
      {showLinkedinTooltip && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-900/95 backdrop-blur-sm text-white text-sm rounded-lg border border-blue-500/30 whitespace-nowrap z-20 animate-fade-in">
          <span>{t("common.showLinkedin")}</span>
          {/* Flecha del tooltip */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-500/30 border-solid"></div>
          </div>
        </div>
      )}
    </button>
  );
};

export default SocialLinkedinButton;
