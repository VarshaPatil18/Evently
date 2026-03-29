import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';

const packages = [
  {
    name: 'Basic Decor',
    description: 'Simple stage setup, entry decoration, balloons and lighting',
    features: ['Basic stage backdrop', 'Entry arch', 'Balloon decorations', 'Standard lighting', 'Chair covers']
  },
  {
    name: 'Premium Decor',
    description: 'Theme-based decor, floral backdrop, entrance arch, stage lighting',
    features: ['Theme-based setup', 'Floral backdrop', 'Premium entrance arch', 'Stage lighting', 'Table centerpieces', 'Photo booth']
  },
  {
    name: 'Luxury Decor',
    description: 'Designer stage, premium floral installations, LED lighting, customized theme decor',
    features: ['Designer stage setup', 'Premium floral installations', 'LED lighting effects', 'Customized theme', 'Crystal chandeliers', 'Full venue transformation']
  }
];

const themes = [
  {
    name: 'Floral Wedding Decor',
    description: 'Elegant floral arrangements with fresh flowers',
    price: '₹75,000 - ₹1,50,000',
    image: 'https://images.unsplash.com/photo-1762709118823-7fe9c9afa8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjB3ZWRkaW5nJTIwZGVjb3IlMjBzdGFnZXxlbnwxfHx8fDE3NzI3MDQ4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Minimalist Stage Decor',
    description: 'Clean lines and modern aesthetics',
    price: '₹40,000 - ₹80,000',
    image: 'https://images.unsplash.com/photo-1760108232787-40ec40f9a706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3RhZ2UlMjBkZWNvciUyMG1vZGVybnxlbnwxfHx8fDE3NzI3MDQ4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Royal Mandap Decor',
    description: 'Traditional mandap with rich colors and fabrics',
    price: '₹1,00,000 - ₹2,00,000',
    image: 'https://images.unsplash.com/photo-1698879977208-c70a8741430c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3lhbCUyMG1hbmRhcCUyMGRlY29yJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzcyNzA0ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Garden Theme Decor',
    description: 'Natural outdoor-inspired decorations',
    price: '₹60,000 - ₹1,20,000',
    image: 'https://images.unsplash.com/photo-1770827960629-81743a13089e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjB0aGVtZSUyMGRlY29yJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzI3MDQ4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'LED Lighting Decor',
    description: 'Modern LED installations and effects',
    price: '₹50,000 - ₹1,00,000',
    image: 'https://images.unsplash.com/photo-1766258959635-93d2c9864946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBsaWdodGluZyUyMGRlY29yJTIwZXZlbnR8ZW58MXx8fHwxNzcyNzA0ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function DecorPage() {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    budget: '',
    location: '',
    eventDate: '',
    guests: ''
  });

  const handleSelectTheme = (themeName: string) => {
    setSelectedTheme(themeName);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setShowConfirmation(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <div className="bg-[#6B2C2C] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <button
            onClick={() => navigate('/#services')}
            className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>
          <h1 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: 'serif' }}>
            Choose Your Event Decor Theme
          </h1>
          <p className="text-white/90 max-w-3xl">
            Transform your venue with our stunning decor themes. From traditional elegance to modern minimalism, we create unforgettable atmospheres.
          </p>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-8" style={{ fontFamily: 'serif' }}>
          Decor Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl mb-2 text-[#6B2C2C]" style={{ fontFamily: 'serif' }}>
                {pkg.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
              <ul className="space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check size={16} className="text-[#6B2C2C] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Themes */}
        <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-8" style={{ fontFamily: 'serif' }}>
          Popular Decor Themes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg mb-1" style={{ fontFamily: 'serif' }}>
                  {theme.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{theme.description}</p>
                <p className="text-sm text-[#6B2C2C] font-medium mb-4">
                  {theme.price}
                </p>
                <button
                  onClick={() => handleSelectTheme(theme.name)}
                  className="w-full px-4 py-2 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors"
                >
                  Select Theme
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
          >
            <h3 className="text-2xl mb-4 text-[#6B2C2C]" style={{ fontFamily: 'serif' }}>
              Book Decor - {selectedTheme}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Budget</label>
                <input
                  type="text"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]"
                  placeholder="₹75,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]"
                  placeholder="Hyderabad"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Event Date</label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Guest Count</label>
                <input
                  type="number"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]"
                  placeholder="200"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors"
                >
                  Book Decor
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-8 max-w-md w-full text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl mb-3 text-[#6B2C2C]" style={{ fontFamily: 'serif' }}>
              Request Submitted!
            </h3>
            <p className="text-gray-700 mb-6">
              Your request has been submitted successfully. Our event manager will contact you shortly.
            </p>
            <button
              onClick={() => {
                setShowConfirmation(false);
                navigate('/#services');
              }}
              className="px-6 py-2 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors"
            >
              Back to Services
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
