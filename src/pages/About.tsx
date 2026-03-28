import { motion } from 'motion/react';
import { Award, Users, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <Award className="text-primary" size={22} />,
    title: 'Industry-Focused Training',
    description: 'Our programs are built around real client demands and practical, employable skills.',
  },
  {
    icon: <Users className="text-primary" size={22} />,
    title: 'Mentor-Led Learning',
    description: 'Learn directly from professionals who have trained hundreds of successful students.',
  },
  {
    icon: <BookOpen className="text-primary" size={22} />,
    title: 'Hands-On Curriculum',
    description: 'Every course combines lessons, projects, and feedback so you can apply what you learn immediately.',
  },
  {
    icon: <Sparkles className="text-primary" size={22} />,
    title: 'Career Growth Support',
    description: 'From portfolio building to interview readiness, we help learners move forward with confidence.',
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <section className="mb-20">
          <p className="text-primary text-sm uppercase tracking-wider font-semibold mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            We help learners build practical skills that create real career opportunities.
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            Lilly Angel Training started with one mission: to make high-quality, industry-relevant education accessible and practical.
            Our classes are designed to move beyond theory and focus on the kind of work professionals do every day.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value) => (
            <motion.article
              key={value.title}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                {value.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3">{value.title}</h2>
              <p className="text-gray-500 leading-relaxed">{value.description}</p>
            </motion.article>
          ))}
        </section>

        <section className="bg-primary rounded-[2.5rem] p-10 md:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to learn with us?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            Explore our course catalog and find the right path for your goals, schedule, and career ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/courses" className="bg-white text-primary font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition-colors w-fit">
              Browse Courses
            </Link>
            <Link to="/contact" className="border border-white/50 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-colors w-fit">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
