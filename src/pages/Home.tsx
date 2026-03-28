import { motion } from 'motion/react';
import { ArrowRight, Star, Users, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/src/asset/Hero.jpeg'

export default function Home() {
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
