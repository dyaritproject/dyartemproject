import { Briefcase, Users, Heart } from 'lucide-react';

const WorkWithUs = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6">
            <Briefcase size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Work With Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join the DYAR team and help us empower participants across Whadjuk Country. We're always looking for passionate, driven professionals.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <Users className="text-purple-600 mb-4" size={32} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Workers</h2>
            <p className="text-gray-600 mb-6">Make a real difference in the community. We offer flexible rosters, above-award rates, and ongoing training.</p>
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors">
              View Openings
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <Heart className="text-rose-600 mb-4" size={32} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Allied Health</h2>
            <p className="text-gray-600 mb-6">Join our clinical team as a Behaviour Support Practitioner, OT, or Recovery Coach. Build your career with DYAR.</p>
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors">
              View Openings
            </button>
          </div>
        </div>

        <div className="bg-[#6A0DAD] rounded-3xl p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Send us your Resume</h2>
          <p className="text-purple-100 mb-8 max-w-xl mx-auto">
            Don't see a role that fits right now? We'd still love to hear from you. Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <a href="mailto:careers@dyar.com.au" className="inline-block px-8 py-4 bg-white text-[#6A0DAD] font-bold rounded-xl shadow hover:bg-gray-50 transition-colors">
            Email careers@dyar.com.au
          </a>
        </div>

      </div>
    </div>
  );
};

export default WorkWithUs;
