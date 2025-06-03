import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200">
        <Globe size={20} />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900/95 backdrop-blur-md border border-blue-500/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-blue-500/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
              i18n.language === language.code 
                ? 'text-blue-400 bg-blue-500/10' 
                : 'text-gray-300'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;