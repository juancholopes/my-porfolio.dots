import React from "react";
import { Footer, Navbar } from "@features/navigation";
import HeroShowcase from "@features/hero-showcase";
import ProfessionalProfile from "@features/professional-profile";
import ProjectShowcase from "@features/project-showcase";
import TechStackDisplay from "@features/tech-stack-display";
import CertificationsDisplay from "@features/certifications-display";
import { useThemeSystem } from "@shared/hooks/useThemeSystem";
import { SEO } from "@shared/components/SEO";

const Index = () => {
  useThemeSystem();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <SEO />
      <Navbar />
      <HeroShowcase />
      <ProfessionalProfile />
      <ProjectShowcase />
      <TechStackDisplay />
      <CertificationsDisplay />
      <Footer />
    </div>
  );
};

export default Index;
