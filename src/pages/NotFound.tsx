import { Link } from 'react-router-dom';
import { Home, Compass, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  const whatsappUrl =
    'https://wa.me/919890165286?text=Hello%20Raj%20Resort%2C%20I%20have%20an%20inquiry%20regarding%20booking%20and%20rates.';

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
      <SEO
        title="Page Not Found (404) | Raj Resort Kelva Beach"
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        type="website"
      />
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-sm uppercase tracking-widest font-bold text-ocean bg-ocean/10 px-4 py-1.5 rounded-full inline-block mb-4">
          Error 404
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
          Lost in the Coastal Breeze?
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
          We couldn&apos;t find the page you were looking for. It may have been moved or updated, but paradise at Kelva Beach is still right here!
        </p>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto mb-10 text-sm font-medium">
          <Link
            to="/"
            className="p-3 bg-white rounded-xl shadow-xs border border-gray-200 text-charcoal hover:text-ocean hover:border-ocean transition-all flex flex-col items-center gap-1.5"
          >
            <Home size={18} className="text-ocean" />
            <span>Home</span>
          </Link>
          <Link
            to="/rooms"
            className="p-3 bg-white rounded-xl shadow-xs border border-gray-200 text-charcoal hover:text-ocean hover:border-ocean transition-all flex flex-col items-center gap-1.5"
          >
            <Compass size={18} className="text-ocean" />
            <span>Rooms &amp; Tariffs</span>
          </Link>
          <Link
            to="/amenities"
            className="p-3 bg-white rounded-xl shadow-xs border border-gray-200 text-charcoal hover:text-ocean hover:border-ocean transition-all flex flex-col items-center gap-1.5"
          >
            <Compass size={18} className="text-ocean" />
            <span>Amenities</span>
          </Link>
          <Link
            to="/gallery"
            className="p-3 bg-white rounded-xl shadow-xs border border-gray-200 text-charcoal hover:text-ocean hover:border-ocean transition-all flex flex-col items-center gap-1.5"
          >
            <Compass size={18} className="text-ocean" />
            <span>Photo Gallery</span>
          </Link>
          <Link
            to="/location"
            className="p-3 bg-white rounded-xl shadow-xs border border-gray-200 text-charcoal hover:text-ocean hover:border-ocean transition-all flex flex-col items-center gap-1.5"
          >
            <Compass size={18} className="text-ocean" />
            <span>Directions</span>
          </Link>
          <Link
            to="/blog"
            className="p-3 bg-white rounded-xl shadow-xs border border-gray-200 text-charcoal hover:text-ocean hover:border-ocean transition-all flex flex-col items-center gap-1.5"
          >
            <Compass size={18} className="text-ocean" />
            <span>Travel Guides</span>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-ocean text-white rounded-xl font-medium hover:bg-ocean/90 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          <a
            href="tel:+919890165286"
            className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-charcoal rounded-xl font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            <Phone size={18} className="text-ocean" />
            <span>Call Desk: +91 9890165286</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#20ba59] transition-all shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
