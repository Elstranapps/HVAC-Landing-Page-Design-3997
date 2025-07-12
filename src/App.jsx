import React, { useState, useEffect } from 'react';
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
  FiWind
} = FiIcons;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    window.open('https://calendly.com/freewebsiteplan', '_blank');
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">            
            <a href="#hero" className="flex items-center space-x-2">
              <SafeIcon icon={FiGlobe} className="text-2xl text-orange-500" />
              <h1 className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Webcrafted
              </h1>
             </a>
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

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why HVAC Businesses Choose Webcrafted
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just build websites - we build lead-generating machines that work 24/7 to grow your HVAC business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <SafeIcon icon={FiTarget} className="text-4xl text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Lead-Focused Design</h3>
              <p className="text-gray-600">
                Every element is strategically placed to convert visitors into paying customers. No fluff, just results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <SafeIcon icon={FiSmartphone} className="text-4xl text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Mobile-First Approach</h3>
              <p className="text-gray-600">
                80% of your customers search on mobile. Our websites look perfect and convert on every device.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <SafeIcon icon={FiZap} className="text-4xl text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Slow websites lose customers. Our sites load in under 2 seconds, keeping visitors engaged.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <SafeIcon icon={FiBarChart} className="text-4xl text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">SEO Optimized</h3>
              <p className="text-gray-600">
                Rank higher on Google and get found by customers actively searching for HVAC services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <SafeIcon icon={FiShield} className="text-4xl text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Your website stays online 24/7 with enterprise-grade security and 99.9% uptime guarantee.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <SafeIcon icon={FiSettings} className="text-4xl text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Easy to Update</h3>
              <p className="text-gray-600">
                Sit back and relax while we take care of all the changes for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Proven 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've refined our process to deliver maximum results in minimum time. Here's how we transform your online presence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center relative process-step">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy Session</h3>
              <p className="text-gray-600">
                We analyze your business, competitors, and target audience to create a winning strategy.
              </p>
            </div>
            <div className="text-center relative process-step">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Design & Build</h3>
              <p className="text-gray-600">
                Our team creates a stunning, conversion-focused website tailored to your HVAC business.
              </p>
            </div>
            <div className="text-center relative process-step">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Launch & Optimize</h3>
              <p className="text-gray-600">
                We launch your site and continuously optimize for maximum lead generation and conversions.
              </p>
            </div>
            <div className="text-center relative process-step">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Grow & Scale</h3>
              <p className="text-gray-600">
                Watch your leads multiply as your new website works around the clock to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our HVAC Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what real HVAC business owners say about working with Webcrafted.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-yellow-400 star-filled" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Our new website has tripled our online leads. The phone hasn't stopped ringing since we launched!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-bold">Mike Johnson</h4>
                  <p className="text-gray-500">Johnson HVAC Services</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-yellow-400 star-filled" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Webcrafted delivered exactly what they promised. Our revenue increased by 40% in just 3 months."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SR</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Rodriguez</h4>
                  <p className="text-gray-500">Rodriguez Heating & Cooling</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-yellow-400 star-filled" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Professional, fast, and results-driven. Our website now converts visitors into customers like never before."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">DT</span>
                </div>
                <div>
                  <h4 className="font-bold">David Thompson</h4>
                  <p className="text-gray-500">Thompson Air Conditioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your HVAC Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let another day pass with a website that doesn't convert. 
            Book your free consultation and discover how we can 3x your leads in 90 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleBookCall}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 btn-hover-effect flex items-center space-x-2"
            >
              <SafeIcon icon={FiCalendar} />
              <span>Book Your Free Website Plan</span>
            </button>            
          </div>
          <p className="mt-6 text-orange-100">
            ✓ No obligation • ✓ Free consultation • ✓ Custom strategy included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Webcrafted</h3>
              <p className="text-gray-300 mb-4">
                We specialize in creating high-converting websites for HVAC businesses. 
                Our proven strategies have generated over $5M+ in extra revenue for our clients.
              </p>
              <div className="flex space-x-4">
                <SafeIcon icon={FiPhone} className="text-orange-400" />
                <span className="text-gray-300">(214) 646-6778</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#benefits" className="hover:text-orange-400 transition-colors">Benefits</a></li>
                <li><a href="#process" className="hover:text-orange-400 transition-colors">Our Process</a></li>
                <li><a href="#testimonials" className="hover:text-orange-400 transition-colors">Testimonials</a></li>
                <li><a href="https://calendly.com/freewebsiteplan" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Get Started</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ready to Get Started?</h4>
              <p className="text-gray-300 mb-4">
                Don't let another day pass without a website that converts. 
                Book your free consultation today.
              </p>
              <button
                onClick={handleBookCall}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Book Your Free Website Plan →
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Webcrafted. All rights reserved. Built for HVAC success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
