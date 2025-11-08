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
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-[#e9f0ff]"
    >
      {/* ---- Animated background glow ---- */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(246, 92, 105, 0.08), transparent 40%)",
            "radial-gradient(circle at 80% 80%, rgba(38, 89, 153, 0.08), transparent 40%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />

      {/* Floating gradient orbs */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* ---- Main Grid ---- */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* ---- Contact Form ---- */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            {/* ---- Animated Submit Button ---- */}
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f44545] to-[#265999] rounded-xl flex items-center justify-center flex-shrink-0">
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

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#265999] to-[#f44545] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <a
                      href="tel:+917075701406"
                      className="text-[#265999] hover:text-[#f44545] font-medium transition-all flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" /> +91 7075701406
                    </a>
                    <p className="text-gray-500 text-sm">Tap to call</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#f44545] rounded-xl flex items-center justify-center flex-shrink-0">
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
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#f44545]" />
                <h3 className="text-2xl font-bold text-gray-800">Opening Hours</h3>
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
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-[#f44545] to-[#265999] p-8 rounded-2xl shadow-lg text-white relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <p className="mb-6 opacity-90">Stay connected with our community</p>
              <div className="flex space-x-6">
                {[ 
                  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/lemerianworkincafe" },
                  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/lemerianworkincafe" },
                  { Icon: Twitter, label: "Twitter", href: "https://twitter.com/lemerianworkincafe" },
                ].map(({ Icon, label, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="relative group w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="absolute -bottom-8 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---- Footer ---- */}
      <footer className="mt-24 border-t border-gray-200 pt-12 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f44545] via-[#f96c6c] to-[#265999]"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Coffee className="w-6 h-6 text-[#f44545]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
                Lemerian Workin Café
              </span>
            </div>
            <p className="text-gray-600 text-center md:text-left">
              © 2025 Lemerian Workin Café. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
