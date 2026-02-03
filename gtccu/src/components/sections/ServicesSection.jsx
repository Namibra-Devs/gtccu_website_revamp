import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Smartphone,
  User,
  Building2,
  Globe,
  DollarSign,
  CreditCard,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function ServicesSection() {
  const [hoveredTopCard, setHoveredTopCard] = useState(null);
  const [hoveredBottomCard, setHoveredBottomCard] = useState(null);

  // Top Section: 4 Cards
  const topServices = [
    {
      id: 1,
      icon: Smartphone,
      title: "Digital Banking",
      description:
        "Access your accounts 24/7 with our secure mobile and online banking platforms.",
      features: [
        "Mobile App",
        "Online Banking",
        "Bill Payments",
        "Fund Transfers",
      ],
      color: "#1A1C47", // blue-600
      lightColor: "#8ebbf6ff", // blue-50
    },
    {
      id: 2,
      icon: User,
      title: "Personal Services",
      description:
        "Tailored financial solutions for individuals and families to achieve personal goals.",
      features: [
        "Savings Accounts",
        "Personal Loans",
        "Insurance",
        "Retirement Plans",
      ],
      color: "#1A1C47", // emerald-600
      lightColor: "#d1fae5", // emerald-50
    },
    {
      id: 3,
      icon: Building2,
      title: "Corporate Banking",
      description:
        "Comprehensive banking solutions for businesses of all sizes and sectors.",
      features: [
        "Business Accounts",
        "Commercial Loans",
        "Payroll Services",
        "Trade Finance",
      ],
      color: "#1A1C47", // purple-600
      lightColor: "#f3e8ff", // purple-50
    },
    {
      id: 4,
      icon: Globe,
      title: "Trade Services",
      description:
        "International banking and trade solutions for global business operations.",
      features: [
        "Inward Transfers",
        "Letters of Credit",
        "Import/Export",
        "Trade Advisory",
      ],
      color: "#1A1C47", // amber-600
      lightColor: "#fef3c7", // amber-50
    },
  ];

  // Bottom Section: 3 Wider Cards
  const bottomServices = [
    {
      id: 1,
      icon: DollarSign,
      title: "Affordable Loans",
      description:
        "Flexible loan packages with competitive rates for various needs and purposes.",
      stats: "From 8% Interest",
      link: "/services/loans",
      color: "#1A1C47",
      lightColor: "#dbeafe",
      features: [
        "Personal Loans",
        "Business Loans",
        "Mortgage",
        "Education Loans",
      ],
    },
    {
      id: 2,
      icon: Shield,
      title: "Secure Investments",
      description:
        "Grow your wealth with our carefully curated investment products and advisory.",
      stats: "Up to 15% Returns",
      link: "/services/investments",
      color: "#1A1C47",
      lightColor: "#d1fae5",
      features: [
        "Fixed Deposits",
        "Mutual Funds",
        "Treasury Bills",
        "Portfolio Management",
      ],
    },
    {
      id: 3,
      icon: CreditCard,
      title: "Payment Solutions",
      description:
        "Modern payment systems and cards for convenient and secure transactions.",
      stats: "24/7 Access",
      link: "/services/payments",
      color: "#1A1C47",
      lightColor: "#f3e8ff",
      features: [
        "Debit Cards",
        "Credit Cards",
        "Mobile Money",
        "Online Payments",
      ],
    },
  ];

  // Helper function to render icon with proper hover handling
  const renderIcon = (IconComponent, size, isHovered, color, lightColor) => (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isHovered ? "rgba(255,255,255,0.15)" : lightColor,
        scale: isHovered ? 1.1 : 1,
        rotate: isHovered ? 5 : 0,
      }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center justify-center p-4 rounded-2xl"
    >
      <IconComponent
        size={size}
        className={isHovered ? "text-white" : ""}
        style={{
          color: isHovered ? "#ffffff" : color,
        }}
      />
    </motion.div>
  );

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50/50" />

      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-[#1A1C47] rounded-full" />
            <h2 className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
              Our Services
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-[#1A1C47] rounded-full" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-[#1A1C47] bg-clip-text text-transparent">
              Financial Solutions
            </span>
          </h2>
        </motion.div>

        {/* Top Section: 4 Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {topServices.map((service, index) => {
              const isHovered = hoveredTopCard === service.id;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredTopCard(service.id)}
                  onMouseLeave={() => setHoveredTopCard(null)}
                  className="relative group cursor-pointer"
                >
                  {/* Card Container */}
                  <div className="relative h-full bg-white rounded-xl transition-shadow duration-500 overflow-hidden border border-gray-200">
                    {/* Hover Overlay - #1A1C47 fills from top to bottom */}
                    <div className="absolute inset-0 overflow-hidden z-10">
                      <motion.div
                        initial={{ y: "-100%" }}
                        animate={{
                          y: isHovered ? "0%" : "-100%",
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-[#1A1C47]"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 p-6 md:p-8 h-full flex flex-col">
                      {/* Icon Container */}
                      {renderIcon(
                        service.icon,
                        32,
                        isHovered,
                        service.color,
                        service.lightColor,
                      )}

                      {/* Title */}
                      <motion.h3
                        initial={false}
                        animate={{
                          color: isHovered ? "#ffffff" : "#1f2937",
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-xl font-bold mb-4 mt-6"
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={false}
                        animate={{
                          color: isHovered
                            ? "rgba(255,255,255,0.85)"
                            : "#6b7280",
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-gray-600 mb-6 flex-grow"
                      >
                        {service.description}
                      </motion.p>

                      {/* Features List */}
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              initial={false}
                              animate={{
                                backgroundColor: isHovered
                                  ? "rgba(255,255,255,0.2)"
                                  : service.lightColor,
                                color: isHovered ? "#ffffff" : service.color,
                              }}
                              transition={{ duration: 0.3 }}
                              className="p-1.5 rounded-lg"
                            >
                              <CheckCircle size={14} />
                            </motion.div>
                            <motion.span
                              initial={false}
                              animate={{
                                color: isHovered ? "#ffffff" : "#4b5563",
                              }}
                              transition={{ duration: 0.3 }}
                              className="text-sm font-medium"
                            >
                              {feature}
                            </motion.span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      {/* <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-8 pt-6"
                      >
                        <motion.div
                          initial={false}
                          animate={{ 
                            borderTopColor: isHovered ? "rgba(255,255,255,0.2)" : "#e5e7eb"
                          }}
                          transition={{ duration: 0.3 }}
                          className="border-t"
                        >
                          <Link
                            to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group/link inline-flex items-center gap-2 text-sm font-medium"
                          >
                            <motion.span
                              initial={false}
                              animate={{ 
                                color: isHovered ? "#ffffff" : service.color
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              Learn More
                            </motion.span>
                            <motion.div
                              initial={false}
                              animate={{ 
                                color: isHovered ? "#ffffff" : service.color,
                                x: isHovered ? 4 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight size={16} />
                            </motion.div>
                          </Link>
                        </motion.div>
                      </motion.div> */}
                    </div>

                    {/* Border Animation */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-[#1A1C47] z-30 origin-left"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

       
      </div>
    </section>
  );
}
