import { Users, Sparkles, Lightbulb, FileCheck, Gift, Truck, PartyPopper } from 'lucide-react';

const steps = [
  {
    left: 'Planner Consultation',
    right: 'Clear Discussion with Planner & RM',
    icon: Users
  },
  {
    left: 'Explore stunning designs & transparent pricing',
    right: 'Discover Options',
    icon: Sparkles
  },
  {
    left: 'Event Vision & Design',
    right: 'Custom plan shared',
    icon: Lightbulb
  },
  {
    left: 'It can be Bookings / Coordinations',
    right: 'Venue Recommendations',
    icon: FileCheck
  },
  {
    left: 'Get Custom Package',
    right: 'With options tailored to your needs',
    icon: Gift
  },
  {
    left: 'Proposal Delivery',
    right: 'Custom plan shared',
    icon: Truck
  },
  {
    left: 'Let us take care of your celebrations',
    right: 'Relax',
    icon: PartyPopper
  }
];

export function HowWeWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl text-[#2C2C2C] mb-16 text-center" style={{ fontFamily: 'serif' }}>
          How we Work - Wedding Organisers In Hyderabad or Wedding Planners Near You?
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#6B2C2C]/20 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left side */}
                    <div className={`${isEven ? 'md:text-right' : 'md:order-2'}`}>
                      <p className="text-[#4A4A4A] italic">
                        {isEven ? step.left : step.right}
                      </p>
                    </div>

                    {/* Center icon */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                      <div className="w-12 h-12 bg-white border-2 border-[#6B2C2C] rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#6B2C2C]" />
                      </div>
                    </div>

                    {/* Right side */}
                    <div className={`${isEven ? '' : 'md:order-1 md:text-right'}`}>
                      <div className="flex items-center gap-3 md:hidden mb-2">
                        <div className="w-10 h-10 bg-[#6B2C2C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#6B2C2C]" />
                        </div>
                        <p className="text-[#2C2C2C]">{isEven ? step.right : step.left}</p>
                      </div>
                      <p className="hidden md:block text-[#2C2C2C]">
                        {isEven ? step.right : step.left}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
