import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you would send this to your backend
    }
  };

  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Join Our Newsletter</h2>
          <p className="text-secondary-light mb-8">
            Subscribe to get special offers, free giveaways, and product launches.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-primary font-medium">Thank you for subscribing!</p>
              <p className="text-secondary-light mt-2">
                We've sent a confirmation email to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition duration-300 flex items-center justify-center"
              >
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;