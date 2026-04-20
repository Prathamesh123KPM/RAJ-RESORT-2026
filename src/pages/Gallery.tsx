import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.title = "Gallery - Raj Resort Kelva Beach";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore the photo gallery of Raj Resort Kelva Beach. View pictures of our beautiful swimming pool, lush gardens, comfortable AC rooms, and dining areas.");
    }
  }, []);

  const images = [
    // Resort
    { src: '/images/raj.webp', mobileSrc: '/images/mobile/raj.jpg', category: 'Resort', alt: 'Exterior view of Raj Resort buildings surrounded by lush palm trees in Kelva' },
    { src: '/images/build.webp', mobileSrc: '/images/mobile/build.jpg', category: 'Resort', alt: 'Main building and architectural facade of Raj Resort Kelva Beach' },
    { src: '/images/build2.webp', mobileSrc: '/images/mobile/build2.jpg', category: 'Resort', alt: 'Entrance and main reception area of Raj Resort Palghar' },
    // Pool
    { src: '/images/pool.webp', mobileSrc: '/images/mobile/pool.jpg', category: 'Pool', alt: 'Large, clean swimming pool at Raj Resort Palghar perfect for relaxation' },
    { src: '/images/pool2.webp', mobileSrc: '/images/mobile/pool2.jpg', category: 'Pool', alt: 'Beautiful view of the resort pool with exciting rain dance setup' },
    { src: '/images/pool3.webp', mobileSrc: '/images/mobile/pool3.jpg', category: 'Pool', alt: 'Relaxing poolside area with elegant seating at Raj Resort' },
    { src: '/images/pool5.webp', mobileSrc: '/images/mobile/pool5.jpg', category: 'Pool', alt: 'Swimming pool area surrounded by lush nature in Kelva' },
    // Rooms
    { src: '/images/rooms/ac-deluxe.webp', mobileSrc: '/images/mobile/rooms/ac-deluxe.jpg', category: 'Rooms', alt: 'Comfortable AC Deluxe Room with premium amenities at Raj Resort' },
    { src: '/images/rooms/family-room.webp', mobileSrc: '/images/mobile/rooms/family-room.jpg', category: 'Rooms', alt: 'Spacious AC Family Room with multiple beds for group stays' },
    { src: '/images/rooms/super-deluxe.webp', mobileSrc: '/images/mobile/rooms/super-deluxe.jpg', category: 'Rooms', alt: 'Cozy AC Standard Room for a relaxing beachside stay in Kelva' },
    { src: '/images/room.webp', mobileSrc: '/images/mobile/room.jpg', category: 'Rooms', alt: 'Interior view of a premium resort room perfect for couples' },
    { src: '/images/room3.webp', mobileSrc: '/images/mobile/room3.jpg', category: 'Rooms', alt: 'Well-lit and comfortable AC accommodation at Raj Resort' },
    { src: '/images/room4.webp', mobileSrc: '/images/mobile/room4.jpg', category: 'Rooms', alt: 'Spacious resort room with comfortable bedding and modern decor' },
    { src: '/images/roomsw.webp', mobileSrc: '/images/mobile/roomsw.jpg', category: 'Rooms', alt: 'Premium accommodation offering a relaxing stay near Kelva Beach' },
    { src: '/images/rooms/acroom.webp', mobileSrc: '/images/mobile/rooms/acroom.jpg', category: 'Rooms', alt: 'AC Economic Room for a budget-friendly beachside vacation' },
    // Garden/Lawn
    { src: '/images/rooms/garden-view.webp', mobileSrc: '/images/mobile/rooms/garden-view.jpg', category: 'Resort', alt: 'Lush green gardens and beautifully landscaped lawns at Raj Resort Palghar' },
    { src: '/images/lawnn.webp', mobileSrc: '/images/mobile/lawnn.jpg', category: 'Resort', alt: 'Expansive lawn space perfect for destination weddings and events' },
    // Dining
    { src: '/images/restaurant.webp', mobileSrc: '/images/mobile/restaurant.jpg', category: 'Dining', alt: 'In-house restaurant dining area serving authentic local cuisine at Raj Resort' },
    { src: '/images/resttaurant1.webp', mobileSrc: '/images/mobile/resttaurant1.jpg', category: 'Dining', alt: 'Comfortable restaurant interior setup for family dining' },
    { src: '/images/reataurnat3.webp', mobileSrc: '/images/mobile/reataurnat3.jpg', category: 'Dining', alt: 'Fine dining experience featuring delicious coastal Maharashtra dishes' },
    { src: '/images/reataurant4.webp', mobileSrc: '/images/mobile/reataurant4.jpg', category: 'Dining', alt: 'Spacious dining layout at Raj Resort Kelva Beach' },
  ];

  const categories = ['All', 'Resort', 'Rooms', 'Pool', 'Dining'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6"
          >
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Take a visual tour of Raj Resort and see what awaits you at Kelva Beach.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                ? 'bg-ocean text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-sandy/30 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={isMobile ? image.mobileSrc : image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-lg font-medium tracking-wide">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>

            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="font-serif text-xl mb-1">{filteredImages[lightboxIndex].alt}</p>
              <p className="text-sm text-white/60">{lightboxIndex + 1} / {filteredImages.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
