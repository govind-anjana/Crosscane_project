import React, { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, ArrowRight, ShoppingCart, ExternalLink } from 'lucide-react'
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
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 bg-navy-900 text-white relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 font-semibold tracking-[0.3em] text-xs uppercase mb-4 block"
          >
            Global Catalog
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-semibold mb-8"
          >
            Our <span className="text-gold-gradient">Premium Goods</span>
          </motion.h1>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-gold-500/50 transition-all text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all border ${
                  activeCategory === cat 
                  ? "bg-navy-900 text-gold-500 border-navy-900 shadow-xl" 
                  : "bg-white text-navy-900 border-gray-100 hover:border-gold-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 group"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-50">
                    <Link to={`/services/${product.slug}`}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </Link>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-navy-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gray-100">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <Link to={`/services/${product.slug}`}>
                      <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">{product.shortDesc}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <span className="text-navy-900 font-bold text-sm uppercase tracking-widest">{product.price}</span>
                      <Link to={`/services/${product.slug}`} className="w-10 h-10 bg-bg-primary text-navy-900 rounded-xl flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                        <ExternalLink size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl font-medium italic">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Products
