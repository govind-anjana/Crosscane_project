import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 bg-navy-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-700/20 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Take Your Business <br />
            <span className="text-gold-gradient">Beyond Borders?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Join hundreds of companies that trust Crosscane for their international trade and logistics needs. Let's build your global future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium px-10 py-4 text-lg">
              Contact Us Now
            </button>
            <button className="px-10 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all text-lg">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
