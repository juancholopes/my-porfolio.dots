import { useState, useEffect } from 'react';

interface UseDesktopDeviceOptions {
  /** Solo verifica min-width: 1024px. Default: false (detección completa). */
  simpleCheck?: boolean;
}

const checkFullDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;

  const hasHover = window.matchMedia('(hover: hover)').matches;
  const hasPointer = window.matchMedia('(pointer: fine)').matches;
  const isLargeScreen = window.innerWidth >= 1024;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

  return hasHover && hasPointer && isLargeScreen && (isFirefox || !isTouchDevice);
};

const checkSimpleDesktop = (): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(min-width: 1024px)').matches;
};

export const useDesktopDevice = (options: UseDesktopDeviceOptions = {}) => {
  const { simpleCheck = false } = options;
  const checkFn = simpleCheck ? checkSimpleDesktop : checkFullDesktop;
  const [isDesktop, setIsDesktop] = useState<boolean>(checkFn);

  useEffect(() => {
    if (simpleCheck) {
      const mediaQuery = window.matchMedia('(min-width: 1024px)');
      const handleChange = (event: MediaQueryListEvent) => {
        setIsDesktop(event.matches);
      };
      setIsDesktop(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    const handleChange = () => setIsDesktop(checkFullDesktop());
    handleChange();

    const hoverQuery = window.matchMedia('(hover: hover)');
    const pointerQuery = window.matchMedia('(pointer: fine)');

    hoverQuery.addEventListener('change', handleChange);
    pointerQuery.addEventListener('change', handleChange);
    window.addEventListener('resize', handleChange);

    return () => {
      hoverQuery.removeEventListener('change', handleChange);
      pointerQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleChange);
    };
  }, [simpleCheck]);

  return isDesktop;
};
