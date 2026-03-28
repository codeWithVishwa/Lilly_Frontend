import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import StudentPortal from './pages/StudentPortal';
import AdminPortal from './pages/AdminPortal';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/portal" element={<StudentPortal />} />
            <Route path="/admin" element={<AdminPortal />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" expand={false} richColors />
      </div>
    </Router>
  );
}
