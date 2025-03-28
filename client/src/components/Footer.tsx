import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="ml-2 text-xl font-bold">Nota</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium stationery and office supplies for professionals and creatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition duration-300">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-primary transition duration-300">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition duration-300">Blog</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition duration-300">Track Order</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-300">123 Stationery St, Design District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">hello@notastationery.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nota. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;