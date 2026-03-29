import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';

const packages = [
  {
    name: 'Basic Photography',
    description: '1 photographer, 4-hour coverage',
    features: ['1 professional photographer', '4-hour coverage', '200+ edited photos', 'Online gallery', 'Basic editing']
  },
  {
    name: 'Premium Photography',
    description: '2 photographers, full event coverage, photo album',
    features: ['2 photographers', 'Full event coverage', '500+ edited photos', 'Premium photo album', 'Professional editing', 'Online gallery', 'Print rights']
  },
  {
    name: 'Luxury Photography',
    description: 'Cinematic video, drone photography, full editing package',
    features: ['3+ photographers', 'Cinematic videography', 'Drone photography', 'Unlimited photos', 'Premium albums', 'Same-day edit video', 'Full editing suite', 'Lifetime cloud storage']
  }
];

const services = [
  {
    name: 'Wedding Photography',
    description: 'Complete wedding day coverage with traditional and candid shots',
    price: '₹50,000 - ₹1,50,000',
    image: 'https://images.unsplash.com/photo-1769230385107-bc6eaa7a123e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyJTIwY2FtZXJhJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjYyNDA3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Event Photography',
    description: 'Corporate events, birthday parties, and special occasions',
    price: '₹20,000 - ₹60,000',
    image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzcyMzE2NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Drone Photography',
    description: 'Stunning aerial shots and unique perspectives',
    price: '₹15,000 - ₹40,000',
    image: 'https://images.unsplash.com/photo-1732971857118-2a4d3ec32044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHBob3RvZ3JhcGh5JTIwYWVyaWFsJTIwZXZlbnR8ZW58MXx8fHwxNzcyNzA0ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Cinematic Video Coverage',
    description: 'Professional video editing with cinematic storytelling',
    price: '₹60,000 - ₹2,00,000',
    image: 'https://images.unsplash.com/photo-1738851952441-2a7d17487545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlb2dyYXBoeSUyMHdlZGRpbmclMjBjYW1lcmF8ZW58MXx8fHwxNzcyNzA0ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function PhotographyPage() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    budget: '',
    location: '',
    eventDate: '',
    eventType: ''
  });

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
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
            Capture Your Special Moments
          </h1>
          <p className="text-white/90 max-w-3xl">
            Professional photography and videography services to preserve your precious memories. Our expert team captures every emotion and detail of your special day.
          </p>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-8" style={{ fontFamily: 'serif' }}>
          Photography Packages
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

        {/* Services */}
        <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-8" style={{ fontFamily: 'serif' }}>
          Photography Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg mb-1" style={{ fontFamily: 'serif' }}>
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <p className="text-sm text-[#6B2C2C] font-medium mb-4">
                  {service.price}
                </p>
                <button
                  onClick={() => handleSelectService(service.name)}
                  className="w-full px-4 py-2 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors"
                >
                  Book Photographer
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
              Check Photographer Availability - {selectedService}
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
                  placeholder="₹50,000"
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
                <label className="block text-sm font-medium mb-1">Event Type</label>
                <input
                  type="text"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]"
                  placeholder="Wedding, Birthday, etc."
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
                  Check Availability
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
