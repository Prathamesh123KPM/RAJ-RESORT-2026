import { CheckCircle2, Users, Maximize, Coffee } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Rooms() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.title = "Rooms & Tariffs - Raj Resort Kelva Beach";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover comfortable AC rooms at Raj Resort Kelva Beach. From budget-friendly standard rooms to spacious family suites, find the perfect stay for you.");
    }
  }, []);

  const rooms = [
    {
      id: 1,
      name: 'AC Economic Room',
      description: 'A budget-friendly option without compromising on comfort. Perfect for solo travelers or couples looking for a cozy beachside stay in Kelva.',
      features: ['Air Conditioning', 'Attached Bathroom', 'Free WiFi', 'Daily Housekeeping'],
      capacity: '2 Guests',
      size: '150 sq.ft',
      image: '/images/rooms/acroom.webp',
      mobileImage: '/images/mobile/rooms/acroom.jpg',
    },
    {
      id: 2,
      name: 'AC Standard Room',
      description: 'Comfortable and well-appointed rooms featuring essential amenities for a relaxing getaway. Enjoy a peaceful night\'s sleep after a day at the beach.',
      features: ['Air Conditioning', 'Attached Bathroom', 'Free WiFi', 'Daily Housekeeping', 'TV with Cable'],
      capacity: '2 Guests',
      size: '200 sq.ft',
      image: '/images/rooms/super-deluxe.webp',
      mobileImage: '/images/mobile/rooms/super-deluxe.jpg',
    },
    {
      id: 3,
      name: 'AC Deluxe Room',
      description: 'Spacious and elegantly furnished, our Deluxe rooms offer upgraded comfort and premium bedding for a truly relaxing experience.',
      features: ['Air Conditioning', 'Premium Bedding', 'Free WiFi', 'Daily Housekeeping', 'TV with Cable', 'Mini Fridge'],
      capacity: '2-3 Guests',
      size: '250 sq.ft',
      image: '/images/rooms/ac-deluxe.webp',
      mobileImage: '/images/mobile/rooms/ac-deluxe.jpg',
      popular: true,
    },
    {
      id: 4,
      name: 'AC Family Room',
      description: 'Ideal for families or groups, offering ample space and multiple beds. Create lasting memories together in this comfortable setting.',
      features: ['Air Conditioning', 'Multiple Beds', 'Free WiFi', 'Daily Housekeeping', 'TV with Cable', 'Seating Area'],
      capacity: '4-6 Guests',
      size: '400 sq.ft',
      image: '/images/rooms/family-room.webp',
      mobileImage: '/images/mobile/rooms/family-room.jpg',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6"
          >
            Rooms & Tariffs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Experience comfort and tranquility in our thoughtfully designed rooms. As a leading resort in Palghar, all our accommodations come with complimentary breakfast options and access to premium resort amenities for your perfect beachside stay in Kelva.
          </motion.p>
        </div>

        <div className="space-y-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row group"
            >
              <div className="lg:w-2/5 relative overflow-hidden h-64 lg:h-auto">
                <img
                  src={isMobile ? room.mobileImage : room.image}
                  alt={`Spacious ${room.name} offering comfortable beachside accommodation at Raj Resort Kelva`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                {room.popular && (
                  <div className="absolute top-4 left-4 bg-ocean text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Most Popular
                  </div>
                )}
              </div>

              <div className="p-8 lg:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal">{room.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center text-gray-500 gap-2">
                      <Users size={20} className="text-ocean" />
                      <span className="font-medium">{room.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-500 gap-2">
                      <Maximize size={20} className="text-ocean" />
                      <span className="font-medium">{room.size}</span>
                    </div>
                    <div className="flex items-center text-gray-500 gap-2">
                      <Coffee size={20} className="text-ocean" />
                      <span className="font-medium">Breakfast Available</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Room Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 gap-2">
                          <CheckCircle2 size={18} className="text-forest shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-100 gap-4">
                  <p className="text-sm text-gray-500 italic">* Contact us for current tariffs and seasonal offers.</p>
                  <a
                    href="tel:+919890165286"
                    className="w-full sm:w-auto px-8 py-3 bg-ocean text-white rounded-lg font-medium hover:bg-ocean/90 transition-colors text-center shadow-md"
                  >
                    Book This Room
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
