import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="bg-navy-900 py-16 relative overflow-hidden">
      {/* Background World Map Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80&w=2000" 
          alt="World Map" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center shrink-0 border border-gold-500/20">
              <Globe className="text-gold-500" size={40} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 italic">
                Let's Build Something <span className="text-gold-500">Great Together</span>
              </h2>
              <p className="text-white/40 font-medium">
                Get in touch with us for quality products and reliable export solutions.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="group flex items-center gap-4 bg-gold-500 text-navy-900 px-12 py-5 rounded-lg font-bold text-lg hover:bg-white transition-all duration-500 shadow-2xl shadow-gold-500/20"
          >
            CONTACT US
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
