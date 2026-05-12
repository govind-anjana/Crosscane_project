import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, Download, ShieldCheck, Package, Globe, BarChart3, Info, Star } from 'lucide-react'
import { PRODUCTS } from '../../constants/products'

const ProductDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  // Find product from centralized constants
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0]

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      {/* Product Hero - Redesigned for impact */}
      <section className="pt-32 pb-32 bg-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-900/5 -skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-navy-900/40 hover:text-gold-500 transition-all mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            <span className="font-black uppercase tracking-[0.3em] text-[10px]">Back to Collection</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Content - Takes 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 pt-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <span className="text-navy-900/30 text-xs font-bold uppercase tracking-widest">Premium Export Grade</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-navy-900 mb-10 leading-[1.05] tracking-tight">
                {product.title}
              </h1>
              
              <p className="text-2xl text-navy-900/50 font-medium mb-12 leading-relaxed border-l-4 border-gold-500 pl-8">
                {product.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-navy-900 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-all duration-500 shadow-2xl shadow-navy-900/20 active:scale-95 flex items-center justify-center gap-3">
                  Inquire for Order
                  <ArrowLeft className="rotate-180" size={18} />
                </button>
                <button className="px-10 py-5 border-2 border-navy-900/10 rounded-2xl text-navy-900 font-black text-sm uppercase tracking-widest hover:border-navy-900 transition-all flex items-center justify-center gap-3 active:scale-95">
                  <Download size={18} />
                  Catalog
                </button>
              </div>
            </motion.div>

            {/* Right Image - Takes 7 columns for massive impact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="lg:col-span-7 relative group"
            >
              <div className="relative aspect-[16/10] lg:aspect-[1.4] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] bg-gray-100 border-[16px] border-white group-hover:shadow-[0_80px_120px_-30px_rgba(0,0,0,0.3)] transition-all duration-700">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
              </div>
              
              {/* Floating Certification Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-50 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/30">
                  <ShieldCheck size={32} className="text-navy-900" />
                </div>
                <div>
                  <p className="text-navy-900/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Authenticity</p>
                  <p className="text-xl font-black text-navy-900 tracking-tight">100% Certified</p>
                </div>
              </motion.div>

              {/* Floating Quality Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute top-20 -right-8 bg-navy-900 p-6 rounded-3xl shadow-2xl text-white hidden xl:block"
              >
                <div className="flex flex-col items-center gap-2">
                  <Star className="text-gold-500" size={24} fill="currentColor" />
                  <p className="font-black text-xs uppercase tracking-widest text-gold-500">Global</p>
                  <p className="font-black text-xs uppercase tracking-widest">Standard</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Content */}
      <section className="py-32 bg-[#FDFDFD]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Main Content Area - 8 columns */}
            <div className="lg:col-span-8 space-y-32">
              
              {/* Overview Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-6 mb-12">
                  <span className="w-20 h-px bg-gold-500/30"></span>
                  <h2 className="text-4xl font-black text-navy-900 tracking-tight uppercase">Detailed Overview</h2>
                </div>
                <div className="space-y-10">
                  {product.description.map((p, i) => (
                    <p key={i} className="text-navy-900/60 leading-[1.8] text-2xl font-medium tracking-tight">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Quality & Assurance Highlight */}
              {product.qualityAssurance && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-navy-900 rounded-[4rem] p-20 text-white relative overflow-hidden shadow-3xl"
                >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -mr-48 -mt-48" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px] -ml-48 -mb-48" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-4 bg-gold-500 text-navy-900 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] mb-12">
                      <ShieldCheck size={16} />
                      Quality Guaranteed
                    </div>
                    <h2 className="text-5xl font-black mb-10 leading-tight tracking-tight">
                      {product.qualityAssurance.title}
                    </h2>
                    <p className="text-white/60 text-2xl mb-16 leading-relaxed max-w-2xl font-medium">
                      {product.qualityAssurance.content}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {product.qualityAssurance.points.map((point, i) => (
                        <div key={i} className="flex items-center gap-6 group">
                          <div className="w-4 h-4 rounded-full border-2 border-gold-500 group-hover:bg-gold-500 transition-all duration-300"></div>
                          <span className="text-xl font-bold text-white/90 tracking-tight">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Grid of Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-6 mb-16">
                  <span className="w-20 h-px bg-gold-500/30"></span>
                  <h2 className="text-4xl font-black text-navy-900 tracking-tight uppercase">Key Attributes</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="group flex items-start gap-8 p-10 bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-2xl hover:border-gold-500/30 hover:-translate-y-2 transition-all duration-500">
                      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-500">
                        <CheckCircle2 className="text-navy-900/20 group-hover:text-navy-900 transition-colors" size={28} />
                      </div>
                      <p className="text-2xl font-black text-navy-900 pt-2 tracking-tight leading-tight">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Packaging & Logistics Section */}
              {(product.packagingOptions || product.exportCapability) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  {product.packagingOptions && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="space-y-12"
                    >
                      <div className="flex items-center gap-4 text-gold-600 font-black uppercase tracking-[0.3em] text-xs">
                        <Package size={20} />
                        Packaging Solutions
                      </div>
                      <div className="space-y-6">
                        {product.packagingOptions.map((opt, i) => (
                          <div key={i} className="flex items-center gap-6 p-8 bg-gray-50 rounded-[2.5rem] font-black text-xl text-navy-900 border border-transparent hover:border-gold-500/20 transition-all cursor-default">
                            <span className="text-gold-500">0{i+1}.</span>
                            {opt}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {product.exportCapability && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="space-y-12"
                    >
                      <div className="flex items-center gap-4 text-gold-600 font-black uppercase tracking-[0.3em] text-xs">
                        <Globe size={20} />
                        Export Logistics
                      </div>
                      <div className="p-12 bg-white rounded-[3rem] border-2 border-gray-50 shadow-inner">
                        <p className="text-navy-900/60 leading-[1.6] font-bold text-2xl tracking-tight italic">
                          "{product.exportCapability}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {/* Sticky Sidebar - 4 columns */}
            <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-32 h-fit pt-10">
              
              {/* Specs Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[3.5rem] p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-gray-50 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                <h3 className="text-xs font-black mb-12 text-navy-900/20 uppercase tracking-[0.5em]">Specifications</h3>
                <div className="space-y-10">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="group/item">
                      <p className="text-navy-900/30 text-[10px] font-black uppercase tracking-[0.2em] mb-2 group-hover/item:text-gold-500 transition-colors">{spec.label}</p>
                      <p className="text-2xl font-black text-navy-900 tracking-tight leading-none">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Pricing Section */}
              {product.pricingInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gold-500 rounded-[3.5rem] p-12 shadow-2xl shadow-gold-500/20"
                >
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center">
                      <BarChart3 className="text-gold-500" size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-navy-900 tracking-tight leading-none pt-1">Commercials</h3>
                  </div>
                  <p className="text-navy-900/60 font-bold mb-10 text-lg leading-snug">{product.pricingInfo.content}</p>
                  <div className="space-y-4 mb-12">
                    {product.pricingInfo.factors.map((factor, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/30 p-4 rounded-xl backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-navy-900"></div>
                        <span className="text-navy-900 font-bold text-sm tracking-tight">{factor}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-navy-900 text-white py-6 rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-navy-800 transition-all shadow-xl">
                    Get Latest Price
                  </button>
                </motion.div>
              )}

              {/* Contact Assistance */}
              <div className="p-10 rounded-[3rem] bg-navy-900 text-white flex flex-col gap-8 shadow-3xl">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-500 mb-2">Need Expert Help?</p>
                  <p className="text-2xl font-black tracking-tight leading-tight">Discuss Your Requirements</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-navy-900 bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Agent" />
                      </div>
                    ))}
                  </div>
                  <button className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-navy-900 hover:scale-110 transition-transform">
                    <Globe size={28} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductDetail


