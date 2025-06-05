import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 zed-glow"
      data-cursor="text"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-blue-500 dark:text-blue-400" />
      ) : (
        <Moon size={20} className="text-blue-500 dark:text-blue-400" />
      )}
    </button>
  );
};

export default ThemeToggle;