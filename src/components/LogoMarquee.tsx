import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Porsche', logo: '/assets/porsche-2.svg' },
  { name: 'Dell', logo: '/assets/dell-2.svg' },
  { name: 'VIVO', logo: '/assets/vivo-2.svg' },
  { name: '腾讯', logo: '/assets/tencent.svg' },
  { name: 'Coca-Cola', logo: '/assets/coca-cola-2021.svg' },
  { name: '阿里巴巴', logo: '/assets/alibaba-brand-color.svg' },
  { name: '友邦保险', logo: '/assets/aia-5.svg' },
  { name: '中国电信', logo: '/assets/china-telecom-logo.svg' },
];

const LogoMarquee = () => {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FFFBF2, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #FFFBF2, transparent)' }} />
      
      {/* Scrolling Logos */}
      <motion.div
        className="flex gap-12 items-center"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Repeat logos 3 times for seamless loop */}
        {[...Array(3)].map((_, repeatIndex) => (
          <React.Fragment key={repeatIndex}>
            {logos.map((logo, index) => (
              <motion.div
                key={`${repeatIndex}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -4 }}
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;
