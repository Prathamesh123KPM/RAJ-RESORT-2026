import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ArrowUp, Calendar, MapPin } from 'lucide-react';

export default function MobileActionDock() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl =
    'https://wa.me/919890165286?text=Hello%20Raj%20Resort%2C%20I%20would%20like%20to%20inquire%20about%20rooms%20and%20rates.';

  return (
    <>
      {/* Scroll to Top Floating Button (Visible on all devices when scrolled) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-20 md:bottom-8 right-4 md:right-6 z-40 bg-white/95 text-charcoal hover:text-ocean border border-gray-200/80 p-3 rounded-full shadow-lg hover:shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ocean/40"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Desktop Floating WhatsApp Badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Raj Resort on WhatsApp"
        className="hidden md:flex fixed bottom-8 left-6 z-40 items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 font-medium text-sm group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.09 7.34 8.89 7.74C8.68 8.15 8.08 8.74 8.08 9.94C8.08 11.14 8.95 12.3 9.08 12.46C9.2 12.63 10.79 15.08 13.23 16.13C13.81 16.38 14.26 16.53 14.62 16.64C15.2 16.83 15.73 16.8 16.15 16.74C16.62 16.67 17.6 16.15 17.8 15.58C18.01 15 18.01 14.51 17.95 14.41C17.89 14.31 17.72 14.25 17.48 14.13C17.23 14.01 16.03 13.42 15.81 13.34C15.58 13.26 15.42 13.22 15.25 13.46C15.09 13.71 14.6 14.28 14.45 14.45C14.3 14.61 14.15 14.63 13.9 14.51C13.66 14.39 12.87 14.13 11.94 13.3C11.22 12.65 10.73 11.85 10.59 11.61C10.45 11.36 10.57 11.23 10.7 11.11C10.81 11 10.95 10.82 11.07 10.67C11.19 10.53 11.23 10.42 11.31 10.26C11.39 10.1 11.35 9.95 11.29 9.83C11.23 9.71 10.74 8.5 10.54 8C10.34 7.53 10.14 7.59 9.98 7.58C9.84 7.58 9.68 7.58 9.53 7.33Z" />
        </svg>
        <span>Chat on WhatsApp</span>
      </a>

      {/* Mobile Sticky Quick Action Dock (< 768px) */}
      <aside
        aria-label="Quick contact and booking bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.1)] safe-bottom"
      >
        <div className="grid grid-cols-4 items-center h-16 px-1 max-w-md mx-auto">
          {/* 1. Direct Call */}
          <a
            href="tel:+919890165286"
            className="flex flex-col items-center justify-center h-full py-1 text-charcoal hover:text-ocean active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-ocean/10 text-ocean flex items-center justify-center mb-0.5">
              <Phone size={16} />
            </div>
            <span className="text-[11px] font-semibold tracking-tight">Call Now</span>
          </a>

          {/* 2. WhatsApp Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center h-full py-1 text-charcoal hover:text-[#25D366] active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.09 7.34 8.89 7.74C8.68 8.15 8.08 8.74 8.08 9.94C8.08 11.14 8.95 12.3 9.08 12.46C9.2 12.63 10.79 15.08 13.23 16.13C13.81 16.38 14.26 16.53 14.62 16.64C15.2 16.83 15.73 16.8 16.15 16.74C16.62 16.67 17.6 16.15 17.8 15.58C18.01 15 18.01 14.51 17.95 14.41C17.89 14.31 17.72 14.25 17.48 14.13C17.23 14.01 16.03 13.42 15.81 13.34C15.58 13.26 15.42 13.22 15.25 13.46C15.09 13.71 14.6 14.28 14.45 14.45C14.3 14.61 14.15 14.63 13.9 14.51C13.66 14.39 12.87 14.13 11.94 13.3C11.22 12.65 10.73 11.85 10.59 11.61C10.45 11.36 10.57 11.23 10.7 11.11C10.81 11 10.95 10.82 11.07 10.67C11.19 10.53 11.23 10.42 11.31 10.26C11.39 10.1 11.35 9.95 11.29 9.83C11.23 9.71 10.74 8.5 10.54 8C10.34 7.53 10.14 7.59 9.98 7.58C9.84 7.58 9.68 7.58 9.53 7.33Z" />
              </svg>
            </div>
            <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
          </a>

          {/* 3. Rooms & Tariffs */}
          <Link
            to="/rooms"
            className={`flex flex-col items-center justify-center h-full py-1 active:scale-95 transition-transform ${
              location.pathname === '/rooms' ? 'text-ocean font-bold' : 'text-charcoal'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-0.5 ${
                location.pathname === '/rooms' ? 'bg-ocean text-white' : 'bg-gray-100 text-charcoal'
              }`}
            >
              <Calendar size={15} />
            </div>
            <span className="text-[11px] font-semibold tracking-tight">Rooms</span>
          </Link>

          {/* 4. Book / Contact Us */}
          <Link
            to="/contact"
            className="flex flex-col items-center justify-center h-full py-1 text-ocean active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-ocean text-white flex items-center justify-center mb-0.5 shadow-sm">
              <MapPin size={15} />
            </div>
            <span className="text-[11px] font-semibold tracking-tight">Book / Visit</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
