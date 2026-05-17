import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white pt-16 pb-0 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-1 tracking-tight">DYAR<span className="text-purple-400">.</span></h3>
            <p className="text-purple-300 text-xs font-bold mb-4 tracking-wide uppercase">An NDIS Service Provider</p>
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm mb-5">
              Delivering professional, accessible, and high-quality NDIS services across Western Australia to help you exercise choice and control, build life skills, and achieve your goals.
            </p>
            <div className="text-gray-400 text-xs space-y-1">
              <p><span className="text-gray-300 font-semibold">ABN:</span> 68 695 255 504</p>
              <p><span className="text-gray-300 font-semibold">NDIS Provider No.:</span> Pending (Application 4-LRFP0J8)</p>
              <p><span className="text-gray-300 font-semibold">Phone:</span> <a href="tel:0470540306" className="hover:text-white transition-colors">0470 540 306</a></p>
              <p><span className="text-gray-300 font-semibold">Email:</span> <a href="mailto:hello@dyar.com.au" className="hover:text-white transition-colors">hello@dyar.com.au</a></p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/hub" className="text-gray-400 hover:text-white transition-colors text-sm">Knowledge Hub</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors text-sm">Resources Hub</Link></li>
              <li><Link to="/referral" className="text-gray-400 hover:text-white transition-colors text-sm">Make a Referral</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Compliance</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors text-sm">Feedback &amp; Complaints</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors text-sm">Incident Reporting</Link></li>
            </ul>
            <div className="mt-8 text-xs text-gray-400 space-y-1">
              <p className="font-semibold text-gray-300">Registered Office:</p>
              <p>Unit 1, 136 Main Street</p>
              <p>Osborne Park WA 6017</p>
              <p className="font-semibold text-gray-300 mt-3">Outlet Address:</p>
              <p>Unit 14, 4 Ventnor Avenue</p>
              <p>West Perth WA 6005</p>
            </div>
          </div>
        </div>

        {/* Acknowledgement of Country */}
        <div className="border-t border-white/10 py-8">
          <div className="bg-white/5 rounded-2xl px-6 py-5 mb-6">
            <p className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-2">Acknowledgement of Country</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              DYAR acknowledges the <strong className="text-gray-300">Whadjuk Noongar people</strong> as the Traditional Custodians of the land on which we work and live, and pays respect to their Elders past, present, and emerging. We recognise Aboriginal and Torres Strait Islander peoples' continuing connection to land, water, and community.
            </p>
          </div>
          <div className="text-center text-gray-500 text-xs leading-relaxed">
            <p>&copy; {new Date().getFullYear()} DYAR Pty Ltd · ABN 68 695 255 504 · NDIS Provider No. Pending (Application 4-LRFP0J8)</p>
            <p className="mt-1">An NDIS Service Provider on Whadjuk Country · All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
