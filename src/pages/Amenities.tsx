import { motion } from 'motion/react';
import { Waves, TreePine, PartyPopper, UtensilsCrossed, Car, Stethoscope, Bus } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';

export default function Amenities() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const amenitiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Premium Amenities at Raj Resort Kelva Beach",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "LocationFeatureSpecification",
          "name": "Swimming Pool",
          "description": "Pristine swimming pool featuring an exciting rain dance setup, perfect for refreshing morning swims or afternoon fun."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "LocationFeatureSpecification",
          "name": "Garden & Lawn Spaces",
          "description": "50,000 sq.ft of beautifully manicured lawns and garden spaces. Ideal for serene walks, relaxation, or large outdoor gatherings."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "LocationFeatureSpecification",
          "name": "Weddings & Events Venue",
          "description": "Spacious lawns and event hosting setups tailored for coastal destination weddings, family celebrations, and corporate events."
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "LocationFeatureSpecification",
          "name": "Restaurant & Dining",
          "description": "In-house restaurant serving authentic local coastal Maharashtrian dishes and diverse multi-cuisine food."
        }
      }
    ]
  };

  const amenities = [
    {
      title: 'Swimming Pool',
      description: 'Take a refreshing dip in our pristine swimming pool. Perfect for a morning swim or a relaxing afternoon. Features a rain dance setup for extra fun.',
      icon: <Waves size={40} />,
      image: '/images/pool.webp',
      mobileImage: '/images/mobile/pool.jpg',
    },
    {
      title: 'Garden & Lawn Spaces',
      description: 'Stroll through our 50,000 sq.ft of beautifully landscaped lawn spaces. Ideal for morning walks, evening relaxation, or hosting outdoor gatherings.',
      icon: <TreePine size={40} />,
      image: '/images/lawnn.webp',
      mobileImage: '/images/mobile/lawnn.jpg',
    },
    {
      title: 'Weddings & Events',
      description: 'Host your special day or corporate events in our beautiful spaces. We offer customized arrangements to make your celebrations memorable.',
      icon: <PartyPopper size={40} />,
      image: '/images/wedding.webp',
      mobileImage: '/images/mobile/wedding.jpg',
    },
    {
      title: 'Restaurant & Dining',
      description: 'Savor delicious local and multi-cuisine dishes prepared by our expert chefs. Enjoy your meals in a comfortable and inviting atmosphere.',
      icon: <UtensilsCrossed size={40} />,
      image: '/images/restaurant.webp',
      mobileImage: '/images/mobile/restaurant.jpg',
    },
  ];

  const additionalAmenities = [
    { title: 'Parking & Power Backup', icon: <Car size={24} />, desc: 'Secure parking and 24/7 power backup for a hassle-free stay.' },
    { title: 'Doctor on Call', icon: <Stethoscope size={24} />, desc: 'Medical assistance available promptly when needed.' },
    { title: 'Shuttle / Transfers', icon: <Bus size={24} />, desc: 'Convenient transport options to and from local transit points.' },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <SEO
        title="Amenities - Raj Resort Kelva Beach"
        description="Enjoy premium resort amenities at Raj Resort Kelva Beach. Relax by our pristine swimming pool, stroll through lush gardens, and savor delicious dining."
        schema={amenitiesSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6"
          >
            Resort Amenities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Everything you need for a perfect beachside holiday. From relaxation to recreation, we've got you covered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <h2 className="sr-only">Our Amenities</h2>
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={isMobile ? amenity.mobileImage : amenity.image}
                  alt={`${amenity.title} facilities at Raj Resort Kelva Beach Palghar`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white flex items-center gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    {amenity.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold">{amenity.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-sandy/10 rounded-3xl p-8 md:p-12 border border-sandy/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">More for Your Comfort</h2>
            <p className="text-gray-600">We ensure every aspect of your stay is taken care of.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalAmenities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100"
              >
                <div className="text-ocean bg-ocean/10 p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
