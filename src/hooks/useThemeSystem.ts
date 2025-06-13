import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export const useThemeSystem = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    // Verificar si es la primera visita (no hay tema guardado en localStorage)
    const storedTheme = localStorage.getItem('portfolio-theme');

    if (!storedTheme || storedTheme === 'undefined' || storedTheme === 'null') {
      // Primera visita: establecer tema como 'system'
      setTheme('system');
    }
  }, [setTheme]);

  useEffect(() => {
    // Asegurar que el tema del sistema se aplique correctamente
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = () => {
        // Forzar re-renderizado cuando cambie la preferencia del sistema
        const currentTheme = mediaQuery.matches ? 'dark' : 'light';
        document.documentElement.className = currentTheme;
      };

      // Aplicar tema inicial del sistema
      handleChange();

      // Escuchar cambios en la preferencia del sistema
      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, [theme, systemTheme]);

  return { theme, setTheme, systemTheme };
};
