import { motion } from 'motion/react';
import { Book, Clock, Award, Play, FileText, CheckCircle, ChevronRight, Layout, User, LogOut } from 'lucide-react';

const ENROLLED_COURSES = [
  {
    id: 1,
    title: "Professional Makeup Artistry",
    progress: 65,
    nextLesson: "Bridal Makeup Techniques",
    instructor: "Lilly Angel",
    image: "https://picsum.photos/seed/makeup/400/250"
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    progress: 20,
    nextLesson: "SEO Fundamentals",
    instructor: "Mark Thompson",
    image: "https://picsum.photos/seed/marketing/400/250"
  }
];

export default function StudentPortal() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-gray-50 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-64 space-y-2">
        <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
              JD
            </div>
            <div>
              <h3 className="font-bold">John Doe</h3>
              <p className="text-xs text-gray-400">Student</p>
            </div>
          </div>
          <nav className="space-y-1">
            {[
              { icon: <Layout size={18} />, label: "Dashboard", active: true },
              { icon: <Book size={18} />, label: "My Courses", active: false },
              { icon: <Award size={18} />, label: "Certificates", active: false },
              { icon: <User size={18} />, label: "Profile", active: false },
              { icon: <LogOut size={18} />, label: "Logout", active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  item.active ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                )}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, John!</h1>
            <p className="text-gray-500">You have 2 courses in progress.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Completed</p>
                <p className="font-bold">4 Courses</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Hours</p>
                <p className="font-bold">48.5h</p>
              </div>
            </div>
          </div>
        </header>

        {/* Continue Learning */}
        <section>
          <h2 className="text-xl font-bold mb-6">Continue Learning</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ENROLLED_COURSES.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col sm:flex-row"
              >
                <div className="w-full sm:w-48 h-48 sm:h-auto relative">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-xl">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold mb-1">{course.title}</h3>
                    <p className="text-xs text-gray-400 mb-4">Next: {course.nextLesson}</p>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2">
                      <div 
                        className="bg-primary h-full rounded-full transition-all duration-1000" 
                        style={{ width: `${course.progress}%` }} 
                      />
                    </div>
                    <p className="text-xs font-bold text-gray-500">{course.progress}% Complete</p>
                  </div>
                  <button className="mt-4 text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Resume Lesson <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {[
              { icon: <FileText size={18} />, text: "You completed 'Color Theory' quiz", time: "2 hours ago", color: "text-blue-500 bg-blue-50" },
              { icon: <Award size={18} />, text: "Earned 'Design Pro' badge", time: "Yesterday", color: "text-yellow-500 bg-yellow-50" },
              { icon: <Play size={18} />, text: "Started 'Advanced Shading' lesson", time: "2 days ago", color: "text-green-500 bg-green-50" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-6 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", activity.color)}>
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.text}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-300" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
