import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion";

import {
  ChevronRight,
  Home,
  FileText,
  Mail,
  Check,
  Leaf,
  ShieldCheck,
  Globe,
  Users,
  Clock,
  Package,
  BadgeCheck,
  Award,
  Zap,
  Star,
  Truck,
} from "lucide-react";

import { PRODUCTS } from "../../constants/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [activeImg, setActiveImg] = useState(0);

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
  }, [slug]);

  const gallery = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 mt-5 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-navy-900 transition-colors"
            >
              <Home size={14} /> Home
            </Link>

            <ChevronRight size={14} />

            <Link
              to="/products"
              className="hover:text-navy-900 transition-colors"
            >
              Products
            </Link>

            <ChevronRight size={14} />

            <span className="text-gray-400 capitalize">
              {product.category}
            </span>

            <ChevronRight size={14} />

            <span className="text-navy-900 font-bold">
              {product.title}
            </span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 mb-16">

          {/* Image */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full md:w-[400px] h-[350px] md:h-[330px] rounded-3xl overflow-hidden mx-auto shadow-sm bg-gray-50"
            >
              <img
                src={gallery[activeImg]}
                alt={product.title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="inline-block px-4 py-1 bg-gold-500/10 text-gold-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 self-start">
              Premium Export Quality
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5 uppercase">
              {product.title}
            </h2>

            <p className="text-navy-600 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-widest">
              • Fresh • Natural • Global Standard
            </p>

            <p className="text-navy-500 mb-4 text-base font-medium text-justify pr-0 md:pr-4">
              {product.shortDesc}
            </p>

            <div className="flex flex-wrap gap-4 pt-1 border-t border-gray-50">
              <Link
                to="/contact"
                className="flex-1 bg-navy-900 text-white px-8 py-5 rounded-2xl font-bold text-[13px] uppercase flex items-center justify-center gap-3 hover:bg-gold-500 transition-all"
              >
                <Mail size={18} />
                Contact Us
              </Link>

              <a
                href="/catalog.pdf"
                download
                className="flex-1 border-2 border-gray-200 text-navy-900 px-8 py-5 rounded-2xl font-bold text-[13px] uppercase flex items-center justify-center gap-3 hover:border-gold-500 hover:text-gold-500 transition-all"
              >
                <FileText size={18} />
                Catalog
              </a>
            </div>
          </div>
        </div>

        {/* Description + Packaging */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">

          {/* Description */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 md:p-14 shadow-sm relative overflow-hidden group">

            <div className="absolute top-0 right-0 w-64 h-60 bg-gold-500/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-1000" />

            <div className="relative z-10 max-w-2xl">

              <h2 className="text-xl font-black text-navy-900 mb-5 uppercase tracking-widest">
                Product Description
              </h2>

              <div className="space-y-4 mb-8">
                {product.description?.map((desc, index) => (
                  <p
                    key={index}
                    className="text-gray-500 text-base md:text-lg leading-relaxed font-medium text-justify"
                  >
                    {desc}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features?.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-sm text-navy-800 font-bold"
                  >
                    <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={4} />
                    </div>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packaging */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 md:p-14 shadow-sm">

            <h2 className="text-xl font-black text-navy-900 mb-10 uppercase tracking-widest">
              Packaging Options
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {product.packagingOptions?.map((pack, i) => (
                <div key={i} className="text-center group">

                  <div className="aspect-square rounded-3xl bg-gray-50 mb-6 flex items-center justify-center text-gold-500 border border-transparent group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    <Package size={34} />
                  </div>

                  <p className="text-sm font-black text-navy-900 mb-0">
                    {pack}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="bg-navy-900 py-4 px-8 rounded-2xl flex items-center justify-center gap-4 hover:bg-gold-500 transition-colors"
            >
              <ShieldCheck size={18} className="text-gold-500" />

              <p className="text-xs font-bold text-white uppercase tracking-widest">
                Private Label & Custom Branding
              </p>
            </Link>
          </div>
        </div>

        {/* Product Capabilities */}
  <div className="mb-24 bg-navy-900 rounded-[30px] md:rounded-[40px] p-3 sm:p-8 md:p-14 lg:p-14 relative overflow-hidden shadow-2xl border border-white/10">

  {/* Background Blur */}
  <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gold-500/10 blur-[120px] rounded-full"></div>

  {/* Heading */}
  <div className="text-center mb-10 md:mb-14 relative z-10">

    <span className="text-gold-500 font-semibold text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[3px] mb-3 md:mb-4 inline-block">
      Global Export Standards
    </span>

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
      <span className="text-white">
        Product Capabilities
      </span>
    </h2>

    <div className="w-16 md:w-20 h-[4px] bg-gold-500 mx-auto mt-4 rounded-full"></div>
  </div>

  {/* Mobile Horizontal Scroll */}
  <div className="overflow-x-auto scrollbar-hide relative py-2 z-10">

    {/* Features Wrapper */}
    <div className="flex md:grid md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-8 min-w-max md:min-w-0">

      {product.features?.map((feature, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center group min-w-[140px] md:min-w-0"
        >

          {/* Icon Box */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-[22px] md:rounded-[28px] bg-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-5 text-gold-500 backdrop-blur-md transition-all duration-500 group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:scale-110 shrink-0">

            {i === 0 && <Award size={30} />}
            {i === 1 && <Leaf size={30} />}
            {i === 2 && <Zap size={30} />}
            {i === 3 && <BadgeCheck size={30} />}
            {i === 4 && <Star size={30} />}
            {i === 5 && <Clock size={30} />}
            {i === 6 && <Package size={30} />}

          </div>

          {/* Text */}
          <p className="text-[11px] sm:text-[12px] md:text-[13px] leading-5 md:leading-6 font-semibold text-white/90 uppercase tracking-wide px-1 group-hover:text-gold-500 transition-colors duration-300">
            {feature}
          </p>

        </div>
      ))}
    </div>
  </div>
</div>

        {/* Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          <div className="bg-white border border-gray-100 rounded-3xl p-7 md:px-14">

            <h2 className="text-xl font-bold text-navy-900 mb-5 uppercase tracking-widest">
              Product Specifications
            </h2>

            <div className="space-y-0 divide-y divide-gray-100">
              {product.specs?.map((spec, i) => (
                <div key={i} className="flex justify-between py-4">
                  <span className="text-[12px] font-bold text-gray-500">
                    {spec.label}
                  </span>

                  <span className="text-sm font-bold text-navy-900">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-3xl overflow-hidden w-full max-w-[450px] h-[350px] shadow-2xl mx-auto">

            <img
              src={product.image}
              className="w-full h-full object-cover"
              alt={product.title}
            />

            <div className="absolute inset-0 bg-navy-900/60"></div>

            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">

              <div className="space-y-5">

                {[
                  "100% Natural & Fresh",
                  "Hygienically Processed",
                  "Pesticide Residue Free",
                  "Best for Global Markets",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                      <BadgeCheck size={22} />
                    </div>

                    <span className="text-sm md:text-lg font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;