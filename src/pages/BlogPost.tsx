import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { blogPosts } from './Blog';
import { useEffect, useState } from 'react';

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (post) {
            document.title = `${post.title} | Raj Resort Blog`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute("content", post.summary);
            }
        }
        window.scrollTo(0, 0);
    }, [post]);

    if (!post) return null;

    const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs / Back */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-ocean transition-colors gap-2 font-medium">
                        <ChevronLeft size={20} /> Back to Blog
                    </Link>
                </motion.div>

                {/* Post Content */}
                <article>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                            <span className="flex items-center gap-1.5">
                                <Calendar size={16} /> {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <User size={16} /> By {post.author}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-8 leading-tight">
                            {post.title}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12"
                    >
                        <img
                            src={`${post.image}&w=${isMobile ? 800 : 2070}`}
                            alt={`Cover image for blog post: ${post.title} at Raj Resort Kelva`}
                            className="w-full h-full object-cover"
                            width={1200}
                            height={600}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-lg max-w-none text-gray-600 mb-16"
                    >
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </motion.div>

                    {/* Social Share */}
                    <div className="border-t border-b border-gray-100 py-8 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="text-charcoal font-bold text-lg">Did you enjoy this article? Share it!</div>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-ocean hover:text-white transition-all">
                                <Facebook size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-ocean hover:text-white transition-all">
                                <Twitter size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-ocean hover:text-white transition-all">
                                <LinkIcon size={18} />
                            </button>
                        </div>
                    </div>
                </article>

                {/* Other Posts */}
                <div>
                    <h2 className="text-2xl font-serif font-bold text-charcoal mb-8">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {otherPosts.map((otherPost) => (
                            <Link
                                key={otherPost.id}
                                to={`/blog/${otherPost.slug}`}
                                className="group flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                                    <img 
                                        src={`${otherPost.image}&w=200`} 
                                        alt={`Thumbnail for related article: ${otherPost.title}`} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal mb-2 group-hover:text-ocean transition-colors line-clamp-2">
                                        {otherPost.title}
                                    </h3>
                                    <p className="text-xs text-gray-400">{otherPost.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
