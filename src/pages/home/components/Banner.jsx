import React from 'react'
import { motion } from 'framer-motion'
import banner from '../../../assets/Export-Import.jpg'

const Banner = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={banner} 
          alt="Premium Export Import Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-royal-700/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Global Trade Solutions with <span className="text-gold-gradient">Premium Excellence</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200 mb-8 max-w-lg"
          >
            Empowering your business with seamless cross-border commerce and innovative logistics strategies. Experience the pinnacle of international trade.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="/contact" className="btn-premium">
              Get Started
            </a>
            <a href="/about" className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-12 opacity-10 hidden lg:block">
        <div className="w-64 h-64 border-8 border-gold-500 rounded-full" />
      </div>
    </section>
  )
}

export default Banner

