import React from 'react'
import { motion } from 'framer-motion'
import { Ship, Globe, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: <Ship size={32} />,
    title: "Global Shipping",
    description: "Reliable and efficient maritime logistics connecting you to major ports worldwide."
  },
  {
    icon: <Globe size={32} />,
    title: "Market Expansion",
    description: "Expert guidance to help your business penetrate new international markets successfully."
  },
  {
    icon: <Shield size={32} />,
    title: "Secure Trade",
    description: "Comprehensive risk management and compliance ensure your trade is always protected."
  },
  {
    icon: <Zap size={32} />,
    title: "Fast Execution",
    description: "Optimized processes that reduce transit times and streamline your supply chain."
  }
]

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-gold-gradient">Crosscane</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end solutions for international trade, ensuring your goods move smoothly across borders with maximum efficiency and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-bg-primary hover:shadow-xl transition-all border border-transparent hover:border-gold-300/30 group"
            >
              <div className="w-16 h-16 rounded-xl bg-navy-900 text-gold-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
