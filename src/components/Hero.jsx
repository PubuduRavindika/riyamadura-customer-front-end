import { useState } from 'react';

const Hero = () => {
  const [searchFilters, setSearchFilters] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    location: '',
    type: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search filters:', searchFilters);
  };

  const handleFilterChange = (field, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 ai-gradient-bg opacity-90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ai-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-ai-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-white text-sm font-medium">
              🚗 Trusted by 10,000+ customers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Vehicle Match
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Buy and sell vehicles with confidence. Our AI-powered platform connects you with the best deals and trusted sellers.
          </p>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Search Vehicles</h3>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Make */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Make</label>
                    <select
                      value={searchFilters.make}
                      onChange={(e) => handleFilterChange('make', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-ai-400"
                    >
                      <option value="">Select Make</option>
                      <option value="toyota">Toyota</option>
                      <option value="honda">Honda</option>
                      <option value="bmw">BMW</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                      <option value="ford">Ford</option>
                      <option value="chevrolet">Chevrolet</option>
                      <option value="nissan">Nissan</option>
                    </select>
                  </div>

                  {/* Model */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Model</label>
                    <input
                      type="text"
                      placeholder="Enter model"
                      value={searchFilters.model}
                      onChange={(e) => handleFilterChange('model', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-ai-400"
                    />
                  </div>

                  {/* Year */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Year</label>
                    <select
                      value={searchFilters.year}
                      onChange={(e) => handleFilterChange('year', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-ai-400"
                    >
                      <option value="">Select Year</option>
                      {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Price Range</label>
                    <select
                      value={searchFilters.price}
                      onChange={(e) => handleFilterChange('price', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-ai-400"
                    >
                      <option value="">Any Price</option>
                      <option value="0-10000">Under $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-50000">$25,000 - $50,000</option>
                      <option value="50000-100000">$50,000 - $100,000</option>
                      <option value="100000+">Over $100,000</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Location</label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      value={searchFilters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-ai-400"
                    />
                  </div>

                  {/* Vehicle Type */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Vehicle Type</label>
                    <select
                      value={searchFilters.type}
                      onChange={(e) => handleFilterChange('type', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-ai-400"
                    >
                      <option value="">All Types</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="truck">Truck</option>
                      <option value="hatchback">Hatchback</option>
                      <option value="convertible">Convertible</option>
                      <option value="wagon">Wagon</option>
                      <option value="coupe">Coupe</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-gradient-to-r from-ai-500 to-primary-500 hover:from-ai-600 hover:to-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Vehicles
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4">
              Browse Vehicles
            </button>
            <button className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark-900">
              Sell Your Car
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300">Vehicles Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
