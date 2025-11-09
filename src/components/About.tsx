import { Coffee, Briefcase, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import VisionSection from "@/components/VisionSection";
import about from "@/assets/about/about.jpeg"; // ✅ fix import name (make sure file name matches)

const About = () => {
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
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF7F0] via-[#FFEFE3] to-[#FFF8F5]">
      {/* Floating Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-lemerian-amber/20 rounded-full"
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
      <section className="relative min-h-screen flex items-center py-20 px-4 md:px-8">
        {/* Floating Glows */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-lemerian-peach/40 rounded-full blur-3xl float" />
        <div
          className="absolute bottom-40 right-10 w-80 h-80 bg-lemerian-amber/20 rounded-full blur-3xl float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-60 right-40 w-72 h-72 bg-lemerian-blue/10 rounded-full blur-3xl float"
          style={{ animationDelay: "4s" }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
             <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-5xl md:text-7xl font-bold shimmer leading-tight"
>
  <span className="block md:inline">
    Where Coffee Meets
  </span>{" "}
  <br className="hidden sm:block" />
  <span className="block md:inline">
     Productivity
  </span>
</motion.h1>


              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide"
              >
                A Space Designed for Thinkers
              </motion.p>

              {/* ✅ BOXED CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/90 backdrop-blur-md border border-[#f8d9b5]/60 rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-8 md:p-10 space-y-6 text-gray-800 text-lg leading-relaxed"
              >
                <p className="text-2xl font-bold text-[#f44545]">
                  Ever Felt Like This?
                </p>
                <p>You walk into a café, ready to work. But then:</p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Staff ask for orders every 30 minutes.</li>
                  <li>You're pressured to keep buying.</li>
                  <li>Chatter and noise distract you.</li>
                </ul>

                <p className="font-semibold text-[#F28A00] mt-4">
                  We Felt That Way Too...
                </p>
                <p>
                  That’s why we created{" "}
                  <span className="font-bold text-[#f44545]">
                    Lemerian Workin Café
                  </span>{" "}
                  — a place that offers:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Zero distractions</li>
                  <li>No purchase pressure</li>
                  <li>Cozy ambiance</li>
                  <li>Amazing food options</li>
                </ul>

                <div className="space-y-3 pt-4">
                  <p className="text-xl font-semibold text-[#265999]">
                    Your Workspace, Elevated.
                  </p>

                  <p className="text-gray-700">
                    Fueling India's growth — our humble contribution to
                    providing workspaces for Indians to thrive.
                  </p>

                  <p className="font-medium text-gray-900">
                    We welcome everyone who needs a distraction-free workspace
                    to come and be productive!
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 px-8 py-3 rounded-full font-semibold text-white text-lg bg-gradient-to-r from-[#FF5E8E] to-[#FF8A00] shadow-md hover:shadow-xl transition-all"
                >
                  Discover Our Space
                </motion.button>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
         <motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.4 }}
  className="relative rounded-[2rem] overflow-hidden shadow-2xl flex justify-center items-center"
>
  <img
    src={about}
    alt="LE.M.I.R Café Workspace"
    className="w-full max-w-[750px] h-[620px] object-cover object-center rounded-[2rem] md:max-w-[800px] md:h-[650px] lg:max-w-[900px] lg:h-[700px] transition-all duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
</motion.div>


          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F28A00]">
              Why Choose Lemerian?
            </h2>
            <p className="text-gray-600 text-lg">
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
                  boxShadow: "0 20px 60px -15px rgba(231, 90, 90, 0.3)",
                }}
                className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-[#F5CDA3] hover:shadow-lg transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 mb-4 text-[#F28A00] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <div className="relative z-10 py-24 px-4 md:px-8">
        <VisionSection />
      </div>
    </div>
  );
};

export default About;
