import React, { useEffect } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion } from 'framer-motion'
import { Mail, Users } from 'lucide-react'

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    experience: "20+",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "With over 20 years in international trade, Alex leads Crosscane with a vision for seamless global solutions."
  },
  {
    name: "Sarah Chen",
    role: "Head of Logistics",
    experience: "12+",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Sarah specializes in complex supply chain optimizations and multi-modal transport solutions."
  },
  {
    name: "Marcus Rodriguez",
    role: "Compliance Director",
    experience: "15+",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Ensuring every transaction meets the highest international standards and local regulations."
  },
  {
    name: "Elena Petrov",
    role: "Market Strategy Lead",
    experience: "10+",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Expert in emerging markets and cross-cultural business development strategies."
  }
]

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
       <section className="bg-gradient-premium py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            <span className='text-white'> Meet Our </span><span className="text-gold-gradient">Team</span>
          </motion.h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A dedicated team of professionals working together with integrity, expertise, and passion to deliver excellence worldwide.
          </p>
        </div>
      </section>
     

      {/* Team Grid Section */}
      <section className="py-14  relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-[280px] w-full bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    />
                  
                  {/* SVG Curve at the bottom of the image */}
                  <svg className="absolute bottom-0 w-full h-14 text-white translate-y-[1px]" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 0 Q 50 120 100 0 L 100 100 L 0 100 Z" fill="currentColor" />
                    <path d="M 0 0 Q 50 120 100 0" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
                  </svg>

                  {/* Experience Badge */}
                  <div className="absolute right-2 -bottom-2 w-[72px] h-[72px] bg-navy-900 border-[3px] border-gold-500 rounded-full flex flex-col items-center justify-center text-white z-10 shadow-lg">
                    <span className="text-[16px] font-black text-gold-500 leading-none">{member.experience}</span>
                    <span className="text-[7px] uppercase tracking-widest font-bold text-center mt-1 leading-[1.2]">Years<br/>Experience</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 pt-1 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[20px] font-bold text-navy-900 mb-1 tracking-tight">{member.name}</h3>
                    <p className="text-gold-500 font-semibold text-sm  tracking-widest mb-3">{member.role}</p>
                    <p className="text-gray-500 text-[14px] leading-relaxed font-medium">
                      {member.bio}
                    </p>
                  </div>
                  
                  {/* Social Icons */}
                  {/* <div className="flex justify-center gap-3 mt-6 pt-6 border-t border-gray-50">
                    <a href="#" className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-colors duration-300 shadow-md">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-colors duration-300 shadow-md">
                      <Mail size={18} />
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
             <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Want to Join Our Journey?</h2>
          <p className="text-gray-600 font-semibold mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals who are passionate about global trade and innovation.
          </p>
          <a href="/contact" className="btn-premium font-base px-12 py-4">
            View Open Positions
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Team
