import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Globe, Shield, Users, Clock, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import about1 from '../../../assets/about1.png'
import about2 from '../../../assets/about2.png'
import about3 from '../../../assets/about3.png'
const HomeShowcase = () => {
  return (
    <div className="bg-white">
      {/* Why Choose Us Top Bar */}
      {/* <div className="bg-navy-900 py-8 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-gold-500 font-semibold tracking-widest text-xs uppercase">Why Choose Us</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">Your Growth, Our Commitment</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Award className="text-gold-500" size={24} />, text: "Premium Quality Products" },
              { icon: <Globe className="text-gold-500" size={24} />, text: "Timely Delivery Worldwide" },
              { icon: <Zap className="text-gold-500" size={24} />, text: "Competitive Pricing" },
              { icon: <Shield className="text-gold-500" size={24} />, text: "Ethical & Transparent Business" },
              { icon: <Users className="text-gold-500" size={24} />, text: "Customer Satisfaction First" },
              { icon: <Globe className="text-gold-500" size={24} />, text: "Strong Global Network" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-white/80 text-[10px] md:text-xs font-medium uppercase tracking-wider leading-tight">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* About Us Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
                A Partner You <span className="text-gold-500">Can Trust</span>
              </h2>
              <div className="space-y-6 text-navy-900/70 leading-relaxed text-lg">
                <p>
                  At Crosscane Overseas, we are committed to delivering quality products from India to global markets with professionalism, reliability, and integrity.
                </p>
                <p>
                  We specialize in the export of agricultural products and their by-products, textiles, handicraft items, and a wide range of quality goods that represent the richness and craftsmanship of India.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 bg-navy-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 group"
              >
                READ MORE
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right Image Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 rounded-2xl overflow-hidden h-80 relative group">
                <img 
                  src={about1}
                  alt="About Us"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-900/10"></div>
              </div>
              <div className="rounded-2xl overflow-hidden h-56 relative group">
                <img 
                  src={about2} 
                  alt="Business Handshake" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-900/10"></div>
              </div>
              <div className="rounded-2xl overflow-hidden h-56 relative group">
                <img 
                  src={about3} 
                  alt="Logistics and Transport" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-900/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

   
    </div>
  )
}

export default HomeShowcase
