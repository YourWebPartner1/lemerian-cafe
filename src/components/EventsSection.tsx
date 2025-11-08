import { motion } from "framer-motion";
import { Briefcase, Users, Utensils, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";

// ---------- Events Array ----------
const eventsData = [
  {
    id: 1,
    icon: Briefcase,
    title: "Corporate Meets",
    description:
      "Professional meeting spaces equipped with modern amenities for productive business discussions.",
    images: [
      "/about/DSC_5454.jpg",
      "/about/IMG_5205.jpg",
      "/about/WhatsApp Image 2025-11-08 at 23.23.16_f8e1348e.jpg",
    ],
  },
  {
    id: 2,
    icon: Users,
    title: "Business Meetings & Gatherings",
    description:
      "Elegant spaces designed for team meetings, workshops, and collaborative sessions.",
    images: [
      "/about/WhatsApp Image 2025-11-08 at 23.23.16_6d2a0eff.jpg",
      "/about/DSC_0337.jpg",
      "/about/DSC_0714.jpg",
    ],
  },
  {
    id: 3,
    icon: Utensils,
    title: "Business Dinners",
    description:
      "Sophisticated dining atmosphere perfect for client dinners and networking events.",
    images: [
      "/about/VAR02557.jpg",
      "/about/DSC_0414.jpg",
      "/about/DSC_0335.jpg",
    ],
  },
];

// ---------- Event Card ----------
const EventCard = ({ event, index }: { event: typeof eventsData[0]; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Icon = event.icon;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [event.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-black"
    >
      <div className="relative h-80 overflow-hidden">
        {event.images.map((image, imgIndex) => (
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: imgIndex === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <motion.img
              src={image}
              alt={event.title}
              loading="lazy"
              onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </motion.div>
        ))}

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="absolute top-5 right-5 w-14 h-14 rounded-full bg-gradient-to-br from-event-red to-event-blue flex items-center justify-center shadow-lg"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ---------- Hero Video Slideshow ----------
const HeroVideoSection = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const mediaItems = useMemo(
    () => [
      {
        type: "video",
        src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762596879/hero_gauoit.mp4",
        poster: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920",
      },
      {
        type: "video",
        src: "https://assets.mixkit.co/videos/preview/mixkit-colleagues-working-in-a-corporate-office-4905-large.mp4",
        poster: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920",
      },
      {
        type: "video",
        src: "https://assets.mixkit.co/videos/preview/mixkit-elegant-restaurant-with-people-eating-4254-large.mp4",
        poster: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920",
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 8000);

    const handleVisibilityChange = () => {
      if (document.hidden) clearInterval(interval);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [mediaItems.length]);

  return (
    <div className="relative h-[65vh] md:h-[75vh] overflow-hidden bg-black">
      {mediaItems.map((media, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentMediaIndex ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {media.type === "video" ? (
            <video
              src={media.src}
              poster={media.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={media.src}
              alt={`Event showcase ${index + 1}`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-event-accent/95" />
        </motion.div>
      ))}

      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-sm md:text-base font-medium text-white">
              Perfect spaces for meetings, dinners, and professional gatherings.
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            Events & Gatherings
          </h2>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {mediaItems.map((_, index) => (
          <motion.button
            key={index}
            animate={{
              width: index === currentMediaIndex ? 40 : 10,
              opacity: index === currentMediaIndex ? 1 : 0.4,
            }}
            transition={{ duration: 0.5 }}
            className="h-1.5 bg-white/90 rounded-full hover:opacity-100 transition-opacity"
            onClick={() => setCurrentMediaIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ---------- Main Section ----------
const EventsSection = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-event-accent">
      <HeroVideoSection />
      <div className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {eventsData.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center pt-8"
          >
            <Button
              onClick={handleScrollToContact}
              variant="premium"
              size="xl"
              className="shadow-[var(--shadow-elegant)] hover:shadow-2xl hover:shadow-event-red/20 group relative overflow-hidden"
            >
              <span className="relative z-10">Get Quotation</span>
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-event-blue to-event-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
