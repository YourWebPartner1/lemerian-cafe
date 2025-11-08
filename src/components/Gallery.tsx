import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Gallery.tsx
 * - Aurora glow background + tilt + reflection on card hover
 * - Cinematic lightbox with slide/fade + keyboard + auto-play (pause on hover)
 *
 * Place your images in /public and update filenames in `images` array if needed.
 */

export default function Gallery() {
  // ---------- Config ----------
  const AUTO_SLIDE_MODE: "pause" | "always" = "pause"; // "pause" pauses on hover, "always" never pauses
  const SLIDE_INTERVAL = 5000;

  // ---------- Images: update if filenames differ ----------
  const images = [
    { url: "/Cozy Work Environment.jpg", title: "Cozy Work Environment" },
    { url: "/Modern Interior.jpg", title: "Modern Interior" },
    { url: "/Artisan Coffee.jpg", title: "Artisan Coffee" },
    { url: "/Collaborative Spaces.jpg", title: "Collaborative Spaces" },
    { url: "/Premium Beverages.jpg", title: "Premium Beverages" },
    { url: "/Productive Workspace.jpg", title: "Productive Workspace" },
    { url: "/Delicious Pastries.jpg", title: "Delicious Pastries" },
    { url: "/Community Events.jpg", title: "Community Events" },
    { url: "/Private Meeting Rooms.jpg", title: "Private Meeting Rooms" },
  ];

  // ---------- Lightbox / navigation state ----------
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [isHoveredLightbox, setIsHoveredLightbox] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // ---------- Card hover / tilt state ----------
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Store transform strings per card index for smooth rendering
  const [cardTransforms, setCardTransforms] = useState<Record<number, string>>({});

  // ---------- Helpers: prev / next ----------
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

  // ---------- Keyboard navigation ----------
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

  // ---------- Auto-slide when lightbox open ----------
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

  // ---------- Tilt handler for cards ----------
  // computes rotateX / rotateY and highlight offset to simulate light reflection
  const handleCardMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    // rotate ranges
    const rotateMax = 10; // degrees
    const rotY = (px - 0.5) * rotateMax * -1; // invert to match perspective
    const rotX = (py - 0.5) * rotateMax;

    // subtle scale & translation
    const scale = 1.03;
    const translateX = (px - 0.5) * 6;
    const translateY = (py - 0.5) * 6;

    // reflection highlight position (percent)
    const hx = px * 100;
    const hy = py * 100;

    // CSS transform string
    const transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;

    setCardTransforms((prev) => ({ ...prev, [index]: transform }));
    setHoveredIndex(index);

    // store highlight as CSS variables on the element (so pseudo-element can use it)
    // we will set data attributes to read via inline style for background highlight
    el.style.setProperty("--highlight-x", `${hx}%`);
    el.style.setProperty("--highlight-y", `${hy}%`);
    el.style.setProperty("--highlight-intensity", "0.55");
  };

  const handleCardMouseLeave = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    setCardTransforms((prev) => ({ ...prev, [index]: "perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0) scale(1)" }));
    setHoveredIndex(null);

    const el = e.currentTarget;
    el.style.setProperty("--highlight-intensity", "0");
  };

  // ---------- Cinematic lightbox animation variants ----------
  const imageVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.96 }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 300 : -300, opacity: 0, scale: 0.96, transition: { duration: 0.6, ease: "easeInOut" } }),
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#fbfcfe] via-[#eef4fb] to-[#e6eff7]">
      {/* ---------- Aurora Glow Layers ---------- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -top-60 w-[60rem] h-[60rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(246, 92, 105, 0.14), transparent 25%), radial-gradient(circle at 70% 70%, rgba(38, 89, 153, 0.12), transparent 35%)" }}
          animate={{ rotate: [0, 7, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-10%] bottom-[-10%] w-[48rem] h-[48rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at 20% 30%, rgba(255, 197, 80, 0.10), transparent 30%), radial-gradient(circle at 80% 70%, rgba(38, 89, 153, 0.06), transparent 40%)" }}
          animate={{ rotate: [0, -6, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
              Experience the Atmosphere
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Take a visual tour through our inspiring space and creative energy.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => {
            const transform = cardTransforms[idx] ?? "perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0) scale(1)";
            const isActive = hoveredIndex === idx;
            return (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300"
                onMouseMove={(e) => handleCardMouseMove(idx, e)}
                onMouseLeave={(e) => handleCardMouseLeave(idx, e)}
                onClick={() => { setSelectedIndex(idx); setDirection(0); }}
                // CSS variables used by overlay pseudo-effects:
                style={{
                  transformStyle: "preserve-3d",
                  WebkitTransformStyle: "preserve-3d",
                  perspective: 1000,
                  // Slightly lift hovered card
                  translate: isActive ? "0 -4px" : undefined,
                } as any}
              >
                {/* Card wrapper - apply transform */}
                <motion.div
                  animate={{ boxShadow: isActive ? "0 30px 60px rgba(16, 24, 40, 0.18)" : "0 10px 25px rgba(16,24,40,0.08)" }}
                  transition={{ duration: 0.35 }}
                  className="relative bg-gray-50"
                  style={{ transform }}
                >
                  {/* Image */}
                  <img src={img.url} alt={img.title} className="w-full h-72 object-cover block" draggable={false} />

                  {/* glossy highlight overlay (uses CSS vars set on mousemove) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(120px 60px at var(--highlight-x, 50%) var(--highlight-y, 50%), rgba(255,255,255,var(--highlight-intensity, 0.0)), transparent 25%)",
                      mixBlendMode: "overlay",
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.35s ease, background-position 0.04s linear",
                    }}
                  />

                  {/* soft vignette / gradient for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  {/* Title badge bottom-left */}
                  <div className="absolute left-4 bottom-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/55 backdrop-blur text-white text-sm font-medium">{img.title}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------- Cinematic Lightbox ---------- */}
      <AnimatePresence custom={direction}>
        {selectedIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
            onMouseEnter={() => setIsHoveredLightbox(true)}
            onMouseLeave={() => setIsHoveredLightbox(false)}
          >
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              className="absolute top-6 right-6 z-50 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev / Next */}
            <button onClick={handlePrev} className="absolute left-6 z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/80">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={handleNext} className="absolute right-6 z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/80">
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Animated image (slide + fade + scale) */}
            <motion.div
              key={images[selectedIndex].url}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.96 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center"
            >
              <img src={images[selectedIndex].url} alt={images[selectedIndex].title} className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl" />
              <p className="mt-4 text-white text-lg font-medium">{images[selectedIndex].title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
