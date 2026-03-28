import { motion } from 'motion/react';
import { Brush, Scissors, Camera, BriefcaseBusiness, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Brush className="text-primary" size={24} />,
    title: 'Professional Makeup Training',
    description: 'Foundation to advanced techniques for bridal, editorial, and event makeup with practical demos.',
  },
  {
    icon: <Scissors className="text-primary" size={24} />,
    title: 'Hair Styling Programs',
    description: 'Modern cutting, coloring, and styling methods designed for salon-ready performance.',
  },
  {
    icon: <Camera className="text-primary" size={24} />,
    title: 'Portfolio Development',
    description: 'Build a professional portfolio through guided shoots and real project presentations.',
  },
  {
    icon: <BriefcaseBusiness className="text-primary" size={24} />,
    title: 'Career Readiness Support',
    description: 'Interview preparation, profile reviews, and freelance/client onboarding support.',
  },
  {
    icon: <Users className="text-primary" size={24} />,
    title: 'Small Batch Mentorship',
    description: 'Personalized mentoring in smaller cohorts for stronger feedback and faster growth.',
  },
  {
    icon: <GraduationCap className="text-primary" size={24} />,
    title: 'Certification Track',
    description: 'Assessment-based course completion certificates to strengthen your professional credibility.',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <section className="mb-14">
          <p className="text-primary text-sm uppercase tracking-wider font-semibold mb-4">Services</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 max-w-4xl">
            Skill-first training services designed for real-world career outcomes.
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            From core technical mastery to career launch support, our services are structured to help you learn, build confidence, and start earning from your craft.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold mb-3">{service.title}</h2>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </section>

        <section className="bg-primary rounded-[2.5rem] p-10 md:p-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need help choosing the right training?</h2>
          <p className="text-white/80 max-w-2xl mb-8">
            Tell us your goal and background. We will recommend a learning path that fits your timeline and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-white text-primary font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition-colors w-fit">
              Talk to an Advisor
            </Link>
            <Link to="/courses" className="border border-white/40 px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors w-fit">
              View Courses
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
