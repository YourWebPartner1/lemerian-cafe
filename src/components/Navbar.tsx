"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔸 Smooth scroll to section
  const scrollToSection = (id: string) => {
    setActive(id);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-700 border-b ${
        isScrolled
          ? "bg-white/85 border-gray-200/60 shadow-md"
          : "bg-gradient-to-b from-white/10 to-transparent border-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* 🔹 Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
          >
            <motion.img
              src={`${import.meta.env.BASE_URL}logo1-removebg-preview.png`}
              alt="Lemerian Workin Café Logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`object-contain transition-all duration-700 ${
                isScrolled ? "h-8 sm:h-10 drop-shadow-md" : "h-10 sm:h-12 drop-shadow-lg"
              }`}
            />
          </motion.div>

          {/* 🔹 Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["about", "packages", "events", "gallery"].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium relative group transition-colors tracking-wide ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
                whileHover={{ scale: 1.08 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#f44545] to-[#265999] transition-all duration-500 ease-in-out ${
                    active === section ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.button>
            ))}

            {/* Contact Button */}
            <motion.button
              onClick={() => {
                scrollToSection("contact");
                setIsContactClicked(true);
                setTimeout(() => setIsContactClicked(false), 600);
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`relative px-6 py-2 rounded-full font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transition-all duration-500 ${
                isContactClicked
                  ? "bg-gradient-to-r from-[#265999] to-[#FFD700] text-white"
                  : "bg-gradient-to-r from-[#f44545] to-[#265999] text-white"
              }`}
            >
              Contact
            </motion.button>
          </div>

          {/* 🔹 Mobile Toggle */}
          <div className="md:hidden">
            <button
              className={`transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-lg rounded-b-2xl"
          >
            <div className="px-6 py-5 space-y-2 sm:space-y-3">
              {["about", "packages", "events", "gallery", "contact"].map(
                (section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    whileHover={{ scale: 1.05, x: 4 }}
                    transition={{ duration: 0.25 }}
                    className="block w-full text-left py-2 text-base sm:text-lg font-medium text-gray-800 hover:text-[#f44545] transition-all"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
