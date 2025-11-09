import { motion } from "framer-motion";
import { Briefcase, Users, Utensils, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";

// ---------- Event Data ----------
const eventsData = [
  {
    id: 1,
    icon: Briefcase,
    title: "Corporate Meets",
    description:
      "Professional meeting spaces equipped with modern amenities for productive business discussions.",
    images: ["/about/DSC_5454.jpg", "/about/IMG_5205.jpg", "/about/WhatsApp Image 2025-11-08 at 23.23.16_f8e1348e.jpg"],
  },
  {
    id: 2,
    icon: Users,
    title: "Business Meetings & Gatherings",
    description:
      "Elegant spaces designed for team meetings, workshops, and collaborative sessions.",
    images: ["/about/WhatsApp Image 2025-11-08 at 23.23.16_6d2a0eff.jpg", "/about/DSC_0337.jpg", "/about/DSC_0714.jpg"],
  },
  {
    id: 3,
    icon: Utensils,
    title: "Business Dinners",
    description:
      "Sophisticated dining atmosphere perfect for client dinners and networking events.",
    images: ["/about/VAR02557.jpg", "/about/DSC_0414.jpg", "/about/DSC_0335.jpg"],
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
      className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-black"
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
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>
        ))}

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="absolute top-5 right-5 w-14 h-14 rounded-full bg-gradient-to-br from-[#f44545] to-[#265999] flex items-center justify-center shadow-lg"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white backdrop-blur-[1px]">
          <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">{event.title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed">{event.description}</p>
        </div>

        {/* Light reflection on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 via-transparent to-white/10 mix-blend-overlay" />
      </div>
    </motion.div>
  );
};

// ---------- Hero Video Section ----------
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
    return () => clearInterval(interval);
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
              className="w-full h-full object-cover brightness-[0.9]"
            />
          ) : (
            <img src={media.src} alt="" className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0b1529]/90" />
        </motion.div>
      ))}

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
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

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
            Events & Gatherings
          </h2>
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {mediaItems.map((_, index) => (
          <motion.button
            key={index}
            animate={{
              width: index === currentMediaIndex ? 36 : 10,
              opacity: index === currentMediaIndex ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
            className="h-1.5 bg-white/90 rounded-full hover:opacity-100 transition-opacity"
            onClick={() => setCurrentMediaIndex(index)}
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1529] via-[#12233b] to-[#f5f8ff]">
      {/* Subtle background aurora */}
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

      <div className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent mb-4">
              Choose Your Event Space
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Spaces curated for success — whether you’re hosting formal meetings, business dinners, or networking events.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
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
              className="relative px-8 py-5 text-lg rounded-full font-semibold bg-gradient-to-r from-[#f44545] to-[#265999] hover:from-[#265999] hover:to-[#f44545] transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              Get Quotation
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
