import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Building, 
  Target, 
  Shield, 
  Globe,
  ArrowRight,
  ChevronRight,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  Award,
  Star,
  Smartphone,
  Home,
  Briefcase,
  GraduationCap,
  Heart
} from "lucide-react";

export default function AboutSection() {
  const dynamicContent = [
    {
      id: 1,
      title: "Who We Are",
      description: "Global Teachers Co-operative Credit Union (GTCCU) is the preferred financial institution for educators, stakeholders, and communities. Based in Tamale's business precinct, we serve as a pillar of financial stability and growth.",
      icon: <Building size={28} />,
      highlights: ["Member-Owned", "Community Focused", "Since 1995"],
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: 2,
      title: "Our Mission",
      description: "To deliver innovative financial solutions that optimize customer satisfaction and shareholder value through modern technology and a motivated professional team committed to excellence.",
      icon: <Target size={28} />,
      highlights: ["Innovation", "Customer Excellence", "Technology"],
      color: "from-purple-600 to-indigo-500",
    },
    {
      id: 3,
      title: "Our Values",
      description: "Integrity, transparency, and commitment to member financial well-being. We provide accessible financial products at affordable rates through cost-effective, ethical practices.",
      icon: <Shield size={28} />,
      highlights: ["Integrity", "Transparency", "Accessibility"],
      color: "from-emerald-600 to-teal-500",
    },
    {
      id: 4,
      title: "Our Vision",
      description: "To be Ghana's leading financial cooperative, transforming lives through sustainable financial solutions that empower communities and foster economic growth.",
      icon: <Globe size={28} />,
      highlights: ["Leadership", "Transformation", "Empowerment"],
      color: "from-amber-600 to-orange-500",
    },
  ];

  const featureCards = [
    {
      id: 1,
      image: "/images/card1.jpeg",
      icon: <TrendingUp size={24} />,
      title: "Smart Savings",
      description: "Tailored savings plans with competitive interest rates to help you achieve your financial goals faster.",
      linkText: "Explore Savings Plans",
      link: "/services/savings",
      stats: "15% Avg. Annual Growth",
    },
    {
      id: 2,
      image: "/images/card2.jpeg",
      icon: <DollarSign size={24} />,
      title: "Affordable Loans",
      description: "Flexible loan packages with low interest rates and convenient repayment terms for all needs.",
      linkText: "View Loan Options",
      link: "/services/loans",
      stats: "From 8% Interest Rate",
    },
    {
      id: 3,
      image: "/images/cardz.png",
      icon: <Smartphone size={24} />,
      title: "Digital Banking",
      description: "Access your accounts 24/7 with our secure mobile and online banking platforms.",
      linkText: "Try Digital Banking",
      link: "/services/digital",
      stats: "10K+ Active Users",
    },
    {
      id: 4,
      image: "/images/gallery5.jpg",
      icon: <Users size={24} />,
      title: "Community First",
      description: "We invest back into our communities through education, healthcare, and development projects.",
      linkText: "Our Community Work",
      link: "/about/who-we-are",
      stats: "₵2M+ Community Investment",
    },
  ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prev) => (prev + 1) % dynamicContent.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 shadow-[0_0_200px_50px_rgba(30,58,138,0.15)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_100px_20px_rgba(30,64,175,0.05)]" />

      {/* Feature Cards Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          

          {/* 4 Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featureCards.map((card) => {
              const isHovered = hoveredCard === card.id;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: card.id * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative overflow-hidden rounded-sm bg-white cursor-pointer"
                  // style={{ boxShadow: "0 50px 60px rgba(11, 26, 68, 0.6)" }}
                >
                  {/* ═══════════════════════════════════════════
                      DEFAULT LAYER — image + text (always rendered)
                      ═══════════════════════════════════════════ */}
                  <div className="relative">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.12 : 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                      {/* Stats badge */}
                      <div className="absolute top-4 right-4 z-10">
                        
                      </div>
                    </div>

                    {/* Default text content */}
                    <div className="p-6 flex flex-col bg-white" style={{ minHeight: "220px" }}>
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-sm flex-shrink-0">
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
                      <div className="pt-4 border-t border-gray-100 mt-auto">
                        <Link
                          to={card.link}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
                        >
                          <span>{card.linkText}</span>
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ═══════════════════════════════════════════
                      HOVER OVERLAY — single panel that covers the
                      entire card and slides down from the top.
                      Uses clipPath so the image beneath still
                      scales visibly before being covered.
                      ═══════════════════════════════════════════ */}
                  <motion.div
                    animate={{
                      clipPath: isHovered
                        ? "inset(0% 0% 0% 0%)"   // fully visible
                        : "inset(0% 0% 100% 0%)", // clipped away (top edge only)
                    }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="absolute inset-0 flex flex-col"
                    style={{ backgroundColor: "#1A1C47" }}
                  >
                    {/* ── Top half: sits over the image area ── */}
                    <div className="h-48 flex-shrink-0 flex items-end justify-end p-4">
                      {/* Stats badge (dark version) */}
                      <div
                        className="px-3 py-1 rounded-full"
                        style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                      >
                        <span className="text-xs font-semibold text-white">{card.stats}</span>
                      </div>
                    </div>

                    {/* ── Bottom half: centered hover content ── */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                      <motion.div
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 18,
                        }}
                        transition={{ duration: 0.35, delay: isHovered ? 0.2 : 0 }}
                        className="flex flex-col items-center"
                      >
                        {/* Icon */}
                        <div
                          className="p-3 rounded-xl mb-4"
                          style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                        >
                          <div className="text-white">{card.icon}</div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>

                        {/* Stats text */}
                        <span
                          className="text-sm font-semibold mb-5"
                          style={{ color: "rgba(255,255,255,0.65)" }}
                        >
                          {card.stats}
                        </span>

                        {/* Quick View button */}
                        <Link
                          to={card.link}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2 rounded-lg transition-all duration-300"
                          style={{ border: "1px solid rgba(255,255,255,0.35)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                          }}
                        >
                          <span>Quick View</span>
                          <ArrowRight size={14} />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* ─── Bottom glow bar ─── */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden z-10">
                    <motion.div
                      animate={{ width: isHovered ? "100%" : "0%" }}
                      transition={{ duration: isHovered ? 0.5 : 0.7 }}
                      className="h-full"
                      style={{ background: "linear-gradient(to right, #1A1C47, #2e3171, #1A1C47)" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Dynamic Content */}
 <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative group">
              <motion.div
               
                className="relative"
              >
                <div className="relative rounded-sm overflow-hidden shadow-md">
                  <img
                    src="/images/gallery1.jpg"
                    alt="GTCCU Team"
                    className="w-full h-[400px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
               
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Growing Community
              </h4>
              <p className="text-gray-700 mb-6">
                Experience financial freedom with our tailored solutions designed for your success.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/join/open"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-[#1A1C47] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  <span>Become a Member</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          
          {/* Right: About Image & CTA */}
         
         <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-900 to-[#1A1C47] backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl overflow-hidden h-[400px] md:h-[450px]">
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-30" />
              <div className="relative h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentContentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex-1">
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl">
                          <div className="text-white">
                            {dynamicContent[currentContentIndex].icon}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        {dynamicContent[currentContentIndex].title}
                      </h3>
                      <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6">
                        {dynamicContent[currentContentIndex].description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {dynamicContent[currentContentIndex].highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 mt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {dynamicContent.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentContentIndex(idx)}
                              className={`relative w-3 h-3 rounded-full transition-all ${
                                idx === currentContentIndex
                                  ? "bg-cyan-400 scale-125"
                                  : "bg-white/30 hover:bg-white/50"
                              }`}
                              aria-label={`View ${dynamicContent[idx].title}`}
                            />
                          ))}
                          <span className="text-white/60 text-sm">
                            {currentContentIndex + 1}/{dynamicContent.length}
                          </span>
                        </div>
                        <button
                          onClick={() => setCurrentContentIndex((prev) => (prev + 1) % dynamicContent.length)}
                          className="text-white/70 hover:text-white transition-colors"
                          aria-label="Next content"
                        >
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
          </motion.div>

        </div>

       
      </div>
    </section>
  );
}