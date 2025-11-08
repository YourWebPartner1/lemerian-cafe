import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import visionLaptop from "@/assets/vision-laptop.jpg";
import visionIndia from "@/assets/vision-india.jpg";
import cafehero from "@/assets/cafe-hero.jpg"; // ✅ your café hero image

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [typedText, setTypedText] = useState("");
  const fullText =
    "How can we collectively rise above challenges and create a brighter future for India?";

  // Typing animation
  useEffect(() => {
    if (isInView && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [isInView, typedText, fullText]);

  const lemirWords = [
    {
      word: "Let's",
      meaning: "Together, we ignite collective action",
      color: "#E75A5A",
      borderColor: "border-[#E75A5A]/60",
    },
    {
      word: "Make",
      meaning: "Build, create, and innovate with purpose",
      color: "#FFB100",
      borderColor: "border-[#FFB100]/60",
    },
    {
      word: "India",
      meaning: "Our home, our responsibility, our future",
      color: "#4866C9",
      borderColor: "border-[#4866C9]/60",
    },
    {
      word: "Rich",
      meaning: "In wealth, wisdom, and well-being",
      color: "#E75A5A",
      borderColor: "border-[#E75A5A]/60",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#FFF7F0] via-[#FFEFE3] to-[#FFF8F5] overflow-hidden"
    >
      {/* Soft glowing background aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#FF8A00]/10 via-[#FF5E8E]/10 to-[#7B61FF]/10 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 3 === 0
                  ? "rgba(231,90,90,0.25)"
                  : i % 3 === 1
                  ? "rgba(255,180,0,0.25)"
                  : "rgba(72,102,201,0.25)",
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 text-center">
        {/* Gradient Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-10"
        >
          <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF5E8E] bg-clip-text text-transparent drop-shadow-sm">
            The Birth of a Vision: LEMIR
          </span>
        </motion.h2>

        {/* Typing Effect Quote */}
        <motion.p
          className="text-xl md:text-2xl font-semibold italic text-gray-800 mb-6 max-w-4xl mx-auto leading-relaxed"
          whileHover={{ scale: 1.02 }}
        >
          "{typedText}"
          <motion.span
            animate={{
              opacity: typedText.length < fullText.length ? [1, 0] : 0,
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-[#FF8A00] ml-1 align-middle"
          />
        </motion.p>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
          From that question came the idea—a mission that would become our
          identity:
        </p>

        {/* “Let’s Make India Rich” Highlight */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-14"
        >
          <span className="text-[#E75A5A]">Let's </span>
          <span className="text-[#FF8A00]">Make </span>
          <span className="text-[#4866C9]">India </span>
          <span className="text-[#E75A5A]">Rich</span>
        </motion.h3>

        {/* LEMIR meaning cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {lemirWords.map((item, index) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: `0 20px 45px -10px ${item.color}40`,
              }}
              className={`relative p-10 rounded-3xl border-2 ${item.borderColor} bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md shadow-sm transition-all`}
            >
              <h3
                className="text-3xl font-extrabold mb-3"
                style={{ color: item.color }}
              >
                {item.word}
              </h3>
              <p className="text-gray-700 text-lg">{item.meaning}</p>
            </motion.div>
          ))}
        </div>

        {/* Floating Visuals */}
        <div className="relative h-72 mb-24 flex justify-center items-center gap-24">
          {/* Left - India Image */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <motion.img
              src={visionIndia}
              alt="India"
              className="w-36 h-36 object-contain drop-shadow-[0_0_45px_rgba(255,138,0,0.6)]"
            />
          </motion.div>

          {/* Center - Café Hero (replaces sparkle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? { opacity: 1, rotate: [0, 360], scale: [1, 1.05, 1] }
                : {}
            }
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative"
          >
            <img
              src={cafehero}
              alt="Cafe Hero"
              className="w-44 h-44 object-cover rounded-2xl shadow-xl drop-shadow-[0_0_70px_rgba(255,94,142,0.6)]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E8E]/30 to-[#FF8A00]/30 blur-2xl rounded-full" />
          </motion.div>

          {/* Right - Laptop */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 5 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <motion.img
              src={visionLaptop}
              alt="Laptop"
              className="w-36 h-36 object-contain drop-shadow-[0_0_60px_rgba(72,102,201,0.6)]"
            />
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          className="relative inline-block"
        >
          <motion.div className="absolute inset-0 bg-gradient-to-r from-[#FF5E8E] to-[#FF8A00] rounded-full blur-lg opacity-50 animate-pulse" />
          <Button
            size="lg"
            className="relative z-10 text-lg font-semibold px-12 py-6 bg-gradient-to-r from-[#FF5E8E] to-[#FF8A00] text-white shadow-xl rounded-full hover:opacity-95 transition-all"
          >
            Join the Lemerian Community
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
