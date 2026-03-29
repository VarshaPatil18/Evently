import { FileCheck, ThumbsUp, Rocket } from 'lucide-react';
import whyChooseImg from '../assets/079e99493a173965b7b8d3b53d4f93dfeef5c342.png';

const reasons = [
  {
    icon: FileCheck,
    title: 'Proven Expertise',
    description: 'We keep it real your vibe, your vision, your day. From planning to execution, every detail is tailored just for you. Expect flawless execution from a passionate team that treats your celebration like it\'s their own.',
    bgColor: 'bg-[#6B2C2C]'
  },
  {
    icon: ThumbsUp,
    title: 'Results Driven',
    description: 'We don\'t just plan events we create unforgettable experiences. Every detail is crafted to match your vision, needs, and personal style to perfection.',
    bgColor: 'bg-[#6B2C2C]'
  },
  {
    icon: Rocket,
    title: 'Success Stories',
    description: 'Our commitment to quality, creativity, and client satisfaction speaks through the impact we\'ve made. Real results. Happy clients. Memorable celebrations.',
    bgColor: 'bg-[#F5E6C3]'
  }
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E8D5E8] via-[#F5E6E8] to-[#F5F1E8] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-[#F5E6C3]/30 blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl text-[#2C2C2C] mb-12 text-center" style={{ fontFamily: 'serif' }}>
          Why Choose Evently Events?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={whyChooseImg}
                alt="Beautiful mandap decoration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Reasons */}
          <div className="order-1 md:order-2 space-y-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className={`${reason.bgColor} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${reason.bgColor === 'bg-[#F5E6C3]' ? 'text-[#6B2C2C]' : 'text-white'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#2C2C2C] mb-2" style={{ fontFamily: 'serif' }}>
                      {reason.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {reason.description}
                    </p>
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