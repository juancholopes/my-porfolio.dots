import React from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  // Get the display text based on current language
  const getDisplayText = () => {
    return i18n.language === "es" ? "Idioma" : "Language";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-2 lg:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 relative group">
          {getDisplayText()}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-blue-500/30 bg-background/90 backdrop-blur-sm"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`hover:bg-blue-500/20 focus:bg-blue-500/20 cursor-pointer transition-colors duration-200 ${
              i18n.language === language.code
                ? "text-blue-500 dark:text-blue-400 bg-blue-500/10"
                : "text-foreground"
            }`}
          >
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
