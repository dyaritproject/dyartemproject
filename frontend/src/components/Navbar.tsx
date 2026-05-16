import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-purple-700 font-bold" : "text-gray-600 hover:text-purple-600 font-medium";
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.jpg" 
              alt="Dyar Logo" 
              className="h-16 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = "https://ui-avatars.com/api/?name=Dyar+Pty+Ltd&background=6A0DAD&color=fff&size=128&font-size=0.33&bold=true";
              }}
            />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/services" className={isActive('/services')}>Services</Link>
            <Link to="/hub" className={isActive('/hub')}>Knowledge Hub</Link>
            <Link to="/referral" className="ml-4 inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 shadow-md transition-all active:scale-95">
              Make a Referral
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-purple-600 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-3 rounded-md text-base ${isActive('/')}`}>Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-3 rounded-md text-base ${isActive('/about')}`}>About</Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-3 rounded-md text-base ${isActive('/services')}`}>Services</Link>
            <Link to="/hub" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-3 rounded-md text-base ${isActive('/hub')}`}>Knowledge Hub</Link>
            <div className="pt-4 px-3">
              <Link to="/referral" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center justify-center px-6 py-3 text-base font-bold rounded-xl text-white bg-purple-600 shadow-md">
                Make a Referral
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
