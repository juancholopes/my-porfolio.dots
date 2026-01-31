import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Check } from "lucide-react";

const CopyEmailButton = () => {
  const { t } = useTranslation();
  const [emailCopied, setEmailCopied] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);

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
    <button
      onClick={copyEmail}
      onMouseEnter={() => setShowEmailTooltip(true)}
      onMouseLeave={() => setShowEmailTooltip(false)}
      className="p-2 md:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 relative"
      data-cursor="text"
    >
      {emailCopied ? (
        <Check
          size={20}
          className="text-green-400 md:w-6 md:h-6 animate-pulse"
        />
      ) : (
        <Mail
          size={20}
          className="text-blue-500 dark:text-blue-400 md:w-6 md:h-6"
        />
      )}

      {/* Tooltip hover */}
      {showEmailTooltip && !emailCopied && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-900/95 backdrop-blur-sm text-white text-sm rounded-lg border border-blue-500/30 whitespace-nowrap z-20 animate-fade-in">
          <span>{t("common.copyEmail")}</span>
          {/* Flecha del tooltip */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-500/30 border-solid"></div>
          </div>
        </div>
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
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-500/30 border-solid"></div>
          </div>
        </div>
      )}
    </button>
  );
};

export default CopyEmailButton;
