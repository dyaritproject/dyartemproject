import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, ShieldCheck, Plus, CheckCircle, Phone, Mail, AlertTriangle } from 'lucide-react';

const Home = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const services = [
    { name: 'Specialist Behaviour Support (PBS)', desc: 'Functional assessments and individualised PBS plans.' },
    { name: 'Specialist Support Coordination', desc: 'Level 2 & 3 coordination for complex support needs.' },
    { name: 'Specialist Disability Accommodation (SDA)', desc: 'Connecting participants to appropriate housing solutions.' },
    { name: 'Therapeutic Supports', desc: 'Allied health assessments and evidence-based interventions.' },
    { name: 'Psychosocial Recovery Coaching', desc: 'Supporting recovery and building resilience.' },
    { name: 'Early Childhood Supports', desc: 'Early intervention for children under 9 with developmental needs.' },
    { name: 'High Intensity Daily Personal Activities', desc: 'Complex personal care delivered by trained practitioners.' },
    { name: 'Community Access', desc: 'Group and individual participation in community life.' },
    { name: 'Core Support – Assistance with Daily Life', desc: 'Practical supports for everyday activities and independence.' },
    { name: 'Consumables & Transport', desc: 'Essential consumable supports and travel assistance.' },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5FF] via-white to-white pt-24 pb-20 border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6A0DAD 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-8 shadow-sm">
            <ShieldCheck size={16} />
            <span>An NDIS Service Provider</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Empowering Your Independence <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-[#6A0DAD]">Through Person-Centred Supports.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 font-medium mx-auto mb-10 leading-relaxed">
            Welcome to DYAR. We deliver professional, accessible, and high-quality services across Western Australia designed to help you exercise choice and control, build vital life skills, and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-xl shadow-purple-200 transition-all active:scale-95">
              Contact Our Team <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-[#6A0DAD] bg-purple-50 hover:bg-purple-100 border border-purple-100 transition-all active:scale-95">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Public Audit Notice */}
      <section className="py-10 bg-amber-50 border-y border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-white rounded-2xl border border-amber-300 shadow-md p-6 md:p-8">
            <div className="flex-shrink-0 mt-1">
              <AlertTriangle size={28} className="text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                Public Notice: Upcoming NDIS Certification Audit
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                DYAR Pty Ltd is currently undergoing the formal process of registration with the NDIS Quality and Safeguards Commission. As part of this legislative licensing pathway, our comprehensive certification audit will be conducted by <strong>HDAA Australia Pty Ltd</strong> (an Approved NDIS Quality Auditor) this coming <strong>Wednesday, 20 May 2026</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to absolute transparency and welcoming community feedback. If you are a participant, family member, carer, or community stakeholder and would like to provide feedback regarding our service delivery models, or wish to participate in a confidential interview with the audit team, please contact HDAA directly:
              </p>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-4 space-y-2">
                <p className="font-bold text-gray-800">Audit Body: HDAA Australia Pty Ltd</p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone size={15} className="text-amber-600" />
                  <a href="tel:1800601696" className="hover:text-amber-700 font-semibold">1800 601 696</a>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail size={15} className="text-amber-600" />
                  <a href="mailto:info@hdaau.com.au" className="hover:text-amber-700 font-semibold">info@hdaau.com.au</a>
                </p>
              </div>
              <p className="text-sm text-gray-500 italic">
                Please note: Participation is entirely voluntary. Any feedback provided directly to HDAA remains strictly confidential and will have absolutely no impact on the continuity, funding, or quality of your supports with DYAR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Flip Cards */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${flippedIndex !== null ? 'blur-[2px] opacity-30 pointer-events-none' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Core <span className="text-[#6A0DAD]">Expertise</span>.
            </h2>
            <p className="text-slate-900 max-w-3xl mx-auto text-lg leading-relaxed font-bold">
              Specialized services designed around your unique needs and goals.
              We provide the clinical expertise and coordination required to safely manage your NDIS plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto relative items-start" style={{ perspective: '1000px' }}>
            {/* Support Coordination Flip Card */}
            <div
              className={`relative transition-all duration-500 h-[480px] w-full cursor-pointer ${flippedIndex === 0 ? 'z-50' : 'z-10'} ${flippedIndex === 1 ? 'blur-[1px] opacity-40 pointer-events-none' : ''}`}
              style={{ transformStyle: 'preserve-3d', transform: flippedIndex === 0 ? 'rotateY(180deg)' : 'none' }}
              onClick={() => handleFlip(0)}
            >
              <div className="absolute inset-0 bg-white p-8 md:p-10 shadow-sm border border-gray-100 hover:border-purple-200 transition-all duration-500 flex flex-col items-center text-center justify-center rounded-3xl" style={{ backfaceVisibility: 'hidden' }}>
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold border shadow-sm tracking-wide bg-[#F0FDF4] text-[#166534] border-[#DCFCE7]">Level 2 &amp; 3</span>
                </div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-emerald-50 text-emerald-600 shadow-inner">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 px-4 leading-tight">Support Coordination</h3>
                <p className="text-sm text-slate-800 font-bold leading-relaxed max-w-xs mb-8">
                  Navigate the NDIS with confidence. We connect you with the right providers to bring your goals to life.
                </p>
                <button className="w-full py-4 bg-[#6A0DAD] text-white font-bold text-sm rounded-xl hover:bg-purple-800 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3">
                  <span>View Features</span><Plus size={16} />
                </button>
              </div>
              <div className="absolute inset-0 bg-white p-8 md:p-10 shadow-xl border border-purple-100 transition-all duration-500 flex flex-col items-center text-center rounded-3xl overflow-y-auto" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Seamless NDIS plan management.</h3>
                <div className="text-sm text-slate-900 leading-relaxed font-bold mb-8 flex-grow">
                  Our experienced Support Coordinators work alongside you to understand your plan, resolve points of crisis, and build your capacity to direct your own life.
                </div>
                <ul className="text-left w-full space-y-3 mb-8">
                  {['Budget Tracking', 'Provider Negotiation', 'Crisis Resolution', 'Plan Review Preparation'].map((item, i) => (
                    <li key={i} className="flex items-start text-sm font-medium text-gray-700">
                      <CheckCircle size={16} className="text-emerald-500 mt-0.5 mr-2 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto min-h-[44px] w-full py-3 flex items-center justify-center text-[12px] font-bold text-purple-700 hover:text-white hover:bg-purple-600 rounded-xl border border-purple-200 transition-all"
                  onClick={(e) => { e.stopPropagation(); handleFlip(0); }}>
                  Acknowledge &amp; close
                </button>
              </div>
            </div>

            {/* PBS Flip Card */}
            <div
              className={`relative transition-all duration-500 h-[480px] w-full cursor-pointer ${flippedIndex === 1 ? 'z-50' : 'z-10'} ${flippedIndex === 0 ? 'blur-[1px] opacity-40 pointer-events-none' : ''}`}
              style={{ transformStyle: 'preserve-3d', transform: flippedIndex === 1 ? 'rotateY(180deg)' : 'none' }}
              onClick={() => handleFlip(1)}
            >
              <div className="absolute inset-0 bg-white p-8 md:p-10 shadow-sm border border-gray-100 hover:border-purple-200 transition-all duration-500 flex flex-col items-center text-center justify-center rounded-3xl" style={{ backfaceVisibility: 'hidden' }}>
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold border shadow-sm tracking-wide bg-[#F3E8FF] text-[#6B21A8] border-[#E9D5FF]">Clinical Service</span>
                </div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-purple-50 text-purple-600 shadow-inner">
                  <Activity size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 px-4 leading-tight">Positive Behaviour Support</h3>
                <p className="text-sm text-slate-800 font-bold leading-relaxed max-w-xs mb-8">
                  Evidence-based strategies to improve quality of life and decrease behaviours of concern.
                </p>
                <button className="w-full py-4 bg-[#6A0DAD] text-white font-bold text-sm rounded-xl hover:bg-purple-800 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3">
                  <span>View Features</span><Plus size={16} />
                </button>
              </div>
              <div className="absolute inset-0 bg-white p-8 md:p-10 shadow-xl border border-purple-100 transition-all duration-500 flex flex-col items-center text-center rounded-3xl overflow-y-auto" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Functional Assessment &amp; Planning.</h3>
                <div className="text-sm text-slate-900 leading-relaxed font-bold mb-8 flex-grow">
                  Our practitioners use evidence-based frameworks to understand why challenging behaviours occur. We focus on proactive strategies that create supportive environments tailored entirely to the individual.
                </div>
                <ul className="text-left w-full space-y-3 mb-8">
                  {['Functional Behaviour Assessments', 'Individualised PBS Plans', 'Restrictive Practice Reduction', 'Stakeholder Training'].map((item, i) => (
                    <li key={i} className="flex items-start text-sm font-medium text-gray-700">
                      <CheckCircle size={16} className="text-purple-500 mt-0.5 mr-2 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto min-h-[44px] w-full py-3 flex items-center justify-center text-[12px] font-bold text-purple-700 hover:text-white hover:bg-purple-600 rounded-xl border border-purple-200 transition-all"
                  onClick={(e) => { e.stopPropagation(); handleFlip(1); }}>
                  Acknowledge &amp; close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our <span className="text-[#6A0DAD]">Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              DYAR delivers a comprehensive suite of professional supports tailored to your unique NDIS plan.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <CheckCircle size={16} className="text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-tight">{service.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-lg transition-all active:scale-95">
              Contact Our Team <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
