import { useEffect } from "react";
import { useLocation } from "react-router-dom";
<<<<<<< HEAD
=======
import { gtagEvent } from "../main"; // ⭐ Added for Google Tracking

>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
import Hero from "../components/Hero";
import About from "../components/About";
import Packages from "../components/Packages";
import EventsSection from "../components/EventsSection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import CaseStudyTestimonials from "../components/CaseStudyTestimonials";

<<<<<<< HEAD



const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // 👇 Detect if the user navigated here with a target section
=======
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
>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
    const target = (location.state as any)?.scrollTo;
    if (target) {
      const handleScroll = () => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState({}, document.title);
        }
      };

<<<<<<< HEAD
      // Delay ensures elements are mounted before scroll
=======
>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
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

<<<<<<< HEAD


      {/* ✅ Add Testimonial section here */}
=======
      {/* Testimonials */}
>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
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
