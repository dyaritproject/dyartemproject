import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, ShieldCheck, Plus, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      role: "NDIS Participant",
      quote: "Dyar Pty Ltd helped me understand my NDIS plan when I was completely overwhelmed. My Support Coordinator is always there when I need help, and I finally feel in control of my funding.",
      rating: 5
    },
    {
      id: 2,
      role: "Family Member",
      quote: "The Positive Behaviour Support team has been incredible. They didn't just give us a generic plan—they took the time to understand our family dynamic and gave us real, practical strategies.",
      rating: 5
    },
    {
      id: 3,
      role: "Allied Health Partner",
      quote: "Working with Dyar's Support Coordination team is always seamless. They are highly professional, responsive, and truly put the participant's well-being first.",
      rating: 5
    }
  ];

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Dot Humanity Style Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5FF] via-white to-white pt-24 pb-32 border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6A0DAD 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-8 shadow-sm">
            <ShieldCheck size={16} />
            <span>NDIS Registered Provider</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Empowering Your <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-[#6A0DAD]">NDIS Journey.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-600 font-medium mx-auto mb-10 leading-relaxed">
            Dyar Pty Ltd specializes in comprehensive Support Coordination and Positive Behaviour Support (PBS) to help you achieve your goals and live a fulfilling life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-xl shadow-purple-200 transition-all active:scale-95">
              Make a Referral <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-[#6A0DAD] bg-purple-50 hover:bg-purple-100 border border-purple-100 transition-all active:scale-95">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Dot Humanity Style Services Section (Flip Cards) */}
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
              {/* Front */}
              <div className="absolute inset-0 bg-white p-8 md:p-10 shadow-sm border border-gray-100 hover:border-purple-200 transition-all duration-500 flex flex-col items-center text-center justify-center rounded-3xl" style={{ backfaceVisibility: 'hidden' }}>
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold border shadow-sm tracking-wide bg-[#F0FDF4] text-[#166534] border-[#DCFCE7]">
                    Level 2 & 3
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-emerald-50 text-emerald-600 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 px-4 leading-tight">Support Coordination</h3>
                <p className="text-sm text-slate-800 font-bold leading-relaxed max-w-xs mb-8">
                  Navigate the NDIS with confidence. We connect you with the right providers to bring your goals to life.
                </p>
                <div className="w-full space-y-4">
                  <button className="w-full py-4 bg-[#6A0DAD] text-white font-bold text-sm rounded-xl hover:bg-purple-800 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3">
                    <span>View Features</span>
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-white p-8 md:p-10 shadow-xl border border-purple-100 transition-all duration-500 flex flex-col items-center text-center rounded-3xl overflow-y-auto" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Seamless NDIS plan management.</h3>
                <div className="text-sm text-slate-900 leading-relaxed font-bold mb-8 flex-grow">
                  Our experienced Support Coordinators work alongside you to understand your plan, resolve points of crisis, and build your capacity to direct your own life. We focus on connecting you with quality, verified providers in your local area.
                </div>
                <ul className="text-left w-full space-y-3 mb-8">
                  {['Budget Tracking', 'Provider Negotiation', 'Crisis Resolution', 'Plan Review Preparation'].map((item, i) => (
                    <li key={i} className="flex items-start text-sm font-medium text-gray-700">
                      <CheckCircle size={16} className="text-emerald-500 mt-0.5 mr-2 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button 
                  className="mt-auto min-h-[44px] w-full py-3 flex items-center justify-center text-[12px] font-bold text-purple-700 hover:text-white hover:bg-purple-600 rounded-xl border border-purple-200 transition-all"
                  onClick={(e) => { e.stopPropagation(); handleFlip(0); }}
                >
                  Acknowledge & close
                </button>
              </div>
            </div>

            {/* PBS Flip Card */}
            <div 
              className={`relative transition-all duration-500 h-[480px] w-full cursor-pointer ${flippedIndex === 1 ? 'z-50' : 'z-10'} ${flippedIndex === 0 ? 'blur-[1px] opacity-40 pointer-events-none' : ''}`}
              style={{ transformStyle: 'preserve-3d', transform: flippedIndex === 1 ? 'rotateY(180deg)' : 'none' }}
              onClick={() => handleFlip(1)}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-white p-8 md:p-10 shadow-sm border border-gray-100 hover:border-purple-200 transition-all duration-500 flex flex-col items-center text-center justify-center rounded-3xl" style={{ backfaceVisibility: 'hidden' }}>
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold border shadow-sm tracking-wide bg-[#F3E8FF] text-[#6B21A8] border-[#E9D5FF]">
                    Clinical Service
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-purple-50 text-purple-600 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Activity size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 px-4 leading-tight">Positive Behaviour Support</h3>
                <p className="text-sm text-slate-800 font-bold leading-relaxed max-w-xs mb-8">
                  Evidence-based strategies to improve quality of life and decrease behaviors of concern.
                </p>
                <div className="w-full space-y-4">
                  <button className="w-full py-4 bg-[#6A0DAD] text-white font-bold text-sm rounded-xl hover:bg-purple-800 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3">
                    <span>View Features</span>
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-white p-8 md:p-10 shadow-xl border border-purple-100 transition-all duration-500 flex flex-col items-center text-center rounded-3xl overflow-y-auto" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Functional Assessment & Planning.</h3>
                <div className="text-sm text-slate-900 leading-relaxed font-bold mb-8 flex-grow">
                  Our practitioners use evidence-based frameworks to understand why challenging behaviors occur. We focus on proactive strategies that improve quality of life and create supportive environments tailored entirely to the individual.
                </div>
                <ul className="text-left w-full space-y-3 mb-8">
                  {['Functional Behaviour Assessments', 'Individualised PBS Plans', 'Restrictive Practice Reduction', 'Stakeholder Training'].map((item, i) => (
                    <li key={i} className="flex items-start text-sm font-medium text-gray-700">
                      <CheckCircle size={16} className="text-purple-500 mt-0.5 mr-2 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button 
                  className="mt-auto min-h-[44px] w-full py-3 flex items-center justify-center text-[12px] font-bold text-purple-700 hover:text-white hover:bg-purple-600 rounded-xl border border-purple-200 transition-all"
                  onClick={(e) => { e.stopPropagation(); handleFlip(1); }}
                >
                  Acknowledge & close
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dot Humanity Style Testimonials Section */}
      <section className="py-24 bg-slate-50 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6A0DAD 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Trusted by our community.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">We focus on providing genuine, person-centered support that makes a measurable difference.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-6 -left-10 text-purple-200 hidden md:block">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" /></svg>
            </div>
            <div className="bg-white rounded-3xl shadow-xl border-t-4 border-[#6A0DAD] p-10 md:p-14 relative transition-all duration-300 min-h-[300px] flex flex-col items-center justify-center text-center">
              <div className="absolute top-0 right-0 mt-6 mr-6 flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                <CheckCircle size={14} className="text-green-600" />
                <span className="text-[11px] font-bold text-green-800 tracking-wide">Verified Feedback</span>
              </div>
              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-xl text-gray-800 font-medium leading-relaxed italic font-serif">"{testimonials[activeTestimonial].quote}"</blockquote>
              <div className="mt-8 w-full border-t border-gray-100 pt-6">
                <div className="font-bold text-[#6A0DAD] text-lg tracking-wide">{testimonials[activeTestimonial].role}</div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8 px-4">
              <button onClick={prevTestimonial} className="group flex items-center gap-3 text-gray-700 hover:text-purple-700 transition-colors font-bold text-sm">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 group-hover:border-purple-200 flex items-center justify-center shadow-sm transition-all"><ChevronLeft size={20} /></div>
                Previous
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'w-8 bg-[#6A0DAD]' : 'w-2 bg-gray-300'}`}></div>
                ))}
              </div>
              <button onClick={nextTestimonial} className="group flex items-center gap-3 text-gray-700 hover:text-purple-700 transition-colors font-bold text-sm">
                Next
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 group-hover:border-purple-200 flex items-center justify-center shadow-sm transition-all"><ChevronRight size={20} /></div>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
