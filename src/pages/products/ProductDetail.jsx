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
  Zap,
  Star,
  Truck
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
      <div className="bg-gray-50 py-4 mt-5 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="flex items-center gap-1 hover:text-navy-900 transition-colors">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-navy-900 transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400 capitalize">{product.category}</span>
            <ChevronRight size={14} />
            <span className="text-navy-900 font-bold">{product.title}</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 mb-16">
          
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full md:w-[400px] h-[350px] md:h-[330px] rounded-3xl overflow-hidden  mx-auto shadow-sm bg-gray-50 "
            >
              <img 
                src={gallery[activeImg]} 
                alt={product.title} 
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
            
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <span className="inline-block px-4 py-1 bg-gold-500/10 text-gold-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 self-start">
              Premium Export Quality
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-navy-900 mb-4 tracking-tighter uppercase">{product.title}</h2>
            <p className="text-gold-500 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-widest">
             • Fresh  • Natural  • Global Standard
            </p>

            <p className="text-gray-500  mb-4 text-base font-medium text-justify">
              At Crosscane Overseas, we supply premium-quality {product.title} sourced from trusted agricultural hubs and processed under strict global quality standards.
            </p>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8 border-t border-gray-100 pt-8">
              {[
                { icon: <Leaf size={18} className="text-gold-500" />, label: "Variety", value: product.title.split(' ')[0] },
                { icon: <Package size={18} className="text-gold-500" />, label: "Category", value: product.category },
                { icon: <ShieldCheck size={18} className="text-gold-500" />, label: "Quality", value: "Grade A Export" },
                { icon: <Globe size={18} className="text-gold-500" />, label: "Origin", value: "India" },
                { icon: <Clock size={18} className="text-gold-500" />, label: "Shelf Life", value: "Long" },
                { icon: <Zap size={18} className="text-gold-500" />, label: "Storage", value: "Standard" },
                 
              ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group py-1">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-gold-500/10 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-bold text-gray-400 min-w-[140px] uppercase text-[10px] tracking-widest whitespace-nowrap">{item.label} :</span>
                      <span className="text-navy-900 font-black text-sm tracking-tight">{item.value}</span>
                    </div>
                  </div>
              ))}
            </div> */}

            <div className="flex flex-wrap gap-4 pt-1 border-t border-gray-50">
              <Link to="/contact" className="flex-1 bg-navy-900 text-white px-8 py-5 rounded-2xl font-bold text-[14px] uppercase flex items-center justify-center gap-3 hover:bg-gold-500 transition-all shadow-xl shadow-navy-900/10 cursor-pointer">
                <Mail size={18} /> Contact Us
              </Link>
              <a href={`mailto:crosscaneoverseas@gmail.com?subject=Catalog Request: ${product.title}`} className="flex-1 border-2 border-gray-200 text-navy-900 px-8 py-5 rounded-2xl font-bold text-[14px] uppercase flex items-center justify-center gap-3 hover:border-gold-500 hover:text-gold-500 transition-all cursor-pointer">
                <FileText size={18} /> Download Catalog
              </a>
            </div>
          </div>
        </div>

       
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 ">
          {/* Section: Description */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 md:p-14 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-1000" />
             <div className="relative z-10 max-w-2xl">
               <h2 className="text-2xl font-black text-navy-900 mb-5 uppercase tracking-widest">Product Description</h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-5 font-medium italic text-justify">
                 Our {product.title} are carefully handpicked, machine-graded, and hygienically packed to maintain elite freshness and quality during international transit. We ensure that every batch meets the highest standards of international trade.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   "Carefully handpicked from trusted farms",
                   "Strict quality inspection and grading",
                   "Safe and hygienic packaging",
                   "Timely delivery with maximum freshness",
                   "Zero-defect quality assurance",
                   "Environmentally conscious sourcing"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 text-xs text-navy-800 font-bold group/item">
                     <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center shrink-0 group-hover/item:bg-gold-500 group-hover/item:text-navy-900 transition-all">
                       <Check size={14} strokeWidth={4} />
                     </div>
                     {item}
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Section: Packaging */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 md:p-14 shadow-sm">
            <h2 className="text-2xl font-black text-navy-900 mb-10 uppercase tracking-widest">Packaging Options</h2>
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { title: "Standard Box", weight: "13 KG", icon: <Package size={32} /> },
                { title: "Commercial", weight: "5 KG", icon: <Zap size={32} /> },
                { title: "Bulk Supply", weight: "Custom", icon: <Truck size={32} /> }
              ].map((p, i) => (
                <div key={i} className="text-center group">
                  <div className="aspect-square rounded-3xl bg-gray-50 mb-6 flex items-center justify-center text-gold-500 border border-transparent group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    {p.icon}
                  </div>
                  <p className="text-sm font-black text-navy-900 mb-0">{p.weight}</p>
                  <p className="text-[11px] text-gray-600 font-bold uppercase tracking-widest">{p.title}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="bg-navy-900 py-4 px-8 rounded-2xl flex items-center justify-center gap-4 group hover:bg-gold-500 transition-colors cursor-pointer">
              <ShieldCheck size={18} className="text-gold-500 group-hover:text-navy-900" />
              <p className="text-xs font-bold text-white group-hover:text-navy-900 uppercase tracking-widest">Private Label & Custom Branding</p>
            </Link>
          </div>
        </div>

          <div className="mb-24 bg-navy-900 rounded-3xl p-10 md:p-16  relative overflow-hidden shadow-2xl border border-white/10 group">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 translate-y-1/2 -translate-x-1/2 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center mb-16 relative z-10">
            <span className="text-gold-500 font-black text-[13px] uppercase mb-4 inline-block">Global Export Standards</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-white uppercase tracking-tighter block">
            <span className='text-white'>Product Capabilities</span>
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-9 relative z-10">
            {[
              { icon: <Award size={28} />, text: "Premium Export Quality" },
              { icon: <Leaf size={28} />, text: "Naturally Fresh & Pure" },
              { icon: <Zap size={28} />, text: "Uniform Size & Shape" },
              { icon: <BadgeCheck size={28} />, text: "Hygienically Processed" },
              { icon: <Star size={28} />, text: "Rich in Nutrients" },
              { icon: <Clock size={28} />, text: "Long Shelf Life" },
              { icon: <Package size={28} />, text: "Bulk Export Supply" },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center group/item cursor-default">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover/item:bg-gold-500 group-hover/item:border-gold-500 group-hover/item:scale-110 transition-all duration-500 backdrop-blur-sm shadow-xl text-gold-500 group-hover/item:text-navy-900">
                  {f.icon}
                </div>
                <p className="text-[13px] font-bold text-white/80   uppercase  group-hover/item:text-gold-500 transition-colors duration-300">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  mb-20">
          <div className="bg-white border border-gray-100 rounded-3xl p-7 md:px-14">
            <h2 className="text-2xl font-black text-navy-900 mb-5 uppercase tracking-widest">Product Specifications</h2>
            <div className="space-y-0 divide-y divide-gray-100">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex justify-between py-4 group">
                  <span className="text-[11px] font-bold text-gray-500 uppercase group-hover:text-gold-500 transition-colors">{spec.label}</span>
                  <span className="text-sm font-bold text-navy-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden w-full max-w-[450px] h-[280px] sm:h-[320px] md:h-[350px] shadow-2xl group mx-auto">
            <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Spec Bg" />
            <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-8 md:p-12 text-white">
               <div className="space-y-5">
                 {[
                   { icon: <Leaf />, title: "100% Natural & Fresh" },
                   { icon: <BadgeCheck />, title: "Hygienically Processed" },
                   { icon: <ShieldCheck />, title: "Pesticide Residue Free" },
                   { icon: <Globe />, title: "Best for Global Markets" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 group/li">
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover/li:bg-gold-500 group-hover/li:border-gold-500 transition-all">
                       {React.cloneElement(item.icon, { size: 24 })}
                     </div>
                     <span className="text-sm sm:text-lg md:text-xl font-semibold tracking-tight  leading-snug ">{item.title}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* Bulk Supply Banner - Corporate Access */}
        <div className="bg-navy-900 rounded-3xl p-12 md:p-16 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10 shadow-2xl shadow-navy-900/40 group">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-10 z-10">
            <div className="w-40 h-40 rounded-3xl overflow-hidden shrink-0 shadow-2xl ring-3 ring-white -rotate-3 group-hover:rotate-0 transition-transform duration-700">
              <img src={product.image} className="w-full h-full object-cover" alt="Banner" />
            </div>
            <div className="text-center md:text-left space-y-3">
              <span className="text-gold-500 font-bold text-[13px] uppercase block">Corporate Access</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-tighter uppercase leading-[0.95]"><span className='text-white'>Ready For <br/>Bulk Supply?</span></h2>
              <p className="text-white/60 font-medium max-w-md">Connect directly with our global export directors for exclusive technical briefings and bulk volume pricing.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 z-10 w-full lg:w-auto">
            <Link to="/contact" className="flex-1 lg:flex-none bg-gold-500 text-navy-900 px-12 py-6 rounded-2xl font-bold text-[13px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-gold-500/20 active:scale-95 flex items-center justify-center gap-3">
              Catalog <ChevronRight size={18} />
            </Link>
            <Link to="/contact" className="flex-1 lg:flex-none bg-white/5 border-2 border-white/10 text-white px-12 py-6 rounded-2xl font-bold text-[13px] uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-all active:scale-95 flex items-center justify-center gap-3 backdrop-blur-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Feature Bottom Bar */}
      <div className="bg-white py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            {[
              { icon: <ShieldCheck />, title: "Premium Quality" },
              { icon: <Globe />, title: "Export Standards" },
              { icon: <Zap />, title: "Competitive Price" },
              { icon: <Clock />, title: "On-Time Delivery" },
              { icon: <Users />, title: "Client Trust" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 group">
                <div className="text-gold-500 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(item.icon, { size: 36 })}
                </div>
                <p className="text-black/60 font-bold text-[11px] uppercase  group-hover:text-gold-500 transition-colors">
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
