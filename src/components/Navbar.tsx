import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/rajresort.webp" alt="Raj Resort Kelva Beach Official Logo" className="h-10 w-auto object-contain" width={160} height={40} />

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-ocean ${location.pathname === link.path ? 'text-ocean border-b-2 border-ocean' : 'text-charcoal'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919890165286"
              className="bg-ocean text-white px-5 py-2 rounded-full font-medium hover:bg-ocean/90 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal hover:text-ocean"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path
                  ? 'bg-sandy/30 text-ocean'
                  : 'text-charcoal hover:bg-gray-50 hover:text-ocean'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 px-3">
              <a
                href="tel:+919890165286"
                className="w-full bg-ocean text-white px-5 py-3 rounded-md font-medium hover:bg-ocean/90 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                +91 9890165286
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
