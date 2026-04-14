import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Local Shifting',
      price: 'Starts at ₹3,000',
      description: 'Perfect for shifting within the city limits.',
      features: [
        'Premium Packing Material',
        'Loading & Unloading',
        'Standard Transport Vehicle',
        'Basic Insurance',
      ],
      isPopular: false
    },
    {
      name: 'Intercity Relocation',
      price: 'Starts at ₹9,000',
      description: 'Ideal for moving across different states securely.',
      features: [
        'Multi-layer Premium Packing',
        'Loading, Transit & Unloading',
        'Closed Container Transport',
        'Comprehensive Insurance',
        'Dedicated Move Manager'
      ],
      isPopular: true
    },
    {
      name: 'Vehicle Transport',
      price: 'Starts at ₹4,500',
      description: 'Safe transport for your cars and two-wheelers.',
      features: [
        'Scratch-proof Wrapping',
        'Car Carrier Selection',
        'Door-to-Door Delivery',
        'Transit Insurance',
      ],
      isPopular: false
    }
  ];

  return (
    <section className="section-padding bg-white" id="pricing">
      <div className="text-center mb-16">
        <h2 className="heading-2">Simple & Transparent Pricing</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          No hidden fees. Get a clear idea of our competitive rates based on your moving requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`rounded-2xl p-8 border ${plan.isPopular ? 'border-primary ring-2 ring-primary/20 shadow-2xl relative' : 'border-gray-200 shadow-lg'} transition-transform duration-300 hover:-translate-y-2 bg-white flex flex-col`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                MOST POPULAR
              </div>
            )}
            
            <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
            <p className="text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100 min-h-[60px]">{plan.description}</p>
            
            <div className="mb-8">
              <span className="text-3xl font-extrabold text-primary">{plan.price}</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className={plan.isPopular ? 'btn-primary w-full' : 'btn-outline w-full'}>
              Get Exact Quote
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-sm text-gray-500 max-w-2xl mx-auto">
        * Please note that these are starting estimates. Final pricing depends on luggage volume, precise distance, and floor level. Contact us for a completely free and accurate assessment.
      </div>
    </section>
  );
};

export default Pricing;
