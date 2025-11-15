import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Users, Utensils, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { useMemo } from "react";
import { useAutoSlide } from "@/hooks/useAutoSlide";

=======
import { useMemo, useEffect } from "react";
import { useAutoSlide } from "@/hooks/useAutoSlide";

// ⬇️ GOOGLE ANALYTICS IMPORT
import { gtagEvent } from "../main";

>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
/* ----------------------------- Event Data ----------------------------- */
const eventsData = [
  {
    id: 1,
    icon: Briefcase,
    title: "Corporate Meets",
    description:
      "Professional meeting spaces equipped with modern amenities for productive business discussions.",
    images: [
      "/events/DSC_5454.jpg",
      "/events/IMG_5205.jpg",
      "/events/WhatsApp Image 2025-11-08 at 23.23.16_f8e1348e.jpg",
    ],
  },
  {
    id: 2,
    icon: Users,
    title: "Business Meetings & Gatherings",
    description:
      "Elegant spaces designed for team meetings, workshops, and collaborative sessions.",
    images: [
      "/events/WhatsApp Image 2025-11-08 at 23.23.16_6d2a0eff.jpg",
      "/events/DSC_0337.jpg",
      "/events/DSC_0714.jpg",
    ],
  },
  {
    id: 3,
    icon: Utensils,
    title: "Business Dinners",
    description:
      "Sophisticated dining atmosphere perfect for client dinners and networking events.",
    images: ["/events/VAR02557.jpg", "/events/DSC_0414.jpg", "/events/DSC_0335.jpg"],
  },
];

/* ----------------------------- Event Card ----------------------------- */
const EventCard = ({ event, index }: { event: typeof eventsData[0]; index: number }) => {
  const Icon = event.icon;
  const { currentIndex } = useAutoSlide(event.images.length, 4000);

<<<<<<< HEAD
=======
  // ⬇️ GA track: event card viewed
  useEffect(() => {
    gtagEvent("view_event_card", {
      event_id: event.id,
      event_title: event.title,
    });
  }, []);

>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-black"
    >
      <div className="relative h-60 max-[375px]:h-52 sm:h-72 md:h-80 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={event.images[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <motion.img
              src={event.images[currentIndex]}
              alt={event.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="absolute top-3 sm:top-5 right-3 sm:right-5 w-10 max-[375px]:w-9 h-10 max-[375px]:h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f44545] to-[#265999] flex items-center justify-center shadow-lg"
        >
          <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6 text-white backdrop-blur-[1px]">
          <h3 className="text-base sm:text-2xl font-semibold mb-1 sm:mb-2 drop-shadow-md">
            {event.title}
          </h3>
          <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed">
            {event.description}
          </p>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 via-transparent to-white/10 mix-blend-overlay" />
      </div>
    </motion.div>
  );
};

/* ----------------------------- Hero Video ----------------------------- */
const HeroVideoSection = () => {
  const mediaItems = useMemo(
    () => [
<<<<<<< HEAD
      {
        type: "video",
        src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762596879/hero_gauoit.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762695135/1_lxvgz5.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762705465/2_mp4_mjp7w2.mp4",
      },
=======
      { type: "video", src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762596879/hero_gauoit.mp4" },
      { type: "video", src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762695135/1_lxvgz5.mp4" },
      { type: "video", src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762705465/2_mp4_mjp7w2.mp4" },
>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
    ],
    []
  );

  const { currentIndex, goToSlide } = useAutoSlide(mediaItems.length, 8000);

<<<<<<< HEAD
=======
  // ⬇️ GA track: slide changed
  useEffect(() => {
    gtagEvent("event_video_slide_change", {
      slide_index: currentIndex,
      video_source: mediaItems[currentIndex].src,
    });
  }, [currentIndex]);

>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
  return (
    <div className="relative min-h-[55vh] max-[375px]:min-h-[50vh] sm:min-h-[70vh] lg:min-h-[80vh] overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <video
            src={mediaItems[currentIndex].src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0b1529]/90" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4 max-[375px]:px-3 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl sm:max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6">
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            <span className="text-[11px] sm:text-sm md:text-base font-medium text-white">
              Perfect spaces for meetings, dinners & gatherings.
            </span>
          </div>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-bold mb-3 sm:mb-6 text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)] leading-tight">
            Events & Gatherings
          </h2>
        </motion.div>
      </div>

      <div className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-3 z-10">
        {mediaItems.map((_, index) => (
          <motion.button
            key={index}
            animate={{
              width: index === currentIndex ? 28 : 10,
              opacity: index === currentIndex ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
            className="h-1.5 sm:h-1.5 bg-white/90 rounded-full hover:opacity-100 transition-opacity"
<<<<<<< HEAD
            onClick={() => goToSlide(index)}
=======

            // ⬇️ GA track: dot click
            onClick={() => {
              gtagEvent("event_video_dot_clicked", { dot_index: index });
              goToSlide(index);
            }}
>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
          />
        ))}
      </div>
    </div>
  );
};

/* ----------------------------- Main Section ----------------------------- */
const EventsSection = () => {
<<<<<<< HEAD
  const handleScrollToContact = () => {
=======

  // ⬇️ GA track: Events section viewed
  useEffect(() => {
    gtagEvent("view_events_section", { page: "Events Section" });
  }, []);

  const handleScrollToContact = () => {
    
    // ⬇️ GA track: user clicked Get Quotation
    gtagEvent("click_get_quotation", { action: "scroll_to_contact" });

>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1529] via-[#12233b] to-[#f5f8ff]">
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(244,69,69,0.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(38,89,153,0.08), transparent 40%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <HeroVideoSection />

      <div className="py-14 max-[375px]:py-10 sm:py-20 md:py-24 px-4 max-[375px]:px-3 sm:px-6 md:px-10 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h3 className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent mb-3 sm:mb-4">
              Choose Your Event Space
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Spaces curated for success — whether you’re hosting formal meetings,
              business dinners, or networking events.
            </p>
          </motion.div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6 sm:gap-10 mb-16">
            {eventsData.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <Button
              onClick={handleScrollToContact}
              variant="premium"
              size="xl"
              className="relative px-6 sm:px-8 py-3 sm:py-5 text-sm sm:text-lg rounded-full font-semibold bg-gradient-to-r from-[#f44545] to-[#265999] hover:from-[#265999] hover:to-[#f44545] transition-all duration-500 shadow-lg hover:shadow-2xl min-h-[44px]"
            >
              Get Quotation
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 ml-2 animate-pulse" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
