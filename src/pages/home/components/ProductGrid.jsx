import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../../constants/products'

const ProductGrid = () => {
  return (
    <section className="py-24 bg-[#F9F6F0]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest text-xs uppercase">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
            Quality Products, Trusted Worldwide
          </h2>
          <p className="max-w-2xl mx-auto text-navy-900/60 text-lg leading-relaxed">
            We offer a wide range of premium quality products sourced from trusted farms and partners, ensuring excellence in every delivery.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <Link to={`/products/${product.slug}`} className="block relative">
                {/* Image Area */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Number Badge */}
                <div className="absolute top-[204px] left-1/2 -translate-x-1/2 w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white z-20 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold-500">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content Area */}
                <div className="pt-5 pb-5 px-4 text-center">
                  <h3 className="text-lg  font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-navy-900/60 text-base leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
