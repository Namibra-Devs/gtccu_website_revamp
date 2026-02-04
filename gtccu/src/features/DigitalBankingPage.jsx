import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Shield,
  Zap,
  Lock,
  Download,
  Globe,
  Bell,
  CreditCard,
  Wallet,
  TrendingUp,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Play,
  Apple,
  ExternalLink,
  BarChart,
  Users,
  Key,
  RefreshCw,
  Eye,
  ShieldCheck,
  Smartphone as PhoneIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DigitalBankingPage() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeAppImage, setActiveAppImage] = useState(0);

  // Features for the 6 cards around the phone
  const phoneFeatures = [
    {
      id: 1,
      title: "Instant Transfers",
      description:
        "Send money to any bank in Ghana instantly. No delays, no hidden fees.",
      icon: <Zap className="text-blue-600" size={24} />,
      color: "from-blue-500 to-cyan-800",
      position: "left",
    },
    {
      id: 2,
      title: "Bill Payments",
      description:
        "Pay utilities, school fees, and subscriptions with one tap.",
      icon: <CreditCard className="text-purple-600" size={24} />,
      color: "from-purple-500 to-pink-800",
      position: "left",
    },
    {
      id: 3,
      title: "Budget Tracking",
      description:
        "Smart insights and spending analysis to help you save more.",
      icon: <BarChart className="text-emerald-600" size={24} />,
      color: "from-emerald-500 to-teal-800",
      position: "left",
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Round-the-clock customer support via chat, call, or email.",
      icon: <Clock className="text-amber-600" size={24} />,
      color: "from-amber-500 to-orange-800",
      position: "right",
    },
    {
      id: 5,
      title: "Multi-Account",
      description: "Manage all your GTCCU accounts from a single dashboard.",
      icon: <Wallet className="text-rose-600" size={24} />,
      color: "from-rose-500 to-red-800",
      position: "right",
    },
    {
      id: 6,
      title: "Secure Access",
      description:
        "Biometric login and two-factor authentication for maximum security.",
      icon: <ShieldCheck className="text-indigo-600" size={24} />,
      color: "from-indigo-500 to-violet-800",
      position: "right",
    },
  ];

  // App features for the second section
  const appFeatures = [
    {
      title: "Biometric Security",
      description:
        "Login with fingerprint or face recognition for ultimate security",
      icon: <Key size={20} />,
    },
    {
      title: "Real-time Notifications",
      description: "Instant alerts for all transactions and account activities",
      icon: <Bell size={20} />,
    },
    {
      title: "Quick Balance",
      description: "View your balance without logging in (optional)",
      icon: <Eye size={20} />,
    },
    {
      title: "Auto Updates",
      description: "App updates automatically with new features",
      icon: <RefreshCw size={20} />,
    },
  ];

  // Phone mockup images
  const phoneImages = [
    {
      id: 1,
      src: "/images/phone1.png",
      alt: "GTCCU Mobile App Dashboard",
      title: "Dashboard View",
      description: "Complete overview of your finances",
    },
    {
      id: 2,
      src: "/images/phone-1.png",
      alt: "GTCCU Mobile App Transactions",
      title: "Transactions",
      description: "Easy tracking and management",
    },
  ];

  // App stats
  const appStats = [
    { value: "4.9★", label: "App Store Rating", color: "text-yellow-500" },
    { value: "50K+", label: "Active Users", color: "text-blue-500" },
    { value: "99.9%", label: "Uptime", color: "text-emerald-500" },
    { value: "<2s", label: "Avg. Load Time", color: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/card1.jpeg"
            alt="Digital banking technology"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              const fallback = document.createElement("div");
              fallback.className =
                "absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900";
              e.target.parentNode.appendChild(fallback);
            }}
          />
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-white/10 rounded-full"
          />
        </div>
      </section>

      {/* Phone with Feature Cards Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Everything{" "}
              <span className="bg-gradient-to-r from-blue-600 to-[#1A1C47] bg-clip-text text-transparent">
                You Need in One App
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mobile app combines powerful features with elegant design for
              the perfect banking experience.
            </p>
          </motion.div>

          {/* Phone with Features Layout */}
          <div className="relative">
            {/* Phone at the Top on Mobile, Center on Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-sm mb-16 lg:mb-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-10"
            >
              {/* Phone Mockup */}
              <div className="relative rounded-[40px] p-4 ">
                <div className="relative h-[full] overflow-hidden">
                  <img
                    src="/images/phone-1.png"
                    alt="GTCCU App Interface"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.className +=
                        " bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900";
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature Cards Grid - 3 left, 3 right of phone */}
            <div className="grid lg:grid-cols-2 gap-">
              {/* Left Column Features */}
              <div className="space-y-8">
                {phoneFeatures
                  .filter((feature) => feature.position === "left")
                  .map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredFeature(feature.id)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      className={`relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500 lg:ml-auto lg:mr-6 max-w-[360px] right-0 lg:right-50 mb-4 ${
                        hoveredFeature === feature.id ? "scale-105" : ""
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`p-3 bg-gradient-to-br ${feature.color}/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>

                      {/* Animated Border */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                        <motion.div
                          animate={{
                            width:
                              hoveredFeature === feature.id ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.3 }}
                          className={`h-full bg-gradient-to-r ${feature.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Right Column Features */}
              <div className="space-y-8 lg:mt-32">
                {phoneFeatures
                  .filter((feature) => feature.position === "right")
                  .map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredFeature(feature.id)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      className={`relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500 lg:ml-auto lg:mr-6 max-w-[360px] ${
                        hoveredFeature === feature.id ? "scale-105" : ""
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`p-3 bg-gradient-to-br ${feature.color}/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>

                      {/* Learn More Link */}
                      <Link
                        to="#"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 group/link"
                      >
                        <span>Learn more</span>
                        <ChevronRight
                          size={16}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                      </Link>

                      {/* Animated Border */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                        <motion.div
                          animate={{
                            width:
                              hoveredFeature === feature.id ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.3 }}
                          className={`h-full bg-gradient-to-r ${feature.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/mobile-hero1.jpeg"
            alt="Digital banking background"
            className="
    w-full h-full
    object-contain md:object-cover   // 👈 key fix
    bg-[#1A1C47]
  "
            onError={(e) => {
              e.target.style.display = "none";
              const fallback = document.createElement("div");
              fallback.className =
                "absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900";
              e.target.parentNode.appendChild(fallback);
            }}
          />
        </div>
      </section>

      {/* App Features & Download Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: App Features & Download */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-[#1A1C47] rounded-full" />
                <h2 className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                  NEW MOBILE APP
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-[#1A1C47] rounded-full" />
              </div>

              {/* Title */}

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Banking in{" "}
                <span className="bg-gradient-to-r from-blue-800 to-[#1A1C47] bg-clip-text text-transparent">
                  Your Pocket
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Join over 50,000 satisfied users who manage their finances
                effortlessly with our mobile app.
              </p>

              {/* App Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {appFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
                      <div className="text-blue-600">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              {/* <div className="space-y-4">
                <a
                  href="https://apps.apple.com/app/gtccu-mobile-banking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-4 bg-gray-900 hover:bg-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Apple className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-xl font-bold text-white">App Store</div>
                  </div>
                  <Download className="ml-auto text-white opacity-70 group-hover:translate-y-1 transition-transform" size={20} />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.gtccu.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.25.92-.59 1.19l-2.01 1.25-2.41-2.41 2.41-2.41 2.01 1.25m-15.6-8.2L16.86 12 13 15.88l-9.6 9.6c-.23-.13-.4-.35-.4-.63v-17c0-.28.17-.5.4-.63"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-100">Get it on</div>
                    <div className="text-xl font-bold text-white">Google Play</div>
                  </div>
                  <Download className="ml-auto text-white opacity-70 group-hover:translate-y-1 transition-transform" size={20} />
                </a>
              </div> */}
            </motion.div>

            {/* Right: Overlapping Phone Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[600px] flex items-center justify-center"
            >
              {/* Overlapping Phones Container */}
              <div className="relative w-full max-w-md">
                {phoneImages.map((phone, index) => (
                  <motion.div
                    key={phone.id}
                    initial={{
                      opacity: 0,
                      y: 50,
                      rotate: index === 0 ? -5 : 5,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotate: index === 0 ? -8 : 8,
                    }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -20, rotate: index === 0 ? -12 : 12 }}
                    className={`absolute ${index === 0 ? "left-0" : "right-0"} top-1/2 transform -translate-y-1/2 w-[65%] cursor-pointer`}
                    onClick={() => setActiveAppImage(index)}
                  >
                    <div className="relative  overflow-hidden">
                      {/* Try to load actual image */}
                      <img
                        src={phone.src}
                        alt={phone.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.className += "";
                        }}
                      />
                      {/* Fallback if image doesn't load */}
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <PhoneIcon
                            size={48}
                            className="mx-auto mb-4 opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {activeAppImage === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-2 rounded-full shadow-xl"
                      >
                        <CheckCircle size={16} />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
