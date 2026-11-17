import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <SEO
        title="Privacy Policy & Terms | Raj Resort Kelva Beach"
        description="Read the privacy policy, guest booking guidelines, and terms of service for Raj Resort Kelva Beach, Palghar."
        keywords="raj resort privacy policy, terms of service raj resort kelva, booking terms kelva resort"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-ocean transition-colors"
          >
            <ChevronLeft size={16} /> Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-ocean/10 text-ocean flex items-center justify-center shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">
                Privacy Policy &amp; Terms
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Last updated: November 2026 &bull; Raj Resort Kelva Beach
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-charcoal mb-3">1. Guest Information &amp; Privacy</h2>
              <p>
                At <strong>Raj Resort Kelva Beach</strong>, your privacy and trust are paramount. Any personal details provided via our website booking forms, telephone inquiries, or WhatsApp chat (including your name, phone number, email, and travel dates) are used exclusively to confirm room availability, process your reservation, and ensure a comfortable stay. We do not sell, rent, or distribute guest data to third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal mb-3">2. Check-in &amp; Check-out Policies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Standard Check-in Time:</strong> 12:00 PM</li>
                <li><strong>Standard Check-out Time:</strong> 10:00 AM the following morning</li>
                <li><strong>Government ID:</strong> In accordance with local regulations, all adult guests must present a valid government-issued photo ID (Aadhar Card, Driving License, Voter ID, or Passport) upon check-in.</li>
                <li><strong>Early Check-in / Late Check-out:</strong> Subject to room availability and prior coordination with resort management.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal mb-3">3. Swimming Pool &amp; Rain Dance Safety Guidelines</h2>
              <p>
                For the safety and hygiene of all guests:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proper synthetic or nylon swimwear is required for entry into the swimming pool.</li>
                <li>Children under 12 years of age must be accompanied and supervised by an adult at all times.</li>
                <li>Glassware, bottles, and food items are strictly prohibited inside the pool and rain dance arena.</li>
                <li>Diving into shallow ends is strictly prohibited.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal mb-3">4. Reservation &amp; Cancellation Policy</h2>
              <p>
                Reservations are confirmed upon payment of the agreed advance deposit. In case of unexpected changes or rescheduling requests, guests are requested to inform our booking desk at least 48 hours in advance so we can assist with alternative dates subject to availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal mb-3">5. Contact &amp; Grievances</h2>
              <p>
                For any questions regarding your booking, stay policies, or feedback, please contact us directly:
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 space-y-1">
                <p><strong>Raj Resort Kelva Beach</strong></p>
                <p>H.NO-2448, Jasodi, Near Kelva Beach, Kelwa Road, Palghar, Maharashtra 401401</p>
                <p>Telephone: <a href="tel:+919890165286" className="text-ocean font-bold">+91 9890165286</a> / +91 9225102497</p>
                <p>Email: booking inquiries via our <Link to="/contact" className="text-ocean underline">Contact Page</Link></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
