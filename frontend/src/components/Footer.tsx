import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white py-16 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Dyar Pty Ltd</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Empowering your NDIS journey with specialized Support Coordination and Positive Behaviour Support (PBS).
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/hub" className="text-gray-400 hover:text-white transition-colors">Information Hub</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Compliance</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Feedback & Complaints</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Incident Reporting</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Dyar Pty Ltd. All rights reserved. NDIS Registered Provider.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
