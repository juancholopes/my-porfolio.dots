import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

const StackGallery = () => {
  const techStackImages = [
    {
      src: "/icons/React-icon.svg",
      alt: "React",
      name: "React",
      level: 9,
    },
    {
      src: "/icons/Typescript.svg",
      alt: "TypeScript",
      name: "TypeScript",
      level: 8,
    },
    {
      src: "/icons/Unofficial_JavaScript_logo_2.svg",
      alt: "JavaScript",
      name: "JavaScript",
      level: 9,
    },
    {
      src: "/icons/HTML5_Badge.svg",
      alt: "HTML5",
      name: "HTML5",
      level: 10,
    },
    {
      src: "/icons/Official_CSS_Logo.svg",
      alt: "CSS",
      name: "CSS",
      level: 9,
    },
    {
      src: "/icons/nodejsHex.svg",
      alt: "Node.js",
      name: "Node.js",
      level: 7,
    },
    {
      src: "/icons/Python-logo-notext.svg",
      alt: "Python",
      name: "Python",
      level: 6,
    },
    {
      src: "/icons/Tailwind_CSS_Logo.svg",
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
      level: 9,
    },
    {
      src: "/icons/Mongodb-svgrepo-com.svg",
      alt: "MongoDB",
      name: "MongoDB",
      level: 7,
    },
    {
      src: "/icons/PostgreSQL_logo.3colors.svg",
      alt: "PostgreSQL",
      name: "PostgreSQL",
      level: 7,
    },
    {
      src: "/icons/Octicons-mark-github.svg",
      alt: "GitHub",
      name: "GitHub",
      level: 7,
    },
    {
      src: "/icons/Git_icon.svg",
      alt: "Git",
      name: "Git",
      level: 8,
    },
    {
      src: "/icons/Figma-logo.svg",
      alt: "Figma",
      name: "Figma",
      level: 6,
    },
    {
      src: "/icons/aws.svg",
      alt: "AWS",
      name: "AWS",
      level: 5,
    },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <div className="grid grid-cols-7 gap-4 group">
        {techStackImages.map((image, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div className="w-full h-24 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 ease-in-out cursor-pointer group-hover:opacity-40 group-hover:grayscale hover:!grayscale-0 hover:!opacity-100 hover:scale-110">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </div>
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
    </TooltipProvider>
  );
};

export default StackGallery;
