import { Coffee, Briefcase, Heart, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-[#fff4f4]">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div data-aos="fade-right">
          <h3 className="text-sm font-semibold tracking-widest text-[#E75A5A] uppercase mb-3">
            A Space Designed for Thinkers
          </h3>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#E75A5A] to-[#4866C9] text-transparent bg-clip-text drop-shadow-[0_4px_18px_rgba(0,0,0,0.18)]">
            Where Coffee Meets Productivity
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Lemerian Workin Café blends the warmth of a café with the energy of a collaborative workspace.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            At Lemerian, we believe great ideas thrive in inspiring spaces. Our environment sparks creativity, focus, and meaningful conversations — all while enjoying your favorite coffee.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you’re studying, working remotely, meeting a team, or simply unwinding — we provide a modern space that feels warm, intentional, and productive.
          </p>

          <button className="mt-8 px-6 py-3 text-white bg-gradient-to-r from-[#E75A5A] to-[#4866C9] rounded-xl font-medium shadow-lg transition-transform duration-300 hover:scale-105">
            Discover Our Space
          </button>
        </div>

        {/* Right Image */}
        <div className="relative" data-aos="fade-left">
          <div className="absolute -bottom-6 inset-x-6 h-24 blur-3xl bg-[#e2c7ff]/40 rounded-full"></div>
          <img
            src="/about.jpeg"
            alt="Cafe Interior"
            className="relative rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.18)] object-cover w-full"
          />
        </div>

      </div>

      {/* ✅ Feature Icons Row */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-aos="fade-up">
        
        <div className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
          <Coffee className="w-9 h-9 text-[#E75A5A] group-hover:scale-110 transition" />
          <h4 className="font-semibold text-gray-800">Premium Coffee</h4>
          <p className="text-sm text-gray-500">Crafted to energize your workflow.</p>
        </div>

        <div className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
          <Briefcase className="w-9 h-9 text-[#4866C9] group-hover:scale-110 transition" />
          <h4 className="font-semibold text-gray-800">Workspaces</h4>
          <p className="text-sm text-gray-500">Quiet, focused, and well-designed zones.</p>
        </div>

        <div className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
          <Heart className="w-9 h-9 text-[#E75A5A] group-hover:scale-110 transition" />
          <h4 className="font-semibold text-gray-800">Comfort-first</h4>
          <p className="text-sm text-gray-500">Feel at home, stay as long as you like.</p>
        </div>

        <div className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
          <Zap className="w-9 h-9 text-[#4866C9] group-hover:scale-110 transition" />
          <h4 className="font-semibold text-gray-800">Superfast Wi-Fi</h4>
          <p className="text-sm text-gray-500">Stay connected without interruption.</p>
        </div>

      </div>

    </section>
  );
}
