import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Calculator,
  CheckCircle,
  Users,
  Target,
  PieChart,
  DollarSign,
  Calendar,
  Lock,
  Sparkles,
  Download,
  ChevronDown,
  Star,
  ArrowUpRight,
  CreditCard,
  Smartphone,
  Banknote,
  Percent,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SavingsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Savings plans data
  const savingsPlans = [
    {
      id: 1,
      title: "Regular Savings",
      subtitle: "Build your financial foundation",
      description:
        "Start your savings journey with our flexible regular savings account. No minimum balance required, earn competitive interest.",
      features: ["No minimum balance", "Flexible deposits", "Free withdrawals"],
      icon: <Banknote className="text-blue-600" size={24} />,
      color: "from-blue-500 to-cyan-800",
      minAmount: "₵50",
      interestRate: "2.5% p.a.",
      badge: "Most Popular",
    },

    {
      id: 2,
      title: "Glo Savings",
      subtitle: "Maximize your returns",
      description:
        "Lock in higher interest rates with our fixed deposit accounts. Choose from 3, 6, 12, or 24-month terms.",
      features: [
        "Highest interest rates",
        "Guanteed returns",
        "Flexible terms",
        "Premature closure option",
      ],
      icon: <Lock className="text-emerald-600" size={24} />,
      color: "from-emerald-500 to-teal-800",
      minAmount: "₵1,000",
      interestRate: "5.2% p.a.",
      badge: "Best Returns",
    },

    {
      id: 3,
      title: "Youth Savings",
      subtitle: "Save smart. Grow confident.",
      description:
        "A flexible savings account designed to help young people build strong money habits early, earn competitive interest, and save towards future goals with ease.",
      features: [
        "Attractive interest rates",
        "Easy deposits & withdrawals",
        "Savings goals for school & projects",
        "Mobile app monitoring",
      ],
      icon: <Target className="text-purple-600" size={24} />,
      color: "from-purple-500 to-pink-800",
      minAmount: "₵50",
      interestRate: "3.5% p.a.",
      badge: "Youth Focused",
    },
  ];

  // Features grid
  const features = [
    {
      icon: <Shield size={28} />,
      title: "Bank-Grade Security",
      description:
        "Your savings are protected with 256-bit encryption and insured up to ₵50,000",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Competitive Rates",
      description: "Enjoy some of the highest interest rates in the industry",
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Access",
      description: "Manage your savings anytime, anywhere with our mobile app",
    },
    {
      icon: <Users size={28} />,
      title: "Community Focused",
      description:
        "We reinvest profits to support local education and development",
    },
  ];

  // Stats data
  const stats = [
    { value: "₵12.5M+", label: "Total Savings", icon: <PieChart size={20} /> },
    { value: "8,500+", label: "Happy Savers", icon: <Users size={20} /> },
    { value: "4.9★", label: "Customer Rating", icon: <Star size={20} /> },
    {
      value: "99.8%",
      label: "Satisfaction Rate",
      icon: <CheckCircle size={20} />,
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is the minimum amount to open a savings account?",
      answer:
        "You can start with as little as ₵50 for most of our savings accounts. Some specialized accounts may have higher minimums.",
    },
    {
      question: "How often is interest paid on savings?",
      answer:
        "Interest is calculated daily and paid monthly directly into your savings account.",
    },
    {
      question: "Are my savings insured?",
      answer:
        "Yes, all deposits are insured up to ₵50,000 per depositor through our deposit protection scheme.",
    },
    {
      question: "Can I access my savings online?",
      answer:
        "Absolutely! You can manage your savings 24/7 through our mobile app and online banking portal.",
    },
    {
      question: "What documents do I need to open an account?",
      answer:
        "You'll need a valid government-issued ID, proof of address, and a recent passport-sized photograph.",
    },
  ];

  // Calculator data
  const calculatorData = {
    interestRates: {
      regular: 2.5,
      goal: 3.8,
      fixed: 5.2,
      children: 3.0,
      senior: 4.0,
      digital: 2.8,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/savings1.webp"
            alt="Savings and financial growth"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback gradient if image fails to load
              e.target.style.display = "none";
              const fallback = document.createElement("div");
              fallback.className =
                "absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900";
              e.target.parentNode.appendChild(fallback);
            }}
          />
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circles */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-10 w-64 h-64 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-10 w-80 h-80 border border-white rounded-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-[#1A1C47] rounded-full" />
              <h2 className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                Why Choose GTCCU Savings
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-[#1A1C47] rounded-full" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Security{" "}
              <span className="bg-gradient-to-r from-blue-600 to-[#1A1C47] bg-clip-text text-transparent">
                Meets Growth
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge security with competitive returns to give
              you peace of mind and financial growth.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Plans Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Savings Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Find the perfect savings plan that matches your financial goals
              and lifestyle.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                "All Plans",
                "High Yield",
                "Flexible",
                "Long Term",
                "Digital",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.toLowerCase()
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Savings Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {savingsPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredCard(plan.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span
                        className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${plan.color}`}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Card Header */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-90`}
                    />
                    <div className="relative h-full flex flex-col justify-center items-center p-6 text-white">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-center">
                        {plan.title}
                      </h3>
                      <p className="text-blue-100 text-center mt-2">
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle
                            size={16}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <div className="text-sm text-gray-500 mb-1">
                          Min. Amount
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {plan.minAmount}
                        </div>
                      </div>
                      <a
                        href={`mailto:info@gtccu.com?subject=Interest Rate Enquiry – ${plan.title}&body=Hello GTCCU Team,%0D%0A%0D%0AI would like to know the current interest rate for the ${plan.title} plan.%0D%0A%0D%0AThank you.`}
                        className="block bg-gradient-to-r from-blue-600 to-[#1A1C47] rounded-xl p-3 text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
                      >
                        <div className="text-sm text-blue-100 mb-1">
                          Want the interest rate?
                        </div>
                        <div className="text-lg font-bold text-white flex items-center justify-center gap-2">
                          Contact Us
                          <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                    <motion.div
                      animate={{
                        width: hoveredCard === plan.id ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                      className={`h-full bg-gradient-to-r ${plan.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our savings accounts.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                  <ChevronDown
                    className="text-gray-400 flex-shrink-0"
                    size={20}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
