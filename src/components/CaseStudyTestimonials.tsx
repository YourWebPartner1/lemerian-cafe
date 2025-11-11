import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

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

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.45 });

  useEffect(() => setIsVisible(inView), [inView]);

  // Progress bar update
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const update = () =>
      setProgress((v.currentTime / Math.max(v.duration || 1, 1)) * 100);
    v.addEventListener("timeupdate", update);
    return () => v.removeEventListener("timeupdate", update);
  }, [current]);

  // Move to next video automatically when one ends
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnd = () => {
      setDirection(1);
      setTimeout(() => setCurrent((c) => (c + 1) % videos.length), 400);
    };
    v.addEventListener("ended", onEnd);
    return () => v.removeEventListener("ended", onEnd);
  }, [current]);

  // Auto play when section visible
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

  // Reset + auto play when changing video
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = !soundEnabled;
    v.play().catch(() => {});
    setShowText(true);
    setProgress(0);
  }, [current, soundEnabled]);

  // Enable sound after first click
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

  // ✅ FIXED: Toggle mute/unmute seamlessly without restart
  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const currentTime = v.currentTime;
    const wasPaused = v.paused;

    // Toggle mute only
    v.muted = !v.muted;
    setSoundEnabled(!v.muted);

    // Continue from same timestamp
    v.currentTime = currentTime;
    if (!wasPaused) {
      v.play().catch(() => {});
    }
  };

  // Next/Prev videos
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
    }, 200);
  };

  const next = () => changeVideo((current + 1) % videos.length, 1);
  const prev = () =>
    changeVideo(current === 0 ? videos.length - 1 : current - 1, -1);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 text-center">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-[length:300%_300%] animate-gradientGlow"
        style={{
          backgroundImage:
            "linear-gradient(135deg,#fff8f6 0%,#fff2ee 25%,#fff8f8 50%,#fff2f0 75%,#fffaf9 100%)",
        }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 text-5xl font-extrabold mb-10 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent animate-textGlow"
      >
        Voices of Our Guests
      </motion.h2>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-10">
        {/* Video Box */}
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
                x: direction > 0 ? "60%" : "-60%",
                opacity: 0,
                scale: 0.98,
              }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction > 0 ? "-40%" : "40%", opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Mute Button */}
          <button
            onClick={toggleSound}
            className="absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md shadow-md hover:bg-white transition"
          >
            {soundEnabled ? (
              <>
                <VolumeX className="text-pink-500" />
                <span className="text-sm font-semibold text-pink-600">Mute</span>
              </>
            ) : (
              <>
                <Volume2 className="text-pink-500" />
                <span className="text-sm font-semibold text-pink-600">Unmute</span>
              </>
            )}
          </button>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/60 backdrop-blur-md hover:bg-white/80 transition"
          >
            <ChevronLeft className="w-6 h-6 text-pink-500" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/60 backdrop-blur-md hover:bg-white/80 transition"
          >
            <ChevronRight className="w-6 h-6 text-pink-500" />
          </button>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-100">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Case Study */}
        <AnimatePresence mode="wait">
          {showText && (
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-[950px] bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-pink-100 shadow-lg text-left"
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

      <style>{`
        @keyframes gradientGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientGlow {
          animation: gradientGlow 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
