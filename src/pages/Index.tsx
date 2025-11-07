import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Packages from "../components/Packages";
import EventsSection from "@/components/EventsSection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Packages />
      <EventsSection />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Index;
