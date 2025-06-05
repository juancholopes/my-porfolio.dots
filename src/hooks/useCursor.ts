import { useState, useEffect, useCallback } from 'react';

export type CursorVariant = 'default' | 'text' | 'image';

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

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Check cursor data attribute first
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

    // Check if hovering over images
    if (
      target.tagName === 'IMG' ||
      target.classList.contains('project-image') ||
      target.closest('.project-image') ||
      target.style.backgroundImage
    ) {
      setCursorVariant('image');
      return;
    }

    // Check if hovering over buttons first (exclude from text effect)
    if (
      target.tagName === 'BUTTON' ||
      target.closest('button') ||
      target.role === 'button'
    ) {
      setCursorVariant('default');
      return;
    }

    // Check if hovering over text elements and links (excluding buttons)
    if (
      target.tagName === 'H1' ||
      target.tagName === 'H2' ||
      target.tagName === 'H3' ||
      target.tagName === 'H4' ||
      target.tagName === 'H5' ||
      target.tagName === 'H6' ||
      target.tagName === 'P' ||
      target.tagName === 'SPAN' ||
      target.tagName === 'A' ||
      target.tagName === 'LI' ||
      target.closest('a') ||
      target.classList.contains('cursor-text')
    ) {
      // Get text height for adaptive cursor
      const computedStyle = window.getComputedStyle(target);
      const fontSize = parseFloat(computedStyle.fontSize);
      setTextHeight(fontSize * 1.2);
      setCursorVariant('text');
      return;
    }

    setCursorVariant('default');
  }, []);



  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [updateMousePosition, handleMouseOver]);

  return {
    mousePosition,
    cursorVariant,
    setCursorVariant,
    textHeight,
  };
};