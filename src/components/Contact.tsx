import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Coffee,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative pt-24 pb-0 overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-[#e9f0ff]"
    >
      {/* ---- Background Glow ---- */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(246,92,105,0.08), transparent 40%)",
            "radial-gradient(circle at 80% 80%, rgba(38,89,153,0.08), transparent 40%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-br from-[#f44545]/20 to-[#265999]/20 rounded-full blur-2xl top-10 left-20"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-gradient-to-br from-[#265999]/20 to-[#f44545]/20 rounded-full blur-2xl bottom-10 right-20"
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#265999] to-[#f44545] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
          >
            <CheckCircle className="w-6 h-6 text-white" />
            <span className="font-medium">Message Sent Successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* ---- Header ---- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Drop us a message!
          </p>
        </div>

        {/* ---- Grid ---- */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* ---- Contact Form ---- */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03, backgroundPosition: "100% 0" }}
              transition={{ duration: 0.3 }}
              type="submit"
              className="w-full py-4 text-lg font-semibold text-white rounded-xl shadow-lg bg-gradient-to-r from-[#f44545] via-[#f96c6c] to-[#265999] bg-[length:200%_200%] transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* ---- Right Column ---- */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f44545] to-[#265999] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">
                      1st Floor, Emperado Building, Road No. 12,<br />
                      Opp. Mahesh Bank, Banjara Hills, Hyderabad
                    </p>
                    <a
                      href="https://maps.google.com/?q=Lemerian+Workin+Cafe+Hyderabad"
                      target="_blank"
                      className="inline-block mt-3 text-[#265999] font-semibold hover:text-[#f44545] transition-colors"
                    >
                      📍 View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#265999] to-[#f44545] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <a
                      href="tel:+917075701406"
                      className="text-[#265999] hover:text-[#f44545] font-medium flex items-center gap-2 transition-all"
                    >
                      <Phone className="w-4 h-4" /> +91 7075701406
                    </a>
                    <p className="text-gray-500 text-sm">Tap to call</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#f44545] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a
                      href="mailto:lemerianworkincafe@gmail.com"
                      className="text-[#265999] hover:text-[#f44545] font-medium flex items-center gap-2 transition-all"
                    >
                      <Mail className="w-4 h-4" /> lemerianworkincafe@gmail.com
                    </a>
                    <p className="text-gray-500 text-sm">Tap to send email</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#f44545]" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Opening Hours
                </h3>
              </div>
              <div className="flex justify-between text-gray-700 text-lg font-medium">
                <span>Open Daily</span>
                <span className="text-[#265999]">8:00 AM – 12:00 AM</span>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-[#f44545] to-[#265999] p-8 rounded-2xl shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <p className="mb-6 opacity-90">
                Stay connected with our community
              </p>
              <div className="flex space-x-6">
                {[
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/lemerianworkincafe",
                  },
                  {
                    Icon: Facebook,
                    href: "https://www.facebook.com/lemerianworkincafe",
                  },
                  {
                    Icon: Twitter,
                    href: "https://twitter.com/lemerianworkincafe",
                  },
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---- Footer ---- */}
      <footer className="bg-[#f5f8ff] border-t border-gray-200 shadow-inner">
        <motion.div
          className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#f44545] via-[#f96c6c] to-[#265999]"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-[#f44545] to-[#265999] p-2 rounded-full shadow-md">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
              Lemerian Workin Café
            </span>
          </div>
          <p className="text-gray-700 text-center md:text-right text-sm md:text-base">
            © 2025{" "}
            <span className="font-semibold text-gray-900">
              Lemerian Workin Café
            </span>
            . All rights reserved.
          </p>
        </div>
      </footer>

      {/* ---- Floating WhatsApp ---- */}
      <motion.a
        href="https://wa.me/917075701406?text=Hi%20👋%20I'd%20like%20to%20know%20more%20about%20Lemerian%20Workin%20Café!"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-5 right-5 z-50 group"
      >
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] via-[#20b358] to-[#128C7E] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-8 h-8 relative z-10"
          >
            <path d="M20.52 3.48A11.9 11.9 0 0012.03 0a12.06 12.06 0 00-10.3 18.3L0 24l5.88-1.7A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22.1a10.1 10.1 0 01-5.12-1.41l-.36-.21-3.48 1 1-3.39-.23-.35A10.07 10.07 0 0112 1.9c5.58 0 10.1 4.52 10.1 10.1 0 5.57-4.52 10.1-10.1 10.1zm5.53-7.68c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48a9.01 9.01 0 01-1.66-2.07c-.17-.3 0-.46.13-.61.14-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.49-.67-.5h-.58c-.2 0-.53.07-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.08.15.2 2.13 3.24 5.16 4.55 3.04 1.31 3.04.87 3.59.82.55-.05 1.77-.72 2.02-1.43.25-.72.25-1.33.17-1.48-.08-.15-.27-.23-.57-.38z" />
          </svg>
        </div>
      </motion.a>
    </section>
  );
}
