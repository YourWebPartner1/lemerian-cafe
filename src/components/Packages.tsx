import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Clock,
  Briefcase,
  Gift,
  Users,
  Lock,
  Star,
  X,
} from "lucide-react";

interface Feature {
  text: string;
}

interface PricingCard {
  title: string;
  price: string;
  period: string;
  features: Feature[];
  popular?: boolean;
  gradient: string;
}

const Packages = () => {
  const dailyPasses: PricingCard[] = [
    {
      title: "Basic",
      price: "₹399",
      period: "/day",
      gradient: "from-orange-400 to-amber-500",
      features: [
        { text: "6 hours access" },
        { text: "1 Hot coffee/tea" },
        { text: "5% off on Food Bill" },
      ],
    },
    {
      title: "Standard",
      price: "₹499",
      period: "/day",
      popular: true,
      gradient: "from-pink-500 to-rose-500",
      features: [
        { text: "8 hours access" },
        { text: "Any one beverage" },
        { text: "10% off on Food Bill" },
      ],
    },
    {
      title: "Premium",
      price: "₹799",
      period: "/day",
      gradient: "from-amber-600 to-orange-600",
      features: [
        { text: "Unlimited access" },
        { text: "Any one beverage" },
        { text: "12% off on Food Bill" },
      ],
    },
  ];

  const membershipPlans: PricingCard[] = [
    {
      title: "Weekly Pass",
      price: "₹2,699",
      period: "/week",
      gradient: "from-orange-500 to-pink-500",
      features: [
        { text: "10 hours access/day" },
        { text: "Digital locker" },
        { text: "1 Conference Room (2hr)" },
        { text: "1 Beverage/day" },
        { text: "5% off Food Bill" },
      ],
    },
    {
      title: "Monthly Pass",
      price: "₹9,999",
      period: "/month",
      popular: true,
      gradient: "from-rose-500 to-orange-500",
      features: [
        { text: "Unlimited access" },
        { text: "Digital locker" },
        { text: "4 Conference Room uses" },
        { text: "1 Beverage/day" },
        { text: "8% off Food Bill" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const
 } },
  };

  const [showCompare, setShowCompare] = useState(false);
  const [compareTab, setCompareTab] = useState<"daily" | "membership">("daily");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowCompare(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible packages designed for every work style and schedule
          </p>
        </motion.div>

        {/* ===== DAILY PASSES ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-3"
          >
            <Clock className="w-8 h-8 text-orange-500" />
            Daily Passes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dailyPasses.map((plan) => (
              <motion.div
                key={plan.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span
                      className={`inline-flex items-center gap-1 px-4 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${plan.gradient} shadow-lg`}
                    >
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div
                  className={`relative bg-white rounded-3xl p-8 shadow-xl h-full ${
                    plan.popular ? "ring-4 ring-pink-500 ring-opacity-50" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-5 rounded-3xl`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-6 shadow-lg`}
                    >
                      <Coffee className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-xl text-gray-500 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                          >
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.gradient} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== MEMBERSHIP ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-3"
          >
            <Briefcase className="w-8 h-8 text-pink-500" />
            Membership Plans
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan) => (
              <motion.div
                key={plan.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span
                      className={`inline-flex items-center gap-1 px-4 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${plan.gradient} shadow-lg`}
                    >
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div
                  className={`relative bg-white rounded-3xl p-8 shadow-xl h-full ${
                    plan.popular ? "ring-4 ring-rose-500 ring-opacity-50" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-5 rounded-3xl`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-6 shadow-lg`}
                    >
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-xl text-gray-500 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                          >
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.gradient} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== COMPARE BUTTON ===== */}
        <div className="text-center mb-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCompare(true)}
            className="px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg"
          >
            Compare Plans
          </motion.button>
        </div>

        {/* ===== ADD-ONS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-10 md:p-14">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Gift className="w-12 h-12 text-orange-500" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
                  Add-ons
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center shadow-md"
                >
                  <Clock className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hourly</h3>
                  <p className="text-3xl font-bold text-orange-600">₹60/hr</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center shadow-md"
                >
                  <Users className="w-10 h-10 text-pink-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Conference Room
                  </h3>
                  <p className="text-3xl font-bold text-pink-600">₹999/hr</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center shadow-md"
                >
                  <Lock className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Locker</h3>
                  <p className="text-3xl font-bold text-amber-600">₹99/day</p>
                </motion.div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-4 text-center border border-orange-200">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Note:</span> Conference room
                  price includes up to 7 persons. Extra ₹100/person.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== GST NOTE ===== */}
        <p className="text-center text-sm text-gray-600 mt-10">
          *All prices are exclusive of 5% GST.
        </p>

        {/* ===== COMPARE MODAL ===== */}
        {showCompare && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6"
            onClick={() => setShowCompare(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-5xl"
            >
              <button
                onClick={() => setShowCompare(false)}
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Tabs */}
              <div className="flex justify-center mb-8 gap-4">
                <button
                  onClick={() => setCompareTab("daily")}
                  className={`px-6 py-2 rounded-full font-semibold ${
                    compareTab === "daily"
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Daily Passes
                </button>
                <button
                  onClick={() => setCompareTab("membership")}
                  className={`px-6 py-2 rounded-full font-semibold ${
                    compareTab === "membership"
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Membership Plans
                </button>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                {compareTab === "daily" ? (
                  <table className="w-full text-center">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-50 to-pink-50">
                        <th className="p-3">Feature</th>
                        <th className="p-3">Basic</th>
                        <th className="p-3">Standard</th>
                        <th className="p-3">Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Access Hours</td>
                        <td className="p-3">6 hrs</td>
                        <td className="p-3">8 hrs</td>
                        <td className="p-3">Unlimited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Beverage</td>
                        <td className="p-3">1 Coffee/Tea</td>
                        <td className="p-3">Any 1 Beverage</td>
                        <td className="p-3">Any 1 Beverage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Food Discount</td>
                        <td className="p-3">5%</td>
                        <td className="p-3">10%</td>
                        <td className="p-3">12%</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Price</td>
                        <td className="p-3">₹399/day</td>
                        <td className="p-3">₹499/day</td>
                        <td className="p-3">₹799/day</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-center">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-50 to-pink-50">
                        <th className="p-3">Feature</th>
                        <th className="p-3">Weekly Pass</th>
                        <th className="p-3">Monthly Pass</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Access Hours</td>
                        <td className="p-3">10 hrs/day</td>
                        <td className="p-3">Unlimited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Locker</td>
                        <td className="p-3">Included</td>
                        <td className="p-3">Included</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Conference Room</td>
                        <td className="p-3">1 use (2 hrs)</td>
                        <td className="p-3">4 uses</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Food Discount</td>
                        <td className="p-3">5%</td>
                        <td className="p-3">8%</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Price</td>
                        <td className="p-3">₹2,699/week</td>
                        <td className="p-3">₹9,999/month</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowCompare(false)}
                  className="px-6 py-3 rounded-full border border-gray-200 text-gray-700"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Packages;
