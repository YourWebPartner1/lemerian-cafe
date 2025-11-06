"use client";
import { Clock, Calendar, Crown, Check } from "lucide-react";
import Reveal from "./Reveal";

export default function Packages() {
  const dailyPlans = [
    {
      icon: Clock,
      name: "Basic",
      price: "₹399",
      period: "per day",
      description: "Perfect for quick daily productivity",
      features: ["6 hours access", "1 Hot coffee/tea", "5% off on Food Bill"],
      gradient: "bg-gradient-to-br from-[#f44545] to-[#FFD700]",
    },
    {
      icon: Clock,
      name: "Standard",
      price: "₹499",
      period: "per day",
      description: "Great for extended daily work sessions",
      features: ["8 hours access", "Any one beverage", "10% off on Food Bill"],
      gradient: "bg-gradient-to-br from-[#265999] to-[#f44545]",
      popular: true,
    },
    {
      icon: Clock,
      name: "Premium",
      price: "₹799",
      period: "per day",
      description: "For those who need full-day work comfort",
      features: ["Unlimited access", "Any one beverage", "12% off on Food Bill"],
      gradient: "bg-gradient-to-br from-[#FFD700] to-[#f44545]",
    },
  ];

  const membershipPlans = [
    {
      icon: Calendar,
      name: "Weekly Pass",
      price: "₹2699",
      period: "per week",
      description: "Best for short-term productivity boost",
      features: [
        "10 hours access/day",
        "Digital locker access",
        "1 Conference Room use (2hr)",
        "1 Beverage per day",
        "5% off on Food Bill",
      ],
      gradient: "bg-gradient-to-br from-[#f44545] to-[#FFD700]",
    },
    {
      icon: Crown,
      name: "Monthly Pass",
      price: "₹9999",
      period: "per month",
      description: "Ideal for regular professionals & freelancers",
      features: [
        "Unlimited access",
        "Digital locker access",
        "4 Conference Room uses",
        "1 Beverage per day",
        "8% off on Food Bill",
      ],
      gradient: "bg-gradient-to-br from-[#FFD700] via-[#f44545] to-[#265999]",
      popular: true,
    },
  ];

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible packages designed for every work style and schedule
            </p>
          </div>
        </Reveal>

        <Reveal className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">Daily Passes</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {dailyPlans.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <div key={i} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${pkg.gradient} shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-center">{pkg.name}</h3>
                  <p className="text-center text-gray-600 mt-1 mb-4">{pkg.description}</p>

                  <p className="text-center mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">{pkg.price}</span>
                    <span className="text-gray-500 ml-2">{pkg.period}</span>
                  </p>

                  <ul className="space-y-2 mb-8 text-gray-700">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center">
                        <Check className="text-green-500 w-5 h-5 mr-2" /> {f}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-full font-semibold transition
                    ${pkg.popular ? "bg-gradient-to-r from-[#f44545] to-[#265999] text-white" : "bg-gray-100 hover:bg-gray-200"}
                  `}>
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <h3 className="text-2xl font-bold text-center mt-24 mb-10">Membership Plans</h3>

          <div className="grid md:grid-cols-2 gap-10">
            {membershipPlans.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <div key={i} className={`relative bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition ${pkg.popular ? "border-2 border-[#f44545]" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#f44545] to-[#265999] text-white px-4 py-1 rounded-bl-2xl text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${pkg.gradient} shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-center">{pkg.name}</h3>
                  <p className="text-center text-gray-600 mt-1 mb-4">{pkg.description}</p>

                  <p className="text-center mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#f44545] to-[#265999] bg-clip-text text-transparent">{pkg.price}</span>
                    <span className="text-gray-500 ml-2">{pkg.period}</span>
                  </p>

                  <ul className="space-y-2 mb-8 text-gray-700">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center">
                        <Check className="text-green-500 w-5 h-5 mr-2" /> {f}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-full font-semibold transition
                    ${pkg.popular ? "bg-gradient-to-r from-[#f44545] to-[#265999] text-white hover:scale-105" : "bg-gray-100 hover:bg-gray-200"}
                  `}>
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Add-ons</h3>
          <p className="text-gray-700"><b>Hourly:</b> ₹60/hr | <b>Conference Room:</b> ₹999/hr | <b>Locker:</b> ₹99/day</p>
          <p className="text-gray-500 text-sm mt-2">*Conference room price includes up to 7 persons. Extra ₹100/person.</p>
        </Reveal>

      </div>
    </section>
  );
}
