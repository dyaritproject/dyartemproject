import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="logo">Dyar Pty Ltd</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/hub">Hub & Blog</Link>
          <Link to="/referral" className="btn btn-accent">Make a Referral</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
