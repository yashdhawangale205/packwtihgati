import React, { useState } from 'react';
import { ArrowRight, MapPin, Truck } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from_city: '',
    to_city: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const { error } = await supabase.from('estimates').insert([
        {
          name: formData.name,
          phone: formData.phone,
          from_city: formData.from_city,
          to_city: formData.to_city,
        },
      ]);

      if (error) {
        throw error;
      }

      setStatus({ type: 'success', message: 'Your estimate request has been submitted successfully! We will call you back shortly.' });
      setFormData({ name: '', phone: '', from_city: '', to_city: '' });
    } catch (err) {
      console.error('Supabase insert error:', err);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-accent mx-auto py-12 md:py-20 lg:py-24" id="home">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-full md:w-2/3 lg:w-1/2"></div>
        {/* Placeholder for background image */}
        <div className="h-full w-full bg-gray-200 flex items-center justify-end px-12 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600518464441-9154a4de21af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
          <div className="absolute inset-0 bg-secondary/20 md:bg-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 bg-white/90 md:bg-transparent p-6 md:p-0 rounded-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-primary font-medium text-sm">
              <Truck className="h-4 w-4" />
              <span>Reliable & Fast Moving</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary">
              India's Trusted <br className="hidden md:block" />
              <span className="text-primary">Packers & Movers</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Relocating made simple. We offer safe, affordable, and on-time moving services for your home and office across the country.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-gray-200 max-w-lg">
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-secondary">10k+</span>
                <span className="text-sm text-gray-500">Happy Clients</span>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-secondary">15+</span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Quick Quote Form mapped out for desktop */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md ml-auto">
              <h3 className="text-2xl font-bold mb-2">Need a Quick Estimate?</h3>
              <p className="text-gray-500 mb-6 text-sm">Fill details below and we'll call you back instantly.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="hero-name" className="sr-only">Your Name</label>
                  <input type="text" id="hero-name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                  <input type="tel" id="hero-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required pattern="[0-9]{10}" />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-gray-400"><MapPin className="h-5 w-5" /></span>
                  <input type="text" name="from_city" value={formData.from_city} onChange={handleChange} placeholder="Moving From (City)" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-gray-400"><MapPin className="h-5 w-5" /></span>
                  <input type="text" name="to_city" value={formData.to_city} onChange={handleChange} placeholder="Moving To (City)" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full shadow-lg shadow-orange-500/30 disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                {status.message && (
                  <p className={`text-sm text-center mt-2 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
