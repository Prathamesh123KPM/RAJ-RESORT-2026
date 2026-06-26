import { motion } from 'motion/react';
import { MapPin, Train, Car, Navigation } from 'lucide-react';
import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function Location() {
  const resortLocationSchema = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": "Raj Resort Kelva Beach",
    "image": "https://rajresortkelva.com/images/rajresort.webp",
    "@id": "https://rajresortkelva.com/#resort",
    "url": "https://rajresortkelva.com",
    "telephone": "+919890165286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bus Stop, Mangelwada, Kelwa",
      "addressLocality": "Palghar",
      "addressRegion": "Maharashtra",
      "postalCode": "401401",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.6133,
      "longitude": 72.7303
    },
    "locationString": "Kelva Beach, Palghar, Maharashtra, India",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.5",
      "bestRating": "5"
    }
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <SEO
        title="Location & Travel - Raj Resort Kelva Beach"
        description="Find your way to Raj Resort at Kelva Beach. View our location map, get directions from Mumbai or Pune, and explore nearby attractions like Kelva Fort."
        schema={resortLocationSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6"
          >
            Location & Travel Info
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Find your way to Raj Resort. As a premier resort in Palghar, we are conveniently located near the beach, easily accessible for your beachside stay in Kelva from Mumbai and Pune.
          </motion.p>
        </div>
        <div className="bg-sandy/20 p-6 rounded-xl border border-sandy/30">
          <h2 className="font-bold text-charcoal mb-4">Nearby Attractions</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-70 rounded-lg overflow-hidden group">
              <img
                src="/images/beach-view1.webp"
                alt="Scenic view of the pristine Kelva Beach coastline and sand"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={400}
                height={280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                <span className="text-white text-sm font-medium">Kelva Beach (1 km)</span>
              </div>
            </div>
            <div className="relative h-70 rounded-lg overflow-hidden group">
              <img
                src="/images/kelva-sea-fort.jpg"
                alt="Historic Kelva Sea Fort surrounded by the Arabian Sea during high tide"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={400}
                height={280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                <span className="text-white text-sm font-medium">Kelva Fort</span>
              </div>
            </div>
            <div className="relative h-70 rounded-lg overflow-hidden group">
              <img
                src="/images/shitladevi-temple.jpg"
                alt="Front facade of the ancient Shri Shitladevi Temple in Kelwa Palghar"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={400}
                height={280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                <span className="text-white text-sm font-medium">Shri Shitladevi Temple</span>
              </div>
            </div>
            <div className="relative h-70 rounded-lg overflow-hidden group">
              <img
                src="/images/kelvadam.webp"
                alt="Calm waters of Kelva Dam nestled in lush green hills near Palghar"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={400}
                height={280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                <span className="text-white text-sm font-medium">Kelva Dam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-[500px] relative border border-gray-200"
          >
            {/* Placeholder for Google Map iframe */}
            <div className="absolute inset-0 flex items-center justify-center bg-sandy/20">
              <div className="text-center p-6">
                <MapPin size={48} className="text-ocean mx-auto mb-4" />
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">Raj Resort Kelva Beach</h2>
                <p className="text-gray-600 max-w-xs mx-auto">Bus Stop, Mangelwada, Palghar, Kelwa, Maharashtra 401401</p>
                <a
                  href="https://maps.google.com/?q=Raj+Resort+Kelva+Beach+Palghar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-ocean text-white px-6 py-3 rounded-full font-medium hover:bg-ocean/90 transition-colors shadow-md"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>
              </div>

            </div>

          </motion.div>



          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
                <MapPin className="text-forest" /> Address
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Raj Resort – Kelva Beach<br />
                Bus Stop, Mangelwada, Palghar, Kelwa, Maharashtra 401401
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
                <Train className="text-ocean" /> By Train
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The nearest railway stations are <strong>Palghar</strong> and <strong>Kelwa Road</strong> on the Western Railway line.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                <li>From Palghar Station: Approx. 15 km (Auto/Taxis available)</li>
                <li>From Kelwa Road Station: Approx. 5 km (Auto/Taxis available)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
                <Car className="text-forest" /> By Road
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Easily accessible via the Mumbai-Ahmedabad Highway (NH48).
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                <li>From Mumbai: Approx. 100 km (2.5 - 3 hours drive)</li>
                <li>From Pune: Approx. 240 km (5 - 6 hours drive)</li>
              </ul>
            </div>


          </motion.div>
        </div>
      </div>
    </div>
  );
}
