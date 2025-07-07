import { useState, useEffect } from 'react';

export const useDesktopDevice = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      // Check if device has hover capability (desktop/laptop)
      const hasHover = window.matchMedia('(hover: hover)').matches;

      // Check if device has a pointer device (mouse)
      const hasPointer = window.matchMedia('(pointer: fine)').matches;

      // Check screen width (fallback)
      const isLargeScreen = window.innerWidth >= 1024;

      // Check if it's a touch device
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // Firefox-specific detection: be less restrictive
      const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      
      // Consider it desktop if it has hover AND fine pointer AND large screen
      // For Firefox, we're more lenient with touch detection
      const desktopDevice = hasHover && hasPointer && isLargeScreen && (isFirefox || !isTouchDevice);

      console.log('Desktop detection:', {
        hasHover,
        hasPointer,
        isLargeScreen,
        isTouchDevice,
        isFirefox,
        desktopDevice
      });

      setIsDesktop(desktopDevice);
    };

    // Initial check
    checkIsDesktop();

    // Listen for changes in media queries
    const hoverQuery = window.matchMedia('(hover: hover)');
    const pointerQuery = window.matchMedia('(pointer: fine)');

    const handleChange = () => {
      checkIsDesktop();
    };

    // Add event listeners
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
