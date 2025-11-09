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

  // ✅ Scroll to section if navigated with { state: { scrollTo: "..." } }
  useEffect(() => {
    const target = (location.state as any)?.scrollTo;
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState({}, document.title); // clear scroll state
      }, 100);
    }
  }, [location.state]);

  return (
    <main className="min-h-screen bg-white">
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
