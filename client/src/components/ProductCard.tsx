import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            <button 
              onClick={() => addToCart(product)}
              className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition duration-300"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button 
              className="bg-white hover:bg-gray-100 text-secondary p-2 rounded-full transition duration-300"
              aria-label="Quick view"
            >
              <Eye className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500">{product.category}</span>
        <h3 className="text-lg font-semibold text-secondary mt-1">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="text-primary hover:text-primary-dark text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;