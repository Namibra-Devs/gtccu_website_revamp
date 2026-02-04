import { motion } from "framer-motion";
import {
  Smartphone,
  Shield,
  Zap,
  Lock,
  Download,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Smartphone as PhoneIcon,
} from "lucide-react";

export default function MobileAppSection() {
  const features = [
    {
      icon: <Shield size={20} />,
      title: "Bank-Grade Security",
      description: "256-bit encryption & biometric authentication",
    },
    {
      icon: <Zap size={20} />,
      title: "Lightning Fast",
      description: "Instant transactions & real-time updates",
    },
    {
      icon: <Lock size={20} />,
      title: "Privacy First",
      description: "Your data stays protected & private",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Easy to Use",
      description: "Intuitive design for all ages",
    },
  ];

  const appStats = [
    { value: "4.8", label: "App Store Rating", stars: 5 },
    { value: "5K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
  ];

  // Phone mockup images from public/images
  const phoneImages = [
    {
      id: 1,
      src: "/images/phone-1.png", // Left phone (shortest)
      alt: "GTCCU Mobile App Dashboard",
      height: "h-[400px] md:h-[480px]",
      width: "w-[36%]",
      position: "left-0",
      transform: "translateX(-60%)",
      zIndex: "z-30",
      delay: 0.5,
    },
    {
      id: 2,
      src: "/images/phone1.png", // Middle phone
      alt: "GTCCU Mobile App Transactions",
      height: "h-[450px] md:h-[520px]",
      width: "w-[38%]",
      position: "",
      transform: "translateX(-30%)",
      zIndex: "z-20",
      delay: 0.4,
    },
    {
      id: 3,
      src: "/images/phone-2.jpeg", // Right phone (tallest)
      alt: "GTCCU Mobile App Banking",
      height: "h-[550px] md:h-[600px]",
      width: "w-[40%]",
      position: "right-0",
      transform: "",
      zIndex: "z-10",
      delay: 0.3,
    },
  ];

  // Fallback content if images don't exist
  const fallbackContent = [
    {
      title: "Dashboard",
      color: "from-purple-900 via-purple-800 to-pink-900",
    },
    {
      title: "Transactions",
      color: "from-emerald-900 via-emerald-800 to-teal-900",
    },
    {
      title: "Banking",
      color: "from-blue-900 via-blue-800 to-cyan-900",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Content & Download Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
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

            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Experience the future of banking with our award-winning mobile
              app. Manage your finances anytime, anywhere with ultimate security
              and convenience.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            {/* <div className="space-y-4 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
               
                <a
                  href="https://apps.apple.com/app/gtccu-mobile-banking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-4 bg-gray-900 hover:bg-[#1A1C47] rounded-md shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 bg-white/10 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.31-2.33 1.05-3.11z"/>
                    </svg>
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
                  className="group flex items-center gap-4 px-6 py-4 bg-[#1A1C47] hover:bg-gray-900 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 bg-white/10 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.25.92-.59 1.19l-2.01 1.25-2.41-2.41 2.41-2.41 2.01 1.25m-15.6-8.2L16.86 12 13 15.88l-9.6 9.6c-.23-.13-.4-.35-.4-.63v-17c0-.28.17-.5.4-.63"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="text-xl font-bold text-white">Google Play</div>
                  </div>
                  <Download className="ml-auto text-white opacity-70 group-hover:translate-y-1 transition-transform" size={20} />
                </a>
              </motion.div>
            </div> */}

            {/* App Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              {appStats.map((stat, index) => (
                <div key={index} className="text-center mb-4">
                  <div className="text-2xl font-bold text-gray-900 flex items-center gap-1">
                    {stat.value}
                    {stat.stars && (
                      <div className="flex ml-1">
                        {[...Array(stat.stars)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Overlapping Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px] md:h-[700px] flex items-center justify-center"
          >
            {/* Container for overlapping phones */}
            <div className="relative w-full max-w-2xl mx-auto h-full flex items-end justify-center">
              {phoneImages.map((phone, index) => (
                <motion.div
                  key={phone.id}
                  initial={{
                    opacity: 0,
                    y: 100 - index * 20,
                    rotateY: 20 - index * 15,
                  }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: phone.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 - index * 5 }}
                  className={`absolute ${phone.position} ${phone.zIndex}`}
                  style={{
                    width: phone.width,
                    transform: phone.transform,
                  }}
                >
                  {/* Phone Container with Shadow and Border */}
                  <div className="relative">
                    {/* Phone Frame */}
                    <div className="relative  overflow-hidden">
                      {/* Phone Screen */}
                      <div
                        className={`relative overflow-hidden rounded-2xl ${phone.height} `}
                      >
                        {/* Try to load actual image, fallback to gradient */}
                        <img
                          src={phone.src}
                          alt={phone.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // If image fails to load, show fallback
                            e.target.style.display = "none";
                            const fallback =
                              e.target.parentNode.querySelector(
                                ".image-fallback",
                              );
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />

                        {/* Fallback Content if image doesn't exist */}
                        <div
                          className={`image-fallback hidden absolute inset-0 bg-gradient-to-br ${fallbackContent[index].color} items-center justify-center p-6`}
                        >
                          <div className="text-center">
                            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-4 inline-block">
                              <PhoneIcon className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              GTCCU Mobile
                            </h3>
                            <p className="text-blue-100">
                              {fallbackContent[index].title} Screen
                            </p>

                            {/* Quick info for fallback */}
                            {index === 0 && (
                              <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="p-2 bg-white/10 rounded-xl">
                                  <div className="text-white text-xs">
                                    Balance
                                  </div>
                                  <div className="text-white font-bold">
                                    ₵12,456
                                  </div>
                                </div>
                                <div className="p-2 bg-white/10 rounded-xl">
                                  <div className="text-white text-xs">
                                    Income
                                  </div>
                                  <div className="text-emerald-300 font-bold">
                                    +₵4,320
                                  </div>
                                </div>
                              </div>
                            )}

                            {index === 1 && (
                              <div className="mt-4 space-y-2">
                                {[
                                  "Payment to John",
                                  "Bill Payment",
                                  "Fund Transfer",
                                ].map((item, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between p-2 bg-white/10 rounded-lg"
                                  >
                                    <span className="text-white text-sm">
                                      {item}
                                    </span>
                                    <span className="text-rose-300 text-sm">
                                      -₵{50 + i * 100}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {index === 2 && (
                              <div className="mt-4">
                                <div className="text-white text-lg font-bold mb-2">
                                  Quick Actions
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  {["Pay", "Transfer", "Deposit", "More"].map(
                                    (action) => (
                                      <button
                                        key={action}
                                        className="p-2 bg-white/10 rounded-lg text-white text-sm hover:bg-white/20"
                                      >
                                        {action}
                                      </button>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                   
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
