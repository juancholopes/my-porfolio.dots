import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Footer from "../components/Footer";
import { useThemeSystem } from "../hooks/useThemeSystem";

const Index = () => {
  useThemeSystem();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Stack />
      <Footer />
    </div>
  );
};

export default Index;
