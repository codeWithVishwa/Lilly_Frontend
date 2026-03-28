import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Users, Award, BookOpen, CheckCircle2, ShieldCheck, CalendarClock, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../asset/Hero.jpeg'

export default function Home() {
  const [storiesPaused, setStoriesPaused] = useState(false);
  const testimonials = [
    {
      name: 'Nivetha R.',
      role: 'Freelance Makeup Artist',
      quote: 'The practical sessions gave me the confidence to take paid clients within two months.'
    },
    {
      name: 'Pranav S.',
      role: 'Junior Marketing Associate',
      quote: 'Clear modules and assignments helped me switch into digital marketing quickly.'
    },
    {
      name: 'Ananya K.',
      role: 'Salon Stylist',
      quote: 'I upgraded my styling techniques and increased my appointment bookings significantly.'
    },
    {
      name: 'Harish V.',
      role: 'Bridal Artist',
      quote: 'The mentor feedback after every practice session helped me improve faster than I expected.'
    },
    {
      name: 'Keerthana M.',
      role: 'Beauty Studio Owner',
      quote: 'After completing the course, I restructured my services and doubled my monthly bookings.'
    },
    {
      name: 'Sanjana P.',
      role: 'Certified Makeup Professional',
      quote: 'The certification track gave me a clear roadmap and strong confidence for client work.'
    },
    {
      name: 'Rohit D.',
      role: 'Digital Campaign Executive',
      quote: 'The projects were practical and portfolio-ready, which helped me crack interviews quickly.'
    },
    {
      name: 'Mahalakshmi T.',
      role: 'Freelance Hair Stylist',
      quote: 'I learned modern styling techniques that immediately improved my service quality and pricing.'
    },
    {
      name: 'Deepak N.',
      role: 'Salon Team Lead',
      quote: 'The structured modules made it easy to train my junior staff and standardize our client process.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-48 px-6 bg-black text-white min-h-[100vh] flex items-center">
        {/* Background Image Placeholder - User will add Hero.jpeg here */}
        <div className="absolute inset-0 z-0 opacity-60">
           <img src="/src/asset/Hero.jpeg" className="w-full h-full object-cover" alt="Hero" /> 
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-primary bg-primary/20 rounded-full">
              Excellence in Training
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Elevate Your Skills with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Lilly Angel Training
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Professional courses designed to help you master new skills and advance your career. Join thousands of successful students today.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link to="/courses" className="btn-primary flex items-center gap-2 group">
                Explore Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portal" className="btn-outline border-white text-white hover:bg-white hover:text-black">
                Student Portal
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 relative"
          >
            {/* Floating Stats */}
            <div className="absolute -bottom-10 left-0 hidden lg:block glass-card p-6 rounded-2xl animate-float bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">5,000+</p>
                  <p className="text-sm text-gray-400">Active Students</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We provide the tools and support you need to succeed in your professional journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-primary" />,
                title: "Certified Excellence",
                desc: "All our courses are recognized and certified by industry leaders."
              },
              {
                icon: <BookOpen className="text-primary" />,
                title: "Expert Instructors",
                desc: "Learn from professionals with years of real-world experience."
              },
              {
                icon: <CheckCircle2 className="text-primary" />,
                title: "Flexible Learning",
                desc: "Study at your own pace with our comprehensive online portal."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A simple, guided process that takes you from beginner to confident professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Path',
                desc: 'Browse curated courses and pick the program that matches your goals and schedule.'
              },
              {
                step: '02',
                title: 'Learn with Experts',
                desc: 'Join live sessions, practical workshops, and recorded lessons built for real outcomes.'
              },
              {
                step: '03',
                title: 'Build Your Career',
                desc: 'Complete projects, earn certifications, and apply your skills with confidence.'
              }
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ y: -6 }}
                className="border border-gray-100 bg-gray-50 rounded-3xl p-8"
              >
                <p className="text-primary font-bold text-sm mb-4 tracking-widest">STEP {item.step}</p>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hear from learners who transformed their skills and careers with us.
            </p>
          </div>

          <div className="overflow-hidden">
            <div
              onClick={() => setStoriesPaused((prev) => !prev)}
              className="relative cursor-pointer select-none"
              aria-label="Toggle success stories autoplay"
            >
              <div className={`stories-track ${storiesPaused ? 'paused' : ''}`}>
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <article
                  key={`${testimonial.name}-${i}`}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm w-[320px] md:w-[360px] flex-shrink-0"
                >
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </article>
              ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                Click to {storiesPaused ? 'resume' : 'pause'} autoplay
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore More</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Dive deeper into our training ecosystem through services, student work, and guidance resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Training Services',
                description: 'Discover mentorship tracks, practical workshops, and certification support.',
                link: '/services',
                cta: 'View Services'
              },
              {
                title: 'Student Gallery',
                description: 'See portfolio projects and real outcomes from our training sessions.',
                link: '/gallery',
                cta: 'Open Gallery'
              },
              {
                title: 'FAQs & Guidance',
                description: 'Get quick answers about formats, fees, certification, and enrollment.',
                link: '/faq',
                cta: 'Read FAQs'
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-8"
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{item.description}</p>
                <Link to={item.link} className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  {item.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Learning Categories</h2>
              <p className="text-gray-500 max-w-2xl">
                Choose from in-demand specializations designed for quick skill growth and better career outcomes.
              </p>
            </div>
            <Link to="/courses" className="text-primary font-semibold inline-flex items-center gap-2 w-fit hover:gap-3 transition-all">
              Browse All Categories <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Beauty & Makeup', courses: '18 Courses' },
              { title: 'Hair & Styling', courses: '12 Courses' },
              { title: 'Digital Marketing', courses: '10 Courses' },
              { title: 'Business Communication', courses: '9 Courses' },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-5">{item.courses}</p>
                <Link to="/courses" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Explore <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Tracks Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-10">
            <p className="text-primary uppercase text-sm tracking-wider font-semibold mb-4">Certification Tracks</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Prepare with structure, practice, and expert feedback.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our certification-focused learning plans combine instructor sessions, mock assessments, and revision roadmaps to keep you exam-ready.
            </p>

            <div className="space-y-4">
              {[
                'Weekly guided mentorship sessions',
                'Practice tests with detailed performance review',
                'Final capstone and interview preparation',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-primary mt-1" />
                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white rounded-[2.5rem] p-8 md:p-10">
            <p className="uppercase text-sm tracking-wider text-white/80 font-semibold mb-4">Corporate & Team Upskilling</p>
            <h3 className="text-3xl font-bold mb-5">Customized training plans for salons, academies, and business teams.</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              We design role-based cohorts with flexible timing, progress tracking, and certification support for teams.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Private team batches',
                'On-site and hybrid delivery options',
                'Manager dashboard and progress reports',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <BriefcaseBusiness size={18} className="mt-1" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <Link to="/contact" className="bg-white text-primary font-semibold px-7 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Request Team Training <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Workshops</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Short intensive sessions to sharpen key skills and stay current with industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { title: 'Bridal Masterclass Intensive', date: '12 Apr 2026', mode: 'Offline - Chennai' },
              { title: 'Instagram Growth for Beauty Brands', date: '18 Apr 2026', mode: 'Live Online' },
              { title: 'Salon Client Consultation Pro', date: '24 Apr 2026', mode: 'Hybrid' },
            ].map((event) => (
              <motion.div
                key={event.title}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <CalendarClock size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-500 mb-1">{event.date}</p>
                <p className="text-gray-500 mb-6">{event.mode}</p>
                <Link to="/contact" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Reserve Spot <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Join our community of learners and take the first step towards mastering your craft.
            </p>
            <Link to="/courses" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
