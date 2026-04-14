import React from 'react';
import { ShieldCheck, IndianRupee, Truck, Clock } from 'lucide-react';
import packWithGatiImg from '../assets/Packwithgati.jpg';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Trusted Service',
      description: 'Verified professionals and strict quality checks ensure your belongings are in the safest hands.',
      icon: <ShieldCheck className="h-8 w-8 text-white" />
    },
    {
      title: 'Affordable Pricing',
      description: 'Transparent pricing with no hidden charges. Get premium services at the most competitive rates.',
      icon: <IndianRupee className="h-8 w-8 text-white" />
    },
    {
      title: 'Safe Delivery',
      description: 'High-quality multi-layer packing material prevents damages. We manage everything with utmost care.',
      icon: <Truck className="h-8 w-8 text-white" />
    },
    {
      title: '24/7 Support',
      description: 'Dedicated customer support available round the clock to track your shipment and resolve queries.',
      icon: <Clock className="h-8 w-8 text-white" />
    }
  ];

  return (
    <section className="section-padding bg-accent" id="about">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-8">
          <div>
            <h2 className="heading-2">Why People Trust <br/>PackWith<span className="text-primary">Gati</span></h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-6 mt-4"></div>
            <p className="text-gray-600 text-lg">
              We don't just move boxes; we move lives. With over a decade of experience in the logistics industry, our team is committed to providing seamless and stress-free relocation solutions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <img 
            src={packWithGatiImg} 
            alt="PackWithGati" 
            className="rounded-3xl shadow-xl relative z-10 w-full object-cover h-[500px]"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4 hidden md:flex border border-gray-100">
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <ShieldCheck className="h-8 w-8 text-green-500" />
            </div>
            <div>
              <p className="text-secondary font-bold text-xl">100% Safe</p>
              <p className="text-gray-500 text-sm">Delivery Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
