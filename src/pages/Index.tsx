import React, { lazy, Suspense } from "react";
import { Footer, Navbar } from "@features/navigation";
import HeroShowcase from "@features/hero-showcase";
import ProfessionalProfile from "@features/professional-profile";
import { useThemeSystem } from "@shared/hooks/useThemeSystem";
import { SEO } from "@shared/components/SEO";

// Lazy load de features below-the-fold para reducir el render delay del LCP
const ProjectShowcase = lazy(() => import("@features/project-showcase"));
const TechStackDisplay = lazy(() => import("@features/tech-stack-display"));
const CertificationsDisplay = lazy(() => import("@features/certifications-display"));

// Skeletons importados directamente para evitar cargar los componentes principales via barrel
import ProjectShowcaseSkeleton from "@features/project-showcase/components/project-showcase-skeleton";
import TechStackDisplaySkeleton from "@features/tech-stack-display/components/tech-stack-display-skeleton";
import CertificationsDisplaySkeleton from "@features/certifications-display/components/certifications-display-skeleton";

const Index = () => {
  useThemeSystem();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <SEO />
      <Navbar />
      <HeroShowcase />
      <ProfessionalProfile />
      <Suspense fallback={<ProjectShowcaseSkeleton />}>
        <ProjectShowcase />
      </Suspense>
      <Suspense fallback={<TechStackDisplaySkeleton />}>
        <TechStackDisplay />
      </Suspense>
      <Suspense fallback={<CertificationsDisplaySkeleton />}>
        <CertificationsDisplay />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
