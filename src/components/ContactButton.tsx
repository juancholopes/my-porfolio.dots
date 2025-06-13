import React, { useState } from "react";
import { Mail, Send, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import CopyEmailButton from "./CopyEmailButton";

interface ContactButtonProps {
  variant?: "primary" | "secondary" | "minimal";
  showCopyButton?: boolean;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  variant = "primary",
  showCopyButton = true,
  className = "",
}) => {
  const [showEmailActions, setShowEmailActions] = useState(false);
  const { t } = useTranslation();

  const email = "juancarloslopezmoreno@proton.me";
  const subject = "Contacto desde Portfolio";
  const body =
    "Hola Juan Carlos,\n\nMe gustaría ponerme en contacto contigo para...";

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  if (variant === "minimal") {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <Mail size={16} className="text-blue-400" />
        <span className="text-gray-300 text-sm">{email}</span>
        {showCopyButton && <CopyEmailButton email={email} />}
      </div>
    );
  }

  if (variant === "secondary") {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setShowEmailActions(!showEmailActions)}
          className="flex items-center space-x-3 px-4 py-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
        >
          <MessageCircle
            size={20}
            className="text-blue-400 group-hover:scale-110 transition-transform duration-200"
          />
          <span className="text-gray-300">{t("footer.contact")}</span>
        </button>

        {showEmailActions && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-blue-500/20 rounded-lg shadow-lg p-4 z-50">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{email}</span>
                <CopyEmailButton email={email} />
              </div>
              <button
                onClick={handleEmailClick}
                className="w-full flex items-center space-x-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200"
              >
                <Send size={16} className="text-blue-400" />
                <span className="text-blue-400 text-sm">
                  {t("footer.workTogether")}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <button
        onClick={handleEmailClick}
        className="w-full flex items-center justify-center space-x-3 px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg group"
      >
        <Send
          className="group-hover:scale-110 transition-transform duration-200"
          size={18}
        />
        <span>{t("footer.workTogether")}</span>
      </button>

      {showCopyButton && (
        <div className="flex items-center justify-center space-x-3 px-4 py-2 bg-slate-900/30 border border-blue-500/20 rounded-lg">
          <Mail size={16} className="text-blue-400" />
          <span className="text-gray-300 text-sm">{email}</span>
          <CopyEmailButton email={email} />
        </div>
      )}
    </div>
  );
};

export default ContactButton;
