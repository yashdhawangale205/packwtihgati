import React from 'react';
import { PhoneCall, PackageOpen, Truck, Home } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: 'Book Service',
      description: 'Request a free quote online or call us. Our team will assess your requirements.',
      icon: <PhoneCall className="h-8 w-8 text-primary" />
    },
    {
      id: 2,
      title: 'Secure Packing',
      description: 'Our experts arrive and safely pack your items using premium materials.',
      icon: <PackageOpen className="h-8 w-8 text-primary" />
    },
    {
      id: 3,
      title: 'Safe Transport',
      description: 'Your items are safely loaded and transported in specialized moving vehicles.',
      icon: <Truck className="h-8 w-8 text-primary" />
    },
    {
      id: 4,
      title: 'On-time Delivery',
      description: 'We deliver, unload, and help you set up at your new destination.',
      icon: <Home className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section className="bg-secondary text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A simple, transparent, and hassle-free relocation process designed around your convenience.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-gray-900 rounded-full border-4 border-gray-800 flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300 relative">
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                    {step.id}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
