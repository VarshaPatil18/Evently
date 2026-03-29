import { Link } from 'react-router';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-[#F5F1E8] rounded-full px-8 py-4 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4L12 12L4 16L12 20L16 28L20 20L28 16L20 12L16 4Z" stroke="#6B2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="16" r="3" fill="#6B2C2C"/>
            </svg>
            <span className="text-xl text-[#6B2C2C]" style={{ fontFamily: 'serif' }}>Evently</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#home" className="text-sm text-[#4A4A4A] hover:text-[#6B2C2C] transition-colors">
              Home
            </a>
            <a href="/#about" className="text-sm text-[#4A4A4A] hover:text-[#6B2C2C] transition-colors">
              About US
            </a>
            <a href="/#services" className="text-sm text-[#4A4A4A] hover:text-[#6B2C2C] transition-colors">
              Our Services
            </a>
            <a href="/#portfolio" className="text-sm text-[#4A4A4A] hover:text-[#6B2C2C] transition-colors">
              Our Portfolio
            </a>
            <Link to="/plan-event" className="text-sm text-[#4A4A4A] hover:text-[#6B2C2C] transition-colors">
              Plan Event
            </Link>
            <Link to="/results" className="text-sm text-[#4A4A4A] hover:text-[#6B2C2C] transition-colors">
              Result
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}