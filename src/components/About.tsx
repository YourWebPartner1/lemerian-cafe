import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Briefcase, Heart, Zap } from "lucide-react";
import VisionSection from "@/components/VisionSection";
import about from "@/assets/about/about.jpeg"; // ensure this path is correct

type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: Coffee,
    title: "Premium Coffee",
    description: "Artisan brews to fuel your creativity",
  },
  {
    icon: Briefcase,
    title: "Work-Ready Space",
    description: "High-speed WiFi and comfortable seating",
  },
  {
    icon: Heart,
    title: "Community Vibes",
    description: "Connect with like-minded innovators",
  },
  {
    icon: Zap,
    title: "Energizing Atmosphere",
    description: "An environment designed for productivity",
  },
];

const PARTICLE_COUNT = 18;

const About: React.FC = () => {
  // Create particle positions after mount (avoids window usage during SSR)
  const [particles, setParticles] = useState<
    { left: number; topStart: number; topEnd: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const arr = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      left: Math.random() * 100, // percentage
      topStart: 100 + Math.random() * 40, // start below viewport (vh)
      topEnd: -20 - Math.random() * 40, // end above viewport
      delay: Math.random() * 6,
      duration: 12 + Math.random() * 12,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF7F0] via-[#FFEFE3] to-[#FFF8F5]">
      {/* Floating Ambient Particles (purely decorative) */}
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
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center py-12 sm:py-16 md:py-20 px-4 md:px-8">
        {/* Floating Glows */}
        <div className="absolute top-20 left-6 md:left-10 w-56 md:w-96 h-56 md:h-96 bg-lemerian-peach/40 rounded-full blur-3xl float -z-10" />
        <div
          className="absolute bottom-36 right-6 md:right-10 w-56 md:w-80 h-56 md:h-80 bg-lemerian-amber/20 rounded-full blur-3xl float -z-10"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-48 right-20 hidden md:block w-64 h-64 bg-lemerian-blue/10 rounded-full blur-3xl float -z-10"
          style={{ animationDelay: "4s" }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
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
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide"
              >
                A space designed for thinkers
              </motion.p>

              {/* BOXED CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="bg-white/90 backdrop-blur-md border border-[#f8d9b5]/60 rounded-2xl md:rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10 space-y-4 md:space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed"
              >
                <p className="text-xl sm:text-2xl font-bold text-[#f44545]">Ever Felt Like This?</p>
                <p className="text-sm sm:text-base">
                  You walk into a café, ready to work. But then:
                </p>

                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                  <li>Staff ask for orders every 30 minutes.</li>
                  <li>You're pressured to keep buying.</li>
                  <li>Chatter and noise distract you.</li>
                </ul>

                <p className="font-semibold text-[#F28A00] mt-2">We Felt That Way Too...</p>
                <p className="text-sm sm:text-base">
                  That’s why we created{" "}
                  <span className="font-bold text-[#f44545]">Lemerian Workin Café</span> — a place that offers:
                </p>

                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                  <li>Zero distractions</li>
                  <li>No purchase pressure</li>
                  <li>Cozy ambiance</li>
                  <li>Amazing food options</li>
                </ul>

                <div className="space-y-2 pt-3">
                  <p className="text-base md:text-lg font-semibold text-[#265999]">Your Workspace, Elevated.</p>
                  <p className="text-sm sm:text-base text-gray-700">
                    Fueling India's growth — our humble contribution to providing workspaces for Indians to thrive.
                  </p>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    We welcome everyone who needs a distraction-free workspace to come and be productive!
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 sm:mt-4 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-white text-base bg-gradient-to-r from-[#FF5E8E] to-[#FF8A00] shadow-md hover:shadow-xl transition-all"
                >
                  Discover Our Space
                </motion.button>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl flex justify-center items-center"
            >
              <img
                src={about}
                alt="Lemerian Workin Café Workspace"
                className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl object-cover"
                // remove fixed large heights so image is responsive
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#F28A00]">Why Choose Lemerian?</h2>
            <p className="text-gray-600 text-sm sm:text-base">Everything you need to turn ideas into reality</p>
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
      <div className="relative z-10 py-12 md:py-24 px-4 md:px-8">
        <VisionSection />
      </div>
    </div>
  );
};

export default About;
