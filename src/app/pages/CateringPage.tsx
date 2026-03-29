import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';

const packages = [
  {
    name: 'Basic Catering',
    description: 'Simple buffet, vegetarian menu',
    price: '₹400–₹600 per plate',
    features: ['Vegetarian menu', 'Basic buffet setup', '3-4 main courses', 'Rice and bread', 'Simple dessert', 'Mineral water']
  },
  {
    name: 'Premium Catering',
    description: 'Multi-cuisine buffet, veg and non-veg options, live counters',
    price: '₹700–₹1200 per plate',
    features: ['Multi-cuisine options', 'Veg & non-veg menu', 'Live counters', '5-6 main courses', 'Dessert station', 'Welcome drinks', 'Premium service']
  },
  {
    name: 'Luxury Catering',
    description: 'Premium chefs, dessert stations, customized menu',
    price: '₹1500+ per plate',
    features: ['Celebrity chefs', 'Customized menu', 'Live cooking stations', 'International cuisine', 'Gourmet desserts', 'Premium beverages', 'White glove service']
  }
];

const menus = [
  {
    name: 'Classic Indian Vegetarian',
    cuisine: 'North & South Indian',
    price: '₹500 per plate',
    image: 'https://images.unsplash.com/photo-1751651054926-36ea440bb06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWZmZXQlMjBjYXRlcmluZyUyMHNwcmVhZCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyNzA0ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Royal Mughlai Feast',
    cuisine: 'Mughlai & Tandoor',
    price: '₹850 per plate',
    image: 'https://images.unsplash.com/photo-1682692597786-1ce3853e5cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwZm9vZCUyMGNvdW50ZXIlMjBjYXRlcmluZ3xlbnwxfHx8fDE3NzI3MDQ4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Continental Fusion',
    cuisine: 'Italian & Continental',
    price: '₹1200 per plate',
    image: 'https://images.unsplash.com/photo-1563459003214-9ee1cf71dab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwc3RhdGlvbiUyMGNhdGVyaW5nJTIwc3dlZXR8ZW58MXx8fHwxNzcyNzA0ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function CateringPage() {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    budget: '',
    location: '',
    eventDate: '',
    guests: '',
    foodPreference: 'Veg'
  });

  const handleSelectMenu = (menuName: string) => {
    setSelectedMenu(menuName);
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
            Catering Services for Your Event
          </h1>
          <p className="text-white/90 max-w-3xl">
            Delight your guests with exceptional culinary experiences. From traditional Indian to international cuisines, we offer customized menus for every occasion.
          </p>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-8" style={{ fontFamily: 'serif' }}>
          Catering Packages
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
              <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
              <p className="text-[#6B2C2C] font-medium mb-4">{pkg.price}</p>
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

        {/* Menus */}
        <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-8" style={{ fontFamily: 'serif' }}>
          Popular Menu Options
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg mb-1" style={{ fontFamily: 'serif' }}>
                  {menu.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{menu.cuisine}</p>
                <p className="text-sm text-[#6B2C2C] font-medium mb-4">
                  {menu.price}
                </p>
                <button
                  onClick={() => handleSelectMenu(menu.name)}
                  className="w-full px-4 py-2 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors"
                >
                  Select Menu
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
              Check Catering Availability - {selectedMenu}
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
              <div>
                <label className="block text-sm font-medium mb-1">Food Preference</label>
                <select
                  required
                  value={formData.foodPreference}
                  onChange={(e) => setFormData({ ...formData, foodPreference: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]"
                >
                  <option value="Veg">Vegetarian</option>
                  <option value="Non-Veg">Non-Vegetarian</option>
                  <option value="Both">Both</option>
                </select>
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
