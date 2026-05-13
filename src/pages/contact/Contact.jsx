import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-premium py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold  mb-6"
          >
            <span className='text-white'> Contact </span><span className="text-gold-gradient">Us</span>
          </motion.h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have questions about global trade? Our team is here to help you navigate the international market.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-navy-900">Get in Touch</h2>
              <p className="text-gray-600 mb-10">
                Whether you're looking to expand your business or need assistance with logistics, our experts are ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Us</p>
                    <p className="text-lg font-bold text-navy-900">contact@crosscaneoverseas.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call Us</p>
                    <p className="text-lg font-bold text-navy-900">+91 94066 66677</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Visit Us</p>
                    <p className="text-lg font-bold text-navy-900">149 Vridavan Garden Colony, Pipliyahana Square, Indore(M.P.), India</p>
                  </div>
                </div>
              </div>

              {/* Social or extra info */}

            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-8 text-navy-900">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                    placeholder="Inquiry about services"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button type="button" className="btn-premium w-full py-4 flex items-center justify-center gap-2">
                  <Send size={17} className='inline  mx-3' />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
