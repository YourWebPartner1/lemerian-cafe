"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect, useMemo } from "react";
import Reveal from "@/components/Reveal";

import visionLaptop from "@/assets/about/vision-laptop.jpg";
import visionIndia from "@/assets/about/vision-india.jpg";
import cafehero from "@/assets/about/cafe-hero.jpg";

export default function VisionSection() {
  const ref = useRef(null);
  const [typedText, setTypedText] = useState("");

  const fullText =
    "How can we collectively rise above challenges and create a brighter future for India?";

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  // Floating particles
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 6 + 3,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color:
          i % 3 === 0
            ? "rgba(231,90,90,0.25)"
            : i % 3 === 1
            ? "rgba(255,180,0,0.25)"
            : "rgba(72,102,201,0.25)",
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 3,
      })),
    []
  );

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
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FFF7F0] via-[#FFEFE3] to-[#FFF8F5] overflow-hidden"
    >
      {/* Background Aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-[#FF8A00]/10 via-[#FF5E8E]/10 to-[#7B61FF]/10 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              background: p.color,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 text-center">
        {/* Title */}
        <Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10">
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF5E8E] bg-clip-text text-transparent drop-shadow-sm">
              The Birth of a Vision: LE.MI.R
            </span>
          </h2>
        </Reveal>

        {/* Typing Effect */}
        <Reveal delay={0.1}>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold italic text-gray-800 mb-6 max-w-4xl mx-auto leading-relaxed">
            "{typedText}"
            <motion.span
              animate={{
                opacity: typedText.length < fullText.length ? [1, 0] : 0,
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-[#FF8A00] ml-1 align-middle"
            />
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
            From that question came the idea—a mission that would become our
            identity:
          </p>
        </Reveal>

        {/* “Let’s Make India Rich” Header */}
        <Reveal delay={0.3}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-14">
            <span className="text-[#E75A5A]">Let's </span>
            <span className="text-[#FF8A00]">Make </span>
            <span className="text-[#4866C9]">India </span>
            <span className="text-[#E75A5A]">Rich</span>
          </h3>
        </Reveal>

        {/* LEMIR Meaning Cards */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-20">
          {lemirWords.map((item, index) => (
            <Reveal key={item.word} delay={0.4 + index * 0.15}>
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: `0 20px 45px -10px ${item.color}40`,
                }}
                className={`p-8 sm:p-10 rounded-3xl border-2 ${item.borderColor} bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md shadow-sm transition-all`}
              >
                <h3
                  className="text-2xl sm:text-3xl font-extrabold mb-3"
                  style={{ color: item.color }}
                >
                  {item.word}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  {item.meaning}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Floating Visuals */}
        <div className="relative flex flex-wrap md:flex-nowrap justify-center items-center gap-10 sm:gap-20 mb-20">
          {[visionIndia, cafehero, visionLaptop].map((img, i) => (
            <Reveal key={i} delay={0.5 + i * 0.15}>
              <motion.img
                src={img}
                alt={`Vision ${i}`}
                className="w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 object-cover rounded-3xl shadow-xl transition-all duration-700"
                whileHover={{ scale: 1.05 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Reveal>
          ))}
        </div>

        {/* CTA Button */}
        <Reveal delay={0.7}>
          <motion.div whileHover={{ scale: 1.08 }} className="relative inline-block">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#FF5E8E] to-[#FF8A00] rounded-full blur-lg opacity-50 animate-pulse" />
            <Button
              size="lg"
              className="relative z-10 text-lg font-semibold px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-[#FF5E8E] to-[#FF8A00] text-white shadow-xl rounded-full hover:opacity-95 transition-all"
            >
              Join the Lemerian Community
            </Button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
