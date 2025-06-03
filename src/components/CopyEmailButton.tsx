import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useTranslation();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsAnimating(true);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsAnimating(false);
      }, 2500);
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

      requestAnimationFrame(() => {
        try {
          textArea.select();
          textArea.setSelectionRange(0, 99999); // Para móviles
          document.execCommand("copy");
          setIsAnimating(true);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
            setIsAnimating(false);
          }, 2500);
        } catch (fallbackErr) {
          console.error("Error al copiar al portapapeles:", fallbackErr);
        } finally {
          document.body.removeChild(textArea);
        }
      });
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`ml-2 p-1.5 rounded-lg border border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 group relative ${className} ${
        copied ? "bg-green-500/10 border-green-500/30 scale-110" : ""
      }`}
      title={copied ? t("common.copied") : t("common.copyEmail")}
      disabled={isAnimating}
    >
      {copied ? (
        <Check size={14} className="text-green-400 animate-pulse" />
      ) : (
        <Copy
          size={14}
          className="text-blue-400 group-hover:scale-110 transition-transform duration-200"
        />
      )}

      {/* Tooltip mejorado */}
      <span
        className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-slate-900/95 backdrop-blur-sm text-white text-xs rounded-lg border border-blue-500/30 whitespace-nowrap transition-all duration-300 z-20 ${
          copied
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
        }`}
      >
        {copied ? (
          <span className="flex items-center space-x-1">
            <Check size={12} className="text-green-400" />
            <span className="text-green-400">{t("common.copied")}</span>
          </span>
        ) : (
          <span className="flex items-center space-x-1">
            <Copy size={12} className="text-blue-400" />
            <span>{t("common.copyEmail")}</span>
          </span>
        )}
        {/* Flecha del tooltip */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95"></div>
        </div>
      </span>

      {/* Animación de éxito */}
      {copied && (
        <div className="absolute inset-0 rounded-lg bg-green-500/20 animate-ping"></div>
      )}
    </button>
  );
};

export default CopyEmailButton;
