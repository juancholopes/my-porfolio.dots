import { useState, useEffect } from 'react';

export const useDesktopDevice = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      // Verificación de capacidad hover (desktop/laptop)
      const hasHover = window.matchMedia('(hover: hover)').matches;

      // Verificación de dispositivo puntero (mouse)
      const hasPointer = window.matchMedia('(pointer: fine)').matches;

      // Verificación de ancho de pantalla (fallback)
      const isLargeScreen = window.innerWidth >= 1024;

      // Verificación de dispositivo táctil
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // Detección específica para Firefox: menos restrictiva
      const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      
      // Consideración de dispositivo desktop si tiene hover Y pointer fino Y pantalla grande
      // Para Firefox, se es más tolerante con detección táctil
      const desktopDevice = hasHover && hasPointer && isLargeScreen && (isFirefox || !isTouchDevice)

      setIsDesktop(desktopDevice);
    };

    // Verificación inicial
    checkIsDesktop();

    // Escucha de cambios en media queries
    const hoverQuery = window.matchMedia('(hover: hover)');
    const pointerQuery = window.matchMedia('(pointer: fine)');

    // Función de manejo de cambios en media queries
    const handleChange = () => {
      checkIsDesktop();
    };

    // Configuración de event listeners
    hoverQuery.addEventListener('change', handleChange);
    pointerQuery.addEventListener('change', handleChange);
    window.addEventListener('resize', handleChange);

    return () => {
      hoverQuery.removeEventListener('change', handleChange);
      pointerQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleChange);
    };
  }, []);

  return isDesktop;
};
