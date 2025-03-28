import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const categories = ['All', ...new Set(products.map(product => product.category))];

const ProductList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary text-center mb-2">Our Products</h2>
        <p className="text-secondary-light text-center mb-8">Browse our collection of premium stationery</p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-secondary hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;