import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  Clock,
  Briefcase,
  Gift,
  Users,
  Lock,
  Star,
  X,
  FileText,
} from "lucide-react";

// --- Restructured Terms and Conditions Data ---
const termsAndConditions = [
  {
    title: "Package Selection",
    description:
      "Chosen packages are final and cannot be changed or modified after purchase.",
  },
  {
    title: "No Refunds",
    description: "All package sales are final – no refunds or exchanges.",
  },
  {
    title: "Beverage Inclusions",
    description: "Beverage options exclude hot chocolate and Red Bull.",
  },
  {
    title: "Payment Terms",
    description:
      "Full payment due upon package purchase – no credit or installment plans.",
  },
  {
    title: "Cancellation Policy",
    description: "No cancellations or pauses on packages – all sales final.",
  },
  {
    title: "Membership Rules",
    description:
      "Membership benefits non-transferable – only for registered member.",
  },
  {
    title: "Discounts and Promotions",
    description:
      "Subject to change, not applicable with other offers. Non negotiable prices.",
  },
  {
    title: "Liability Waiver",
    description: "Not responsible for lost/stolen/damaged personal items.",
  },
  {
    title: "Governing Law",
    description: "Indian laws govern these terms and conditions.",
  },
  {
    title: "Dispute Resolution",
    description: "Disputes resolved through arbitration in Hyderabad.",
  },
  {
    title: "Severability",
    description: "Invalid terms don't affect remaining terms.",
  },
  {
    title: "Entire Agreement",
    description: "These terms supersede all prior agreements.",
  },
  {
    title: "Amendments",
    description: "We reserve right to modify terms without notice.",
  },
  {
    title: "Acceptance",
    description: "Purchase constitutes acceptance of these terms.",
  },
  {
    title: "Force Majeure",
    description:
      "Not liable for events beyond our control (e.g. natural disasters).",
  },
  {
    title: "No Assignment",
    description: "You cannot assign your rights without our consent.",
  },
  {
    title: "Notices",
    description: "Notices to you via email or posted on our website.",
  },
  {
    title: "Complaints",
    description: "Complaints resolved internally – contact our customer support.",
  },
  {
    title: "Applicable Taxes",
    description: "You're responsible for all applicable taxes.",
  },
];

