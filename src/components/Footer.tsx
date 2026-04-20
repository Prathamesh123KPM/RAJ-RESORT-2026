import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded-lg">
                <img src="/images/rajresort.webp" alt="Raj Resort Kelva Beach Official Logo" className="h-12 w-auto object-contain" width={192} height={48} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-sandy">Raj Resort</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your perfect beachside escape at Kelva Beach. Experience comfort, family-friendly amenities, and unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Sgqh92po4/?mibextid=wwXIfr" className="text-gray-400 hover:text-sandy transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/raj_resort_kelve_beach_?igsh=MXNobjYxeWdzbTBxdg==" className="text-gray-400 hover:text-sandy transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@rajresort4284" className="text-gray-400 hover:text-sandy transition-colors" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/rooms" className="text-gray-300 hover:text-sandy transition-colors text-sm">Rooms & Tariffs</Link>
              </li>
              <li>
                <Link to="/amenities" className="text-gray-300 hover:text-sandy transition-colors text-sm">Amenities</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-sandy transition-colors text-sm">Gallery</Link>
              </li>
              <li>
                <Link to="/location" className="text-gray-300 hover:text-sandy transition-colors text-sm">Location</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-sandy transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-sandy shrink-0 mt-1" size={20} />
                <address className="not-italic">
                  <a href="https://www.google.com/maps/place/Raj+Resort+Kelve+Beach/@19.6200397,72.7324351,17z/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sandy transition-colors text-sm leading-relaxed">
                    H.NO-2448, Jasodi, Near Kelva Beach,<br />
                    Kelwa Road, Palghar, Maharashtra 401401
                  </a>
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-sandy shrink-0" size={20} />
                <a href="tel:+919890165286" className="text-gray-300 hover:text-sandy transition-colors text-sm">
                  +91 9225102497                  <br />
                  +91 9890165286
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sandy shrink-0" size={20} />
                <Link to="/contact" className="text-gray-300 hover:text-sandy transition-colors text-sm">
                  Send via Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Raj Resort Kelva Beach. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-sandy transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-sandy transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
