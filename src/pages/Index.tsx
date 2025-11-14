import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gtagEvent } from "../main"; // ⭐ Added for Google Tracking

import Hero from "../components/Hero";
import About from "../components/About";
import Packages from "../components/Packages";
import EventsSection from "../components/EventsSection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import CaseStudyTestimonials from "../components/CaseStudyTestimonials";

const Home: React.FC = () => {
  const location = useLocation();

  /* ---------------------------------------------------------
      ⭐ Send Google Analytics Page View Event
  ---------------------------------------------------------- */
  useEffect(() => {
    gtagEvent("page_view", {
      page_title: "Home Page",
      page_location: window.location.href,
      page_path: "/",
    });
  }, []);

  /* ---------------------------------------------------------
      Existing scroll-to-section logic (Untouched)
  ---------------------------------------------------------- */
  useEffect(() => {
    const target = (location.state as any)?.scrollTo;
    if (target) {
      const handleScroll = () => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState({}, document.title);
        }
      };

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

      {/* Testimonials */}
      <section id="CaseStudyTestimonials">
        <CaseStudyTestimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
