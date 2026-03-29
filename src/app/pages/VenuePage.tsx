import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';

const packages = [
  {
    name: 'Basic Venue Package',
    description: 'Small banquet halls, community halls',
    capacity: '50–100 guests',
    budget: '₹20K–₹50K',
    features: ['Basic amenities', 'Standard seating', 'Parking available', 'Air conditioning']
  },
  {
    name: 'Premium Venue Package',
    description: 'Premium banquet halls, garden venues, boutique hotels',
    capacity: '100–300 guests',
    budget: '₹50K–₹1.5L',
    features: ['Premium amenities', 'Elegant interiors', 'Valet parking', 'Catering facilities', 'Sound system']
  },
  {
    name: 'Luxury Venue Package',
    description: 'Luxury hotels, resorts, destination venues',
    capacity: '300+ guests',
    budget: '₹1.5L+',
    features: ['5-star facilities', 'Designer interiors', 'Full event services', 'Multiple halls', 'Accommodation']
  }
];

const venues = [
  {
    name: 'Grand Sapphire Banquet Hall',
    location: 'Banjara Hills, Hyderabad',
    capacity: '200-250 guests',
    price: '₹75,000 - ₹1,00,000',
    image: 'https://images.unsplash.com/photo-1761110787206-2cc164e4913c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYW5xdWV0JTIwaGFsbCUyMHdlZGRpbmclMjB2ZW51ZXxlbnwxfHx8fDE3NzI3MDQ4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'The Garden Paradise',
    location: 'Jubilee Hills, Hyderabad',
    capacity: '150-200 guests',
    price: '₹60,000 - ₹90,000',
    image: 'https://images.unsplash.com/photo-1769812343890-4e406a33cfbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjB2ZW51ZSUyMG91dGRvb3IlMjB3ZWRkaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI3MDQ4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Royal Boutique Hotel',
    location: 'Gachibowli, Hyderabad',
    capacity: '100-150 guests',
    price: '₹50,000 - ₹80,000',
    image: 'https://images.unsplash.com/photo-1643178141336-3795af26af9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwd2VkZGluZyUyMHZlbnVlfGVufDF8fHx8MTc3MjcwNDg4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Ocean View Resort',
    location: 'Shamirpet, Hyderabad',
    capacity: '300+ guests',
    price: '₹1,50,000 - ₹2,50,000',
    image: 'https://images.unsplash.com/photo-1768777278961-df45d3c2aa22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjB2ZW51ZXxlbnwxfHx8fDE3NzI3MDQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function VenuePage() {
  const navigate = useNavigate();
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    budget: '',
    location: '',
    eventDate: '',
    guests: ''
  });

  const handleSelectVenue = (venueName: string) => {
    setSelectedVenue(venueName);
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
            Find the Perfect Venue for Your Event
          </h1>
          <p className="text-white/90 max-w-3xl">
            Explore venue options based on your guest count and budget. From intimate gatherings to grand celebrations, we have the perfect space for you.
          </p>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-8" style={{ fontFamily: 'serif' }}>
          Choose Your Package
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
              <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
              <div className="space-y-2 mb-4">
                <p className="text-sm"><span className="font-medium">Capacity:</span> {pkg.capacity}</p>
                <p className="text-sm"><span className="font-medium">Budget:</span> {pkg.budget}</p>
              </div>
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

        {/* Venues */}
        <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-8" style={{ fontFamily: 'serif' }}>
          Featured Venues
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg mb-1" style={{ fontFamily: 'serif' }}>
                  {venue.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{venue.location}</p>
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-medium">Capacity:</span> {venue.capacity}
                </p>
                <p className="text-sm text-[#6B2C2C] font-medium mb-4">
                  {venue.price}
                </p>
                <button
                  onClick={() => handleSelectVenue(venue.name)}
                  className="w-full px-4 py-2 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors"
                >
                  Select Venue
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
              Check Availability - {selectedVenue}
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
                <label className="block text-sm font-medium mb-1">Number of Guests</label>
                <input
                  type="number"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]"
                  placeholder="150"
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
