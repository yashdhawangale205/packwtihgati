import React from 'react';
import { Home, Briefcase, Car, Bike, Package } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'House Shifting',
      description: 'Complete household relocation with expert packing, loading, and safe delivery to your new home.',
      icon: <Home className="h-10 w-10 text-primary" />,
    },
    {
      id: 2,
      title: 'Office Relocation',
      description: 'Minimize downtime with our efficient and organized corporate moving services, tailored for businesses.',
      icon: <Briefcase className="h-10 w-10 text-primary" />,
    },
    {
      id: 3,
      title: 'Car Transport',
      description: 'Safe and scratch-free vehicle transportation using specialized carriers equipped for security.',
      icon: <Car className="h-10 w-10 text-primary" />,
    },
    {
      id: 4,
      title: 'Bike Transport',
      description: 'Secure multi-layered packing for two-wheelers to guarantee a damage-free transit.',
      icon: <Bike className="h-10 w-10 text-primary" />,
    },
    {
      id: 5,
      title: 'Storage Services',
      description: 'Short and long-term secure warehousing solutions with 24/7 surveillance for your belongings.',
      icon: <Package className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section className="section-padding bg-white" id="services">
      <div className="text-center mb-16">
        <h2 className="heading-2">Our Premium Services</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We provide a comprehensive range of relocation services designed to make your move stress-free, secure, and affordable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="group p-8 rounded-2xl border border-gray-100 bg-white hover:bg-white hover:shadow-xl hover:border-orange-100 transition duration-300 flex flex-col"
          >
            <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
            <p className="text-gray-600 flex-grow leading-relaxed">
              {service.description}
            </p>
            <a href="#contact" className="mt-8 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 w-fit">
              Let's Talk <span className="text-xl">→</span>
            </a>
          </div>
        ))}
        
        {/* Call to action card inside grid */}
        <div className="p-8 rounded-2xl bg-secondary text-white flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Custom Requirement?</h3>
          <p className="text-gray-300 mb-8">We offer tailor-made logistics solutions to meet your specific needs.</p>
          <a href="#contact" className="btn-primary border border-primary w-full">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
