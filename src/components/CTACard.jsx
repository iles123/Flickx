import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function CTACard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="relative group mb-20 mt-20">
        {/* Gradient Background Effect */}
        <div className="absolute -inset-1 bg-[#0057A0] rounded-3xl blur-xl opacity-20 group-hover:opacity-50 transition duration-500"></div>
        
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl p-12 shadow-xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-[#0057A0] rounded-2xl flex items-center justify-center shadow-lg mx-auto transform rotate-45">
                <Zap className="w-10 h-10 text-white transform -rotate-45" />
              </div>
            </motion.div>

            {/* Main Text */}
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Ready to flick
              <span className="relative inline-block mx-2">
                <span className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  the switch
                </span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                  className="absolute inset-0 text-5xl md:text-6xl font-bold text-gray-900 mb-4"
                ></motion.div>
              </span>
              ?
            </h2>

            {/* Subtext */}
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of creatives who've already transformed their careers. Start your journey today.
            </p>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 bg-[#0057A0] text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Button Background Effect */}
              <motion.div
                animate={{ 
                  x: ['0%', '100%'],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              
              {/* Button Content */}
              <span className="relative z-10">Start Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity
                }}
                className="relative z-10"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}