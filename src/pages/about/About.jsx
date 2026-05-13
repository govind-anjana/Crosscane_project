import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion } from 'framer-motion'
import { Users, Target, Award, ShieldCheck } from 'lucide-react'
import aboutus from '../../assets/aboutus.png';
const About = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-premium py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className='text-white'>About </span><span className="text-gold-gradient">Crosscane</span>
          </motion.h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Leading the way in global trade with excellence, integrity, and innovative solutions for modern commerce.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-15">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-navy-900">About Crosscane Overseas</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                At Crosscane Overseas, we are committed to delivering quality products from India to global markets with professionalism, reliability, and integrity. Founded with a vision to build strong international partnerships, we specialize in the export of agricultural products and their by-products, textiles, handicraft items, and a wide range of quality goods that represent the richness and craftsmanship of India.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                We believe in transparent business practices, consistent quality standards, and timely delivery to ensure complete customer satisfaction. With a strong understanding of global trade and logistics, our team works dedicatedly to provide dependable export solutions tailored to international market requirements.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-semibold italic text-navy-900/80 text-justify">
                Driven by trust, excellence, and long-term relationships, Crosscane Overseas aims to become a trusted global partner for businesses seeking quality products and reliable service from India.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="text-gold-500 mt-1"><Users size={20} /></div>
                  <div>
                    <h4 className="font-bold text-navy-900">Expert Team</h4>
                    <p className="text-sm text-gray-500">Dedicated professionals at your service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-gold-500 mt-1"><Target size={20} /></div>
                  <div>
                    <h4 className="font-bold text-navy-900">Global Reach</h4>
                    <p className="text-sm text-gray-500">Connecting you to every corner of the world.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mt-2 md:mt-10"
            >
                            <div className="aspect-[4/3] bg-navy-900 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutus} 
                  alt="About Crosscane Overseas" 
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-12 -right-6 bg-gold-500 p-6 rounded-3xl shadow-xl hidden md:block">
                <p className="text-navy-900 font-bold text-3xl">15+</p>
                <p className="text-navy-900 text-sm font-medium">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
     
      {/* Indian Craftsmanship Section */}
      <section className="py-10 bg-bg-primary">
        <div className="container mx-auto px-6">
                    <div className="bg-navy-900 rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-20 opacity-10">
              <Award size={200} className="text-gold-500" />
            </div>
            <div className="p-10 md:p-12 relative z-10">
              <div className="max-w-3xl">
                <span className="text-gold-500 font-semibold tracking-widest text-xs uppercase mb-4 block">The Indian Legacy</span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
                 <span className='text-white'> Representing the Richness & </span><br/><span className="text-gold-gradient">Craftsmanship of India</span>
                </h2>
                <p className="text-gray-400 text-justify text-base leading-relaxed mb-10">
                  India is home to an unparalleled legacy of quality goods, from agricultural bounty to intricate handicrafts. At Crosscane Overseas, we take pride in being the bridge that connects this heritage to the global market, ensuring that every product delivered carries the mark of excellence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-gold-500 pl-6">
                    <span className="text-white text-xl font-bold mb-2">Consistent Quality</span>
                    <p className="text-gray-500 text-sm">Adhering to strict international standards for every export.</p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-6">
                    <span className="text-white text-xl font-bold mb-2">Timely Delivery</span>
                    <p className="text-gray-500 text-sm">Efficient logistics ensuring your goods arrive on schedule.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="text-gold-500" />, title: "Integrity", desc: "We uphold the highest standards of honesty and transparency in every transaction." },
              { icon: <Award className="text-gold-500" />, title: "Quality", desc: "Excellence is not just a goal; it's our standard for every service we provide." },
              { icon: <Users className="text-gold-500" />, title: "Partnership", desc: "We grow when our clients grow. Your success is our ultimate objective." }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all text-center">
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy-900">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

    </div>
  )
}

export default About
