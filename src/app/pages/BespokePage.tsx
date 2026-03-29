import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';

const eventTypes = [
  {
    name: 'Wedding Planning',
    description: 'Complete wedding planning from engagement to reception',
    image: 'https://images.unsplash.com/photo-1769812343915-8af28af437fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMHdlZGRpbmclMjBjZXJlbW9ueSUyMHN0YWdlfGVufDF8fHx8MTc3MjMzOTMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Venue selection', 'Decor planning', 'Vendor coordination', 'Timeline management']
  },
  {
    name: 'Birthday Party Planning',
    description: 'Memorable birthday celebrations for all ages',
    image: 'https://images.unsplash.com/photo-1721804812395-12c7c963ca52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzIyNTU1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Theme selection', 'Entertainment booking', 'Catering arrangement', 'Party favors']
  },
  {
    name: 'Corporate Events',
    description: 'Professional corporate event management',
    image: 'https://images.unsplash.com/photo-1712903276004-ea6b4a916abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBldmVudCUyMHBsYW5uaW5nJTIwY2xpcGJvYXJkfGVufDF8fHx8MTc3MjcwNDg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Event strategy', 'Venue booking', 'AV setup', 'Registration management']
  },
  {
    name: 'Engagement / Anniversary Events',
    description: 'Romantic celebrations for special milestones',
    image: 'https://images.unsplash.com/photo-1770823916285-f918f2107a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY2VsZWJyYXRpb24lMjBjb3VwbGUlMjByaW5nc3xlbnwxfHx8fDE3NzIzMzkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Intimate venue selection', 'Romantic decor', 'Personalized touches', 'Photography coordination']
  }
];

export function BespokePage() {
  const navigate = useNavigate();
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    eventType: '',
    budget: '',
    location: '',
    eventDate: '',
    guests: '',
    specialRequirements: ''
  });

  const handleSelectEvent = (eventType: string) => {
    setSelectedEventType(eventType);
    setFormData({ ...formData, eventType });
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
            Custom Event Planning
          </h1>
          <p className="text-white/90 max-w-3xl">
            Tell us about your dream event and our planners will design a customized event plan. We handle every detail from concept to execution, ensuring your vision comes to life perfectly.
          </p>
        </div>
      </div>

      {/* Event Types */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-8 text-center" style={{ fontFamily: 'serif' }}>
          Choose Your Event Type
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => handleSelectEvent(event.name)}
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-[#6B2C2C]" style={{ fontFamily: 'serif' }}>
                  {event.name}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <ul className="space-y-2 mb-4">
                  {event.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-[#6B2C2C] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors">
                  Plan This Event
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Bespoke */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl md:text-3xl text-[#2C2C2C] mb-6 text-center" style={{ fontFamily: 'serif' }}>
            Why Choose Bespoke Planning?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-[#6B2C2C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-[#6B2C2C]" />
              </div>
              <h3 className="text-lg mb-2" style={{ fontFamily: 'serif' }}>Fully Customized</h3>
              <p className="text-sm text-gray-600">Every detail tailored to your preferences and vision</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#6B2C2C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-[#6B2C2C]" />
              </div>
              <h3 className="text-lg mb-2" style={{ fontFamily: 'serif' }}>Expert Coordination</h3>
              <p className="text-sm text-gray-600">Dedicated event manager from start to finish</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#6B2C2C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-[#6B2C2C]" />
              </div>
              <h3 className="text-lg mb-2" style={{ fontFamily: 'serif' }}>Stress-Free Planning</h3>
              <p className="text-sm text-gray-600">We handle all logistics while you enjoy the moment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full my-8"
          >
            <h3 className="text-2xl mb-4 text-[#6B2C2C]" style={{ fontFamily: 'serif' }}>
              Request Custom Event Plan
            </h3>
            <p className="text-sm text-gray-600 mb-4">Tell us about your {selectedEventType}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Event Type</label>
                <input
                  type="text"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C] bg-gray-50"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Budget</label>
                <input
                  type="text"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]"
                  placeholder="₹1,00,000"
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
                <label className="block text-sm font-medium mb-1">Special Requirements</label>
                <textarea
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6B2C2C] resize-none"
                  rows={3}
                  placeholder="Any specific themes, preferences, or requirements..."
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
                  Submit Request
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
