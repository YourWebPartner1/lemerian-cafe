"use client";
import { Coffee, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isScrolled
          ? "h-16 bg-white/80 shadow-lg backdrop-blur-xl border-b border-gray-200/60"
          : "h-16 bg-gradient-to-b from-white/10 to-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full py-1">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={`${import.meta.env.BASE_URL}logo1-removebg-preview.png`}
              alt="Lemerian Workin Café Logo"
              className={`object-contain drop-shadow-md transition-all duration-500 logo-glow ${
                isScrolled ? "h-10 mt-[2px] scale-95" : "h-12 mt-[6px] scale-100"
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "packages", "events", "gallery"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium relative group transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f44545] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 btn-shine ${
                isScrolled
                  ? "bg-gradient-to-r from-[#f44545] to-[#265999] text-white"
                  : "bg-white/10 text-white border border-white/30 backdrop-blur-sm"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              className={`${isScrolled ? "text-gray-800" : "text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            {["about", "packages", "events", "gallery", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-[#f44545] font-medium transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
