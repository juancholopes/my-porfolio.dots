import React, { useRef, useEffect, useState, useCallback, CSSProperties } from "react";
import { gsap } from "gsap";

interface PixelTransitionProps {
  firstContent: React.ReactNode | string;
  secondContent: React.ReactNode | string;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
}

/**
 * Parses a CSS color string to an RGBA tuple.
 * Supports hex (#rgb, #rrggbb, #rrggbbaa), rgb(), rgba(), and named colors.
 */
function parseColor(color: string): [number, number, number, number] {
  // Use an offscreen canvas to resolve any CSS color string
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = color;
  const resolved = ctx.fillStyle; // browser normalises to #rrggbb or rgba(...)

  if (resolved.startsWith("#")) {
    const hex = resolved.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) : 255;
    return [r, g, b, a];
  }

  // rgba(r, g, b, a) or rgb(r, g, b)
  const parts = resolved.match(/[\d.]+/g)?.map(Number) ?? [0, 0, 0, 255];
  return [
    parts[0],
    parts[1],
    parts[2],
    parts[3] !== undefined ? Math.round(parts[3] * 255) : 255,
  ];
}

/** Fisher-Yates shuffle returning a new shuffled array of indices 0..n-1 */
function shuffledIndices(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  once = false,
  aspectRatio = "100%",
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<{ tween: gsap.core.Tween | null; delayed: gsap.core.Tween | null }>({
    tween: null,
    delayed: null,
  });

  const [isActive, setIsActive] = useState<boolean>(false);

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  // Parse pixelColor once into RGBA bytes
  const colorRef = useRef<[number, number, number, number]>([0, 0, 0, 255]);
  useEffect(() => {
    colorRef.current = parseColor(pixelColor);
  }, [pixelColor]);

  // Keep canvas sized to its container
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    return () => ro.disconnect();
  }, []);

  /**
   * Draw pixels on the canvas.
   * `visibleSet` contains the indices of pixels that should be rendered.
   */
  const drawPixels = useCallback(
    (visibleSet: Set<number>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (visibleSet.size === 0) return;

      const cellW = w / gridSize;
      const cellH = h / gridSize;
      const [r, g, b, a] = colorRef.current;
      ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;

      visibleSet.forEach((idx) => {
        const row = Math.floor(idx / gridSize);
        const col = idx % gridSize;
        // Use Math.floor for position and Math.ceil for size to avoid sub-pixel gaps
        ctx.fillRect(
          Math.floor(col * cellW),
          Math.floor(row * cellH),
          Math.ceil(cellW),
          Math.ceil(cellH),
        );
      });
    },
    [gridSize],
  );

  const animatePixels = useCallback(
    (activate: boolean): void => {
      setIsActive(activate);

      const activeEl = activeRef.current;
      if (!activeEl) return;

      // Kill running animations
      if (animRef.current.tween) {
        animRef.current.tween.kill();
        animRef.current.tween = null;
      }
      if (animRef.current.delayed) {
        animRef.current.delayed.kill();
        animRef.current.delayed = null;
      }

      const totalPixels = gridSize * gridSize;
      const order = shuffledIndices(totalPixels);
      const visibleSet = new Set<number>();
      const stepDuration = animationStepDuration / totalPixels;

      // Phase 1: reveal pixels one by one
      const proxy1 = { progress: 0 };
      let lastRevealedCount = 0;

      animRef.current.tween = gsap.to(proxy1, {
        progress: 1,
        duration: animationStepDuration,
        ease: "none",
        onUpdate: () => {
          const target = Math.round(proxy1.progress * totalPixels);
          if (target === lastRevealedCount) return;
          for (let i = lastRevealedCount; i < target; i++) {
            visibleSet.add(order[i]);
          }
          lastRevealedCount = target;
          drawPixels(visibleSet);
        },
        onComplete: () => {
          // Swap content
          activeEl.style.display = activate ? "block" : "none";
          activeEl.style.pointerEvents = activate ? "none" : "";

          // Phase 2: hide pixels one by one (new random order)
          const hideOrder = shuffledIndices(totalPixels);
          const proxy2 = { progress: 0 };
          let lastHiddenCount = 0;

          animRef.current.tween = gsap.to(proxy2, {
            progress: 1,
            duration: animationStepDuration,
            ease: "none",
            onUpdate: () => {
              const target = Math.round(proxy2.progress * totalPixels);
              if (target === lastHiddenCount) return;
              for (let i = lastHiddenCount; i < target; i++) {
                visibleSet.delete(hideOrder[i]);
              }
              lastHiddenCount = target;
              drawPixels(visibleSet);
            },
            onComplete: () => {
              visibleSet.clear();
              drawPixels(visibleSet);
            },
          });
        },
      });
    },
    [gridSize, animationStepDuration, drawPixels],
  );

  const handleEnter = (): void => {
    if (!isActive) animatePixels(true);
  };
  const handleLeave = (): void => {
    if (isActive && !once) animatePixels(false);
  };
  const handleClick = (): void => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isTouchDevice) {
        handleClick();
      } else {
        if (!isActive) handleEnter();
        else handleLeave();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      role="button"
      aria-label="Toggle image transition"
      className={`
        ${className}
        bg-[#222]
        text-white
        rounded-[15px]
        border-2
        border-blue-500/30
        w-[300px]
        max-w-full
        relative
        overflow-hidden
      `}
      style={style}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onKeyDown={handleKeyDown}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      tabIndex={0}
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="absolute inset-0 w-full h-full" aria-hidden={isActive}>
        {firstContent}
      </div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ display: "none" }}
        aria-hidden={!isActive}
      >
        {secondContent}
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      />
    </div>
  );
};

export default PixelTransition;
