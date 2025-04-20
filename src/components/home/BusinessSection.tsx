import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const BusinessSection: React.FC = () => {
  const benefits = [
    'Accept payments online, in person, or in app',
    'Manage and track your cash flow',
    'Get paid on your terms and timeframe',
    'Access business loans and working capital',
    'Protect your business with advanced security',
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Business owner using PayPal"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 transform rotate-6">
              <div className="text-center">
                <p className="font-bold text-gray-900">35M+</p>
                <p className="text-sm text-gray-500">Active merchants</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Payment solutions for your business
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From startup to enterprise, PayPal offers flexible, secure payment processing to help your business grow.
            </p>
            
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-600">{benefit}</p>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Explore business solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;