import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import AboutSection from "@sections/AboutSection";
import ProductsSection from "../components/sections/ProductSection";
import FrequentlyAskedSection from "../components/sections/FrequentlyAskedSection";

const heroContent = [
  {
    id: 1,
    title: "Welcome to GTCCU",
    subtitle: "Your trusted Credit Union for savings, loans, and financial growth.",
    cta: "Join Our Community",
    highlight: "Trusted Since 1995",
    color: "from-blue-600/80 to-cyan-500/80",
    buttonColor: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Secure Your Future",
    subtitle: "Flexible savings and investment options tailored for your success.",
    cta: "Start Saving Today",
    highlight: "Secure & Reliable",
    color: "from-emerald-600/80 to-teal-500/80",
    buttonColor: "from-emerald-600 to-teal-500",
  },
  {
    id: 3,
    title: "Smart Loans, Easy Access",
    subtitle: "Quick, affordable loans to support your dreams and ambitions.",
    cta: "Apply For Loan",
    highlight: "Low Interest Rates",
    color: "from-purple-600/80 to-indigo-500/80",
    buttonColor: "from-purple-600 to-indigo-500",
  },
  {
    id: 4,
    title: "Building Wealth Together",
    subtitle: "Community-focused financial solutions for collective prosperity.",
    cta: "Explore Services",
    highlight: "Community First",
    color: "from-amber-600/80 to-orange-500/80",
    buttonColor: "from-amber-600 to-orange-500",
  },
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Start muted for better UX
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Auto-rotate hero content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroContent.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  // Control video playback
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(e => console.log("Video play failed:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrent(index);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % heroContent.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + heroContent.length) % heroContent.length);
  };

  // Toggle video play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Hero Section with Single Video Background */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Single Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            playsInline
            loop
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            style={{ 
              filter: "brightness(0.7)",
              objectFit: "cover"
            }}
          >
            <source 
              src="/videos/hero1.mp4" 
              type="video/mp4" 
            />
            <source 
              src="/videos/finance-background.webm" 
              type="video/webm" 
            />
            {/* Fallback image */}
            <img
              src="/images/hero-background.jpg"
              alt="Financial background"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Dynamic Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${heroContent[current].color} mix-blend-overlay transition-all duration-1000`} />
          
          {/* Static Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />

          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              backgroundPosition: 'center center'
            }} />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-6xl w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-8 text-center"
              >
                {/* Highlight Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20"
                >
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm md:text-base font-semibold text-white tracking-wider">
                    {heroContent[current].highlight}
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {heroContent[current].title}
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-lg md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {heroContent[current].subtitle}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <button 
                    className={`group relative px-10 py-5 bg-gradient-to-r ${heroContent[current].buttonColor} text-white font-bold text-lg md:text-xl rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-3">
                      {heroContent[current].cta}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </button>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {[
                    { value: "25K+", label: "Active Members", icon: "👥" },
                    { value: "₵75M+", label: "Assets Managed", icon: "💰" },
                    { value: "98.7%", label: "Satisfaction Rate", icon: "⭐" },
                    { value: "24/7", label: "Digital Banking", icon: "📱" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 md:p-5 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 md:left-8 flex items-center">
            <button
              onClick={goToPrev}
              className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-4 md:right-8 flex items-center">
            <button
              onClick={goToNext}
              className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center gap-6">
            {/* Slide Dots */}
            <div className="flex items-center gap-3">
              {heroContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative group"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-white scale-125"
                      : "bg-white/40 group-hover:bg-white/60"
                  }`} />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {heroContent[index].title.split(" ")[0]}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Video Controls */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
              <button
                onClick={togglePlay}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause size={20} className="text-white" />
                ) : (
                  <Play size={20} className="text-white" />
                )}
              </button>
              
              <div className="w-px h-4 bg-white/30" />
              
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX size={20} className="text-white" />
                ) : (
                  <Volume2 size={20} className="text-white" />
                )}
              </button>
            </div>

            {/* Current Slide Indicator */}
            <div className="text-white/70 text-sm font-medium hidden md:block">
              {String(current + 1).padStart(2, '0')} / {String(heroContent.length).padStart(2, '0')}
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm text-white/60 font-medium">Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
      <ProductsSection />
      <FrequentlyAskedSection />
    </>
  );
}