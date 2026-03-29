import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, TrendingDown, Award, Star, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Navbar } from './Navbar';

interface EventData {
  formData: {
    eventType: string;
    budget: string;
    guestCount: string;
    location: string;
    eventDate: string;
  };
  priorities: {
    costMinimization: number;
    qualityMaximization: number;
    reliability: number;
  };
}

export function Results() {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState<EventData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('eventData');
    if (stored) {
      setEventData(JSON.parse(stored));
    }
  }, []);

  // Mock optimization results
  const budget = eventData ? parseInt(eventData.formData.budget) : 500000;
  const optimizedCost = Math.floor(budget * 0.82); // 18% savings
  const savingsPercent = Math.floor(((budget - optimizedCost) / budget) * 100);
  const fitnessScore = 87;

  // Bar Chart Data - Cost vs Budget
  const costData = [
    {
      name: 'Original Budget',
      amount: budget,
      fill: '#6B2C2C',
    },
    {
      name: 'Optimized Cost',
      amount: optimizedCost,
      fill: '#8B3C3C',
    },
  ];

  // Donut Chart Data - Vendor Distribution
  const vendorDistribution = [
    { name: 'Venue', value: 35, color: '#6B2C2C' },
    { name: 'Catering', value: 25, color: '#8B3C3C' },
    { name: 'Decoration', value: 20, color: '#AB5C5C' },
    { name: 'Photography', value: 12, color: '#CB7C7C' },
    { name: 'Entertainment', value: 8, color: '#EB9C9C' },
  ];

  // Mock Vendor Data
  const vendors = [
    {
      category: 'Venue',
      name: 'Royal Orchid Gardens',
      rating: 4.8,
      price: Math.floor(optimizedCost * 0.35),
    },
    {
      category: 'Catering',
      name: 'Spice Symphony',
      rating: 4.7,
      price: Math.floor(optimizedCost * 0.25),
    },
    {
      category: 'Decoration',
      name: 'Elegant Decor Studio',
      rating: 4.9,
      price: Math.floor(optimizedCost * 0.20),
    },
    {
      category: 'Photography',
      name: 'Moments Photography',
      rating: 4.8,
      price: Math.floor(optimizedCost * 0.12),
    },
    {
      category: 'Entertainment',
      name: 'Harmony Music Band',
      rating: 4.6,
      price: Math.floor(optimizedCost * 0.08),
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#F5F1E8] pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/plan-event')}
            className="flex items-center gap-2 text-[#6B2C2C] hover:text-[#5A2424] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Plan Event</span>
          </button>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl text-center text-[#6B2C2C] mb-12" style={{ fontFamily: 'serif' }}>
            Optimization Results
          </h1>

          {/* KPI Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Total Optimized Cost */}
            <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-[#6B2C2C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-[#6B2C2C]" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Total Optimized Cost</p>
              <p className="text-3xl text-[#6B2C2C]" style={{ fontFamily: 'serif' }}>
                ₹{optimizedCost.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Budget Savings */}
            <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Budget Savings</p>
              <p className="text-3xl text-green-600" style={{ fontFamily: 'serif' }}>
                {savingsPercent}%
              </p>
            </div>

            {/* Fitness Score */}
            <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Fitness Score</p>
              <p className="text-3xl text-amber-600" style={{ fontFamily: 'serif' }}>
                {fitnessScore}/100
              </p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bar Chart - Cost vs Budget */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-xl text-[#6B2C2C] mb-6" style={{ fontFamily: 'serif' }}>
                Cost vs Budget
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
                  />
                  <Bar dataKey="amount" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Donut Chart - Vendor Distribution */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-xl text-[#6B2C2C] mb-6" style={{ fontFamily: 'serif' }}>
                Vendor Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={vendorDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {vendorDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    iconType="circle"
                    formatter={(value, entry: any) => `${value} (${entry.payload.value}%)`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Selected Vendors */}
          <div>
            <h2 className="text-2xl text-[#6B2C2C] mb-6" style={{ fontFamily: 'serif' }}>
              Selected Vendors
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vendors.map((vendor, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold text-[#6B2C2C] bg-[#6B2C2C]/10 px-3 py-1 rounded-full">
                      {vendor.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-semibold">{vendor.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
                    {vendor.name}
                  </h3>
                  <p className="text-2xl text-[#6B2C2C]" style={{ fontFamily: 'serif' }}>
                    ₹{vendor.price.toLocaleString('en-IN')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}