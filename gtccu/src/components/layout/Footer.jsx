import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  Clock,
  ArrowRight,
  ChevronRight,
  Send,
  Shield,
  Award,
  Globe,
  Building,
  Download,
  Smartphone,
  CreditCard,
  TrendingUp,
  Users,
  Banknote,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  FileText,
  Lock,
  HelpCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ModernFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Quick links organized by category
  const quickLinks = {
    "Banking Services": [
      {
        name: "Savings Accounts",
        icon: <Banknote size={16} />,
        link: "/services/savings",
      },
      {
        name: "Personal Loans",
        icon: <TrendingUp size={16} />,
        link: "/services/loans",
      },
      {
        name: "Digital Banking",
        icon: <Smartphone size={16} />,
        link: "/services/digital",
      },
      {
        name: "Investment Plans",
        icon: <CreditCard size={16} />,
        link: "/services/investments",
      },
      
    ],
    "About GTCCU": [
      { name: "Our Story", icon: <Building size={16} />, link: "/about/who-we-are" },
      {
        name: "Leadership Team",
        icon: <Users size={16} />,
        link: "/about/team",
      },
     
      { name: "News & Updates", icon: <FileText size={16} />, link: "/news" },
      {
        name: "Annual Reports",
        icon: <Download size={16} />,
        link: "/reports",
      },
    ],
    "Member Resources": [
     
     
     
      { name: "Contact Us", icon: <Phone size={16} />, link: "/contact" },
     
    ],
  };

  // Contact information
  const contactInfo = [
    {
      icon: <Phone size={18} />,
      text: "+233 37 209 1234",
      subtext: "Mon-Fri: 8AM-5PM",
    },
    {
      icon: <Mail size={18} />,
      text: "info@gtccu.com",
      subtext: "24/7 Support",
    },
    {
      icon: <MapPin size={18} />,
      text: "Tamale Business District",
      subtext: "Northern Region, Ghana",
    },
    {
      icon: <Clock size={18} />,
      text: "Monday - Friday: 8:00 AM - 5:00 PM",
      subtext: "Saturday: 9:00 AM - 1:00 PM",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      name: "Facebook",
      url: "https://facebook.com/gtccu",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Twitter size={20} />,
      name: "Twitter",
      url: "https://twitter.com/gtccu",
      color: "hover:bg-sky-500",
    },
    {
      icon: <Instagram size={20} />,
      name: "Instagram",
      url: "https://instagram.com/gtccu",
      color: "hover:bg-pink-600",
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/gtccu",
      color: "hover:bg-blue-700",
    },
    {
      icon: <Youtube size={20} />,
      name: "YouTube",
      url: "https://youtube.com/gtccu",
      color: "hover:bg-red-600",
    },
    {
      icon: <MessageCircle size={20} />,
      name: "WhatsApp",
      url: "https://wa.me/233372091234",
      color: "hover:bg-emerald-600",
    },
  ];

  // Security badges
  const securityBadges = [
    {
      icon: <Shield size={20} />,
      text: "Bank-Grade Security",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Lock size={20} />,
      text: "256-bit Encryption",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award size={20} />,
      text: "Licensed & Regulated",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe size={20} />,
      text: "PCI DSS Compliant",
      color: "from-amber-500 to-orange-500",
    },
  ];

  // Footer badges
  const footerBadges = [
    { text: "Member-Owned", bg: "bg-blue-900/30" },
    { text: "Since 1995", bg: "bg-purple-900/30" },
    { text: "Community First", bg: "bg-emerald-900/30" },
    { text: "Ethical Banking", bg: "bg-amber-900/30" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-[#1A1C47] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-900/20 to-transparent" />

        {/* Animated circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-1/4 w-64 h-64 border border-white/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 right-1/4 w-80 h-80 border border-white/20 rounded-full"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Top Section - Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Brand & Contact */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  {/* Logo Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src="/gtccu-logo.PNG"
                      alt="GTCCU Logo"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">GTCCU</h2>
                    <p className="text-sm text-blue-200">
                      Global Teachers Co-operative Credit Union
                    </p>
                  </div>
                </div>

                <p className="text-blue-100 mb-8 leading-relaxed">
                  Empowering educators and communities with trusted financial
                  solutions since 1995. Member-owned, community-focused banking.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                        <div className="text-blue-300">{info.icon}</div>
                      </div>
                      <div>
                        <p className="font-medium">{info.text}</p>
                        <p className="text-sm text-blue-300">{info.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2-4: Quick Links */}
            {Object.entries(quickLinks).map(([category, links], index) => (
              <div key={category} className="lg:col-span-1">
                <h3 className="text-lg font-bold mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
                  <ChevronRight size={18} className="text-cyan-400" />
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.link}
                        className="group flex items-center gap-3 py-2 text-blue-100 hover:text-white transition-colors duration-300"
                      >
                        <span className="p-1 bg-white/5 rounded group-hover:bg-white/10 transition-colors">
                          {item.icon}
                        </span>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Section - Social & Legal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-blue-200 text-sm font-medium">
                Follow Us:
              </span>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white/10 rounded-lg ${social.color} hover:scale-110 transition-all duration-300`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-blue-300 text-sm">
                © {new Date().getFullYear()} Global Teachers Co-operative Credit
                Union. All rights reserved.
              </p>
              <p className="text-blue-400/70 text-xs mt-1">
                GTCCU is licensed and regulated by the Bank of Ghana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
