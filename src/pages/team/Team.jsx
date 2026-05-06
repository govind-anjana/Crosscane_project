import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion } from 'framer-motion'
import { Mail, Globe, ExternalLink } from 'lucide-react'

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "With over 20 years in international trade, Alex leads Crosscane with a vision for seamless global commerce."
  },
  {
    name: "Sarah Chen",
    role: "Head of Logistics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Sarah specializes in complex supply chain optimizations and multi-modal transport solutions."
  },
  {
    name: "Marcus Rodriguez",
    role: "Compliance Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400", bio: "Ensuring every transaction meets the highest international standards and local regulations."
  },
  {
    name: "Elena Petrov",
    role: "Market Strategy Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Expert in emerging markets and cross-cultural business development strategies."
  }
]

const Team = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-premium py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Meet Our <span className="text-gold-gradient">Experts</span>
          </motion.h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A dedicated team of industry veterans committed to revolutionizing the way the world trades.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                    <button className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 hover:scale-110 transition-transform">
                      <ExternalLink size={18} />
                    </button>
                    <button className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 hover:scale-110 transition-transform">
                      <Mail size={18} />
                    </button>
                    <button className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 hover:scale-110 transition-transform">
                      <Globe size={18} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-navy-900 mb-1">{member.name}</h3>
                  <p className="text-gold-500 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Want to Join Our Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals who are passionate about global trade and innovation.
          </p>
          <a href="/contact" className="btn-premium px-12 py-4">
            View Open Positions
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Team
