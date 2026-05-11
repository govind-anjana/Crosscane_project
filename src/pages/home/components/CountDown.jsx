import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Users, ShieldCheck, Award, Leaf, Globe } from 'lucide-react';

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    duration: 3000,
    bounce: 0,
  });

  const displayValue = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const CountDown = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      value: 5000,
      suffix: "+",
      label: "Farmers Empowered",
      description: "Direct partnerships ensuring fair trade and sustainable livelihoods."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-500" />,
      value: 100,
      suffix: "%",
      label: "Organic Sourcing",
      description: "Pesticide-free and ethically harvested premium products."
    },
    {
      icon: <Globe className="w-8 h-8 text-gold-500" />,
      value: 15,
      suffix: "+",
      label: "Global Markets",
      description: "Exporting excellence across 4 continents with seamless logistics."
    },
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      value: 30,
      suffix: "+",
      label: "Years of Trust",
      description: "A legacy of quality and reliability in international trade."
    },
  ];

  return (
    <section className="max-w-7xl mx-auto relative py-24 overflow-hidden">
      {/* Background with Premium Emerald Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#022c22] opacity-98"></div>
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay scale-110"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        ></div>
        
        {/* Decorative Light Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            Our Global Impact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Sustainability & <span className="text-gold-500">Ethics</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-emerald-50/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            We are committed to ethical sourcing, environmental responsibility, and empowering farming communities across the globe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            //   className="relative group h-full"
            >
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-3xl hover:-translate-y-2">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-500 group-hover:rotate-6">
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <h3 className="text-gold-500 font-bold text-xl mb-4">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-white text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountDown;