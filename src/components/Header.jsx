import { useState } from 'react';
import logo from '../assets/FlickXL.png';

export default function Header({ onLoginClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src={logo} 
                alt="FlickX Africa" 
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation – completely unchanged */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#0057A0] hover:text-white text-lg font-semibold transition-colors hover:bg-[#0057A0] px-2 py-2 rounded active:bg-[#0057A0] active:text-white ">
              Home
            </a>
            <a href="#about-us" className="text-[#0057A0] hover:text-white text-base font-semibold transition-colors hover:bg-[#0057A0] px-2 py-2 rounded active:bg-[#0057A0] active:text-white">
              About Us
            </a>
            <a href="#ecosystem" className="text-[#0057A0] hover:text-white text-lg font-semibold transition-colors hover:bg-[#0057A0] px-2 py-2 rounded active:bg-[#0057A0] active:text-white">
              Ecosystem
            </a>
            <a href="#talent" className="text-[#0057A0] hover:text-white text-lg font-semibold transition-colors hover:bg-[#0057A0] px-2 py-2 rounded active:bg-[#0057A0] active:text-white">
              Impact
            </a>
            <a href="#why-choose-flickx" className="text-[#0057A0] hover:text-white text-lg font-semibold transition-colors hover:bg-[#0057A0] px-2 py-2 rounded active:bg-[#0057A0] active:text-white">
              Why choose us
            </a>
            <a href="#blogs" className="text-[#0057A0] hover:text-white text-lg font-semibold transition-colors hover:bg-[#0057A0] px-2 py-2 rounded active:bg-[#0057A0] active:text-white">
              Blogs
            </a>
            <a href="#fund" className="text-[#0057A0] hover:text-white text-lg font-semibold transition-colors hover:bg-[#0057A0] px-2 py-2 rounded active:bg-[#0057A0] active:text-white">
              Fund
            </a>
          </div>

          {/* Desktop Buttons – completely unchanged */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onLoginClick}
              className="bg-[#F8FAFC] text-[#0057A0] px-8 py-4 rounded-[10px] font-medium hover:bg-[#0057A0] transition-colors hover:text-white"
            >
              Login
            </button>
            <button 
              onClick={onLoginClick}
              className="bg-[#0057A0] text-white px-8 py-4 rounded-[10px] font-medium hover:bg-[#0066cc] transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-[#0057A0] hover:text-[#0066cc] p-3 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu – improved spacing, readability, touch targets */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-5 py-6 space-y-2">
            <a 
              href="#home" 
              onClick={handleLinkClick}
              className="block text-[#0057A0] hover:text-white text-lg sm:text-xl font-semibold py-4 px-5 rounded-lg transition-colors hover:bg-[#0057A0]/95 active:bg-[#004080]"
            >
              Home
            </a>
            <a 
              href="#about-us" 
              onClick={handleLinkClick}
              className="block text-[#0057A0] hover:text-white text-lg sm:text-xl font-semibold py-4 px-5 rounded-lg transition-colors hover:bg-[#0057A0]/95 active:bg-[#004080]"
            >
              About Us
            </a>
            <a 
              href="#ecosystem" 
              onClick={handleLinkClick}
              className="block text-[#0057A0] hover:text-white text-lg sm:text-xl font-semibold py-4 px-5 rounded-lg transition-colors hover:bg-[#0057A0]/95 active:bg-[#004080]"
            >
              Ecosystem
            </a>
            <a 
              href="#talent" 
              onClick={handleLinkClick}
              className="block text-[#0057A0] hover:text-white text-lg sm:text-xl font-semibold py-4 px-5 rounded-lg transition-colors hover:bg-[#0057A0]/95 active:bg-[#004080]"
            >
              Impact
            </a>
            <a 
              href="#why-choose-flickx" 
              onClick={handleLinkClick}
              className="block text-[#0057A0] hover:text-white text-lg sm:text-xl font-semibold py-4 px-5 rounded-lg transition-colors hover:bg-[#0057A0]/95 active:bg-[#004080]"
            >
              Why choose us
            </a>
            <a 
              href="#blogs" 
              onClick={handleLinkClick}
              className="block text-[#0057A0] hover:text-white text-lg sm:text-xl font-semibold py-4 px-5 rounded-lg transition-colors hover:bg-[#0057A0]/95 active:bg-[#004080]"
            >
              Blogs
            </a>
            <a 
              href="#fund" 
              onClick={handleLinkClick}
              className="block text-[#0057A0] hover:text-white text-lg sm:text-xl font-semibold py-4 px-5 rounded-lg transition-colors hover:bg-[#0057A0]/95 active:bg-[#004080]"
            >
              Fund
            </a>

            {/* Mobile Action Buttons – better spacing & size */}
            <div className="pt-6 pb-4 space-y-4 border-t border-gray-200 mt-4">
              <button 
                onClick={() => {
                  onLoginClick();
                  handleLinkClick();
                }}
                className="w-full bg-[#F8FAFC] text-[#0057A0] py-4 px-6 rounded-xl font-medium text-lg hover:bg-[#0057A0] hover:text-white transition-colors border border-[#0057A0]/30"
              >
                Login
              </button>
              <button 
                onClick={() => {
                  onLoginClick();
                  handleLinkClick();
                }}
                className="w-full bg-[#0057A0] text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-[#0066cc] transition-colors shadow-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}