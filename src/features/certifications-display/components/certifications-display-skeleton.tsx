import { Skeleton } from "@shared/components/ui/skeleton";

const CertificationsDisplaySkeleton = () => {
  return (
    <section id="certificates" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header skeleton */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Skeleton className="h-8 sm:h-10 md:h-12 lg:h-14 w-72 mx-auto mb-3 sm:mb-4" />
        </div>

        {/* Certificate cards grid skeleton */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-card dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-border p-4 sm:p-6"
            >
              {/* Image/Icon skeleton */}
              <Skeleton className="w-16 h-16 rounded-lg mb-4" />
              
              {/* Title */}
              <Skeleton className="h-6 w-full mb-3" />
              
              {/* Organization */}
              <Skeleton className="h-4 w-2/3 mb-3" />
              
              {/* Date */}
              <Skeleton className="h-4 w-1/2 mb-4" />
              
              {/* Description */}
              <div className="space-y-2 mb-4">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </div>
              
              {/* Button */}
              <Skeleton className="h-10 w-full rounded-lg" />
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

export default CertificationsDisplaySkeleton;
