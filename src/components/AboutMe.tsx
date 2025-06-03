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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500/30 rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-blue-500/30 rotate-12"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">{t('about.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              {t('about.subtitle')}
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {t('about.journey')}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <User size={20} className="text-blue-400" />
                </div>
                <span className="text-gray-300">{t('about.agile')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Target size={20} className="text-blue-400" />
                </div>
                <span className="text-gray-300">
                  {t('about.cleanCode')}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Zap size={20} className="text-blue-400" />
                </div>
                <span className="text-gray-300">
                  {t('about.learning')}
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 border border-blue-500/30 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm">
              <div className="flex justify-center items-center h-full">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full max-w-sm"
                >
                  <CarouselContent className="flex direction-row justify-center   ">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/2"
                      >
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square  justify-end p-6">
                              <span className="text-3xl  font-semibold">
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
                </Carousel>{" "}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border border-blue-500/50 rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/30 rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
