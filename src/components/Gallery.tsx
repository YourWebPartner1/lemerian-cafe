import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const AUTO_SLIDE_MODE: "pause" | "always" = "pause";
  const SLIDE_INTERVAL = 5000;

  const images = [
  { url: "/gallery/cozy-work-environment.jpg", title: "Cozy Work Environment" },
  { url: "/gallery/modern-interior.jpg", title: "Modern Interior" },
  { url: "/gallery/lemerian-signature-soup.jpg", title: "Lemerian Signature Soup" },
  { url: "/gallery/collaborative-spaces.jpg", title: "Collaborative Spaces" },
  { url: "/gallery/chefs-signature-meal.jpg", title: "Chef’s Signature Meal" },
  { url: "/gallery/productive-workspace.jpg", title: "Productive Workspace" },
  { url: "/gallery/creamy-garlic-pasta.jpg", title: "Creamy Garlic Pasta" },
  { url: "/gallery/community-events.jpg", title: "Community Events" },
  { url: "/gallery/private-meeting-rooms.jpg", title: "Private Meeting Rooms" },
];



  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [isHoveredLightbox, setIsHoveredLightbox] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cardTransforms, setCardTransforms] = useState<Record<number, string>>({});

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : images.length - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "Escape") setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  // Auto slide
  useEffect(() => {
    if (selectedIndex !== null) {
      if (AUTO_SLIDE_MODE === "always" || (AUTO_SLIDE_MODE === "pause" && !isHoveredLightbox)) {
        autoSlideRef.current = setTimeout(() => handleNext(), SLIDE_INTERVAL);
      }
      return () => {
        if (autoSlideRef.current) clearTimeout(autoSlideRef.current);
      };
    }
  }, [selectedIndex, isHoveredLightbox]);

  // Card tilt logic (desktop only)
  const handleCardMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; // disable tilt on mobile
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateMax = 8;
    const rotY = (px - 0.5) * rotateMax * -1;
    const rotX = (py - 0.5) * rotateMax;
    const scale = 1.04;
    const translateX = (px - 0.5) * 4;
    const translateY = (py - 0.5) * 4;

    const transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
    setCardTransforms((prev) => ({ ...prev, [index]: transform }));
    setHoveredIndex(index);

    el.style.setProperty("--highlight-x", `${px * 100}%`);
    el.style.setProperty("--highlight-y", `${py * 100}%`);
    el.style.setProperty("--highlight-intensity", "0.6");
  };

  const handleCardMouseLeave = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    setCardTransforms((prev) => ({
      ...prev,
      [index]: "perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0) scale(1)",
    }));
    setHoveredIndex(null);
    e.currentTarget.style.setProperty("--highlight-intensity", "0");
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-[#fefefe] via-[#eef4fb] to-[#e9f1fb]">
      {/* Background aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[70rem] h-[70rem] blur-3xl rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(246,92,105,0.14), transparent 50%), radial-gradient(circle at 70% 60%, rgba(38,89,153,0.14), transparent 60%)",
          }}
          animate={{ rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
            Experience the Atmosphere
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Step inside our world — where comfort meets creativity and every corner tells a story.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((img, idx) => {
            const transform = cardTransforms[idx] ?? "perspective(1000px) rotateX(0) rotateY(0)";
            const isActive = hoveredIndex === idx;

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500"
                onMouseMove={(e) => handleCardMouseMove(idx, e)}
                onMouseLeave={(e) => handleCardMouseLeave(idx, e)}
                onClick={() => setSelectedIndex(idx)}
                style={{ transform }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay glow */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(100px 60px at var(--highlight-x,50%) var(--highlight-y,50%), rgba(255,255,255,var(--highlight-intensity,0)), transparent 30%)",
                    mixBlendMode: "overlay",
                    opacity: isActive ? 1 : 0,
                  }}
                />

                {/* Title */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full text-white text-xs sm:text-sm font-medium shadow-lg">
                  {img.title}
                </div>

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedIndex(null)}
            onMouseEnter={() => setIsHoveredLightbox(true)}
            onMouseLeave={() => setIsHoveredLightbox(false)}
          >
            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 text-white hover:text-gray-300"
            >
              <X className="w-7 sm:w-8 h-7 sm:h-8" />
            </button>

            {/* Prev / Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 transition"
            >
              <ChevronLeft className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 transition"
            >
              <ChevronRight className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={images[selectedIndex].url}
              initial={{ x: direction > 0 ? 200 : -200, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction < 0 ? 200 : -200, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center max-w-full max-h-[90vh]"
            >
              <img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].title}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
              />
              <p className="mt-3 sm:mt-4 text-white text-base sm:text-lg font-semibold text-center">
                {images[selectedIndex].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
