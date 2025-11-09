import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Packages from "../components/Packages";
import EventsSection from "../components/EventsSection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Index: React.FC = () => {
  const location = useLocation();

  // Scroll to section if navigated with { state: { scrollTo: "..." } }
  useEffect(() => {
    const target = (location.state as any)?.scrollTo;
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, document.title); // clear state
      }, 80);
    }
  }, [location.state]);

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
