import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const caseStudies = [
  { company: "某制造企业", result: "客服成本降低40%" },
  { company: "某零售品牌", result: "营销ROI提升600%" },
  { company: "某教育机构", result: "2周上线智能客服" },
  { company: "某医疗公司", result: "报告审核效率提升80%" },
  { company: "某金融机构", result: "风控准确率提升95%" },
];

const LiveToastNotification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentCase = caseStudies[currentIndex];

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-auto"
          >
            <div className="backdrop-blur-xl bg-white/90 rounded-2xl shadow-2xl border border-white/40 p-4 min-w-[280px] max-w-[320px]">
              <div className="flex items-start gap-3">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/20">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </motion.div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs font-medium text-gray-500 mb-1"
                  >
                    实时成果
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm font-semibold text-gray-900"
                  >
                    {currentCase.company}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm text-orange-600 font-medium mt-1"
                  >
                    {currentCase.result}
                  </motion.div>
                </div>
              </div>

              {/* Progress Bar */}
              <motion.div
                className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiveToastNotification;
