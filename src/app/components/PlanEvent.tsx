import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Calendar, DollarSign, Users, MapPin, Sparkles, ChevronDown, ChevronUp, Leaf } from 'lucide-react';
import { Navbar } from './Navbar';

export function PlanEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventType: '',
    budget: '',
    guestCount: '',
    location: '',
    eventDate: '',
  });

  const [priorities, setPriorities] = useState({
    costMinimization: 50,
    qualityMaximization: 50,
    reliability: 50,
  });

  const [errors, setErrors] = useState({
    budget: '',
    guestCount: '',
  });

  // Smart Food Management State
  const [foodManagement, setFoodManagement] = useState({
    enabled: false,
    wasteReduction: 'balanced', // 'low' | 'balanced' | 'maximum'
    donateFood: false,
    selectedNGO: '',
  });

  const [isFoodSectionExpanded, setIsFoodSectionExpanded] = useState(false);

  // Calculate food estimates based on guest count
  const calculateFoodEstimates = () => {
    const guestCount = parseInt(formData.guestCount) || 0;
    if (guestCount === 0) return { plates: 0, waste: 0, saved: 0, wastePercent: 0, peopleFed: 0 };

    // Waste factor based on reduction level
    let wasteFactor = 0.10; // Default: balanced
    
    if (foodManagement.wasteReduction === 'low') {
      wasteFactor = 0.20;
    } else if (foodManagement.wasteReduction === 'balanced') {
      wasteFactor = 0.10;
    } else if (foodManagement.wasteReduction === 'maximum') {
      wasteFactor = 0.05;
    }

    // Calculate estimated food and waste
    const estimatedPlates = Math.round(guestCount * (1 + wasteFactor));
    const expectedWaste = estimatedPlates - guestCount;
    
    // Default waste (baseline: 20% buffer)
    const defaultWaste = Math.round(guestCount * 0.20);
    
    // Calculate savings
    const wasteSaved = defaultWaste - expectedWaste;
    const moneySaved = Math.max(0, wasteSaved * 300);
    
    // Waste reduction percentage
    const wastePercent = defaultWaste > 0 ? Math.round((wasteSaved / defaultWaste) * 100) : 0;
    
    // People that can be fed (only if donation is enabled)
    const peopleFed = foodManagement.donateFood ? Math.max(0, expectedWaste) : 0;

    return {
      plates: estimatedPlates,
      waste: expectedWaste,
      saved: moneySaved,
      wastePercent: Math.max(0, wastePercent),
      peopleFed,
    };
  };

  const foodEstimates = calculateFoodEstimates();

  const getWasteReductionText = () => {
    switch (foodManagement.wasteReduction) {
      case 'low':
        return 'Standard buffer';
      case 'balanced':
        return 'Optimized planning';
      case 'maximum':
        return 'Minimal waste';
      default:
        return '';
    }
  };

  // Validation functions
  const validateBudget = (value: string) => {
    if (!value) return '';
    const numValue = parseFloat(value);
    if (numValue <= 0) return 'Budget must be greater than ₹0';
    if (numValue < 1000) return 'Minimum budget is ₹1,000';
    if (numValue > 10000000) return 'Maximum budget is ₹1,00,00,000';
    return '';
  };

  const validateGuestCount = (value: string) => {
    if (!value) return '';
    const numValue = parseInt(value);
    if (numValue <= 0) return 'Guest count must be at least 1';
    if (numValue > 5000) return 'Maximum guest count is 5,000';
    return '';
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty or numeric values only
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setFormData({ ...formData, budget: value });
      setErrors({ ...errors, budget: validateBudget(value) });
    }
  };

  const handleGuestCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty or whole numbers only
    if (value === '' || /^\d+$/.test(value)) {
      setFormData({ ...formData, guestCount: value });
      setErrors({ ...errors, guestCount: validateGuestCount(value) });
    }
  };

  const isFormValid = () => {
    return (
      formData.eventType &&
      formData.budget &&
      formData.guestCount &&
      formData.location &&
      formData.eventDate &&
      !errors.budget &&
      !errors.guestCount
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check
    const budgetError = validateBudget(formData.budget);
    const guestError = validateGuestCount(formData.guestCount);
    
    if (budgetError || guestError) {
      setErrors({ budget: budgetError, guestCount: guestError });
      return;
    }
    
    // Store form data in sessionStorage for the results page
    sessionStorage.setItem('eventData', JSON.stringify({ formData, priorities, foodManagement }));
    navigate('/results');
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#F5F1E8] pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl text-center text-[#6B2C2C] mb-12" style={{ fontFamily: 'serif' }}>
            Define Event Constraints
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Card - Event Details */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl text-[#6B2C2C] mb-6" style={{ fontFamily: 'serif' }}>
                  Event Details
                </h2>
                
                <div className="space-y-5">
                  {/* Event Type */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Event Type</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]/20 bg-white"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="baby-shower">Baby Shower</option>
                      <option value="traditional">Traditional Ceremony</option>
                    </select>
                  </div>

                  {/* Total Budget */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Total Budget (₹)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.budget}
                        onChange={handleBudgetChange}
                        onBlur={() => setErrors({ ...errors, budget: validateBudget(formData.budget) })}
                        required
                        min="1000"
                        max="10000000"
                        step="1000"
                        placeholder="e.g., 500000"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
                          errors.budget 
                            ? 'border-red-500 focus:ring-red-500/20' 
                            : 'border-gray-200 focus:ring-[#6B2C2C]/20'
                        }`}
                      />
                    </div>
                    {errors.budget && (
                      <p className="text-red-500 text-xs mt-1">{errors.budget}</p>
                    )}
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Guest Count</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.guestCount}
                        onChange={handleGuestCountChange}
                        onBlur={() => setErrors({ ...errors, guestCount: validateGuestCount(formData.guestCount) })}
                        required
                        min="1"
                        max="5000"
                        step="1"
                        placeholder="e.g., 200"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
                          errors.guestCount 
                            ? 'border-red-500 focus:ring-red-500/20' 
                            : 'border-gray-200 focus:ring-[#6B2C2C]/20'
                        }`}
                      />
                    </div>
                    {errors.guestCount && (
                      <p className="text-red-500 text-xs mt-1">{errors.guestCount}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                        placeholder="e.g., Hyderabad, Telangana"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]/20"
                      />
                    </div>
                  </div>

                  {/* Event Date */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Event Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]/20"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card - AI Optimization Priorities */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl text-[#6B2C2C] mb-6" style={{ fontFamily: 'serif' }}>
                  AI Optimization Priorities
                </h2>
                
                <div className="space-y-8">
                  {/* Cost Minimization */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm text-gray-700">Cost Minimization</label>
                      <span className="text-lg font-semibold text-[#6B2C2C]">{priorities.costMinimization}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priorities.costMinimization}
                      onChange={(e) => setPriorities({ ...priorities, costMinimization: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6B2C2C]"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Prioritize finding the most cost-effective vendors and solutions
                    </p>
                  </div>

                  {/* Quality Maximization */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm text-gray-700">Quality Maximization</label>
                      <span className="text-lg font-semibold text-[#6B2C2C]">{priorities.qualityMaximization}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priorities.qualityMaximization}
                      onChange={(e) => setPriorities({ ...priorities, qualityMaximization: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6B2C2C]"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Focus on premium vendors with highest ratings and reviews
                    </p>
                  </div>

                  {/* Reliability / Low Risk */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm text-gray-700">Reliability / Low Risk</label>
                      <span className="text-lg font-semibold text-[#6B2C2C]">{priorities.reliability}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priorities.reliability}
                      onChange={(e) => setPriorities({ ...priorities, reliability: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6B2C2C]"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Select proven vendors with consistent track records
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Food Management Section */}
            <div className="mb-12">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                {/* Header with Toggle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Leaf className="w-6 h-6 text-[#6B2C2C]" />
                    <h2 className="text-2xl text-[#6B2C2C]" style={{ fontFamily: 'serif' }}>
                      Smart Food Management
                    </h2>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <span className="text-sm text-gray-700">Enable</span>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={foodManagement.enabled}
                          onChange={(e) => {
                            const enabled = e.target.checked;
                            setFoodManagement({ ...foodManagement, enabled });
                            setIsFoodSectionExpanded(enabled);
                          }}
                          className="sr-only"
                        />
                        <div className={`w-14 h-7 rounded-full transition-colors ${
                          foodManagement.enabled ? 'bg-[#6B2C2C]' : 'bg-gray-300'
                        }`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 mt-1 ${
                            foodManagement.enabled ? 'translate-x-8' : 'translate-x-1'
                          }`} />
                        </div>
                      </div>
                    </label>
                    
                    <button
                      type="button"
                      onClick={() => setIsFoodSectionExpanded(!isFoodSectionExpanded)}
                      className="text-[#6B2C2C] hover:text-[#5A2424] transition-colors"
                    >
                      {isFoodSectionExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Collapsible Content */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isFoodSectionExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {foodManagement.enabled && (
                    <div className="space-y-6 pt-4 border-t border-gray-100">
                      {/* Auto Food Estimation */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[#F5F1E8] rounded-xl p-4">
                          <p className="text-sm text-gray-600 mb-1">Estimated Food</p>
                          <p className="text-2xl font-semibold text-[#6B2C2C]">
                            {foodEstimates.plates} plates
                          </p>
                        </div>
                        <div className="bg-[#F5F1E8] rounded-xl p-4">
                          <p className="text-sm text-gray-600 mb-1">Expected Waste</p>
                          <p className="text-2xl font-semibold text-[#6B2C2C]">
                            {foodEstimates.waste} plates
                          </p>
                        </div>
                      </div>

                      {/* Waste Control Slider */}
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <label className="text-sm text-gray-700">Waste Reduction Level</label>
                          <span className="text-sm font-semibold text-[#6B2C2C] capitalize">
                            {foodManagement.wasteReduction}
                          </span>
                        </div>
                        <div className="relative">
                          <input
                            type="range"
                            min="0"
                            max="2"
                            step="1"
                            value={
                              foodManagement.wasteReduction === 'low' ? 0 :
                              foodManagement.wasteReduction === 'balanced' ? 1 : 2
                            }
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              const level = value === 0 ? 'low' : value === 1 ? 'balanced' : 'maximum';
                              setFoodManagement({ ...foodManagement, wasteReduction: level });
                            }}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6B2C2C]"
                          />
                          <div className="flex justify-between mt-2">
                            <span className="text-xs text-gray-500">Low</span>
                            <span className="text-xs text-gray-500">Balanced</span>
                            <span className="text-xs text-gray-500">Maximum</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          {getWasteReductionText()}
                        </p>
                      </div>

                      {/* Donation Option */}
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={foodManagement.donateFood}
                            onChange={(e) => setFoodManagement({ ...foodManagement, donateFood: e.target.checked })}
                            className="w-5 h-5 rounded border-gray-300 text-[#6B2C2C] focus:ring-[#6B2C2C]/20"
                          />
                          <span className="text-sm text-gray-700">Donate extra food</span>
                        </label>

                        {foodManagement.donateFood && (
                          <div className="ml-8 space-y-2">
                            <select
                              value={foodManagement.selectedNGO}
                              onChange={(e) => setFoodManagement({ ...foodManagement, selectedNGO: e.target.value })}
                              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B2C2C]/20 bg-white text-sm"
                            >
                              <option value="">Select NGO</option>
                              <option value="feeding-india">Feeding India</option>
                              <option value="akshaya-patra">Akshaya Patra Foundation</option>
                              <option value="robin-hood-army">Robin Hood Army</option>
                              <option value="no-food-waste">No Food Waste</option>
                            </select>
                            <p className="text-xs text-gray-500">Pickup will be arranged</p>
                          </div>
                        )}
                      </div>

                      {/* Impact Info Box */}
                      <div className="bg-gradient-to-r from-[#6B2C2C]/5 to-[#8B3C3C]/5 rounded-xl p-5 border border-[#6B2C2C]/10">
                        <p className="text-sm font-semibold text-[#6B2C2C] mb-3">Your Impact</p>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">You save</p>
                            <p className="text-lg font-semibold text-[#6B2C2C]">
                              ₹{foodEstimates.saved.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Reduce waste by</p>
                            <p className="text-lg font-semibold text-[#6B2C2C]">
                              {foodEstimates.wastePercent}%
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Help feed</p>
                            <p className="text-lg font-semibold text-[#6B2C2C]">
                              {foodEstimates.peopleFed} people
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`px-12 py-4 bg-gradient-to-r from-[#6B2C2C] to-[#8B3C3C] text-white rounded-full hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-3 mx-auto ${
                  !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Sparkles className="w-5 h-5" />
                Run Smart Optimization
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}