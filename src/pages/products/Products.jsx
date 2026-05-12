import React, { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, ExternalLink, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../constants/products'

const allProducts = PRODUCTS
const categories = ["All", "Agro", "Grains", "Spices", "Textiles", "Commodities"]

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      {/* Page Header - Redesigned for Impact */}
      <section className="pt-40 pb-24 bg-navy-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-2 bg-gold-500 text-navy-900 font-black text-[10px] uppercase tracking-[0.4em] rounded-full mb-8"
            >
              Excellence in Trade
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-white mb-10 leading-tight tracking-tight"
            >
              Premium <span className="text-gold-gradient italic">Collection</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Discover our curated range of export-grade products, sourced from the finest agricultural and industrial hubs of India.
            </motion.p>
            
            {/* Redesigned Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-2xl mx-auto group"
            >
              <div className="absolute inset-0 bg-gold-500/20 blur-xl group-focus-within:bg-gold-500/30 transition-all rounded-3xl" />
              <div className="relative glass-morphism-dark border-white/10 rounded-[2rem] p-2 flex items-center shadow-2xl">
                <Search className="ml-6 text-gold-500" size={24} />
                <input 
                  type="text" 
                  placeholder="Search our premium goods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none py-5 px-6 text-white text-lg focus:ring-0 placeholder:text-white/20 font-bold"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Categories - Horizontal Scroll on Mobile */}
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-4 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500 border-2 ${
                  activeCategory === cat 
                  ? "bg-navy-900 text-gold-500 border-navy-900 shadow-2xl shadow-navy-900/20 -translate-y-1" 
                  : "bg-white text-navy-900 border-gray-100 hover:border-gold-500 hover:text-gold-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid - Refined Luxury Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="group relative"
                >
                  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-3xl hover:-translate-y-3 transition-all duration-700 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-72 overflow-hidden bg-gray-50">
                      <Link to={`/products/${product.slug}`} className="block h-full">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        />
                      </Link>
                      <div className="absolute top-6 left-6">
                        <span className="glass-morphism px-5 py-2 rounded-full text-navy-900 text-[10px] font-black uppercase tracking-widest border border-white/50">
                          {product.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-all duration-700" />
                    </div>

                    {/* Content */}
                    <div className="p-10 flex flex-col flex-grow">
                      <div className="mb-6">
                        <Link to={`/services/${product.slug}`}>
                          <h3 className="text-2xl font-black text-navy-900 mb-3 group-hover:text-gold-500 transition-colors leading-tight">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-navy-900/40 text-sm font-bold leading-relaxed line-clamp-2">
                          {product.shortDesc}
                        </p>
                      </div>

                      <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-navy-900/20 uppercase tracking-widest mb-1">Commercials</span>
                          <span className="text-navy-900 font-black text-sm tracking-tight">{product.price}</span>
                        </div>
                        <Link 
                          to={`/services/${product.slug}`} 
                          className="w-14 h-14 bg-gray-50 text-navy-900 rounded-2xl flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-500 group-hover:rotate-45"
                        >
                          <ExternalLink size={20} className="group-hover:-rotate-45 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search size={32} className="text-navy-900/20" />
              </div>
              <p className="text-navy-900/30 text-2xl font-black italic tracking-tight">No products match your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Products
