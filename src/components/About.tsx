import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Briefcase, Heart, Zap } from "lucide-react";
import VisionSection from "@/components/VisionSection";

<<<<<<< HEAD
=======
// ⬇️ Google Analytics Event Import
import { gtagEvent } from "../main";

>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  { icon: Coffee, title: "Premium Coffee", description: "Artisan brews to fuel your creativity" },
  { icon: Briefcase, title: "Work-Ready Space", description: "High-speed WiFi and comfortable seating" },
  { icon: Heart, title: "Community Vibes", description: "Connect with like-minded innovators" },
  { icon: Zap, title: "Energizing Atmosphere", description: "An environment designed for productivity" },
];

const PARTICLE_COUNT = 18;

const About: React.FC = () => {
  const [particles, setParticles] = useState<
    { left: number; topStart: number; topEnd: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
<<<<<<< HEAD
=======
    // ⬇️ GA Event for Page View
    gtagEvent("view_about_section", {
      page: "About Section Viewed",
    });

>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
    const arr = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      left: Math.random() * 100,
      topStart: 100 + Math.random() * 40,
      topEnd: -20 - Math.random() * 40,
      delay: Math.random() * 6,
      duration: 12 + Math.random() * 12,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF7F0] via-[#FFEFE3] to-[#FFF8F5]">
      {/* Floating Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-lemerian-amber/20 rounded-full"
            style={{ left: `${p.left}%` }}
            initial={{ y: `${p.topStart}vh`, opacity: 0.25 }}
            animate={{ y: `${p.topEnd}vh`, opacity: [0.25, 0.6, 0.25] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-16 left-6 md:left-10 w-48 md:w-80 h-48 md:h-80 bg-lemerian-peach/40 rounded-full blur-3xl float -z-10" />
        <div className="absolute bottom-28 right-6 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-lemerian-amber/20 rounded-full blur-3xl float -z-10" />
        <div className="absolute top-48 right-16 hidden md:block w-60 h-60 bg-lemerian-blue/10 rounded-full blur-3xl float -z-10" />

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold shimmer leading-tight"
          >
            <span className="block">Where Coffee Meets</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Productivity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground font-light tracking-wide"
          >
            A space designed for thinkers
          </motion.p>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="bg-white/90 backdrop-blur-md border border-[#f8d9b5]/60 rounded-2xl md:rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5 text-gray-800 text-sm sm:text-base leading-relaxed"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#f44545]">Ever Felt Like This?</p>
            <p>You walk into a café, ready to work. But then:</p>

            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Staff ask for orders every 30 minutes.</li>
              <li>You're pressured to keep buying.</li>
              <li>Chatter and noise distract you.</li>
            </ul>

            <p className="font-semibold text-[#F28A00] mt-2">We Felt That Way Too...</p>
            <p>
              That’s why we created{" "}
              <span className="font-bold text-[#f44545]">Lemerian Workin Café</span> — a place that offers:
            </p>

            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Zero distractions</li>
              <li>No purchase pressure</li>
              <li>Cozy ambiance</li>
              <li>Amazing food options</li>
            </ul>

            <div className="space-y-2 pt-3">
              <p className="text-base md:text-lg font-semibold text-[#265999]">
                Your Workspace, Elevated.
              </p>
              <p className="text-gray-700">
                Fueling India's growth — our humble contribution to providing workspaces for Indians to thrive.
              </p>
              <p className="font-medium text-gray-900">
                We welcome everyone who needs a distraction-free workspace to come and be productive!
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
<<<<<<< HEAD
=======

              // ⬇️ GA EVENT for Button Click
              onClick={() =>
                gtagEvent("click_about_discover", {
                  section: "about",
                  action: "Discover Our Space Clicked",
                })
              }

>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
              className="mt-3 sm:mt-4 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#FF5E8E] to-[#FF8A00] shadow-md hover:shadow-xl transition-all"
            >
              Discover Our Space
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35 }}
          className="relative w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0"
        >
          <img
            src="/about/about.jpeg"
            alt="Lemerian Workin Café Workspace"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl object-cover shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl" />
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#F28A00]">
              Why Choose Lemerian?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Everything you need to turn ideas into reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -6, boxShadow: "0 16px 40px -12px rgba(0,0,0,0.12)" }}
                  className="bg-white/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#F5CDA3] transition-all duration-300"
                >
                  <Icon className="w-10 h-10 mb-3 text-[#F28A00]" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <div className="relative z-10 py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <VisionSection />
      </div>
    </div>
  );
};

export default About;
