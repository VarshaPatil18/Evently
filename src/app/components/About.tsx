import { Building2, Castle, Landmark, Church } from 'lucide-react';

const locations = [
  { name: 'Hyderabad', icon: Building2, readMore: true },
  { name: 'Bangalore', icon: Castle, readMore: true },
  { name: 'Visakhapatnam', icon: Landmark, readMore: true },
  { name: 'Vijayawada', icon: Church, readMore: true },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl text-[#2C2C2C] mb-6" style={{ fontFamily: 'serif' }}>
              Wedding Planners In Hyderabad
            </h2>
            <div className="space-y-4 text-[#4A4A4A]">
              <p>
                With over a decade of excellence, <strong>Evently Events</strong> has become one of the{' '}
                <strong>best event management companies in Hyderabad</strong>, trusted by hundreds of families
                and brands for delivering memorable experiences.
              </p>
              <p>
                We handle <strong>corporate, social, cultural, and private events</strong> with the same
                dedication — ensuring every event reflects the vision and personality of our clients.
              </p>
              <p>
                Our expert team includes top <strong>wedding planners, birthday organisers, and corporate
                event managers in Hyderabad</strong> who work closely with clients to design, plan, and
                execute events that create lasting impressions.
              </p>
            </div>
            <button className="mt-6 px-8 py-3 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors">
              Read More
            </button>
          </div>

          {/* Right Column - Location Cards */}
          <div className="grid grid-cols-2 gap-6">
            {locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-[#6B2C2C]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg mb-2 text-[#2C2C2C]" style={{ fontFamily: 'serif' }}>
                    {location.name}
                  </h3>
                  {location.readMore && (
                    <button className="text-sm text-[#6B2C2C] underline hover:no-underline">
                      Read More
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}