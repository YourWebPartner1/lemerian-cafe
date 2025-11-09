import { Coffee, Wifi, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [scroll, setScroll] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("canplay", () => video.classList.add("ready"));
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[70vh] sm:min-h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* 🎬 Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 brightness-[0.75]"
        >
          <source
            src="https://res.cloudinary.com/dfgpwngl5/video/upload/q_auto,f_auto/v1762596879/hero_gauoit.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#265999]/25 via-transparent to-[#f44545]/25"
        style={{ transform: `translateY(${scroll * 0.3}px)` }}
      />

      {/* Floating Lights */}
      <motion.div
        className="absolute top-16 right-6 sm:right-10 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#f44545] to-[#FFD700] rounded-full blur-3xl opacity-40 sm:opacity-50"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-10 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#265999] to-[#f44545] rounded-full blur-3xl opacity-30 sm:opacity-40"
        animate={{ y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Text */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          style={{ textShadow: "0 8px 40px rgba(0,0,0,0.7)" }}
        >
          <span className="bg-gradient-to-r from-[#f44545] via-[#ffd85a] to-[#265999] bg-clip-text text-transparent drop-shadow-2xl">
            India’s First Working Café
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-100 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ textShadow: "0 4px 25px rgba(0,0,0,0.45)" }}
        >
          Collaborate, create, and connect over premium coffee, high-speed Wi-Fi, and delicious food — all under one roof.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16"
        >
          <button
            onClick={() => scrollToSection("packages")}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-gradient-to-r from-[#f44545] to-[#265999] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore Packages
          </button>

          <button
            onClick={() => {
              scrollToSection("contact");
              setIsClicked(true);
              setTimeout(() => setIsClicked(false), 600);
            }}
            className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 ${
              isClicked
                ? "bg-gradient-to-r from-[#265999] to-[#FFD700]"
                : "bg-gradient-to-r from-[#f44545] to-[#265999]"
            }`}
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white"
        >
          <Feature
            icon={<Coffee className="w-5 sm:w-6 h-5 sm:h-6 text-[#f44545]" />}
            text="Premium Coffee"
          />
          <Feature
            icon={<Wifi className="w-5 sm:w-6 h-5 sm:h-6 text-[#265999]" />}
            text="High-Speed WiFi"
          />
          <Feature
            icon={<Users className="w-5 sm:w-6 h-5 sm:h-6 text-[#FFD700]" />}
            text="Community Space"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 sm:w-8 h-10 sm:h-14 border-2 border-white/60 rounded-full flex items-start justify-center p-1 sm:p-2 backdrop-blur-sm bg-white/5">
          <div className="w-1 h-3 sm:w-1.5 sm:h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </motion.div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] sm:h-[100px] md:h-[120px] fill-[#fff]"
        >
          <path d="M985.66,83.29C906.67,52,823.78,28.53,743.4,19.49c-82.26-9.35-168.06-3.07-249.9,17.39C408.9,60.76,329.77,97.74,250,109.1c-110.44,15.73-221.18-7.93-330-36.17V0H1200V27.35C1132.19,55.07,1060,98.89,985.66,83.29Z" />
        </svg>
      </div>
    </section>
  );
}

// ✅ Feature component with subtle glow
interface FeatureProps {
  icon: JSX.Element;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.3 }}
    className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 hover:border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all"
  >
    {icon}
    <span className="font-medium text-xs sm:text-sm md:text-base">{text}</span>
  </motion.div>
);
