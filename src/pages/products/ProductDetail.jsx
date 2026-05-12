import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion } from 'framer-motion'
import { 
  ChevronRight, 
  Home, 
  FileText, 
  Mail, 
  Check, 
  ChevronLeft, 
  Leaf, 
  ShieldCheck, 
  Globe, 
  Users, 
  Clock, 
  Package, 
  BadgeCheck,
  Scale,
  Award,
  Zap
} from 'lucide-react'
import { PRODUCTS } from '../../constants/products'

const ProductDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeImg, setActiveImg] = useState(0)
  
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0]

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImg(0)
  }, [slug])

  // Mock gallery images since data has only one
  const gallery = [product.image, product.image, product.image, product.image, product.image]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 mt-20">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="flex items-center gap-1 hover:text-green-600 transition-colors">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-green-600 transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400 capitalize">{product.category}</span>
            <ChevronRight size={14} />
            <span className="text-green-700 font-bold">{product.title}</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <img 
                src={gallery[activeImg]} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="relative group">
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImg === idx ? 'border-green-600 ring-2 ring-green-600/20' : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Gallery ${idx}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <span className="inline-block px-4 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg mb-4 self-start">
              Premium Export Quality
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{product.title}</h1>
            <p className="text-green-600 font-bold mb-6 flex items-center gap-2">
              Fresh • Natural • Premium Quality
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              At Crosscane Overseas, we supply premium-quality {product.title} sourced from trusted agricultural farms and processed under strict quality standards. We ensure superior freshness, uniform size, excellent taste, and long shelf life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10 border-t border-gray-100 pt-8">
              {[
                { icon: <Leaf size={18} className="text-green-600" />, label: "Variety", value: product.title.split(' ')[0] },
                { icon: <Package size={18} className="text-green-600" />, label: "Category", value: product.category },
                { icon: <ShieldCheck size={18} className="text-green-600" />, label: "Quality", value: "Premium Export Quality" },
                { icon: <Globe size={18} className="text-green-600" />, label: "Origin", value: "India" },
                { icon: <Clock size={18} className="text-green-600" />, label: "Shelf Life", value: "Long" },
                { icon: <Zap size={18} className="text-green-600" />, label: "Storage", value: "Standard" },
                { icon: <Scale size={18} className="text-green-600" />, label: "Supply Ability", value: "Bulk / Container Load" },
                { icon: <Award size={18} className="text-green-600" />, label: "Certification", value: "Global Standards Certified" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="font-bold text-gray-400 min-w-[100px]">{item.label} :</span>
                    <span className="text-gray-700 font-bold">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              <button className="flex-1 bg-green-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-800 transition-all shadow-lg shadow-green-900/10">
                <Mail size={18} /> Request A Quote
              </button>
              <button className="flex-1 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-green-600 hover:text-green-600 transition-all">
                <FileText size={18} /> Download Datasheet
              </button>
            </div>
          </div>
        </div>

        {/* Section: Product Features */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-widest relative inline-block">
              Product Features
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-green-600 rounded-full"></div>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { icon: <Award className="text-green-600" />, text: "Premium Export Quality" },
              { icon: <Leaf className="text-green-600" />, text: "Naturally Sweet Taste" },
              { icon: <Zap className="text-green-600" />, text: "Uniform Size & Shape" },
              { icon: <BadgeCheck className="text-green-600" />, text: "Hygienically Processed" },
              { icon: <Leaf className="text-green-600" />, text: "Rich in Nutrients" },
              { icon: <Clock className="text-green-600" />, text: "Long Shelf Life" },
              { icon: <Package className="text-green-600" />, text: "Suitable for Bulk Supply" },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-gray-100 bg-white flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
                  {f.icon}
                </div>
                <p className="text-xs font-bold text-gray-700 leading-tight px-2">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Section: Description */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
             <div className="flex flex-col md:flex-row gap-8">
               <div className="flex-1">
                 <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Product Description</h2>
                 <p className="text-gray-600 text-sm leading-relaxed mb-8">
                   Our {product.title} are carefully handpicked, sorted, and packed to maintain freshness and quality during transportation. We ensure that each product meets the highest standards of international markets.
                 </p>
                 <ul className="space-y-3">
                   {[
                     "Carefully handpicked from trusted farms",
                     "Strict quality inspection and grading",
                     "Safe and hygienic packaging",
                     "Timely delivery with maximum freshness"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                       <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                         <Check size={12} className="text-green-600" strokeWidth={4} />
                       </div>
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="md:w-48 h-64 rounded-2xl overflow-hidden bg-gray-100">
                 <img src={product.image} className="w-full h-full object-cover" alt="Desc" />
               </div>
             </div>
          </div>

          {/* Section: Packaging */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wider">Packaging Options</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { title: "Standard Box", weight: "13 KG", img: product.image },
                { title: "Small Box", weight: "5 KG", img: product.image },
                { title: "Bulk Pallet", weight: "Custom", img: product.image }
              ].map((p, i) => (
                <div key={i} className="text-center group">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4 border border-transparent group-hover:border-green-600/20 transition-all">
                    <img src={p.img} className="w-full h-full object-cover" alt={p.title} />
                  </div>
                  <p className="text-xs font-bold text-gray-900 mb-1">{p.weight}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">{p.title}</p>
                </div>
              ))}
            </div>
            <div className="bg-green-50 py-3 px-6 rounded-xl flex items-center justify-center gap-3">
              <Package size={16} className="text-green-700" />
              <p className="text-xs font-bold text-green-700">Private Label & Custom Branding Available</p>
            </div>
          </div>
        </div>

        {/* Section: Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wider">Product Specifications</h2>
            <div className="space-y-0 divide-y divide-gray-50">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex justify-between py-4 text-sm">
                  <span className="text-gray-500 font-bold">{spec.label}</span>
                  <span className="text-gray-900 font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[450px] shadow-2xl">
            <img src={product.image} className="w-full h-full object-cover" alt="Spec Bg" />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-12 text-white">
               <div className="space-y-6">
                 {[
                   { icon: <Leaf />, title: "100% Natural & Fresh" },
                   { icon: <BadgeCheck />, title: "Hygienically Processed" },
                   { icon: <ShieldCheck />, title: "Pesticide Residue Free" },
                   { icon: <Globe />, title: "Best for Global Markets" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                       {item.icon}
                     </div>
                     <span className="text-lg font-bold">{item.title}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* Bulk Supply Banner */}
        <div className="bg-gray-50 rounded-[40px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8 z-10">
            <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 shadow-xl ring-4 ring-white">
              <img src={product.image} className="w-full h-full object-cover" alt="Banner" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Looking For Bulk Supply?</h2>
              <p className="text-gray-500 font-medium">We are ready to fulfill your requirements with the best quality products and professional service.</p>
            </div>
          </div>
          <div className="flex gap-4 z-10">
            <button className="bg-green-900 text-white px-10 py-5 rounded-xl font-bold hover:bg-green-800 transition-all shadow-xl shadow-green-900/10 flex items-center gap-2">
              Get A Quote <ChevronRight size={18} />
            </button>
            <button className="bg-white border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-xl font-bold hover:border-green-600 hover:text-green-600 transition-all shadow-sm">
              Contact Us
            </button>
          </div>
        </div>
      </main>

      {/* Feature Bottom Bar */}
      <div className="bg-green-950 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Premium Quality Products" },
              { icon: <Globe />, title: "Global Export Standards" },
              { icon: <Zap />, title: "Competitive Pricing" },
              { icon: <Clock />, title: "On-Time Delivery" },
              { icon: <Users />, title: "Customer Satisfaction" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="text-green-500 opacity-60">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <p className="text-white font-bold text-xs uppercase tracking-widest leading-tight">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetail
