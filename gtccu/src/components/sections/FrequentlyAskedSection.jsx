import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  ChevronDown,
  Users,
  Calendar,
  FileCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Map,
  MessageCircle,
  Star,
  Quote,
} from "lucide-react";

export default function FAQStatsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

  const faqs = [
    {
      q: "How do I open an account?",
      a: "You can open an account by visiting our branch or applying online in just a few steps. Our digital onboarding process takes less than 10 minutes.",
    },
    {
      q: "Are my savings secure?",
      a: "Yes, all deposits are insured and protected to ensure your funds are safe. We use bank-level security encryption and monitoring systems.",
    },
    {
      q: "Can I access services online?",
      a: "Absolutely. We offer online and mobile banking so you can access services anywhere, anytime. Our app has a 4.8-star rating on both iOS and Android.",
    },
    {
      q: "What makes your investment plans different?",
      a: "Our investment plans are tailored to individual needs with lower fees than traditional brokers. We offer personalized advice and ethical investment options.",
    },
  ];

  const stats = [
    { id: 1, label: "Happy Customers", value: 5730, icon: Users },
    { id: 2, label: "Years of Service", value: 15, icon: Calendar },
    { id: 3, label: "Loans Approved", value: 1500, icon: FileCheck },
    { id: 4, label: "Branches Nationwide", value: 5, icon: MapPin },
  ];

  const socials = [
    { id: 1, name: "Facebook", icon: Facebook, url: "#", color: "bg-blue-900" },
    {
      id: 2,
      name: "WhattsApp",
      icon: MessageCircle,
      url: "#",
      color: "bg-blue-900",
    },
    {
      id: 3,
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "bg-pink-600",
    },
    { id: 4, name: "E-mail", icon: Mail, url: "#", color: "bg-blue-900" },
  ];



  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-lg md:text-4xl font-bold text-blue-900 mb-8 flex items-center">
            <span className="w-1 h-8 bg-blue-600 mr-3 rounded-full"></span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openIndex === idx
                        ? "rotate-180 text-blue-600"
                        : "text-gray-500"
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full min-h-[400px] rounded-2xl shadow-xl relative overflow-hidden"
        >
          {/* Image Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/faq.jpg"
              alt="Background"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          </div>
        </motion.div>
      </div>
      <div className="w-full bg-[#1A1C47] py-16 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl font-bold mb-10 relative z-10 text-white text-center">
              Our Impact in Numbers
            </h2>

            <div className="grid grid-cols-2 gap-6 relative z-10">
              {stats.map(({ id, label, value, icon: Icon }) => (
                <motion.div
                  key={id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/15 transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold mb-1 text-white">
                    {isInView ? (
                      <CountUp
                        end={value}
                        duration={2.5}
                        separator=","
                        delay={0.2}
                      />
                    ) : (
                      0
                    )}
                    +
                  </div>
                  <p className="mt-2 text-blue-100 font-medium text-sm">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Animated elements */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-blue-500 opacity-20 z-0"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

   


      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}
