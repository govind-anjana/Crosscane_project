import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle, ExternalLink, ArrowUp } from 'lucide-react'
import logo from '../../assets/logo6.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      label: "Website", 
      href: "https://www.crosscaneoverseas.com",
      color: "hover:text-gold-500",
      icon: <Globe size={18} />
    },
    { 
      label: "WhatsApp", 
      href: "https://wa.me/919406666677",
      color: "hover:text-[#25D366]",
      icon: <MessageCircle size={18} />
    },
    { 
      label: "Instagram", 
      href: "https://www.instagram.com/crosscaneoverseas",
      color: "hover:text-[#E4405F]",
      icon: (
        <svg size="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      label: "Email", 
      href: "mailto:contact@crosscaneoverseas.com",
      color: "hover:text-gold-500",
      icon: <Mail size={18} />
    }
  ];

  return (
    <footer className="bg-navy-900 text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-1 md:gap-12 mb-10">
          
          {/* Brand Column */}
          <div className="space-y-5 flex-[1.5] flex flex-col items-start text-left">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Crosscane Overseas" className="h-20 w-auto rounded-lg mb-2 bg-white/5  border border-white/10" />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md font-semibold">
              Empowering global trade through excellence, integrity, and innovative logistics solutions. Your trusted partner in connecting Indian excellence to the global market.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-gold-500/50`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col flex-1  lg:mt-0 items-start text-left">
            <h4 className="text-xl font-bold mb-0 md:mb-6 text-gold-500 uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-gold-500 transition-all flex items-center gap-2 group font-semibold">
                <span className="w-0 h-[1px] bg-gold-500 group-hover:w-3 transition-all"></span> Home
              </Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-all flex items-center gap-2 group font-semibold">
                <span className="w-0 h-[1px] bg-gold-500 group-hover:w-3 transition-all"></span> About Us
              </Link></li>
              <li><Link to="/products" className="hover:text-gold-500 transition-all flex items-center gap-2 group font-semibold">
                <span className="w-0 h-[1px] bg-gold-500 group-hover:w-3 transition-all"></span> Our Products
              </Link></li>
              <li><Link to="/team" className="hover:text-gold-500 transition-all flex items-center gap-2 group font-semibold">
                <span className="w-0 h-[1px] bg-gold-500 group-hover:w-3 transition-all"></span> Our Team
              </Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-all flex items-center gap-2 group font-semibold">
                <span className="w-0 h-[1px] bg-gold-500 group-hover:w-3 transition-all"></span> Contact
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col flex-[1.2] mt-10 lg:mt-0 items-start text-left">
            <h4 className="text-xl font-bold mb-6 text-gold-500 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-5 text-gray-400">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold-500/50 transition-all">
                  <MapPin size={18} className="text-gold-500" />
                </div>
                <span className="text-sm leading-relaxed font-bold">149 Vridavan Garden Colony, Pipliyahana Square, Indore(M.P.), 452010</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold-500/50 transition-all">
                  <Phone size={18} className="text-gold-500" />
                </div>
                <a href="tel:+919406666677" className="text-sm hover:text-gold-500 transition-all font-bold">+91 94066 66677, +91 99268 05334</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold-500/50 transition-all">
                  <Mail size={18} className="text-gold-500" />
                </div>
                <a href="mailto:contact@crosscaneoverseas.com" className="text-sm hover:text-gold-500 transition-all break-all font-bold">contact@crosscaneoverseas.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-gray-500 text-[12px] font-bold uppercase">
            © {currentYear} <span className="text-white">Crosscane Overseas</span>. All rights reserved.
          </p>
          
          {/* <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center hover:bg-white transition-all shadow-lg shadow-gold-500/20"
            aria-label="Back to Top"
          >
            <ArrowUp size={20} />
          </button> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
