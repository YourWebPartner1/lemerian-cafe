import { Coffee, Wifi, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optional: Fade-in effect when video is ready
  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("canplay", () => video.classList.add("ready"));
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🎬 Cloudinary Fullscreen Background Video */}
<div className="absolute inset-0 w-full h-full overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
  >
    <source
      src="https://res.cloudinary.com/dfgpwngl5/video/upload/q_auto,f_auto/v1762596879/hero_gauoit.mp4"
      type="video/mp4"
    />
  </video>
</div>


      {/* Gradient & Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.15))",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "brightness(0.7)",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#265999]/20 via-transparent to-[#f44545]/20"
        style={{ transform: `translateY(${scroll * 0.5}px)` }}
      />

      {/* Floating Lights */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-[#f44545] to-[#FFD700] rounded-full blur-3xl opacity-60 animate-pulse" />
      <div
        className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-[#265999] to-[#f44545] rounded-full blur-3xl opacity-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block animate-bounce fade-in-up fade-in-up-1">
          <Coffee className="w-16 h-16 text-[#f44545] mx-auto" />
        </div>

        <h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight fade-in-up fade-in-up-2"
          style={{ textShadow: "0 10px 45px rgba(0,0,0,0.55)" }}
        >
          <span
            className="bg-gradient-to-r from-[#ff5757] via-[#ffd85a] to-[#3b6fdc] bg-clip-text text-transparent"
            style={{
              filter: "drop-shadow(0 6px 25px rgba(0,0,0,0.65))",
              letterSpacing: "-1px",
            }}
          >
            India’s First Working Café
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto fade-in-up fade-in-up-3"
          style={{ textShadow: "0 4px 18px rgba(0,0,0,0.45)" }}
        >
          “Collaborate, create, and connect over premium coffee, high-speed Wi-Fi,
          and delicious food — all under one roof.”
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up fade-in-up-4">
          <button
            onClick={() =>
              document
                .getElementById("packages")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-[#f44545] to-[#265999] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Packages
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-[#f44545] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Features */}
        <div
          className="flex flex-wrap justify-center gap-8 text-white fade-in-up fade-in-up-5"
          style={{ textShadow: "0 4px 18px rgba(0,0,0,0.45)" }}
        >
          <Feature
            icon={<Coffee className="w-6 h-6 text-[#f44545]" />}
            text="Premium Coffee"
          />
          <Feature
            icon={<Wifi className="w-6 h-6 text-[#265999]" />}
            text="High-Speed WiFi"
          />
          <Feature
            icon={<Users className="w-6 h-6 text-[#FFD700]" />}
            text="Community Space"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce fade-in-up fade-in-up-5">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[120px] fill-white"
        >
          <path d="M985.66,83.29C906.67,52,823.78,28.53,743.4,19.49c-82.26-9.35-168.06-3.07-249.9,17.39C408.9,60.76,329.77,97.74,250,109.1c-110.44,15.73-221.18-7.93-330-36.17V0H1200V27.35C1132.19,55.07,1060,98.89,985.66,83.29Z" />
        </svg>
      </div>
    </section>
  );
}

// ✅ Reusable Feature component
interface FeatureProps {
  icon: JSX.Element;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, text }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <span className="font-medium">{text}</span>
  </div>
);
