import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { HowWeWork } from '../components/HowWeWork';
import { WhyChoose } from '../components/WhyChoose';
import { VenuePartners } from '../components/VenuePartners';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <HowWeWork />
      <WhyChoose />
      <VenuePartners />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
