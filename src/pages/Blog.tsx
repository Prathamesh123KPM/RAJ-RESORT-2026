import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export const blogPosts = [
    {
        id: 1,
        title: 'Top 5 Things to Do at Kelva Beach',
        slug: 'top-5-things-to-do-at-kelva-beach',
        summary: 'Discover the best activities at Kelva Beach, from water sports to visiting the historic Kelva Fort. Experience the local culture and breathtaking sunsets.',
        content: `
      <p>Kelva Beach is not just a place to relax; it's a destination filled with adventure and history. Here are the top 5 things you must do when you visit:</p>
      
      <h2>1. Visit Kelva Fort</h2>
      <p>A historic landmark located right on the beach, the Kelva Fort offers a glimpse into the past. It's especially beautiful during high tide when the water surrounds its base.</p>
      
      <h2>2. Enjoy Water Sports</h2>
      <p>For the thrill-seekers, Kelva offers various water sports including jet skiing and banana boat rides. The calm waters make it a safe spot for beginners as well.</p>
      
      <h2>3. Sunset Camel Rides</h2>
      <p>Experience the beach like never before with a traditional camel ride along the shore as the sun sets over the Arabian Sea. It's a favorite for families and kids.</p>
      
      <h2>4. Explore the Local Market</h2>
      <p>Just a short walk from the beach, the local market in Kelwa village is perfect for picking up fresh local produce and unique handmade souvenirs.</p>
      
      <h2>5. Visit Shitla Devi Temple</h2>
      <p>A peaceful and spiritual experience, this ancient temple dedicated to Goddess Shitla Devi is a significant cultural site in the region.</p>
    `,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop',
        date: 'March 10, 2024',
        author: 'Raj Resort Team'
    },
    {
        id: 2,
        title: 'Experience Paradise: Why Raj Resort is Your Best Beachfront Getaway',
        slug: 'why-raj-resort-is-the-best-beachfront-getaway',
        summary: 'Learn why Raj Resort is the perfect choice for families and couples seeking a relaxing beach holiday. From premium amenities to personalized service, we have it all.',
        content: `
      <p>Finding the perfect vacation spot can be challenging, but Raj Resort makes the choice easy. Here is why we are considered the best beachfront getaway at Kelva Beach:</p>
      
      <h2>Premium AC Accommodations</h2>
      <p>Our rooms are designed for comfort. Whether you choose a Deluxe Room or a Family Suite, you'll find modern amenities, clean interiors, and a welcoming atmosphere that feels like home.</p>
      
      <h2>Poolside Relaxation</h2>
      <p>Our swimming pool is the heart of the resort. Complete with a rain dance setup, it's the perfect place to cool off after a day on the beach or to enjoy a fun afternoon with your family.</p>
      
      <h2>Authentic Local Cuisine</h2>
      <p>Our in-house restaurant serves the finest local and multi-cuisine dishes. We take pride in our fresh seafood and traditional Maharashtrian vegetarian meals.</p>
      
      <h2>Exceptional Service</h2>
      <p>At Raj Resort, our guests are our priority. Our staff is dedicated to ensuring your stay is comfortable, memorable, and hassle-free.</p>
    `,
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop',
        date: 'March 8, 2024',
        author: 'Management'
    },
    {
        id: 3,
        title: 'A Guide to Local Cuisine at Kelva Beach',
        slug: 'guide-to-local-cuisine-at-kelva-beach',
        summary: 'Explore the delicious seafood and local vegetarian dishes you must try during your visit to Palghar. Taste the authentic flavors of coastal Maharashtra.',
        content: `
      <p>One of the highlights of visiting Kelva Beach is the food. The region is famous for its unique coastal flavors. Here's what you shouldn't miss:</p>
      
      <h2>Fresh Seafood</h2>
      <p>Being a coastal village, Kelwa offers some of the freshest seafood you can find. From Pomfret fry to Surmai curry, the options are endless and delicious.</p>
      
      <h2>Vada Pav & Local Snacks</h2>
      <p>No trip to Maharashtra is complete without the iconic Vada Pav. Many local stalls near the beach serve hot, spicy snacks that are perfect for a quick bite.</p>
      
      <h2>Traditional Maharashtrian Thali</h2>
      <p>Experience a full range of flavors with a traditional Thali, featuring Bhakri (local flatbread), Pithla, and various vegetable preparations seasoned with local spices.</p>
      
      <h2>Chikoo Products</h2>
      <p>The Palghar region is known for its Chikoo (Sapota) plantations. Don't forget to try fresh Chikoo shakes or pick up some Chikoo-based sweets before you leave.</p>
    `,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2070&auto=format&fit=crop',
        date: 'March 5, 2024',
        author: 'Chef Anand'
    },
    {
        id: 4,
        title: 'Best Resort in Kelva for Family: A Complete Guide',
        slug: 'best-resort-in-kelva-for-family',
        summary: 'Planning a family trip? Discover why Raj Resort is the ultimate destination for a family vacation in Kelva, featuring safe AC rooms, a large swimming pool, and dedicated play areas for kids.',
        content: `
      <p>When searching for the <strong>best resort in Kelva for family</strong> getaways, parents want a blend of safety, relaxation, and entertainment. Raj Resort is specifically designed to cater to families of all sizes, ensuring a memorable vacation for toddlers, teens, and adults alike.</p>
      
      <h2>1. Spacious Family Suites</h2>
      <p>Comfort is key on a family trip. Our premium AC accommodations include dedicated family suites that offer plenty of room for everyone to relax after a fun day at the beach.</p>
      
      <h2>2. Safe & Fun Swimming Pool</h2>
      <p>Kids love water, and parents love safety! Our large swimming pool features a safe shallow end for the little ones and an exciting rain dance setup that the whole family can enjoy together.</p>
      
      <h2>3. Kid-Friendly Meals</h2>
      <p>Picky eaters? No problem. Our in-house restaurant serves a variety of delicious, kid-approved dishes alongside authentic local cuisine that adults will savor.</p>
      
      <h2>4. Proximity to Kelva Beach Activities</h2>
      <p>Located just minutes from the shore, reaching the beach for morning sandcastle building or sunset camel rides is effortless when you stay with us.</p>
      
      <p>Choose Raj Resort for your next holiday and see why we are highly rated as the best family resort in the area!</p>
    `,
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop',
        date: 'March 18, 2024',
        author: 'Raj Resort Team'
    },
    {
        id: 5,
        title: 'Top Wedding Resorts in Palghar: Your Dream Destination',
        slug: 'wedding-resorts-in-palghar',
        summary: 'Plan your dream destination wedding at Raj Resort in Palghar. We offer spacious outdoor lawns, premium accommodations for guests, and complete event management services for a flawless celebration.',
        content: `
      <p>Finding the perfect venue is the most crucial step in wedding planning. If you are exploring <strong>wedding resorts in Palghar</strong>, look no further than Raj Resort. We provide a magical setting for your special day, combining coastal charm with premium hospitality.</p>
      
      <h2>Spacious Outdoor Lawns</h2>
      <p>Our expansive, well-maintained lawns can comfortably accommodate large gatherings. Whether it's a grand evening reception or a vibrant Haldi ceremony, our outdoor spaces provide a stunning backdrop.</p>
      
      <h2>Comfortable Guest Accommodations</h2>
      <p>Hosting a destination wedding shouldn't mean compromising on comfort. We offer a range of premium AC rooms to ensure all your relatives and guests are completely comfortable during the festivities.</p>
      
      <h2>Catering & Banquet Services</h2>
      <p>Food is the heart of any Indian wedding. Our expert culinary team will craft a customized menu featuring a wide variety of cuisines, ensuring a delightful feast for your guests.</p>
      
      <h2>Picturesque Photography Spots</h2>
      <p>From the poolside to the lush gardens and the nearby Kelva Beach, the resort offers numerous beautiful locations for unforgettable pre-wedding and wedding photography.</p>
      
      <p>Let us make your wedding day truly extraordinary at Raj Resort!</p>
    `,
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
        date: 'March 15, 2024',
        author: 'Event Management Team'
    },
    {
        id: 6,
        title: 'The Ultimate 1 Day Picnic Resort in Kelva',
        slug: '1-day-picnic-resort-in-kelva',
        summary: 'Looking for a quick weekend escape? Enjoy a fantastic 1-day picnic at Raj Resort Kelva with unlimited food, rain dance, and pool access, just a short drive from Mumbai.',
        content: `
      <p>Sometimes you just need a break from the city, even if it's only for a day. Raj Resort is the premier <strong>1 day picnic resort in Kelva</strong>, offering a complete package of fun, relaxation, and delicious food without the need for an overnight stay.</p>
      
      <h2>All-Inclusive Day Packages</h2>
      <p>Our one-day picnic packages are designed to give you maximum value. They typically include a welcoming breakfast, a hearty lunch featuring local specialties, and evening hi-tea with snacks.</p>
      
      <h2>Full Pool & Rain Dance Access</h2>
      <p>Escape the heat and dive into our large swimming pool! The highlight of the day is often our energetic rain dance setup, complete with music that will get everyone moving.</p>
      
      <h2>Easy Weekend Escape</h2>
      <p>Located just a couple of hours' drive from Mumbai and well-connected by train, reaching Kelva Beach is quick and stress-free. You can leave in the morning, have a full day of fun, and be back home by evening.</p>
      
      <h2>Relaxing Environment</h2>
      <p>If you prefer a quieter day, you can relax in our shaded seating areas, take a leisurely stroll to the nearby beach, or simply unwind and enjoy the coastal breeze.</p>
      
      <p>Book your 1-day picnic at Raj Resort today and recharge your batteries!</p>
    `,
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop',
        date: 'March 12, 2024',
        author: 'Raj Resort Team'
    },
    {
        id: 7,
        title: 'Family Trip or Friends Getaway? Why Raj Resort is Perfect for Every Occasion',
        slug: 'family-trip-or-friends-getaway-raj-resort',
        summary: 'Whether you\'re planning a serene family vacation or an action-packed getaway with friends, Raj Resort at Kelva Beach offers the perfect blend of relaxation, fun, and coastal charm.',
        content: `
      <p>Planning a trip can often feel like a balancing act. Families look for safety, comfort, and activities for kids, while groups of friends prioritize fun, adventure, and social spaces. At <strong>Raj Resort</strong>, we pride ourselves on being the rare destination that masterfully caters to both.</p>
      
      <h2>For Families: A Home Away From Home</h2>
      <p>When you travel with family, the details matter. Our <strong>spacious family suites</strong> are designed to keep everyone together while providing the privacy and comfort you need. But it's not just about the rooms—it's about the experience.</p>
      <ul>
        <li><strong>Safe Swimming:</strong> Our pool features a dedicated shallow end for children, allowing parents to relax while the little ones splash safely.</li>
        <li><strong>Peaceful Proximity:</strong> Located just steps from the quiet reaches of Kelva Beach, you can enjoy morning walks or sandcastle sessions without the stress of long travel.</li>
        <li><strong>Kid-Friendly Dining:</strong> Our in-house restaurant offers a menu that pleases even the pickiest of eaters, ensuring everyone leaves the table happy.</li>
      </ul>
      
      <h2>For Friends: The Ultimate Weekend Escape</h2>
      <p>For those visiting with friends, Raj Resort transforms into a vibrant hub of energy. We know that group trips are about creating shared memories, and our facilities are built for exactly that.</p>
      <ul>
        <li><strong>Rain Dance & Music:</strong> Kick off the afternoon with our energetic rain dance setup. It’s the perfect way for your group to let loose and enjoy the coastal vibe.</li>
        <li><strong>Group Dining & Late Night Conversations:</strong> Our restaurant and garden areas provide the ideal setting for long dinners and late-night catch-ups over delicious local cuisine.</li>
        <li><strong>Adventure Awaits:</strong> From beach volleyball to exploring the nearby Kelva Fort, there’s never a dull moment for an active group of friends.</li>
      </ul>
      
      <h2>Why Choose Raj Resort?</h2>
      <p>What truly sets us apart is our <strong>versatility</strong>. We understand that "perfect" means different things to different people. Our team is trained to provide personalized service that respects the quiet needs of a family and the high-energy expectations of a friend group.</p>
      
      <p>Whether you’re celebrating a milestone, planning a reunion, or just need a break from the city, Raj Resort is ready to welcome you. <strong>Book your stay today</strong> and discover why we are the preferred choice for every occasion at Kelva Beach!</p>
    `,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
        date: 'April 20, 2024',
        author: 'Raj Resort Team'
    },
    {
        id: 8,
        title: '5 Reasons Why Kelva Beach is the Hidden Gem Near Mumbai You Must Visit',
        slug: '5-reasons-why-kelva-beach-is-the-hidden-gem',
        summary: 'Escape the city\'s hustle and bustle and discover why Kelva Beach is the ultimate coastal secret waiting to be explored.',
        content: `
      <p>Living in Mumbai often means searching for the perfect weekend getaway—one that is close enough to reach quickly but far enough to forget the city's frantic pace. While Alibaug and Lonavala are the usual suspects, <strong>Kelva Beach</strong> is the hidden gem that savvy travelers are now discovering. Here are 5 reasons why you must visit this coastal secret.</p>
      
      <h2>1. Untouched Natural Beauty</h2>
      <p>Unlike many crowded beaches near Mumbai, Kelva Beach retains a pristine, untouched feel. With its vast coastline and golden sands, you’ll find plenty of space to enjoy the sound of the waves without the noise of massive crowds. It’s the perfect place for those seeking tranquility.</p>
      
      <h2>2. The Surrounding Casuarina (Suru) Plantation</h2>
      <p>One of the most striking features of Kelva is the dense forest of Casuarina trees that lines the beach. These trees provide natural shade, a cool breeze, and a picturesque backdrop that is perfect for photography or a peaceful afternoon stroll.</p>
      
      <h2>3. Historical Significance: Kelva Fort</h2>
      <p>For history buffs, the Kelva Fort is a must-see. Located on the southern end of the beach, this historic structure offers a glimpse into the region’s past and provides stunning views of the Arabian Sea, especially during sunset.</p>
      
      <h2>4. Authentic Coastal Flavors</h2>
      <p>The food at Kelva is a journey in itself. From fresh-off-the-boat seafood to traditional Maharashtrian vegetarian thalis, the local flavors are bold, authentic, and incredibly satisfying. Don't forget to try the local 'Chikoo' products from the nearby orchards!</p>
      
      <h2>5. Stress-Free Accessibility</h2>
      <p>Kelva is remarkably easy to reach. Whether you take a scenic 2-hour drive from Mumbai or a quick train ride to Palghar or Kelwa Road station, you can be on the beach by noon and fully relaxed before the weekend even truly begins.</p>
      
      <p>Ready to explore the hidden gem of the Konkan coast? <strong>Raj Resort</strong> is located just minutes from these attractions, making us the perfect base for your Kelva adventure. <strong>Plan your visit today!</strong></p>
    `,
        image: 'https://images.unsplash.com/photo-1544918877-460635b6d13e?q=80&w=2070&auto=format&fit=crop',
        date: 'April 20, 2024',
        author: 'Raj Resort Team'
    },
    {
        id: 9,
        title: 'From Sunrise to Sunset: A Perfect Day Itinerary at Raj Resort Kelva',
        slug: 'a-perfect-day-itinerary-at-raj-resort-kelva',
        summary: 'Maximize your coastal getaway with our hour-by-hour guide to the perfect day at Raj Resort, from dawn by the shore to a cozy starlit dinner.',
        content: `
      <p>Ever wondered what a perfect 24 hours looks like at Raj Resort? Whether you're here for a quick weekend refresh or a longer holiday, here is our recommended itinerary to ensure you experience the very best of Kelva Beach from sunrise to sunset.</p>
      
      <h2>7:00 AM – The Golden Hour Walk</h2>
      <p>Start your day with a short 5-minute walk to Kelva Beach. The early morning air is remarkably fresh, and the sight of the sun rising over the Casuarina trees is unparalleled. It’s the best time for a peaceful meditative walk or some beach-side yoga.</p>
      
      <h2>9:00 AM – Coastal Breakfast</h2>
      <p>Head back to the resort for a hearty breakfast. Our restaurant serves hot local favorites like Poha and Misal Pav, alongside classic eggs and toast. Fuel up for an active day ahead!</p>
      
      <h2>11:00 AM – Poolside Fun & Rain Dance</h2>
      <p>As the day gets warmer, dive into our large swimming pool. Don't miss the energetic rain dance session—it's the highlight for kids and adults alike. It's the perfect way to cool off and build up an appetite for lunch.</p>
      
      <h2>1:30 PM – Authentic Maharashtrian Lunch</h2>
      <p>Indulge in a traditional coastal lunch. We recommend our signature Thali, featuring fresh local seafood or delicious seasonal vegetables. The flavors are authentic, and the portions are generous.</p>
      
      <h2>4:30 PM – Kelva Fort Exploration</h2>
      <p>As the afternoon sun mellows, take a trip to the historic Kelva Fort. It's a short distance away and offers a fascinating look into the region's heritage. The views of the coastline from the fort walls are breathtaking.</p>
      
      <h2>6:30 PM – Sunset & Camel Rides</h2>
      <p>Head back to the beach for the main event—the sunset. Enjoy a traditional camel or horse carriage ride along the vast shoreline as the sky turns shades of orange and pink. It's the quintessential Kelva experience.</p>
      
      <h2>8:30 PM – Starlit Dinner</h2>
      <p>End your perfect day with a quiet dinner at our garden area under the stars. Enjoy multi-cuisine delicacies and reflect on the memories made throughout the day before retreating to your comfortable AC suite.</p>
      
      <p><strong>Ready to experience your perfect day?</strong> Raj Resort is waiting to make it happen. <strong>Book your stay now</strong> and let our team take care of the rest!</p>
    `,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop',
        date: 'April 20, 2024',
        author: 'Raj Resort Team'
    }
];

export default function Blog() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.title = "Blog | Raj Resort Kelva Beach - Tips & Local Guide";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Read the latest travel tips, local guides, and resort updates from Raj Resort Kelva Beach.");
        }
    }, []);

    return (
        <div className="pt-24 pb-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4"
                    >
                        Raj Resort Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Insights, travel tips, and the latest updates from the heart of Kelva Beach.
                    </motion.p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full group"
                        >
                            <Link to={`/blog/${post.slug}`} className="relative h-60 overflow-hidden">
                                <img
                                    src={`${post.image}&w=${isMobile ? 800 : 2070}`}
                                    alt={`Featured image for article: ${post.title}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    width={400}
                                    height={240}
                                />
                                <div className="absolute top-4 left-4 bg-ocean text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    Travel Guide
                                </div>
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User size={14} /> {post.author}
                                    </span>
                                </div>

                                <h2 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-ocean transition-colors">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>

                                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                                    {post.summary}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-ocean font-semibold gap-2 hover:gap-3 transition-all"
                                    >
                                        Read More <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
