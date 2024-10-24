import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">CryptoExchange</h2>
            <p className="text-gray-400">
              Your one-stop solution for all cryptocurrency trading needs.
            </p>
          </div>
          <div className="flex space-x-10">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul>
                <li className="mb-1"><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li className="mb-1"><a href="#" className="hover:text-blue-500">Careers</a></li>
                <li className="mb-1"><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li className="mb-1"><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul>
                <li className="mb-1"><a href="#" className="hover:text-blue-500">Help Center</a></li>
                <li className="mb-1"><a href="#" className="hover:text-blue-500">Contact Us</a></li>
                <li className="mb-1"><a href="#" className="hover:text-blue-500">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-500">Facebook</a>
                <a href="#" className="hover:text-blue-500">Twitter</a>
                <a href="#" className="hover:text-blue-500">Instagram</a>
                <a href="#" className="hover:text-blue-500">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <h3 className="font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-600 bg-gray-800 text-white"
              required
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 rounded-r-md hover:bg-blue-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">&copy; {new Date().getFullYear()} CryptoExchange. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
