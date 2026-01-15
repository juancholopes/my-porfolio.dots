import React from "react";
import { Navbar, Footer } from "@features/navigation";
import HeroShowcase from "@features/hero-showcase";
import ProfessionalProfile from "@features/professional-profile";
import ProjectShowcase from "@features/project-showcase";
import TechStackDisplay from "@features/tech-stack-display";
import CertificationsDisplay from "@features/certifications-display";
import { useThemeSystem } from "@shared/hooks/useThemeSystem";

const Index = () => {
  useThemeSystem();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
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
