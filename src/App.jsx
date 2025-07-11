// Previous code remains the same until the footer section

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

// Rest of the code remains the same