import { Coffee, Briefcase, Heart, Zap, XCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import VisionSection from "@/components/VisionSection";
import { useState, useEffect } from "react";

const About = () => {
  const about = "/about.jpeg";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax effect for the hero image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
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

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F2] via-[#FFEFE3] to-[#FFF8F5]">
      {/* Floating particles for ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#F28A00]/25 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
            }}
            animate={{
              y: -50,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative flex items-center py-24 md:py-28 px-6 md:px-12 min-h-[90vh]">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#1a1a1a]">
                Where Coffee Meets{" "}
                <span className="bg-gradient-to-r from-[#FF5E8E] to-[#FF8A00] bg-clip-text text-transparent">
                  Productivity
                </span>
              </h1>

              <p className="text-2xl text-gray-700 font-light">
                A Space Designed for Thinkers
              </p>

              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-10 border border-[#f8d9b5]/50"
              >
                <h3 className="text-2xl font-bold text-[#f44545] mb-4">
                  Ever Felt Like This?
                </h3>
                <ul className="space-y-3 text-gray-700 text-[17px] leading-relaxed">
                  <li className="flex items-center gap-3">
                    <XCircle className="text-[#f44545] w-5 h-5" />
                    Staff ask for orders every 30 minutes.
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="text-[#f44545] w-5 h-5" />
                    You're pressured to keep buying.
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="text-[#f44545] w-5 h-5" />
                    Chatter and noise distract you.
                  </li>
                </ul>

                <h3 className="text-xl md:text-2xl font-bold text-[#F28A00] mt-8 mb-3">
                  We Felt That Way Too...
                </h3>
                <p className="text-gray-700">
                  That’s why we created{" "}
                  <span className="font-bold text-[#f44545]">
                    Lemerian Workin Café
                  </span>
                  — a place that offers:
                </p>
                <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#265999] w-5 h-5" />
                    Zero distractions
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#265999] w-5 h-5" />
                    No purchase pressure
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#265999] w-5 h-5" />
                    Cozy ambiance
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#265999] w-5 h-5" />
                    Amazing food options
                  </li>
                </ul>

                <div className="mt-8 text-gray-800">
                  <p className="font-semibold text-[#265999] text-lg">
                    Your Workspace, Elevated.
                  </p>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    Fueling India's growth — our humble contribution to creating
                    workspaces for Indians to thrive.
                  </p>
                  <p className="font-medium mt-2 leading-relaxed">
                    We welcome everyone who needs a distraction-free workspace
                    to come and be productive!
                  </p>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="px-8 py-3 mt-8 rounded-full font-semibold text-white text-lg bg-gradient-to-r from-[#FF5E8E] to-[#FF8A00] shadow-lg hover:shadow-xl hover:opacity-95 transition-all"
              >
                Discover Our Space
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE — Cinematic Light Sweep + Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)`,
              }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl lg:h-[700px] md:h-[550px] h-[420px]"
            >
              {/* Actual Image */}
              <motion.img
                src={about}
                alt="Lemerian Café Interior"
                className="w-full h-full object-cover rounded-3xl"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* Gradient overlay for cinematic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent rounded-3xl" />

              {/* Animated light reflection */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl"
                initial={{ x: "-100%" }}
                animate={{ x: "150%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F28A00]">
              Why Choose Lemerian?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to turn ideas into reality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 60px -15px rgba(231, 90, 90, 0.25)",
                }}
                className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-[#F5CDA3] hover:shadow-lg transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 mb-4 text-[#F28A00] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <div className="relative z-10 py-16 px-6 md:px-12">
        <VisionSection />
      </div>
    </div>
  );
};

export default About;
