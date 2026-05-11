import React, { useState } from 'react';
import { Menu, X, Calendar, ChevronDown, Mail, Phone, Globe, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// import { CartoonButton } from '../ui/cartoon-button';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Products', 
      href: '/products',
      hasDropdown: true,
      submenu: [
        { name: "Banana Powder", href: "/services/banana-powder" },
        { name: "Chickpeas", href: "/services/chickpeas" },
        { name: "Premium Spices", href: "/services/spices" },
        { name: "Onions (onion powder)", href: "/services/onion-powder" },
        { name: "Banana fibers", href: "/services/banana-fibers" },
        { name: "textiles", href: "/services/textiles" },
        { name: "jegry powder", href: "/services/jegry-powder" },
        { name: "wheat", href: "/services/wheat" },
        { name: "salt", href: "/services/salt" },
      ]
    },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:block bg-navy-900 text-white py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-emerald-50/80">
              <Phone size={14} className="text-gold-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-50/80">
              <Mail size={14} className="text-gold-500" />
              <span>info@crosscane.com</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-emerald-50/80">
              <Globe size={14} className="text-gold-500" />
              <span>Global Export Excellence</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-50/80">
              <Shield size={14} className="text-gold-500" />
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="group">
                <img 
                  src={logo} 
                  alt="Logo"  
                  className="h-12 md:h-16 w-auto object-contain transition-all group-hover:scale-105" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  <Link
                    to={link.href}
                    className="text-navy-900 text-[17px] hover:text-gold-500 font-semibold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full -left-4 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="py-3 px-2 grid grid-cols-1 gap-1">
                            {link.submenu.map((item, index) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block px-4 py-2.5 text-navy-900 hover:bg-gold-500/10 hover:text-gold-500 transition-all rounded-xl font-medium text-[15px]"
                              >
                                <motion.span
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  {item.name}
                                </motion.span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/contact" className="btn-premium px-8 py-3 rounded-xl text-sm">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open Menu"
                className="p-2 text-navy-900 hover:text-gold-500 transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden pb-6 overflow-hidden border-t border-gray-100"
              >
                <div className="flex flex-col space-y-2 mt-4">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.hasDropdown ? (
                        <>
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="w-full text-left text-navy-900 hover:text-gold-500 font-bold py-3 transition-colors flex items-center justify-between text-lg"
                          >
                            {link.name}
                            <motion.div
                              animate={{ rotate: isServicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={20} />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4 space-y-1 bg-gray-50 rounded-2xl mb-2"
                              >
                                {link.submenu.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block text-navy-900/70 hover:text-gold-500 py-3 text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-navy-900 hover:text-gold-500 font-bold py-3 transition-colors block text-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-4">
                    <Link 
                      to="/contact" 
                      className="btn-premium w-full block text-center py-4 rounded-2xl shadow-none"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;