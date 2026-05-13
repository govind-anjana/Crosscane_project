import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    
    // Ensure access_key is present (from hidden input or env)
    if (!formData.get("access_key")) {
      formData.append("access_key", import.meta.env.VITE_WEB3FORM_KEY);
    }

    try {
      const response = await fetch(import.meta.env.VITE_WEB3FORM_API_URL, {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully!");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-premium py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className='text-white'>Contact </span><span className="text-gold-gradient">Us</span>
          </motion.h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have questions about global trade? Our team is here to help you navigate the international market.
          </p>
        </div>
      </section>

      <section className="py-14 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12 py-5">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 text-navy-900">Get in Touch</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Whether you're looking to expand your business or need assistance with logistics, our experts are ready to assist you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-navy-900">contact@crosscaneoverseas.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us</p>
                  <p className="text-lg font-bold text-navy-900">+91 94066 66677</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Visit Us</p>
                  <p className="text-lg font-bold text-navy-900">149 Vridavan Garden Colony, Pipliyahana Square, Indore(M.P.), India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-[#0A1D37] mb-10">Send us a Message</h2>
            
            <form onSubmit={onSubmit} className="space-y-8">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORM_KEY} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all font-medium text-navy-900" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all font-medium text-navy-900" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  placeholder="Inquiry about services" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all font-medium text-navy-900" 
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows="4" 
                  placeholder="Your message here..." 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all font-medium text-navy-900 resize-none"
                ></textarea>
              </div>
     
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium w-full py-4 flex items-center justify-center gap-2 disabled:opacity-70 group"
              >
                {isSubmitting ? (
                  <Loader2 className="inline mx-3 animate-spin" size={17} />
                ) : (
                  <>
                    <Send size={17} className="inline mx-3" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;