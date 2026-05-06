import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, Download, ShieldCheck } from 'lucide-react'
import bananaImg from '../../assets/banana_premium.png'

const productContent = {
  'banana-powder': {
    title: 'Banana Powder',
    tagline: 'Premium Export Quality from India',
    image: bananaImg,
    description: [
      "Crosscane Overseas offers premium-quality Banana Powder processed from carefully selected fresh bananas sourced from trusted farms in India. Manufactured under hygienic conditions using advanced processing methods, our banana powder retains its natural flavor, aroma, and nutritional value.",
      "Banana powder is widely used in the food, beverage, bakery, baby food, health supplement, and cosmetic industries due to its rich nutritional profile and versatility. It is an excellent source of potassium, dietary fiber, vitamins, and natural carbohydrates, making it a healthy ingredient for various applications.",
      "Our banana powder is known for its fine texture, long shelf life, purity, and consistent quality. We ensure strict quality control and secure packaging standards to meet international export requirements and customer expectations worldwide."
    ],
    features: [
      "100% natural and hygienically processed",
      "Rich in nutrients and dietary fiber",
      "Fine texture with natural flavor",
      "Long shelf life and export-quality packaging",
      "Available in customized packaging options"
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Form", value: "Fine Powder" },
      { label: "Purity", value: "100% Natural" },
      { label: "Packaging", value: "Customized Export Grade" }
    ]
  }
}

const ProductDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = productContent[slug] || productContent['banana-powder'] // Fallback to banana-powder for demo

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      {/* Product Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-navy-900/60 hover:text-gold-500 transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-500 font-semibold tracking-widest text-xs uppercase mb-4 block">Product Showcase</span>
              <h1 className="text-4xl md:text-6xl font-semibold text-navy-900 mb-6 leading-tight">
                {product.title}
              </h1>
              <p className="text-xl text-navy-900/40 font-medium mb-8">
                {product.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-premium px-8 py-4 flex items-center gap-2">
                  Inquire Now
                </button>
                <button className="px-8 py-4 border border-navy-900/10 rounded-lg text-navy-900 font-semibold hover:bg-navy-900 hover:text-white transition-all flex items-center gap-2">
                  <Download size={18} />
                  Specifications
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 p-8 rounded-2xl shadow-xl hidden md:block">
                <ShieldCheck size={32} className="text-navy-900 mb-2" />
                <p className="text-navy-900 font-bold text-lg uppercase">Certified</p>
                <p className="text-navy-900/60 text-sm">Export Grade</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-semibold text-navy-900 mb-8 border-l-4 border-gold-500 pl-6">Overview</h2>
                <div className="space-y-6">
                  {product.description.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-navy-900 mb-8 border-l-4 border-gold-500 pl-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-50">
                      <CheckCircle2 className="text-gold-500 mt-1 flex-shrink-0" size={24} />
                      <p className="text-navy-900 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              <div className="bg-navy-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl -mr-16 -mt-16" />
                <h3 className="text-xl font-bold mb-8 text-gold-500">Quick Specifications</h3>
                <div className="space-y-6">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="border-b border-white/10 pb-4">
                      <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{spec.label}</p>
                      <p className="text-lg font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-navy-900">Industry Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {['Food', 'Beverage', 'Bakery', 'Baby Food', 'Cosmetics', 'Supplements'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-bg-primary text-navy-900/60 text-xs font-bold rounded-full border border-gray-100 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
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
