import { Skeleton } from "@shared/components/ui/skeleton";

const HeroShowcaseSkeleton = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="relative z-10 text-center lg:text-left max-w-full w-full">
        <div className="float-animation">
          {/* Title skeleton */}
          <div className="mb-4 md:mb-6 space-y-3">
            <Skeleton className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-36 w-3/4 mx-auto lg:mx-0" />
            <Skeleton className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-36 w-2/3 mx-auto lg:mx-0" />
          </div>
        </div>

        {/* Subtitle skeleton */}
        <div className="mb-6 md:mb-8 max-w-3xl mx-auto lg:mx-0 space-y-2">
          <Skeleton className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 w-full" />
          <Skeleton className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 w-5/6" />
        </div>

        {/* Buttons skeleton */}
        <div className="flex justify-center lg:justify-start flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-12 w-32 rounded-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>

        {/* View more button skeleton */}
        <div className="flex justify-center lg:justify-start">
          <Skeleton className="h-12 w-40 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroShowcaseSkeleton;
