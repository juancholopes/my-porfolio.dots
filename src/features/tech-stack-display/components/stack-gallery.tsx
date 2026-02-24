import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { useDesktopDevice } from "@shared/hooks/useDesktopDevice";
import { techStackImages } from "../tech-stack.data";

const StackGallery = () => {
  const isDesktop = useDesktopDevice({ simpleCheck: true });
  const [openTooltipIndex, setOpenTooltipIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Close tooltip when clicking outside the grid on mobile
  useEffect(() => {
    if (isDesktop || openTooltipIndex === null) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (gridRef.current && !gridRef.current.contains(e.target as Node)) {
        setOpenTooltipIndex(null);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, [isDesktop, openTooltipIndex]);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="grid place-items-center h-full">
        <div ref={gridRef} className="grid gap-4 group grid-cols-2 lg:grid-cols-7  md:grid-cols-4 sm:grid-cols-2">
          {techStackImages.map((image, index) => (
            <Tooltip
              key={index}
              open={!isDesktop ? openTooltipIndex === index : undefined}
            >
              <TooltipTrigger asChild>
                <button
                  type="button"
                  aria-label={image.name}
                  className="w-32 h-14 lg:h-24 lg:w-full flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 ease-in-out cursor-pointer group-hover:opacity-40 group-hover:grayscale hover:!grayscale-0 hover:!opacity-100 hover:scale-110 appearance-none"
                  onClick={() => {
                    if (!isDesktop) {
                      setOpenTooltipIndex((current) =>
                        current === index ? null : index
                      );
                    }
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent className="w-64 p-4 bg-slate-900 border-slate-800 text-white">
                <div className="space-y-3">
                  <p className="text-center font-semibold text-base">
                    {image.name}
                  </p>
                  <div className="flex items-center justify-between gap-4 text-sm text-gray-400">
                    <span>Experiencia</span>
                    <div className="h-2 flex-1 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${image.level * 10}%` }}
                      />
                    </div>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default StackGallery;
