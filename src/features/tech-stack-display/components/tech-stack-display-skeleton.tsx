import { Skeleton } from "@shared/components/ui/skeleton";

const TechStackDisplaySkeleton = () => {
  return (
    <section id="stack" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header skeleton */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Skeleton className="h-8 sm:h-10 md:h-12 lg:h-14 w-64 mx-auto mb-3 sm:mb-4" />
          <Skeleton className="h-5 sm:h-6 w-96 max-w-2xl mx-auto" />
        </div>

        {/* Stack categories grid skeleton */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card dark:bg-gray-800/50 rounded-2xl border border-border p-6 sm:p-8"
            >
              {/* Icon skeleton */}
              <div className="mb-4 sm:mb-6">
                <Skeleton className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg" />
              </div>

              {/* Category title */}
              <Skeleton className="h-6 sm:h-7 w-2/3 mb-4 sm:mb-6" />

              {/* Technologies list */}
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton className="w-2 h-2 rounded-full flex-shrink-0" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>

              {/* Gradient decoration skeleton */}
              <Skeleton className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackDisplaySkeleton;
