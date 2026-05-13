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
      <section className="py-8 bg-navy-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-2 bg-gold-500 text-navy-900 font-bold text-[12px] uppercase tracking-[0.1em] rounded-full mb-5"
            >
              Excellence in Trade
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              <span className='text-white font-black'>Premium</span> <span className="text-gold-gradient italic">Collection</span>
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
                <input type="text" name="search"
                  placeholder="Search our premium goods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none py-3 px-4 text-white text-lg focus:ring-0 focus:outline-none outline-none placeholder:text-white/20 font-bold"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-6">
          {/* Categories - Horizontal Scroll on Mobile */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-500 border-2 ${
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
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <Link to={`/products/${product.slug}`} className="block relative">
                    {/* Image Area */}
                    <div className="h-56 overflow-hidden relative p-4 bg-gray-50/50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
    
                    {/* Number Badge */}
                    <div className="absolute top-[204px] left-1/2 -translate-x-1/2 w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white z-20 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
    
                    {/* Content Area */}
                    <div className="pt-8 pb-6 px-4 text-center">
                      <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-navy-900/60 text-base leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>
                  </Link>
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
