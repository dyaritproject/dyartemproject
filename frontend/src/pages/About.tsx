import { Heart, Shield, Users, Activity, Target, BookOpen, Handshake } from 'lucide-react';

const values = [
  {
    icon: <Users size={24} />,
    title: 'Person-Centred',
    desc: 'Every single decision, profile development, and support strategy starts and ends directly with the participant.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Shield size={24} />,
    title: 'Choice and Control',
    desc: 'We actively support informed decision-making, autonomy, and the dignity of risk for all individuals.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: <Heart size={24} />,
    title: 'Cultural Safety',
    desc: 'We acknowledge Whadjuk Country and ensure CALD, Aboriginal and Torres Strait Islander, and LGBTIQA+ identities are deeply respected in every interaction.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: <Activity size={24} />,
    title: 'Quality & Continuous Improvement',
    desc: 'Rigorous internal audits, an active Continuous Improvement Register, and transparent outcome measurements drive how we elevate our daily work.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Accountability',
    desc: 'Built on clear corporate governance, completely transparent reporting, and an open, active complaints culture where feedback is viewed as a gift.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: <Handshake size={24} />,
    title: 'Trauma-Informed',
    desc: 'We proactively recognise lived experience and understand the profound impact of trauma in our service design and delivery.',
    color: 'bg-violet-50 text-violet-600',
  },
];

const About = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-20">

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-white pt-20 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-6">
            <Shield size={15} />
            <span>An NDIS Service Provider · Whadjuk Noongar Country</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-500">DYAR</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            DYAR Pty Ltd is a dedicated Western Australian NDIS service provider operating proudly on Whadjuk Noongar Country.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 mt-16">

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Founded on <span className="text-[#6A0DAD]">lived experience</span> and clinical expertise.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              Our organisation was founded and is led by our Director and Service Manager, <strong>Mehdi Dabire</strong>. Mehdi has been an active professional across the Western Australian disability sector since 2014.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              Having worked hands-on across the entire spectrum of care — including roles as a Support Worker, Support Coordination specialist, and practising Behaviour Support Practitioner — Mehdi established DYAR to bridge the gap between high-level compliance and genuine, human-centric support.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At DYAR, we don't measure our success by billing hours; we measure it by the tangible progress, independence, and long-term satisfaction of the individuals we walk alongside.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-10 border border-purple-100">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-black text-sm">12+</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Years in the WA Disability Sector</div>
                  <div className="text-gray-500 text-sm">Hands-on experience across all levels of care</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-black text-sm">10</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">NDIS Service Domains</div>
                  <div className="text-gray-500 text-sm">Comprehensive support across the full NDIS spectrum</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">NDIS Registration Underway</div>
                  <div className="text-gray-500 text-sm">Certification audit by HDAA Australia · May 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              A community where people with disability are well connected to their communities, achieve their life goals, and improve their livelihood through high-quality, person-centred NDIS supports.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To deliver professional and accessible NDIS services to people with disability that promote participation, exercise choice and control, and maximise the benefit of each participant's NDIS plan to build skills, independence, and quality of life.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Core <span className="text-[#6A0DAD]">Values</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              These six pillars dictate how our teams interact, how our policies are written, and how our daily support services are executed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{i + 1}. {v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
