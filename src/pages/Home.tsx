import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Waves, Utensils, Wifi, Car, CheckCircle2, Map as MapIcon, Landmark, Compass, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Raj Resort the best resort in Kelva Beach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Raj Resort offers a unique combination of premium AC family and couple suites, a massive swimming pool with a rain dance feature, beautifully landscaped gardens, and an authentic multi-cuisine restaurant, all located within a brief walk to the gorgeous Kelva shoreline."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide secure parking at your resort in Palghar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer complimentary, secure, and spacious on-site parking for all our guests. Whether you are driving down for a weekend trip from Mumbai or Surat, your vehicle will be completely safe."
        }
      },
      {
        "@type": "Question",
        "name": "How far is the resort from Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are widely considered the ideal beach resort near Mumbai, located roughly 90 to 110 kilometers away depending on your starting point. It's a highly scenic, comfortable 2-to-3 hour drive via the Western Express Highway (NH48)."
        }
      },
      {
        "@type": "Question",
        "name": "Is the beach within walking distance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our resort is situated very close to the beach front. It takes only a few minutes of leisurely walking through the refreshing coastal breeze to step right onto the soft sands of Kelva Beach."
        }
      }
    ]
  };


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    { src: '/images/pool.webp', mobileSrc: '/images/mobile/pool.jpg', alt: 'Premium swimming pool at Raj Resort Kelva Beach' },
    { src: '/images/build.webp', mobileSrc: '/images/mobile/build.jpg', alt: 'Exterior view of Raj Resort buildings surrounded by lush palm trees' },
    { src: '/images/rooms/garden-view.webp', mobileSrc: '/images/mobile/rooms/garden-view.jpg', alt: 'Lush green gardens and beautifully landscaped lawns at Raj Resort' },
    { src: '/images/wedding.webp', mobileSrc: '/images/mobile/wedding.jpg', alt: 'Ideal destination wedding setup with outdoor lawns at Raj Resort Palghar' },
    { src: '/images/restaurant.webp', mobileSrc: '/images/mobile/restaurant.jpg', alt: 'In-house restaurant serving authentic local and multi-cuisine dishes' },
    { src: '/images/rooms/super-deluxe.webp', mobileSrc: '/images/mobile/rooms/super-deluxe.jpg', alt: 'Cozy AC Standard Room offering comfortable beachside accommodation' },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="Raj Resort Kelva - Premium Beachside Resort In Kelva"
        description="Experience paradise at Raj Resort, a premium beachside resort at Kelva Beach. Enjoy comfortable AC rooms, a relaxing pool, and authentic local cuisine."
        schema={faqSchema}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0 bg-charcoal">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={heroImages[currentImageIndex].mobileSrc}
            />
            <source
              media="(min-width: 768px)"
              srcSet={heroImages[currentImageIndex].src}
            />
            <img
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              width={1440}
              height={1080}
            />
          </picture>
          <div className="absolute inset-0 bg-charcoal/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          {isMobile ? (
            <>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Welcome to Raj Resort <br />
                <span className="text-sandy">Your Premium Kelva Beach Resort</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-100 mb-10 font-light tracking-wide">
                Comfort &bull; Family &bull; Memories
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+919890165286"
                  className="w-full sm:w-auto px-8 py-4 bg-ocean text-white rounded-full font-semibold text-lg hover:bg-ocean/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Book Now
                </a>
                <Link
                  to="/rooms"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all shadow-lg flex items-center justify-center"
                >
                  View Rooms
                </Link>
              </div>
            </>
          ) : (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
              >
                Welcome to Raj Resort <br />
                <span className="text-sandy">Your Premium Kelva Beach Resort</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-2xl text-gray-100 mb-10 font-light tracking-wide"
              >
                Comfort &bull; Family &bull; Memories
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="tel:+919890165286"
                  className="w-full sm:w-auto px-8 py-4 bg-ocean text-white rounded-full font-semibold text-lg hover:bg-ocean/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Book Now
                </a>
                <Link
                  to="/rooms"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all shadow-lg flex items-center justify-center"
                >
                  View Rooms
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-bold tracking-widest text-forest uppercase mb-3">About Us</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 leading-snug">
                Experience Serenity at the Best Resort in Palghar
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nestled near the pristine shores of the Arabian Sea, Raj Resort is your ideal beachside stay in Kelva. Whether you're planning a family vacation, a romantic getaway, or a weekend trip with friends, our Kelva beach resort provides a warm, welcoming atmosphere.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Enjoy our serene garden, take a dip in the swimming pool, and savor delicious meals at our restaurant. With comfortable accommodations and attentive service, your perfect beachside holiday awaits.
              </p>
              <div className="flex items-center gap-4 p-4 bg-sandy/20 rounded-xl border border-sandy/30">
                <div className="bg-ocean/10 p-3 rounded-full text-ocean">
                  <Waves size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Just a short walk to Kelva Beach 🌊</h3>
                  <p className="text-sm text-gray-500">Enjoy spectacular sunsets and sandy shores.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={isMobile ? "/images/mobile/pool2.jpg" : "/images/pool2.webp"}
                alt="Beautiful swimming pool at Raj Resort in Kelva Beach, Palghar"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-forest/10 p-3 rounded-full text-forest">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">Prime Location</h3>
                    <p className="text-sm text-gray-600">Near Kelwa Jasodi, Palghar</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-bold tracking-widest text-ocean uppercase mb-3">Accommodation</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
              Comfortable Stays for Every Guest
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our range of well-appointed AC rooms, strategically designed to provide you with the utmost comfort during your beachside stay in Kelva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Room 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={isMobile ? "/images/mobile/rooms/ac-deluxe.jpg" : "/images/rooms/ac-deluxe.webp"}
                  alt="Spacious AC Deluxe Room featuring premium bedding and modern amenities for couples at Raj Resort Kelva"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={400}
                  height={256}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-ocean">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">AC Deluxe Room</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Spacious and elegantly furnished room perfect for couples seeking extra comfort.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 gap-2"><CheckCircle2 size={16} className="text-forest" /> Air Conditioning</li>
                  <li className="flex items-center text-sm text-gray-600 gap-2"><CheckCircle2 size={16} className="text-forest" /> Free WiFi</li>
                  <li className="flex items-center text-sm text-gray-600 gap-2"><CheckCircle2 size={16} className="text-forest" /> Daily Housekeeping</li>
                </ul>
                <Link to="/rooms" className="block w-full text-center py-3 border border-ocean text-ocean rounded-lg font-medium hover:bg-ocean hover:text-white transition-colors">
                  View Details
                </Link>
              </div>
            </div>

            {/* Room 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={isMobile ? "/images/mobile/rooms/family-room.jpg" : "/images/rooms/family-room.webp"}
                  alt="Large AC Family Room with multiple beds, perfect for group stays at Raj Resort Palghar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={400}
                  height={256}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">AC Family Room</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Ideal for families or groups, offering ample space and multiple beds for a comfortable stay.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 gap-2"><CheckCircle2 size={16} className="text-forest" /> Air Conditioning</li>
                  <li className="flex items-center text-sm text-gray-600 gap-2"><CheckCircle2 size={16} className="text-forest" /> Free Breakfast Options</li>
                  <li className="flex items-center text-sm text-gray-600 gap-2"><CheckCircle2 size={16} className="text-forest" /> Extra Space</li>
                </ul>
                <Link to="/rooms" className="block w-full text-center py-3 border border-ocean text-ocean rounded-lg font-medium hover:bg-ocean hover:text-white transition-colors">
                  View Details
                </Link>
              </div>
            </div>

            {/* Room 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group md:hidden lg:block">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={isMobile ? "/images/mobile/rooms/super-deluxe.jpg" : "/images/rooms/super-deluxe.webp"}
                  alt="Cozy AC Standard Room offering comfortable beachside accommodation in Kelva"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={400}
                  height={256}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">AC Standard Room</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Cozy and comfortable accommodation with all essential amenities for a relaxing getaway.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 gap-2"><CheckCircle2 size={16} className="text-forest" /> Air Conditioning</li>
                  <li className="flex items-center text-sm text-gray-600 gap-2"><CheckCircle2 size={16} className="text-forest" /> Free WiFi</li>
                  <li className="flex items-center text-sm text-gray-600 gap-2"><CheckCircle2 size={16} className="text-forest" /> Attached Bathroom</li>
                </ul>
                <Link to="/rooms" className="block w-full text-center py-3 border border-ocean text-ocean rounded-lg font-medium hover:bg-ocean hover:text-white transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms" className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-charcoal/90 transition-colors">
              Explore All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Quick Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-sandy/10 transition-colors">
              <div className="bg-ocean/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-ocean mb-4">
                <Waves size={32} />
              </div>
              <h3 className="font-bold text-charcoal mb-2">Swimming Pool</h3>
              <p className="text-sm text-gray-500">With rain dance setup</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-sandy/10 transition-colors">
              <div className="bg-forest/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-forest mb-4">
                <Utensils size={32} />
              </div>
              <h3 className="font-bold text-charcoal mb-2">Restaurant</h3>
              <p className="text-sm text-gray-500">Delicious local & multi-cuisine</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-sandy/10 transition-colors">
              <div className="bg-ocean/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-ocean mb-4">
                <Wifi size={32} />
              </div>
              <h3 className="font-bold text-charcoal mb-2">Free Wi-Fi</h3>
              <p className="text-sm text-gray-500">Stay connected always</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-sandy/10 transition-colors">
              <div className="bg-forest/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-forest mb-4">
                <Car size={32} />
              </div>
              <h3 className="font-bold text-charcoal mb-2">Parking</h3>
              <p className="text-sm text-gray-500">Safe & secure parking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <div className="text-sm font-bold tracking-widest text-ocean uppercase mb-3">Gallery</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Glimpses of Paradise
              </h2>
              <p className="text-gray-600 text-lg">
                Take a look at what awaits you at Raj Resort.
              </p>
            </div>
            <Link to="/gallery" className="hidden md:inline-flex items-center justify-center px-6 py-3 border-2 border-ocean text-ocean rounded-full font-medium hover:bg-ocean hover:text-white transition-colors">
              View Full Gallery
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md group aspect-square md:aspect-auto">
              <img src={isMobile ? "/images/mobile/raj.jpg" : "/images/raj.webp"} alt="Exterior view of Raj Resort buildings surrounded by lush palm trees in Kelva" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={800} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md group aspect-square">
              <img src={isMobile ? "/images/mobile/pool.jpg" : "/images/pool.webp"} alt="Clear blue swimming pool at Raj Resort Palghar during daytime" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={400} height={400} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md group aspect-square">
              <img src={isMobile ? "/images/mobile/rooms/super-deluxe.jpg" : "/images/rooms/super-deluxe.webp"} alt="Interior view of an AC Standard Room at Raj Resort" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={400} height={400} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md group aspect-square">
              <img src={isMobile ? "/images/mobile/build2.jpg" : "/images/build2.webp"} alt="Main entrance and reception area of Raj Resort Kelva Beach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={400} height={400} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md group aspect-square">
              <img src={isMobile ? "/images/mobile/rooms/family-room.jpg" : "/images/rooms/family-room.webp"} alt="Spacious interior of a family room at Raj Resort" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={400} height={400} />
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery" className="inline-flex items-center justify-center px-6 py-3 border-2 border-ocean text-ocean rounded-full font-medium hover:bg-ocean hover:text-white transition-colors">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-bold tracking-widest text-forest uppercase mb-3">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sandy/10 p-8 rounded-2xl border border-sandy/20 relative">
              <div className="text-ocean mb-4">
                {"★★★★★"}
              </div>
              <p className="text-gray-600 italic mb-6">"Excellent place for a family weekend. The pool is clean, the food is amazing, and the beach is just a 5-minute walk away. Highly recommended!"</p>
              <h3 className="font-bold text-charcoal">- Rahul D.</h3>
            </div>
            <div className="bg-sandy/10 p-8 rounded-2xl border border-sandy/20 relative">
              <div className="text-ocean mb-4">
                {"★★★★★"}
              </div>
              <p className="text-gray-600 italic mb-6">"Very friendly staff and great service. The rooms were spacious and well-maintained. We loved the rain dance by the pool."</p>
              <h3 className="font-bold text-charcoal">- Sneha M.</h3>
            </div>
            <div className="bg-sandy/10 p-8 rounded-2xl border border-sandy/20 relative">
              <div className="text-ocean mb-4">
                {"★★★★★"}
              </div>
              <p className="text-gray-600 italic mb-6">"A perfect relaxing getaway from Mumbai. The garden area is beautiful and peaceful. Will definitely visit again with friends."</p>
              <h3 className="font-bold text-charcoal">- Amit P.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-bold tracking-widest text-ocean uppercase mb-3">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
              The Best Resort in Kelva Beach
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              When searching for the <strong>best resort in Kelva Beach</strong>, Raj Resort effortlessly stands out. We go beyond offering just a place to sleep; we offer a complete, rejuvenating experience. As a top-rated <strong>resort in Palghar</strong>, our commitment to exceptional hospitality, pristine facilities, and authentic local experiences is unmatched. Whether you are seeking a quiet romantic getaway or a fun-filled family vacation, our resort is meticulously designed to cater to all your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-ocean/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-ocean mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Premium Accommodations</h3>
              <p className="text-gray-600">Our AC rooms are incredibly spacious, frequently sanitized, and feature premium bedding to ensure you sleep soundly to the sound of ocean waves.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-forest/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-forest mb-6">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Authentic Coastal Diet</h3>
              <p className="text-gray-600">We source the freshest local ingredients to serve authentic Maharashtrian and multi-cuisine delicacies right at our beautiful in-house restaurant.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-sandy/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-charcoal mb-6">
                <Waves size={32} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Unmatched Pool Experience</h3>
              <p className="text-gray-600">Our massive, crystal-clear swimming pool comes with an exciting rain dance setup, ensuring endless joy for both children and adults.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Kelva Beach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src={isMobile ? "/images/mobile/lawnn.jpg" : "/images/lawnn.webp"} alt="Beautiful landscape of Kelva Beach surroundings" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" loading="lazy" width={800} height={400} />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="text-sm font-bold tracking-widest text-forest uppercase mb-3">The Destination</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                Discover the Magic of Kelva Beach
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Stretching for nearly 8 kilometers, Kelva Beach is one of the largest and most breathtaking beaches in Maharashtra. Known for its soft sands, Suru (Casuarina) trees, and magnificent sunsets, it continues to be a closely guarded secret for those looking to escape the hustle and bustle of city life.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                If you are looking for a premier <strong>beach resort near Mumbai</strong>, Raj Resort is the perfect base camp. Located just a short coastal drive away, our resort allows you to easily walk down to the pristine shorelines each morning, take long walks at dusk, and completely reconnect with nature.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 gap-3"><CheckCircle2 className="text-ocean" size={20} /> 8 Kilometers of pristine coastline</li>
                <li className="flex items-center text-gray-700 gap-3"><CheckCircle2 className="text-ocean" size={20} /> Stunning Suru (Casuarina) tree plantations</li>
                <li className="flex items-center text-gray-700 gap-3"><CheckCircle2 className="text-ocean" size={20} /> Incredible, picture-perfect sunsets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Things to Explore Nearby
            </h2>
            <p className="text-gray-300 text-lg">
              As a centrally located <strong>resort in Palghar</strong> district, staying with us gives you easy access to cultural, historical, and natural wonders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
              <Landmark className="text-sandy mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Kelva Sea Fort</h3>
              <p className="text-gray-300">An ancient architectural marvel located right on the beach. It gets surrounded by sea water during high tide, creating a truly picturesque view.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
              <MapIcon className="text-sandy mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Shitla Devi Temple</h3>
              <p className="text-gray-300">A spiritually enriching and historically significant ancient Hindu temple drawing visitors seeking blessings and peace.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
              <Compass className="text-sandy mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Kelva Dam</h3>
              <p className="text-gray-300">Located a few kilometers inward, this serene dam is nestled in lush green hills and is an excellent spot for nature photography.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold tracking-widest text-ocean uppercase mb-3">Got Questions?</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-charcoal mb-2 flex items-center gap-2">
                <HelpCircle className="text-ocean shrink-0" size={20} /> What makes Raj Resort the best resort in Kelva Beach?
              </h3>
              <p className="text-gray-600 pl-7 leading-relaxed">
                Raj Resort offers a unique combination of premium AC family and couple suites, a massive swimming pool with a rain dance feature, beautifully landscaped gardens, and an authentic multi-cuisine restaurant, all located within a brief walk to the gorgeous Kelva shoreline. Our hospitality and cleanliness set us apart.
              </p>
            </div>
            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-charcoal mb-2 flex items-center gap-2">
                <HelpCircle className="text-ocean shrink-0" size={20} /> Do you provide secure parking at your resort in Palghar?
              </h3>
              <p className="text-gray-600 pl-7 leading-relaxed">
                Yes, we offer complimentary, secure, and spacious on-site parking for all our guests. Whether you are driving down for a weekend trip from Mumbai or Surat, your vehicle will be completely safe.
              </p>
            </div>
            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-charcoal mb-2 flex items-center gap-2">
                <HelpCircle className="text-ocean shrink-0" size={20} /> How far is the resort from Mumbai?
              </h3>
              <p className="text-gray-600 pl-7 leading-relaxed">
                We are widely considered the ideal <strong>beach resort near Mumbai</strong>, located roughly 90 to 110 kilometers away depending on your starting point. It's a highly scenic, comfortable 2-to-3 hour drive via the Western Express Highway (NH48), making it the perfect quick getaway.
              </p>
            </div>
            {/* FAQ 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-charcoal mb-2 flex items-center gap-2">
                <HelpCircle className="text-ocean shrink-0" size={20} /> Is the beach within walking distance?
              </h3>
              <p className="text-gray-600 pl-7 leading-relaxed">
                Absolutely! Our resort is situated very close to the beach front. It takes only a few minutes of leisurely walking through the refreshing coastal breeze to step right onto the soft sands of Kelva Beach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={isMobile ? "/images/mobile/pool.jpg" : "/images/pool.webp"} alt="Beautiful orange sunset over the Arabian sea at Kelva beach" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready for your beachside stay in Kelva?</h2>
          <p className="text-xl text-gray-300 mb-10">Book your stay today at the finest resort in Palghar and create unforgettable memories.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919890165286" className="px-8 py-4 bg-ocean text-white rounded-full font-bold text-lg hover:bg-ocean/90 transition-colors shadow-lg flex items-center justify-center gap-2">
              <Phone size={20} />
              Call +91 9890165286
            </a>
            <Link to="/contact" className="px-8 py-4 bg-white text-charcoal rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
