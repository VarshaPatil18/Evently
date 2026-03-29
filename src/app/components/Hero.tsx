import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroImg1 from '../assets/36ecf84f3148a1af1fb23f7aff52707773077d92.png';
import heroImg2 from '../assets/f41d3175442526f05ced82d815c574a95517d9ec.png';
import heroImg3 from '../assets/c6104a9f802015ab99670a7e80211afac0d4ac73.png';

const heroImages = [
  heroImg1,
  heroImg2,
  heroImg3,
  'https://images.unsplash.com/photo-1767986012547-3fc29b18339f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHJlY2VwdGlvbiUyMGRlY29yfGVufDF8fHx8MTc3MjM0MzkxNHww&ixlib=rb-4.1.0&q=80&w=1080'
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentImageIndex]}
            alt="Event decoration"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col justify-center h-full pt-20">
        <h1 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: 'serif' }}>
          Evently – End-to-End Event Organisers in Hyderabad
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Professional event organisers in Hyderabad planning weddings, birthday parties and corporate events with creative execution and reliable coordination.
        </p>
        <button 
          onClick={scrollToContact}
          className="px-8 py-3 bg-[#6B2C2C] text-white rounded-full hover:bg-[#5A2424] transition-colors shadow-lg hover:shadow-xl text-lg"
        >
          Speak to Us
        </button>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              currentImageIndex === index ? 'bg-white w-8' : 'bg-white/50 w-6'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}