import React from 'react';
import { ShieldCheck, ArrowLeftRight, CreditCard, Banknote } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Send & Receive Money',
      description: 'Transfer money to friends and family securely, or request money with just a few clicks.',
      icon: ArrowLeftRight,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Pay Later',
      description: 'Shop now and pay over time with PayPal\'s flexible payment options.',
      icon: CreditCard,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Secure Payments',
      description: 'Shop with confidence knowing your purchases are protected.',
      icon: ShieldCheck,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Buy Crypto',
      description: 'Buy, hold, and sell cryptocurrency directly from your PayPal account.',
      icon: Banknote,
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The versatile payments platform
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Whatever your payment needs, PayPal has you covered with solutions that are simple, secure, and work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg transition-transform hover:scale-105"
            >
              <div className={`rounded-full p-3 inline-flex ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;