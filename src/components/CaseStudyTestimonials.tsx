import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

// --- Data remains untouched ---
const videos = [
  {
    src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762785178/TESTIMONIAL_2_h8lrxw.mp4",
    caseStudy: {
      name: "Talha Siddiqui",
      background: "Vice President, Bank of America | Hyderabad",
      objective:
        "Find a professional and comfortable workspace near the office for meetings and focused work.",
      challenge:
        "Limited options with required amenities and ambiance near the Bank of America office.",
      solution:
        "Lemerian Workin Cafe - modern space, excellent coffee, fast internet, and convenient location.",
      result:
        "Increased productivity, successful meetings, and enhanced work experience.",
    },
  },
  {
    src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762792426/WhatsApp_Video_2025-11-10_at_21.38.11_c975a5ff_f6vbhc.mp4",
    caseStudy: {
      name: "Orlando",
      background: "MBA Student from Switzerland",
      objective:
        "Find a productive workspace for Hyderabad project research and studies.",
      challenge:
        "Unfamiliar with Hyderabad's coworking culture and limited time.",
      solution:
        "Lemerian Workin Cafe - flexible plans, fast internet, comfortable ambiance, and collaborative community.",
      result:
        "Successful project completion, enhanced learning experience, and positive impression of Hyderabad.",
    },
  },
  {
    src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762795141/WhatsApp_Video_2025-11-10_at_22.35.45_dee657d6_tojoo9.mp4",
    caseStudy: {
      name: "Astha",
      background: "Professional from London, new to Hyderabad",
      objective:
        "Find a comfortable, modern, and productive workspace outside home.",
      challenge:
        "Unfamiliar with Hyderabad's coworking options and culture.",
      solution:
        "Lemerian Workin Cafe - flexible plans, excellent amenities, and collaborative community.",
      result:
        "Enhanced productivity, new connections, and a smooth transition to Hyderabad life.",
    },
  },
  {
    src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762795150/WhatsApp_Video_2025-11-10_at_22.34.59_e9c41dc2_zoeckj.mp4",
    caseStudy: {
      name: "Yaniv",
      background: "Filmmaker",
      objective:
        "Find a modern and comfortable location with excellent amenities for a podcast shoot.",
      challenge: "Needed a creative and well-equipped setting within city limits.",
      solution:
        "Lemerian Workin Cafe - spacious, quiet, and visually modern environment ideal for recording.",
      result:
        "Successful podcast video shoot with high-quality footage and happy clients.",
    },
  },
  {
    src: "https://res.cloudinary.com/dfgpwngl5/video/upload/v1762785202/WhatsApp_Video_2025-11-09_at_20.53.07_10d59cbd_r7amw0.mp4",
    caseStudy: {
      name: "Justin & Devi",
      background: "Foodies and Remote Workers",
      objective:
        "Find a cafe with delicious food and fast Wi-Fi for work and relaxation.",
      challenge: "Most cafes lack either good food or reliable internet.",
      solution:
        "Lemerian Workin Cafe - excellent food options and lightning-fast Wi-Fi.",
      result: "Favorite hangout spot for work, food, and leisure time.",
    },
  },
];

