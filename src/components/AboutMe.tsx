import { User, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
            data-cursor="text"
          >
            <span
              className="text-blue-500 dark:text-blue-400"
              data-cursor="text"
            >
              {t("about.title")}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3
              className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground"
              data-cursor="text"
            >
              {t("about.subtitle")}
            </h3>
            <p
              className="text-slate-600 dark:text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed"
              data-cursor="text"
            >
              {t("about.description")}
            </p>
            <p
              className="text-slate-600 dark:text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
              data-cursor="text"
            >
              {t("about.journey")}
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                  <User
                    size={16}
                    className="text-blue-500 dark:text-blue-400 sm:w-5 sm:h-5"
                  />
                </div>
                <span
                  className="text-slate-600 dark:text-gray-300 text-sm sm:text-base"
                  data-cursor="text"
                >
                  {t("about.agile")}
                </span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                  <Target
                    size={16}
                    className="text-blue-500 dark:text-blue-400 sm:w-5 sm:h-5"
                  />
                </div>
                <span
                  className="text-slate-600 dark:text-gray-300 text-sm sm:text-base"
                  data-cursor="text"
                >
                  {t("about.cleanCode")}
                </span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                  <Zap
                    size={16}
                    className="text-blue-500 dark:text-blue-400 sm:w-5 sm:h-5"
                  />
                </div>
                <span
                  className="text-slate-600 dark:text-gray-300 text-sm sm:text-base"
                  data-cursor="text"
                >
                  {t("about.learning")}
                </span>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div
              className="w-full h-64 sm:h-80 lg:h-96 border border-blue-500/30 rounded-lg p-4 sm:p-6 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm project-image"
              data-cursor="image"
            >
              <div className="flex justify-center items-center h-full">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full max-w-xs sm:max-w-sm"
                >
                  <CarouselContent className="flex direction-row justify-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/2"
                      >
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square justify-center items-center p-6">
                              <span className="text-3xl font-semibold">
                                {index + 1}
                              </span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
