import { Target, Heart, Shield, Users, Activity } from 'lucide-react';

const About = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-20">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">About Dyar Pty Ltd</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">Committed to empowering individuals through dedicated NDIS support services.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 mt-8">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide exceptional Support Coordination and Positive Behaviour Support that empowers NDIS participants to achieve their goals, overcome barriers, and live fulfilling, independent lives.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              An inclusive community where every individual has the resources, support, and opportunities to realize their full potential and participate meaningfully in society.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Dyar?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 text-center hover:bg-slate-100 transition-colors">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">NDIS Registered</h3>
              <p className="text-gray-600">We adhere to the highest standards of the NDIS Quality and Safeguards Commission.</p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 text-center hover:bg-slate-100 transition-colors">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Person-Centered</h3>
              <p className="text-gray-600">Your goals, choices, and preferences are at the heart of everything we do.</p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 text-center hover:bg-slate-100 transition-colors">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based</h3>
              <p className="text-gray-600">Our PBS practitioners use proven frameworks to deliver effective and lasting outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
