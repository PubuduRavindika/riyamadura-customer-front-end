import { useState } from 'react';

const SellVehicles = () => {
  const [sellForm, setSellForm] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    price: '',
    description: '',
    contact: '',
    location: '',
    images: []
  });

  const handleFormChange = (field, value) => {
    setSellForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sell form:', sellForm);
  };

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Best Price Guarantee",
      description: "Get the best market value for your vehicle with our AI-powered pricing algorithm."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Verified Buyers",
      description: "Connect with pre-verified buyers who are serious about purchasing your vehicle."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Quick Sale",
      description: "Sell your vehicle faster with our streamlined process and wide buyer network."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure Transactions",
      description: "Safe and secure payment processing with escrow protection for your peace of mind."
    }
  ];

  return (
    <section id="sell" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sell Your Vehicle on <span className="gradient-text">Riyamadura</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get the best value for your vehicle with our trusted platform. Reach thousands of verified buyers and sell with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sell Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">List Your Vehicle</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Make *
                  </label>
                  <select
                    required
                    value={sellForm.make}
                    onChange={(e) => handleFormChange('make', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ai-500 focus:border-transparent"
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter model"
                    value={sellForm.model}
                    onChange={(e) => handleFormChange('model', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ai-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Year *
                  </label>
                  <select
                    required
                    value={sellForm.year}
                    onChange={(e) => handleFormChange('year', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ai-500 focus:border-transparent"
                  >
                    <option value="">Select Year</option>
                    {Array.from({ length: 30 }, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mileage *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Enter mileage"
                    value={sellForm.mileage}
                    onChange={(e) => handleFormChange('mileage', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ai-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Asking Price *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Enter price"
                    value={sellForm.price}
                    onChange={(e) => handleFormChange('price', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ai-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter location"
                    value={sellForm.location}
                    onChange={(e) => handleFormChange('location', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ai-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Information *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Phone number or email"
                  value={sellForm.contact}
                  onChange={(e) => handleFormChange('contact', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ai-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your vehicle's condition, features, and any additional information..."
                  value={sellForm.description}
                  onChange={(e) => handleFormChange('description', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ai-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                List Your Vehicle
              </button>
            </form>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why Sell with Riyamadura?
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-ai-500 to-primary-500 rounded-lg flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-ai-500 to-primary-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Selling Success</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Sell Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">7 Days</div>
                  <div className="text-sm opacity-90">Average Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$2,500</div>
                  <div className="text-sm opacity-90">Avg. More</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm opacity-90">Happy Sellers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellVehicles;
