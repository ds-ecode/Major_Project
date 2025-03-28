import React from 'react';
import { Truck, Shield, RefreshCw, Clock } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $50'
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Secure Payments',
    description: 'All transactions are secure and encrypted'
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: 'Easy Returns',
    description: '30-day money back guarantee'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Support',
    description: '24/7 customer support'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-secondary-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;