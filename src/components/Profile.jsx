import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';
import { Star, MapPin, Quote } from 'lucide-react';

import talent1 from '../assets/talent1.png';
import talent2 from '../assets/talent2.png';

export default function Profile() {
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const talentMembers = [
    {
      name: "John Doe",
      role: "Director",
      details: "FlickX Learn gave me the skills to transition from accounting to film-making.",
      location: "Lagos, Nigeria",
      image: talent1,
      rating: 5
    },
    {
      name: "Amina",
      role: "Cinematographer",
      details: "FlickX Learn gave me the skills to transition from accounting to film-making.",
      location: "Lagos, Nigeria",
      image: talent2,
      rating: 5
    },
    {
      name: "Oshoporu Emmanuel",
      role: "Film Editor",
      details: "FlickX Learn gave me the skills to transition from accounting to film-making.",
      location: "Lagos, Nigeria",
      image: talent1,
    },
    {
      name: "Sarah Johnson",
      role: "Producer",
      details: "FlickX Learn gave me the skills to transition from accounting to film-making.",
      location: "Lagos, Nigeria",
      image: talent2,
    },
    {
      name: "Michael Chen",
      role: "Sound Designer",
      details: "FlickX Learn gave me the skills to transition from accounting to film-making.",
      location: "Lagos, Nigeria",
      image: talent1,
    },
    {
      name: "Grace Akpan",
      role: "Screenwriter",
      details: "FlickX Learn gave me the skills to transition from accounting to film-making.",
      location: "Lagos, Nigeria",
      image: talent2,
    }
  ];

  // Duplicate array for seamless infinite scroll
  const duplicatedMembers = [...talentMembers, ...talentMembers, ...talentMembers];

  const handleTalentAction = () => {
    if (isAuthenticated) {
      // Handle authenticated action
    } else {
      setShowLogin(true);
    }
  };

  return (
    <section id="talent" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
           Real Stories, Real Impact
          </h2>
          <p className="text-lg text-gray-600">
            Connect With The Best Creative Professionals
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Continuous Scroll Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className={`flex gap-6 min-w-max ${
                hoveredCardIndex !== null ? 'animation-pause' : 'animate-[scroll_40s_linear_infinite]'
              }`}
            >
              {duplicatedMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-[320px] flex-shrink-0"
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 h-full flex flex-col">
                    {/* Profile Image with Gradient Border */}
                    <div className="relative mb-4 inline-block mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-70"></div>
                      <div className="relative">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-20 h-20 rounded-full mx-auto object-contain bg-white p-1 ring-4 ring-white"
                        />
                      </div>
                    </div>

                    {/* Member Info */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                    
                    {/* Location */}
                    <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-3">
                      <MapPin className="w-3 h-3" />
                      <span>{member.location}</span>
                    </div>

                    {/* Testimonial/Details */}
                    <div className="relative mb-4 px-2">
                      <Quote className="w-6 h-6 text-blue-200 absolute -top-2 -left-2 opacity-50" />
                      <p className="text-gray-600 text-sm italic line-clamp-3">
                        "{member.details}"
                      </p>
                    </div>
                    
          
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Browse All Button */}
        <div className="flex justify-center mt-12">
          <motion.button 
            onClick={handleTalentAction}
            className="bg-blue-600 text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-md hover:shadow-xl flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Browse All Talent</span>
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>

        {/* Auth Modals */}
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
      </div>

      {/* Add to your global CSS or tailwind.config.js */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animation-pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}