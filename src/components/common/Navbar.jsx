import React, { useState } from 'react';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';
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
      href: '/Products',
      hasDropdown: true,
submenu: [
  { name: "Banana Powder", href: "/services/banana-powder" },
  { name: "Chickpeas", href: "/services/chickpeas" },
  { name: "Onions (onion powder)", href: "/services/onions-onion-powder" },
  { name: "Banana fibers", href: "/services/banana-fibers" },
  { name: "textiles", href: "/services/textiles" },
  { name: "jegry powder", href: "/services/jegry-powder" },
  { name: "wheat", href: "/services/wheat" },
  { name: "salt", href: "/services/salt" },
  // { name: "Wisdom Teeth Extraction", href: "/services/wisdom-teeth-extraction" },

]


    },
    { name: 'Our Team', href: '/Our-Team' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Admin', href: '/admin' }
  ];

  return (
    <nav className="py-0  sticky top-0 z-50">
      <div className="max-w-7xl bg-white  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" ><img 
              src={logo} 
              alt="Logo"  
              className="h-10 md:h-19 w-auto object-contain transition-all" 
            /></Link>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <a
                  href={link.href}
                  className="text-navy-900 text-lg hover:text-gold-500 font-medium transition-colors flex items-center gap-1 cursor-pointer"
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
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-bg-primary overflow-hidden"
                      >
                        <div className="py-2">
                          {link.submenu.map((item, index) => (
                            <motion.a
                              key={item.name}
                              href={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="block px-5 py-2 text-navy-900 hover:bg-gold-300/20 hover:text-gold-500 transition-colors font-medium"
                            >
                              {item.name}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Book Appointment Button - Desktop */}
          <div className="hidden md:block">
            
            {/* <CartoonButton onClick={() => navigate('/book-appointment')} label="Book Appointment" className='bg-primary px-5 py-2 rounded-full text-white' /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
               aria-label="Open Menu"
              className="text-navy-900 hover:text-gold-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full text-left text-navy-900 hover:text-gold-500 font-medium py-2 transition-colors flex items-center justify-between"
                        >
                          {link.name}
                          <motion.div
                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 space-y-1"
                            >
                              {link.submenu.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                   className="block text-navy-900/70 hover:text-gold-500 py-2 text-sm"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className="text-navy-900 hover:text-gold-500 font-medium py-2 transition-colors block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;