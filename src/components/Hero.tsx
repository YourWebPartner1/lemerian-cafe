"use client";
import { Coffee, Wifi, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${scroll * 0.2}px)`,
          transition: "transform 0.1s linear",
        }}
        onError={(e) => console.error("🎬 Video failed to load:", e)}
      >
        {/* ✅ GitHub Pages Safe Path */}
        <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
        {/* fallback if video fails */}
        <img
          src={`${import.meta.env.BASE_URL}hero.jpeg`}
          alt="Cafe background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Overlay for readability */}
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#f44545]/20 via-transparent to-[#265999]/20 pointer-events-none"></div>

      {/* ✨ Glow Orbs */}
      <div className="absolute top-32 right-32 w-24 h-24 bg-[#f44545]/60 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-40 left-24 w-28 h-28 bg-[#265999]/60 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* 🌟 Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <Coffee className="w-16 h-16 text-[#f44545] mx-auto mb-6 animate-bounce" />
        <h1
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
          style={{ textShadow: "0 8px 30px rgba(0,0,0,0.7)" }}
        >
          <span className="bg-gradient-to-r from-[#ff5757] via-[#ffd85a] to-[#3b6fdc] bg-clip-text text-transparent">
            Sip. Work. Connect.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white font-light opacity-95">
          A perfect blend of coffee and creativity
        </p>
        <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto mb-12">
          Where productivity meets comfort in an inspiring atmosphere.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() =>
              document
                .getElementById("packages")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-[#f44545] to-[#265999] text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore Packages
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 transition-transform duration-300 hover:border-[#f44545] hover:shadow-xl hover:scale-105"
          >
            Get in Touch
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 text-white text-lg opacity-95">
          <div className="flex items-center space-x-2">
            <Coffee className="w-6 h-6 text-[#f44545]" />
            <span>Premium Coffee</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wifi className="w-6 h-6 text-[#265999]" />
            <span>High-Speed WiFi</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-[#ffd85a]" />
            <span>Community Space</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-80">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Wave Divider */}
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
