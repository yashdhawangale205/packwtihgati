import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    service_type: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('contact_requests').insert([
        {
          name: formData.name,
          phone: formData.phone,
          pickup_location: formData.pickup,
          drop_location: formData.drop,
          service_type: formData.service_type,
          additional_requirements: formData.message || null,
        },
      ]);

      if (insertError) throw insertError;

      // Show success state
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '', phone: '', email: '', pickup: '', drop: '', service_type: '', message: ''
        });
      }, 5000);
    } catch (err) {
      console.error('Contact form insert error:', err);
      setError('Failed to submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2">Get Your Free Quote</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to move? Fill out the form below or reach out to us directly. Our team is ready to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">

          {/* Contact Information */}
          <div className="lg:w-2/5 bg-secondary text-white p-10 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2">Contact Information</h3>
              <p className="text-gray-400 mb-10">We usually respond within 15 minutes.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1">Call Us 24/7</h4>
                    <p className="text-lg font-semibold">+91 8199073923</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1">Email Us</h4>
                    <p className="text-lg font-semibold">helpdeskgatiexpress@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1">Head Office</h4>
                    <p className="text-lg font-semibold">123, Logistics Park, <br />Andheri East, Mumbai, <br />Maharashtra 400069</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 p-10 md:p-12">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Request Received!</h3>
                <p className="text-gray-500 text-lg max-w-md">
                  Thank you for choosing PackWithGati. Our representative will contact you shortly with your personalized quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700" htmlFor="name">Full Name *</label>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700" htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel" id="phone" name="phone" required pattern="[0-9]{10}"
                      value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700" htmlFor="pickup">Pickup Location *</label>
                    <input
                      type="text" id="pickup" name="pickup" required
                      value={formData.pickup} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                      placeholder="City or Area"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700" htmlFor="drop">Drop Location *</label>
                    <input
                      type="text" id="drop" name="drop" required
                      value={formData.drop} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                      placeholder="City or Area"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="service_type">Service Type *</label>
                  <select
                    id="service_type" name="service_type" required
                    value={formData.service_type} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="House Shifting">House Shifting</option>
                    <option value="Office Relocation">Office Relocation</option>
                    <option value="Car Transport">Car Transport</option>
                    <option value="Bike Transport">Bike Transport</option>
                    <option value="Storage Services">Storage Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="message">Additional Requirements (Optional)</label>
                  <textarea
                    id="message" name="message" rows="4"
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white transition-colors resize-none"
                    placeholder="Tell us about specific items, floor level, preferred date..."
                  ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Submitting...' : 'Submit Request'} {!isSubmitting && <Send className="h-5 w-5" />}
                </button>
                {error && (
                  <p className="text-red-600 text-sm text-center mt-2">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
