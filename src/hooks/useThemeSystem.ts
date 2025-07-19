import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export const useThemeSystem = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    // Verificación de primera visita sin tema guardado
    const storedTheme = localStorage.getItem('portfolio-theme');

    if (!storedTheme || storedTheme === 'undefined' || storedTheme === 'null') {
      // Primera visita: establecer tema del sistema
      setTheme('system');
    }
  }, [setTheme]);

  useEffect(() => {
    // Aplicación correcta del tema del sistema
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = () => {
        // Re-renderizado al cambiar preferencia del sistema
        const currentTheme = mediaQuery.matches ? 'dark' : 'light';
        document.documentElement.className = currentTheme;
      };

      // Aplicación inicial del tema del sistema
      handleChange();

      // Escucha de cambios en preferencias del sistema
      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, [theme, systemTheme]);

  return { theme, setTheme, systemTheme };
};
