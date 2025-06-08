
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.stack'), href: '#stack' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-blue-500/20">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
=======
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
          <div className="flex items-center">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-500 dark:text-blue-400">
              {t('navbar.portfolio')}
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
<<<<<<< HEAD
                  className="text-muted-foreground hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
=======
                  className="text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-2 lg:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 relative group"
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
<<<<<<< HEAD
              <div className="flex items-center space-x-4">
                <LanguageSelector />
                <ThemeToggle />
              </div>
=======
              <LanguageSelector />
              <ThemeToggle />
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
              className="text-muted-foreground hover:text-blue-400 p-2"
=======
              className="text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 p-1.5 sm:p-2"
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
            >
              {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-blue-500/20">
<<<<<<< HEAD
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
=======
          <div className="px-3 pt-2 pb-3 space-y-1 sm:px-4">
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
<<<<<<< HEAD
                className="text-muted-foreground hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
=======
                className="text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 block px-3 py-2.5 text-base font-medium transition-colors duration-200"
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
<<<<<<< HEAD
            <div className="px-3 py-2 flex items-center space-x-4">
=======
            <div className="px-3 py-2.5 flex items-center space-x-3">
>>>>>>> a1e8df674923eb5af543656546a64d6e343f08e9
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
