import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

export default function Blog() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const safeISODate = (dateStr: string) => {
        try {
            const d = new Date(dateStr);
            if (!isNaN(d.getTime())) {
                return d.toISOString().split('T')[0];
            }
        } catch (e) {}
        return "2026-06-01";
    };

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Raj Resort Kelva Beach Blog",
        "description": "Read the latest travel tips, local guides, and resort updates from Raj Resort Kelva Beach.",
        "url": "https://rajresortkelva.com/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Raj Resort Kelva Beach",
            "logo": {
                "@type": "ImageObject",
                "url": "https://rajresortkelva.com/images/logo.png"
            }
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.summary,
            "datePublished": safeISODate(post.date),
            "url": `https://rajresortkelva.com/blog/${post.slug}`,
            "image": post.image
        }))
    };


    return (
        <div className="pt-24 pb-20 bg-gray-50">
            <SEO
                title="Blog | Raj Resort Kelva Beach - Tips & Local Guide"
                description="Read the latest travel tips, local guides, and resort updates from Raj Resort Kelva Beach."
                schema={blogSchema}
            />
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
