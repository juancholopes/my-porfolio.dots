
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
