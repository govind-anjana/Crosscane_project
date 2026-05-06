import React, { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, ArrowRight, ShoppingCart } from 'lucide-react'
import bananaImg from '../../assets/banana_premium.png'
import textileImg from '../../assets/textile_premium.png'
import chickpeaImg from '../../assets/chickpea_premium.png'

const allProducts = [
  { id: 1, name: "Banana Powder", category: "Agro", image: bananaImg, price: "Inquire for Price", description: "Premium quality processed from fresh Indian bananas." },
  { id: 2, name: "Chickpeas", category: "Grains", image: chickpeaImg, price: "Inquire for Price", description: "High-nutrient organic chickpeas for global markets." },
  { id: 3, name: "Onion Powder", category: "Spices", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=600&h=400", price: "Inquire for Price", description: "Concentrated and pure onion powder for industrial use." },
  { id: 4, name: "Banana Fibers", category: "Textiles", image: "https://images.unsplash.com/photo-1528476513222-19bc30a7861c?auto=format&fit=crop&q=80&w=600&h=400", price: "Inquire for Price", description: "Eco-friendly natural fibers for sustainable manufacturing." },
  { id: 5, name: "Industrial Textiles", category: "Textiles", image: textileImg, price: "Inquire for Price", description: "Durable textiles for various industrial applications." },
  { id: 6, name: "Jegry Powder", category: "Commodities", image: "https://images.unsplash.com/photo-1610970882739-4919597ed079?auto=format&fit=crop&q=80&w=600&h=400", price: "Inquire for Price", description: "Traditional natural sweetener processed with modern standards." },
  { id: 7, name: "Golden Wheat", category: "Grains", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600&h=400", price: "Inquire for Price", description: "Export-grade wheat harvested at peak quality." },
  { id: 8, name: "Pure Sea Salt", category: "Commodities", image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&q=80&w=600&h=400", price: "Inquire for Price", description: "Refined sea salt for international culinary requirements." },
]

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
      <section className="pt-40 pb-20 bg-navy-900 text-white relative overflow-hidden">
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
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-navy-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gray-100">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <span className="text-navy-900 font-bold text-sm uppercase tracking-widest">{product.price}</span>
                      <button className="w-10 h-10 bg-bg-primary text-navy-900 rounded-xl flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                        <ShoppingCart size={18} />
                      </button>
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
