import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Search, MoreVertical, Edit2, Trash2, Users, DollarSign, BookOpen, TrendingUp, X } from 'lucide-react';
import { toast } from 'sonner';

const INITIAL_COURSES = [
  { id: 1, title: "Professional Makeup Artistry", students: 120, revenue: 59880, status: "Active" },
  { id: 2, title: "Digital Marketing Masterclass", students: 450, revenue: 134550, status: "Active" },
  { id: 3, title: "Advanced Hair Styling", students: 85, revenue: 33915, status: "Draft" },
];

export default function AdminPortal() {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', price: '', category: '' });

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const course = {
      id: courses.length + 1,
      title: newCourse.title,
      students: 0,
      revenue: 0,
      status: "Draft"
    };
    setCourses([course, ...courses]);
    setShowAddModal(false);
    setNewCourse({ title: '', price: '', category: '' });
    toast.success("New course added successfully!");
  };

  const handleDelete = (id: number) => {
    setCourses(courses.filter(c => c.id !== id));
    toast.error("Course removed");
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500">Manage your courses and students.</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="btn-primary flex items-center gap-2 shadow-xl shadow-primary/20"
          >
            <Plus size={20} /> Add New Course
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Revenue", value: "$228,345", icon: <DollarSign />, color: "bg-green-50 text-green-600" },
            { label: "Total Students", value: "655", icon: <Users />, color: "bg-blue-50 text-blue-600" },
            { label: "Active Courses", value: "12", icon: <BookOpen />, color: "bg-primary/10 text-primary" },
            { label: "Growth", value: "+12.5%", icon: <TrendingUp />, color: "bg-yellow-50 text-yellow-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.color)}>
                {stat.icon}
              </div>
              <p className="text-sm text-gray-400 font-medium mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Course Management Table */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold">Course Management</h2>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-8 py-4 font-bold">Course Title</th>
                  <th className="px-8 py-4 font-bold">Students</th>
                  <th className="px-8 py-4 font-bold">Revenue</th>
                  <th className="px-8 py-4 font-bold">Status</th>
                  <th className="px-8 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-8 py-6">
                      <p className="font-bold text-gray-900">{course.title}</p>
                    </td>
                    <td className="px-8 py-6 text-gray-500 font-medium">{course.students}</td>
                    <td className="px-8 py-6 font-bold text-gray-900">${course.revenue.toLocaleString()}</td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold",
                        course.status === "Active" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"
                      )}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white hover:shadow-md rounded-lg text-gray-400 hover:text-primary transition-all">
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(course.id)}
                          className="p-2 hover:bg-white hover:shadow-md rounded-lg text-gray-400 hover:text-red-500 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 hover:bg-white hover:shadow-md rounded-lg text-gray-400 transition-all">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Course Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl"
          >
            <button 
              onClick={() => setShowAddModal(false)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
            <h2 className="text-3xl font-bold mb-8">Add New Course</h2>
            <form onSubmit={handleAddCourse} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Course Title</label>
                <input 
                  required
                  type="text" 
                  value={newCourse.title}
                  onChange={e => setNewCourse({...newCourse, title: e.target.value})}
                  placeholder="e.g. Advanced Photography"
                  className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Price ($)</label>
                  <input 
                    required
                    type="number" 
                    value={newCourse.price}
                    onChange={e => setNewCourse({...newCourse, price: e.target.value})}
                    placeholder="299"
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Category</label>
                  <select 
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-white"
                    value={newCourse.category}
                    onChange={e => setNewCourse({...newCourse, category: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Business">Business</option>
                    <option value="Design">Design</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full btn-primary py-4 text-lg mt-4">
                Create Course
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
