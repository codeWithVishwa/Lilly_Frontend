import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Clock, Users, Star, ArrowRight, X, Check } from 'lucide-react';
import { toast } from 'sonner';

const COURSES = [
  {
    id: 1,
    title: "Professional Makeup Artistry",
    category: "Beauty",
    price: 499,
    duration: "6 Weeks",
    students: 120,
    rating: 4.8,
    image: "https://picsum.photos/seed/makeup/600/400",
    description: "Master the art of professional makeup from basic techniques to advanced bridal and editorial looks."
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    category: "Business",
    price: 299,
    duration: "4 Weeks",
    students: 450,
    rating: 4.9,
    image: "https://picsum.photos/seed/marketing/600/400",
    description: "Learn SEO, social media marketing, and content strategy to grow any business online."
  },
  {
    id: 3,
    title: "Advanced Hair Styling",
    category: "Beauty",
    price: 399,
    duration: "5 Weeks",
    students: 85,
    rating: 4.7,
    image: "https://picsum.photos/seed/hair/600/400",
    description: "Comprehensive training in modern hair styling techniques, coloring, and salon management."
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    price: 349,
    duration: "8 Weeks",
    students: 230,
    rating: 4.9,
    image: "https://picsum.photos/seed/design/600/400",
    description: "Design beautiful, user-centered interfaces and master industry-standard tools like Figma."
  },
  {
    id: 5,
    title: "Business Communication",
    category: "Business",
    price: 199,
    duration: "3 Weeks",
    students: 310,
    rating: 4.6,
    image: "https://picsum.photos/seed/business/600/400",
    description: "Enhance your professional presence with effective communication and leadership skills."
  }
];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bookingCourse, setBookingCourse] = useState<any>(null);

  const categories = ["All", ...new Set(COURSES.map(c => c.category))];

  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Booking confirmed for ${bookingCourse.title}!`, {
      description: "We've sent the details to your email.",
    });
    setBookingCourse(null);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-gray-500">Find the perfect course to advance your career.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-6 py-3 rounded-2xl font-medium transition-all whitespace-nowrap",
                  selectedCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-1 text-yellow-500 mb-3">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                    <span className="text-sm text-gray-400">({course.students} students)</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock size={12} /> {course.duration}
                      </span>
                    </div>
                    <button 
                      onClick={() => setBookingCourse(course)}
                      className="btn-primary py-2 px-6 text-sm flex items-center gap-2"
                    >
                      Book Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBookingCourse(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setBookingCourse(null)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-2">Book Course</h2>
                <p className="text-gray-500 mb-8">You're booking: <span className="text-primary font-medium">{bookingCourse.title}</span></p>
                
                <form onSubmit={handleBook} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Course Fee</span>
                      <span className="font-bold">${bookingCourse.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-primary">
                      <span className="font-semibold">Total to Pay</span>
                      <span className="text-2xl font-bold">${bookingCourse.price}</span>
                    </div>
                  </div>
                  <button type="submit" className="w-full btn-primary py-4 text-lg shadow-xl shadow-primary/20">
                    Confirm Booking
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
