import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sneha Uppalapati',
    event: 'Engagement · June 5th',
    text: 'I\'m truly happy to have chosen Evently as the event planner for my sister\'s engagement. The entire event was beautifully organised, and every detail was thoughtfully executed. The décor, coordination, and professionalism exceeded our expectations. Thank you for making the occasion so memorable for our family!',
    initial: 'S'
  },
  {
    name: 'Jagruti (Bride)',
    event: 'Wedding · June 6th',
    text: 'Thank you, Evently, for the stunning decoration at our wedding! Every detail was beautifully executed and created the perfect atmosphere we had imagined. Your creativity and professionalism truly made our special day unforgettable. We\'re so glad we chose your team!',
    initial: 'J'
  },
  {
    name: 'Rajesh Kumar',
    event: 'Wedding · March 15th',
    text: 'Evently Events made our dream wedding come true! From the initial consultation to the final execution, everything was perfect. The team\'s attention to detail and creative ideas exceeded our expectations. Highly recommended!',
    initial: 'R'
  }
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl text-[#2C2C2C] mb-12 text-center" style={{ fontFamily: 'serif' }}>
          What Client Says - Top-Ranked Event Management in Hyderabad
        </h2>

        <div className="relative">
          {/* Desktop - show 2 testimonials */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {[0, 1].map((offset) => {
              const index = (currentSlide + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <div
                  key={index}
                  className="bg-[#F5F1E8] rounded-lg p-8 relative shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#6B2C2C] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">{testimonial.initial}</span>
                    </div>
                    <div>
                      <h3 className="text-lg text-[#2C2C2C] mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-[#4A4A4A]">{testimonial.event}</p>
                    </div>
                    <Quote className="ml-auto w-10 h-10 text-[#6B2C2C]/20" />
                  </div>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile - show 1 testimonial */}
          <div className="md:hidden">
            <div className="bg-[#F5F1E8] rounded-lg p-6 relative shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#6B2C2C] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{testimonials[currentSlide].initial}</span>
                </div>
                <div>
                  <h3 className="text-lg text-[#2C2C2C] mb-1">{testimonials[currentSlide].name}</h3>
                  <p className="text-sm text-[#4A4A4A]">{testimonials[currentSlide].event}</p>
                </div>
                <Quote className="ml-auto w-8 h-8 text-[#6B2C2C]/20" />
              </div>
              <p className="text-[#4A4A4A] leading-relaxed text-sm">
                {testimonials[currentSlide].text}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-[#6B2C2C] w-8' : 'bg-[#6B2C2C]/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}