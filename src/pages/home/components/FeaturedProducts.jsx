import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import bananaImg from '../../../assets/banana_premium.png'
import textileImg from '../../../assets/textile_premium.png'
import chickpeaImg from '../../../assets/chickpea_premium.png'

const products = [
  // ... existing products ...
  {
    id: 1,
    name: "Premium Bananas",
    category: "Fruits",
    price: "Inquire for Price",
    image: bananaImg,
    description: "Fresh, high-quality bananas sourced from organic farms."
  },
  {
    id: 2,
    name: "Organic Chickpeas",
    category: "Grains & Pulses",
    price: "Inquire for Price",
    image: chickpeaImg,
    description: "Nutrient-rich chickpeas perfect for global distribution."
  },
  {
    id: 3,
    name: "Onion Powder",
    category: "Spices",
    price: "Inquire for Price",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=600&h=400",
    description: "Concentrated onion powder for industrial food processing."
  },
  {
    id: 4,
    name: "Industrial Textiles",
    category: "Materials",
    price: "Inquire for Price",
    image: textileImg,
    description: "Durable and versatile textiles for various manufacturing needs."
  },
  {
    id: 5,
    name: "Golden Wheat",
    category: "Grains",
    price: "Inquire for Price",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600&h=400",
    description: "High-grade wheat harvested at peak maturity for premium quality."
  },
  {
    id: 6,
    name: "Pure Sea Salt",
    category: "Commodities",
    price: "Inquire for Price",
    image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&q=80&w=600&h=400",
    description: "Natural sea salt, meticulously refined for global culinary use."
  }
]

const partners = ["GLOBAL TRADE", "EXIM CO", "TRADEHUB", "NAVY LOGISTICS", "GOLD COMMERCE", "CROSSCANE PARTNER"]

const FeaturedProducts = () => {
  return (
    <section className="py-32 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-xl">
            <span className="text-gold-500 font-semibold tracking-[0.2em] text-xs uppercase block mb-4">Curated Collection</span>
            <h2 className="text-4xl md:text-6xl font-semibold text-navy-900 leading-tight">
              Export <span className="text-gold-gradient">Selection</span>
            </h2>
          </div>
          <div className="pb-2">
            <Link to="/Products" className="group flex items-center gap-4 text-navy-900 font-semibold text-sm tracking-widest uppercase hover:text-gold-500 transition-all">
              View All Goods
              <div className="w-12 h-12 rounded-full border border-navy-900/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-white transition-all duration-300">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>


      {/* Autoscrolling Products */}
      <div className="relative flex overflow-x-hidden pb-12">
        <div className="animate-marquee-slow whitespace-nowrap flex items-center gap-8 px-6">
          {[...products, ...products].map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              className="relative group w-[380px] flex-shrink-0"
            >
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 group-hover:-translate-y-3">
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-navy-900 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.1em] border border-gray-100">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-navy-900 group-hover:text-gold-500 transition-colors whitespace-normal">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2 whitespace-normal">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Pricing</p>
                      <p className="text-navy-900 font-bold tracking-tight">{product.price}</p>
                    </div>
                    <button className="w-12 h-12 bg-navy-900 text-gold-500 rounded-2xl flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all shadow-lg shadow-navy-900/10">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                {/* Accent Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Partners (Subtle) */}
      <div className="mt-12 container mx-auto px-6 opacity-30">
        <div className="border-t border-gray-100 pt-10">
          <div className="flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {[...partners, ...partners].map((partner, i) => (
                <span key={i} className="text-xs font-black text-navy-900 tracking-[0.5em] mx-12 uppercase">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
