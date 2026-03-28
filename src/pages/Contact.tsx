import type { FormEvent } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success('Message sent successfully!', {
      description: 'Our team will get back to you shortly.',
    });
    event.currentTarget.reset();
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm">
          <p className="text-primary text-sm uppercase tracking-wider font-semibold mb-4">Contact</p>
          <h1 className="text-4xl font-bold mb-4">Let's Talk</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Have a question about admissions, course schedules, or pricing? Send us a message and our support team will help you.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-500">hello@lillyangel.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-500">+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-500">123 Training Way, Education City</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-semibold text-gray-700 mb-2 block">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary outline-none resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button type="submit" className="btn-primary w-full py-3">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