export default function CaseStudyTestimonials() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.45 });

  useEffect(() => setIsVisible(inView), [inView]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  // 🔄 Auto next video after ending (Auto-slide feature)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handleEnd = () => {
      setDirection(1);
      setTimeout(() => setCurrent((c) => (c + 1) % videos.length), 500);
    };
    v.addEventListener("ended", handleEnd);
    return () => v.removeEventListener("ended", handleEnd);
  }, [current]);

  // --- Other existing hooks (timeupdate, visibility, reset, sound) ---
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const update = () =>
      setProgress((v.currentTime / Math.max(v.duration || 1, 1)) * 100);
    v.addEventListener("timeupdate", update);
    return () => v.removeEventListener("timeupdate", update);
  }, [current]);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isVisible) {
      v.muted = !soundEnabled;
      v.play().catch(() => {});
      setShowText(true);
    } else {
      v.pause();
    }
  }, [isVisible, current, soundEnabled]);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = !soundEnabled;
    v.play().catch(() => {});
    setShowText(true);
    setProgress(0);
  }, [current, soundEnabled]);
  useEffect(() => {
    const enableSound = () => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = false;
      setSoundEnabled(true);
      v.play().catch(() => {});
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);
    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
  }, []);
  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const currentTime = v.currentTime;
    const wasPlaying = !v.paused;
    v.muted = !v.muted;
    setSoundEnabled(!v.muted);
    if (wasPlaying) {
      v.currentTime = currentTime;
      v.play().catch(() => {});
    }
  };
  const changeVideo = (index: number, dir: number) => {
    setDirection(dir);
    setShowText(false);
    setTimeout(() => {
      setCurrent(index);
      const v = videoRef.current;
      if (v) {
        v.currentTime = 0;
        v.muted = !soundEnabled;
        v.play().catch(() => {});
      }
      setShowText(true);
      setProgress(0);
    }, 250);
  };
  const next = () => changeVideo((current + 1) % videos.length, 1);
  const prev = () =>
    changeVideo(current === 0 ? videos.length - 1 : current - 1, -1);
  // --- End of hooks ---
  
  // Variants for staggered text animation (Kept)
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  // Helper to format the current slide number
  const formattedCurrent = String(current + 1).padStart(2, '0');
  const totalSlides = String(videos.length).padStart(2, '0');

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-20 text-center"
    >
      {/* ORIGINAL GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0 bg-[length:300%_300%] animate-gradientGlow"
        style={{
          backgroundImage:
            "linear-gradient(135deg,#fff8f6 0%,#fff2ee 25%,#fff8f8 50%,#fff2f0 75%,#fffaf9 100%)",
        }}
      />
      
      {/* INTERACTIVE MOUSE SPOTLIGHT */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 230, 230, 0.4), transparent 80%)`,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* FLOATING BOKEH ORBS (Kept) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-300/50 rounded-full blur-3xl z-[1] pointer-events-none"
        animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl z-[1] pointer-events-none"
        animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
        transition={{ duration: 35, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 5 }}
      />

      {/* INTERACTIVE FLOATING FLOWERS (Kept) */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 1.5, type: "spring", stiffness: 50 }}
        className="absolute top-10 left-10 z-0 hidden lg:block animate-float"
        whileHover={{ scale: 1.1, rotate: -5 }}
      >
        <FlowerCluster className="w-40 h-40 text-pink-300 transform -rotate-12" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 1.5, type: "spring", stiffness: 50 }}
        className="absolute top-20 right-20 z-0 hidden md:block animate-float"
        style={{ animationDelay: '1s' }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <SingleFlower className="w-24 h-24 text-red-300 transform rotate-45" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 1.1, duration: 1.5, type: "spring", stiffness: 50 }}
        className="absolute bottom-10 right-10 z-0 hidden lg:block animate-float"
        style={{ animationDelay: '2s' }}
        whileHover={{ scale: 1.1, rotate: 3 }}
      >
        <FlowerCluster className="w-36 h-36 text-yellow-300 transform rotate-12" />
      </motion.div>
      
      {/* HEADING WITH GLOW (Kept) */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 text-5xl font-extrabold mb-10 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent animate-textGlow
                   [text-shadow:0_4px_16px_rgba(255,100,150,0.3)]"
      >
        Voices of Our Guests
      </motion.h2>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-10">

        {/* WORD-BY-WORD TEXT ANIMATION (Kept) */}
        <AnimatePresence mode="wait">
          {showText && (
            <motion.div
              key={current}
              className="mb-4 relative z-10 text-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={textContainerVariants}
            >
              <motion.p
                className="text-sm font-medium text-pink-600/80 uppercase tracking-widest"
                variants={wordVariants}
              >
                Now Featuring
              </motion.p>
              <motion.h3
                className="text-3xl font-bold text-gray-800 tracking-tight"
                variants={textContainerVariants}
              >
                {videos[current].caseStudy.name.split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
                    {word}
                  </motion.span>
                ))}
              </motion.h3>
              <motion.p
                className="text-md text-gray-500 italic"
                variants={textContainerVariants}
              >
                {videos[current].caseStudy.background.split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Section */}
        <div className="relative w-[90%] max-w-[950px] h-[550px] md:h-[420px] rounded-[2rem] overflow-hidden border border-pink-100 bg-white/50 backdrop-blur-md shadow-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.video
              key={current}
              ref={videoRef}
              src={videos[current].src}
              playsInline
              muted={!soundEnabled}
              loop={false}
              autoPlay
              className="w-full h-full object-contain bg-gradient-to-r from-[#fff5f2] via-[#ffe8e2] to-[#fff5f2]"
              initial={{
                x: direction > 0 ? "60%" : "-60%", opacity: 0, scale: 0.98,
              }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction > 0 ? "-40%" : "40%", opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* 🎯 NEW: SLIDE COUNTER */}
          <motion.div
            key={current}
            className="absolute top-5 left-5 px-3 py-1 rounded-full text-sm font-bold text-pink-600 
                       bg-white/60 backdrop-blur-lg shadow-md shadow-pink-200/50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {formattedCurrent} / {totalSlides}
          </motion.div>


          {/* PULSING ARROWS & Buttons (Kept) */}
          <button
            onClick={toggleSound}
            className="absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-white/60 backdrop-blur-lg shadow-lg shadow-pink-200/50
                       hover:bg-white/80 hover:shadow-xl hover:shadow-pink-300/50 transition-all"
          >
            {soundEnabled ? (
              <><VolumeX className="text-pink-500" /> <span className="text-sm font-semibold text-pink-600">Mute</span></>
            ) : (
              <><Volume2 className="text-pink-500" /> <span className="text-sm font-semibold text-pink-600">Unmute</span></>
            )}
          </button>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full 
                       bg-white/50 backdrop-blur-lg shadow-lg shadow-pink-200/50
                       hover:bg-white/70 hover:shadow-xl hover:shadow-pink-300/50 transition-all
                       animate-pulse-arrow"
          >
            <ChevronLeft className="w-6 h-6 text-pink-500" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full 
                       bg-white/50 backdrop-blur-lg shadow-lg shadow-pink-200/50
                       hover:bg-white/70 hover:shadow-xl hover:shadow-pink-300/50 transition-all
                       animate-pulse-arrow"
          >
            <ChevronRight className="w-6 h-6 text-pink-500" />
          </button>

          {/* Progress Bar (Untouched) */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-100">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* INDICATOR DOTS (Kept) */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {videos.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => changeVideo(index, index > current ? 1 : -1)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all 
                           ${ index === current
                               ? "bg-pink-600 shadow-md"
                               : "bg-white/80 backdrop-blur-sm border border-pink-200"
                           }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Case Study with Breathing Shadow (Kept) */}
        <AnimatePresence mode="wait">
          {showText && (
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-[950px] bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-pink-100 text-left 
                relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:p-[2px] 
                before:bg-gradient-to-r before:from-pink-300 before:to-orange-200 before:z-[-1] before:opacity-50
                animate-pulse-shadow-card"
            >
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Case Study
              </h3>
              <div className="h-[2px] w-24 bg-gradient-to-r from-pink-400 to-yellow-300 mb-4 rounded-full" />
              {Object.entries(videos[current].caseStudy).map(([k, v], i) => (
                <motion.p
                  key={k}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-gray-800 mb-2 leading-relaxed"
                >
                  <strong className="text-pink-500">
                    {k.charAt(0).toUpperCase() + k.slice(1)}:
                  </strong>{" "}
                  {v}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- ALL ANIMATIONS IN THE STYLE BLOCK --- */}
      <style>{`
        /* Original Gradient Animation */
        @keyframes gradientGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientGlow {
          animation: gradientGlow 20s ease-in-out infinite alternate;
        }

        /* Flower Floating Animation */
        @keyframes float {
            0% { transform: translateY(0px) rotate(-12deg); }
            50% { transform: translateY(-20px) rotate(-10deg); }
            100% { transform: translateY(0px) rotate(-12deg); }
        }
        .animate-float {
            animation: float 8s ease-in-out infinite;
        }

        /* Arrow Pulsing Animation */
        @keyframes pulse-arrow {
            0%, 100% {
                transform: translateY(-50%) scale(1);
                opacity: 0.7;
            }
            50% {
                transform: translateY(-50%) scale(1.1);
                opacity: 1;
            }
        }
        .animate-pulse-arrow {
            transform: translateY(-50%);
            animation: pulse-arrow 2.5s ease-in-out infinite;
        }

        /* Case Study Card Breathing Shadow Animation */
        @keyframes pulse-shadow-card {
            0%, 100% {
                box-shadow: 0 5px 15px 0 rgba(236, 72, 153, 0.1);
            }
            50% {
                box-shadow: 0 10px 30px 0 rgba(236, 72, 153, 0.25);
            }
        }
        .animate-pulse-shadow-card {
            animation: pulse-shadow-card 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// --- SVG COMPONENTS FOR FLOWERS (Untouched) ---
const SingleFlower = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="15" fill="currentColor" />
    <circle cx="50" cy="20" r="12" fill="currentColor" opacity="0.8" />
    <circle cx="75" cy="35" r="12" fill="currentColor" opacity="0.8" />
    <circle cx="80" cy="65" r="12" fill="currentColor" opacity="0.8" />
    <circle cx="50" cy="80" r="12" fill="currentColor" opacity="0.8" />
    <circle cx="25" cy="65" r="12" fill="currentColor" opacity="0.8" />
    <circle cx="20" cy="35" r="12" fill="currentColor" opacity="0.8" />
  </svg>
);

const FlowerCluster = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(100, 100) scale(0.7)">
      <SingleFlower />
    </g>
    <g transform="translate(30, 40) scale(0.4) rotate(20)">
      <SingleFlower className="opacity-70" />
    </g>
    <g transform="translate(160, 60) scale(0.35) rotate(-40)">
      <SingleFlower className="opacity-60" />
    </g>
    <g transform="translate(70, 170) scale(0.3) rotate(80)">
      <SingleFlower className="opacity-80" />
    </g>
  </svg>
);