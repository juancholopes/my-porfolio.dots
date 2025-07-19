import { useState, useEffect, useCallback } from 'react';

export type CursorVariant = 'default' | 'text' | 'image' | 'hover';

interface CursorPosition {
  x: number;
  y: number;
}

export const useCursor = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [textHeight, setTextHeight] = useState<number>(16);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const hasPointer = window.matchMedia('(pointer: fine)').matches;
      const isLargeScreen = window.innerWidth >= 1024;
      setIsDesktop(hasHover && hasPointer && isLargeScreen);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    // Verificación de atributo data-cursor
    const cursorType = target.getAttribute('data-cursor');
    if (cursorType === 'image') {
      setCursorVariant('image');
      return;
    }
    if (cursorType === 'text') {
      const computedStyle = window.getComputedStyle(target);
      const fontSize = parseFloat(computedStyle.fontSize);
      setTextHeight(fontSize * 1.2);
      setCursorVariant('text');
      return;
    }

    // Verificación de elementos de imagen
    if (
      target.tagName === 'IMG' ||
      target.classList.contains('project-image') ||
      target.closest('.project-image') ||
      target.style.backgroundImage
    ) {
      setCursorVariant('image');
      return;
    }

    // Verificación de botones y enlaces (cursor hover para mayor tamaño)
    if (
      target.tagName === 'BUTTON' ||
      target.closest('button') ||
      target.role === 'button' ||
      target.tagName === 'A' ||
      target.closest('a') ||
      (target as HTMLAnchorElement).href ||
      target.getAttribute('href') ||
      target.classList.contains('cursor-link')
    ) {
      setCursorVariant('hover');
      return;
    }

    // Verificación de elementos de texto (excluyendo botones y enlaces)
    if (
      target.tagName === 'H1' ||
      target.tagName === 'H2' ||
      target.tagName === 'H3' ||
      target.tagName === 'H4' ||
      target.tagName === 'H5' ||
      target.tagName === 'H6' ||
      target.tagName === 'P' ||
      target.tagName === 'SPAN' ||
      target.tagName === 'LI' ||
      target.classList.contains('cursor-text')
    ) {
      // Obtención de altura de texto para cursor adaptativo
      const computedStyle = window.getComputedStyle(target);
      const fontSize = parseFloat(computedStyle.fontSize);
      setTextHeight(fontSize * 1.2);
      setCursorVariant('text');
      return;
    }

    setCursorVariant('default');
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop, handleMouseOver]);

  return {
    mousePosition,
    cursorVariant,
    textHeight,
  };
};
