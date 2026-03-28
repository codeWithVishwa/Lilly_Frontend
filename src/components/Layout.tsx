import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, User, Settings, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import logo from '@/src/asset/logo1.png';



const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Courses', path: '/courses' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Student Portal', path: '/portal' },
  { name: 'Admin', path: '/admin' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-gray-100 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Lilly Angel Training Logo" 
            className="w-18 h-18 object-contain group-hover:scale-110 transition-transform"
          />
          
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled ? (
                  location.pathname === item.path ? 'text-gray-700' : 'text-gray-500'
                ) : (
                  location.pathname === '/' ? (
                    location.pathname === item.path ? 'text-white' : 'text-gray-300'
                  ) : (
                    location.pathname === item.path ? 'text-primary' : 'text-gray-500'
                  )
                )
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/courses" className="btn-primary py-2 px-5 text-sm">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn('md:hidden', scrolled ? 'text-gray-700' : 'text-white')}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium',
                  location.pathname === '/' ? (
                    location.pathname === item.path ? 'text-primary' : 'text-gray-600'
                  ) : (
                    location.pathname === item.path ? 'text-primary' : 'text-gray-600'
                  )
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img 
              src={logo} 
              alt="Lilly Angel Training Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg font-bold tracking-tight">
              Lilly Angel <span className="text-primary">Training</span>
            </span>
          </Link>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Empowering the next generation of professionals through expert-led training and modern learning experiences.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-500">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/courses" className="hover:text-primary transition-colors">All Courses</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/portal" className="hover:text-primary transition-colors">Student Portal</Link></li>
            <li><Link to="/admin" className="hover:text-primary transition-colors">Admin Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-500">
            <li>hello@lillyangel.com</li>
            <li>+91 9876543210</li>
            <li>123 Training Way, Coimbatore City</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© 2026 Lilly Angel Training. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
