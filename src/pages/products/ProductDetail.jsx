import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, Download, ShieldCheck } from 'lucide-react'
import bananaImg from '../../assets/banana_premium.png'
import chickpeaImg from '../../assets/chickpea_premium.png'
import textileImg from '../../assets/textile_premium.png'

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
    ],
    applications: ['Food', 'Beverage', 'Bakery', 'Baby Food', 'Cosmetics', 'Supplements']
  },
  'chickpeas': {
    title: 'Chickpeas',
    tagline: 'Premium Export Grade Pulse from India',
    image: chickpeaImg,
    description: [
      "Crosscane Overseas offers premium-quality Chickpeas sourced from trusted farms across India and processed under strict quality standards. Known for their rich taste, high nutritional value, and excellent quality, our chickpeas are carefully cleaned, graded, and packed to meet international export requirements.",
      "Chickpeas are widely used in households, food processing industries, restaurants, and health food products due to their high protein, fiber, vitamins, and mineral content. They are an essential ingredient in various cuisines and are valued for their versatility and health benefits.",
      "Our chickpeas are appreciated for their purity, uniform size, natural freshness, and long shelf life. With a commitment to quality, hygiene, and reliable supply, Crosscane Overseas ensures premium export-grade products for customers worldwide."
    ],
    features: [
      "Premium-quality export-grade chickpeas",
      "Rich source of protein and dietary fiber",
      "Hygienically cleaned and processed",
      "Natural taste, freshness, and long shelf life",
      "Available in customized packaging options"
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Type", value: "Kabuli / Desi" },
      { label: "Quality", value: "Machine Cleaned / Sortex" },
      { label: "Packaging", value: "Customized Jute/PP Bags" }
    ],
    applications: ['Household', 'Restaurants', 'Food Processing', 'Health Food']
  },
  'onion-powder': {
    title: 'Onion Powder',
    tagline: 'Premium Dehydrated Export Quality',
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=1200&h=800",
    description: [
      "Crosscane Overseas offers premium-quality Onion Powder made from carefully selected fresh onions sourced from trusted farms in India. Processed under hygienic conditions using advanced dehydration and grinding techniques, our onion powder retains its natural aroma, flavor, and nutritional properties.",
      "Onion powder is widely used in the food processing, seasoning, snack, ready-to-eat, restaurant, and spice industries due to its strong flavor profile and convenience in cooking applications. It serves as an excellent ingredient for soups, sauces, curries, marinades, spice blends, and processed food products.",
      "Our onion powder is known for its fine texture, purity, long shelf life, and consistent quality. We follow strict quality control measures and secure packaging standards to meet international export requirements and ensure customer satisfaction worldwide."
    ],
    features: [
      "Premium-quality dehydrated onion powder",
      "Strong natural aroma and rich flavor",
      "Hygienically processed and finely ground",
      "Long shelf life with export-quality packaging",
      "Suitable for food processing and seasoning applications",
      "Available in customized packaging options"
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Type", value: "White / Red Onion Powder" },
      { label: "Processing", value: "Dehydrated & Finely Ground" },
      { label: "Packaging", value: "Moisture-Proof Export Bags" }
    ],
    applications: ['Food Processing', 'Seasoning', 'Snacks', 'Ready-to-Eat', 'Restaurants', 'Spices']
  },
  'banana-fibers': {
    title: 'Banana Fiber',
    tagline: 'Sustainable & Strong Natural Fiber',
    image: "https://images.unsplash.com/photo-1528476513222-19bc30a7861c?auto=format&fit=crop&q=80&w=1200&h=800",
    description: [
      "Crosscane Overseas offers premium-quality Banana Fiber extracted from natural banana plant stems sourced from trusted farms in India. Processed using eco-friendly and hygienic methods, our banana fiber is known for its durability, strength, and sustainable nature.",
      "Banana fiber is widely used in the textile, handicraft, paper, packaging, rope, mat, and eco-friendly product industries due to its biodegradable and versatile properties. It is valued as a sustainable alternative to synthetic fibers and is increasingly preferred in environmentally conscious markets worldwide.",
      "Our banana fiber is appreciated for its natural texture, high tensile strength, lightweight quality, and long-lasting performance. At Crosscane Overseas, we maintain strict quality standards and reliable packaging to ensure premium export-grade products for global customers."
    ],
    features: [
      "100% natural and eco-friendly fiber",
      "Strong, durable, and lightweight material",
      "Biodegradable and sustainable product",
      "Suitable for textile, handicraft, and industrial applications",
      "Hygienically processed with export-quality standards",
      "Available in customized packaging options"
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Source", value: "Banana Plant Stems" },
      { label: "Property", value: "High Tensile Strength" },
      { label: "Packaging", value: "Eco-friendly Bales / Rolls" }
    ],
    applications: ['Textile', 'Handicraft', 'Paper', 'Packaging', 'Rope', 'Mat', 'Eco-friendly Products']
  },
  'textiles': {
    title: 'Industrial Textiles',
    tagline: 'Precision Crafted Quality from India',
    image: textileImg,
    description: [
      "Crosscane Overseas offers premium-quality Textile Products crafted with precision, durability, and superior workmanship. Sourced and manufactured using quality raw materials and modern production standards, our textile products reflect the rich textile heritage and craftsmanship of India.",
      "We deal in a wide range of textile products suitable for domestic and international markets, including fabrics, garments, home textiles, cotton products, and customized textile solutions. Our products are widely appreciated for their quality, comfort, elegant designs, and long-lasting performance.",
      "With a strong commitment to quality assurance, timely delivery, and customer satisfaction, Crosscane Overseas ensures that all textile products meet international standards and export requirements. We focus on delivering reliable products that combine style, functionality, and value for global customers."
    ],
    features: [
      "Premium-quality textile products",
      "Durable, comfortable, and finely crafted materials",
      "Wide range of fabrics and textile solutions",
      "Suitable for domestic and international markets",
      "Export-quality packaging and quality assurance",
      "Available in customized designs and packaging options"
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Type", value: "Fabrics, Garments, Cotton" },
      { label: "Quality", value: "ISO Certified Standards" },
      { label: "Packaging", value: "Customized Export Grade" }
    ],
    applications: ['Domestic', 'International', 'Fashion', 'Home Decor', 'Industrial']
  },
  'jegry-powder': {
    title: 'Jaggery Powder',
    tagline: 'Natural Traditional Sweetener',
    image: "https://images.unsplash.com/photo-1610970882739-4919597ed079?auto=format&fit=crop&q=80&w=1200&h=800",
    description: [
      "Crosscane Overseas offers premium-quality Jaggery Powder made from carefully selected sugarcane processed under hygienic and controlled conditions. Our jaggery powder is produced using traditional methods combined with modern quality standards to preserve its natural taste, aroma, and nutritional value.",
      "Jaggery powder is widely used in food processing, confectionery, bakery, beverages, and household cooking as a natural sweetener. Rich in minerals and nutrients, it is considered a healthier alternative to refined sugar and is valued for its authentic flavor and health benefits.",
      "Our jaggery powder is known for its purity, fine texture, rich golden color, and long shelf life. At Crosscane Overseas, we ensure strict quality control and export-grade packaging to meet international standards and customer expectations worldwide."
    ],
    features: [
      "100% natural and chemical-free sweetener",
      "Rich in minerals and natural nutrients",
      "Fine texture with authentic taste and aroma",
      "Hygienically processed under quality standards",
      "Long shelf life with export-quality packaging",
      "Available in customized packaging options"
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Source", value: "Pure Sugarcane" },
      { label: "Purity", value: "100% Chemical-Free" },
      { label: "Packaging", value: "Customized Export Grade" }
    ],
    applications: ['Food Processing', 'Confectionery', 'Bakery', 'Beverages', 'Household']
  },
  'wheat': {
    title: 'Golden Wheat',
    tagline: 'Premium Export Grade Grain',
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1200&h=800",
    description: [
      "Crosscane Overseas offers premium-quality Wheat sourced from trusted farms across India and processed under strict quality standards. Carefully cleaned, graded, and packed, our wheat is known for its purity, rich nutritional value, and superior quality suitable for international markets.",
      "Wheat is one of the most widely consumed staple grains and is extensively used in flour mills, food processing industries, bakeries, and household consumption. It is valued for its high carbohydrate content, dietary fiber, protein, and essential nutrients, making it an important ingredient in various food products.",
      "Our wheat is appreciated for its uniform grain size, natural freshness, long shelf life, and consistent quality. At Crosscane Overseas, we ensure hygienic processing, reliable supply, and export-quality packaging to meet global customer requirements."
    ],
    features: [
      "Premium-quality export-grade wheat",
      "Rich source of carbohydrates and dietary fiber",
      "Hygienically cleaned and processed",
      "Uniform grain size with natural freshness",
      "Long shelf life and export-quality packaging",
      "Available in customized packaging options"
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Type", value: "Milling / Durum Wheat" },
      { label: "Quality", value: "Machine Cleaned / Sortex" },
      { label: "Packaging", value: "25kg / 50kg PP Bags" }
    ],
    applications: ['Flour Mills', 'Food Processing', 'Bakeries', 'Household Consumption']
  },
  'spices': {
    title: 'Premium Indian Spices',
    tagline: 'Authentic Flavors & Intense Aromas',
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=1200&h=800",
    description: [
      "Crosscane Overseas offers a wide range of premium-quality Indian Spices, sourced directly from the finest spice-growing regions across India. Our spices are processed and packed under strict quality and hygienic standards to retain their natural oils, intense aroma, and vibrant flavor.",
      "We provide a comprehensive selection of whole and ground spices, including Cardamom (Ilaichi), Cloves (Long), Black Pepper, Red Chilli, Ginger, Cumin (Jira), Turmeric, and Coriander. Each spice is carefully selected for its purity and potency, ensuring an authentic culinary experience for customers worldwide.",
      "Our spices are widely used in the food industry, restaurants, and households for their exceptional quality and health benefits. With a commitment to excellence and reliable supply, Crosscane Overseas delivers export-grade spices that meet international food safety requirements."
    ],
    features: [
      "Premium-quality authentic Indian spices",
      "Rich in natural oils and intense aroma",
      "Hygienically processed and sortex cleaned",
      "Wide range including Cardamom, Cloves, Turmeric, and more",
      "Long shelf life with moisture-proof packaging",
      "Available in customized bulk and retail packaging"
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Range", value: "Whole & Ground Spices" },
      { label: "Quality", value: "Sortex Cleaned / Grade A" },
      { label: "Packaging", value: "Vacuum / Moisture-Proof Bags" }
    ],
    applications: ['Food Industry', 'Restaurants', 'Culinary Use', 'Health Supplements']
  },
  'salt': {
    title: 'Pure Sea Salt',
    tagline: 'Refined Quality for Global Markets',
    image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&q=80&w=1200&h=800",
    description: [
      "Crosscane Overseas offers premium-quality Salt processed and refined under strict hygiene and quality standards to meet international export requirements. Sourced from reliable producers in India, our salt is known for its purity, natural taste, and consistent quality.",
      "Salt is widely used in food processing, seasoning, preservation, industrial applications, and household consumption. It is an essential ingredient valued for its mineral content, fine texture, and versatility across various industries.",
      "Our salt is carefully processed, tested, and packed to maintain freshness, purity, and long shelf life. At Crosscane Overseas, we are committed to delivering reliable export-grade salt products with secure packaging and timely supply to customers worldwide."
    ],
    features: [
      "Premium-quality refined salt",
      "High purity and consistent quality",
      "Hygienically processed and packed",
      "Suitable for food and industrial applications",
      "Long shelf life with export-quality packaging",
      "Available in customized packaging options"
    ],
    specs: [
      { label: "Origin", value: "India" },
      { label: "Type", value: "Refined Free-Flow / Industrial" },
      { label: "Purity", value: "99%+ NaCl" },
      { label: "Packaging", value: "25kg / 50kg HDPE Bags" }
    ],
    applications: ['Food Processing', 'Chemical Industry', 'Hospitality', 'Household']
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
                  {product.applications.map((tag, i) => (
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
