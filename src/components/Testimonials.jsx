import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai to Pune',
      rating: 5,
      text: 'Excellent service! The packing team was very professional and took great care of my fragile items. Everything was delivered on time without a single scratch. Highly recommended.',
      initials: 'RK'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi to Bangalore',
      rating: 5,
      text: 'I was worried about moving across the country, but PackWithGati made it completely hassle-free. Their tracking system kept me updated throughout the journey.',
      initials: 'PS'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Local Shifting, Ahmedabad',
      rating: 4,
      text: 'Very satisfied with their local shifting service. The team was punctual, polite, and worked very fast. The pricing was also quite affordable compared to others.',
      initials: 'AP'
    }
  ];

  return (
    <section className="bg-accent section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Read about the experiences of our thousands of satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gray-100" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
