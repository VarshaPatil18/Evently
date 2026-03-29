import { useState, useEffect } from 'react';

const partners = [
  { name: 'MARIGOLD', logo: 'MARIGOLD' },
  { name: 'KBR National Park', logo: 'KBR National Park' },
  { name: 'Taj Falaknuma Palace', logo: 'TAJ FALAKNUMA PALACE' },
  { name: 'Ridhira Retreat', logo: 'Ridhira Retreat' },
  { name: 'Digvalla', logo: 'Digvalla' },
  { name: 'MARIGOLD', logo: 'MARIGOLD' },
  { name: 'KBR National Park', logo: 'KBR National Park' },
  { name: 'Taj Falaknuma Palace', logo: 'TAJ FALAKNUMA PALACE' }
];

export function VenuePartners() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(partners.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl text-[#2C2C2C] mb-12 text-center" style={{ fontFamily: 'serif' }}>
          Venue Partners - Best Event Organisers In Hyderabad
        </h2>

        {/* Desktop view - show 4 at a time */}
        <div className="hidden md:block relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full flex justify-around items-center gap-8 px-8">
                {partners.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((partner, index) => (
                  <div key={index} className="flex-1 flex items-center justify-center h-24">
                    <div className="text-center">
                      {partner.logo === 'MARIGOLD' && (
                        <span className="text-2xl tracking-[0.3em] text-[#4A4A4A]" style={{ fontFamily: 'serif' }}>MARIGOLD</span>
                      )}
                      {partner.logo === 'KBR National Park' && (
                        <span className="text-xl text-[#4A4A4A]">KBR National Park</span>
                      )}
                      {partner.logo === 'TAJ FALAKNUMA PALACE' && (
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 border-2 border-[#8B6914] rounded mb-1 flex items-center justify-center">
                            <div className="text-[#8B6914] text-xs">TAJ</div>
                          </div>
                          <span className="text-xs text-[#4A4A4A]">FALAKNUMA PALACE</span>
                        </div>
                      )}
                      {partner.logo === 'Ridhira Retreat' && (
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-[#C9A961] rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-white rounded-sm" />
                          </div>
                          <span className="text-lg text-[#4A4A4A]">Ridhira Retreat</span>
                        </div>
                      )}
                      {partner.logo === 'Digvalla' && (
                        <span className="text-3xl text-[#D32F2F]" style={{ fontFamily: 'cursive' }}>Digvalla</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view - show 2 at a time */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {partners.slice(0, 4).map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm">
              <div className="text-center">
                {partner.logo === 'MARIGOLD' && (
                  <span className="text-lg tracking-wider text-[#4A4A4A]" style={{ fontFamily: 'serif' }}>MARIGOLD</span>
                )}
                {partner.logo === 'KBR National Park' && (
                  <span className="text-sm text-[#4A4A4A]">KBR National Park</span>
                )}
                {partner.logo === 'TAJ FALAKNUMA PALACE' && (
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 border border-[#8B6914] rounded flex items-center justify-center mb-1">
                      <div className="text-[#8B6914] text-[10px]">TAJ</div>
                    </div>
                    <span className="text-[10px] text-[#4A4A4A]">FALAKNUMA</span>
                  </div>
                )}
                {partner.logo === 'Ridhira Retreat' && (
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-[#C9A961] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 border border-white rounded-sm" />
                    </div>
                    <span className="text-xs text-[#4A4A4A]">Ridhira</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#6B2C2C] w-8' : 'bg-[#6B2C2C]/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative border */}
      <div className="mt-12 border-t-4 border-[#6B2C2C]/10" style={{
        borderImage: 'repeating-linear-gradient(90deg, #6B2C2C 0, #6B2C2C 10px, transparent 10px, transparent 20px) 1'
      }} />
    </section>
  );
}
