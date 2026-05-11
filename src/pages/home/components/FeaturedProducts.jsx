import React from 'react'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../../constants/products'

const products = PRODUCTS.slice(0, 6)

// const partners = ["GLOBAL TRADE", "EXIM CO", "TRADEHUB", "NAVY LOGISTICS", "GOLD COMMERCE", "CROSSCANE PARTNER"]

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 bg-white overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <p className="text-xs text-gold-500 font-medium tracking-widest uppercase mb-2">
            Curated Collection
          </p>
          <h2 className="text-4xl font-semibold text-navy-900">
            Export Selection
          </h2>
        </div>
        <Link
          to="/products"
          className="flex items-center gap-2 text-sm font-medium text-navy-900/40 hover:text-gold-500 transition-colors"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scrolling Cards */}
      <div className="overflow-hidden">
        <div className="flex gap-5 px-6 animate-marquee-slow w-max">
          {[...products, ...products].map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="w-72 flex-shrink-0 rounded-2xl border border-navy-900/5 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-navy-900/5">
                <Link to={`/services/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                <span className="absolute top-3 left-3 bg-white text-navy-900/60 text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full border border-navy-900/5">
                  {product.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <Link to={`/services/${product.slug}`}>
                  <h3 className="text-base font-semibold text-navy-900 mb-1 hover:text-gold-500 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-navy-900/40 leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-navy-900/40">{product.price}</span>
                  <Link to={`/services/${product.slug}`} className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center hover:bg-gold-500 transition-colors">
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      {/* <div className="container mx-auto px-6 mt-14">
        <div className="border-t border-gray-100 pt-8 overflow-hidden">
          <div className="flex animate-marquee w-max opacity-30">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-[10px] font-bold text-gray-800 tracking-[0.4em] mx-10 uppercase">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div> */}

    </section>
  )
}

export default FeaturedProducts