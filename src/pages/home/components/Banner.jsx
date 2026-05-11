import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";

const slides = [
  {
    image: banner1,
    tag: "WE EXPORT • YOU GROW",
    title1: "Bringing Quality",
    title2: "From India To The World",
    highlight: "India",
    desc: `Crosscane Overseas is a trusted export company delivering premium agricultural products, textiles, spices and quality Indian goods worldwide.`,
  },

  {
    image: banner2,
    tag: "GLOBAL EXPORT SOLUTIONS",
    title1: "Premium Agricultural",
    title2: "Products Worldwide",
    highlight: "Agricultural",
    desc: `We specialize in exporting banana powder, onions, chickpeas, jaggery powder, soyabean and other high-quality Indian products.`,
  },

  {
    image: banner3,
    tag: "TRUST • QUALITY • EXPORT",
    title1: "Reliable Export",
    title2: "Partner For Your Business",
    highlight: "Export",
    desc: `Delivering trusted export services with professionalism, transparent business practices and timely global delivery.`,
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="Crosscane Overseas Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/50 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">

          {/* Tag */}
          {/* <motion.p
            key={slides[current].tag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold-500 uppercase tracking-[2px] font-semibold mb-4"
          >
            {slides[current].tag}
          </motion.p> */}

          {/* Heading */}
          <motion.h1
            key={slides[current].title1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            {slides[current].title1}
            <br />

            {slides[current].title2.replace(
              slides[current].highlight,
              ""
            )}

            <span className="text-gold-500 ml-2">
              {slides[current].highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            key={slides[current].desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl  leading-relaxed mb-8 max-w-xl"
          >
            {slides[current].desc}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/products"
              className="bg-gold-500 hover:bg-gold-500/80 text-navy-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-gold-500/20"
            >
              Explore Products
            </a>

            <a
              href="/contact"
              className="border border-white/20 text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Features */}
          <div className="flex flex-wrap gap-8 mt-12">
            <div>
              <h3 className="text-gold-500 font-bold text-xl">
                Premium
              </h3>
              <p className="text-white/60 text-sm">
                Quality Products
              </p>
            </div>

            <div>
              <h3 className="text-gold-500 font-bold text-xl">
                Global
              </h3>
              <p className="text-white/60 text-sm">
                Export Network
              </p>
            </div>

            <div>
              <h3 className="text-gold-500 font-bold text-xl">
                Trusted
              </h3>
              <p className="text-white/60 text-sm">
                Business Partner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-gold-500 scale-125"
                : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-gold-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Banner;