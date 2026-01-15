import { Skeleton } from "@shared/components/ui/skeleton";

const ProfessionalProfileSkeleton = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header skeleton */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Skeleton className="h-8 sm:h-10 md:h-12 lg:h-14 w-56 mx-auto mb-3 sm:mb-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content section skeleton */}
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
            {/* Subtitle */}
            <Skeleton className="h-7 sm:h-8 w-3/4" />
            
            {/* Description paragraphs */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>
            
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>

            {/* Feature items */}
            <div className="space-y-3 sm:space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                  <Skeleton className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel/Image section skeleton */}
          <div className="order-1 lg:order-2">
            <Skeleton className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfileSkeleton;
