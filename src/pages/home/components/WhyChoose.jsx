import React from 'react'
import { Clock, Tag, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Clock className="text-gold-500" size={32} />,
      title: "Fast Response",
      description: "Get your personalized export quote within 24 hours of inquiry."
    },
    {
      icon: <Tag className="text-gold-500" size={32} />,
      title: "Competitive Pricing",
      description: "We offer the best market rates for premium quality products guaranteed."
    },
    {
      icon: <ShieldCheck className="text-gold-500" size={32} />,
      title: "Quality Assurance",
      description: "All products are export-grade with international certifications and standards."
    }
  ]

  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[32px] p-12 md:p-16 border border-navy-900/5 shadow-xl shadow-navy-900/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
              Why Choose Our Services?
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-full bg-navy-900/5 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-navy-900/50 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
