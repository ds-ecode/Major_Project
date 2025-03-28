import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Premium Stationery for Your Creative Journey
            </h1>
            <p className="text-lg text-secondary-light mb-8">
              Discover our collection of high-quality notebooks, pens, and office accessories designed to inspire your best work.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#products" 
                className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="border border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Premium stationery collection" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;