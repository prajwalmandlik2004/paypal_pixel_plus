import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The simple, safer way to pay and get paid
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Join millions of users worldwide using PayPal for fast, secure, and hassle-free payments online and in person.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Sign Up for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-full border border-blue-600 transition-colors"
              >
                Log In
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-6 transform rotate-2">
              <img
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Person using PayPal on smartphone"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 transform -rotate-3">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Payment Sent</p>
                  <p className="text-sm text-gray-500">Fast & Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;