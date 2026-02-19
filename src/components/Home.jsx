import { useState } from 'react';
import { motion } from 'framer-motion';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <section
      id="home"
      className="
        bg-gradient-to-br from-soft-white to-white
        py-16 sm:py-24 md:py-32 lg:py-40
        relative overflow-hidden
        min-h-screen flex items-center
      "
    >
      {/* Floating decorative elements — smaller + hidden some on mobile */}
      <motion.div
        className="absolute -top-10 -left-10 w-32 h-32 sm:w-48 sm:h-48 bg-sky-blue/20 rounded-full opacity-50 sm:opacity-60"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hidden sm:block absolute top-20 right-8 sm:right-16 lg:right-32 w-24 h-24 sm:w-32 sm:h-32 bg-sky-blue/30 rounded-full opacity-40"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-12 left-1/4 sm:left-1/3 w-20 h-20 sm:w-24 sm:h-24 bg-deep-blue/20 rounded-full opacity-40 sm:opacity-50"
        animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="hidden md:block absolute -bottom-20 right-8 sm:right-16 w-48 h-48 sm:w-64 sm:h-64 bg-yellow-100 rounded-full opacity-30 md:opacity-40"
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      {/* fewer small decorations on mobile */}
      <motion.div
        className="hidden sm:block absolute top-1/3 right-1/5 w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full opacity-40 sm:opacity-50"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="
              text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-bold text-gray-900
              mb-6 sm:mb-8 md:mb-10
              leading-tight
            "
          >
            <span className="text-[#0057A0]">Build.Create.</span>
            <span className="text-[#F4B400]">Earn</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="
              text-lg sm:text-xl md:text-2xl
              font-normal text-gray-600
              mb-8 sm:mb-10 md:mb-12
              max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto
              leading-relaxed
            "
          >
            Welcome to FlickX Africa the digital headquarters of African creativity, where learning, innovation, talent and funding power the creative future.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center mb-12 md:mb-16 lg:mb-20">
            <motion.button
              onClick={() => setShowLogin(true)}
              className="
                bg-deep-blue text-white
                font-bold py-3 px-7 sm:px-8
                rounded-full text-base sm:text-lg
                shadow-lg flex items-center group
                transition-colors
              "
              whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span>Start Your Journey</span>
              <svg
                className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>

            <a
              href="#learn"
              className="
                group text-charcoal hover:text-deep-blue
                text-base sm:text-lg font-medium
                transition-colors flex items-center
              "
            >
              <span className="relative pr-5">
                Learn More
                <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </span>
            </a>
          </div>

          {/* Video / LMS placeholder card */}
          <div
            className="
              relative bg-white rounded-2xl sm:rounded-3xl
              p-8 sm:p-12 md:p-16 lg:p-20
              shadow-2xl
              max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-5xl
              mx-auto
              border border-gray-100
            "
          >
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-gray-100 transition-colors border-2 border-gray-200">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-500">Video or LMS Screenshot</h3>
            </div>
          </div>
        </div>
      </div>

      {showLogin && (
        <LoginForm
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onClose={() => setShowLogin(false)}
        />
      )}

      {showSignup && (
        <SignupForm
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
          onClose={() => setShowSignup(false)}
        />
      )}
    </section>
  );
}