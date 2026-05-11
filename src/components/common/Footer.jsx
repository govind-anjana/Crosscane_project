import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle, ExternalLink } from 'lucide-react'
import logo from '../../assets/logo.jpeg'

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto bg-navy-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={logo} alt="Crosscane Logo" className="h-16 w-auto rounded-lg mb-4" />
            <p className="text-gray-400 leading-relaxed">
              Empowering global trade through excellence, integrity, and innovative logistics solutions. Your trusted partner in international commerce.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <ExternalLink size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold-500">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-gold-500 transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold-500">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Global Logistics</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Market Research</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Trade Compliance</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Supply Chain</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold-500">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                <span>123 Trade Center, Global Plaza, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold-500 flex-shrink-0" />
                <span>info@crosscane.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-700 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Crosscane. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
