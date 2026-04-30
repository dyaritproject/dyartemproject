import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, ShieldCheck, Heart, Calendar, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-8">
            <ShieldCheck size={16} />
            <span>NDIS Registered Provider</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Empowering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">NDIS Journey</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto mb-10">
            Dyar Pty Ltd specializes in comprehensive Support Coordination and Positive Behaviour Support (PBS) to help you achieve your goals and live a fulfilling life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-500/30 transition-all active:scale-95">
              Make a Referral <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-purple-700 bg-purple-50 hover:bg-purple-100 transition-all active:scale-95">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Expertise</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Specialized services designed around your unique needs and goals.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Service Card 1 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Coordination</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We help you understand and implement your NDIS plan, connecting you with the right providers to bring your goals to life with confidence.
                </p>
                <Link to="/services" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Positive Behaviour Support</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Evidence-based strategies to improve quality of life and decrease behaviors of concern, tailored entirely to the individual's environment.
                </p>
                <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Heart size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Person-Centered</h4>
              <p className="text-gray-600 leading-relaxed">Your goals, preferences, and values are at the heart of everything we do and every decision we make together.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <BookOpen size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based</h4>
              <p className="text-gray-600 leading-relaxed">We utilize the latest clinical research and proven methodologies to ensure our practice is both safe and effective.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Calendar size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Responsive Support</h4>
              <p className="text-gray-600 leading-relaxed">Timely communication and dedicated professionals ready to assist you when you need it most.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
