import { Link } from "react-router-dom";
import { 
  X, 
  ChevronDown, 
  Home,
  UserPlus,
  FileText,
  User,
  Star,
  DollarSign,
  TrendingUp,
  PieChart,
  Wallet,
  Building,
  Users,
  Crown,
  Image as ImageIcon,
  FileSpreadsheet,
  Newspaper,
  Briefcase,
  Shield,
  Phone,
  HelpCircle,
  LogIn,
  CreditCard,
  BarChart3,
  FileCode,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ isOpen, onClose, navItems }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Icon mapping for menu items
  const getItemIcon = (itemName) => {
    const iconMap = {
      "Home": <Home size={22} />,
      "Join Now": <UserPlus size={22} />,
      "Make an Enquiry": <MessageSquare size={20} />,
      "Open Account": <LogIn size={20} />,
      "Membership Benefits": <Star size={20} />,
      "Services": <DollarSign size={22} />,
      "Loans": <CreditCard size={20} />,
      "Loans & Financing": <CreditCard size={20} />,
      "Investments": <TrendingUp size={20} />,
      "Shares": <PieChart size={20} />,
      "Savings Accounts": <Wallet size={20} />,
      "About": <Building size={22} />,
      "About Us": <Building size={22} />,
      "Who We Are": <HelpCircle size={20} />,
      "Our Team": <Users size={20} />,
      "Our Board": <Crown size={20} />,
      "Gallery": <ImageIcon size={20} />,
      "Resources": <BarChart3 size={22} />,
      "Reports": <FileSpreadsheet size={20} />,
      "News": <Newspaper size={20} />,
      "Jobs": <Briefcase size={20} />,
      "Policies": <Shield size={20} />,
      "Bye-laws": <FileCode size={20} />,
      "Contact": <Phone size={22} />,
      "Contact Us": <Phone size={22} />
    };
    return iconMap[itemName] || null;
  };

  const simplifiedNavItems = navItems.map((item) => {
    if (item.name === "Join Now" && item.subItems) {
      return {
        ...item,
        subItems: item.subItems.map((subItem) => {
          if (subItem.name === "Open Account" && subItem.subItems) {
            return {
              name: "Open Account",
              path: "/join/open-account",
            };
          }
          return subItem;
        }),
      };
    }
    return item;
  });

  // Add icons to the simplified nav items
  const enhancedNavItems = simplifiedNavItems.map(item => ({
    ...item,
    icon: getItemIcon(item.name),
    subItems: item.subItems ? item.subItems.map(subItem => ({
      ...subItem,
      icon: getItemIcon(subItem.name)
    })) : null
  }));

  // ✅ Animation variants (reduced delayChildren)
  const circularContainerVariants = {
    closed: {
      clipPath: "circle(0% at 100% 0%)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      clipPath: "circle(150% at 100% 0%)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
  };

  const circularItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  const dropdownVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    open: {
      opacity: 1,
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const backdropVariants = {
    closed: { opacity: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with glass effect */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40 md:hidden"
            onClick={onClose}
          />

          {/* Mobile Menu with glass background */}
          <motion.div
            variants={circularContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 h-screen w-screen bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-indigo-900/95 backdrop-blur-2xl text-white z-50 md:hidden overflow-y-auto"
            style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(79, 70, 229, 0.95) 100%),
                radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)
              `,
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Header with glass effect */}
            <motion.div
              className="flex items-center justify-between p-8 border-b border-white/20 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-xl"
              variants={circularItemVariants}
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-50"></div>
                  <img
                    src="/images/gtccu-logo.PNG"
                    alt="GTCCU Logo"
                    className="relative h-12 w-12 rounded-full border-2 border-white/30"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    GTCCU
                  </span>
                  <span className="text-sm text-white/60 font-light tracking-widest">
                    FINANCIAL COOPERATIVE
                  </span>
                </motion.div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9, rotate: 90 }}
                whileHover={{ scale: 1.1 }}
                onClick={onClose}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg border border-white/20"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <X size={28} />
              </motion.button>
            </motion.div>

            {/* Navigation with glass items */}
            <motion.ul className="p-6 space-y-3">
              {enhancedNavItems.map((item, index) => (
                <motion.li key={index} variants={circularItemVariants}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggle(item.name)}
                        className="flex items-center justify-between w-full text-left py-4 px-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                        style={{
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-white/90">
                            {item.icon}
                          </div>
                          <span className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
                            {item.name}
                          </span>
                        </div>
                        <motion.div
                          animate={{
                            rotate: openDropdown === item.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.3, type: "spring" }}
                          className="text-white/70 group-hover:text-white"
                        >
                          <ChevronDown size={22} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.ul
                            variants={dropdownVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="ml-4 space-y-2 overflow-hidden mt-3"
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <motion.li
                                key={subIndex}
                                variants={circularItemVariants}
                              >
                                <Link
                                  to={subItem.path}
                                  onClick={onClose}
                                  className="flex items-center gap-4 py-3 px-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                                  style={{
                                    backdropFilter: 'blur(15px)',
                                    WebkitBackdropFilter: 'blur(15px)',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    marginLeft: '2rem'
                                  }}
                                >
                                  <div className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                                    {subItem.icon}
                                  </div>
                                  <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                                    {subItem.name}
                                  </span>
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="flex items-center gap-4 py-4 px-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                      style={{
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                      }}
                    >
                      <div className="text-white/90 group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <span className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
                        {item.name}
                      </span>
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button with glass effect */}
            <motion.div
              className="px-6 pb-8"
              variants={circularItemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/join/open"
                onClick={onClose}
                className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(6, 182, 212, 0.8) 100%)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 0 0 1px rgba(255,255,255,0.1)'
                }}
              >
                <User size={22} className="text-white" />
                <span className="text-xl font-bold text-white">Open Account</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-white"
                >
                  <ArrowRight size={22} />
                </motion.div>
              </Link>
            </motion.div>

            {/* Quick Links with glass effect */}
            <motion.div
              className="px-6 pb-8"
              variants={circularItemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider px-2">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Loans", path: "/services/loans", icon: <CreditCard size={20} /> },
                  { name: "News", path: "/news", icon: <Newspaper size={20} /> },
                  { name: "Jobs", path: "/jobs", icon: <Briefcase size={20} /> },
                  { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={onClose}
                    className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                    style={{
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      border: '1px solid rgba(255,255,255,0.15)'
                    }}
                  >
                    <div className="text-blue-300 group-hover:text-blue-200 mb-2 transition-colors duration-300">
                      {link.icon}
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-blue-100">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}