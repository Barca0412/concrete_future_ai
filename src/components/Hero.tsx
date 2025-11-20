import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import GlassStatsCard from './GlassStatsCard';
import LiveToastNotification from './LiveToastNotification';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-screen flex flex-col justify-center" style={{ backgroundColor: '#FFFBF2' }}>
      {/* Animated Mesh Gradient Background */}
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Notification Bar - Top Hook */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 shadow-lg"
            >
              <Rocket className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                承诺：2周上线MVP，60天见到ROI，否则不收费
              </span>
            </motion.div>
          </motion.div>

          {/* H1 Headline with Gradient Highlights */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              不只是AI转型，更是
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-black leading-tight mt-2">
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                业绩倍增
              </span>
              <span className="text-gray-900"> 的 </span>
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                确定性交付
              </span>
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            告别PPT造车。炬象未来融合AI技术与实战经验，已帮助{' '}
            <span className="font-bold text-orange-600">120+ 企业</span>实现平均{' '}
            <span className="font-bold text-orange-600">600% ROI</span>。从战略到落地，我们用结果说话。
          </motion.p>

          {/* Hero Stats - Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <GlassStatsCard
              icon={Zap}
              value="2周"
              label="上线MVP"
              delay={0.6}
            />
            <GlassStatsCard
              icon={TrendingUp}
              value="3亿+"
              label="节省成本"
              delay={0.7}
            />
            <GlassStatsCard
              icon={Rocket}
              value="600%"
              label="平均ROI"
              delay={0.8}
            />
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            {/* Primary Button with Pulsate */}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-2xl text-base font-bold text-white overflow-hidden inline-flex items-center justify-center shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #D97757 0%, #C96543 100%)',
              }}
            >
              {/* Pulsating Ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #D97757 0%, #C96543 100%)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                开启60天ROI挑战 (免费咨询)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="#results"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-2xl text-base font-medium backdrop-blur-xl bg-white/60 border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center shadow-lg"
            >
              查看真实获客案例
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Live Result Toast Notifications */}
      <LiveToastNotification />
    </section>
  );
};

export default Hero;