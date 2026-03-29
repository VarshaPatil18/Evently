import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portfolioItems = [
  {
    title: 'Baby Shower',
    categoryId: 'baby-shower',
    description: 'Creating joyful baby shower celebrations with elegant themes, thoughtful décor, and seamless arrangements.',
    image: 'https://images.unsplash.com/photo-1768776182359-75ecacc8735d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZGVjb3JhdGlvbiUyMGJhbGxvb25zfGVufDF8fHx8MTc3MjMzOTMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Birthdays & Anniversaries',
    categoryId: 'birthdays-anniversaries',
    description: 'Bringing your special day to life with unique themes, vibrant décor, and unforgettable celebrations.',
    image: 'https://images.unsplash.com/photo-1721804812395-12c7c963ca52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzIyNTU1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Dhoti/ Half Saree Function',
    categoryId: 'dhoti-half-saree',
    description: 'Celebrating traditions with graceful themes, cultural décor, and seamless arrangements for milestone ceremonies.',
    image: 'https://images.unsplash.com/photo-1759816660075-31cf3d61c9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGNlbGVicmF0aW9uJTIwZGhvdGl8ZW58MXx8fHwxNzcyMzM5MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Engagement',
    categoryId: 'engagement',
    description: 'Designing elegant engagement celebrations with personalized themes, and seamless coordination for a memorable beginning',
    image: 'https://images.unsplash.com/photo-1770823916285-f918f2107a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY2VsZWJyYXRpb24lMjBjb3VwbGUlMjByaW5nc3xlbnwxfHx8fDE3NzIzMzkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Haldi',
    categoryId: 'haldi',
    description: 'Bright and joyful haldi celebrations with vibrant decor, fun rituals, and seamless coordination.',
    image: 'https://images.unsplash.com/photo-1771992227105-66eb3c053593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGNlcmVtb255JTIwdHVybWVyaWMlMjB5ZWxsb3clMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc3MjI4NDY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Mehandi',
    categoryId: 'mehendi',
    description: 'Colourful and festive mehendi celebrations with creative themes, lively décor, and flawless arrangements.',
    image: 'https://images.unsplash.com/photo-1674884060571-96a46a9a7a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhhbmRpJTIwaGVubmElMjBkZWNvcmF0aW9uJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIzMzkzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Sangeeth & Cocktail',
    categoryId: 'sangeeth-cocktail',
    description: 'High-energy sangeet nights with dazzling themes, entertainment, and seamless coordination for a musical celebration.',
    image: 'https://images.unsplash.com/photo-1567724066312-8dd87bca051e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMHBhcnR5JTIwc2FuZ2VldCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIzMzkzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Wedding',
    categoryId: 'wedding',
    description: 'From décor to rituals, we design and execute weddings with elegance, precision, and unforgettable experiences',
    image: 'https://images.unsplash.com/photo-1769812343915-8af28af437fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMHdlZGRpbmclMjBjZXJlbW9ueSUyMHN0YWdlfGVufDF8fHx8MTc3MjMzOTMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Portfolio() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl text-[#2C2C2C] mb-12" style={{ fontFamily: 'serif' }}>
          Our Portfolio - Event Organizers In Hyderabad & Corporate Event Organisers In Hyderabad
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/gallery/${item.categoryId}`)}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/5]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Gallery</span>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors inline-flex items-center gap-2">
            Request Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
