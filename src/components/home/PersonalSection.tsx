import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PersonalSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              PayPal for your personal needs
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Send money in seconds</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Pay friends and family instantly with just their email or phone number.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Shop with confidence</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Pay securely at millions of stores online and in person with Purchase Protection.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Get paid back easily</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Create payment requests and split bills without the awkwardness.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <img
              src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Person using PayPal on phone"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 right-8 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    $0
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">No fees</p>
                  <p className="text-sm text-gray-500">When sending to friends & family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;