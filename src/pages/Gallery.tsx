import { motion } from 'motion/react';

const galleryItems = [
  {
    title: 'Bridal Makeup Showcase',
    category: 'Makeup',
    image: 'https://picsum.photos/seed/bridal-art/900/600',
  },
  {
    title: 'Creative Editorial Looks',
    category: 'Editorial',
    image: 'https://picsum.photos/seed/editorial-art/900/600',
  },
  {
    title: 'Hair Styling Workshop',
    category: 'Hair',
    image: 'https://picsum.photos/seed/hair-workshop/900/600',
  },
  {
    title: 'Student Practical Session',
    category: 'Classroom',
    image: 'https://picsum.photos/seed/practical-class/900/600',
  },
  {
    title: 'Portfolio Photo Day',
    category: 'Portfolio',
    image: 'https://picsum.photos/seed/portfolio-day/900/600',
  },
  {
    title: 'Certification Ceremony',
    category: 'Events',
    image: 'https://picsum.photos/seed/cert-event/900/600',
  },
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <section className="mb-14">
          <p className="text-primary text-sm uppercase tracking-wider font-semibold mb-4">Gallery</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 max-w-4xl">
            A glimpse into student work, classroom energy, and transformation stories.
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            Explore snapshots from workshops, practical sessions, and portfolio projects created during training.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-gray-100 overflow-hidden bg-gray-50"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{item.category}</p>
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </div>
  );
}
