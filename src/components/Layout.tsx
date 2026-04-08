import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, MapPin, Palmtree } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isHome ? "bg-transparent" : "bg-maui-paper/80 backdrop-blur-md border-b border-maui-ink/5"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Palmtree className={cn("w-8 h-8 transition-colors", isHome ? "text-white" : "text-maui-blue")} />
          <span className={cn(
            "font-serif text-2xl tracking-tight transition-colors",
            isHome ? "text-white" : "text-maui-ink"
          )}>
            Maui Resort Guide
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Regions', 'Beaches', 'Hotels', 'Blog'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium tracking-widest uppercase transition-colors hover:opacity-70",
                isHome ? "text-white" : "text-maui-ink"
              )}
            >
              {item}
            </Link>
          ))}
          <button className={cn(
            "p-2 rounded-full transition-colors",
            isHome ? "text-white hover:bg-white/10" : "text-maui-ink hover:bg-maui-ink/5"
          )}>
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2", isHome ? "text-white" : "text-maui-ink")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-maui-paper border-b border-maui-ink/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Regions', 'Beaches', 'Hotels', 'Blog'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-lg font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-maui-ink text-maui-paper py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-serif mb-6">Maui Resort Guide</h2>
          <p className="text-maui-paper/60 max-w-md leading-relaxed">
            The definitive guide to luxury Maui travel. Curated by locals, designed for the discerning traveler. 
            Discover the island's most exclusive regions, pristine beaches, and world-class accommodations.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest mb-6 opacity-50">Explore</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/regions" className="hover:opacity-70">All Regions</Link></li>
            <li><Link to="/beaches" className="hover:opacity-70">Beaches Guide</Link></li>
            <li><Link to="/hotels" className="hover:opacity-70">Luxury Hotels</Link></li>
            <li><Link to="/blog" className="hover:opacity-70">Travel Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest mb-6 opacity-50">Connect</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:opacity-70">Instagram</a></li>
            <li><a href="#" className="hover:opacity-70">Facebook</a></li>
            <li><a href="#" className="hover:opacity-70">Newsletter</a></li>
            <li><a href="#" className="hover:opacity-70">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-maui-paper/10 flex flex-col md:row justify-between items-center gap-4 text-xs opacity-40">
        <p>© 2024 Maui Resort Guide. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
