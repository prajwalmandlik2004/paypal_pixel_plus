import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CompanyLogos from '../components/home/CompanyLogos';
import PersonalSection from '../components/home/PersonalSection';
import BusinessSection from '../components/home/BusinessSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CompanyLogos />
      <FeaturesSection />
      <PersonalSection />
      <BusinessSection />
      
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Join millions of users worldwide
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up for PayPal and start enjoying safe, simple, and secure payments.
          </p>
          <Link 
            to="/signup" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Sign Up for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;