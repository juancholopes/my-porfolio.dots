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

        {/* Stack gallery grid skeleton */}
        <div className="grid grid-cols-7 gap-4">
          {[...Array(14)].map((_, index) => (
            <div
              key={index}
              className="w-full h-24 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <Skeleton className="w-full h-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackDisplaySkeleton;
