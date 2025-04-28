import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Land job interviews <br />
              <span className="text-blue-200">10x faster</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-50">
              Get coaching on resume writing, job skills, interviews and more.
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition duration-300">
              Get Started <span className="ml-1">→</span>
            </button>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    2024 / 2025
                  </span>
                  <h3 className="font-bold mt-1">HIRING TRENDS</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about the latest hiring trends and how to position yourself for success.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 text-sm">Download our free guide</span>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;