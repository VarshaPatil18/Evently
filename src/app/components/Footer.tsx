import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L12 12L4 16L12 20L16 28L20 20L28 16L20 12L16 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
              </svg>
              <span className="text-2xl" style={{ fontFamily: 'serif' }}>Evently</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Evently is an end-to-end event planning company based in Telangana, crafting unforgettable celebrations since 2024. From venue booking to flawless execution, we transform every event into a beautifully curated experience with creativity, precision, and dedication.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'serif' }}>Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:evently1810@gmail.com" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">evently1810@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Sangareddy Narsapur Road, Narsapur, Telangana – 502313, India</span>
              </div>
              <a href="tel:+916309308480" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+91 6309308480</span>
              </a>
              <a href="tel:+919063695296" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+91 9063695296</span>
              </a>
            </div>
          </div>

          {/* Our Location */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'serif' }}>Our Location</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=17.725626,78.254973&hl=en&z=14&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                title="Evently Events Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Evently Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}