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
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white"
  }`}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Coffee className="w-8 h-8 text-[#f44545]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
              Lemerian Workin Café
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "packages", "events", "gallery"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-[#f44545] transition-colors font-medium relative group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f44545] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#f44545] to-[#265999] text-white px-6 py-2 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            {["about", "packages", "events", "gallery", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#f44545] font-medium transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}