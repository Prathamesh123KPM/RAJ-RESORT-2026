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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const whatsappUrl =
    'https://wa.me/919890165286?text=Hello%20Raj%20Resort%2C%20I%20would%20like%20to%20inquire%20about%20booking%20and%20rates.';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/rajresort.webp"
              alt="Raj Resort Kelva Beach Official Logo"
              className="h-10 w-auto object-contain"
              width={160}
              height={40}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-ocean ${
                  location.pathname === link.path ? 'text-ocean border-b-2 border-ocean pb-1' : 'text-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919890165286"
              className="bg-ocean text-white px-5 py-2.5 rounded-full font-medium hover:bg-ocean/90 transition-colors flex items-center gap-2 shadow-sm hover:shadow"
            >
              <Phone size={16} />
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button with 44px min tap target and accessibility */}
          <button
            type="button"
            className="md:hidden text-charcoal hover:text-ocean p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean/40 transition-colors"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Backdrop and Drawer */}
      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[60px] bg-black/40 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-2xl z-50 max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-ocean/10 text-ocean font-bold'
                      : 'text-charcoal hover:bg-gray-50 hover:text-ocean'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 px-1">
                <a
                  href="tel:+919890165286"
                  className="bg-ocean text-white px-3 py-3 rounded-xl font-medium hover:bg-ocean/90 transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <Phone size={16} />
                  Call Resort
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-3 py-3 rounded-xl font-medium hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.09 7.34 8.89 7.74C8.68 8.15 8.08 8.74 8.08 9.94C8.08 11.14 8.95 12.3 9.08 12.46C9.2 12.63 10.79 15.08 13.23 16.13C13.81 16.38 14.26 16.53 14.62 16.64C15.2 16.83 15.73 16.8 16.15 16.74C16.62 16.67 17.6 16.15 17.8 15.58C18.01 15 18.01 14.51 17.95 14.41C17.89 14.31 17.72 14.25 17.48 14.13C17.23 14.01 16.03 13.42 15.81 13.34C15.58 13.26 15.42 13.22 15.25 13.46C15.09 13.71 14.6 14.28 14.45 14.45C14.3 14.61 14.15 14.63 13.9 14.51C13.66 14.39 12.87 14.13 11.94 13.3C11.22 12.65 10.73 11.85 10.59 11.61C10.45 11.36 10.57 11.23 10.7 11.11C10.81 11 10.95 10.82 11.07 10.67C11.19 10.53 11.23 10.42 11.31 10.26C11.39 10.1 11.35 9.95 11.29 9.83C11.23 9.71 10.74 8.5 10.54 8C10.34 7.53 10.14 7.59 9.98 7.58C9.84 7.58 9.68 7.58 9.53 7.33Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
