import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";

const DownloadCvButton = () => {
  const { t, i18n } = useTranslation();
  const [showDownloadTooltip, setShowDownloadTooltip] = useState(false);

  const downloadCV = () => {
    const isSpanish = i18n.language === "es";
    const cvFileName = isSpanish ? "CV-ES.pdf" : "CV-EN.pdf";
    const link = document.createElement("a");
    link.href = `/files/${cvFileName}`;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadCV}
      onMouseEnter={() => setShowDownloadTooltip(true)}
      onMouseLeave={() => setShowDownloadTooltip(false)}
      className="p-2 md:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 relative"
      data-cursor="text"
    >
      <Download
        size={20}
        className="text-blue-500 dark:text-blue-400 md:w-6 md:h-6"
      />

      {/* Tooltip hover */}
      {showDownloadTooltip && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-900/95 backdrop-blur-sm text-white text-sm rounded-lg border border-blue-500/30 whitespace-nowrap z-20 animate-fade-in">
          <span>{t("common.downloadCV")}</span>
          {/* Flecha del tooltip */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95"></div>
          </div>
        </div>
      )}
    </button>
  );
};

export default DownloadCvButton;
