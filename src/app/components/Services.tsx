import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: 'Venue Suggestions',
    path: '/services/venue',
    image: 'https://images.unsplash.com/photo-1761120789207-c08a10afb864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlJTIwaGFsbHxlbnwxfHx8fDE3NzIyNjcxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Decor',
    path: '/services/decor',
    image: 'https://images.unsplash.com/photo-1771179232076-59757d7a3ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3IlMjBmbG93ZXJzJTIwYXJyYW5nZW1lbnR8ZW58MXx8fHwxNzcyMzM5MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Catering',
    path: '/services/catering',
    image: 'https://images.unsplash.com/photo-1763553113344-b6a32fcd9ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBzcHJlYWQlMjBldmVudHxlbnwxfHx8fDE3NzIzMzkzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Photography',
    path: '/services/photography',
    image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzcyMzE2NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Bespoke',
    path: '/services/bespoke',
    image: 'https://images.unsplash.com/photo-1591944489410-16ec1074a18e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXNwb2tlJTIwdGFpbG9yaW5nJTIwc3VpdCUyMGRldGFpbHxlbnwxfHx8fDE3NzIzMzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl text-[#2C2C2C] mb-12 text-center" style={{ fontFamily: 'serif' }}>
          Our Services - Event Planners In Hyderabad
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.path)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-3">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-[#2C2C2C] underline hover:no-underline" style={{ fontFamily: 'serif' }}>
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
