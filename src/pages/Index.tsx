import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Packages from "../components/Packages";
import EventsSection from "../components/EventsSection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // 👇 Detect if the user navigated here with a target section
    const target = (location.state as any)?.scrollTo;
    if (target) {
      const handleScroll = () => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // Clean the scroll state to avoid repeating the scroll
          window.history.replaceState({}, document.title);
        }
      };

      // Delay ensures elements are fully mounted before scroll
      const timeout = setTimeout(handleScroll, 200);
      return () => clearTimeout(timeout);
    }
  }, [location.state]);

  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="packages">
        <Packages />
      </section>

      <section id="events">
        <EventsSection />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
