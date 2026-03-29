import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Evently offer?',
    answer: 'At Evently, we offer services to fulfill each of your wedding needs. This includes Wedding Decor, Photography and Videography, Catering, Mehendi, Make-up, Invites, Guest Management, and other services. We also provide Venue Consultation, Budget Consultation, and other Wedding Planning services.'
  },
  {
    question: 'What is the starting price for Evently wedding decor?',
    answer: 'Our wedding decor packages start from ₹2,00,000 and can be customized based on your requirements, venue size, and design preferences. We offer flexible packages to suit different budgets while maintaining our quality standards.'
  },
  {
    question: 'What is an Evently wedding designer and why do I need one?',
    answer: 'An Evently wedding designer is a creative professional who transforms your vision into reality. They conceptualize themes, select color palettes, coordinate decor elements, and ensure every detail aligns with your aesthetic. They bring expertise, vendor connections, and creative solutions to make your wedding unique and memorable.'
  },
  {
    question: 'Does Evently also provide destination wedding packages?',
    answer: 'Yes, we specialize in destination weddings across India and internationally. We handle all aspects including venue selection, guest accommodation, travel coordination, local vendor management, and complete event planning. Our team ensures a seamless experience for you and your guests.'
  },
  {
    question: 'Does Evently provide decor for events other than weddings?',
    answer: 'Absolutely! We provide comprehensive decor and event management services for various occasions including corporate events, birthday parties, anniversaries, baby showers, engagement ceremonies, and cultural celebrations. Each event is customized to match the occasion and your preferences.'
  },
  {
    question: 'I came across a wedding design on your Instagram page that I like. How can I get it for my wedding?',
    answer: 'Great! Simply save the post and share it with our team during your consultation. We can recreate that design or customize it to match your venue, color preferences, and budget. Our designers will work with you to adapt the concept to perfectly suit your wedding vision.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl text-[#2C2C2C] mb-3" style={{ fontFamily: 'serif' }}>
          Frequently Asked Questions - Event Management Companies In Hyd
        </h2>
        <p className="text-[#4A4A4A] mb-12">
          Explore our FAQ section to find quick solutions to your queries
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F5F1E8]/50 transition-colors"
              >
                <span className="text-[#2C2C2C] pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#6B2C2C] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#6B2C2C] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-[#4A4A4A] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}