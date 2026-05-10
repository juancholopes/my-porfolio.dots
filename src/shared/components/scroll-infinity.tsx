import React, { useLayoutEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m } from "motion/react"; // use-lazy-motion: LazyMotion reduces bundle size by only loading animation features on demand
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface ImageItem {
  src: string;
  alt: string;
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
  imageWidth?: number;
  imageHeight?: number;
  gap?: number;
}

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  images: ImageItem[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
  imageWidth?: number;
  imageHeight?: number;
  gap?: number;
}

// rerender-memo-with-default-value: extracted to module-level constant to prevent new reference on each render
const EMPTY_IMAGES: ImageItem[] = [];

function useElementWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

const VelocityText: React.FC<VelocityTextProps & { gap?: number }> = ({
  children,
  baseVelocity = 100,
  scrollContainerRef,
  className = "",
  damping,
  stiffness,
  numCopies,
  velocityMapping,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
  gap = 16,
}) => {
  const baseX = useMotionValue(0);
  const scrollOptions = scrollContainerRef
    ? { container: scrollContainerRef }
    : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: damping ?? 50,
    stiffness: stiffness ?? 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping?.input || [0, 1000],
    velocityMapping?.output || [0, 5],
    { clamp: false },
  );

  const copyRef = useRef<HTMLSpanElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number): number {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const spans = [];
  for (let i = 0; i < numCopies!; i++) {
    spans.push(
      <span
        className={`flex-shrink-0 ${className}`}
        key={i} // no-array-index-as-key: using index i here is acceptable since spans are identical copies of the same children
        ref={i === 0 ? copyRef : null}
      >
        {children}
      </span>,
    );
  }

  return (
    <div
      className={`${parallaxClassName} relative overflow-hidden`}
      style={parallaxStyle}
    >
      <m.div // use-lazy-motion: using m instead of motion for LazyMotion compatibility
        className={`${scrollerClassName} flex whitespace-nowrap`}
        style={{ x, gap: `${gap}px`, ...scrollerStyle }}
      >
        {spans}
      </m.div>
    </div>
  );
};

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  images = EMPTY_IMAGES, // rerender-memo-with-default-value: using module-level constant instead of inline array
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
  imageWidth = 200,
  imageHeight = 200,
  gap = 16,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <section>
        {images.map((image: ImageItem, index: number) => (
          <VelocityText
            key={image.src} // no-array-index-as-key: using stable image.src as unique identifier
            className={className}
            baseVelocity={index % 2 !== 0 ? -velocity : velocity}
            scrollContainerRef={scrollContainerRef}
            damping={damping}
            stiffness={stiffness}
            numCopies={numCopies}
            velocityMapping={velocityMapping}
            parallaxClassName={parallaxClassName}
            scrollerClassName={scrollerClassName}
            parallaxStyle={parallaxStyle}
            scrollerStyle={scrollerStyle}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            gap={gap}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="rounded-md"
            />
          </VelocityText>
        ))}
      </section>
    </LazyMotion>
  );
};

export default ScrollVelocity;