import React from 'react';

const CompanyLogos: React.FC = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
          Trusted by millions of businesses worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Using company names styled as logos instead of actual logos for simplicity */}
          <div className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors">Uber</div>
          <div className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors">Spotify</div>
          <div className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors">Airbnb</div>
          <div className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors">Netflix</div>
          <div className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors">Booking</div>
          <div className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors">Etsy</div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;