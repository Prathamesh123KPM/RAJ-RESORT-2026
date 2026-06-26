import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Raj Resort Kelva Beach",
    "description": "Contact Raj Resort to book your perfect Kelva Beach getaway. Find our phone number, email, and address. Reach out today for reservations and inquiries.",
    "url": "https://rajresortkelva.com/contact",
    "mainEntity": {
      "@type": "Resort",
      "name": "Raj Resort Kelva Beach",
      "telephone": "+919890165286",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "H.NO-2448, Jasodi, Near Kelva Beach, Kelwa Road",
        "addressLocality": "Palghar",
        "addressRegion": "Maharashtra",
        "postalCode": "401401",
        "addressCountry": "IN"
      }
    }
  };


  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        checkIn: '',
        checkOut: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <SEO
        title="Contact Us - Raj Resort Kelva Beach"
        description="Contact Raj Resort to book your perfect Kelva Beach getaway. Find our phone number, email, and address. Reach out today for reservations and inquiries."
        schema={contactPageSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6"
          >
            Contact & Booking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Ready to book your stay or have a question? Get in touch with us today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-ocean/10 p-3 rounded-full text-ocean shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                    <a href="tel:+919890165286" className="text-gray-600 hover:text-ocean transition-colors text-lg">
                      +91 9225102497
                      <br />
                      +91 9890165286
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-forest/10 p-3 rounded-full text-forest shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Email</h3>
                    <span className="text-gray-600 block">
                      Please use the booking request form.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sandy/30 p-3 rounded-full text-charcoal shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Address</h3>
                    <address className="leading-relaxed not-italic">
                      <a href="https://www.google.com/maps/place/Raj+Resort+Kelve+Beach/@19.6200397,72.7324351,17z/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-ocean transition-colors break-words">
                        H.NO-2448, Jasodi, Near Kelva Beach, Kelwa Road, Palghar, Maharashtra 401401
                      </a>
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-charcoal text-white p-8 rounded-2xl shadow-md">
              <h2 className="text-xl font-serif font-bold mb-4 text-sandy">Business Hours</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Check-in:</span>
                  <span className="font-medium text-white">12:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Check-out:</span>
                  <span className="font-medium text-white">10:00 AM</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Reception:</span>
                  <span className="font-medium text-white">24 Hours</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">Send a Booking Request</h2>

              {submitStatus === 'success' && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Send size={20} className="text-green-600" />
                  </div>
                  <p className="font-medium">Thank you! Your request has been sent. We will contact you shortly.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                  <p className="font-medium">Oops! Something went wrong. Please try calling us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean focus:border-ocean outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean focus:border-ocean outline-none transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean focus:border-ocean outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean focus:border-ocean outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean focus:border-ocean outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message / Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean focus:border-ocean outline-none transition-all resize-none"
                    placeholder="Tell us about your stay requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-lg text-white transition-all shadow-md flex items-center justify-center gap-2 ${isSubmitting ? 'bg-ocean/70 cursor-not-allowed' : 'bg-ocean hover:bg-ocean/90 hover:shadow-lg'
                    }`}
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-white"></span>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Request
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  * We will call you to confirm availability and pricing.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white p-4 md:p-6 rounded-2xl shadow-md border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-charcoal">Find Us on Google Maps</h2>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-sm">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.947776202815!2d72.73243507467839!3d19.620039734669206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7025e431104f7%3A0xf163edc0020f5ca5!2sRaj%20Resort%20Kelve%20Beach!5e1!3m2!1sen!2sin!4v1773984958556!5m2!1sen!2sin" width="100%" height="450" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
