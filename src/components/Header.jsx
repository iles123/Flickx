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
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="FlickX Africa"
                className="h-10 sm:h-11 md:h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            {[
              { href: "#home", label: "Home" },
              { href: "#about-us", label: "About Us" },
              { href: "#ecosystem", label: "Ecosystem" },
              { href: "#talent", label: "Impact" },
              { href: "#why-choose-flickx", label: "Why choose us" },
              { href: "#blogs", label: "Blogs" },
              { href: "#fund", label: "Fund" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  text-[#0057A0] hover:text-white 
                  text-base lg:text-lg font-medium 
                  transition-all duration-200 
                  hover:bg-[#0057A0] 
                  px-3 py-2 rounded-md
                  active:bg-[#004080] active:text-white
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5">
            <button
              onClick={onLoginClick}
              className="
                bg-[#F8FAFC] text-[#0057A0] 
                px-6 py-2.5 lg:px-8 lg:py-3 
                rounded-xl font-medium text-base lg:text-lg
                hover:bg-[#0057A0] hover:text-white 
                transition-all duration-200
                border border-[#0057A0]/20
              "
            >
              Login
            </button>
            <button
              onClick={onLoginClick}
              className="
                bg-[#0057A0] text-white 
                px-6 py-2.5 lg:px-8 lg:py-3 
                rounded-xl font-medium text-base lg:text-lg
                hover:bg-[#0066cc] 
                transition-all duration-200
                shadow-sm hover:shadow-md
              "
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-[#0057A0] hover:text-[#0066cc] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden 
          bg-white border-t border-gray-100 
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen 
            ? 'max-h-screen opacity-100 shadow-xl' 
            : 'max-h-0 opacity-0 pointer-events-none'
          }
          overflow-hidden
        `}
      >
        <div className="px-4 py-5 space-y-2">
          {[
            { href: "#home", label: "Home" },
            { href: "#about-us", label: "About Us" },
            { href: "#ecosystem", label: "Ecosystem" },
            { href: "#talent", label: "Impact" },
            { href: "#why-choose-flickx", label: "Why choose us" },
            { href: "#blogs", label: "Blogs" },
            { href: "#fund", label: "Fund" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="
                block px-5 py-3.5 
                text-[#0057A0] hover:text-white 
                text-base sm:text-lg font-medium 
                rounded-lg transition-all duration-200
                hover:bg-[#0057A0] active:bg-[#004080]
              "
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Buttons */}
          <div className="pt-6 pb-4 space-y-4">
            <button
              onClick={() => {
                onLoginClick();
                handleLinkClick();
              }}
              className="
                w-full bg-[#F8FAFC] text-[#0057A0] 
                px-6 py-4 rounded-xl font-medium text-base
                hover:bg-[#0057A0] hover:text-white 
                transition-all duration-200
                border border-[#0057A0]/20
              "
            >
              Login
            </button>
            <button
              onClick={() => {
                onLoginClick();
                handleLinkClick();
              }}
              className="
                w-full bg-[#0057A0] text-white 
                px-6 py-4 rounded-xl font-medium text-base
                hover:bg-[#0066cc] 
                transition-all duration-200
              "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}