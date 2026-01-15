import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  priority?: boolean;
}

/**
 * Componente de imagen optimizado con lazy loading inteligente
 * Usa Intersection Observer para cargar imágenes cuando están cerca del viewport
 */
const LazyImage = ({
  src,
  alt,
  className = "",
  onError,
  priority = false,
}: LazyImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Si es prioritaria, cargar inmediatamente

  useEffect(() => {
    // Si es prioritaria, no usar intersection observer
    if (priority) {
      return;
    }

    const currentImg = imgRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Dejar de observar después de cargar
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Comenzar a cargar cuando está 100px antes de entrar al viewport
        rootMargin: "100px",
      }
    );

    if (currentImg) {
      observer.observe(currentImg);
    }

    return () => {
      if (currentImg) {
        observer.unobserve(currentImg);
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      ref={imgRef}
      src={isInView ? src : undefined}
      alt={alt}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onLoad={handleLoad}
      onError={onError}
    />
  );
};

export default LazyImage;
