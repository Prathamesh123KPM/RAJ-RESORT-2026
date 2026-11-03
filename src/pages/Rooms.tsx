import { CheckCircle2, Users, Maximize, Coffee, Clock, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';

export default function Rooms() {
  const [, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const roomsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": "AC Rooms & Accommodation at Raj Resort Kelva Beach",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Accommodation",
              "name": "AC Economic Room",
              "description": "Budget-friendly AC room for solo travelers or couples at ₹3,000 per day for 2 persons. Includes complimentary next morning breakfast, attached bathroom, and free Wi-Fi.",
              "occupancy": {
                "@type": "QuantitativeValue",
                "value": 2
              },
              "offers": {
                "@type": "Offer",
                "price": "3000",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2027-12-31"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Attached Bathroom", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Complimentary Breakfast", "value": true }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Accommodation",
              "name": "AC Standard Room",
              "description": "Comfortable AC Standard room at ₹3,500 per day for 2 persons. Features cable TV, attached bathroom, complimentary next morning breakfast, and free Wi-Fi.",
              "occupancy": {
                "@type": "QuantitativeValue",
                "value": 2
              },
              "offers": {
                "@type": "Offer",
                "price": "3500",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2027-12-31"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Attached Bathroom", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "TV with Cable", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Complimentary Breakfast", "value": true }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Accommodation",
              "name": "AC Deluxe Room",
              "description": "Spacious and elegantly furnished AC Deluxe room at ₹4,200 per day for 2 persons. Includes premium bedding, mini fridge, cable TV, complimentary breakfast, and free Wi-Fi.",
              "occupancy": {
                "@type": "QuantitativeValue",
                "value": 2
              },
              "offers": {
                "@type": "Offer",
                "price": "4200",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2027-12-31"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Premium Bedding", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Mini Fridge", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Complimentary Breakfast", "value": true }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Accommodation",
              "name": "AC Big Family Room",
              "description": "Expansive AC Big Family Room at ₹10,000 per day for min. 8 persons. Ideal for large families and groups with multiple beds, seating area, and complimentary next morning breakfast.",
              "occupancy": {
                "@type": "QuantitativeValue",
                "value": 8
              },
              "offers": {
                "@type": "Offer",
                "price": "10000",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2027-12-31"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Multiple Beds", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Seating Area", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Complimentary Breakfast", "value": true }
              ]
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://rajresortkelva.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Rooms & Tariffs",
            "item": "https://rajresortkelva.com/rooms"
          }
        ]
      }
    ]
  };

  const rooms = [
    {
      id: 1,
      name: 'AC Economic Room',
      price: '₹3,000',
      priceUnit: 'per day',
      basis: 'For 2 persons',
      extraPerson: '₹1,000/-',
      childRate: '₹800/- (5 to 10 yrs)',
      description: 'A budget-friendly option without compromising on comfort. Perfect for solo travelers or couples looking for a cozy beachside stay in Kelva.',
      features: ['Air Conditioning', 'Attached Bathroom', 'Free WiFi', 'Daily Housekeeping', 'Complimentary Breakfast'],
      capacity: '2 Guests',
      size: '150 sq.ft',
      image: '/images/rooms/acroom.webp',
      mobileImage: '/images/mobile/rooms/acroom.jpg',
      popular: false,
    },
    {
      id: 2,
      name: 'AC Standard Room',
      price: '₹3,500',
      priceUnit: 'per day',
      basis: 'For 2 persons',
      extraPerson: '₹1,000/-',
      childRate: '₹800/- (5 to 10 yrs)',
      description: 'Comfortable and well-appointed rooms featuring essential amenities for a relaxing getaway. Enjoy a peaceful night\'s sleep after a day at the beach.',
      features: ['Air Conditioning', 'Attached Bathroom', 'Free WiFi', 'Daily Housekeeping', 'TV with Cable', 'Complimentary Breakfast'],
      capacity: '2 Guests',
      size: '200 sq.ft',
      image: '/images/rooms/super-deluxe.webp',
      mobileImage: '/images/mobile/rooms/super-deluxe.jpg',
      popular: false,
    },
    {
      id: 3,
      name: 'AC Deluxe Room',
      price: '₹4,200',
      priceUnit: 'per day',
      basis: 'For 2 persons',
      extraPerson: '₹1,000/-',
      childRate: '₹800/- (5 to 10 yrs)',
      description: 'Spacious and elegantly furnished, our Deluxe rooms offer upgraded comfort, premium bedding, and a mini fridge for a truly relaxing experience.',
      features: ['Air Conditioning', 'Premium Bedding', 'Free WiFi', 'Daily Housekeeping', 'TV with Cable', 'Mini Fridge', 'Complimentary Breakfast'],
      capacity: '2 Guests',
      size: '250 sq.ft',
      image: '/images/rooms/ac-deluxe.webp',
      mobileImage: '/images/mobile/rooms/ac-deluxe.jpg',
      popular: true,
    },
    {
      id: 4,
      name: 'AC Big Family Room',
      price: '₹10,000',
      priceUnit: 'per day',
      basis: 'For min. 8 persons',
      extraPerson: null,
      childRate: null,
      description: 'Ideal for large families or groups, offering generous space and multiple beds. Stay together comfortably with premium coastal hospitality.',
      features: ['Air Conditioning', 'Multiple Beds', 'Free WiFi', 'Daily Housekeeping', 'TV with Cable', 'Seating Area', 'Complimentary Breakfast'],
      capacity: 'Min. 8 Guests',
      size: '400+ sq.ft',
      image: '/images/rooms/family-room.webp',
      mobileImage: '/images/mobile/rooms/family-room.jpg',
      popular: false,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <SEO
        title="Rooms & Tariffs - Raj Resort Kelva Beach"
        description="Check official room tariffs for AC Economic, Standard, Deluxe, and Big Family Rooms at Raj Resort Kelva Beach. Includes complimentary breakfast, check-in 12:00 PM, check-out 10:00 AM."
        keywords="kelva beach resort room rates, ac deluxe rooms kelva, raj resort tariff, big family room kelva beach, budget stay in kelva beach palghar, hotel booking kelva beach, resort night stay packages"
        schema={roomsSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ocean/10 text-ocean text-sm font-semibold mb-4"
          >
            <Sparkles size={16} />
            <span>Transparent Pricing • Direct Booking Rates</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4"
          >
            Our Room Tariffs & Stay Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Experience true coastal tranquility with clean, fully air-conditioned rooms at Raj Resort Kelva Beach. Every booking comes with complimentary morning breakfast and direct pool & beach access.
          </motion.p>
        </div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl p-5 md:p-6 shadow-md border border-amber-100 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-orange-50/60 border border-orange-100">
            <div className="w-11 h-11 rounded-full bg-ocean text-white flex items-center justify-center shrink-0 shadow-sm">
              <Coffee size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-ocean">Included Perk</p>
              <p className="text-sm font-bold text-charcoal">Complimentary Breakfast</p>
              <p className="text-xs text-gray-500">Next morning fresh breakfast</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-amber-50/60 border border-amber-100">
            <div className="w-11 h-11 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-amber-700">Stay Timings</p>
              <p className="text-sm font-bold text-charcoal">Check-in: 12:00 PM</p>
              <p className="text-xs text-gray-500">Check-out: 10:00 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
            <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Users size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700">Extra Person Tariff</p>
              <p className="text-sm font-bold text-charcoal">₹1,000 / Extra Person</p>
              <p className="text-xs text-gray-500">In same room with extra mattress</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-sky-50/60 border border-sky-100">
            <div className="w-11 h-11 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-sky-700">Child Policy</p>
              <p className="text-sm font-bold text-charcoal">₹800 / Child</p>
              <p className="text-xs text-gray-500">For kids 5 to 10 years</p>
            </div>
          </div>
        </motion.div>

        {/* Room Cards List */}
        <div className="space-y-10">
          {rooms.map((room, index) => {
            const encodedRoomMessage = encodeURIComponent(
              `Hello Raj Resort, I would like to inquire about booking the ${room.name} (${room.price}/- ${room.priceUnit}, ${room.basis}). Please share availability and details.`
            );

            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col lg:flex-row group hover:shadow-xl transition-all duration-300"
              >
                <div className="lg:w-2/5 relative overflow-hidden h-72 lg:h-auto min-h-[280px]">
                  <picture className="w-full h-full block">
                    <source media="(max-width: 767px)" srcSet={room.mobileImage} />
                    <img
                      src={room.image}
                      alt={`Spacious ${room.name} offering comfortable beachside accommodation at Raj Resort Kelva`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={400}
                    />
                  </picture>
                  {room.popular && (
                    <div className="absolute top-4 left-4 bg-ocean text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-md uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5">
                    <Coffee size={14} className="text-sandy" />
                    <span>Free Breakfast Included</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:w-3/5 flex flex-col justify-between">
                  <div>
                    {/* Header + Price */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal">{room.name}</h2>
                        <p className="text-gray-500 text-sm mt-1">{room.description}</p>
                      </div>

                      {/* Pricing Tag */}
                      <div className="bg-orange-50 border border-orange-200/80 rounded-xl px-4 py-3 shrink-0 text-left sm:text-right">
                        <div className="flex sm:flex-col items-baseline sm:items-end justify-between gap-2">
                          <span className="text-3xl font-extrabold text-ocean tracking-tight">{room.price}/-</span>
                          <span className="text-xs font-semibold text-gray-600">{room.priceUnit}</span>
                        </div>
                        <p className="text-xs font-bold text-forest mt-0.5">{room.basis}</p>
                      </div>
                    </div>

                    {/* Room Specs */}
                    <div className="flex flex-wrap gap-5 mb-5 text-sm">
                      <div className="flex items-center text-gray-600 gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <Users size={18} className="text-ocean" />
                        <span className="font-medium">{room.capacity}</span>
                      </div>
                      <div className="flex items-center text-gray-600 gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <Maximize size={18} className="text-ocean" />
                        <span className="font-medium">{room.size}</span>
                      </div>
                      <div className="flex items-center text-gray-600 gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg font-medium">
                        <Coffee size={18} className="text-emerald-600" />
                        <span>Breakfast Included</span>
                      </div>
                    </div>

                    {/* Extra Person & Child Tariff Box */}
                    {room.extraPerson ? (
                      <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3.5 mb-5 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-charcoal">Extra Person (same room):</span>
                          <span className="font-semibold text-ocean bg-white px-2.5 py-0.5 rounded border border-amber-200">{room.extraPerson}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-charcoal">Child (5 to 10 yrs):</span>
                          <span className="font-semibold text-ocean bg-white px-2.5 py-0.5 rounded border border-amber-200">{room.childRate}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3 mb-5 text-xs md:text-sm text-gray-700 font-medium">
                        ✨ Group Special: Tariff includes stay for minimum 8 persons with multiple beds and complimentary breakfast!
                      </div>
                    )}

                    {/* Features Grid */}
                    <div className="mb-6">
                      <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Room Amenities</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {room.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm gap-2">
                            <CheckCircle2 size={16} className="text-forest shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions & Timings */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-gray-500 text-center sm:text-left">
                      <p className="font-semibold text-charcoal">Check-in: 12:00 PM • Check-out: 10:00 AM</p>
                      <p className="text-gray-400 mt-0.5">Complimentary next morning breakfast included</p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={`https://wa.me/919890165286?text=${encodedRoomMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-sm text-sm"
                      >
                        <MessageCircle size={18} />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="tel:+919890165286"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-ocean text-white rounded-lg font-medium hover:bg-ocean/90 transition-colors shadow-md text-sm"
                      >
                        <Phone size={18} />
                        <span>Call to Book</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tariff Summary Table Card */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-charcoal to-gray-800 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-sandy font-semibold">Quick Rate Card</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">Our Room Tariff Overview</h2>
              <p className="text-gray-300 text-sm mt-1">Direct resort booking rates with complimentary breakfast & amenities</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919890165286"
                className="px-6 py-3 bg-ocean text-white font-medium rounded-lg hover:bg-ocean/90 transition-colors shadow-md text-sm inline-flex items-center gap-2"
              >
                <Phone size={16} />
                <span>Call Booking Desk</span>
              </a>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100/80 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase tracking-wider">
                  <th className="py-4 px-6">Room Category</th>
                  <th className="py-4 px-6">Tariff (Per Day)</th>
                  <th className="py-4 px-6">Base Occupancy</th>
                  <th className="py-4 px-6">Extra Person</th>
                  <th className="py-4 px-6">Child (5–10 Yrs)</th>
                  <th className="py-4 px-6">Breakfast & Timings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-charcoal">AC Economic Room</td>
                  <td className="py-4 px-6 font-extrabold text-ocean">₹3,000/-</td>
                  <td className="py-4 px-6">2 Persons</td>
                  <td className="py-4 px-6">₹1,000/- <span className="text-xs text-gray-400">(same room)</span></td>
                  <td className="py-4 px-6">₹800/-</td>
                  <td className="py-4 px-6">
                    <span className="text-emerald-700 font-semibold">Complimentary</span>
                    <span className="block text-xs text-gray-400">In: 12 PM | Out: 10 AM</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-charcoal">AC Standard Room</td>
                  <td className="py-4 px-6 font-extrabold text-ocean">₹3,500/-</td>
                  <td className="py-4 px-6">2 Persons</td>
                  <td className="py-4 px-6">₹1,000/- <span className="text-xs text-gray-400">(same room)</span></td>
                  <td className="py-4 px-6">₹800/-</td>
                  <td className="py-4 px-6">
                    <span className="text-emerald-700 font-semibold">Complimentary</span>
                    <span className="block text-xs text-gray-400">In: 12 PM | Out: 10 AM</span>
                  </td>
                </tr>
                <tr className="hover:bg-amber-50/40 bg-orange-50/20 transition-colors">
                  <td className="py-4 px-6 font-bold text-charcoal flex items-center gap-2">
                    AC Deluxe Room
                    <span className="text-[10px] bg-ocean text-white font-bold px-2 py-0.5 rounded-full">Popular</span>
                  </td>
                  <td className="py-4 px-6 font-extrabold text-ocean">₹4,200/-</td>
                  <td className="py-4 px-6">2 Persons</td>
                  <td className="py-4 px-6">₹1,000/- <span className="text-xs text-gray-400">(same room)</span></td>
                  <td className="py-4 px-6">₹800/-</td>
                  <td className="py-4 px-6">
                    <span className="text-emerald-700 font-semibold">Complimentary</span>
                    <span className="block text-xs text-gray-400">In: 12 PM | Out: 10 AM</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-charcoal">AC Big Family Room</td>
                  <td className="py-4 px-6 font-extrabold text-ocean">₹10,000/-</td>
                  <td className="py-4 px-6">Min. 8 Persons</td>
                  <td className="py-4 px-6 text-gray-500">Group base tariff</td>
                  <td className="py-4 px-6 text-gray-500">Included in group</td>
                  <td className="py-4 px-6">
                    <span className="text-emerald-700 font-semibold">Complimentary</span>
                    <span className="block text-xs text-gray-400">In: 12 PM | Out: 10 AM</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Policy Footnotes */}
          <div className="p-6 bg-gray-50 border-t border-gray-200 text-xs text-gray-600 space-y-2">
            <p className="font-semibold text-charcoal flex items-center gap-1.5">
              <Clock size={14} className="text-ocean" />
              <span>Standard Check-in: 12:00 PM | Standard Check-out: 10:00 AM</span>
            </p>
            <p className="text-gray-500">
              * Complimentary next morning breakfast is served in our resort dining hall for all staying guests.
            </p>
            <p className="text-gray-500">
              * Extra person in same room is ₹1,000/- per person per day (includes extra mattress & breakfast). Children between 5 to 10 years are charged ₹800/- per child. Children below 5 years stay complimentary.
            </p>
            <p className="text-gray-500">
              * Swimming pool with rain dance access is included with all room bookings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
