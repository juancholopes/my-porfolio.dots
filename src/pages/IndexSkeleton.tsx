import { HeroShowcaseSkeleton } from "@features/hero-showcase";
import { ProfessionalProfileSkeleton } from "@features/professional-profile";
import { ProjectShowcaseSkeleton } from "@features/project-showcase";
import { TechStackDisplaySkeleton } from "@features/tech-stack-display";
import { CertificationsDisplaySkeleton } from "@features/certifications-display";
import { Skeleton } from "@shared/components/ui/skeleton";

const IndexSkeleton = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Navbar Skeleton */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Skeleton className="h-8 w-32" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-24 rounded-lg" />
            </div>
          </div>
        </div>
      </nav>

      {/* Page Skeletons */}
      <HeroShowcaseSkeleton />
      <ProfessionalProfileSkeleton />
      <ProjectShowcaseSkeleton />
      <TechStackDisplaySkeleton />
      <CertificationsDisplaySkeleton />

      {/* Footer Skeleton */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexSkeleton;
