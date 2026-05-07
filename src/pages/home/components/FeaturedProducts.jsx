import React from 'react'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import bananaImg from '../../../assets/banana_premium.png'
import textileImg from '../../../assets/textile_premium.png'
import chickpeaImg from '../../../assets/chickpea_premium.png'

const products = [
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

// const partners = ["GLOBAL TRADE", "EXIM CO", "TRADEHUB", "NAVY LOGISTICS", "GOLD COMMERCE", "CROSSCANE PARTNER"]

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <p className="text-xs text-amber-600 font-medium tracking-widest uppercase mb-2">
            Curated Collection
          </p>
          <h2 className="text-4xl font-semibold text-gray-900">
            Export Selection
          </h2>
        </div>
        <Link
          to="/products"
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
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
              className="w-72 flex-shrink-0 rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-white text-gray-600 text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full border border-gray-100">
                  {product.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{product.price}</span>
                  <button className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
                    <ShoppingCart size={14} />
                  </button>
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