import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GlassStatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const GlassStatsCard: React.FC<GlassStatsCardProps> = ({ icon: Icon, value, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group"
    >
      {/* Glassmorphic Card */}
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white/70">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-3">
          {/* Icon */}
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/20 group-hover:from-orange-500/20 group-hover:to-orange-600/30 transition-colors duration-300"
          >
            <Icon className="w-7 h-7 text-orange-600" strokeWidth={2.5} />
          </motion.div>
          
          {/* Value */}
          <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            {value}
          </div>
          
          {/* Label */}
          <div className="text-sm font-medium text-gray-700">
            {label}
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            style={{ transform: 'skewX(-20deg)' }}
          />
        </div>
      </div>

      {/* Floating Animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 blur-xl -z-10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default GlassStatsCard;
