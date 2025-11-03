import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.stack"), href: "#stack" },
    { name: t("navbar.certificates"), href: "#certificates" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-start md:justify-center h-14 sm:h-16">
          {/* Botón hamburguesa - solo visible en móvil, alineado a la izquierda */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 p-1.5 sm:p-2"
            >
              {isOpen ? (
                <X size={20} className="sm:w-6 sm:h-6" />
              ) : (
                <Menu size={20} className="sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Menu Desktop - oculto en móvil, centrado */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-baseline space-x-4 lg:space-x-8 relative">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-2 lg:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* TODO : Menu Mobile - visible solo en móvil */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-blue-500/20">
          <div className="px-3 pt-2 pb-3 space-y-1 sm:px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 block px-3 py-2.5 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="px-3 py-2.5 flex items-center space-x-3">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
