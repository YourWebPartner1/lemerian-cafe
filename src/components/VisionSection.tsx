import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import visionLaptop from "@/assets/vision-laptop.png";
import visionSparkle from "@/assets/vision-sparkle.png";
import visionIndia from "@/assets/vision-india.png";

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [typedText, setTypedText] = useState("");
  const fullText =
    "How can we collectively rise above challenges and create a brighter future for India?";

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
    <section ref={ref} className="relative py-32 px-4 md:px-8 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-lemerian-peach/20 via-lemerian-amber/10 to-primary/10 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, rgba(231,90,90,0.4) 0%, transparent 70%)"
                  : i % 3 === 1
                  ? "radial-gradient(circle, rgba(255,180,0,0.4) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(123,97,255,0.4) 0%, transparent 70%)",
            }}
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* ✨ Glowing Gradient Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 relative inline-block"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={isInView ? { backgroundPosition: "100% 50%" } : {}}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF8A00, #FF6B00, #FF5E8E)",
              backgroundSize: "200% 200%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            The Birth of a Vision: LEMIR

            {/* Soft glowing background aura */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.25)_0%,rgba(255,94,142,0.15)_70%,transparent_100%)] blur-3xl -z-10 rounded-full"
            />
          </motion.h2>
        </motion.div>

        {/* Typing Effect Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <p className="text-foreground/90 mb-6">
            It started with a simple yet profound question:
          </p>
          <motion.p
            className="text-2xl md:text-3xl font-semibold text-foreground italic relative inline-block group"
            whileHover={{ scale: 1.02 }}
          >
            "{typedText}"
            <motion.span
              animate={{
                opacity: typedText.length < fullText.length ? [1, 0] : 0,
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-0.5 h-8 bg-lemerian-amber ml-1 align-middle"
            />
          </motion.p>
        </motion.div>

        {/* Mission Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="text-foreground/90 mb-8">
            From that question came the idea—a mission that would become our
            identity:
          </p>
          <div className="text-4xl md:text-5xl font-bold relative inline-block">
            {["Let's", "Make", "India", "Rich"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="inline-block mx-2 relative"
                style={{
                  backgroundImage:
                    index === 0
                      ? "linear-gradient(90deg, #E75A5A, #FF8A00)"
                      : index === 1
                      ? "linear-gradient(90deg, #FF8A00, #4866C9)"
                      : index === 2
                      ? "linear-gradient(90deg, #4866C9, #7B61FF)"
                      : "linear-gradient(90deg, #7B61FF, #E75A5A)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Meaning Cards – Clean Outline Version */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
          {lemirWords.map((item, index) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className={`relative p-10 rounded-3xl border-2 ${item.borderColor} bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-md`}
            >
              <div className="relative z-10">
                <h3
                  className="text-3xl font-extrabold mb-3 tracking-tight"
                  style={{ color: item.color }}
                >
                  {item.word}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.meaning}
                </p>
              </div>

              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  background: `radial-gradient(circle at center, ${item.color}1a 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Visuals */}
        <div className="relative h-64 mb-16">
          {/* Laptop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    y: [-15, 15, -15],
                    x: [-10, 10, -10],
                  }
                : {}
            }
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute left-1/4 -translate-x-1/2 top-8"
          >
            <img
              src={visionLaptop}
              alt="Innovation through technology"
              className="w-32 h-32 object-contain drop-shadow-[0_0_40px_rgba(255,180,0,0.4)]"
            />
          </motion.div>

          {/* India Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    y: [15, -15, 15],
                    x: [10, -10, 10],
                  }
                : {}
            }
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute right-1/4 translate-x-1/2 top-8"
          >
            <img
              src={visionIndia}
              alt="Unity and vision for India"
              className="w-32 h-32 object-contain drop-shadow-[0_0_40px_rgba(255,138,0,0.4)]"
            />
          </motion.div>

          {/* Sparkle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    y: [-10, 20, -10],
                    rotate: [0, 360],
                  }
                : {}
            }
            transition={{
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
            className="absolute left-1/2 -translate-x-1/2 top-0"
          >
            <img
              src={visionSparkle}
              alt="Creative energy and innovation"
              className="w-40 h-40 object-contain drop-shadow-[0_0_50px_rgba(231,90,90,0.5)]"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="relative text-xl px-12 py-7 overflow-hidden group"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--lemerian-red)), hsl(var(--lemerian-amber)), hsl(var(--lemerian-blue)))",
                backgroundSize: "200% 100%",
              }}
            >
              <motion.span
                className="relative z-10"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Join the Lemerian Community
              </motion.span>

              {/* Shine sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
