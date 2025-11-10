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
      className="relative pt-20 sm:pt-24 pb-0 overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-[#e9f0ff]"
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
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#f44545]/20 to-[#265999]/20 rounded-full blur-2xl top-10 left-6 sm:left-20"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#265999]/20 to-[#f44545]/20 rounded-full blur-2xl bottom-10 right-6 sm:right-20"
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
            className="fixed bottom-5 sm:bottom-8 right-5 sm:right-8 bg-gradient-to-r from-[#265999] to-[#f44545] text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl flex items-center gap-3 z-50 text-sm sm:text-base"
          >
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <span className="font-medium">Message Sent Successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* ---- Header ---- */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Drop us a message!
          </p>
        </div>

        {/* ---- Grid ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* ---- Contact Form ---- */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 sm:space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {["name", "email", "phone"].map((field, i) => (
              <div key={field}>
                <label className="block text-sm font-semibold text-gray-700 mb-2 capitalize">
                  {field === "email" ? "Email Address" : field === "phone" ? "Phone Number" : "Full Name"}
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors text-sm sm:text-base"
                  required={field !== "phone"}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f44545] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03, backgroundPosition: "100% 0" }}
              transition={{ duration: 0.3 }}
              type="submit"
              className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-xl shadow-lg bg-gradient-to-r from-[#f44545] via-[#f96c6c] to-[#265999] bg-[length:200%_200%] transition-all"
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
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6 text-sm sm:text-base">
                {[
                  {
                    Icon: MapPin,
                    title: "Location",
                    content:
                      "1st Floor, Emperado Building, Road No. 12, Opp. Mahesh Bank, Banjara Hills, Hyderabad",
                    link: "https://maps.google.com/?q=Lemerian+Workin+Cafe+Hyderabad",
                    linkLabel: "📍 View on Google Maps →",
                  },
                  {
                    Icon: Phone,
                    title: "Phone",
                    content: "+91 7075701406",
                    link: "tel:+917075701406",
                  },
                  {
                    Icon: Mail,
                    title: "Email",
                    content: "lemerianworkincafe@gmail.com",
                    link: "mailto:lemerianworkincafe@gmail.com",
                  },
                ].map(({ Icon, title, content, link, linkLabel }, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#f44545] to-[#265999] rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#265999] hover:text-[#f44545] font-medium transition-colors break-all"
                        >
                          {content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{content}</p>
                      )}
                      {linkLabel && (
                        <a
                          href={link}
                          target="_blank"
                          className="block mt-2 text-[#265999] hover:text-[#f44545] font-medium transition-colors text-sm"
                        >
                          {linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-[#f44545]" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Opening Hours
                </h3>
              </div>
              <div className="flex justify-between text-gray-700 text-sm sm:text-lg font-medium">
                <span>Open Daily</span>
                <span className="text-[#265999]">8:00 AM – 12:00 AM</span>
              </div>
            </motion.div>

{/* Social Media */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-gradient-to-r from-[#f44545] to-[#265999] p-6 sm:p-8 rounded-2xl shadow-lg text-white"
>
  <h3 className="text-xl sm:text-2xl font-bold mb-4">Follow Us</h3>
  <p className="mb-6 opacity-90 text-sm sm:text-base">
    Stay connected with our community — get updates, behind-the-scenes, and stories!
  </p>

  <div className="flex space-x-4 sm:space-x-6">
    {/* Instagram */}
    <motion.a
      href="https://www.instagram.com/lemerianworkincafe/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, rotate: 10 }}
      transition={{ duration: 0.3 }}
      className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-6 sm:w-7 h-6 sm:h-7"
      >
        <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 8.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm5.75-9.45a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0z" />
      </svg>
    </motion.a>

    {/* YouTube */}
    <motion.a
      href="https://www.youtube.com/@lemerianworkincafe"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, rotate: 10 }}
      transition={{ duration: 0.3 }}
      className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-6 sm:w-7 h-6 sm:h-7"
      >
        <path d="M23.498 6.186a2.97 2.97 0 00-2.09-2.1C19.551 3.667 12 3.667 12 3.667s-7.55 0-9.408.419a2.97 2.97 0 00-2.09 2.1C0 8.046 0 12 0 12s0 3.954.502 5.814a2.97 2.97 0 002.09 2.1C4.45 20.333 12 20.333 12 20.333s7.55 0 9.408-.419a2.97 2.97 0 002.09-2.1C24 15.954 24 12 24 12s0-3.954-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
      </svg>
    </motion.a>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm sm:text-base">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-[#f44545] to-[#265999] p-2 rounded-full shadow-md">
              <Coffee className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            </div>
            <span className="font-bold bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
              Lemerian Workin Café
            </span>
          </div>
          <p className="text-gray-700 text-center md:text-right">
            © 2025 <span className="font-semibold text-gray-900">Lemerian Workin Café</span>. All rights reserved.
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
        className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-50 group"
      >
        <div className="relative w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#25D366] via-[#20b358] to-[#128C7E] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-6 sm:w-8 h-6 sm:h-8 relative z-10"
          >
            <path d="M20.52 3.48A11.9 11.9 0 0012.03 0a12.06 12.06 0 00-10.3 18.3L0 24l5.88-1.7A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22.1a10.1 10.1 0 01-5.12-1.41l-.36-.21-3.48 1 1-3.39-.23-.35A10.07 10.07 0 0112 1.9c5.58 0 10.1 4.52 10.1 10.1 0 5.57-4.52 10.1-10.1 10.1zm5.53-7.68c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48a9.01 9.01 0 01-1.66-2.07c-.17-.3 0-.46.13-.61.14-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.49-.67-.5h-.58c-.2 0-.53.07-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.08.15.2 2.13 3.24 5.16 4.55 3.04 1.31 3.04.87 3.59.82.55-.05 1.77-.72 2.02-1.43.25-.72.25-1.33.17-1.48-.08-.15-.27-.23-.57-.38z" />
          </svg>
        </div>
      </motion.a>
    </section>
  );
}
