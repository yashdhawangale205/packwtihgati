import React from 'react';
import { Truck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">

          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <Truck className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl tracking-tight">PackWith<span className="text-primary">Gati</span></span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's most trusted logistics partner. We provide secure, fast, and affordable relocation services across the nation. Your belongings are safe with us.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary mt-2"></span>
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary transition-colors text-sm">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary mt-2"></span>
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">House Shifting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Office Relocation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Car Transport</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Bike Transport</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Warehouse Storage</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary mt-2"></span>
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-medium mb-1">Phone:</span>
                +91 8199073923 <br />
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-medium mb-1">Email:</span>
                helpdeskgatiexpress@gmail.com
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-medium mb-1">Address:</span>
                123, Logistics Park, Andheri East, Mumbai 400069
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {currentYear} PackWithGati. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