const Packages = () => {
  // --- Data (Unchanged) ---
  const dailyPasses = [
    {
      title: "Basic",
      price: "₹399",
      period: "/day",
      gradient: "from-orange-400 to-amber-500",
      features: ["6 hours access", "1 Hot coffee/tea", "5% off on Food Bill"],
    },
    {
      title: "Standard",
      price: "₹499",
      period: "/day",
      popular: true,
      gradient: "from-pink-500 to-rose-500",
      features: ["8 hours access", "Any one beverage", "10% off on Food Bill"],
    },
    {
      title: "Premium",
      price: "₹799",
      period: "/day",
      gradient: "from-amber-600 to-orange-600",
      features: ["Unlimited access", "Any one beverage", "12% off on Food Bill"],
    },
  ];

  const membershipPlans = [
    {
      title: "Weekly Pass",
      price: "₹2,699",
      period: "/week",
      gradient: "from-orange-500 to-pink-500",
      features: [
        "10 hours access/day",
        "Digital locker",
        "1 Conference Room (2hr)",
        "1 Beverage/day",
        "5% off Food Bill",
      ],
    },
    {
      title: "Monthly Pass",
      price: "₹9,999",
      period: "/month",
      popular: true,
      gradient: "from-rose-500 to-orange-500",
      features: [
        "Unlimited access",
        "Digital locker",
        "4 Conference Room uses",
        "1 Beverage/day",
        "8% off Food Bill",
      ],
    },
  ];

  // --- State (FIXED) ---
  const [showCompare, setShowCompare] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [compareTab, setCompareTab] = useState<"daily" | "membership">("daily");
  const [planType, setPlanType] = useState<"daily" | "membership">("daily");

  // --- useEffect (Unchanged) ---
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowCompare(false);
        setShowTerms(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      id="packages"
      className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 py-16 sm:py-20 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Motion (Unchanged) */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-100 via-orange-100 to-amber-50"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <div className="absolute -top-40 -left-40 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-orange-300 opacity-30 blur-[100px] sm:blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-pink-400 opacity-25 blur-[120px] sm:blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER (Unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible packages designed for every work style and schedule
          </p>
        </motion.div>

        {/* PLAN TOGGLE (Unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative flex w-full max-w-xs sm:max-w-sm items-center justify-center rounded-full bg-orange-100/50 p-1.5 shadow-inner">
            {planType === "daily" && (
              <motion.div
                layoutId="plan-toggle-pill"
                className="absolute left-1.5 w-[calc(50%-0.375rem)] h-[calc(100%-0.75rem)] rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-md"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            {planType === "membership" && (
              <motion.div
                layoutId="plan-toggle-pill"
                className="absolute right-1.5 w-[calc(50%-0.375rem)] h-[calc(100%-0.75rem)] rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-md"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <button
              onClick={() => setPlanType("daily")}
              className={`relative z-10 w-1/2 rounded-full py-3 px-4 text-center text-sm sm:text-base font-bold transition-colors ${
                planType === "daily" ? "text-white" : "text-orange-900/70"
              }`}
            >
              Daily Passes
            </button>
            <button
              onClick={() => setPlanType("membership")}
              className={`relative z-10 w-1/2 rounded-full py-3 px-4 text-center text-sm sm:text-base font-bold transition-colors ${
                planType === "membership" ? "text-white" : "text-orange-900/70"
              }`}
            >
              Membership
            </button>
          </div>
        </motion.div>

        {/* PRICING GRID (Unchanged) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={planType}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {planType === "daily" ? (
              <PricingGrid
                title="Daily Passes"
                icon={<Clock />}
                plans={dailyPasses}
              />
            ) : (
              <PricingGrid
                title="Membership Plans"
                icon={<Briefcase />}
                plans={membershipPlans}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Compare Button (Unchanged) */}
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

        {/* ADD-ONS (Unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 rounded-3xl p-[1px] shadow-2xl">
            <div className="bg-white rounded-3xl p-8 sm:p-12">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Gift className="w-8 sm:w-10 h-8 sm:h-10 text-orange-500" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
                  Add-ons
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <AddonCard
                  icon={<Clock className="text-orange-500" />}
                  title="Hourly"
                  price="₹60/hr"
                  color="from-orange-50 to-amber-50"
                />
                <AddonCard
                  icon={<Users className="text-pink-500" />}
                  title="Conference Room"
                  price="₹999/hr"
                  color="from-pink-50 to-rose-50"
                />
                <AddonCard
                  icon={<Lock className="text-amber-600" />}
                  title="Locker"
                  price="₹99/day"
                  color="from-amber-50 to-orange-50"
                />
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-4 text-center border border-orange-200 text-sm text-gray-700">
                <span className="font-semibold">Note:</span> Conference room
                price includes up to 7 persons. Extra ₹100/person.
              </div>
            </div>
          </div>
        </motion.div>

        {/* T&C Button (Unchanged) */}
        <p className="text-center text-sm text-gray-600 mt-10">
          *All prices are exclusive of 5% GST.
          <button
            onClick={() => setShowTerms(true)}
            className="ml-2 font-medium text-orange-600 hover:text-pink-600 underline transition-colors"
          >
            Read Terms & Conditions
          </button>
        </p>
      </div>

      {/* COMPARE MODAL (Unchanged) */}
      <AnimatePresence>
        {showCompare && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setShowCompare(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-[95vw] md:max-w-5xl overflow-hidden"
            >
              <button
                onClick={() => setShowCompare(false)}
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex justify-center mb-6 sm:mb-8 gap-3 sm:gap-4 flex-wrap">
                {["daily", "membership"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCompareTab(tab as "daily" | "membership")}
                    className={`px-4 sm:px-6 py-2 rounded-full font-semibold ${
                      compareTab === tab
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tab === "daily" ? "Daily Passes" : "Membership Plans"}
                  </button>
                ))}
              </div>
              <div className="overflow-x-auto">
                {compareTab === "daily" ? <DailyCompare /> : <MembershipCompare />}
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
      </AnimatePresence>

      {/* T&C MODAL (Unchanged) */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-title"
            onClick={() => setShowTerms(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
            >
              <button
                onClick={() => setShowTerms(false)}
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 sm:p-8 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-pink-50">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-orange-500" />
                  <h2
                    id="terms-title"
                    className="text-2xl sm:text-3xl font-bold text-gray-900"
                  >
                    Terms & Conditions
                  </h2>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-8">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  {termsAndConditions.map((term, index) => (
                    <li key={index} className="text-sm sm:text-base">
                      <strong className="font-semibold text-gray-900">
                        {term.title}:
                      </strong>{" "}
                      {term.description}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setShowTerms(false)}
                  className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md hover:shadow-lg transition-shadow"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ---------- Subcomponents (Unchanged) ---------- */

const PricingGrid = ({ title, icon, plans }: any) => (
  <section className="mb-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-3"
    >
      {icon}
      {title}
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {plans.map((plan: any) => (
        <motion.div
          key={plan.title}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          {plan.popular && (
            <span
              className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm text-white bg-gradient-to-r ${plan.gradient}`}
            >
              <Star className="inline-block w-4 h-4 mr-1" /> Popular
            </span>
          )}
          <div
            className={`inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-6 shadow-lg`}
          >
            <Coffee className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
            {plan.title}
          </h3>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl sm:text-5xl font-bold text-gray-900">
              {plan.price}
            </span>
            <span className="text-lg sm:text-xl text-gray-500 ml-2">
              {plan.period}
            </span>
          </div>
          <ul className="space-y-3 sm:space-y-4 mb-8 text-gray-700">
            {plan.features.map((f: string, i: number) => (
              <li key={i} className="flex gap-3 items-center">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r ${plan.gradient} text-white`}
                >
                  ✓
                </div>
                {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              const msg = `Hi! I'm interested in the ${plan.title} (${plan.price}${plan.period}) plan.`;
              window.open(
                `https://wa.me/7075701406?text=${encodeURIComponent(msg)}`,
                "_blank"
              );
            }}
            className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.gradient} shadow-md hover:shadow-lg transition-transform hover:scale-105`}
          >
            {title.includes("Membership") ? "Subscribe Now" : "Get Started"}
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

const AddonCard = ({ icon, title, price, color }: any) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className={`bg-gradient-to-br ${color} rounded-2xl p-6 text-center shadow-md`}
  >
    <div className="w-10 h-10 mx-auto mb-3">{icon}</div>
    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-2xl sm:text-3xl font-bold text-gray-700">{price}</p>
  </motion.div>
);

const DailyCompare = () => (
  <table className="w-full text-center text-sm sm:text-base min-w-[600px]">
    <thead className="bg-gradient-to-r from-orange-50 to-pink-50">
      <tr>
        <th className="p-3">Feature</th>
        <th className="p-3">Basic</th>
        <th className="p-3">Standard</th>
        <th className="p-3">Premium</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="p-3">Access Hours</td>
        <td>6 hrs</td>
        <td>8 hrs</td>
        <td>Unlimited</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Beverage</td>
        <td>1 Coffee/Tea</td>
        <td>Any 1 Beverage</td>
        <td>Any 1 Beverage</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Food Discount</td>
        <td>5%</td>
        <td>10%</td>
        <td>12%</td>
      </tr>
      <tr>
        <td className="p-3 font-semibold">Price</td>
        <td>₹399/day</td>
        <td>₹499/day</td>
        <td>₹799/day</td>
      </tr>
    </tbody>
  </table>
);

const MembershipCompare = () => (
  <table className="w-full text-center text-sm sm:text-base min-w-[600px]">
    <thead className="bg-gradient-to-r from-orange-50 to-pink-50">
      <tr>
        <th className="p-3">Feature</th>
        <th className="p-3">Weekly Pass</th>
        <th className="p-3">Monthly Pass</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="p-3">Access Hours</td>
        <td>10 hrs/day</td>
        <td>Unlimited</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Locker</td>
        <td>Included</td>
        <td>Included</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Conference Room</td>
        <td>1 use (2 hrs)</td>
        <td>4 uses</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Food Discount</td>
        <td>5%</td>
        <td>8%</td>
      </tr>
      <tr>
        <td className="p-3 font-semibold">Price</td>
        <td>₹2,699/week</td>
        <td>₹9,999/month</td>
      </tr>
    </tbody>
  </table>
);

export default Packages;