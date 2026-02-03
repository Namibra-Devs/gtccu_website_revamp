import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  User,
  Search,
  FileText,
  Building,
  Users,
  Crown,
  Image as ImageIcon,
  Newspaper,
  Briefcase,
  FileCode,
  Phone,
  Home,
  HelpCircle,
  DollarSign,
  TrendingUp,
  PieChart,
  Wallet,
  Star,
  Shield,
  ArrowRight,
  Menu,
  LogIn,
  CreditCard,
  BarChart3,
} from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRefs = useRef({});
  const searchRef = useRef(null);
  const controls = useAnimation();
  const logoControls = useAnimation();

  // Enhanced scroll effect with dynamic blur
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdowns
      if (
        !Object.values(dropdownRefs.current).some(
          (ref) => ref && ref.contains(event.target)
        )
      ) {
        setDropdownOpen(null);
      }
      // Close search if clicking outside
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fixed Typewriter animation for GTCCU
  useEffect(() => {
    const animateLogo = async () => {
      const text = "GTCCU";

      // Initial state
      await controls.start({
        width: "0px",
        transition: { duration: 0 },
      });

      while (true) {
        // Type animation - FULL TEXT
        for (let i = 0; i <= text.length; i++) {
          await controls.start({
            width: `${i * 24}px`, // Adjusted width calculation
            transition: { duration: 0.15 },
          });
          await new Promise((resolve) => setTimeout(resolve, 150));
        }

        // Pause with full text visible
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Delete animation
        for (let i = text.length; i >= 0; i--) {
          await controls.start({
            width: `${i * 24}px`,
            transition: { duration: 0.1 },
          });
          await new Promise((resolve) => setTimeout(resolve, 100));
        }

        // Pause before restart
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
    };

    animateLogo();
  }, [controls]);

  // Optimized navigation structure with Lucide icons
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={18} />,
    },
    {
      name: "Join Now",
      id: "join-now",
      icon: <LogIn size={18} />,
      subItems: [
        {
          name: "Make an Enquiry",
          path: "/join/enquiry",
          icon: <FileText size={16} />,
        },
        {
          name: "Open Account",
          path: "/join/open",
          icon: <User size={16} />,
        },
       
      ],
    },
    {
      name: "Services",
      id: "services",
      icon: <DollarSign size={18} />,
      subItems: [
        {
          name: "Loans & Financing",
          path: "/services/loans",
          icon: <CreditCard size={16} />,
        },
        {
          name: "Investments",
          path: "/services/investments",
          icon: <TrendingUp size={16} />,
        },
        {
          name: "Shares",
          path: "/services/shares",
          icon: <PieChart size={16} />,
        },
        {
          name: "Savings Accounts",
          path: "/services/savings",
          icon: <Wallet size={16} />,
        },
        {
          name: "Mobile Banking",
          path: "/services/digital",
          icon: <Phone size={16} />,
        },
      ],
    },
    {
      name: "About",
      id: "about-us",
      icon: <Building size={18} />,
      subItems: [
        {
          name: "Who We Are",
          path: "/about/who-we-are",
          icon: <HelpCircle size={16} />,
        },
        {
          name: "Our Team",
          path: "/about/team",
          icon: <Users size={16} />,
        },
        {
          name: "Our Board",
          path: "/about/board",
          icon: <Crown size={16} />,
        },
        {
          name: "Gallery",
          path: "/about/gallery",
          icon: <ImageIcon size={16} />,
        },
      ],
    },
    {
      name: "Resources",
      id: "resources",
      icon: <BarChart3 size={18} />,
      subItems: [
        {
          name: "Reports",
          path: "/reports",
          icon: <FileText size={16} />,
        },
        {
          name: "News",
          path: "/news",
          icon: <Newspaper size={16} />,
        },
        {
          name: "Jobs",
          path: "/jobs",
          icon: <Briefcase size={16} />,
        },
        {
          name: "Policies",
          path: "/policies",
          icon: <Shield size={16} />,
        },
        {
          name: "Bye-laws",
          path: "/about/byelaws",
          icon: <FileCode size={16} />,
        },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <Phone size={18} />,
    },
  ];

  const handleDropdownToggle = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
    if (searchOpen) setSearchOpen(false);
  };

  const renderDropdownItems = (items) => {
    return items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <NavLink
  to={item.path}
  className="flex items-center gap-3 px-4 py-3 
  text-gray-700 
  transition-all duration-300 ease-out 
  group hover:bg-white/15 hover:text-blue-700 hover:backdrop-blur-sm
  hover:translate-x-2"
  onClick={() => setDropdownOpen(null)}
>

          <div className="text-blue-500">{item.icon}</div>
          <span className="flex-1">{item.name}</span>
          <ChevronDown
            className="transform -rotate-90 opacity-0 group-hover:opacity-100 transition-all duration-200 text-gray-400"
            size={16}
          />
        </NavLink>
      </motion.div>
    ));
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 overflow-x-none ${
          scrolled
            ? "bg-gradient-to-r from-blue-900/30 via-blue-800/20 to-blue-900/30 backdrop-blur-xl shadow-lg shadow-blue-900/20 border-b border-white/15"
  : "bg-gradient-to-b from-blue-950/30 via-transparent to-transparent"
        }`}
      >
        {/* Background Blur Layer */}
        <div
          className={`absolute inset-0 backdrop-blur-xl transition-all duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo + Branding */}
            <NavLink to="/" className="flex items-center space-x-4 z-10 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-50" />
                <motion.img
                  src="/images/gtccu-logo.PNG"
                  alt="GTCCU Logo"
                  className="relative h-12 w-12 rounded-full border-2 border-white/30"
                  animate={{
                    rotate: scrolled ? 0 : 360,
                    scale: scrolled ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              <div className="flex">
                <div className="relative">
                  <motion.div
                    className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent overflow-hidden whitespace-nowrap"
                    animate={controls}
                    initial={{ width: 0 }}
                    style={{
                      minWidth: "120px",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 800,
                      letterSpacing: "0.05em",
                    }}
                  >
                    GTCCU
                  </motion.div>
                </div>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Navigation Items */}
              <ul className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative"
                    ref={(el) => (dropdownRefs.current[item.id || index] = el)}
                  >
                    {item.subItems ? (
                      <>
                        <motion.button
                          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                            dropdownOpen === item.id
                              ? "bg-white/20 backdrop-blur-sm text-white"
                              : "text-white/90 hover:bg-white/10 hover:text-white"
                          }`}
                          onClick={() => handleDropdownToggle(item.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                          <motion.div
                            animate={{
                              rotate: dropdownOpen === item.id ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {dropdownOpen === item.id && (
                            <motion.div
                              initial={{ opacity: 0, y: -20, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -20, scale: 0.95 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute left-1/2 transform -translate-x-1/2 mt-3 min-w-[280px] bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 rounded-md py-3 z-50 border border-white/20 overflow-hidden"
                            >
                              
                              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 px-4 py-2 mb-2">
                                {item.icon}
                                <span>{item.name}</span>
                              </div>
                              {renderDropdownItems(item.subItems)}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `relative flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-white/80 hover:text-white"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {item.icon}
                            <span className="relative z-10">{item.name}</span>
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 backdrop-blur-sm rounded-full border border-white/30"
                                layoutId="navbar-active"
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                }}
                              />
                            )}
                          </>
                        )}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative p-3 rounded-full bg-white/10 backdrop-blur-sm z-10"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7 flex flex-col justify-between">
                {/* Top Line – Long */}
                <motion.span
                  className="block h-0.5 rounded-full bg-white"
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 9, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Middle Line – Short */}
                <motion.span
                  className="block h-0.5 rounded-full bg-white/80 mx-auto"
                  animate={
                    mobileOpen
                      ? { opacity: 0, width: "0%" }
                      : { opacity: 1, width: "60%" }
                  }
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />

                {/* Bottom Line – Long */}
                <motion.span
                  className="block h-0.5 rounded-full bg-white"
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -9, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Separate Mobile Navigation Component */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}
