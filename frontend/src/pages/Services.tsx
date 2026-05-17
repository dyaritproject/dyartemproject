import { Users, Activity, CheckCircle, ArrowRight, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">Our NDIS Services</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">Providing specialized, compassionate, and evidence-based support to help you navigate your NDIS plan.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          
          {/* Support Coordination */}
          <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform group-hover:scale-110">
              <Users size={200} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 shrink-0 bg-purple-100 text-purple-600 rounded-3xl flex items-center justify-center">
                <Users size={40} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Coordination</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Navigating the NDIS can be complex. Our experienced Support Coordinators work alongside you to understand your plan, connect you with the right services, and build your capacity to direct your own life.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                  {['Understanding your NDIS plan and budget', 'Connecting with quality service providers', 'Resolving points of crisis', 'Preparing for plan reviews', 'Building capacity and independence'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={20} className="text-purple-500 mt-1 mr-3 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 shadow-md transition-all active:scale-95">
                  Request Support Coordination <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Positive Behaviour Support */}
          <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform group-hover:scale-110">
              <Activity size={200} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 shrink-0 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center">
                <Activity size={40} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Positive Behaviour Support (PBS)</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Our practitioners use evidence-based frameworks to understand why challenging behaviors occur. We focus on proactive strategies that improve quality of life and create supportive environments.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                  {['Comprehensive functional behavioural assessments', 'Development of individualised PBS plans', 'Training for families and support workers', 'Restrictive practice reduction strategies', 'Ongoing monitoring and evaluation'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={20} className="text-blue-500 mt-1 mr-3 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all active:scale-95">
                  Request PBS Services <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Software Services (Upcoming) */}
          <div className="group bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-dashed border-gray-200 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform group-hover:scale-110">
              <Laptop size={200} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 shrink-0 bg-slate-200 text-slate-500 rounded-3xl flex items-center justify-center">
                <Laptop size={40} />
              </div>
              <div className="flex-1 opacity-80">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">Software Services</h2>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold border tracking-wide bg-amber-50 text-amber-700 border-amber-200">Upcoming</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  We are developing specialized software solutions designed to streamline NDIS compliance, participant tracking, and operational management for providers.
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  {['Automated compliance reporting', 'Integrated participant management', 'Secure document storage', 'NDIS API integration'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={20} className="text-slate-400 mt-1 mr-3 shrink-0" />
                      <span className="text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
