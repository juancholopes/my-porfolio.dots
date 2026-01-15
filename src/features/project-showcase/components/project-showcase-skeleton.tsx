import { Skeleton } from "@shared/components/ui/skeleton";

const ProjectShowcaseSkeleton = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header skeleton */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Skeleton className="h-8 sm:h-10 md:h-12 lg:h-14 w-64 mx-auto mb-3 sm:mb-4" />
          <Skeleton className="h-5 sm:h-6 w-96 max-w-2xl mx-auto" />
        </div>

        {/* Project cards grid skeleton */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-card dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-border"
            >
              {/* Image skeleton */}
              <Skeleton className="w-full h-48 sm:h-56 md:h-64 rounded-none" />
              
              {/* Content skeleton */}
              <div className="p-4 sm:p-6 space-y-4">
                {/* Title */}
                <Skeleton className="h-7 w-3/4" />
                
                {/* Description */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16 rounded-full" />
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex gap-3">
                  <Skeleton className="h-10 w-28 rounded-lg" />
                  <Skeleton className="h-10 w-28 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button skeleton */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <Skeleton className="h-12 w-40 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSkeleton;
