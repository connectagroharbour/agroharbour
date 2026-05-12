import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Sprout, ChevronDown, Waves, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const hasDarkHero = ['/', '/about', '/services', '/contact'].includes(location.pathname);
  const isSolidNavbar = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolidNavbar
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/Agro-logo.png" 
              alt="AgroHarbour - Modern Agriculture Consulting Brand Logo" 
              className={`h-16 w-auto object-contain transition-transform group-hover:scale-105 duration-300 ${!isSolidNavbar ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]' : ''}`}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div 
                    key={link.path}
                    className="relative group"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-[#2E7D32] ${
                        location.pathname === link.path
                          ? "text-[#2E7D32]"
                          : isSolidNavbar
                          ? "text-gray-700"
                          : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                    
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <Link
                            to="/services"
                            state={{ category: "hydroponics" }}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-[#F1F8E9] hover:text-[#2E7D32] transition-colors"
                          >
                            <Waves size={18} className="text-[#2E7D32]" />
                            <div>
                              <p className="font-bold">Hydroponics</p>
                              <p className="text-[10px] text-gray-400">Indoor & Vertical Farming</p>
                            </div>
                          </Link>
                          <Link
                            to="/services"
                            state={{ category: "soil" }}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-[#F1F8E9] hover:text-[#2E7D32] transition-colors border-t border-gray-50"
                          >
                            <Sprout size={18} className="text-[#2E7D32]" />
                            <div>
                              <p className="font-bold">Soil Farming</p>
                              <p className="text-[10px] text-gray-400">Analysis & Crop Planning</p>
                            </div>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-[#2E7D32] ${
                    location.pathname === link.path
                      ? "text-[#2E7D32]"
                      : isSolidNavbar
                      ? "text-gray-700"
                      : "text-white"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2E7D32]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isSolidNavbar ? "text-[#2E7D32]" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-2 text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-[#2E7D32]"
                        : "text-gray-700 hover:text-[#2E7D32]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white px-6 py-3 rounded-full font-medium text-center mt-4"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
