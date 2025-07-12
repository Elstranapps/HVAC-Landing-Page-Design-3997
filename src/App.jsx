import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import SafeIcon from './common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiTrendingUp,
  FiTarget,
  FiUsers,
  FiDollarSign,
  FiZap,
  FiShield,
  FiAward,
  FiThumbsUp,
  FiCalendar,
  FiSettings,
  FiBarChart,
  FiGlobe,
  FiSmartphone,
  FiMonitor,
  FiHeart,
  FiTool,
  FiHome,
  FiWind,
  FiMenu,
  FiX
} = FiIcons;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle scroll for navbar and menu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        // Check if clicked element is not the menu button
        const menuButton = document.querySelector('.mobile-menu-button');
        if (!menuButton || !menuButton.contains(e.target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const handleBookCall = () => {
    window.open('https://calendly.com/freewebsiteplan', '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">            
            <a href="#hero" className="flex items-center space-x-2 pointer-events-auto">
              <SafeIcon icon={FiGlobe} className="text-2xl text-orange-500" />
              <h1 className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Webcrafted
              </h1>
             </a>

            {/* Hamburger Icon for Mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden focus:outline-none pointer-events-auto mobile-menu-button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <SafeIcon
                icon={isMobileMenuOpen ? FiX : FiMenu}
                className={`text-2xl ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#benefits" className={`transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Benefits
              </a>
              <a href="#process" className={`transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Process
              </a>
              <a href="#testimonials" className={`transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Testimonials
              </a>
              <a
                href="https://calendly.com/freewebsiteplan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 btn-hover-effect"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`mobile-menu md:hidden fixed top-0 left-0 w-full h-screen bg-white z-[60] transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <a href="#hero" onClick={toggleMobileMenu} className="flex items-center space-x-2">
              <SafeIcon icon={FiGlobe} className="text-2xl text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-900">Webcrafted</h1>
            </a>
            {/* Close Button */}
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <SafeIcon icon={FiX} className="text-2xl text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="space-y-6 mt-8">
            <a
              href="#benefits"
              onClick={toggleMobileMenu}
              className="block py-3 text-lg font-medium text-gray-800 hover:text-orange-500 transition-colors border-b border-gray-100"
            >
              Benefits
            </a>
            <a
              href="#process"
              onClick={toggleMobileMenu}
              className="block py-3 text-lg font-medium text-gray-800 hover:text-orange-500 transition-colors border-b border-gray-100"
            >
              Process
            </a>
            <a
              href="#testimonials"
              onClick={toggleMobileMenu}
              className="block py-3 text-lg font-medium text-gray-800 hover:text-orange-500 transition-colors border-b border-gray-100"
            >
              Testimonials
            </a>
            
            <div className="pt-6">
              <a
                href="https://calendly.com/freewebsiteplan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg text-center font-semibold transition-all duration-300"
              >
                Get Started
              </a>
            </div>
            
            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center space-x-4 text-gray-500">
                <SafeIcon icon={FiPhone} className="text-xl" />
                <span>Book a free call</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-500 mt-4">
                <SafeIcon icon={FiMail} className="text-xl" />
                <span>info@webcrafted.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-title animate-fade-in">
              Turn Your HVAC Website Into a 
              <span className="gradient-text"> 24/7 Lead Machine</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 hero-subtitle animate-slide-up">
              We design high-converting websites that book HVAC businesses more jobs. 
              Get 3x more leads with our proven website strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <button
                onClick={handleBookCall}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 btn-hover-effect cta-button flex items-center space-x-2"
              >
                <span>Book Your Free Website Plan</span>
                <SafeIcon icon={FiArrowRight} className="ml-2" />
              </button> 
            </div>
            <p className="text-center text-orange-100 mb-12">
              ✓ No obligation • ✓ Free consultation • ✓ Custom strategy included
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 float-animation">
                <SafeIcon icon={FiTrendingUp} className="text-3xl text-orange-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-2">$5M+</h3>
                <p className="text-gray-200">Extra Revenue Generated</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 float-animation" style={{animationDelay: '0.5s'}}>
                <SafeIcon icon={FiUsers} className="text-3xl text-orange-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-2">300%</h3>
                <p className="text-gray-200">Average Lead Increase</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 float-animation" style={{animationDelay: '1s'}}>
                <SafeIcon icon={FiClock} className="text-3xl text-orange-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-gray-200">Lead Generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections (Benefits, Process, Testimonials, CTA, Footer) remain exactly the same */}
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        {/* ... existing benefits content ... */}
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        {/* ... existing process content ... */}
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        {/* ... existing testimonials content ... */}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        {/* ... existing CTA content ... */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        {/* ... existing footer content ... */}
      </footer>
    </div>
  );
}

export default App;
