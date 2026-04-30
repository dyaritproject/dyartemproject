import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-purple-700 font-bold" : "text-gray-600 hover:text-purple-600 font-medium";
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <Link to="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-600">
          Dyar Pty Ltd
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/services" className={isActive('/services')}>Services</Link>
          <Link to="/hub" className={isActive('/hub')}>Knowledge Hub</Link>
          <Link to="/referral" className="ml-4 inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 shadow-md transition-all active:scale-95">
            Make a Referral
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
